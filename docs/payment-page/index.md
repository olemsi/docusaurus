# Payment Widget

Payment Widget is a hosted checkout form for launching payments without building the payment UI and card-data flow on your side.

The practical integration model is simple:

1. Your back end signs the final Payment Widget parameters.
2. Your front end opens the hosted form.
3. The platform sends the payment result callback back to your server.

You can open Payment Widget in a redirect flow, a modal window, or an embedded iframe. For most teams, the fastest route is to start with the quickstart and copy-paste examples, then move to scenario-specific and reference pages only after the first working payment.

## Start here

- [**Quickstart**](./pp-quickstart-overview) — shortest path to a first working integration.
- [**Basic implementation**](./pp-quickstart-basic-implementation) — server signing, frontend opening, and callback handling with code examples.
- [**Callback handling**](./pp-interaction) — how to receive, verify, and acknowledge callbacks.

## Integration guides

- [**Section map**](./pp-about) — overview of the whole Payment Widget documentation tree.
- [**Integration overview**](./pp-interaction-organisation-overview) — what Payment Widget does and when to use it.
- [**Interaction model**](./pp-general-interaction) — frontend/backend/platform responsibilities in one page.
- [**UX configuration**](./pp-ux-configuration) — redirect, modal, and iframe options.
- [**Open in a modal via `merchant.js`**](./pp-opening-modal-via-javascript-library) — fastest embedded frontend flow.
- [**Open in an iframe via `merchant.js`**](./pp-opening-iframe-via-javascript-library) — embed the form inside your checkout layout.

## Payment scenarios

- [**Scenario overview**](./pp-basic-actions) — main customer-facing actions supported by Payment Widget.
- [**Purchase processing**](./pp-purchase) — one-step checkout.
- [**Authorisation hold**](./pp-purchase-auth) — two-step purchase flow.
- [**COF purchase registration**](./pp-recurring) — saving credentials for future debits.
- [**Payment verification**](./pp-account-verification) — validating a payment instrument.
- [**Tokenization**](./pp-token) — collecting payment data and creating reusable tokens.

## Advanced and reference

- [**Additional capabilities**](./pp) — 3-D Secure, AVS, conversion, customer data collection, and other optional capabilities.
- [**Customisation**](./pp--design-customisation) — controlling Payment Widget appearance and structure.
- [**API Description**](./pp-api) — parameters, formats, and test data.
