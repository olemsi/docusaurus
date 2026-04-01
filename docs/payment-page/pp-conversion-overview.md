# Conversion overview

In general, a payment may involve three currencies: customer account currency, payment currency, and merchant account currency. If all these currencies are the same, there is no need for currency conversion; otherwise you need to convert the payment amount between currencies.

or by alternative payment systemLet's say that the customer uses their dollar-denominated card to pay a certain amount in euros to merchant whose account is denominated in pound sterling. The payment amount is consecutively converted from dollars to euros, and then from euros to pounds. The first conversion operation is performed by the issuer. The second conversion operation is performed by the Platform payment platform.

You can also perform the conversion on your side and send the converted amount in the desired currency in the requests for performing operations.

. This option is default and available for all payment methods and currencies.Payment currency selected by merchant. This option is available only when customers use payment cards. To enable the option, contact your Platform account manager.Payment currency selected by customerFor payments that use Payment Widget, the Platform payment platform offers the following options:

and alternative payment systemsYou can get the information about conversion operations performed by the payment platform from the callbacks with payment results, from Dashboard, or from regular reports sent to email addresses you specify. We recommend that you use this information for reconciliation with Platform because issuersuse the merchant account currency to keep record of the merchant transactions.

or the organization where the account is openedIt should be also taken into account that the operation amount and the amount actually debited from the customer's account may not be the same since currency exchange rates usually differ on the date when the payment was initiated and the date when the funds were actually debited. For conversion and compensation in such cases, the customer should contact the card issuer.

To find out which payment methods and in which currencies support conversion, please refer to the description of this method or to the Platform account manager.
