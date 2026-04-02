# Opening in a modal via `merchant.js`

This page shows the shortest frontend integration for opening Payment Widget in a modal window.

## What this page helps you do

Use this approach if you want to:

- keep the customer on your checkout page
- open Payment Widget as a modal overlay
- fetch signed parameters from your back end
- launch the form with a copy-paste JavaScript example

## What you need before starting

Prepare the following:

- a backend endpoint that returns signed Payment Widget parameters
- the `merchant.js` and `merchant.css` files loaded from the payment platform domain
- a checkout button or another UI event that triggers the form

## How modal opening works

The frontend part is always the same:

1. Load `merchant.css` and `merchant.js`.
2. Request a signed `configObj` from your server.
3. Call `EPayWidget.run(configObj, 'POST')` or `EPayWidget.bind(...)`.

The signing logic must stay on your server side.

## Minimum `configObj`

For a basic purchase flow, the server usually returns:

```json
{
  "project_id": 57123,
  "payment_id": "payment_443",
  "payment_amount": 1815,
  "payment_currency": "EUR",
  "customer_id": "customer_112",
  "signature": "<server-generated-signature>"
}
```

## Option 1. Open the modal on any UI event

Use `EPayWidget.run()` when you want to launch Payment Widget after your own JavaScript logic.

```html
<link rel="stylesheet" href="https://paymentpage.platform.dev/shared/merchant.css" />
<script src="https://paymentpage.platform.dev/shared/merchant.js"></script>

<button id="pay-button">Pay 18.15 EUR</button>

<script>
  document.getElementById('pay-button').addEventListener('click', async () => {
    const response = await fetch('/api/payment-page/config', { method: 'POST' });
    const config = await response.json();

    EPayWidget.run(config, 'POST');
  });
</script>
```

## Option 2. Bind the modal directly to a button

Use `EPayWidget.bind()` when you want the library to attach to a specific button.

```html
<link rel="stylesheet" href="https://paymentpage.platform.dev/shared/merchant.css" />
<script src="https://paymentpage.platform.dev/shared/merchant.js"></script>

<button id="pay-button">Pay 18.15 EUR</button>

<script>
  fetch('/api/payment-page/config', { method: 'POST' })
    .then((response) => response.json())
    .then((config) => {
      EPayWidget.bind('pay-button', config, 'POST');
    });
</script>
```

## Example server response

If you open Payment Widget via `merchant.js`, your backend usually returns the signed object instead of a final URL.

::: code-group

```js [Node.js / Express]
app.post('/api/payment-page/config', (_req, res) => {
  res.json({
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

@app.post('/api/payment-page/config')
def payment_page_config():
    return jsonify({
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

- If you omit the HTTP method in the widget call, `GET` is used by default.
- `POST` is the safer default for real integrations because request parameters are not exposed in the URL.
- Keep `merchant.js` and `merchant.css` loaded from the platform CDN rather than storing them locally.

## What to read next

- [Basic implementation](./pp-quickstart-basic-implementation.md)
- [Opening in iframe via JS library](./pp-opening-iframe-via-javascript-library.md)
- [Callback handling](./pp-interaction.md)
