# Basic implementation

This page is the code-first entry point for integrating Payment Widget.

## What this page helps you do

Use this guide if you want to:

- open Payment Widget for a purchase
- keep the signing logic on the server side
- receive callbacks and update order status
- start with copy-paste examples instead of reading the full reference first

## Credentials you need first

Before writing code, obtain these two values for your test project:

- `project_id` — the merchant project identifier assigned by Platform during onboarding
- `secret_key` — the signing key for that same project and environment

If you do not have them yet, ask your Platform account manager or technical support to issue a test Payment Widget project and provide the test `project_id` and `secret_key`.

## Integration in one minute

Payment Widget integration has three mandatory parts:

1. Your back end prepares and signs the final parameter set.
2. Your front end opens the hosted payment form.
3. Your back end receives the callback with the final result.

## Required parameters

The minimum parameter set for a purchase is:

- `project_id`
- `payment_id`
- `payment_amount`
- `payment_currency`
- `customer_id`
- `signature`

For the examples below, assume:

| Parameter | Example value |
| --- | --- |
| `project_id` | `57123` |
| `payment_id` | `payment_443` |
| `payment_amount` | `1815` |
| `payment_currency` | `EUR` |
| `customer_id` | `customer_112` |

## Copy this opening request first

If you only need to see what the first opening request looks like, start from this exact parameter set:

```json
{
  "project_id": 57123,
  "payment_id": "payment_443",
  "payment_amount": 1815,
  "payment_currency": "EUR",
  "customer_id": "customer_112",
  "payment_description": "Test order #443",
  "language_code": "en",
  "signature": "<server-generated-signature>"
}
```

What matters:

- the Payment Widget base URL is `https://paymentpage.platform.dev/payment`
- assemble the full parameter set first
- generate `signature` last
- generate the signature on the server side only

If you want the signing algorithm in isolation, go to [**Signature generation**](./pp-signature-generation.md).

## Step 1. Generate a signed Payment Widget URL

Use one of these examples on the server side.

::: code-group

```js [Node.js SDK]
const { Payment } = require('sdk_js_lib');

const payment = new Payment('paymentpage.platform.dev', '57123', '<secret_key>');

payment.paymentId = 'payment_443';
payment.paymentAmount = 1815;
payment.paymentCurrency = 'EUR';
payment.customerId = 'customer_112';
payment.paymentDescription = 'Test order #443';
payment.languageCode = 'en';

const paymentUrl = payment.getUrl();

console.log(paymentUrl);
```

```php [PHP SDK]
require __DIR__ . '/vendor/autoload.php';

use sdk_php_lib\Gate;
use sdk_php_lib\Payment;

$payment = new Payment('57123', 'payment_443');
$payment
    ->setPaymentAmount(1815)
    ->setPaymentCurrency('EUR')
    ->setPaymentDescription('Test order #443');
$payment->customerId = 'customer_112';
$payment->languageCode = 'en';

$gate = new Gate('<secret_key>');
$paymentUrl = $gate->getPurchasePaymentPageUrl('paymentpage.platform.dev', $payment);

echo $paymentUrl;
```

```python [Python SDK]
from payment_page_sdk.gate import Gate
from payment_page_sdk.payment import Payment

payment = Payment('57123', 'payment_443')
payment.payment_amount = 1815
payment.payment_currency = 'EUR'
payment.customer_id = 'customer_112'
payment.payment_description = 'Test order #443'
payment.language_code = 'en'

gate = Gate('<secret_key>')
payment_url = gate.get_purchase_payment_page_url('paymentpage.platform.dev', payment)

print(payment_url)
```

```php [PHP custom signing]
<?php

final class Signer
{
    private const ALGORITHM = 'sha512';
    private const DELIMITER = ';';

    public static function sign(array $params, string $secretKey, array $ignoreKeys = []): string
    {
        $prepared = self::flatten($params, $ignoreKeys);
        ksort($prepared, SORT_NATURAL);

        $stringToSign = implode(self::DELIMITER, $prepared);

        return base64_encode(hash_hmac(self::ALGORITHM, $stringToSign, $secretKey, true));
    }

    private static function flatten(array $params, array $ignoreKeys = [], string $prefix = ''): array
    {
        $result = [];

        foreach ($params as $key => $value) {
            if (in_array($key, $ignoreKeys, true)) {
                continue;
            }

            $fullKey = $prefix === '' ? (string) $key : $prefix . ':' . $key;

            if (is_object($value)) {
                $value = get_object_vars($value);
            }

            if (is_array($value)) {
                $result += self::flatten($value, $ignoreKeys, $fullKey);
                continue;
            }

            if (is_bool($value)) {
                $value = $value ? '1' : '0';
            }

            $result[$fullKey] = $fullKey . ':' . (string) $value;
        }

        return $result;
    }
}

$params = [
    'project_id' => 57123,
    'payment_id' => 'payment_443',
    'payment_amount' => 1815,
    'payment_currency' => 'EUR',
    'customer_id' => 'customer_112',
    'payment_description' => 'Test order #443',
    'language_code' => 'en',
];

$params['signature'] = Signer::sign($params, '<secret_key>');
$paymentUrl = 'https://paymentpage.platform.dev/payment?' . http_build_query($params);

echo $paymentUrl;
```

