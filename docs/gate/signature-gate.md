# Signature generation

This page shows the shortest way to generate a Gate signature for the first integration.

## What this page helps you do

Use this page if you need only four answers:

- what exactly gets signed
- how nested JSON fields are flattened
- what hash algorithm is used
- what code you can copy into your backend

## Use this algorithm

For a Gate request, use this signing flow:

1. Build the full JSON payload first.
2. Remove every `signature` field from the data you sign.
3. Flatten the payload into `path:key:value` strings.
4. Sort the resulting strings in natural order.
5. Join them with `;`.
6. Calculate HMAC-SHA-512 with your `secret_key`.
7. Base64-encode the raw binary digest.
8. Put the result back into `general.signature`.

## Minimal example

Start from this request payload:

```json
{
  "general": {
    "project_id": 57123,
    "payment_id": "order_443"
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

## The exact string to sign

For the example above, the sorted field list becomes:

```text
card:card_holder:JOHN DOE
card:cvv:123
card:month:12
card:pan:4000000000000077
card:year:2027
customer:id:customer_112
customer:ip_address:203.0.113.10
general:payment_id:order_443
general:project_id:57123
payment:amount:1815
payment:currency:EUR
payment:description:Test order #443
```

Joined with `;`, the final `string to sign` is:

```text
card:card_holder:JOHN DOE;card:cvv:123;card:month:12;card:pan:4000000000000077;card:year:2027;customer:id:customer_112;customer:ip_address:203.0.113.10;general:payment_id:order_443;general:project_id:57123;payment:amount:1815;payment:currency:EUR;payment:description:Test order #443
```

## Copy-paste examples

::: code-group

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

const signature = crypto
  .createHmac('sha512', process.env.GATE_SECRET_KEY)
  .update(stringToSign)
  .digest('base64');

payload.general.signature = signature;

console.log(stringToSign);
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

$stringToSign = implode(';', $flat);
$payload['general']['signature'] = base64_encode(
    hash_hmac('sha512', $stringToSign, $_ENV['GATE_SECRET_KEY'], true)
);

echo $stringToSign . PHP_EOL;
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
signature = base64.b64encode(
    hmac.new(
        os.environ["GATE_SECRET_KEY"].encode(),
        string_to_sign.encode(),
        hashlib.sha512
    ).digest()
).decode()

payload["general"]["signature"] = signature

print(string_to_sign)
print(json.dumps(payload, indent=2))
```

:::

## Where the signature goes

In the standard Gate request shape, place the generated signature into:

```json
{
  "general": {
    "project_id": 57123,
    "payment_id": "order_443",
    "signature": "<generated-signature>"
  }
}
```

## Important notes

- Always build the full payload first and sign only the final version.
- Do not include `signature` itself in the signature input.
- Arrays are flattened with zero-based indexes, for example `positions:0:amount:108`.
- Boolean values should be converted to `1` or `0` before signing.

## What to read next

- [Quickstart](./gate-quickstart)
- [Basic implementation](./gate-quickstart-basic-implementation)
- [Request format](./gate-requests-format)
