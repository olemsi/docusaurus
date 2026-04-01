# Open Banking in Belgium

## General information

To process a purchase through Gate by using one of the Open Banking in Belgium method, the merchant's web service is required to do the following:

Information about the data formats used to obtain customer consent and perform customer redirection is provided further in this section.

The full sequence and special aspects of purchase processing are provided below.

Information about the formats of requests and callbacks used for processing payments by using the Open Banking in Belgium method via Gate is presented further in this section. General information about working with the Gate API is presented in .

1. Send a request with all the required parameters and signature to the Platform URL.
2. Receive a callback from the payment platform about the need to obtain consent and, if relevant, additional information from the customer.
3. Obtain consent and additional information from the customer (if requested).
4. Provide information about the customer consent and the provided information (if requested) in a request to the payment platform.
5. Receive an intermediate callback from the payment platform and redirect the customer to the provider service.
6. Receive the final callback from the payment platform.

::: warning
When redirecting to services of providers and banks, the iframe element cannot be used. The pages of these services can be opened in a separate tab or in a modal window (regardless of the specifics of the web service).
:::

## Request format

There are several things you need to consider when sending purchase requests by using the Open Banking in Belgium method:

Thus, a correct purchase request by using the Open Banking in Belgium method must contain the project identifier, basic payment information (identifier, amount, and currency code), customer identifier and IP address, bank identifier, URL for redirection and signature, as well as various optional parameters.

1. `/v2/payment/banks/belgium/sale`To initiate each purchase, send a separate POST request to theendpoint, which belongs to the group.
2. `general``project_id`—project identifier obtained from Platform during integration`payment_id`—payment identifier unique within the project`signature`—request signature generated after all required parameters are specified (details—in the )Object—general purchase information:`payment``amount`—payment amount in the smallest currency unit`currency`—alphabetic payment currency code in the ISO-4217 alpha-3 formatObject—payment information:`customer``id`—customer identifier unique within the project`ip_address`—customer IP address relevant for the initiated paymentObject—customer information:`account``bank_id`—bank identifierObject—customer account information:`return_url``return`—URL for redirecting the customer to the web service when working with the service of a provider or bank in cases where the customer refuses to make a payment.Object—URLs for redirecting the customer to the web service:Each request must include the following objects and parameters:
3. `first_namelast_namecustomer``accountnumber`In addition, in some cases, taking into account the specifics of the bank used, the customer may be required to specify the International Bank Account Number (IBAN) on the web service side, while in other cases this number is specified by the customer on the provider side or bank side. At the same time, due to the specifics of the group’s methods, even if the customer account number is indicated in the initial request, it is not taken into account during the initial processing of this request and can be requested separately, by specifying theobject including theparameter in a callback requesting additional information submission (along with indicating other relevant parameters if they were not specified).Details about providing additional parameters are available in the  article.Additionally, it is recommended to specify the first and last names of the customer in theandparameters of theobject following objects and parameters. If any of these parameters are missing, the payment platform may send the list of missing parameters in a callback requesting additional information submission.
4. Additionally, any other parameters included in the specification can be used.

## Formats of the data for obtaining customer's consent

`clarification_fields`When using the Open Banking in Belgium payment method it is necessary to obtain additional consent from the customer and, if relevant, additional information about the customer. In such cases an intermediate callback containing theobject is sent from the payment platform to the web service each time. The nested objects of that object describe the specified objects and parameters necessary to process the payment.

`clarification_fields`The structure of each object included in theobject includes:

`propertiesrequirederrorspropertymessageconstraint`Theobject and thearray are specified according to the JSON specification, while thearray contains the,andparameters which specify the names, relevant messages and descriptions of reasons.

`clarification_fields.customer.properties.psu_consent_text.default`The text which is required to be displayed to the customer is specified in theparameter.

In general, information about the need to obtain the customer consent and additional information may look like this.

After obtaining the customer consent and the requested information on the web service side, it is necessary to send a POST request to continue the payment. Such a request must be sent to theendpoint and must contain the following objects and parameters:

Thus, a correct request must include project and payment IDs, information about customer's consent and text displayed to the customer, additional customer information (if needed) and signature, as shown in the following example:

## Formats of intermediate callbacks for customer redirection

`redirect_dataredirect_data`Each payment made with the Open Banking in Belgium method requires redirection of customers from the merchant's web service to the service of the provider or bank. To redirect a customer it is necessary to receive an intermediate callback from the payment platform and use the information included in theobject. The format of such callbacks is standard (details), and the following objects and parameters are included in theobject:

- `body`—object with data to be sent in the request body (taking into account the specifics of a particular method, this object may contain various information)
- `methodGETPOST`—parameter specifying the HTTP method for sending the request (or)
- `url`—parameter containing a link for redirection

## Final callback format

The Open Banking in Belgium method uses the standard format for callbacks to deliver purchase results. For more information, see .

`10.00 EUR200`The following is the example of a callback with information about apurchase made in theproject.

The following is the example of a callback with information about a declined purchase.

## Useful links

The following articles can be useful when implementing purchases via Gate:

- and —about the interaction with the payment platform by using Gate.
- —about the procedure of generating and verifying signatures in requests and callbacks.
- —about the types, processing models, and possible statuses of supported payments and operations.
- —about processing of one-time one-step purchases with immediate debiting of funds by using Gate.
- —about error and response codes that are used in the payment platform to record information about performing of operations.
