import re
import secrets

import bcrypt
from flask import Blueprint, request, jsonify, session

from database import get_db, db_session
from security import current_user, check_admin_password, rate_limit

auth_bp = Blueprint('auth', __name__)

EMAIL_PATTERN = re.compile(r'^[^@\s]+@[^@\s]+\.[^@\s]+$')


# ── SIGNUP ──────────────────────────────────────────────
@auth_bp.route('/signup', methods=['POST'])
@rate_limit(10, 60)
def signup():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({'error': 'Invalid JSON payload'}), 400

    full_name = str(data.get('fullName', '')).strip()
    email     = str(data.get('email', '')).strip().lower()
    phone     = str(data.get('phone', '')).strip()
    password  = data.get('password', '')
    if not isinstance(password, str):
        return jsonify({'error': 'Invalid password'}), 400

    # ── Enhanced validation ─────────────────────────────
    # Full name must be at least 2 characters
    if not full_name or len(full_name) < 2:
        return jsonify({'error': 'Full name must be at least 2 characters'}), 400

    # Email must contain @ and a domain
    if not email or not EMAIL_PATTERN.fullmatch(email):
        return jsonify({'error': 'Valid email is required'}), 400

    # Phone must be at least 8 digits (Nigeria format: 080..., 090..., etc.)
    digits_only = ''.join(filter(str.isdigit, phone))
    if not phone or len(digits_only) < 8:
        return jsonify({'error': 'Valid phone number is required (Nigeria format)'}), 400

    # Password policy: minimum 8 characters, mix of types
    # Educational: Strong passwords prevent unauthorized account access
    if not password or len(password) < 8:
        return jsonify({
            'error': 'Password must be at least 8 characters and contain 3 of: uppercase, lowercase, number, symbol'
        }), 400
    # Check at least 3 character types present
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_symbol = any(not c.isalnum() for c in password)
    char_types = sum([has_upper, has_lower, has_digit, has_symbol])
    if char_types < 3:
        return jsonify({
            'error': 'Password must contain 3 of: uppercase, lowercase, number, symbol'
        }), 400

    # hash the password — never store plain text
    password_hash = bcrypt.hashpw(
        password.encode('utf-8'), bcrypt.gensalt()
    ).decode('utf-8')

    try:
        with db_session() as db:
            # check if email already exists
            existing = db.execute(
                'SELECT id FROM users WHERE email = ?', (email,)
            ).fetchone()

            if existing:
                return jsonify({'error': 'An account with this email already exists'}), 409

            cursor = db.execute(
                'INSERT INTO users (full_name, email, phone, password_hash) VALUES (?, ?, ?, ?)',
                (full_name, email, phone, password_hash)
            )
            user = dict(db.execute(
                'SELECT id, full_name, email, phone FROM users WHERE id = ?',
                (cursor.lastrowid,)
            ).fetchone())
    except Exception:
        return jsonify({'error': 'Could not create your account. Please try again.'}), 500

    session.clear()
    session['user_id'] = user['id']
    session.permanent = True

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
@rate_limit(10, 60)
def login():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({'error': 'Invalid JSON payload'}), 400

    email    = str(data.get('email', '')).strip().lower()
    password = data.get('password', '')

    if not email or not isinstance(password, str) or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    db = get_db()
    try:
        user = db.execute(
            'SELECT * FROM users WHERE email = ?', (email,)
        ).fetchone()
    finally:
        db.close()

    # Use one generic error so accounts cannot be enumerated
    if not user:
        return jsonify({'error': 'Invalid email or password'}), 401

    try:
        password_matches = bcrypt.checkpw(
            password.encode('utf-8'), user['password_hash'].encode('utf-8')
        )
    except (TypeError, ValueError):
        password_matches = False

    if not password_matches:
        return jsonify({'error': 'Invalid email or password'}), 401

    session.clear()
    session['user_id'] = user['id']
    session.permanent = True

    return jsonify({
        'message': 'Login successful',
        'user': {
            'id': user['id'],
            'fullName': user['full_name'],
            'email': user['email'],
            'phone': user['phone'],
        }
    }), 200


# ── GUEST CHECKOUT ──────────────────────────────────────
@auth_bp.route('/guest', methods=['POST'])
@rate_limit(10, 60)
def guest_checkout():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({'error': 'Invalid JSON payload'}), 400

    email = str(data.get('email', '')).strip().lower()
    if not email or not EMAIL_PATTERN.fullmatch(email):
        return jsonify({'error': 'A valid email is required for guest checkout'}), 400

    random_password = secrets.token_urlsafe(24)
    password_hash = bcrypt.hashpw(
        random_password.encode('utf-8'), bcrypt.gensalt()
    ).decode('utf-8')

    try:
        with db_session() as db:
            existing = db.execute(
                'SELECT id, is_guest FROM users WHERE email = ?', (email,)
            ).fetchone()
            if existing and not existing['is_guest']:
                return jsonify({'error': 'An account with this email exists. Please sign in.'}), 409

            if existing:
                user_id = existing['id']
            else:
                cursor = db.execute(
                    '''INSERT INTO users (full_name, email, phone, password_hash, is_guest)
                       VALUES (?, ?, ?, ?, 1)''',
                    ('Guest Shopper', email, '', password_hash)
                )
                user_id = cursor.lastrowid

            user = dict(db.execute(
                'SELECT id, full_name, email, phone, is_guest FROM users WHERE id = ?',
                (user_id,)
            ).fetchone())
    except Exception:
        return jsonify({'error': 'Could not start guest checkout. Please try again.'}), 500

    session.clear()
    session['user_id'] = user['id']
    session['is_guest'] = True
    session.permanent = True

    return jsonify({
        'message': 'Guest checkout started',
        'user': {
            'id': user['id'],
            'fullName': user['full_name'],
            'email': user['email'],
            'phone': user['phone'],
            'isGuest': True,
        }
    }), 200


# ── SESSION HELPERS ──────────────────────────────────────
@auth_bp.route('/me', methods=['GET'])
def me():
    user = current_user()
    if not user:
        return jsonify({'error': 'Authentication required'}), 401
    return jsonify({
        'user': {
            'id': user['id'],
            'fullName': user['full_name'],
            'email': user['email'],
            'phone': user['phone'],
        },
        'isAdmin': bool(session.get('is_admin')),
    }), 200


@auth_bp.route('/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({'message': 'Logged out'}), 200


@auth_bp.route('/admin/login', methods=['POST'])
@rate_limit(5, 60)
def admin_login():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({'error': 'Invalid JSON payload'}), 400
    if not check_admin_password(data.get('password', '')):
        return jsonify({'error': 'Incorrect admin password'}), 401
    session['is_admin'] = True
    session.permanent = True
    return jsonify({'message': 'Admin session started'}), 200


@auth_bp.route('/admin/logout', methods=['POST'])
def admin_logout():
    session.pop('is_admin', None)
    return jsonify({'message': 'Admin session ended'}), 200
