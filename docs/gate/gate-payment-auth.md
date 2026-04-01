# Two-step purchase

::: tip
In addition, use the following materials to gain a fuller understanding of processing one-time two-step purchases:—an article in the section  that provides a general description of processing one-time two-step purchases in the Platform payment platform and covers information about operations utilised to execute a payment of this type and statuses that are assigned to the payment and the operations performed within it.articles of the  section containing a description of processing one-time two-step purchases via Gate with the focus on the specific features of the payment method used and information about relevant requests and callbacks.This article covers processing one-time two-step purchases via Gate and describes requests and callbacks that are used in case of card payments.
:::

## Callback format

A two-step purchase uses the standard format for callbacks to submit purchase results. For more information, see .

`2,000.00 USDcustomer_12541333******001942`The following is an example of a callback with the information about the successfulauthorisation hold themade by using the payment cardin theproject.

The following is the example of a callback for a declined authorisation hold  because of an incorrect card expiration date.

`10,00 USD541333******001942customer_12`The following is the example of a callback with the information about the successful increase of the authorisation hold bymade on the payment cardin theproject of for thecustomer.

`2,000.00 USDcustomer_12541333******001942`The following is the example of a callback with the information about the successfuldebiting customer account theinitiated the payment cardin theproject.

`2,000.00 USD541333******001942`The following is the example of a callback with the information about the successful cancelling of theauthorisation hold for the payment cardin theproject.

The following is the example of a callback for cancelling an authorisation hold declined due to incorrect card data entered.
