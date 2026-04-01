# Extended workflow messages

## Format of the callback with iframe data

When the extended authentication flow via Gate is used, the callback containing the data for an iframe element is sent from the payment platform to the web service. These callbacks are arranged in a standard format described in greater detail in the following article.

The payment platform does not send callbacks with iframe data when the issuer decides to use either of the following options without factoring in the customer's device information:

`urlactioninput`The following example contains data for creating an iframe element. Use the value of theparameter from the iframe data as the value of theattribute and specify the values of other parameters inside the correspondingtags of the iframe code.

- belowthe challenge flow: the customer is redirected to the authentication page for verification. In this case, your web service is required to accept and process the callback with the redirection data. For more information, see.
- the frictionless flow: the issuer authenticates the customer. In this case, your web service is required to accept and process the callback with the payment result.

## Callback format when authentication is needed

When the extended authentication flow via Gate is used, the callback containing the data for redirecting the customer to the issuer's ACS page is sent from the payment platform to the web service. These callbacks are arranged in a standard format described in greater detail in the following article. If the issuer decides to use the frictionless flow, the payment platform does not send callbacks with the customer redirection data. In this case, your web service is required to accept and process the callback with the payment result.

`urlactioninput`The following example contains data for redirecting the customer to the authentication page. Use the value of theparameter as the value of theattribute, and specify the values of other parameters inside the correspondingtags of the HTML code.

## Format of the message acknowledging the receipt of the customer's device information

`3ds_notification_url`In the extended authentication workflow, the issuer's Access Control Server sends a message with an acknowledgement of receiving the customer's device data to the web service URL provided in the initial payment request (in theparameter). The message is arranged in the format chosen by the issuer.

## Format of the authentication initiation request

When you use the extended authentication workflow, you initiate the authentication by sending a HTTP POST request to theendpoint. The request must contain the following objects and parameters:

Thus, a correct request for the 3‑D Secure authentication initiation contains a project identifier, a payment identifier, and a signature.

- `general``project_id`—the project identifier obtained from Platform.`payment_id`—the payment identifier unique within the merchant project.`signature`—the request signature generated after all required parameters have been specified. For more information about signature generation, see .—the object containing the general identification information of the request:
- `threeds_completion_indicatortruefalse`—the parameter that indicates whether the message acknowledging the receipt of the customer's device information was received within 10 seconds after the iframe element was closed. If the acknowledgement was received within 10 seconds, pass; if not, pass.

## Format of the message with the authentication result

`cres`When the extended authentication flow via Gate is used, the authentication result is sent to the web service in the format chosen by the issuer. This information is passed in theparameter contained in the message.

## Format of the payment completion request

Both the basic and the extended authentication flows via Gate imply that to resume processing of the payment once the authentication procedure has been completed, you have to send a request to theendpoint using the POST HTTP method. The request must contain the following objects and parameters:

Thus, a correct request for payment completion following the 3‑D Secure authentication contains project and payment identifiers, the signature, and the authentication result.

- `general``project_id`—the project identifier obtained from Platform
              .`payment_id`—the payment identifier unique within the merchant project.`signature`—the request signature generated after all required parameters have been specified. For more information about signature generation, see .—the object containing the general identification information of the request:
- `cres`—the parameter containing the customer's 3‑D Secure authentication result sent in the message from the Access Control Server.
