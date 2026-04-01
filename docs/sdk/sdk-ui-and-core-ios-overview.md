# Overview

## Introduction

Mobile sdk_ui_ios is a software development kit with open-source code that can be used to integrate iOS apps with the Some Platform payment platform.

sdk_ui_ios provides the functionality for interaction of customers with the user interface and for interaction of a mobile application with the payment platform which allows sending and receiving necessary information during payment processing. Additionally, the open-source code available with sdk_ui_ios provides flexibility for configuring the user interface in accordance with the aspects of the application.

sdk_ui_ios can be embedded in mobile applications developed for iOS version 14 or later. The libraries and code examples are available on GitHub. To access, use the following URLs:

This section describes how to work with sdk_ui_ios and provides code examples in Swift and Objective-C.

- List of sdk_ui_ios releases:
- Code examples:

## Capabilities

The following functional capabilities are supported by sdk_ui_ios:

- pm_applepay.ditaOne-time one-step purchases.One-time two-step purchases (an authorization hold can be placed via the SDK and subsequent debiting of the authorized amount is carried out via Gate or Dashboard).COF purchases (they can be registered via the SDK and then managed via Gate or Dashboard).pm_applepay.ditaFor card andpayments, the payment interface described in this section is used. With other payment methods, Payment Widget is used for processing payments.Processing different types of payments made with cards andas well as other payment methods available for the merchant's project. Supported payment types include:
- Performing payment card verification (it involves debiting a zero amount from the customer's card).
- Checking current payment information.
- Submission of additional payment informationPayment retriesCascade payment processingCollecting customer dataAuxiliary procedures and additional capabilities to boost payment acceptance rates:
- Saving customer payment dataPayment interface language supportSending email notifications with the list of purchased items to customersAdditional capabilities to improve user experience:
- Customizing the appearance of the payment interface including the color scheme settings and the option to add the logo.

## Workflow

Generally, the following workflow is relevant when purchases are processed with the use of sdk_ui_ios.

1. In the user interface of a mobile application, the customer initiates a purchase by clicking the payment button or in a different fashion set up on the merchant side.
2. In the mobile application, a set of parameters for creating a payment session is generated. Then, with the help of sdk_ui_ios, this set is converted into a string for signing, and the string is sent to the server side of the merchant web service.
3. On the server side of the merchant web service, the parameters can be checked and supplemented if necessary, and the signature to the final parameter set is generated, following which the prepared data is sent back to sdk_ui_ios.
4. With the help of sdk_ui_ios, a payment session is initiated in the payment platform.
5. On the payment platform side, the payment interface is prepared in accordance with the invocation parameters, and the data for opening the interface is passed to the customer's device.
6. In the mobile application, the payment form is displayed to the customer.
7. The customer selects a payment method (if no method was selected when the payment session was initiated), specifies the necessary information, and confirms the purchase.
8. sdk_ui_ios sends a purchase request to the payment platform.
9. On the payment platform side, the payment is registered and all necessary technical actions are performed; these actions include sending the required data to the payment environment—to the providers and payment systems.
10. The payment is processed in the payment environment. Then the payment result information is received in the payment platform.
11. In the payment platform, the information about the payment result is processed and a callback is sent to the server side of the web service.
12. The information about the purchase result is sent from the payment platform to sdk_ui_ios.
13. The notification with the result information is displayed to the customer in the user interface.

## User interface

pm_applepay.ditaWhen card andpayments are processed, the customer interacts with the user interface designed by the Some Platform specialists. Though, you can customized the user interface by changing colors and adding your company's logo.
