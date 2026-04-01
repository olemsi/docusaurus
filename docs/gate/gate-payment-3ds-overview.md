# 3-D Secure overview

## General information

3‑D Secure (Three-Domain Secure) customer authentication is aimed to increase secure processing of online card payments. This authentication procedure can be carried out in a variety of ways: the customer may be required to provide a one-time PIN (OTP) code to confirm their identity, the customer's fingerprint may be verified on their device, or the customer's involvement may be bypassed altogether based on the payment and customer data. The choice of the authentication mechanism is decided on a case-by-case basis.

3‑D Secure involves the interaction of three domains:

, or Payer Authentication Request, PAReq, or Payer Authentication Response, PAResThe domains exchange messages that are required to authenticate the customer. These messages include the request to determine whether a certain cardholder can be authenticated (Verifying Enrolment Request, VEReq) and the corresponding response (Verifying Enrolment Response, VERes) as well as the customer authentication request (Challenge Request, CReq) and the response containing the authentication result information (Challenge Response, CRes).

Note that the information about the possibility of customer authentication and the protocol version is stored on the Access Control Server, and this information can be obtained only after a payment request has been sent. Moreover, the web service and the payment platform do not have control over customer actions on the authentication page; they can only receive the authentication result information.

- *Acquirer domain*(or the Merchant Plug-In (MPI) Server), as well as the provider if it is involved in the authentication process: in the context of the Platform payment platform interoperability, it includes the merchant's web service, the payment platform and its 3DS Server.
- *Interoperability domain*: it includes the Directory Servers (DS) of global card schemes.
- *Issuer domain*: it includes the issuer's Access Control Servers (ACS) and the authentication page.

::: tip
Global card schemes such as American Express, Mastercard, and Visa as well as Platform currently support the second version of the 3‑D Secure protocol, 3‑D Secure 2. Here is the information about working with this protocol version.
:::

::: tip
There are two main versions of the 3‑D Secure protocol: 3‑D Secure 1 and 3‑D Secure 2. The 3‑D Secure 2 version differs from 3‑D Secure 1 mostly by the range of available mechanisms for customer identity verification and the authentication parameters used. For example, the customer's biometric verification (with the use of fingerprints) or the customer's verification without any actions on the customer's part is available only in the second version of the protocol. The first version is no longer supported by such global card schemes as Mastercard and Visa, but other card schemes may still support this version. The information presented in this article will allow you to work with both versions.
:::

## 3‑D Secure authentication flows

3‑D Secure supports the following authentication flows:

and thereby helps increase acceptance rates and enhances customer experience`billingbrowser`The merchant cannot select the authentication flow. While the merchant can indicate which flow selection is preferable, the final decision is made by the issuer. In addition to specifying the preferred flow, the merchant can pass a range of optional parameters in the payment request which increases the possibility of the frictionless flow selection. Most frequently used optional parameters include the customer's billing address (parameters passed in theobject) and the User-Agent HTTP header received from the browser (theparameter). Information about these and other parameters can be found below.
