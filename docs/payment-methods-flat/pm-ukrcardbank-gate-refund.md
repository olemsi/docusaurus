# partner

## General information

partner full refunds processing by using Gate: merchant's web service sends a request with all the required parameters and signature to the Platform URL, and receives a callback with the payment result. The full sequence of the refund process is provided below.

The sections that follow discuss in more details the request format and the Gate parameters to use in the payment method and provide the information on the format of callbacks with refund results.

## Request format

Thus, a correct partial refund request in the method must include project and payment IDs, signature, refund description, as shown in the following example:

1. You perform a refund by sending the request to request-payment-card-partner-refund by using the POST HTTP method.
2. generalproject_id—the project ID obtained from Platformpayment_id—payment ID unique within the projectsignature—signature created after you specify all the required parameters. For more information about signature generation, seeObject—general refund information:paymentdescription—comment or descriptionObject—refund information:The following objects and parameters must be specified in any request:
3. If required, you can also add any other additional parameters Gate supports.

## Callback format

The partner method uses the standard format for callbacks to deliver refund results. For more information, see .

`1.00 UAH5111`The following is the example of a callback with an information about successfulrefund for the customer in theproject.

The following is the example of a callback for a declined refund.

## Related topics

The following topics might be useful when implementing payments through Gate:
