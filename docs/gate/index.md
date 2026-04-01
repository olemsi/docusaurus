# Host-to-host API

Host-to-host API is the direct server-to-server integration mode for merchants that want full control over their own checkout, server-side payment logic, and payment-data flow.

Use Host-to-host API when you want to:

- build your own payment form instead of using Payment Widget
- send payment requests directly from your back end
- receive synchronous API responses and asynchronous callbacks
- manage purchase, refund, payout, and verification flows from your own system

Processing card payments through Host-to-host API requires your side of the payment flow to meet the relevant compliance requirements, because the payment UI and card-data collection are handled in your own environment.

## Start here

- [**Quickstart**](./gate-quickstart) — shortest path to a first working Host-to-host API integration.
- [**Basic implementation**](./gate-quickstart-basic-implementation) — request signing, purchase request, response handling, and callbacks with copy-paste code.
- [**Integration overview**](./gate-how-to-integrate) — when Host-to-host API is the right interface and how the architecture works.

## Integration guides

- [**Section map**](./gate-integration-about) — overview of the Host-to-host API documentation tree.
- [**Interaction concepts**](./gate-interaction-organisation) — roles of your web service and the platform.
- [**Request format**](./gate-requests-format) — how to structure POST requests to the API.
- [**Signature generation**](./signature-gate) — how to sign requests and verify callbacks.

## Payment flows

- [**One-time purchases**](./gate-purchase) — one-step and two-step customer-to-merchant payments.
- [**Payment link purchases**](./gate-invoice) — Payment Widget-backed purchases initiated by a link.
- [**Credential-on-file (COF) purchases**](./gate--payments-on-saved-data) — recurring and saved-credential flows.
- [**Purchase refunds**](./gate-refund) — full and partial refunds.
- [**Payouts**](./gate-payout) — merchant-to-customer transfers.
- [**Payment instrument verification**](./gate-account-verification) — validating cards and other instruments.

## Advanced and reference

- [**Auxiliary procedures**](./gate-procedures) — 3-D Secure, clarification, AVS, conversion, and other required procedures.
- [**Additional capabilities**](./gate) — payment status requests, cascading, receipts, tokens, and related capabilities.
- [**API Description**](./gate-sts-protocol) — technical reference and endpoint details.
