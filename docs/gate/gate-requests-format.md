# Request format

All requests to Gate are sent as HTTP `POST` requests with a JSON body.

## What this page helps you do

Use this page if you need to:

- understand the structure of a Gate request
- know which address to call
- separate request acceptance from final payment result handling

## Base structure

A Gate request consists of:

1. the HTTPS endpoint URL
2. HTTP headers such as `Content-Type: application/json`
3. a JSON request body
4. the `signature` field inside the request body

## Base URL and endpoint

The Gate base URL is:

```text
https://api.platform.dev
```

The full request URL is:

```text
https://api.platform.dev/<endpoint>
```

Example for a one-step card purchase:

```text
https://api.platform.dev/v2/payment/card/sale
```

## Minimal example

```http
POST /v2/payment/card/sale HTTP/1.1
Host: api.platform.dev
Content-Type: application/json
```

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

## Common response codes

For request submission, the main synchronous HTTP codes are:

- `200 OK` — the request has been accepted for processing
- `400 Bad Request` — required data is missing or the signature is invalid
- `403 Forbidden` — access is blocked, for example by IP restrictions
- `422 Unprocessable Entity` — the JSON request body is malformed
- `500 Internal Server Error` — the platform is temporarily unavailable

The final payment result should still be taken from the callback flow, not from the synchronous HTTP response alone.

## What to read next

- [Basic implementation](./gate-quickstart-basic-implementation)
- [Signature generation](./signature-gate)
- [One-time purchases](./gate-purchase)
