# Opening in an iframe via `merchant.js`

This page shows how to embed Payment Widget inside your checkout layout.

## What this page helps you do

Use this approach if you want to:

- render Payment Widget inside a page section instead of a modal
- keep your cart or order summary visible next to the payment form
- open the widget with the same signed parameters used in other Payment Widget flows

## What changes compared with the modal flow

The integration is almost identical to the modal flow. The main difference is one extra parameter:

- `target_element` is required and must point to the DOM element where the iframe should be rendered

Without `target_element`, the same request opens Payment Widget in a modal or redirect flow, depending on your configuration.

## Minimum `configObj` for iframe mode

```json
{
  "target_element": "payment-widget",
  "project_id": 57123,
  "payment_id": "payment_443",
  "payment_amount": 1815,
  "payment_currency": "EUR",
  "customer_id": "customer_112",
  "signature": "<server-generated-signature>"
}
```

## Option 1. Render the iframe on page load or custom event

Use `EPayWidget.run()` when your own UI logic decides when to mount the widget.

```html
<link rel="stylesheet" href="https://paymentpage.platform.dev/shared/merchant.css" />
<script src="https://paymentpage.platform.dev/shared/merchant.js"></script>

<div class="checkout-layout">
  <section class="order-summary">
    <h2>Order #443</h2>
    <p>Total: 18.15 EUR</p>
  </section>

  <section id="payment-widget"></section>
</div>

<script>
  async function mountPaymentPage() {
    const response = await fetch('/api/payment-page/iframe-config', { method: 'POST' });
    const config = await response.json();

    EPayWidget.run(config, 'POST');
  }

  mountPaymentPage();
</script>
```

## Option 2. Render the iframe after a button click

Use `EPayWidget.bind()` when the widget should appear only after the user explicitly starts checkout.

```html
<link rel="stylesheet" href="https://paymentpage.platform.dev/shared/merchant.css" />
<script src="https://paymentpage.platform.dev/shared/merchant.js"></script>

<button id="pay-button">Open payment form</button>
<div id="payment-widget"></div>

<script>
  fetch('/api/payment-page/iframe-config', { method: 'POST' })
    .then((response) => response.json())
    .then((config) => {
      EPayWidget.bind('pay-button', config, 'POST');
    });
</script>
```

## Example server response

Your backend should include the same signed payment fields as in other flows plus `target_element`.

::: code-group

```js [Node.js / Express]
app.post('/api/payment-page/iframe-config', (_req, res) => {
  res.json({
    target_element: 'payment-widget',
    project_id: 57123,
    payment_id: 'payment_443',
    payment_amount: 1815,
    payment_currency: 'EUR',
    customer_id: 'customer_112',
    payment_description: 'Test order #443',
    language_code: 'en',
    signature: '<server-generated-signature>'
  });
});
```

```php [PHP]
<?php

header('Content-Type: application/json');

echo json_encode([
    'target_element' => 'payment-widget',
    'project_id' => 57123,
    'payment_id' => 'payment_443',
    'payment_amount' => 1815,
    'payment_currency' => 'EUR',
    'customer_id' => 'customer_112',
    'payment_description' => 'Test order #443',
    'language_code' => 'en',
    'signature' => $signature,
], JSON_UNESCAPED_SLASHES);
```

```python [Python / Flask]
from flask import jsonify

@app.post('/api/payment-page/iframe-config')
def payment_page_iframe_config():
    return jsonify({
        'target_element': 'payment-widget',
        'project_id': 57123,
        'payment_id': 'payment_443',
        'payment_amount': 1815,
        'payment_currency': 'EUR',
        'customer_id': 'customer_112',
        'payment_description': 'Test order #443',
        'language_code': 'en',
        'signature': '<server-generated-signature>',
    })
```

:::

## Notes

- If the same request also asks Payment Widget to open in a separate tab, the redirect flow takes priority over iframe rendering.
- Use a stable container element ID so the widget always mounts into the expected part of the page.
- Keep signature generation and secret key handling on the server side only.

## What to read next

- [Opening in a modal via JS library](./pp-opening-modal-via-javascript-library)
- [Basic implementation](./pp-quickstart-basic-implementation)
- [Callback handling](./pp-interaction)
