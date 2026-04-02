# Payment instrument verification

Gate can be used to verify a payment instrument before a later purchase or payout flow. Verification can be based on a zero-amount check or on authorising a non-zero amount, depending on the project setup.

## What this section covers

- verification use cases
- supported verification workflows
- request and callback handling
- specifics of verification by card number or by token

## Related materials

- [**Using tokens**](./gate-token.md) — working with stored payment credentials.
- [**Auxiliary procedures**](./gate-procedures.md) — additional steps that may accompany verification.
- [**API Description**](./gate-sts-protocol.md) — technical reference for request and callback formats.

## Scope

Use this section when you need to validate a card or another supported payment instrument before subsequent operations.
