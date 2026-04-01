# Host-to-host API

This page maps the Host-to-host API section and shows the recommended reading order.

## Start here

If you want to launch Host-to-host API quickly, begin with these pages:

- [**Quickstart**](./gate-quickstart) — shortest path to a first working request.
- [**Basic implementation**](./gate-quickstart-basic-implementation) — request signing, API call examples, and callback processing.
- [**Integration overview**](./gate-how-to-integrate) — what Host-to-host API is for and when to choose it.

## Integration guides

Use these pages to understand the backend architecture behind the quickstart:

- [**Interaction concepts**](./gate-interaction-organisation) — how your web service exchanges requests and callbacks with the platform.
- [**Request format**](./gate-requests-format) — how to structure HTTP requests to the API.
- [**Signature generation**](./signature-gate) — how to sign requests and verify callbacks.

## Payment flows

Use these pages for concrete business operations:

- [**One-time purchases**](./gate-purchase) — one-step and two-step purchases.
- [**Payment link purchases**](./gate-invoice) — Payment Widget-backed purchases initiated by a link.
- [**Credential-on-file (COF) purchases**](./gate--payments-on-saved-data) — recurring and saved-credential payments.
- [**Purchase refunds**](./gate-refund) — refunding completed purchases.
- [**Payouts**](./gate-payout) — transfers from merchant to customer.
- [**Payment instrument verification**](./gate-account-verification) — validating cards and other payment instruments.

## Advanced and reference

- [**Auxiliary procedures**](./gate-procedures) — 3-D Secure, clarification, AVS, and conversion.
- [**Additional capabilities**](./gate) — payment status requests, cascading, receipts, tokens, and more.
- [**API Description**](./gate-sts-protocol) — requests, signatures, formats, and test cards.
