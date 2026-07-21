from flask import Blueprint, request, jsonify
from database import get_db
from email_service import send_order_confirmation
import threading

orders_bp = Blueprint('orders', __name__)

# ── SAVE ORDER ───────────────────────────────────────────
@orders_bp.route('/orders', methods=['POST'])
def create_order():
    data = request.get_json()

    user_id          = data.get('userId')
    total_amount     = data.get('total')
    payment_ref      = data.get('paymentRef')
    delivery_address = data.get('address')
    items            = data.get('items', [])

    if not user_id or not total_amount or not items:
        return jsonify({'error': 'Missing required order data'}), 400

    db = get_db()

    # save order
    cursor = db.execute(
        '''INSERT INTO orders (user_id, total_amount, payment_ref, delivery_address)
           VALUES (?, ?, ?, ?)''',
        (user_id, total_amount, payment_ref, delivery_address)
    )
    order_id = cursor.lastrowid

    # save each item
    for item in items:
        db.execute(
            '''INSERT INTO order_items
               (order_id, product_id, product_name, product_image, brand, condition, quantity, unit_price)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)''',
            (
                order_id,
                item.get('id'),
                item.get('name'),
                item.get('image'),
                item.get('brand'),
                item.get('condition'),
                item.get('quantity'),
                item.get('price'),
            )
        )

    db.commit()

    # Look up customer email to send confirmation
    user_row = db.execute('SELECT full_name, email FROM users WHERE id = ?', (user_id,)).fetchone()
    db.close()

    # Fire email in background so response isn't delayed
    if user_row and user_row['email']:
        def _notify():
            send_order_confirmation(
                customer_email=user_row['email'],
                customer_name=user_row['full_name'],
                order_ref=payment_ref or f'GG-{order_id}',
                total=total_amount,
                items=items,
                address=delivery_address or '',
            )
        threading.Thread(target=_notify, daemon=True).start()

    return jsonify({
        'message': 'Order saved successfully',
        'orderId': order_id
    }), 201


# ── GET ORDER HISTORY ────────────────────────────────────
@orders_bp.route('/orders/<int:user_id>', methods=['GET'])
def get_orders(user_id):
    db = get_db()

    orders = db.execute(
        'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC',
        (user_id,)
    ).fetchall()

    result = []
    for order in orders:
        items = db.execute(
            'SELECT * FROM order_items WHERE order_id = ?',
            (order['id'],)
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
def track_order(payment_ref):
    db = get_db()

    order = db.execute(
        'SELECT * FROM orders WHERE payment_ref = ?', (payment_ref,)
    ).fetchone()

    if not order:
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
def update_order_status(order_id):
    data = request.get_json()
    new_status = data.get('status', '').strip()
    allowed = ['Paid', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled']
    if new_status not in allowed:
        return jsonify({'error': f'Status must be one of: {", ".join(allowed)}'}), 400

    db = get_db()
    db.execute('UPDATE orders SET status = ? WHERE id = ?', (new_status, order_id))
    db.commit()
    db.close()
    return jsonify({'message': 'Status updated', 'status': new_status}), 200


# ── ADMIN STATS ──────────────────────────────────────────
@orders_bp.route('/admin/stats', methods=['GET'])
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
