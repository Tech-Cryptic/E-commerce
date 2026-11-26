import secrets
import sqlite3
import threading

from flask import Blueprint, request, jsonify, current_app, g, session

from database import get_db, db_session, sanitize_string, sanitize_order_data
from email_service import send_order_confirmation
from payment import verify_payment
from pricing import PricingError, calculate_totals, make_quote, load_quote
from security import login_required, admin_required, rate_limit

orders_bp = Blueprint('orders', __name__)

# Maximum request body size: 16MB to prevent DoS via large payloads
# Educational: protects against oversized JSON payloads that could exhaust memory
MAX_PAYLOAD_BYTES = 16 * 1024 * 1024


# ── PRICED CHECKOUT QUOTE ────────────────────────────────
@orders_bp.route('/checkout/quote', methods=['POST'])
@rate_limit(30, 60)
@login_required
def checkout_quote():
    if request.content_length and request.content_length > MAX_PAYLOAD_BYTES:
        return jsonify({'error': 'Request payload too large'}), 413

    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({'error': 'Invalid JSON payload'}), 400

    try:
        totals = calculate_totals(data.get('items'), data.get('promoCode', ''))
    except PricingError as exc:
        return jsonify({'error': str(exc)}), 400

    reference = 'GG-' + secrets.token_hex(8).upper()
    quote_token = make_quote(g.current_user['id'], totals, reference)

    return jsonify({
        **totals,
        'quoteToken': quote_token,
        'reference': reference,
        'amountKobo': round(totals['total'] * 100),
    }), 200


# ── SAVE ORDER ───────────────────────────────────────────
@orders_bp.route('/orders', methods=['POST'])
@rate_limit(20, 60)
@login_required
def create_order():
    if request.content_length and request.content_length > MAX_PAYLOAD_BYTES:
        return jsonify({'error': 'Request payload too large'}), 413

    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({'error': 'Invalid JSON payload'}), 400

    quote_token    = sanitize_string(data.get('quoteToken'), 16_000)
    payment_ref    = sanitize_string(data.get('paymentRef'), 100)
    delivery_address = sanitize_string(data.get('address'), 500)

    if not quote_token or not payment_ref or not delivery_address:
        return jsonify({'error': 'Missing required order data'}), 400

    try:
        quote = load_quote(quote_token)
    except PricingError as exc:
        return jsonify({'error': str(exc)}), 400

    if quote.get('userId') != g.current_user['id']:
        return jsonify({'error': 'This checkout session belongs to another account'}), 403
    if quote.get('reference') != payment_ref:
        return jsonify({'error': 'Payment reference does not match this checkout session'}), 400

    quote_items = quote.get('items')
    total_amount = quote.get('total')
    if not isinstance(quote_items, list) or not quote_items or not isinstance(total_amount, (int, float)):
        return jsonify({'error': 'Invalid checkout session'}), 400

    verified, verification_status, verification_message = verify_payment(payment_ref, total_amount)
    status = 'Paid' if verification_status == 'Paid' else 'Pending'

    sanitised_items = sanitize_order_data([{
        'id': item.get('productId'),
        'name': item.get('name'),
        'image': item.get('image'),
        'brand': item.get('brand'),
        'condition': item.get('condition'),
        'quantity': item.get('quantity'),
        'price': item.get('unitPrice'),
    } for item in quote_items])

    if not sanitised_items:
        return jsonify({'error': 'Invalid items in checkout session'}), 400

    user_id = g.current_user['id']
    try:
        with db_session() as db:
            user_row = db.execute(
                'SELECT full_name, email FROM users WHERE id = ?', (user_id,)
            ).fetchone()
            if not user_row:
                return jsonify({'error': 'Account not found'}), 404

            cursor = db.execute(
                '''INSERT INTO orders (user_id, total_amount, status, payment_ref, delivery_address)
                   VALUES (?, ?, ?, ?, ?)''',
                (user_id, total_amount, status, payment_ref, delivery_address)
            )
            order_id = cursor.lastrowid

            for item in sanitised_items:
                db.execute(
                    '''INSERT INTO order_items
                       (order_id, product_id, product_name, product_image, brand, condition, quantity, unit_price)
                       VALUES (?, ?, ?, ?, ?, ?, ?, ?)''',
                    (
                        order_id,
                        item['product_id'],
                        item['product_name'],
                        item['product_image'],
                        item['brand'],
                        item['condition'],
                        item['quantity'],
                        item['price'],
                    )
                )
    except sqlite3.Error:
        current_app.logger.exception('Failed to save order')
        return jsonify({'error': 'Could not save your order. Please try again.'}), 500

    if status == 'Paid' and user_row['email']:
        def _notify():
            send_order_confirmation(
                customer_email=user_row['email'],
                customer_name=user_row['full_name'],
                order_ref=payment_ref,
                total=total_amount,
                items=sanitised_items,
                address=delivery_address,
            )
        threading.Thread(target=_notify, daemon=True).start()

    return jsonify({
        'message': 'Order saved successfully' if status == 'Paid'
                   else 'Payment is being verified; your order is saved',
        'orderId': order_id,
        'paymentRef': payment_ref,
        'status': status,
        'total': total_amount,
        'verified': verified,
        'verificationMessage': verification_message,
    }), 201


