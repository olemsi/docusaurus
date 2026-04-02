# Host-to-host API

This page maps the Host-to-host API section and shows the recommended reading order.

## Start here

If you want to launch Host-to-host API quickly, begin with these pages:

- [**Quickstart**](./gate-quickstart.md) — shortest path to a first working request.
- [**Basic implementation**](./gate-quickstart-basic-implementation.md) — request signing, API call examples, and callback processing.
- [**Integration overview**](./gate-how-to-integrate.md) — what Host-to-host API is for and when to choose it.

## Integration guides

Use these pages to understand the backend architecture behind the quickstart:

- [**Interaction concepts**](./gate-interaction-organisation.md) — how your web service exchanges requests and callbacks with the platform.
- [**Request format**](./gate-requests-format.md) — how to structure HTTP requests to the API.
- [**Signature generation**](./signature-gate.md) — how to sign requests and verify callbacks.

## Payment flows

Use these pages for concrete business operations:

- [**One-time purchases**](./gate-purchase.md) — one-step and two-step purchases.
- [**Payment link purchases**](./gate-invoice.md) — Payment Widget-backed purchases initiated by a link.
- [**Credential-on-file (COF) purchases**](./gate--payments-on-saved-data.md) — recurring and saved-credential payments.
- [**Purchase refunds**](./gate-refund.md) — refunding completed purchases.
- [**Payouts**](./gate-payout.md) — transfers from merchant to customer.
- [**Payment instrument verification**](./gate-account-verification.md) — validating cards and other payment instruments.

## Advanced and reference

- [**Auxiliary procedures**](./gate-procedures.md) — 3-D Secure, clarification, AVS, and conversion.
- **Additional capabilities** — payment status requests, cascading, receipts, tokens, and more.
- [**API Description**](./gate-sts-protocol.md) — requests, signatures, formats, and test cards.
