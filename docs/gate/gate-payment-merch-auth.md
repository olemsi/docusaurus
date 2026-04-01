# Authentication on merchant's request

## General information

Customer authentication performed by the provider on merchant's request is intended to provide additional security for online payments by payment cards. Such authentication is usually used as a replacement for 3‑D Secure in addition to it. This can be appropriate when the 3‑D Secure authentication is not reliable enough, e.g. when issuers use outdated ways of authentication. Customer authentication on merchant's request implies submitting the validation code, which is contained in the information about the debiting of customer funds. The information is received by the customer in a SMS or a bank statement.

The payment platform supports authentication on merchant's request only for some providers, to enable this authentication a merchant project has to be configured. To do this, contact Platform technical support at support@platform.dev.

When performing a customer authentication by the payment system on merchant's request, the merchant web service is required to do the following:

Detailed information on authentication on merchant's request is provided in the sections that follow.

- `awaiting merchant auth`receive a callback from the payment platform containing the information about the change of payment status to.
- obtain user consent.
- send the authentication request.
- receive the validation code from the customer.
- send the request containing the validation code to the payment platform.

## Workflow

*Information*`awaiting merchant auth`Authentication on merchant's request is possible when performing one-step and two-step purchases by payment cards.about the necessity of such authentication is contained in callbacks. As a general rule, after receiving a callback a response must be sent to the payment platform. Callbacks contain information about the change of payment status to.

*reactobtainsendreceivesend*The following scenario must be implemented on the web service side in order to successfullyto such callbacks: the web service mustthe customer's consent to the authentication,the authentication request to the payment platform,the validation code from the customer,the request containing code to the payment platform to continue payment processing.

`decline`The time-out value for this request is unlimited, taking into account the results of authentication. The overall time of payment processing may not exceed the maximum allowed amount, which is set on the provider's side. If the payment is not successful or declined during this time, it automatically assumes thestatus.

After the payment platform receives the request containing the validation code, the payment processing continues.

The sections that follow discuss in more details the request and callback formats. For general information on how to use the API, see .

## Format of callback informing about the necessity of authentication

The information about the necessity of authentication is contained in a callback, which uses a standard format. For more results, see .

`awaiting merchant auth`The following is the example of a callback, with information about the payment and operation assuming thestatus before the payment processing request is received.

## Format of request for authentication initiation

`general`To initiate an authentication on merchant's request a request must by sent to the payment platform by using the POST (HTTP) request to the following endpoint. This request must include theobject, containing general request identification information and request type indicator:

`start`Thus a correct request must include the project and payment IDs, indicator of request type () and signature.

- `project_id`—the project ID obtained from Platform
- `payment_id`—payment ID unique within the project
- `typestart`—indicator of request type, must have thevalue
- `signature`—signature created after you specify all the required parameters. For more information about signature generation, see

## Format of request for continuation of payment processing

Taking into account the result of authentication, to continue payment processing a request using the POST (HTTP) method must be sent to the endpoint. The request must contain the following objects and parameters:

`finish`Thus a correct request must include the project and payment IDs, indicator of request type (), signature and validation code.

1. `general``project_id`—the project ID obtained from Platform`payment_id`—payment ID unique within the project`typefinish`—indicator of request type, must have thevalue`signature`—signature created after you specify all the required parameters. For more information about signature generation, seeObject—general request identification information:
2. `confirmation_code`—validation code received from the customer.
