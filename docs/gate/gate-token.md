# Using tokens

**Token**is a unique, random sequence of 64 characters associated in Gate with a specific bank card and the customer in the project. Token does not contain a confidential information and can be stored in your system without threatening to violate the standards of secure bank card data storage.

By using Gate you can create tokens automatically or by request and make puchases and payouts by using existing tokens.

## Statuses of tokens

The status of a token defines if the token can be used to perform payments and payouts.

| Status | Description |
| --- | --- |
| `active` | Token is active and can be used to perform payments and payouts |
| `revoke` | Token is revoked and cannot be used to perform payment and payouts |
| `expiry` | Token has expired and cannot be used to perform payment and payouts |

## Automatic token generation

*Automatic generation*procedure creates a token when the first successful purchase or payout is performed by using a bank card, as well as after holding the funds on a bank card.

The generated token and the date when it was created are returned in the payment callback. For more information about callbacks, see in .

::: tip
To enable automatic token generation, contact technical support by email support@platform.dev.
:::

## Token generation by request

Another way to generate a token is to send a request to generate a token. In the request
        you send the data required to generate the token.

The generated token and the time it was created at are returned in the token generation response.

## Token generation request

Specify the project id, customer data and data of customer bank card in the request.

You receive in the callback a bank card token and the time when it was generated. For more information about callbacks, see in .

::: tip
``POST therequest.
:::

## Payment by token

Gate enables customers to process fast payments by using a previously generated bank card token.

The token is unique to the bank card. When processing payments by bank card a valid token that already exists will be returned. In this case, if the card expiration date is different from the one specified when the token was generated, the token is not generated anew, but the expiration date of the token is updated.

Additional information about the token-based payments see in .

::: tip
The token is unique to the bank card. When processing payments by bank card a valid token that already exists will be returned.
:::

## Payout by token

Gate enables you to process the payout of funds to a customer's bank card by
        using a previously generated token. Additional information about the token-based payouts see
          .

## Receiving card data by token

If you need to receive bank card data and information about the payment instrument to which this card is linked, send a request to Gate.

In the request, specify the project ID, customer ID and token.

You receive in the callback the masked bank card data and other information on the customer payment instrument.

::: tip
POST therequest.
:::

## Card verification by token

Gate enables you to perform the customer's bank card verification by using a previously generated token. The information about the token-based verification is provided in the  section.

## Revoke of a token

A token can be revoked in one of the following happens: you revoke the token or the payment card expires.

In the former case, if required, you can revoke a token from Gate by sending a request to revoke the token. Gate revokes the token.

## Request to revoke a token

Specify the customer data in your system and the token to be revoked.

You receive in the callback the result of revoking of the token.

::: tip
POST therequest.
:::

## Callback after generating or revoking a token
