# Callback handling

This page explains how Payment Widget reports the result back to your back end.

## What this page helps you do

Use this guide if you want to:

- accept callbacks from the platform
- verify that the callback really came from the platform
- update your order or payment status safely
- return the correct HTTP acknowledgement

## How callbacks fit into the flow

The result flow is simple:

1. Your back end signs the Payment Widget parameters.
2. The customer completes or cancels the payment in the hosted form.
3. The platform sends a server-to-server callback to your callback URL.
4. Your back end verifies the signature and stores the result.
5. Your endpoint returns `HTTP 200 OK`.

Use callbacks as the source of truth for payment status. The browser return flow is useful for UX, but the final state should be taken from the callback.

## Minimum implementation

Your callback endpoint should do the following:

1. Read the raw request body.
2. Parse the JSON payload.
3. Remove the `signature` field from the data used for verification.
4. Recalculate the signature with your secret key.
5. Compare signatures.
6. Save the payment result in your system.
7. Return `HTTP 200 OK`.

## Example callback payload

The exact payload depends on the payment scenario, but a typical callback contains payment identifiers, status fields, operation details, and the signature.

```json
{
  "project_id": 57123,
  "payment_id": "payment_443",
  "payment": {
    "id": "19475001",
    "type": "purchase",
    "status": "success",
    "amount": 1815,
    "currency": "EUR"
  },
  "customer": {
    "id": "customer_112"
  },
  "operation": {
    "id": 8840012,
    "type": "sale",
    "status": "success"
  },
  "signature": "<callback_signature>"
}
```

## Callback endpoint examples

::: code-group

```js [Node.js / Express]
const express = require('express');
const crypto = require('crypto');

const app = express();
app.use(express.json());

function sign(data, secretKey, prefix = '') {
  const lines = [];

  function flatten(value, path = '') {
    if (Array.isArray(value)) {
      value.forEach((item, index) => flatten(item, path ? `${path}:${index}` : `${index}`));
      return;
    }

    if (value && typeof value === 'object') {
      Object.keys(value).forEach((key) => {
        if (key === 'signature') return;
        flatten(value[key], path ? `${path}:${key}` : key);
      });
      return;
    }

    const normalized =
      typeof value === 'boolean' ? (value ? '1' : '0') : value === null || value === undefined ? '' : String(value);

    lines.push(`${path}:${normalized}`);
  }

  flatten(data, prefix);

  const stringToSign = lines.sort((a, b) => a.localeCompare(b, undefined, { numeric: true })).join(';');

  return crypto.createHmac('sha512', secretKey).update(stringToSign).digest('base64');
}

app.post('/api/payment-page/callback', (req, res) => {
  const callback = req.body;
  const receivedSignature = callback.signature;
  const expectedSignature = sign(callback, process.env.PP_SECRET_KEY);

  if (receivedSignature !== expectedSignature) {
    return res.status(400).json({ message: 'Invalid signature' });
  }

  const paymentId = callback.payment_id;
  const paymentStatus = callback.payment?.status;

  // Persist the result in your own storage.
  console.log({ paymentId, paymentStatus });

  return res.status(200).send('OK');
});
```

```php [PHP]
<?php

function flatten(array $data, string $prefix = ''): array
{
    $result = [];

    foreach ($data as $key => $value) {
        if ($key === 'signature') {
            continue;
        }

        $path = $prefix === '' ? (string) $key : $prefix . ':' . $key;

        if (is_array($value)) {
            $result += flatten($value, $path);
            continue;
        }

        if (is_bool($value)) {
            $value = $value ? '1' : '0';
        }

        $result[$path] = $path . ':' . (string) ($value ?? '');
    }

    return $result;
}

function signCallback(array $data, string $secretKey): string
{
    $flat = flatten($data);
    ksort($flat, SORT_NATURAL);

    return base64_encode(hash_hmac('sha512', implode(';', $flat), $secretKey, true));
}

$callback = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
$receivedSignature = $callback['signature'] ?? '';
$expectedSignature = signCallback($callback, $_ENV['PP_SECRET_KEY']);

if (!hash_equals($expectedSignature, $receivedSignature)) {
    http_response_code(400);
    echo 'Invalid signature';
    exit;
}

$paymentId = $callback['payment_id'] ?? null;
$paymentStatus = $callback['payment']['status'] ?? null;

// Persist the result in your own storage.

http_response_code(200);
echo 'OK';
```

```python [Python / Flask]
import base64
import hashlib
import hmac
from flask import Flask, request

app = Flask(__name__)


def flatten(value, path="", result=None):
    if result is None:
        result = []

    if isinstance(value, list):
        for index, item in enumerate(value):
            flatten(item, f"{path}:{index}" if path else str(index), result)
        return result

    if isinstance(value, dict):
        for key, item in value.items():
            if key == "signature":
                continue
            flatten(item, f"{path}:{key}" if path else key, result)
        return result

    if isinstance(value, bool):
        value = "1" if value else "0"
    elif value is None:
        value = ""
    else:
        value = str(value)

    result.append(f"{path}:{value}")
    return result


def sign_callback(data, secret_key):
    string_to_sign = ";".join(sorted(flatten(data)))
    digest = hmac.new(secret_key.encode(), string_to_sign.encode(), hashlib.sha512).digest()
    return base64.b64encode(digest).decode()


@app.post("/api/payment-page/callback")
def payment_page_callback():
    callback = request.get_json()
    received_signature = callback.get("signature", "")
    expected_signature = sign_callback(callback, "<secret_key>")

    if not hmac.compare_digest(received_signature, expected_signature):
        return {"message": "Invalid signature"}, 400

    payment_id = callback.get("payment_id")
    payment_status = callback.get("payment", {}).get("status")

    # Persist the result in your own storage.
    print(payment_id, payment_status)

    return "OK", 200
```

:::

## Expected HTTP response

Return a synchronous acknowledgement from your callback endpoint:

- `200 OK` when the callback is accepted and stored
- `400 Bad Request` when signature verification fails or the payload is malformed

Do not perform long-running work before replying. If needed, save the payload, enqueue internal processing, and respond immediately.

## What to read next

- [Basic implementation](./pp-quickstart-basic-implementation)
- [Opening via JS library](./pp-opening-modal-via-javascript-library)
- [Opening in iframe via JS library](./pp-opening-iframe-via-javascript-library)
