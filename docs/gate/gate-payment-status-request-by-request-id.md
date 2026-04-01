# Check by request ID

## Request format

A request to check payment status by request ID is formatted according to the guidelines listed in . It is sent to the endpoint, and its body must contain the following identification information:

- `project_id`—a project ID assigned by Platform at the stage of integration;
- `request_id`—an ID of the request to be monitored, can be found in the synchronous response from the payment platform;
- `signature`—a request signature generated after required parameters listed above have been specified. To learn more, see .

## Response format

`200 OK`A response to the payment status request is formatted according to the guidelines listed in . If the request has been successfully accepted and processed, the response header contains the status line indicating the protocol and its version (HTTP/1.1), the response status code and the explanatory phrase (for instance,). The body of such response contains information about the payment in question: it is either the information about the payment status and all operations initiated within this payment, or the information about errors in the payment request.
