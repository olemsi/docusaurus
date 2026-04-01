# Open Banking in Sweden

## Introduction

This payment method belongs to the group of Open Banking methods and allows processing payments in kronor via the banks of sweden.Open Banking in Sweden an internet banking method which is based on the use of open banking protocols and provides advanced capabilities for secure processing of customer information.

The Platform payment platform supports processing purchases made with the Open Banking in Sweden payment method.

This article provides information about working with the Open Banking in Sweden method: general insights are presented in the Overview section, while information about the actions required to process payments and perform other actions is presented in the sections that follow.

## General information

| Payment method type | bank payments |
| --- | --- |
| Payment instruments | bank accounts |
| Countries and regions | SE |
| Payment currencies | SEK |
| Currency conversion | on the Platform side |
| One-time purchases | + |
| Credential-on-file purchases | – |
| Full refunds | – |
| Partial refunds | – |
| Payouts | – |
| Chargebacks | – |
| Special considerations | belowPayment Widget supports different bank and method selection options (more details)when redirecting to services of providers and banks, the iframe element cannot be used; the pages of these services can be opened in a separate tab or in a modal window |
| Currencies for settlements with merchants | *out-of-the-box:**on demand:* |
| Processing times for settlements with merchants | usually immediately |
| Onboarding and access fee | [Platform shop](https://ecommpay.com/shop/payment-methods/open-banking-sweden/); additional information is available inrefer to your Platform account manager |

## Interaction diagram

one of the interfacesPayment Widget interface,Payment processing by using the Open Banking in Sweden method involves the merchant's web service,and the Platform payment platform, as well as the technical facilities of the bank and provider services.

## Operations support

, Gate and Dashboard (using payment links for opening Payment Widget)Various platform interfaces can be used to process payments and perform operations using the Open Banking in Sweden method: purchases can be processed by using Payment Widget. At the same time, regardless of the interfaces used, amount limitations are applicable depending on the bank used for purchase processing.

## Processing scenarios

To perform a purchase by using the Open Banking in Sweden method, you need to redirect the customer to the provider service.

Scenarios for performing operations via the main interfaces of the payment platform correspond to those presented in the diagrams. Similarly, when additional capabilities are used (for example when using payment links and using separate additional capabilities), scenarios for performing operations can be adjusted accordingly

as well as when payments are initiated through GateAt the same time, the specifics of working with the Open Banking in Sweden method include the necessity of selecting a bank for each payment. When Payment Widget is used for payment processing, the customer usually selects a bank while already in the payment form. When Payment Widget is opened with the method and bank preselected, the bank must be selected on the side of the web service and the identifier of this bank must be specified in requests. Possible options for bank selection when working with Payment Widget are described in , ways of using bank identifiers—in the next subsection,.

## Supported banks

Payments through the Open Banking in Sweden method are carried out through banks that support the work with this method. The following table lists the names and identifiers of banks supported by the method. Keep in mind that this list is presented for informational purposes.

`/v2/info/banks/sweden/sale/list`Since the list of available banks may change over time, it is recommended to send a POST request to theendpoint to obtain up-to-date information. This endpoint belongs to thegroup of the Gate API. The request must contain the project and payment identifiers, signature, currency code, and payment amount, as shown in the example. Specify real payment data if possible. However, random values are also allowed.

If you have any questions about working with banks supported by the Open Banking in Sweden methods, refer to your Platform account manager.

| Bank | ID |
| --- | --- |
| N26 | 5111 |
| Nordea Bank | 5121 |
| SEB Private | 5141 |
| SEB Corporate | 5131 |
| Svenska Handelsbanken | 5151 |
| Swedbank | 5161 |
| DNB | 55411 |
| Alandsbanken | 55401 |
| Danske Bank | 55391 |
| SEB | 55381 |
