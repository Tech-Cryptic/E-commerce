import sqlite3
import os
import math
from contextlib import contextmanager


# In production on Render set DATA_DIR=/data (persistent disk mount path)
# Locally it falls back to the backend folder
DATA_DIR = os.environ.get('DATA_DIR', os.path.dirname(__file__))
DB_PATH = os.path.join(DATA_DIR, 'store.db')


def get_db():
    conn = sqlite3.connect(DB_PATH, timeout=10)
    conn.row_factory = sqlite3.Row  # lets us access columns by name e.g. user['email']
    conn.execute('PRAGMA foreign_keys = ON')
    conn.execute('PRAGMA busy_timeout = 5000')
    return conn


@contextmanager
def db_session():
    """Commit on success, roll back on failure, and always close the connection."""
    db = get_db()
    try:
        yield db
        db.commit()
    except Exception:
        db.rollback()
        raise
    finally:
        db.close()


def _ensure_column(cursor, table, column, definition):
    columns = {row[1] for row in cursor.execute(f'PRAGMA table_info({table})').fetchall()}
    if column not in columns:
        cursor.execute(f'ALTER TABLE {table} ADD COLUMN {column} {definition}')


def create_tables():
    conn = get_db()
    cursor = conn.cursor()

    # users table
    # Educational: stores password hashes (bcrypt), not plain text
    # Email is UNIQUE to prevent duplicate accounts
    cursor.execute('''CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        phone TEXT NOT NULL,
        password_hash TEXT NOT NULL,
        address TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )''')
    _ensure_column(cursor, 'users', 'is_guest', 'INTEGER DEFAULT 0')

    # orders table
    cursor.execute('''CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        total_amount REAL NOT NULL,
        status TEXT DEFAULT 'Paid',
        payment_ref TEXT,
        delivery_address TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )''')

    # order items table
    cursor.execute('''CREATE TABLE IF NOT EXISTS order_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        product_id TEXT NOT NULL,
        product_name TEXT NOT NULL,
        product_image TEXT,
        brand TEXT,
        condition TEXT,
        quantity INTEGER NOT NULL,
        unit_price REAL NOT NULL,
        FOREIGN KEY (order_id) REFERENCES orders(id)
    )''')

    # sell requests table
    cursor.execute('''CREATE TABLE IF NOT EXISTS sell_requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        device_type TEXT,
        condition TEXT,
        brand TEXT NOT NULL,
        model TEXT NOT NULL,
        storage TEXT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        notes TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )''')

    conn.commit()
    conn.close()
    print('All tables created successfully')


# Basic input sanitisation helpers
def sanitize_string(value, max_length=255):
    """Strip whitespace and enforce a maximum length."""
    if value is None:
        return ''
    return str(value).strip()[:max_length]


def sanitize_phone(phone):
    """Keep only digits so phone numbers are stored in a normalised format."""
    if not phone:
        return ''
    return ''.join(filter(str.isdigit, str(phone)))


def _to_int(value, default=0, minimum=0, maximum=10_000):
    try:
        number = int(value)
    except (TypeError, ValueError):
        return default
    return min(max(number, minimum), maximum)


def _to_float(value, default=0.0):
    try:
        number = float(value)
    except (TypeError, ValueError):
        return default
    return number if math.isfinite(number) else default


def sanitize_order_data(items):
    """Normalise order items before database insertion, tolerating bad input."""
    if not isinstance(items, list):
        return []
    sanitised = []
    for item in items:
        if not isinstance(item, dict):
            continue
        sanitised.append({
            'product_id': sanitize_string(item.get('id'), 50),
            'product_name': sanitize_string(item.get('name'), 200),
            'product_image': sanitize_string(item.get('image'), 500),
            'brand': sanitize_string(item.get('brand'), 100),
            'condition': sanitize_string(item.get('condition'), 50),
            'quantity': _to_int(item.get('quantity'), default=1, minimum=1, maximum=999),
            'price': _to_float(item.get('price')),
        })
    return sanitised


# run this file directly to create tables
if __name__ == '__main__':
    create_tables()
