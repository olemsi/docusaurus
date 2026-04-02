# Signature generation

This page shows the shortest way to generate a Payment Widget signature for the first integration.

## What this page helps you do

Use this page if you need only four answers:

- what exactly gets signed
- in what order fields are processed
- what hash algorithm is used
- what code you can copy into your backend

## Use this algorithm

For the first Payment Widget request, use this signing flow:

1. Build the full parameter set first.
2. Remove `signature` from the data you sign.
3. Convert every field into `name:value`.
4. Sort the resulting strings in natural order.
5. Join them with `;`.
6. Calculate HMAC-SHA-512 with your `secret_key`.
7. Base64-encode the raw binary digest.
8. Put the result back into the `signature` field.

## Minimal example

Start from this parameter set:

```json
{
  "project_id": 57123,
  "payment_id": "payment_443",
  "payment_amount": 1815,
  "payment_currency": "EUR",
  "customer_id": "customer_112",
  "payment_description": "Test order #443",
  "language_code": "en"
}
```

## The exact string to sign

For the example above, the sorted field list becomes:

```text
customer_id:customer_112
language_code:en
payment_amount:1815
payment_currency:EUR
payment_description:Test order #443
payment_id:payment_443
project_id:57123
```

Joined with `;`, the final `string to sign` is:

```text
customer_id:customer_112;language_code:en;payment_amount:1815;payment_currency:EUR;payment_description:Test order #443;payment_id:payment_443;project_id:57123
```

## Copy-paste examples

::: code-group

```js [Node.js]
const crypto = require('crypto');

const params = {
  project_id: 57123,
  payment_id: 'payment_443',
  payment_amount: 1815,
  payment_currency: 'EUR',
  customer_id: 'customer_112',
  payment_description: 'Test order #443',
  language_code: 'en'
};

const stringToSign = Object.entries(params)
  .map(([key, value]) => `${key}:${value}`)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .join(';');

const signature = crypto
  .createHmac('sha512', process.env.PP_SECRET_KEY)
  .update(stringToSign)
  .digest('base64');

const signedParams = { ...params, signature };

console.log(stringToSign);
console.log(signedParams);
```

```php [PHP]
<?php

$params = [
    'project_id' => 57123,
    'payment_id' => 'payment_443',
    'payment_amount' => 1815,
    'payment_currency' => 'EUR',
    'customer_id' => 'customer_112',
    'payment_description' => 'Test order #443',
    'language_code' => 'en',
];

$lines = [];

foreach ($params as $key => $value) {
    $lines[] = $key . ':' . $value;
}

sort($lines, SORT_NATURAL);

$stringToSign = implode(';', $lines);
$signature = base64_encode(hash_hmac('sha512', $stringToSign, $_ENV['PP_SECRET_KEY'], true));

$params['signature'] = $signature;

echo $stringToSign . PHP_EOL;
echo json_encode($params, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
```

```python [Python]
import base64
import hashlib
import hmac
import os

params = {
    "project_id": 57123,
    "payment_id": "payment_443",
    "payment_amount": 1815,
    "payment_currency": "EUR",
    "customer_id": "customer_112",
    "payment_description": "Test order #443",
    "language_code": "en",
}

string_to_sign = ";".join(
    sorted(f"{key}:{value}" for key, value in params.items())
)

signature = base64.b64encode(
    hmac.new(
        os.environ["PP_SECRET_KEY"].encode(),
        string_to_sign.encode(),
        hashlib.sha512
    ).digest()
).decode()

params["signature"] = signature

print(string_to_sign)
print(params)
```

:::

## Final signed URL

Once the signature is generated, the opening URL is:

```text
https://paymentpage.platform.dev/payment?<signed_query_string>
```

In practice, your backend usually returns either:

- the final signed URL for redirect flow
- the signed parameter object for `merchant.js`

## Important note about nested parameters

The example on this page covers the first flat parameter set used in a basic Payment Widget launch.

If you later add nested objects or advanced parameters, encode them according to Payment Widget parameter rules first, and only then generate the signature for the final transmitted values.

## What to read next

- [Quick start](./pp-quickstart-overview.md)
- [Basic implementation](./pp-quickstart-basic-implementation.md)
- [Callback handling](./pp-interaction.md)
