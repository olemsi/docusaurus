# partner

## General information

In the partner method, when processing a purchase by using Gate, the merchant web service is required to do the following:

The following diagram provides the detailed picture of the payment processing procedure.

The sections that follow discuss in more details the request format and the Gate parameters to use in the payment method and provide the information on the format of callbacks with purchase results. For general information on how to use the API, see .

1. Send a request with all the required parameters and signature to the Platform URL.
2. Perform the redirection of a customer to the partner service.
3. Get the callback with the payment result from the payment platform.

## Request format

Thus, a correct payment request in the method must include project, customer and payment IDs, amount and currency of the purchase, as well as customer data and URLs for redirection, as shown in the following example:

1. You send purchase requests by sending the request-payment-card-partner-sale request by using the POST HTTP method.
2. generalproject_id—the project ID obtained from Platformpayment_id—payment ID unique within the projectsignature—signature created after you specify all the required parameters. For more information about signature generation, seeObject—general purchase information:paymentamount—purchase amount in minor unitscurrency—payment currency in the ISO-4217 alpha-3 formatextra_param`monoprivat24`—in order to make purchases by using this method one of the following values must be specified:for Monobank,for Privat24Object—purchase information:customerid—the unique ID of the customer within your projectip_address—IP addressObject—customer information:return_urlsuccess—URL to return customer to the web service after a successful purchasedecline—URL to return customer to the web service after a declined purchasereturn—URL to return customer to the web service during any step before the payment is completedObject—contains the URLs to which customer is redirected while or after payment processing:The following objects and parameters must be specified in any request:
3. The currency of purchase can only be UAH.
4. If required, you can also add any other additional parameters Gate supports.

## Formats of the customer redirection data

redirect_data.urlredirect_data.bodyredirect_data.methodTo redirect a customer from the web service to the partner site, you must receive a callback from the payment platform containing the URL for redirection in theparameter and data to be sent in the request body in theparameter, and use these parameters when opening the HTML page using the method specified in theparameter.

The following is the callback fragment containing the redirection data.

## Callback format

The partner method uses the standard format for callbacks to deliver purchase results. For more information, see .

`22.00 UAH5111`The following is the example of a callback with an information about successfulpurchase made in theproject.

The following is the example of a callback for a declined purchase.

## Related topics

The following topics might be useful when implementing payments through Gate:
