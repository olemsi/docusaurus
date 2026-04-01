# moto payment processing

Mail Order/Telephone Order (moto) payment is a CNP (card-not-present) payment when a cardholder provides payment card credentials via mail or telephone to perform a payment.

## The types of payments that support moto payment processing

purchase with direct withdrawal of funds—purchase with direct withdrawal of funds by using saved data—purchase with direct withdrawal of funds by using token—placing an authorisation hold—placing an authorisation hold by using saved card data—placing an authorisation hold by using the token associated with the card details—payment card verification by card number—payment card verification by the token associated with the card details—The types of operations that support moto functionality:

## moto payment processing by using Gate

moto payments are different from the usual ones. moto payment is a type of CNP payments when both a payment card and a cardholder are not physically present at the moment the payment is made. The payment card credentials are provided by its holder by mail, telephone, fax or other means of communication to create an invoice.

moto_type`payment``1`for the Mail Order (MO) payment`2`for the Telephone Order (TO) paymentTo perform a moto payment by using Gate, pass one of the necessary values of theparameter in theobject:

## `cvv`Passing theparameter

moto_typecvv`1`, Visa,American ExpressVisa`card`If=, for Mastercardandtheparameter in the objectbecomes optional. For other card types the parameter is mandatory.

moto_typecvv`2`and American Express`card`If=, for Mastercardtheparameter in the objectbecomes optional. For other card types the parameter is mandatory.

## Restrictions on moto payment processing

To perform a moto payment by using Maestro cards, you have to make sure that the country where the operation is performed matches the country where the card was issued and also be in the list of available countries. If these conditions are not met, the operation processing is declined. The countries available for moto payments by using Maestro are listed in the following table.

| IRL | Ireland |
| --- | --- |
| FRA | France |
| GBR | United Kingdom |
| TUR | Turkey |
