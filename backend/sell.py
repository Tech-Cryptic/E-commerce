from flask import Blueprint, request, jsonify
from database import get_db
from email_service import send_sell_confirmation
import threading

sell_bp = Blueprint('sell', __name__)

@sell_bp.route('/sell', methods=['POST'])
def submit_sell_request():
    data = request.get_json()

    brand = data.get('brand', '').strip()
    model = data.get('model', '').strip()
    name  = data.get('name', '').strip()
    phone = data.get('phone', '').strip()

    if not brand or not model or not name or not phone:
        return jsonify({'error': 'brand, model, name and phone are required'}), 400

    db = get_db()
    db.execute(
        '''INSERT INTO sell_requests
           (device_type, condition, brand, model, storage, name, phone, email, notes)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''',
        (
            data.get('deviceType'),
            data.get('condition'),
            brand,
            model,
            data.get('storage'),
            name,
            phone,
            data.get('email'),
            data.get('notes'),
        )
    )
    db.commit()
    db.close()

    # Send confirmation email in background
    customer_email = data.get('email', '').strip()
    if customer_email:
        def _notify():
            send_sell_confirmation(
                customer_email=customer_email,
                customer_name=name,
                device=data.get('deviceType', 'Device'),
                brand=brand,
                model=model,
            )
        threading.Thread(target=_notify, daemon=True).start()

    return jsonify({'message': 'Sell request received'}), 201


@sell_bp.route('/sell', methods=['GET'])
def get_sell_requests():
    db = get_db()
    rows = db.execute(
        'SELECT * FROM sell_requests ORDER BY created_at DESC'
    ).fetchall()
    db.close()
    return jsonify([dict(r) for r in rows]), 200
