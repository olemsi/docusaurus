# Sending requests and accepting responses

When all data is collected and signed, you can send the request to the required endpoint (the list of endpoints can be found in the Gate API). In our case, it is theendpoint. When the request is received (as a rule, within 100 ms), the payment platform sends a synchronous HTTP response to the web service stating either that the request was accepted for processing or that the request was not accepted due to detected errors.

The following codes are used in the responses from the platform:

If you need information contained in the responses from the platform, set up their reception and processing.

- `200 OK`—the request has been accepted for processing. In this case, expect subsequent callbacks about processing of the payment. The next section describes how to work with such callbacks.
- `400 Bad Request`—the request has not been accepted because at least one required parameter is missing or the signature is invalid. In this case, add missing data and generate a new signature (or generate a signature again after you have checked the validity of the project ID and the key) and resend the request.
- `403 Forbidden`—the request has not been accepted due to lack of permissions to access the endpoint. In this case, contact the Platform technical support to have the sender's IP address added to the IP whitelist.
- `422 Unprocessable Entity`—the request has not been accepted because it contains a syntax error (for example, a comma is missing). In this case, correct the mistake and resend the request.
- `500 Internal Error`—the request has not been accepted because the payment platform was unavailable. In this case, try resending the request later.
