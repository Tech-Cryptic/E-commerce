from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS
from database import create_tables
from auth import auth_bp
from orders import orders_bp
import os

# path to the static folder
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, 'static')

app = Flask(__name__, static_folder=STATIC_DIR, static_url_path='')

app.secret_key = 'gabbys-gadget-secret-key-2025'

CORS(app, origins=['http://localhost:5173'], supports_credentials=True)

app.register_blueprint(auth_bp, url_prefix='/api')
app.register_blueprint(orders_bp, url_prefix='/api')

create_tables()

# serve React for all non-API routes
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path.startswith('api/'):
        return jsonify({'error': 'Not found'}), 404
    file_path = os.path.join(STATIC_DIR, path)
    if path and os.path.exists(file_path):
        return send_from_directory(STATIC_DIR, path)
    return send_from_directory(STATIC_DIR, 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)