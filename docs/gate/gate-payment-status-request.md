# Checking current payment information

## Overview

While working with the Platform payment platform, you can monitor up-to-date payment processing information using Dashboard and at the API level — through callbacks sent automatically according to a set of specified conditions (to learn more, see ) and responses to payment status requests. These requests can be sent whenever needed—for example, you may need to check the status of the payment made at the payment kiosk because its processing can take more than a day—but not earlier than 10 seconds after the initial request to process a payment was sent. However, it is important to keep in mind that payment information is available only when the request to process the payment in question has been received and the payment has been registered. Therefore, if the customer closes the Payment Widget without confirming the purchase, the response to the payment status request contains an error message that this payment has not been found in the platform.

`200error`A payment status request is processed according to the synchronous model of interaction between the web server and the payment platform. This implies that the request is fully processed within one HTTP session and uses only the resources of the payment platform. The response to the correct request contains an HTTP response status code () and the required data without detailed request processing information. If the request is incorrect, or there have been issues with its acceptance and processing, then the response contains an HTTP response status code, request processing statusand the detailed description of the error that occurred. To learn more about HTTP response status codes, see , and to learn more about the response codes that provide information on operation processing in the payment platform, see .

## Request format

`general`A payment status request is formatted according to the guidelines listed in section . It is sent to the endpoint, and its body must contain aobject with the following identification information:

- `project_id`—a project ID assigned by Platform at the stage of integration;
- `payment_id`—an ID of the payment to be monitored;
- `signature`—a request signature generated after required parameters listed above have been specified. To learn more, see .

## Response format

`HTTP/1.1200 OK`A response to the payment status request is formatted according to the guidelines listed in section . If the request has been successfully accepted and processed, the response header contains the status line indicating the protocol and its version (), the response status code and the explanatory phrase (for instance,). The body of such response contains the following data: a project ID and a signature as well as information about the payment status and all operations initiated within this payment. It can also contain additional data which is customized with the assistance of the Platform technical support specialists and can vary depending on the payment method used.

## Response examples

The following response contains information about a completed two-step purchase. It includes:

The following response contains information about a one-step purchase in progress which includes:

The following is the response to the incorrect request. If the request contains an error, the response includes:

For comparison, the following is the example of the response with the information about a declined payment. This response contains:

The following example is the response to the payment status request when the payment in question has not been initiated in the payment platform (for instance, when the customer has closed the Payment Widget without confirming the purchase and, thus, the request to initiate the payment has not been actually sent). In this case, the response contains:

## Related links

- —general information about integration with the payment platform using Gate.
- —detailed information about types, workflows, and possible statuses of supported payments.
- —detailed information about generating and verifying signatures in requests and callbacks sent by the payment platform.
- —a comprehensive list of error and response codes used in the payment platform to provide operation processing information.
