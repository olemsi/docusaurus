# Retrieving fraudulent operations data

A request to retrieve information about operations flagged as fraudulent by payment systems should be sent to theendpoint (information about operations flagged as fraudulent by Platform is not provided in the response to this request).

When sending such requests, consider the following:

Responses to such requests contain operation data filtered by the conditions determined in the request.

1. `tokenRisksMerchant Adminsignature`The request must contain parameters(a token associated with the specific Dashboard user account with theorrole and with the access rights to certain projects of the merchant) and(details).
2. `filter``received_on`—date when the payment system reported the fraudulent operation (must be specified as a date range)`purchase_date`—date when the operation was completed (must be specified as a date range)`fraud_report_date`—date when the operation was reported as fraudulent to the issuing bank (must be specified as a date range)`issuer_country`—country of the issuer determined according to the BIN of the card in ISO 3166-1 alpha-2 format`filter"purchase_date": ["2023-12-31 00:00:00", "2024-01-07 23:59:59"]`The date range in thisobject must contain start and end dates and must be specified as a string array, for example,.The request may contain theobject with any of the following parameters:
3. `paginationlimitoffsetlimitoffset parameteroffset"limit": 5"offset": 20limitoffset`To restrict the number of operations the information about which is returned in a single response, use theobject with two parameters:and. Theparameter is used to set the number of the returned operations in the response (more than 1). Theis used to retrieve the subset of operations beginning with the number that follows thevalue (counting starts from 0). For example, if you need to retrieve information about fraudulent operations 21-25, you should setandin the request. If these parameters are absent, the default values are 20 forand 0 for.
