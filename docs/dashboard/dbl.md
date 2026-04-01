# Response format

## Overview

*response*The Platform payment platform responds with an HTTPmessage to each request within one HTTP session. The requested data of the response body includes:

Data API specificationThis section covers the general structure of such responses as well as codes used for communicating the request status. For the information about the data structure of responses to specific requests, see the.

- The requested information, if the the request was accepted and executed.
- The information about the error that occurred, if the request cannot be handled.

## Structure

Each HTTP response includes the following elements listed in the order they appear:

- `HTTP/1.1200 OK`The status line which indicates the protocol and its version (), the response status code and the reason phrase (for example,).
- Header fields.
- An empty line which serves as a separator between the message header and the body.
- The message body which contains the JSON string encoded in UTF-8 with the response data.

## Status codes

HTTP status codes are used in the status line of each response to state the result of the request acceptance and execution or the cause of the error that occurred. In case of the Data API, the following status codes and reason phrases are used.

| Status code with the reason phrase | Description |
| --- | --- |
| 200 OK | The request has been successfully executed. The response body contains the requested data. |
| 400 Bad Request | The request cannot be accepted due to invalid syntax or the absence of the mandatory parameter in the JSON string (except for the token and signature). |
| 401 Authorization Required | The request cannot be accepted due to failed authentication, for example, if the token or signature was incorrect in the request, or the request included the project ID which cannot be accessed via the token currently in use. |
| 429 Too Many Requests | The request cannot be accepted due to exceeding the rate limit for requests sent from a single Dashboard user account. In this case, you should wait for at least three seconds before resending the request. To prevent such situations, make sure not to exceed the recommended limit of 60 requests per minute for a single Dashboard user account. |
| 500 Internal Error | The request cannot be processed due to the payment platform error. |

## Error description

`401 Authorization Required`If the request contained an error, then the status line indicates the response status code with the cause of the error (in the example below it is), while the message body contains the extended description of this error:

- `nameAuthorization Required`An explanatory phrase for the response header in theparameter (in the example—).
- `messageYou have no access to project_id = 22`Description of the error in theparameter (if the error has been processed in the plaform; in the example—).
- `code0`The service code in theparameter with the fixed value of.
- `status401`The code from the response header in theparameter (in the example,).
