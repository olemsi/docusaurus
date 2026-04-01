# Registering COF purchase

If there are changes in the payment provider's service settings, you may need to register COF purchase again. In such cases, the merchant receives an email from the Platform technical support with a list of IDs of COF purchases that should be re-registered. For this registration, merchant must notify customers of the termination of previous debits and the need to initiate new ones by unlinking the saved card, and then initiate registration in the platform. Each newly registered COF purchase receives a new ID, which is sent to the merchant in the callback with information on successful registration.

There are several things you must consider when performing a COF purchase with customer instrument credentials stored by the payment platform:

Thus, along all the required parameters, complete request must contain registration flags for  selected COF purchase and its type; for regular purchases, request must also contain debiting schedule.

Depending on the specific characteristics of providers involved in payment processing, the set of required parameters can vary. For the detailed information about the providers' requirements, contact the Platform key account manager.

The payment platform includes the COF purchase registration information in its operation result callback to your web service. The payment platform uses the standard format for callbacks. For more information, see .

`1001648059`The following callback contains information about successful registration of a COF purchase with a debiting series record identifier.

## Overview

as well as by migrating information about COF purchases from an external acquirer (details)To register a COF purchase with the payment platform, you need to save customer payment instrument credentials. You can do it in a variety of ways by processing payments via Gate, Payment Widget (details), and Dashboard (details).

To register a COF purchase with the payment platform, you need to save customer payment instrument credentials., payment link purchase,You can register a COF purchase via Gate by sending a request for one-time purchaseor for payment instrument verification with parameters indicating that the payment instrument credentials need to be saved.

`31843301`COF purchase is registered for the time specified in the underlying request; if this time is not specified in the request, COF purchase registration term is set to the card expiration date. Once COF purchase registration expires, the payment platform sends a callback with this information to merchant's web service. Any further purchases by using this registration are no longer possible; if web service attempts to initiate the COF purchase, the payment platform will respond with a callback with the(or) error code.

COF purchase registration may be blocked for specific merchant projects or providers in which case the requests with registration demand may be declined. To prevent declining of such requests, you can contact support service at support@platform.dev and ask them to configure your project to ignore registration demands when processing COF purchases, if COF purchase registration is blocked.

::: tip
According to Visa and Mastercard recommendations issued in 2020, they temporary allow COF purchases with expired bank cards, provided the payment provider or the payment system support this option. In this case, purchases are possible both before and after card expiration date, if the COF registration date is set to the card expiration date. To prevent using expired bank cards for COF purchases, when registering COF purchase, set its expiry date to the date which is different from the card expiry date (seefor more information).
:::

## Registration procedure

`saleauthaccount verificationinvoice`*and*To register a COF purchase, you need to send a request to initiate one of the following operations:,,, orand to populate the request with all the parameters required to process the operationthe parameters required to register the COF purchase.

`success`The payment platform initiates and performs the requested operation including any auxiliary procedures which may be required. If credentials are stored on the payment platform, after the operation is successfully completed and is assigned thestatus, a record about debiting series is created on the payment platform. The record is assigned the following attributes:

If credentials are stored in the web service, a record about debiting series is not created.

The payment platform sends your web service a callback with operation result that contains ID of the debiting series record, if this record has been created. Such callback confirms that COF purchase is successfully registered.

- *ID*`idrecurring`Once the record about debiting series is created, web service receives its ID in the callback inside theparameter of theobject. You use this ID to perform and to manage COF purchases.
- *Status*`activecanceled`Any active debiting series record is assigned thestatus. The status may change toon merchant or customer demand and in some other cases.

## Registration when credentials are stored by web service

There are several things you must consider when performing a COF purchase with customer instrument credentials stored by web service:

Thus, along all the required parameters, complete request must contain registration flags for  selected COF purchase.

The payment platform includes the COF purchase registration information in its operation result callback to your web service. The payment platform uses the standard format for callbacks. For more information, see .

1. —when processing a one-time one-step purchase—when processing a one-time two-step purchase—when verifying the payment instrumentwhen verifying the payment instrument with the use of a tokenYou need to use a POST request to one of the following endpoints:
2. Your request must contain all the required parameters and objects.
3. `stored_card_type``3`—autopurchase`5`—regular purchase (except for requests to the endpoint).Also, your request must include theparameter and specify COF purchase type by using one of the following values:

## Registration when credentials are stored by the payment platform

1. —when processing a one-time one-step purchase—when processing a one-time two-step purchase—when verifying the payment instrument—when initiating a payment link purchase—when initiating a payment link purchase with the use of a tokenYou need to use a POST request to one of the following endpoints:
2. Your request must contain all the required parameters and objects.
3. `recurring``registertrue`—COF purchase registration flag; usevalue to have the COF purchase registered.`type``C`—one-click purchase`U`—autopurchase`R`—regular purchase—type of the COF purchase to register, possible values:`timehh:mm:ss`—time of subsequent debiting for regular purchase informat`period``D`—daily`W`—weekly`M`—monthly`Q`—quarterly`Y`—yearly—debiting period for regular purchase:Also, your request must include aobject with the parameters of the COF purchase to register:
4. `recurring``expiry_year`—expiration year of the COF purchase`expiry_month`—expiration month of the COF purchase`expiry_day`—expiration day of the COF purchase`intervalperiodWinterval31100`—multiplicator to increase debiting period, for example if you need to run debiting every third week, you can settoandto. Possible values: fromto`amount`—amount to debit`start_date`—date to perform the first debit`scheduled_payment_ididrecurring``scheduled_payment_idpayment_id`If the identifier that should be assigned to the COF purchase () matches the identifier of the payment made to register a COF purchase (), the request to register a COF purchase is declined.—identifier assigned to the payment within which scheduled debits are performed; it must differ from the identifier of the payment made to register a COF purchase and must be unique within the project; (also, not to be confused with the debiting series record identifier specified in theparameter of theobject that is passed in the callback with the COF purchase registration information)You can also use other parameters of theobject:
