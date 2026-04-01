# Basic implementation

This page is the code-first entry point for integrating Gate.

## What this page helps you do

Use this guide if you want to:

- send a first purchase request to Gate
- keep signing logic on the server side
- handle synchronous API responses correctly
- receive callbacks and update payment status

## Credentials you need first

Before writing code, obtain these two values for your test project:

- `project_id` — the merchant project identifier assigned by Platform during onboarding
- `secret_key` — the signing key for that same project and environment

If you do not have them yet, ask your Platform account manager or technical support to issue a test project for Gate and provide the test `project_id` and `secret_key`.

## Integration in one minute

A minimal Gate integration has three mandatory backend parts:

1. Build and sign the final JSON payload.
2. Send the payload to the required Gate endpoint.
3. Receive the callback and verify its signature.

## Minimal purchase request

For a first card purchase, assume the following data:

| Field | Example value |
| --- | --- |
| `project_id` | `57123` |
| `payment_id` | `order_443` |
| `customer.id` | `customer_112` |
| `payment.amount` | `1815` |
| `payment.currency` | `EUR` |
| `card.pan` | `4000000000000077` |
| `card.month` | `12` |
| `card.year` | `2027` |
| `card.card_holder` | `JOHN DOE` |
| `card.cvv` | `123` |

The first launch path is a one-step purchase request to:

```text
https://api.platform.dev/v2/payment/card/sale
```

## Copy this request shape first

If you only need to understand what the first request looks like, start from this exact JSON structure:

```json
{
  "general": {
    "project_id": 57123,
    "payment_id": "order_443",
    "signature": "<server-generated-signature>"
  },
  "customer": {
    "id": "customer_112",
    "ip_address": "203.0.113.10"
  },
  "payment": {
    "amount": 1815,
    "currency": "EUR",
    "description": "Test order #443"
  },
  "card": {
    "pan": "4000000000000077",
    "month": "12",
    "year": "2027",
    "card_holder": "JOHN DOE",
    "cvv": "123"
  }
}
```

What matters:

- send it to `https://api.platform.dev/v2/payment/card/sale`
- assemble the full payload first
- generate `general.signature` last
- send the request from your server, not from browser code

## Step 1. Build and sign the request

Use one of these examples on the server side.

::: code-group

```bash [cURL]
curl --request POST \
  --url https://api.platform.dev/v2/payment/card/sale \
  --header 'Content-Type: application/json' \
  --data '{
    "general": {
      "project_id": 57123,
      "payment_id": "order_443",
      "signature": "<server-generated-signature>"
    },
    "customer": {
      "id": "customer_112",
      "ip_address": "203.0.113.10"
    },
    "payment": {
      "amount": 1815,
      "currency": "EUR",
      "description": "Test order #443"
    },
    "card": {
      "pan": "4000000000000077",
      "month": "12",
      "year": "2027",
      "card_holder": "JOHN DOE",
      "cvv": "123"
    }
  }'
```

```js [Node.js]
const crypto = require('crypto');

const payload = {
  general: {
    project_id: 57123,
    payment_id: 'order_443'
  },
  customer: {
    id: 'customer_112',
    ip_address: '203.0.113.10'
  },
  payment: {
    amount: 1815,
    currency: 'EUR',
    description: 'Test order #443'
  },
  card: {
    pan: '4000000000000077',
    month: '12',
    year: '2027',
    card_holder: 'JOHN DOE',
    cvv: '123'
  }
};

function flatten(value, path = '', result = []) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => flatten(item, path ? `${path}:${index}` : `${index}`, result));
    return result;
  }

  if (value && typeof value === 'object') {
    Object.keys(value).forEach((key) => {
      if (key === 'signature') return;
      flatten(value[key], path ? `${path}:${key}` : key, result);
    });
    return result;
  }

  const normalized =
    typeof value === 'boolean' ? (value ? '1' : '0') : value === null || value === undefined ? '' : String(value);

  result.push(`${path}:${normalized}`);
  return result;
}

const stringToSign = flatten(payload)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .join(';');

payload.general.signature = crypto
  .createHmac('sha512', process.env.GATE_SECRET_KEY)
  .update(stringToSign)
  .digest('base64');

console.log(JSON.stringify(payload, null, 2));
```

