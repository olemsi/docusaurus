# Currency conversion

## Overview

In general, a payment may involve three currencies: customer account currency, payment currency, and merchant account currency. If all three currencies are the same, there is no need for currency conversion; otherwise you need to convert the payment amount between currencies.

or by the alternative payment systemSuppose that the customer uses their dollar-denominated card to pay a certain amount in euros to the merchant whose account is denominated in pound. The payment amount is consecutively converted from dollars to euros and then from euros to pounds. The first conversion operation is performed by the issuer. The second conversion operation is performed by the Platform payment platform.

You can also perform the conversion on your side and send the converted amount in the desired currency in the requests for operations performing.

*Automatic payment currency selection*This option is available for payouts and one-time purchases by using all payment methods.For payments that use Gate, the Platform payment platform offers: the customer cannot select payment currency while the exchange rate is dictated by the payment system.Automatic payment currency selection uses exchange rates set by Platform. To learn more about exchange rates, contact your account manager.

and alternative payment systemsYou can get the information about conversion operations performed by the payment platform from the callbacks with payment results, from Dashboard, or from regular reports sent to email addresses you specify. We recommend that you use this information for reconciliation with Platform because issuersuse the merchant account currency to keep record of the merchant transactions.

or the organization where the account is openedIt should be also taken into account that the operation amount and the amount actually debited from the customer's account may not be the same, since currency exchange rates usually differ on the date when the payment was initiated and the date when the funds were actually debited. For conversion and compensation in such cases, the customer should contact the card issuer.

To find out which payment methods in which currencies support conversion, please refer to the description of this method or to the Platform key account manager.

- [European Central Bank](http://www.ecb.europa.eu)
- [Central Bank of Russia](http://www.cbr.ru/)
- [Currencylayer service](https://currencylayer.com/)

## Setup

You do not need to update your web service to support automatic payment currency selection.

## Usage

Automatic payment currency selection does not require any additional efforts and is automatically performed during payment procedure.

`operationsum_initialsum_converted`Any conversion information is added in payment result callbacks into two objects embedded into theobject: theobject contains the amount and the currency before conversion while theobject contains the amount and the currency after the conversion operation. For more information about these objects, see .

`100 USD519,41 PHP`Below you will find the example of payment with a conversion operation in whichare converted intodebited to merchant account denominated in Philippine peso.
