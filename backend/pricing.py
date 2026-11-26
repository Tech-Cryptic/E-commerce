import json
import os
import time

from flask import current_app
from itsdangerous import URLSafeSerializer, BadSignature, BadData

from database import sanitize_string

CATALOG_PATH = os.environ.get(
    'CATALOG_PATH', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'catalog.json')
)

try:
    with open(CATALOG_PATH, encoding='utf-8') as _catalog_file:
        CATALOG = json.load(_catalog_file)
except (OSError, ValueError):
    CATALOG = {'products': {}, 'compare': {}}

SHIPPING_FEE = 15_000
FREE_SHIPPING_THRESHOLD = 500_000
TAX_RATE = 0.075
QUOTE_MAX_AGE = 30 * 60

PROMOS = {
    'SAVE10': ('percent', 10),
    'GABBY20': ('percent', 20),
    'FREESHIP': ('freeship', 0),
}


class PricingError(Exception):
    pass


def _to_int(value, default=0, minimum=0, maximum=999):
    try:
        number = int(value)
    except (TypeError, ValueError):
        return default
    return min(max(number, minimum), maximum)


def resolve_price(item):
    cart_id = sanitize_string(item.get('id'), 120)
    storage = sanitize_string(item.get('storage'), 60)

    products = CATALOG.get('products', {})
    entry = products.get(cart_id)

    if entry is None:
        matches = [pid for pid in products if cart_id.startswith(pid + '-')]
        if matches:
            product_id = max(matches, key=len)
            entry = products[product_id]
            if not storage:
                storage = cart_id[len(product_id) + 1:].split('-')[0]

    if entry is None:
        entry = CATALOG.get('compare', {}).get(cart_id)

    if entry is None:
        raise PricingError('One of your items is no longer available')

    prices = entry.get('prices') or {}
    if storage and storage in prices:
        unit_price = prices[storage]
    elif prices:
        unit_price = min(prices.values())
    else:
        raise PricingError('This item requires a price quote — contact us before ordering')

    try:
        unit_price = float(unit_price)
    except (TypeError, ValueError):
        raise PricingError('This item requires a price quote — contact us before ordering')

    if unit_price <= 0:
        raise PricingError('This item requires a price quote — contact us before ordering')

    return unit_price, entry.get('name', cart_id)


def calculate_totals(items, promo_code=''):
    if not isinstance(items, list) or not items:
        raise PricingError('Your cart is empty')

    lines = []
    for item in items:
        if not isinstance(item, dict):
            raise PricingError('Invalid item in cart')
        quantity = _to_int(item.get('quantity'), default=0, minimum=0, maximum=999)
        if quantity < 1:
            raise PricingError('Invalid item quantity')
        unit_price, catalog_name = resolve_price(item)
        lines.append({
            'productId': sanitize_string(item.get('id'), 120),
            'name': catalog_name,
            'image': sanitize_string(item.get('image'), 500),
            'brand': sanitize_string(item.get('brand'), 100),
            'condition': sanitize_string(item.get('condition'), 50),
            'quantity': quantity,
            'unitPrice': unit_price,
            'price': unit_price,
            'lineTotal': round(unit_price * quantity, 2),
        })

    subtotal = round(sum(line['lineTotal'] for line in lines), 2)
    shipping = 0 if subtotal >= FREE_SHIPPING_THRESHOLD else SHIPPING_FEE
    tax = round(subtotal * TAX_RATE, 2)

    code = sanitize_string(promo_code, 30).upper()
    promo = PROMOS.get(code)
    discount = 0
    if promo:
        if promo[0] == 'percent':
            discount = round(subtotal * promo[1] / 100, 2)
        else:
            shipping = 0

    total = round(subtotal + shipping + tax - discount, 2)
    if total <= 0:
        raise PricingError('Invalid order total')

    return {
        'items': lines,
        'subtotal': subtotal,
        'shipping': shipping,
        'tax': tax,
        'discount': discount,
        'promoCode': code if promo else '',
        'total': total,
    }


def _serializer():
    return URLSafeSerializer(current_app.secret_key, salt='gabbys-gadget-checkout-v1')


def make_quote(user_id, totals, reference):
    return _serializer().dumps({
        'userId': user_id,
        'items': totals['items'],
        'total': totals['total'],
        'promoCode': totals['promoCode'],
        'reference': reference,
        'expiresAt': time.time() + QUOTE_MAX_AGE,
    })


def load_quote(token):
    try:
        payload = _serializer().loads(token)
    except (BadSignature, BadData, TypeError, ValueError):
        raise PricingError('Your checkout session has expired. Please try again.')
    if not isinstance(payload, dict) or payload.get('expiresAt', 0) < time.time():
        raise PricingError('Your checkout session has expired. Please try again.')
    return payload
