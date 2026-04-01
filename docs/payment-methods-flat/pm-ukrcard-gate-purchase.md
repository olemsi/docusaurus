# partner

## General information

In the method, when processing a purchase by using Gate, the merchant web service is required to do the following:

The following diagram provides the detailed picture of the payment processing procedure.

The sections that follow discuss in more details the request format and the Gate parameters to use in the payment method and provide the information on the format of callbacks with purchase results.

1. Send a request with all the required parameters and signature to the Platform URL.
2. Perform the redirection of a customer to the partner service.
3. Get the callback with the payment result from the payment platform.

## Request format

Thus, a correct payment request in the method must include project, customer and payment IDs, currency and amount of the purchase, customer data as shown in the following example:

1. `/v2/payment/interkassa20/card-visa/sale/v2/payment/interkassa20/card-mc/sale`You send purchase requests by sending thefor Visa cards orfor Mastercard and Maestro cards request by using HTTP method POST. This is a request group of request-payment-interkassa-sale,
2. generalproject_id—project identifierpayment_id—unique purchase identifierObject—general purchase information:customerid—the unique ID of the customer within your projectip_address—IP addressObject—customer information:paymentamount—purchase amountcurrency—payout currency in the ISO-4217 alpha-3 format.Object—purchase information:The following objects and parameters must be specified in any request:
3. The currency of purchase can only be UAH.
4. If required, you can also add any other additional parameters Gate supports.
5. After you specify all the parameters you need, you must create the signature for the request. For instructions on how to sign a payment request, see .

## Formats of the customer redirection data

redirect_data.urlredirect_data.bodyredirect_data.methodTo redirect a customer from the web service to the partner site, you must receive a callback from the payment platform containing the URL for redirection in theparameter and data to be sent in the request body in theparameter, and use these parameters when opening the HTML page using the method specified in theparameter.

The following is the callback fragment containing the token for purchase.

## Callback format

The standard format for callbacks is used to deliver purchase results. For more information, see .

`300.00 UAH473118******4111ALEX159`The following is the example of a callback with an information about successfulpurchase from cardmade by thecustomer in theproject.

The following is the example of a callback for a purchase declined due to inappropriate payment amount.

## Related topics

The following topics might be useful when implementing payments through Gate:
