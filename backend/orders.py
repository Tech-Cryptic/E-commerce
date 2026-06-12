from flask import Blueprint, request, jsonify
from database import get_db

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
    db.close()

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