```php [PHP]
<?php

$payload = [
    'general' => [
        'project_id' => 57123,
        'payment_id' => 'order_443',
    ],
    'customer' => [
        'id' => 'customer_112',
        'ip_address' => '203.0.113.10',
    ],
    'payment' => [
        'amount' => 1815,
        'currency' => 'EUR',
        'description' => 'Test order #443',
    ],
    'card' => [
        'pan' => '4000000000000077',
        'month' => '12',
        'year' => '2027',
        'card_holder' => 'JOHN DOE',
        'cvv' => '123',
    ],
];

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

$flat = flatten($payload);
ksort($flat, SORT_NATURAL);

$payload['general']['signature'] = base64_encode(
    hash_hmac('sha512', implode(';', $flat), $_ENV['GATE_SECRET_KEY'], true)
);

echo json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
```

```python [Python]
import base64
import hashlib
import hmac
import json
import os

payload = {
    "general": {
        "project_id": 57123,
        "payment_id": "order_443",
    },
    "customer": {
        "id": "customer_112",
        "ip_address": "203.0.113.10",
    },
    "payment": {
        "amount": 1815,
        "currency": "EUR",
        "description": "Test order #443",
    },
    "card": {
        "pan": "4000000000000077",
        "month": "12",
        "year": "2027",
        "card_holder": "JOHN DOE",
        "cvv": "123",
    },
}


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


string_to_sign = ";".join(sorted(flatten(payload)))
digest = hmac.new(os.environ["GATE_SECRET_KEY"].encode(), string_to_sign.encode(), hashlib.sha512).digest()
payload["general"]["signature"] = base64.b64encode(digest).decode()

print(json.dumps(payload, indent=2))
```

:::

## Step 2. Send the request and read the synchronous response

Once the payload is signed, send it to the Gate endpoint.

::: code-group

```js [Node.js]
const response = await fetch('https://api.platform.dev/v2/payment/card/sale', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
});

const result = await response.json();

console.log(response.status, result);
```

```php [PHP + Guzzle]
<?php

use GuzzleHttp\Client;

$client = new Client();
$response = $client->post('https://api.platform.dev/v2/payment/card/sale', [
    'headers' => ['Content-Type' => 'application/json'],
    'json' => $payload,
]);

echo $response->getStatusCode() . PHP_EOL;
echo $response->getBody();
```

```python [Python + requests]
import requests

response = requests.post(
    'https://api.platform.dev/v2/payment/card/sale',
    json=payload,
    headers={'Content-Type': 'application/json'},
    timeout=30,
)

print(response.status_code)
print(response.json())
```

:::

## Expected synchronous response

For the first integration, treat the synchronous response as request acceptance feedback:

- `200 OK` means the request was accepted for processing
- `400 Bad Request` usually means missing required data or an invalid signature
- `403 Forbidden` usually means access restrictions such as IP allowlisting
- `422 Unprocessable Entity` means the JSON body is malformed

Even after `200 OK`, use callbacks as the source of truth for the final payment result.

## Step 3. Receive and verify the callback

The platform sends the payment result to your callback endpoint asynchronously.

::: code-group

```js [Node.js / Express]
app.post('/api/gate/callback', express.json(), (req, res) => {
  const callback = req.body;
  const receivedSignature = callback.signature;
  const expectedSignature = sign(callback, process.env.GATE_SECRET_KEY);

  if (receivedSignature !== expectedSignature) {
    return res.status(400).json({ message: 'Invalid signature' });
  }

  const paymentId = callback.payment?.id || callback.general?.payment_id;
  const paymentStatus = callback.payment?.status;

  // Persist the result in your own storage.
  console.log({ paymentId, paymentStatus });

  return res.status(200).send('OK');
});
```

```php [PHP]
<?php

$callback = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
$receivedSignature = $callback['signature'] ?? '';
$expectedSignature = base64_encode(hash_hmac('sha512', implode(';', flatten($callback)), $_ENV['GATE_SECRET_KEY'], true));

if (!hash_equals($expectedSignature, $receivedSignature)) {
    http_response_code(400);
    echo 'Invalid signature';
    exit;
}

http_response_code(200);
echo 'OK';
```

```python [Python / Flask]
@app.post("/api/gate/callback")
def gate_callback():
    callback = request.get_json()
    received_signature = callback.get("signature", "")
    expected_signature = sign_callback(callback, os.environ["GATE_SECRET_KEY"])

    if not hmac.compare_digest(received_signature, expected_signature):
        return {"message": "Invalid signature"}, 400

    return "OK", 200
```

:::

## First-test checklist

- the request payload is fully assembled before signing
- the `signature` field is excluded from the signature input
- the request is sent to the correct Gate endpoint
- the callback endpoint is reachable by the platform
- the callback handler returns `HTTP 200 OK` after successful verification

## What to read next

- [Quickstart](./gate-quickstart)
- [One-time purchases](./gate-purchase)
- [Request format](./gate-requests-format)
- [Signature generation](./signature-gate)
