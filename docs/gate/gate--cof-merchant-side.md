# On-demand COF purchase

## Overview

*On-demand COF purchase*such asis a payment type which uses a single initial request to make one (recurring) transfer of funds from customer to merchant by using previously stored payment credentials without validation of the payment instrument (card validation code).

The payment platform performs on-demand COF purchase according to the payment model ().

## The payment workflow

To create COF purchase:

For each subsequent debiting, you need to resubmit request for COF purchase and accept the callback with the debiting result.

; for general information about using the API, seeThe sections that follow discuss formats for requests and callbacks. Information about possible statuses of this payment type can be found in the corresponding article.

1. Register COF purchase. For more information, see.
2. COF purchaseSubmit a request forwith ID of debiting series record.
3. callback with debiting resultAcceptfrom the payment platform.

## Request format

*payment cards*This section describes format of the requests for COF purchases with on-demand debiting using.There are several things you must consider when submitting such requests:

either of the following:or payment card credentials and COF purchase typeThus, a complete request must contain project ID, payment ID, signature, customer IP, payment amount and currency andID of debit series record.

Depending on the specific characteristics of providers involved in payment processing, the set of required parameters can vary. For the detailed information about the providers' requirements, contact the Platform key account manager.

1. You need to use a POST request to theendpoint.The request must be sent with the use of the POST method to one of the following endpoints:—for all types of COF purchases regardless of where the payment data is stored (on the payment platform side or on the web service side)—for COF purchases with the payment data stored on the web service side—only for autopurchases with the payment data stored on the web service side.
2. `general``project_id`—project ID obtained from Platform`payment_id`—payment ID, must be unique within the project`signature`—signature created after you specify all the required parameters (For more information about signing requests, see .)—object with general request identification information:`customer``ip_address`—customer IP address relevant for the initiated payment`id`Using different customer identifiers for operations performed as part of the COF purchase is not allowed.—customer identifier unique within the project, the same identifier as the one used to register this COF purchase—object with customer information:`payment``amount`—payment amount in minor currency units`currency`—payment currency according to ISO-4217 alpha-3`cryptocurrency_type``cbdc`—a central bank digital currency or tokenized deposit issued by a central bank, reserve bank, or other national monetary authority`stablecoins_fiat_backed`—a fiat-backed digital asset with reserves held by a licensed financial institution`native_tokens`—a digital currency native to a specific blockchain, required for transactions within its network, including fee payments`other`—a non-fiat digital asset that does not fit other types or cannot be classified at the time of transaction initiation—the indicator that specifies the type of the cryptocurrency, required for Visa payments involving cryptocurrencies. This parameter should be assigned one of the following values:—object with payment information:`recurring``id`—ID of debit series received in the callback with COF purchase registration data—object with the COF payment information:Your request must contain the following parameters and objects:
3. `idrecurring`The request to theendpoint must contain theparameter in theobject, and the value of this parameter must be the identifier of the debit series record received in the callback with registration information.`card``pan`—card number`year`—card expiration year`month`—card expiration month`card_holder`cardholder's first and last name (as indicated on the card)name of the cardholder, passed if this parameter is required for the specific project (the name must be spelled as specified on the card; note that if you want to make this parameter optional instead of required, it can only be done upon consultation with your account manager which includes examination and assessment of associated risks)—`stored_card_type46`—purchase type (for autopurchase orfor regular purchase).The requests to theendpoint must contain theobject with the following parameters:`stored_card_typecard4`The requests to theendpoint must contain theparameter of theobject, and this parameter must have the value(autopurchase).Depending on the endpoint, you must add the following objects and parameters in the request:
4. Additionally, you can use any other parameters as indicated in the specification.

## Callback format

The payment platform includes the COF purchase registration information in its callback to your web service. The payment platform uses the standard format for callbacks. For more information, see .

`4,00 USD431422******0056customer_1242`The following callback contains information about debitingto cardof the customer with IDwithin theproject.
