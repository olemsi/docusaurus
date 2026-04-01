# Saving payment data

, e-wallets, accounts, mobile numbersor any other payment instrument[PCI DSS](https://www.pcisecuritystandards.org/pci_security/)For convenience of quick and efficient payment customers can save the data of one or several bank cardswhen performing a payment. If you obtain thecertificate, you can store the card data on your side, if not—on Gate side. For each payment instrument, Gate saves the payment credentials and assigns the instrument its own ID.

TheGate supports the maximum quantity limits of the payment instruments a customer can save.

::: tip
To enable and configure the service contact the technical support by email support@platform.dev.
:::

::: warning
id`customer`To save and perform payments on saved data, pass theparameter of theobject in the request for payment.
:::

## Retrieving the list of saved payment data

Additionally, you can request a list of the customer's saved instruments and their details; in this case the number of the customer card is masked and CVV is not sent.

## Request to retrieve the list of saved payment data

In the request specify the customer id, the project id, and the payment system.

in the selected payment systemaccount_idorcard_idWhen Gate finishes processing the request, you receive a response with the list of customer's saved payment instruments. The response will not contain the list if no payment instruments were saved. For each payment instrument, its ID in Gate is specified in theparameter.

::: tip
``POST therequest.
:::

## Deleting saved payment data

When a customer deletes previously saved payment instrument, send the request for removal. In this case, Gate removes the instrument from the list of saved payment instruments, but does not delete its data.

::: tip
If the saved card has a token, the token will be deleted when the saving of the card is canceled. Alternatively, a saved bank card is removed when you revoke the token of this card. For more information about tokens, see .
:::

## Request to delete a payment data from the saved list

In the request specify the ID of the saved payment instrument.

When Gate finishes processing of your request you receive a reply with the result of removal of the payment instrument from the saved list.

::: tip
POST therequest.
:::