# ── GET ORDER HISTORY ────────────────────────────────────
@orders_bp.route('/orders/<int:user_id>', methods=['GET'])
@login_required
def get_orders(user_id):
    if user_id != g.current_user['id'] and not session.get('is_admin'):
        return jsonify({'error': 'You may only view your own orders'}), 403

    db = get_db()

    orders = db.execute(
        'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC',
        (user_id,)
    ).fetchall()

    result = []
    for order in orders:
        items = db.execute(
            'SELECT * FROM order_items WHERE order_id = ?', (order['id'],)
        ).fetchall()

        result.append({
            'id': order['id'],
            'total': order['total_amount'],
            'status': order['status'],
            'paymentRef': order['payment_ref'],
            'address': order['delivery_address'],
            'date': order['created_at'],
            'items': [{
                'id': item['product_id'],
                'name': item['product_name'],
                'image': item['product_image'],
                'brand': item['brand'],
                'condition': item['condition'],
                'quantity': item['quantity'],
                'price': item['unit_price'],
            } for item in items]
        })

    db.close()
    return jsonify(result), 200


# ── TRACK ORDER BY PAYMENT REF ───────────────────────────
@orders_bp.route('/orders/track/<string:payment_ref>', methods=['GET'])
@rate_limit(30, 60)
@login_required
def track_order(payment_ref):
    db = get_db()

    order = db.execute(
        'SELECT * FROM orders WHERE payment_ref = ?', (payment_ref,)
    ).fetchone()

    if not order or (order['user_id'] != g.current_user['id'] and not session.get('is_admin')):
        db.close()
        return jsonify({'error': 'Order not found'}), 404

    items = db.execute(
        'SELECT * FROM order_items WHERE order_id = ?', (order['id'],)
    ).fetchall()

    db.close()

    return jsonify({
        'id': order['id'],
        'paymentRef': order['payment_ref'],
        'total': order['total_amount'],
        'status': order['status'],
        'address': order['delivery_address'],
        'date': order['created_at'],
        'items': [{
            'id': item['product_id'],
            'name': item['product_name'],
            'image': item['product_image'],
            'brand': item['brand'],
            'condition': item['condition'],
            'quantity': item['quantity'],
            'price': item['unit_price'],
        } for item in items],
    }), 200


# ── UPDATE ORDER STATUS ──────────────────────────────────
@orders_bp.route('/orders/<int:order_id>/status', methods=['PATCH'])
@admin_required
def update_order_status(order_id):
    data = request.get_json()
    new_status = data.get('status', '').strip()
    allowed = ['Paid', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled']
    if new_status not in allowed:
        return jsonify({'error': f"Status must be one of: {', '.join(allowed)}"}), 400

    db = get_db()
    db.execute('UPDATE orders SET status = ? WHERE id = ?', (new_status, order_id))
    db.commit()
    db.close()
    return jsonify({'message': 'Status updated', 'status': new_status}), 200


# ── ADMIN STATS ──────────────────────────────────────────
@orders_bp.route('/admin/stats', methods=['GET'])
@admin_required
def admin_stats():
    db = get_db()
    total_orders  = db.execute('SELECT COUNT(*) FROM orders').fetchone()[0]
    total_revenue = db.execute('SELECT SUM(total_amount) FROM orders').fetchone()[0] or 0
    total_users   = db.execute('SELECT COUNT(*) FROM users').fetchone()[0]
    total_sells   = db.execute('SELECT COUNT(*) FROM sell_requests').fetchone()[0]
    all_orders = db.execute(
        '''SELECT o.id, o.total_amount, o.status, o.payment_ref, o.delivery_address, o.created_at,
                  u.full_name, u.email, u.phone
           FROM orders o JOIN users u ON o.user_id = u.id
           ORDER BY o.created_at DESC'''
    ).fetchall()
    sell_reqs = db.execute('SELECT * FROM sell_requests ORDER BY created_at DESC').fetchall()
    db.close()

    return jsonify({
        'stats': {
            'totalOrders':  total_orders,
            'totalRevenue': total_revenue,
            'totalUsers':   total_users,
            'totalSells':   total_sells,
        },
        'orders': [{
            'id': o['id'],
            'paymentRef': o['payment_ref'],
            'total': o['total_amount'],
            'status': o['status'],
            'address': o['delivery_address'],
            'date': o['created_at'],
            'customerName': o['full_name'],
            'customerEmail': o['email'],
            'customerPhone': o['phone'],
        } for o in all_orders],
        'sellRequests': [dict(s) for s in sell_reqs],
    }), 200
