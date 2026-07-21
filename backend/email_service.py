"""
Email notification service for Gabby's Gadget.

Setup:
  1. Enable 2FA on your Gmail account.
  2. Create an App Password at: https://myaccount.google.com/apppasswords
  3. Add to backend/.env:
       MAIL_USER=gabbysgadget@gmail.com
       MAIL_PASS=your_16_char_app_password

Usage:
  from email_service import send_order_confirmation, send_sell_confirmation
"""

import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

MAIL_USER = os.environ.get('MAIL_USER', '')
MAIL_PASS = os.environ.get('MAIL_PASS', '')
STORE_NAME = "Gabby's Gadget"


def _send(to: str, subject: str, html: str) -> bool:
    """Send an HTML email. Returns True on success."""
    if not MAIL_USER or not MAIL_PASS:
        print('[email_service] MAIL_USER / MAIL_PASS not set — skipping email.')
        return False

    try:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From']    = f'{STORE_NAME} <{MAIL_USER}>'
        msg['To']      = to
        msg.attach(MIMEText(html, 'html'))

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(MAIL_USER, MAIL_PASS)
            server.sendmail(MAIL_USER, to, msg.as_string())

        print(f'[email_service] Email sent to {to}')
        return True

    except Exception as e:
        print(f'[email_service] Failed to send email: {e}')
        return False


# ── Order Confirmation ──────────────────────────────────
def send_order_confirmation(customer_email: str, customer_name: str,
                             order_ref: str, total: float,
                             items: list, address: str) -> bool:
    fmt = lambda n: f"₦{n:,.0f}"

    items_html = ''.join(
        f'<tr>'
        f'<td style="padding:8px 0;font-size:13px;">{i.get("name","")}</td>'
        f'<td style="padding:8px 0;font-size:13px;text-align:center;">{i.get("quantity",1)}</td>'
        f'<td style="padding:8px 0;font-size:13px;text-align:right;">{fmt(i.get("price",0)*i.get("quantity",1))}</td>'
        f'</tr>'
        for i in items
    )

    html = f"""
    <!DOCTYPE html>
    <html>
    <body style="font-family:'Segoe UI',Arial,sans-serif;background:#f5f5f5;margin:0;padding:40px 0;">
      <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08);">
        <!-- Header -->
        <div style="background:#1a3dc4;padding:32px 40px;text-align:center;">
          <p style="color:#f5a623;font-size:11px;letter-spacing:.2em;margin:0 0 4px;text-transform:uppercase;">Order Confirmed</p>
          <h1 style="color:#fff;margin:0;font-size:24px;">Gabby's Gadget</h1>
        </div>

        <!-- Body -->
        <div style="padding:40px;">
          <p style="font-size:16px;color:#333;">Hi {customer_name},</p>
          <p style="color:#666;line-height:1.6;">
            Your order has been received and payment confirmed. We're already getting it ready!
          </p>

          <!-- Reference box -->
          <div style="background:#f0f4ff;border-left:4px solid #1a3dc4;padding:16px 20px;border-radius:8px;margin:24px 0;">
            <p style="margin:0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:.1em;">Order Reference</p>
            <p style="margin:6px 0 0;font-family:monospace;font-size:16px;font-weight:700;color:#1a3dc4;">{order_ref}</p>
          </div>

          <!-- Items table -->
          <table style="width:100%;border-collapse:collapse;margin:8px 0 24px;">
            <thead>
              <tr style="border-bottom:2px solid #eee;">
                <th style="padding:8px 0;text-align:left;font-size:11px;text-transform:uppercase;color:#888;">Item</th>
                <th style="padding:8px 0;text-align:center;font-size:11px;text-transform:uppercase;color:#888;">Qty</th>
                <th style="padding:8px 0;text-align:right;font-size:11px;text-transform:uppercase;color:#888;">Price</th>
              </tr>
            </thead>
            <tbody>{items_html}</tbody>
            <tfoot>
              <tr style="border-top:2px solid #eee;">
                <td colspan="2" style="padding:12px 0;font-weight:700;font-size:15px;">Total Paid</td>
                <td style="padding:12px 0;font-weight:900;font-size:18px;text-align:right;color:#1a3dc4;">{fmt(total)}</td>
              </tr>
            </tfoot>
          </table>

          <!-- Delivery address -->
          <p style="font-size:13px;color:#888;margin-bottom:4px;">DELIVERY ADDRESS</p>
          <p style="font-size:14px;font-weight:600;color:#333;margin:0 0 28px;">{address}</p>

          <!-- CTA button -->
          <div style="text-align:center;">
            <a href="https://gabbysgadget.com/track-order?ref={order_ref}"
               style="display:inline-block;background:#1a3dc4;color:#fff;text-decoration:none;padding:14px 32px;border-radius:12px;font-weight:700;font-size:14px;">
              Track Your Order →
            </a>
          </div>

          <p style="font-size:12px;color:#aaa;margin-top:32px;text-align:center;line-height:1.6;">
            Questions? Call <a href="tel:08132922551" style="color:#1a3dc4;">08132922551</a>
            or email <a href="mailto:gabbysgadget@gmail.com" style="color:#1a3dc4;">gabbysgadget@gmail.com</a>
          </p>
        </div>
      </div>
    </body>
    </html>
    """

    return _send(customer_email, f'Order Confirmed — {order_ref} | {STORE_NAME}', html)


# ── Sell/Trade-in Confirmation ──────────────────────────
def send_sell_confirmation(customer_email: str, customer_name: str,
                            device: str, brand: str, model: str) -> bool:
    html = f"""
    <!DOCTYPE html>
    <html>
    <body style="font-family:'Segoe UI',Arial,sans-serif;background:#f5f5f5;margin:0;padding:40px 0;">
      <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08);">
        <div style="background:#1a3dc4;padding:32px 40px;text-align:center;">
          <p style="color:#f5a623;font-size:11px;letter-spacing:.2em;margin:0 0 4px;text-transform:uppercase;">Trade-In Request</p>
          <h1 style="color:#fff;margin:0;font-size:24px;">Gabby's Gadget</h1>
        </div>
        <div style="padding:40px;">
          <p style="font-size:16px;color:#333;">Hi {customer_name},</p>
          <p style="color:#666;line-height:1.6;">
            We received your trade-in request for your <strong>{brand} {model}</strong> ({device}).
            Our team will reach out to you within <strong>24 hours</strong> with a fair valuation.
          </p>
          <p style="font-size:12px;color:#aaa;margin-top:32px;text-align:center;">
            Questions? Call <a href="tel:08132922551" style="color:#1a3dc4;">08132922551</a>
          </p>
        </div>
      </div>
    </body>
    </html>
    """

    return _send(customer_email, f'Trade-In Request Received | {STORE_NAME}', html)
