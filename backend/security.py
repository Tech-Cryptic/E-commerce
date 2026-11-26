import functools
import hmac
import os
import threading
import time
from collections import defaultdict, deque

from flask import g, jsonify, request, session

from database import get_db

ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', '')

_rate_buckets = defaultdict(deque)
_rate_lock = threading.Lock()


def rate_limit(max_requests, window_seconds=60):
    def decorator(view):
        @functools.wraps(view)
        def wrapped(*args, **kwargs):
            key = (request.endpoint or view.__name__, request.remote_addr or 'unknown')
            now = time.time()
            with _rate_lock:
                bucket = _rate_buckets[key]
                while bucket and bucket[0] <= now - window_seconds:
                    bucket.popleft()
                if len(bucket) >= max_requests:
                    retry_after = max(1, int(bucket[0] + window_seconds - now) + 1)
                    response = jsonify({'error': 'Too many requests. Please try again shortly.'})
                    response.status_code = 429
                    response.headers['Retry-After'] = str(retry_after)
                    return response
                bucket.append(now)
            return view(*args, **kwargs)
        return wrapped
    return decorator


def load_user(user_id):
    if not user_id:
        return None
    db = get_db()
    try:
        row = db.execute(
            'SELECT id, full_name, email, phone FROM users WHERE id = ?', (user_id,)
        ).fetchone()
        return dict(row) if row else None
    finally:
        db.close()


def current_user():
    if not hasattr(g, 'current_user'):
        g.current_user = load_user(session.get('user_id'))
    return g.current_user


def login_required(view):
    @functools.wraps(view)
    def wrapped(*args, **kwargs):
        user = current_user()
        if not user:
            return jsonify({'error': 'Authentication required'}), 401
        return view(*args, **kwargs)
    return wrapped


def admin_required(view):
    @functools.wraps(view)
    def wrapped(*args, **kwargs):
        if not session.get('is_admin'):
            return jsonify({'error': 'Administrator access required'}), 403
        return view(*args, **kwargs)
    return wrapped


def check_admin_password(password):
    if not ADMIN_PASSWORD:
        return False
    return hmac.compare_digest(str(password), ADMIN_PASSWORD)
