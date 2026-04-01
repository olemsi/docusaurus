# Frequently asked questions

**Is there a tool I can use to find out the protocol that was used?**

To determine the protocol that was used in processed payment, you can use a callback with the information about payment results that the payment platform returns.

****(non-3DS)**Is it possible to process payments without authenticating by using 3‑D Secure?**

questionFrom 1 February 2020, all the EEA issuers must decline any payments that do not use 3ds2 except for the following payments: the payments that fall outside the PSD2 scope and the payments which are exempt according to PSD2. For more information, see the answer to theregarding this type of payments. Merchant can refrain from using the 3‑D Secure authentication in payments with cards issued inside of EEA if the payments lie outside of the PSD2 scope.If you as a merchant stop using authentication for payments, you will be fully responsible and held liable for all damages that arise due to any fraudulent actions.Yes, merchant can refrain from using the 3‑D Secure authentication. Note though the following:

For more information about exempts from mandatory 3ds2 authentication, refer to you Some Platform account manager.

This section provides the answers to the common questions regarding 3ds2 and its support and usage options.

**General protocol issues**

**Adopting and implementation**

**Usage options**

For more information regarding 3ds2, refer to your account manager at Some Platform.

**What is the difference between 3ds2 and 3ds1?**

Extended payment options thanks to support for authentication in mobile apps. (No browser is required.)Enhanced security thanks to use of more secure authentication methods and support for extended customer details provided when performing authentication.More convenient payment procedure and increasing payment conversion rate thanks to new flow for authenticating customer by issuer with no customer interaction.Enhanced security thanks to support of more secure authentication methodsSupport for authentication in mobile apps and support for extended customer details provided when performing authenticationPossibility to perform authentication with no customer involvementThe key advantages of 3ds2, as compared with 3ds1, include the following:

User experience becomes flexible with optional customer redirection to the preload page hosted on the payment platform, the support of the two authentication flows—frictionless flow and challenge flow, and new customer authentication methods (for example using biometric data in a mobile app).

The communication between merchant web services and the Some Platform payment platform was enhanced to include new parameters and new data structures in callbacks. To move to 3ds2, merchants are required to register with Visa Secure and/or Mastercard Identity Check and place Visa Secure and/or Mastercard Identity Check logos on their payment widgets.

It is not mandatory to support all these changes in your web service but it is required to place the logos on merchant payment widgets.

**Are there any changes in the end-user experience?**

Unlike 3ds1 in which the authentication procedure is always performed with a single redirect, in 3ds2 the number of redirects may differ:

Customers may be offered to choose authentication method, for example the issuer may request the customer to confirm their identity by using biometric data.

**What are the procedures for handling customer's biometric data?**

3ds2 can use biometric data to authenticate customers. This functionality requires that both issuer and customer device are capable to store and process biometric data. Note, though, that it is issuer who—at its own discretion—determines the customer authentication procedure and the authentication options.

Customer authentication by using fingerprint reader or facial recognition system (such as Face ID) on customer's mobile device is example of using biometric data.

**Can I find out in advance whether customer must be authenticated?**

No, the information about the possibility of customer authentication is stored on the 3DS Server, and therefore this information can only be obtained after sending a payment request.

**Are there any payments that do not require the 3ds2 authentication?**

Yes, the following payments that lie outside of the PSD2 scope:

The payment platform detects these payments and omits the authentication procedure when processing these payments.

Optionally, issuer may also choose not to require 3ds2 for exemptions such as the following payments:

Currently, the Some Platform payment platform does not supports these exemptions.

**Can I altogether avoid 3ds2 authentication when performing payments that are exempt from 3ds2?**

No, this is not necessarily true. It is up to the issuer to decide whether 3ds2 authentication is required. The issuer may respond with a soft decline after which the merchant will be required to resend the payment request with the same payment parameters as in the initial request to perform the 3ds2 authentication.

**What is required to implement 3ds2?**

To implement 3ds2 in your web service, you need to do the following:

**How does the implementation of 3ds2 affect the Gate payments?**

Merchants face the following choice:

Also, in either of the authentication workflows, to increase probability of selecting the frictionless flow, it is recommended that merchant collects and submits additional customer parameters in payment requests. Apart from that, the communication with the payment platform remains the same.

`acs_return_urlreturn_urlreturn_url`en_3ds2_parameters.ditaOnce you implement the algorithm similar to the one used for 3ds1, you can benefit from a simplified transition (without account manager assistance) to the workflow that uses the new algorithm. To do so, you only need to pass theobject with theparameter inside payment requests. For more information, see. If you not include theparameter in payment requests, the new algorithm will not be applied.

**How does the implementation of 3ds2 affect the Payment Widget payments?**

There is no immediate need for merchants to update their web service to comply with the 3ds2 procedures, although to increase probability of selecting the frictionless flow, it is recommended that merchants implement the functionality for parsing new parameters and use additional customer parameters in requests for opening Payment Widget. Apart from that, the communication with the payment platform remains the same.

**Do you offer test cards to set up and debug the new workflow?**

To implement and debug your payment procedures that use the new authentication workflow, you can use the following test cards:

Visa cards:

Mastercard cards:

If you have any questions regarding test payments, contact our technical support at support@example.com

**Can I use 3ds2 for all payments with Visa, Mastercard, and Maestro cards?**

No, support of 3ds2 depends on the issuer and provider readiness to implement the new authentication procedure. From the 14 September 2019, the expectation is for all e-commerce payments in European Economic Area (EEA) to be processed by using 3ds2 to meet the Strong Customer Authentication (SCA) requirements. The issuers in other regions are expected to support 3ds2 by the end of 2020.

**Do I need to support 3ds1 if I use 3ds2?**

Yes, you do need to support the 3ds1 authentication, since in some cases an issuer or a provider may prefer 3ds1 because the 3ds2 is not possible or feasible. For instance, Mastercard allows payment platform to fall back to 3ds1 and retry the authentication procedure, if the 3ds2 authentication fails due to unavailability of payment system or issuer.

**Can merchant choose to use 3ds1 instead of 3ds2?**

No, the decision as to protocol choice belongs solely to the 3DS Server and depends on available issuer facilities. There is no way the merchant can affect the protocol choice.

1. Contact your Some Platform account manager and discuss the possibility of implementing 3ds2 and the implementation time and schedule.
2. Update your web service to support 3ds2.
3. Test and deploy the 3ds2 support with Some Platform support service assistance.
