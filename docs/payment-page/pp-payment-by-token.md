# Payments by using tokens

Payment Widget supports performing fast payments by using bank card
        tokens.

**Pay**While requesting to open a payment widget you specify the active token of a customer bank card. The generated payment widget opens with the filled bank card details (except CVV). To make a payment, the customer enters only CVV and confirms the payment amount by clicking.

::: tip
or payment accountWhen performing a payment by using a token the customer will not be able to select any other bank card.
:::

::: tip
The functionality is available in the Purchase
                 mode.
:::

## Parameters to pass

account_tokencustomer_idTo perform a payment by token, specify the token in theparameter and the ID of a customer in theparameter in the object or the URL.

For the full list of the supported parameters see .