:::

## Step 2. Open Payment Widget on the client side

You can start with the simplest option: redirect to the signed URL.

::: code-group

```html [HTML redirect]
<button id="pay-button">Pay 18.15 EUR</button>

<script>
  document.getElementById('pay-button').addEventListener('click', async () => {
    const response = await fetch('/api/payment-page/session', { method: 'POST' });
    const { paymentUrl } = await response.json();

    window.location.href = paymentUrl;
  });
</script>
```

```html [Modal via merchant.js]
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

:::

## Step 3. Return signed parameters to the browser

If you use `merchant.js`, your server typically returns the signed parameter object instead of the final URL.

::: code-group

```js [Node.js / Express]
app.post('/api/payment-page/config', async (_req, res) => {
  const config = {
    project_id: '57123',
    payment_id: 'payment_443',
    payment_amount: '1815',
    payment_currency: 'EUR',
    customer_id: 'customer_112',
    payment_description: 'Test order #443',
    language_code: 'en',
    signature: '<server-generated-signature>'
  };

  res.json(config);
});
```

```php [PHP]
<?php

$config = [
    'project_id' => '57123',
    'payment_id' => 'payment_443',
    'payment_amount' => '1815',
    'payment_currency' => 'EUR',
    'customer_id' => 'customer_112',
    'payment_description' => 'Test order #443',
    'language_code' => 'en',
    'signature' => $signature,
];

header('Content-Type: application/json');
echo json_encode($config, JSON_UNESCAPED_SLASHES);
```

```python [Python / Flask]
from flask import jsonify

@app.post('/api/payment-page/config')
def payment_page_config():
    return jsonify({
        'project_id': '57123',
        'payment_id': 'payment_443',
        'payment_amount': '1815',
        'payment_currency': 'EUR',
        'customer_id': 'customer_112',
        'payment_description': 'Test order #443',
        'language_code': 'en',
        'signature': '<server-generated-signature>',
    })
```

:::

## Step 4. Handle callbacks

Callbacks are the source of truth for the final payment result. Your back end should validate them, extract the payment status, and update the order in your system.

::: code-group

```js [Node.js SDK]
const { Callback } = require('sdk_js_lib');

app.post('/payment/callback', function (req, res) {
  const callback = new Callback('<secret_key>', req.body);

  if (callback.isPaymentSuccess()) {
    const paymentId = callback.getPaymentId();
    const payment = callback.payment();

    // Mark order as paid in your system
  }

  res.status(200).send('OK');
});
```

```php [PHP SDK]
<?php

use sdk_php_lib\Gate;

$gate = new Gate('<secret_key>');
$callback = $gate->handleCallback($data);

$paymentId = $callback->getPaymentId();
$paymentStatus = $callback->getPaymentStatus();
$paymentBody = $callback->getPayment();

http_response_code(200);
echo 'OK';
```

```python [Python SDK]
from payment_page_sdk.gate import Gate

gate = Gate('<secret_key>')
callback = gate.handle_callback(data)

payment_id = callback.get_payment_id()
payment_status = callback.get_payment_status()
payment_body = callback.get_payment()

# Update order status in your system
```

:::

## Callback response rules

Your endpoint should return:

- `200 OK` if the callback is accepted
- `400 Bad Request` if the callback cannot be validated

## What to test first

For the first end-to-end test, validate only the baseline flow:

1. generate a unique `payment_id`
2. open the form
3. complete a payment with a test card
4. confirm that the callback reaches your endpoint
5. update the order in your system only from the callback result

## What to read next

- [**UX configuration**](./pp-ux-configuration.md) — if you want modal or iframe checkout
- [**Payment Widget API description**](./pp-api.md) — if you need optional parameters, formats, and test data
- [**Callback format**](./pp-interaction.md) — if you need the full response structure
- [**Test cards**](./pp-testcards.md) — for broader payment testing
