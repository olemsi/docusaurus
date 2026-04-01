# Integration overview

Host-to-host API is the direct server-to-server interface of the platform for merchants that need full control over their own checkout and server-side payment flow.

## What this page helps you do

Use this section if you want to:

- decide whether to use Host-to-host API or Payment Widget
- understand the backend architecture of a Host-to-host API integration
- see the minimum moving parts before reading the full reference

## When to choose Host-to-host API

Choose Host-to-host API when:

- you want to build and control your own payment UI
- your back end should send payment requests directly to the platform
- you need your own logic for handling redirects, callbacks, retries, and state transitions

If you want the platform to host the checkout form, use Payment Widget instead.

## Integration in one minute

The shortest Host-to-host API integration has four parts:

1. Your checkout collects the payment and customer data.
2. Your back end builds the final JSON payload and signs it.
3. Your back end sends an HTTP `POST` request to the required API endpoint.
4. Your back end receives the callback and updates payment status in your system.

## What stays on your side

With Host-to-host API, your system owns:

- the payment UI
- collection of customer and card or account data
- request signing
- callback verification
- customer notifications and order-state updates

This is the main tradeoff: maximum control, but also maximum implementation responsibility.

## Recommended reading order

1. Go to [**Quickstart**](./gate-quickstart) for the shortest launch path.
2. Use [**Basic implementation**](./gate-quickstart-basic-implementation) for copy-paste request and callback code.
3. Read [**Interaction concepts**](./gate-interaction-organisation) and [**Request format**](./gate-requests-format) when you need the structure behind the examples.
4. Move into specific payment flows once the first purchase request is working.
