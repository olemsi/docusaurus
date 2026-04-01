# Check by payment ID

## Request format

`general`A request to check payment status by payment ID is formatted according to the guidelines listed in . It is sent to the endpoint, and its body must contain aobject with the following identification information:

- `project_id`—a project ID assigned by Platform at the stage of integration;
- `payment_id`—an ID of the payment to be monitored;
- `signature`—a request signature generated after required parameters listed above have been specified. To learn more, see .

## Response format

`HTTP/1.1200 OK`A response to the payment status request is formatted according to the guidelines listed in . If the request has been successfully accepted and processed, the response header contains the status line indicating the protocol and its version (), the response status code and the explanatory phrase (for instance,). The body of such response contains the following data:

in the Gate API specificationThe basic set of parameters passed in the response to the payment status request is listed.

- a project identifier and a signature;
- information about the payment status and all operations initiated within this payment;
- that can vary depending on the payment method used and can be customised for different payment methods with the assistance of the technical support specialistsadditional data.

## Response examples

The following response contains information about a completed two-step purchase. It includes:

The following response contains information about a one-step purchase in progress which includes:

The following is the response to the incorrect request. If the request contains an error, the response includes:

For comparison, the following is the example of the response with the information about a declined payment. This response contains:

The following example is the response to the payment status request when the payment in question has not been initiated in the payment platform (for instance, when the customer has closed the Payment Widget without confirming the purchase and, thus, the request to initiate the payment has not been actually sent). In this case, the response contains:
