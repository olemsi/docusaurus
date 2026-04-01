# partner

## General information

For the payment method the testing of purchases by using Payment Widget and Gate.

Testing can be performed within a test project, to enable and disable the testing availability, contact Platform technical support via support@platform.dev.

When performing a test payment, take into account that you must specify the identifier of the test project in the requests, the currency can be only UAH, and the interfaces of the payment forms emulator of Payment Widget and partner differ from the production environment.

## Test payments statuses

When testing purchases, the final payment status is determined by the amount specified in the request:

- `decline4000040400`status withoramount
- `success`status with any other amount

## Purchases by using Payment Widget

To perform a test purchase by using Payment Widget, do the following:

The full information about purchase process by using Payment Widget is provided in the section .

1. Send a correct test request for Payment Widget opening to the payment platform.
2. `card_visacard-mc`If theormethod was not specified in the request—select the method on the emulator page.
3. **SuccessDecline**Click theorbutton (depending on the amount specified in the request).
4. Accept a callback with information about the payment result.

## Purchases by using Gate

To perform a test purchase by using Gate, do the following:

The full information about purchase process by using Gate is provided in the section .

1. Send a correct test request for purchase to the payment platform.
2. Accept a callback with redirection data.
3. **SuccessDecline**Go to the received URL and click theorbutton (depending on the amount specified in the request).
4. Accept a callback with information about the payment result.
