# Payment Widget

This page maps the Payment Widget section and shows the recommended reading order.

## Start here

If you want to launch Payment Widget quickly, read these pages first:

- [**Overview**](./index.md) — what Payment Widget is and how the integration works at a high level.
- [**Quick start**](./pp-quickstart-overview.md) — shortest path to a first working integration.
- [**Basic implementation**](./pp-quickstart-basic-implementation.md) — copy-paste examples for signing, opening the form, and receiving callbacks.
- [**Callback handling**](./pp-interaction.md) — how to treat callbacks as the source of truth for payment status.

## Integration guides

Use these articles when you need to understand the structure behind the quickstart:

- [**Integration overview**](./pp-interaction-organisation-overview.md) — what Payment Widget does and when to use it.
- [**Interaction model**](./pp-general-interaction.md) — the roles of the browser, your back end, and the payment platform.
- [**UX configuration**](./pp-ux-configuration.md) — redirect, modal, and iframe display options.
- [**Open in a modal via `merchant.js`**](./pp-opening-modal-via-javascript-library.md) — code-first modal example.
- [**Open in an iframe via `merchant.js`**](./pp-opening-iframe-via-javascript-library.md) — code-first embedded checkout example.

## Payment scenarios

Use these pages for concrete checkout flows:

- [**Scenario overview**](./pp-basic-actions.md) — map of customer-facing payment tasks.
- [**Purchase processing**](./pp-purchase.md) — one-step purchases.
- [**Authorisation hold**](./pp-purchase-auth.md) — two-step purchases.
- [**COF purchase registration**](./pp-recurring.md) — storing credentials for future payments.
- [**Payment verification**](./pp-account-verification.md) — validating a payment instrument.
- [**Tokenization**](./pp-token.md) — generating reusable payment tokens.

## Additional capabilities

Move here after the base flow is already working:

- [**Auxiliary procedures and additional capabilities**](./pp.md) — 3-D Secure, AVS, clarification, conversion, customer data collection, and other extensions.
- [**Customisation**](./pp--design-customisation.md) — adjusting the appearance and structure of the payment form.

## Technical reference

Use these pages when you need exact parameter or payload details:

- [**Payment Widget API Description**](./pp-api.md) — parameters, data formats, and test data.
