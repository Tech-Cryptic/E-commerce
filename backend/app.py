from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
from database import create_tables
from auth import auth_bp
from orders import orders_bp
from sell import sell_bp
import os

# Path to the static folder (built React app)
BASE_DIR   = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, 'static')

app = Flask(__name__, static_folder=STATIC_DIR, static_url_path='')

# Use a strong secret key from env in production
app.secret_key = os.environ.get('SECRET_KEY', 'gabbys-gadget-secret-key-2025')

# ── CORS ─────────────────────────────────────────────────────────────────────
# Allow localhost dev + any Render-hosted frontend
# Set FRONTEND_URL env var on Render to your frontend URL
FRONTEND_URL = os.environ.get('FRONTEND_URL', 'http://localhost:5173')
CORS(app, origins=[
    'http://localhost:3000',
    'http://localhost:5173',
    FRONTEND_URL,
], supports_credentials=True)

# ── Blueprints ────────────────────────────────────────────────────────────────
app.register_blueprint(auth_bp,   url_prefix='/api')
app.register_blueprint(orders_bp, url_prefix='/api')
app.register_blueprint(sell_bp,   url_prefix='/api')

# ── Database ──────────────────────────────────────────────────────────────────
create_tables()

# ── Serve built React app (production) ───────────────────────────────────────
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path.startswith('api/'):
        return jsonify({'error': 'Not found'}), 404
    file_path = os.path.join(STATIC_DIR, path)
    if path and os.path.exists(file_path):
        return send_from_directory(STATIC_DIR, path)
    return send_from_directory(STATIC_DIR, 'index.html')

# ── Run ───────────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)