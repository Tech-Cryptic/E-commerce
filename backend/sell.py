import re
import threading

from flask import Blueprint, request, jsonify

from database import get_db, db_session, sanitize_phone, sanitize_string
from email_service import send_sell_confirmation
from security import admin_required, rate_limit

sell_bp = Blueprint('sell', __name__)

EMAIL_PATTERN = re.compile(r'^[^@\s]+@[^@\s]+\.[^@\s]+$')


@sell_bp.route('/sell', methods=['POST'])
@rate_limit(3, 60)
def submit_sell_request():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({'error': 'Invalid JSON payload'}), 400

    brand = sanitize_string(data.get('brand'), 100)
    model = sanitize_string(data.get('model'), 100)
    name  = sanitize_string(data.get('name'), 100)
    phone = sanitize_string(data.get('phone'), 30)

    if not brand or not model or not name or not phone:
        return jsonify({'error': 'brand, model, name and phone are required'}), 400

    sanitised_phone = sanitize_phone(phone)
    if len(sanitised_phone) < 8:
        return jsonify({'error': 'A valid phone number is required'}), 400

    email = sanitize_string(data.get('email'), 254)
    if email and not EMAIL_PATTERN.match(email):
        return jsonify({'error': 'A valid email address is required'}), 400

    with db_session() as db:
        db.execute(
            '''INSERT INTO sell_requests
               (device_type, condition, brand, model, storage, name, phone, email, notes)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''',
            (
                sanitize_string(data.get('deviceType'), 50),
                sanitize_string(data.get('condition'), 50),
                brand,
                model,
                sanitize_string(data.get('storage'), 50),
                name,
                sanitised_phone,
                email,
                sanitize_string(data.get('notes'), 1000),
            )
        )

    # Send confirmation email in background
    customer_email = email
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
@admin_required
def get_sell_requests():
    db = get_db()
    try:
        rows = db.execute(
            'SELECT * FROM sell_requests ORDER BY created_at DESC'
        ).fetchall()
        return jsonify([dict(r) for r in rows]), 200
    finally:
        db.close()
