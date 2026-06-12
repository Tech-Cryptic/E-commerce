from flask import Blueprint, request, jsonify, session
from database import get_db
import bcrypt

auth_bp = Blueprint('auth', __name__)

# ── SIGNUP ──────────────────────────────────────────────
@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    full_name = data.get('fullName', '').strip()
    email     = data.get('email', '').strip().lower()
    phone     = data.get('phone', '').strip()
    password  = data.get('password', '')

    # basic validation
    if not full_name or not email or not phone or not password:
        return jsonify({'error': 'All fields are required'}), 400

    if len(password) < 6:
        return jsonify({'error': 'Password must be at least 6 characters'}), 400

    db = get_db()

    # check if email already exists
    existing = db.execute(
        'SELECT id FROM users WHERE email = ?', (email,)
    ).fetchone()

    if existing:
        db.close()
        return jsonify({'error': 'An account with this email already exists'}), 409

    # hash the password — never store plain text
    password_hash = bcrypt.hashpw(
        password.encode('utf-8'),
        bcrypt.gensalt()
    ).decode('utf-8')

    # save user to database
    db.execute(
        'INSERT INTO users (full_name, email, phone, password_hash) VALUES (?, ?, ?, ?)',
        (full_name, email, phone, password_hash)
    )
    db.commit()

    # get the new user's id
    user = db.execute(
        'SELECT * FROM users WHERE email = ?', (email,)
    ).fetchone()
    db.close()

    return jsonify({
        'message': 'Account created successfully',
        'user': {
            'id': user['id'],
            'fullName': user['full_name'],
            'email': user['email'],
            'phone': user['phone'],
        }
    }), 201


# ── LOGIN ────────────────────────────────────────────────
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    email    = data.get('email', '').strip().lower()
    password = data.get('password', '')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    db = get_db()
    user = db.execute(
        'SELECT * FROM users WHERE email = ?', (email,)
    ).fetchone()
    db.close()

    if not user:
        return jsonify({'error': 'No account found with this email'}), 404

    # check password against the hash
    password_matches = bcrypt.checkpw(
        password.encode('utf-8'),
        user['password_hash'].encode('utf-8')
    )

    if not password_matches:
        return jsonify({'error': 'Incorrect password'}), 401

    return jsonify({
        'message': 'Login successful',
        'user': {
            'id': user['id'],
            'fullName': user['full_name'],
            'email': user['email'],
            'phone': user['phone'],
        }
    }), 200