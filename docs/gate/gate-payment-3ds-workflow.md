# Authentication workflows

## Basic workflow

In the payment platform, communicating the need for the 3‑D Secure authentication to merchants is carried out via callbacks. Your web service is expected to respond to these callbacks the same way it responds to any other callbacks received from the payment platform.

`acs`*redirectacceptsend*Basic authentication workflow implies that the callback communicating the need for authentication contains theobject. To respond to such callbacks, you need tothe customer to the issuer's ACS page,the authentication result, andthe payment completion request with the result to the payment platform. Note that once the need for authentication is established, the payment platform waits for the payment completion request with the authentication result from the web service; as a rule, the waiting time is 30 minutes. If the payment platform does not receive the request with the authentication result within the waiting time, the payment is automatically declined.

`acsredirectData`Basic authentication workflow implies that the callback communicating the need for authentication contains either theobject (if the provider is not involved in the authentication process), or theobject (if the provider is involved). Responding to such callbacks requires the following:

`cascading_with_redirecttrue`If the cascading payments option is enabled, the platform may request the 3‑D Secure authentication in one or more additional callbacks. If the additional callback contains theparameter that is set to, your web service is required to do the following:When you submit the authentication result, the payment platform continues payment processing.

For more information, see  or contact the technical support specialists at support@platform.dev.

Information about the format of requests and callbacks is provided in the sections that follow. General information about using the Gate API can be found in .

## Extended workflow

In the payment platform, communicating the need for the 3‑D Secure authentication is carried out via callbacks. Your web service is expected to respond to these callbacks the same way it responds to any other callbacks received from the payment platform. However, there is no authentication-specific communication when the issuer makes the decision not to request any additional data while implementing the frictionless flow. In this case, the web service is not required to perform any actions other than those implied by the standard payment processing workflow while the authentication result is passed in the final callback.

`iframethreeds2`In the extended workflow, the callback communicating the need for authentication contains theobject (in theobject). Responding to such callbacks requires your web service to do the following:

`redirectcascading_with_redirecttrue`If the cascading payments option is enabled, your web service may need to accept one or more additional callbacks with theobject. If the additional callback contains theparameter that is set to, your web service is required to do the following:When you submit the authentication result, the payment platform continues payment processing.

For more information, see  or contact the technical support specialists support@platform.dev.

Information about the format of callbacks and requests used in the extended workflow can be found in . General information about using the Gate API is provided in .

- *Display*an error message to a customer on a page and obtain their consent to re-authenticate.
- *Respond*to the callback accordingly.

1. *display*Using the data received in the callback,the iframe element to the customer.
2. *Acceptsend*the acknowledgement message from the issuer's Access Control Server andthe authentication initiation request to the payment platform.
3. *acceptcomplete**Acceptrespond*`redirectthreeds2`a callback from the payment platform with theobject (in theobject) andwith the callback acknowledgement.*Redirect*the customer to the authentication page within 30 seconds after the callback was received.*Accept*the authentication result from the issuer.*Send*`3ds_result`a payment completion request with the authentication result in theparameter to the payment platform within 30 minutes after the need for authentication was determined.If the issuer decides to use the frictionless flow, the web service is required toa callback with the authentication result information from the payment platform. If the issuer selects the challenge flow, the web service is required tothe following steps:
