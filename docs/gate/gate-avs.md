# Address Verification (AVS)

Address Verification Service(AVS) is a service that allows you to check whether a customer who makes a payment by a bank card is the actual cardholder. The AVS check is performed by matching the address specified by a customer while performing a payment with the cardholder address according to the bank card Issuer.

For American Express, AVS verification is mandatory in the USA and Canada and optional in other countries.`avs_post_codeavs_street_addressavs_result`AVS verification is mandatory for payments with Visa and Mastercard cards performed in the UK, and optional in the USA, Australia, Canada and New Zealand.Therefore, you may be required to add more mandatory parameters in the request for payment: customer postal code in theparameter and customer address in. You can submit these parameters in a additional parameters request. For more information, see . If the data is missing, fails to pass the validation or is empty, you will receive a message with the corresponding decline code. The result of the AVS verification is passed in thecallback parameter.

There are two schemes of work with AVS: sending the AVS parameters in each payment request or sending the AVS parameters in a clarification request, if AVS is enabled for the country of the card Issuer in the project settings.

::: tip
The requirement to provide AVS parameters persists even if the payment is made by a token or a saved bank card.
:::

## Results of checking with AVS

Below is a table of possible codes that can be returned, with additional information and descriptions for them.

| Code | Value | Description |
| --- | --- | --- |
| W, Z | Partial match | Post code matches, but street address does not |
| A | Partial match | Street address matches, but post code does not |
| X, Y | Exact match | Address and post code match |
| N | No match | Street address and post code do not match |
| S, U | Address information unavailable. | Address information is unavailable for this account or an issuing bank does not support the AVS |
| R | System unavailable | System is unavailable at the moment, retry |

| VISA | A, N, R, U, Y, Z |
| --- | --- |
| MasterCard | A, N, R, S, U, W, X, Y, Z |
| American Express | A, N, R, S, U, Y, Z |
