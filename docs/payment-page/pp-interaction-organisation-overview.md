# Integration overview

Use Payment Widget when you want the platform to host the checkout UI while your web service controls the payment session, order state, and customer return flow.

## What you implement

In the simplest integration, your system does four things:

1. Collects the payment data required to open the payment form.
2. Signs the final parameter set on the server side.
3. Opens Payment Widget in the browser.
4. Receives callbacks and updates the order status in your system.

## Why merchants choose Payment Widget

- You do not need to build and maintain your own checkout UI.
- You can open the form in a new tab, modal, or iframe.
- The same integration can later be extended with recurring payments, tokenization, custom design, and other capabilities.
- Card payments can be processed without the merchant handling raw card data directly in its own UI.

## Recommended reading order

- [**Quick start**](./pp-quickstart-overview) — the fastest path to the first working integration.
- [**Basic implementation**](./pp-quickstart-basic-implementation) — copy-paste examples for signing requests, opening the form, and handling callbacks.
- [**UX configuration**](./pp-ux-configuration) — choose whether the form opens in a new tab, modal, or iframe.
- [**Parameters for opening the payment form**](./pp-parameters) — full parameter reference after the basic flow is working.
- [**Callback format**](./pp-interaction) — payload structure and response expectations.

## Minimum requirements

- TLS 1.2 or higher
- HTTP 1.1 or higher
- UTF-8 for request and callback data
- a project identifier and secret key issued for your test environment

## Integration model

The signing step must happen on the server side because it uses your secret key. The form-opening step happens on the client side, either by redirecting the customer to the hosted page or by opening the form with `merchant.js`.

If you need the quickest possible start, begin with [**Basic implementation**](./pp-quickstart-basic-implementation) and return to the reference pages only when the baseline checkout flow already works.
