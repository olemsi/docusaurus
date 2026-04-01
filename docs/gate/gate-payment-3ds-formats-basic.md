# Basic workflow messages

## Callback format when authentication is needed

`acsredirectData`The redirection data is passed in one of the two objects:(if the provider is not involved in the authentication process) or(if the provider is involved).When the basic authentication flow is used, the callback containing the data for redirecting the customer is sent from the payment platform to the web service. These callbacks are arranged in a standard format described in greater detail in the following article.

`acs`The redirection data is passed in theobject.PAReqCReq`acspa_reqacs_urlmd`Theobject of the callback contains the following data: themessage (in theparameter) to send the authentication initiation request to the issuer, the URL of the authentication page (), and the merchant data kept on file by the card scheme ().

`redirectDatabodymethodurl`Theobject of the callback contains the following data: the body of the request (), the HTTP method of the request (), and the URL of the provider ().

## Format of the redirection request

Use a POST method and include the following objects and parametersDepending on what is included in the redirection data, use a POST or GET method and include the following objects and parameters:To redirect the customer to the issuer's ACS page or the provider's page, send the request to the URL received in the callback that signals the need for authentication.

HTML fileFor your convenience, here is a ready-madethat you can use by replacing the sample code with the actual payment parameters.

## Format of the message with the authentication result

`pares`The message with the authentication result is sent to the web service in theparameter.

## Format of the payment completion request

To resume processing of the payment once the authentication procedure has been completed, send a request to theendpoint using the POST HTTP method. The request must contain the following objects and parameters:

Thus, a correct request for payment completion following the 3‑D Secure authentication contains project and payment identifiers, the signature, and the authentication result.

- `general``project_id`—the project identifier obtained from Platform.`payment_id`—the payment identifier unique within the merchant project.`signature`—the request signature generated after all required parameters have been specified. For more information about signature generation, see .—the object containing the general identification information of the request:
- `pares`—the parameter containing the customer's 3‑D Secure authentication result sourced from the PARes message.
