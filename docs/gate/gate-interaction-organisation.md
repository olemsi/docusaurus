# Interaction concepts

This page explains the Gate architecture at a practical level.

## What Gate actually does

Gate is a server-to-server API. Your system sends payment requests directly to the platform and receives:

- a synchronous HTTP response about request acceptance
- asynchronous callbacks with intermediate or final processing results

Unlike Payment Widget, Gate does not host the checkout UI for you. Your system owns the payment interface and customer interaction flow.

## The three parts of a Gate integration

Every Gate integration includes these parts:

- your frontend or checkout layer, where the customer enters payment data
- your backend, where you build requests, sign them, send them, and process callbacks
- the payment platform, which processes the request and returns result data

## Typical request lifecycle

1. The customer starts a payment in your checkout.
2. Your backend builds the final JSON payload.
3. Your backend signs the payload with the secret key.
4. Your backend sends an HTTP `POST` request to the required Gate endpoint.
5. The platform validates the request and returns a synchronous response.
6. The platform continues processing the payment.
7. Your backend receives one or more callbacks with intermediate or final result data.
8. Your system verifies the callback signature and updates internal payment state.

## What this means for implementation

The most important engineering rules are:

- sign the final payload only after all request data is added
- never expose the secret key outside the server side
- use the synchronous response for request acceptance only
- use callbacks as the source of truth for payment status

## What to read next

- [Quickstart](./gate-quickstart.md)
- [Basic implementation](./gate-quickstart-basic-implementation.md)
- [Request format](./gate-requests-format.md)
- [Signature generation](./signature-gate.md)
