# partner

## General information

In the partner method, when processing a purchase by using Payment Widget, the merchant web service should send a request with all the required parameters and signature to the Platform URL and get the callback with the payment result from the payment platform. When opening Payment Widget, you can have Payment Widget opened with one of the partner method selected. For more information about preselecting payment methods, see in . The full sequence and particularities of the purchase process are provided below.

The sections that follow discuss in more details the request format and the Payment Widget parameters to use in the payment method and provide the information on the format of callbacks with payment results. For the general information on how to use the API, see .

## Request format

There are several things you need to consider when using the method:

Thus, a correct payment request in the partner method must include project, customer and payment IDs, the currency and the amount of a payment in the appropriate currency, as shown in the following example:

For information about all parameters available in the partner method, see .

1. customer_id—the unique ID of the customer within your projectproject_id—the project ID obtained from Platformpayment_id—payment ID unique within the projectpayment_currency—payment currency in ISO-4217 alpha-3 formatpayment_amount—payment amount in minor unitsYou must provide values for the basic minimum of parameters. Listed below are the parameters that are mandatory for any payment method:
2. The currency of payment can only be UAH.
3. force_payment_methodpayment_extra_param`card-partnermonoprivat24`If you need to have payment form displayed with the method selected, set theparameter toand theparameter to one of the following values:for Monobank,for Privat24.
4. If required, you can also add any other additional parameters Payment Widget supports.
5. After you specify all the parameters you need, you must create the signature for the request. For instructions on how to sign a payment request, see .

## Callback format

The partner method uses the standard format for callbacks to deliver purchase results. For more information, see .

`22.00 UAH5111`The following is the example of a callback with an information about successfulpurchase made in theproject.

The following is the example of a callback for a declined purchase.

## Related topics

The following topics might be useful when implementing payments by using Payment Widget:
