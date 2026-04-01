# Workflow

## General information

Workflows of processing debiting and crediting operations via Gate are by and large identical to the workflows of processing one-step purchases and payouts: the web service must send a request to initiate each of these operations, perform intermediate actions if they are demanded by the prescriptive callbacks received from the platform, and accept the final informational callback. When a card-to-card money transfer is processed, these two operations have to be initiated consecutively: first, the debiting operation and, once it has been completed, the crediting operation.

## Options to specify payment information

As in the case with other kinds of purchases and payouts in the Platform payment platform, when working with debiting and crediting operations executed as part of the Mastercard MoneySend and Visa Direct services, you can choose from several options to specify payment card details:

- *Actual card details*—in the request, pass the card number, expiry date, the first and last name of the cardholder, and CVV.
- *Arbitrary saved card identifier*—in the request, pass the identifier associated with the corresponding card details in the payment platform (for more information, see ).
- *Standardised card token*—in the request, pass the token associated with the corresponding card details in the payment platform (for more information, see ).

## Debiting

To initiate the debiting of funds via Gate, the web service is required to do the following:

the following sectionThe format of the request for debiting is presented inof this article.

1. `{payment method}card/v2/payment//sale[/selected option to specify payment information]`Send a request to theendpoint.
2. If necessary, complete a procedure of the 3‑D Secure customer authentication (for more information, see ).
3. Receive a callback from the payment platform with the result of the debiting operation.

## Returning debited funds

`{payment_method}card/v2/payment//refund`In certain cases, you may need to return debited funds to the customer. From a technical standpoint, the cancellation of debiting is executed as a refund and is initiated with the request to theendpoint. Keep in mind that according to the rules of the global card schemes only full payments can be refunded within limited time periods.

According to Visa rules, you can send the request to return debited funds only during the first 24 hours from the moment when the debiting has been completed while according to Mastercard rules this should be done within three business days. Upon expiration of these time limits, you have to contact the Platform technical support to return debited funds to the customer.

## Crediting

To initiate the crediting of funds via Gate, the web service is required to do the following:

the following sectionThe format of the request for crediting is presented inof this article.

1. `/v2/payment/card/payout[/token]`Send a request to theendpoint.
2. Receive a callback from the payment platform with the result of the crediting operation.
