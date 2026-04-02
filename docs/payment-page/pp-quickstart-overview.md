# Quick start

This quick start is for teams that want to launch Payment Widget with the smallest possible amount of reading and the highest possible amount of reusable code.

## What you get from this guide

After completing this guide, you will have:

- a server-side step that signs Payment Widget parameters
- a client-side step that opens the payment form
- a callback endpoint that receives the payment result

## Before you start

Prepare the following:

- `project_id` for your test project
- `secret_key` for signing requests and validating callbacks
- a callback URL available to the platform
- a test order page or checkout button in your web service

## Where `project_id` and `secret_key` come from

For the first integration, these values are issued for your merchant project by Platform.

- `project_id` is the identifier of the test project created for your integration.
- `secret_key` is the signing key used to generate request signatures and verify callbacks for that project.

If you do not have them yet, ask your Platform account manager or technical support to provision a test Payment Widget project and share the test `project_id` and `secret_key`.

## If you only need the first opening request

Go straight to [**Basic implementation**](./pp-quickstart-basic-implementation.md). That page shows:

- the Payment Widget base URL
- the exact parameter set
- how to sign it
- how to open the form
- how to receive the callback

If you only need the signing part, go straight to [**Signature generation**](./pp-signature-generation.md).

## Best path for first integration

1. Read [**Brief theory**](./pp-quickstart-theory.md) if you need the architecture in one page.
2. Read [**Signature generation**](./pp-signature-generation.md) if signing is the only missing piece.
3. Go straight to [**Basic implementation**](./pp-quickstart-basic-implementation.md) for copy-paste code.
4. After the first successful payment, continue with [**UX configuration**](./pp-ux-configuration.md) and [**Payment Widget API description**](./pp-api.md).

## Recommended implementation style

For a first launch, use the shortest possible path:

- generate the signed parameter set on the server
- open Payment Widget in a new tab or modal
- rely on callbacks as the source of truth for order status

Once that works, add return URLs, custom UI behaviour, saved payment data, and any extra checkout features.
