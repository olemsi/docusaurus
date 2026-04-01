# Open Banking

## Introduction

Open Banking is a group of internet banking methods which are based on the use of open banking protocols and provide advanced capabilities for secure processing of customer information. The methods of this group are characterized by a set of similar properties and allow processing payments in euros and a number of other European currencies through various banks in Europe by using bank accounts. At the same time, each of the methods is localized in a separate country, taking into account its specifics.

The Platform payment platform supports processing purchases made with the Open Banking payment methods. You can also perform payouts by using  and  as complementary payment methods. Note that in this case payouts can be used to issue refunds to your customers.

This article provides general information about working with the Open Banking methods group, without the description of the parameters and features that apply to individual methods. This article may be useful in cases where it is necessary to enable Open Banking methods in a number of countries and it is reasonable to first configure the general parameters of the web service for the entire group of enabled methods, and then configure individual parameters for each of them.

Specific information about each Open Banking method, including information about available currencies and banks, as well as technical characteristics (such as the method code for preselecting it in Payment Widget and the endpoint address for sending requests by using Gate), is presented in the articles describing these methods.

## General information

The general information about the Open Banking method group can be presented as follows.

| Payment method type | bank payments |
| --- | --- |
| Payment instruments | bank accounts |
| Countries and regions | GR,IT, IE,basic availability: AT, BE, EE, ES, FI, FR, DE,HU,LT, LV, NL, NO, PL, PT, RO, SEadditionally, taking into account the development of the methods group, other regions may also be available |
| Payment currencies | GR,IT, IE,basic availability: EUR (for AT, BE, EE, ES, FI, FR, DE,LT, NL, PL, PT, RO), HUF (for HU), NOK (for NO), PLN (for PL), RON (for RO), SEK (for SE)additionally, taking into account the development of the methods group, other currencies may also be available |
| Currency conversion | on the Platform side |
| One-time purchases | + |
| Credential-on-file purchases | – |
| Full refunds | – |
| Partial refunds | – |
| Payouts | – |
| Chargebacks | – |
| Notes | refer to your Platform account manager for information about countries and currencies supported by Open Banking methods (in the light of active development of this group and the capabilities of providers)taking into account the specifics of the providers and banks involved, in some cases customers must provide additional consent to make payments using open banking protocols, which adds the appropriate steps to payment scenarios (more details below)belowPayment Widget supports different bank and method selection options (more details)when redirecting to services of providers and banks, the iframe element cannot be used; the pages of these services can be opened in a separate tab or in a modal windowbelowpayment confirmation procedure may be used during purchase processing  (more details)performing payouts is possible with the use of the complementary payment methods  and |
| Currencies for settlements with merchants | *out-of-the-box:**on demand:* |
| Processing times for settlements with merchants | usually immediately |
| Onboarding and access fee | [Platform shop](https://ecommpay.com/shop/); additional information is available inrefer to your Platform account manager |

## Interaction diagram

Payment processing by using the Open Banking methods involves the merchant's web service, one of Platform interfaces, the Platform payment platform, and technical facilities of the bank and provider services.

## Operations support

, Gate and Dashboard (using payment links for opening Payment Widget)Various platform interfaces can be used to process payments and perform operations using the Open Banking methods: purchases can be processed by using Payment Widget. At the same time, regardless of the interfaces used, amount limitations are applicable depending on the bank and provider used for purchase processing.

## Processing scenarios

To perform a purchase by using the Open Banking methods, you need to redirect the customer to the provider (if necessary) and bank services.

The customer payment scenario via Payment Widget (in the basic case where the customer chooses the method and bank and is redirected from the final page of the payment form to the web service) looks like this (using the  method as an example).

General scenarios of processing purchases can be presented as follows.

Scenarios for performing operations via the main interfaces of the payment platform correspond to those presented in the diagrams. Similarly, when additional capabilities are used (for example when using payment links and using separate additional capabilities), scenarios for performing operations can be adjusted accordingly

as well as when payments are initiated through GateAt the same time, the specifics of working with the Open Banking methods include the necessity of selecting a bank for each payment. When Payment Widget is used for payment processing, the customer usually selects a bank while already in the payment form. When Payment Widget is opened with the method and bank preselected, the bank must be selected on the side of the web service and the identifier of this bank must be specified in requests. Possible options for bank selection when working with Payment Widget are described in , ways of using bank identifiers—in the next subsection,.

## Supported banks

`{payment_method}{operationType}sale/v2/info/banks/germany/sale/list`When making payments using any of the Open Banking group methods, various banks that support this method may be involved. To obtain up-to-date information about the banks available for a specific method, it is recommended to send POST requests to theGate API endpoint group. For Open Banking methods, the name of the catalogis the name of the country (in accordance with how it is specified in the description of the method), and the name of the catalogis the type of operation (). So, for themethod the request to theendpoint is applicable.

The request must contain the project and payment identifiers, signature, currency code, and payment amount, as shown in the example. Specify real payment data if possible. However, random values are also allowed.

If you have any questions about working with banks supported by the Open Banking methods, refer to your Platform account manager.

## Payment confirmation procedure

The workflow of processing purchases made with Open Banking methods implies participation of banks, and in certain cases, processing payments on the side of these banks and the provider service may take up considerable time (in some cases up to seven or more days). As a result, there can be situations when the earlier information about the payment's completion or decline contradicts the final result (for example, following a notification about a declined payment, the funds are credited to the recipient's account, or vice versa).

`reverseddecline`To ensure timely and correct notification of merchants regarding the status of payments in these cases, the Platform payment platform uses a payment confirmation procedure. When you integrate the Open Banking payment methods, discuss with your account manager the use of this procedure as well as switching of statuses of the payments with the confirmed declines to theorstatus (to make monitoring and analysing payments more convenient).

The payment confirmation procedure can be performed in different ways. One of the possibilities is the following:

`payment confirmation`Theoperation can have one of the following final statuses:

When using this procedure, you can also monitor payment and operation statuses by using the Gate API (by receiving responses to payment status requests), as well as the Dashboard interface.

and GatesUsing payment confirmation via Payment Widgetis described in the corresponding sectionof this article. If you have any additional questions regarding this procedure, contact the Platform specialists.

- `successsuccess`—when the information about the crediting of funds to the recipient is received from a service provider side. In this case the payment status is set toand the final callback containing the payment information is sent to the web service.
- `decline`In such cases depending on the project settings, that were configured during integration, the following scenarios are available:`reversalreversed`Theoperation is formed automatically and the payment platform sends the following callbacks successively: an intermediate callback, containing information about the funds not being credited and the final callback, containing the information about the purchase refund and thepayment status.`decline`The payment status is set toand the final callback with information that purchase was declined is sent from the payment platform to the web service.—when the information regarding the funds not being credited to the recipient is received from a service provider upon expiration of the specified period (which is 7 days by default and can be changed by contacting Platform technical support).

1. After the customer completes all required steps, the payment is processed on the provider and bank services side while the customer is redirected to the payment interface (Payment Widget or the web service) where they receive the information about payment processing.
2. `salesuccess`Theoperation status is set to.A callback is sent to the web service about changes in the status of the operation.`payment confirmation`Theoperation is formed.`awaiting confirmation`The payment is assigned thestatus—until the provider receives information about the crediting of funds.A callback is sent to the web service about changes in payment status.A number of actions are performed on the payment platform side:
3. On the provider’s side, the final status of funds being credited is determined, after which the information about this status is sent to the payment platform.
4. `payment confirmation`On the payment platform side, the received information is processed, as a result of which theoperation and the payment are assigned final statuses and the corresponding callbacks are sent to the web service.
