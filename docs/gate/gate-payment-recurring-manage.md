# Managing COF debiting

The payment platform allows you to manage debiting for any COF purchase types by doing the following:

Note that customer can at any time contact the issuer and have COF purchase cancelled. In this case, any following debiting operation is cancelled and the stored payment instrument credentials are deleted from the payment platform.

In addition, you can manage settings of regular COF purchases by using Dashboard.

- getting information about debiting series
- updating COF purchase parameters: change debit amount and expiration date for all COF purchase types and modify debit schedule for regular COF purchases
- cancelling COF purchase at any time

## Getting information about debiting series

There are several things you must consider when sending a request for information about debit series:

Thus, complete request must contain project ID, signature, and ID of debit series.

For more information about response format, see .The payment platform uses the standard format for response with debit series information.

`4,00 USD431422******0056customer_1242`The following response contains information about debitingto cardof the customer with IDwithin theproject. The response also notifies that subsequent debiting is possible.

1. You need to use a POST request to one of theendpoint.
2. `general``project_id`—project ID obtained from Platform`signature`—signature created after you specify all the required parameters (For more information about signing requests, see .)—object with general request identification information:`idrecurring`ID of the debit series inside theparameter of theobject previously received in the callback with COF purchase registration informationYour request must contain the following parameters and objects:

## Updating debit series

There are several things you must consider when sending a request for updating debit series:

Thus, complete request must contain project ID, payment ID, signature, ID of debit series, and debit series parameters to update.

The payment platform uses the standard format for callbacks with information about updating debit series. For more information about callback format, see .

The following callback affirms that COF purchase is set to perform debiting every third month at 12:00:00.

1. You need to use a POST request to one of theendpoint.
2. `general``project_id`—project ID obtained from Platform`payment_id`—payment ID, must be unique within the project`signature`—signature created after you specify all the required parameters (For more information about signing requests, see .)—object with general request identification information:`recurring``id`—ID of debit series received in the callback with COF purchase registration data—object with the COF payment information:Your request must contain the following parameters and objects:
3. `recurring``expiry_year`—expiration year of the COF purchase`expiry_month`—expiration month of the COF purchase`expiry_day`—expiration day of the COF purchase`intervalperiodWinterval31100`—multiplicator to increase debiting period, for example if you need to run debiting every third week, you can settoandto. Possible values: fromto`amount`—amount to debit after registration`scheduled_payment_id`—identifier assigned to the payment within which scheduled debits are performed; it must differ from the identifier of the payment made to register a COF purchase and must be unique within the project`period``D`—daily`W`—weekly`M`—monthly`Q`—quarterly`Y`—yearly—debiting period:`timehh:mm:ss`—time of subsequent debiting in theformat`start_date`—date to perform the first debitYou need also use other parameters of theobject:

## Cancel COF purchase

There are several things you must consider when sending a request to cancel COF purchase:

Thus, complete request must contain project ID, payment ID, signature, and ID of debit series.

The payment platform uses the standard format for callbacks with information about cancelling COF purchase. For more information about callback format, see .

`1079`The following callback update that the COF purchase with IDhas been cancelled.

1. You need to use a POST request to one of theendpoint.
2. `general``project_id`—project ID obtained from Platform`payment_id`—payment ID, must be unique within the project`signature`—signature created after you specify all the required parameters (For more information about signing requests, see .)—object with general request identification information:`idrecurring`ID of the debit series inside theparameter of theobject previously received in the callback with COF purchase registration informationYour request must contain the following parameters and objects:
