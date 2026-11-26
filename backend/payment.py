import json
import os
from urllib.error import URLError
from urllib.parse import quote as url_quote
from urllib.request import Request, urlopen

PAYSTACK_SECRET_KEY = os.environ.get('PAYSTACK_SECRET_KEY', '')
VERIFY_URL = 'https://api.paystack.co/transaction/verify/'


def verify_payment(reference, expected_amount_ngn):
    """Confirm a Paystack transaction and that the amount matches our quote.

    Returns (verified, status, message). When no secret key is configured the
    order is stored as Pending so a browser callback can never forge 'Paid'.
    """
    if not PAYSTACK_SECRET_KEY:
        return False, 'unconfigured', 'Payment verification is not configured'

    url = VERIFY_URL + url_quote(reference, safe='')
    request = Request(url, headers={
        'Authorization': f'Bearer {PAYSTACK_SECRET_KEY}',
        'Content-Type': 'application/json',
    })

    try:
        with urlopen(request, timeout=10) as response:
            body = json.load(response)
    except (URLError, TimeoutError, ValueError, OSError):
        return False, 'error', 'Could not reach Paystack for verification'

    data = body.get('data') or {}
    paystack_status = data.get('status', '')
    currency = data.get('currency', '')
    amount = data.get('amount')

    if body.get('status') and paystack_status == 'success' and currency == 'NGN':
        try:
            amount_matches = int(amount) == round(float(expected_amount_ngn) * 100)
        except (TypeError, ValueError):
            amount_matches = False
        if amount_matches:
            return True, 'Paid', 'Payment verified'
        return False, 'mismatch', 'Paid amount does not match the order total'

    return False, paystack_status or 'failed', 'Payment was not successful'
