# Open Banking in Poland

## General information

To process a purchase through Gate by using one of the Open Banking in Poland method, the merchant's web service is required to do the following:

Information about the data formats used to perform customer redirection is provided further in this section.

The full sequence and special aspects of purchase processing are provided below.

Information about the formats of requests and callbacks used for processing payments by using the Open Banking in Poland method via Gate is presented further in this section. General information about working with the Gate API is presented in .

1. Send a request with all the required parameters and signature to the Platform URL.
2. Receive an intermediate callback from the payment platform and redirect the customer to the provider service.
3. Receive the final callback from the payment platform.

::: warning
When redirecting to services of providers and banks, the iframe element cannot be used. The pages of these services can be opened in a separate tab or in a modal window (regardless of the specifics of the web service).
:::

## Request format

There are several things you need to consider when sending purchase requests by using the Open Banking in Poland method:

Thus, a correct purchase request by using the Open Banking in Poland method must contain the project identifier, basic payment information (identifier, amount, and currency code), customer identifier and IP address, bank identifier, URLs for redirection and signature, as well as various optional parameters.

1. `/v2/payment/banks/poland/sale`To initiate each purchase, send a separate POST request to theendpoint, which belongs to the group.
2. `general``project_id`—project identifier obtained from Platform during integration`payment_id`—payment identifier unique within the project`signature`—request signature generated after all required parameters are specified (details—in the )Object—general purchase information:`payment``amount`—payment amount in the smallest currency unit`currency`—alphabetic payment currency code in the ISO-4217 alpha-3 formatObject—payment information:`customer``id`—customer identifier unique within the project`ip_address`—customer IP address relevant for the initiated paymentObject—customer information:`account``bank_id`—bank identifierObject—customer account information:`return_url``success`—URL for redirecting a customer after a processed purchase`decline`—URL for redirecting a customer after a declined purchase`return`—URL for redirecting the customer to the web service when working with the service of a provider or bank in cases where the customer refuses to make a payment.Object—URLs for redirecting the customer to the web service:Each request must include the following objects and parameters:
3. Additionally, any other parameters included in the specification can be used.

## Formats of intermediate callbacks for customer redirection

`redirect_dataredirect_data`Each payment made with the Open Banking in Poland method requires redirection of customers from the merchant's web service to the service of the provider or bank. To redirect a customer it is necessary to receive an intermediate callback from the payment platform and use the information included in theobject. The format of such callbacks is standard (details), and the following objects and parameters are included in theobject:

- `body`—object with data to be sent in the request body (taking into account the specifics of a particular method, this object may contain various information)
- `methodGETPOST`—parameter specifying the HTTP method for sending the request (or)
- `url`—parameter containing a link for redirection

## Final callback format

The Open Banking in Poland method uses the standard format for callbacks to deliver purchase results. For more information, see .

`10.00 PLN239`The following is the example of a callback with information about apurchase made in theproject.

The following is the example of a callback with information about a declined purchase.

## Useful links

The following articles can be useful when implementing purchases via Gate:

- and —about the interaction with the payment platform by using Gate.
- —about the procedure of generating and verifying signatures in requests and callbacks.
- —about the types, processing models, and possible statuses of supported payments and operations.
- —about processing of one-time one-step purchases with immediate debiting of funds by using Payment Widget.
- —about error and response codes that are used in the payment platform to record information about performing of operations.
