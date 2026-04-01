# Authentication by payment system

## Overview

Authentication by payment system is used for ensuring security of online purchases made with cards of certain payment systems such as Humo and Uzcard and is mandatory when such purchases are processed.

This type of authentication replaces 3‑D Secure and is performed in a similar fashion with the use of one-time verification codes (One Time PIN, OTP) that the customer receives via a text message. However, unlike the case of 3‑D Secure when the customer enters verification codes on the side of the issuer, in this case the customer enters verification codes on the side of the merchant's web service.

In order to have the capability of the customer authentication by payment system supported, you should configure the web service to accept verification codes from the customer and to transmit such codes to the payment platform.

## Workflow

From a technical standpoint, the authentication by payment system employs the procedure of submitting additional payment information. This workflow implies sending a callback from the payment platform to the web service after the request was initially processed on the side of the payment platform. This callback communicates the necessity to provide a verification code. In its turn, the web service has to receive the required verification code from the customer and to send the request for continuing the payment processing to the platform.

The wait time for the request to arrive is 30 minutes. It is based on the time that elapses between the moment when the need to submit additional information is detected and the moment when the request from the web service is received. If the wait time has elapsed and the payment platform has not received the required request, the payment is automatically declined. As soon as all required data is submitted to the payment platform, the payment processing is resumed. If the customer enters the wrong verification code, the payment is declined with no additional attempts to enter the verification code offered to the customer.

Thus, during interaction with the payment platform, your web service is required to do the following:

To learn more about responding to clarifying requests, see . Examples of callback and request data used in customer authentication by payment system are covered in the following section.

- receive a callback indicating the need to provide a verification code
- receive a verification code that was entered by the customer
- send the request to continue payment processing if a correct verification code has been provided.

## Data format

Formats of callbacks and requests sent during the procedure of authentication by payment system are identical to those used in the procedure of submitting additional payment information.
