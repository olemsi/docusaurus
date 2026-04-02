# Interaction model

This page explains the Payment Widget architecture at a practical level.

## What Payment Widget actually does

Payment Widget is a hosted checkout form. Your system does not collect or submit the payment data directly. Instead:

1. your back end prepares and signs the opening parameters
2. your front end opens the hosted form
3. the customer completes the payment in the hosted UI
4. the platform processes the payment
5. your back end receives the callback with the result

## The three systems in every integration

Every Payment Widget integration includes these parts:

- your front end, where the customer starts checkout
- your back end, where you sign parameters and process callbacks
- the payment platform, which hosts the payment form and sends result callbacks

## Recommended architecture

For most integrations, use this split:

- front end: collect order context and ask your server for signed Payment Widget data
- back end: add final parameters, generate the signature, validate callbacks
- Payment Widget: display the hosted checkout and collect payment data from the customer

This keeps your secret key out of the browser and gives you a single trusted place to update payment status.

## Typical payment flow

1. The customer clicks your checkout button.
2. Your front end sends order data to your back end.
3. Your back end generates the final signed parameter set.
4. Your front end opens Payment Widget in a redirect, modal, or iframe flow.
5. The customer completes the payment steps in the hosted form.
6. The platform processes the payment with the relevant providers and payment systems.
7. The platform sends a callback to your back end.
8. Your system verifies the callback signature and marks the order as paid, declined, cancelled, or pending.

## Frontend opening options

Choose the opening method based on the checkout UX you want:

- redirect: simplest implementation, easiest to launch first
- modal via `merchant.js`: best when you want to stay on the same page
- iframe via `merchant.js`: best when the payment form must live inside your checkout layout

All three options use the same core backend responsibilities: sign the final parameter set and process callbacks.

## What stays the same in every flow

No matter how you open Payment Widget, these rules do not change:

- sign the final parameter set on the server side
- never expose the secret key in browser code
- treat callbacks as the source of truth for payment status
- keep return URLs and UI redirects separate from payment state management

## What to read next

- [Quick start](./pp-quickstart-overview.md)
- [Basic implementation](./pp-quickstart-basic-implementation.md)
- [Opening in a modal via JS library](./pp-opening-modal-via-javascript-library.md)
- [Opening in an iframe via JS library](./pp-opening-iframe-via-javascript-library.md)
