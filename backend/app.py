from flask import Flask
from flask_cors import CORS
from database import create_tables
from auth import auth_bp
from orders import orders_bp

app = Flask(__name__)
app.secret_key = 'gabbys-gadget-secret-key-2025'

# allow React (port 5173) to talk to Flask (port 5000)
CORS(app, origins=['http://localhost:5173'], supports_credentials=True)

# register route blueprints
app.register_blueprint(auth_bp, url_prefix='/api')
app.register_blueprint(orders_bp, url_prefix='/api')

# create tables on startup if they don't exist
create_tables()

if __name__ == '__main__':
    app.run(debug=True, port=5000)