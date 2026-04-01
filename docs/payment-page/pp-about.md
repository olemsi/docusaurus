# Payment Widget

This page maps the Payment Widget section and shows the recommended reading order.

## Start here

If you want to launch Payment Widget quickly, read these pages first:

- [**Overview**](./index) — what Payment Widget is and how the integration works at a high level.
- [**Quick start**](./pp-quickstart-overview) — shortest path to a first working integration.
- [**Basic implementation**](./pp-quickstart-basic-implementation) — copy-paste examples for signing, opening the form, and receiving callbacks.
- [**Callback handling**](./pp-interaction) — how to treat callbacks as the source of truth for payment status.

## Integration guides

Use these articles when you need to understand the structure behind the quickstart:

- [**Integration overview**](./pp-interaction-organisation-overview) — what Payment Widget does and when to use it.
- [**Interaction model**](./pp-general-interaction) — the roles of the browser, your back end, and the payment platform.
- [**UX configuration**](./pp-ux-configuration) — redirect, modal, and iframe display options.
- [**Open in a modal via `merchant.js`**](./pp-opening-modal-via-javascript-library) — code-first modal example.
- [**Open in an iframe via `merchant.js`**](./pp-opening-iframe-via-javascript-library) — code-first embedded checkout example.

## Payment scenarios

Use these pages for concrete checkout flows:

- [**Scenario overview**](./pp-basic-actions) — map of customer-facing payment tasks.
- [**Purchase processing**](./pp-purchase) — one-step purchases.
- [**Authorisation hold**](./pp-purchase-auth) — two-step purchases.
- [**COF purchase registration**](./pp-recurring) — storing credentials for future payments.
- [**Payment verification**](./pp-account-verification) — validating a payment instrument.
- [**Tokenization**](./pp-token) — generating reusable payment tokens.

## Additional capabilities

Move here after the base flow is already working:

- [**Auxiliary procedures and additional capabilities**](./pp) — 3-D Secure, AVS, clarification, conversion, customer data collection, and other extensions.
- [**Customisation**](./pp--design-customisation) — adjusting the appearance and structure of the payment form.

## Technical reference

Use these pages when you need exact parameter or payload details:

- [**Payment Widget API Description**](./pp-api) — parameters, data formats, and test data.
