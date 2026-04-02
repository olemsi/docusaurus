# Payment Widget

Payment Widget is a hosted checkout form for launching payments without building the payment UI and card-data flow on your side.

The practical integration model is simple:

1. Your back end signs the final Payment Widget parameters.
2. Your front end opens the hosted form.
3. The platform sends the payment result callback back to your server.

You can open Payment Widget in a redirect flow, a modal window, or an embedded iframe. For most teams, the fastest route is to start with the quickstart and copy-paste examples, then move to scenario-specific and reference pages only after the first working payment.

## Start here

- [**Quickstart**](./pp-quickstart-overview.md) — shortest path to a first working integration.
- [**Basic implementation**](./pp-quickstart-basic-implementation.md) — server signing, frontend opening, and callback handling with code examples.
- [**Callback handling**](./pp-interaction.md) — how to receive, verify, and acknowledge callbacks.

## Integration guides

- [**Section map**](./pp-about.md) — overview of the whole Payment Widget documentation tree.
- [**Integration overview**](./pp-interaction-organisation-overview.md) — what Payment Widget does and when to use it.
- [**Interaction model**](./pp-general-interaction.md) — frontend/backend/platform responsibilities in one page.
- [**UX configuration**](./pp-ux-configuration.md) — redirect, modal, and iframe options.
- [**Open in a modal via `merchant.js`**](./pp-opening-modal-via-javascript-library.md) — fastest embedded frontend flow.
- [**Open in an iframe via `merchant.js`**](./pp-opening-iframe-via-javascript-library.md) — embed the form inside your checkout layout.

## Payment scenarios

- [**Scenario overview**](./pp-basic-actions.md) — main customer-facing actions supported by Payment Widget.
- [**Purchase processing**](./pp-purchase.md) — one-step checkout.
- [**Authorisation hold**](./pp-purchase-auth.md) — two-step purchase flow.
- [**COF purchase registration**](./pp-recurring.md) — saving credentials for future debits.
- [**Payment verification**](./pp-account-verification.md) — validating a payment instrument.
- [**Tokenization**](./pp-token.md) — collecting payment data and creating reusable tokens.

## Advanced and reference

- [**Additional capabilities**](./pp.md) — 3-D Secure, AVS, conversion, customer data collection, and other optional capabilities.
- [**Customisation**](./pp--design-customisation.md) — controlling Payment Widget appearance and structure.
- [**API Description**](./pp-api.md) — parameters, formats, and test data.
