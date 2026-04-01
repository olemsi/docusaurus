# Open Banking in the UK

## Introduction

This payment method belongs to the group of Open Banking methods and allows processing payments in pounds via the banks of United Kingdom.Open Banking in the UK an internet banking method which is based on the use of open banking protocols and provides advanced capabilities for secure processing of customer information.

You can also perform payouts by using  as a complementary payment method. Note that in this case payouts can be used to issue refunds to your customers.The Platform payment platform supports processing purchases made with the Open Banking in the UK payment method.

This article provides information about working with the Open Banking in the UK method: general insights are presented in the Overview section, while information about the actions required to process payments and perform other actions is presented in the sections that follow.

## General information

| Payment method type | bank payments |
| --- | --- |
| Payment instruments | bank accounts |
| Countries and regions | GB |
| Payment currencies | GBP |
| Currency conversion | – |
| One-time purchases | + |
| Credential-on-file purchases | – |
| Full refunds | – |
| Partial refunds | – |
| Payouts | – |
| Chargebacks | – |
| Special considerations | taking into account the specifics of the providers and banks involved, in some cases customers must provide additional consent to make payments using open banking protocols, which adds the appropriate steps to payment scenarios (more details below)belowPayment Widget supports different bank and method selection options (more details)when redirecting to services of providers and banks, the iframe element cannot be used; the pages of these services can be opened in a separate tab or in a modal windowbelowpayment confirmation procedure may be used during purchase processing  (more details)performing payouts is possible with the use of the complementary payment method |
| Currencies for settlements with merchants | *out-of-the-box:**on demand:* |
| Processing times for settlements with merchants | usually immediately |
| Onboarding and access fee | refer to your Platform account manager |

## Interaction diagram

one of the interfacesPayment Widget interface,Payment processing by using the Open Banking in the UK method involves the merchant's web service,and the Platform payment platform, as well as the technical facilities of the bank and provider services.

## Operations support

, Gate and Dashboard (using payment links for opening Payment Widget)Various platform interfaces can be used to process payments and perform operations using the Open Banking in the UK method: purchases can be processed by using Payment Widget. At the same time, regardless of the interfaces used, amount limitations are applicable depending on the bank used for purchase processing.

## Processing scenarios

To perform a purchase by using the Open Banking in the UK method, you need to redirect the customer to the provider service.

The customer payment scenario via Payment Widget (in the basic case where the customer chooses the method and bank and is redirected from the final page of the payment form to the web service) looks like this.

Scenarios for performing operations via the main interfaces of the payment platform correspond to those presented in the diagrams. Similarly, when additional capabilities are used (for example when using payment links and using separate additional capabilities), scenarios for performing operations can be adjusted accordingly

as well as when payments are initiated through GateAt the same time, the specifics of working with the Open Banking in the UK method include the necessity of selecting a bank for each payment. When Payment Widget is used for payment processing, the customer usually selects a bank while already in the payment form. When Payment Widget is opened with the method and bank preselected, the bank must be selected on the side of the web service and the identifier of this bank must be specified in requests. Possible options for bank selection when working with Payment Widget are described in , ways of using bank identifiers—in the next subsection,.

## Supported banks

Payments through the Open Banking in the UK method are carried out through banks that support the work with this method. The following table lists the names and identifiers of banks supported by the method. Keep in mind that this list is presented for informational purposes.

`/v2/info/banks/uk/sale/list`Since the list of available banks may change over time, it is recommended to send a POST request to theendpoint to obtain up-to-date information. This endpoint belongs to thegroup of the Gate API. The request must contain the project and payment identifiers, signature, currency code, and payment amount, as shown in the example. Specify real payment data if possible. However, random values are also allowed.

If you have any questions about working with banks supported by the Open Banking in the UK methods, refer to your Platform account manager.

| Bank | ID |
| --- | --- |
| Adam&amp;Company Bank | 3481 |
| Allied Irish Bank | 3491 |
| Allied Irish Bank Business | 3501 |
| Bank Of Ireland | 3511 |
| Bank of Scotland | 3521 |
| Barclaycard | 3531 |
| Barclays | 3541 |
| Cashplus | 3801 |
| Chelsea Building Society | 3811 |
| Coutts | 3551 |
| Creation | 3821 |
| Cumberland | 3561 |
| Cynergy Bank | 3831 |
| Danske | 3571 |
| Danske Business | 3581 |
| First Direct | 3591 |
| First Trust Bank | 3601 |
| First Trust Bank Business | 3611 |
| Halifax | 3621 |
| HSBC | 3631 |
| HSBC Business | 3641 |
| Kleinwort Hambros | 3651 |
| Lloyds | 3661 |
| Marks &amp; Spencer | 3671 |
| MBNA | 3841 |
| Mettle | 3681 |
| Mizuho | 3691 |
| Monzo | 3851 |
| Nationwide | 3701 |
| NatWest | 3711 |
| Revolut | 3731 |
| Royal Bank of Scotland | 3721 |
| Sainsbury's Bank | 3861 |
| Santander | 3741 |
| Starling | 3871 |
| Tesco | 3751 |
| Ulster Bank | 3761 |
| Ulster Bank Republic Of Ireland | 3771 |
| Vanquis | 3781 |
| Yorkshire Building Society | 3791 |

## Payment confirmation procedure

The workflow of processing purchases made with Open Banking in the UK method implies participation of banks, and in certain cases, processing payments on the side of these banks and the provider service may take up considerable time (in some cases up to seven or more days). As a result, there can be situations when the earlier information about the payment's completion or decline contradicts the final result (for example, following a notification about a declined payment, the funds are credited to the recipient's account, or vice versa).

`reverseddecline`To ensure timely and correct notification of merchants regarding the status of payments in these cases, the Platform payment platform uses a payment confirmation procedure. When you integrate the Open Banking in the UK payment method, discuss with your account manager the use of this procedure as well as switching of statuses of the payments with the confirmed declines to theorstatus (to make monitoring and analysing payments more convenient).

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
