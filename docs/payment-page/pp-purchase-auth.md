# Authorisation hold

## General information

*Two-step purchaseone-time two-step purchase*, or, is a payment type which uses two steps to make a one-time transfer of funds from customer to merchant. On the first step, merchant initiates an authorisation hold—in other words, the purchase amount is deducted from the credit limit of customer's card account. On the second step, the purchase amount is “captured,” or, in other words, it is transferred to the merchant account based on the merchant request or after specific time lag.

; authorisation hold is also available for MO/TO (Mail Order/Telephone Order) purchasesPayment Widget allows you to apply authorisation hold which in fact is the first step of this purchase type. To apply an authorisation hold, you use the Purchase operation mode.

In terms of performing the first step of the one-time two-step purchase using Payment Widget, the basic steps that the customer performs may be selecting payment instrument, specifying payment details and waiting for notification about payment processing result.

GateGateor DashboardTo perform the second step (withdrawal or release of funds), the merchant needs to useor configure automatic performance of this step after a specific time lag. In order to configure automatic withdrawal or release of funds, contact Platform technical support (support@platform.dev).

In terms of performing authorisation hold, payment information can be specified as follows:

*Different options of specifying payment information on Payment Widget: by completing the fields on the form, by selecting the saved payment instrument on the form and by selecting saved payment instrument before opening the payment form respectively.*

- *On the payment form, by completing the fields.*In case of card payments, it is possible to make the field with the cardholder name optional instead of required. Note it can only be done upon consultation with your account manager which includes examination and assessment of associated risks).In this case the customer completes all the fields on the payment form.
- *On the payment form, with an option to use saved payment information.*In addition to selecting payment instrument, for some payment instruments entering verification code is required (such as CVC, CVV, or CID for card payments).If the customer's identifier is specified in the request for opening Payment Widget, the customer can either choose one of the saved payment instruments or enter new payment information; the new payment instrument can also be saved for subsequent purchases.
- *Outside the payment form, with an option to use saved payment information.*In this case the customer selects specific card in the web service, the token of this card is specified in the request for opening the payment form, and, when the payment form is opened, it already contains all required payment information, except for verification code (CVC, CVV, CID) which the customer is required to enter on the payment form.

::: tip
`authoperation_type`If the payment form is opened for initiating an authorisation hold (withspecified in theparameter), the customer will be shown only those payment methods that support two-step purchases (details).
:::

::: warning
`booking_info`In order to enhance the quality of payment processing and ensure compliance with industry standards, starting from January 15, 2026, merchants in certain business categories must specify theparameter containing information about the start and end dates of the booked service (details), for each initiated card purchase. This requirement applies to merchants with Merchant Category Codes (MCC) 3000–3999, 4411, 4511, 4722, 5962, 6513, 7011, 7012, 7512, 7519, and 7922.
:::

## Time limit for authorisation hold

, Mastercard,American ExpressMastercardAccording to the requirements of Visaand, the time lag for holding funds is limited. For different types of cards the maximum allowed time lag is defined according to the following terms:

`authcapturecancel`There is an exception for American Express cards for which the maximum allowed time lag is limited by the entire duration of stay at a hotel, car rent duration or cruise duration—automatic withdrawal is not available for such cards.The maximum allowed time lag for holding funds is calculated starting from the moment theoperation is created in the Platform payment platform. 30 minutes before the time lag expires, depending on the parameters specified by the Platform employees, one of the following operations is performed automatically: a withdrawal () or a release () of the held funds, after that a callback is sent to the web service. For more information and configuration of the operation type you can refer to your Platform key account manager.

For instance, if the merchant configures automatic release of the held funds upon the expiration of 10 days and authorisation hold is performed by using Maestro card (the maximum allowed time lag for Maestro card is 6 days), automatic release of funds is performed upon the expiration of 6 days.If the time lag specified by the merchant for automatic withdrawal or release of funds exceeds the maximum allowed time lag, withdrawal or release of funds is performed according to the maximum allowed time lag.

- If authorisation hold is performed as a part of COF purchase processing, the maximum allowed time lag is 5 days.If authorisation hold is performed not as a part of COF purchase processing or COF purchase registration, and the merchant's Merchant Category Code (MCC) corresponds to one of the numbers: 3351&#8211;3500, 3501&#8211;3999, 4411, 7011, 7512, 7513, the maximum allowed time lag is 30 days.In other cases the maximum allowed time lag is 10 days.Visa cards:
- Maestro and Cirrus cards: the maximum allowed time lag is 6 days.
- OtherMastercard cards: the maximum allowed time lag is 28 days.
- If merchant MCC is associated with hotel industry, car rental, or cruise lines the allowed time lag may extend to the entire duration of stay at a hotel, car rent duration or cruise duration, accordingly.In other cases the maximum allowed time lag is 7 days.American Express cards:
- MIR cards: the maximum allowed time lag is 7 days.

## Workflow

In terms of authorisation hold by using Payment Widget, the merchant web service is required to do the following:

Authorisation hold performing may involve additional procedures:

The following sections cover information about request and callback formats to use when performing authorisation hold using payment cards. For information about request and notification formats when performing authorisation hold using alternative payment methods, see Methods.

- *3‑D Secure authentication*, in terms of which the customer is transferred to the service of the issuer where the customer needs to complete authentication using the code received by SMS or performing other required steps, or loading page is displayed (while issuer confirms authentication with no customer effort required).
- *Customer authentication on merchant's request*, in terms of which an additional page is displayed and the customer needs to enter special verification code received by SMS or in a bank statement; this type of authentication involves a temporary hold of the agreed amount on the customer's account. This type of authentication can be used instead of 3‑D Secure authentication or in addition to it.
- *Submission of additional payment information*, in terms of which notification and additional fields to be completed are displayed on the payment form. The fields should be completed on the same page of the payment form.

1. Create and send a request for opening Payment Widget to the payment platform.
2. Receive a callback with information about the result of the request processing from the payment platform.

## Request format

The format of the request for opening Payment Widget to perform authorisation hold is the same as the request format described in the  section. When creating request, you should consider the following:

`auth`Thus, a correct payment request must include project, customer and payment IDs, language code, currency and the amount of a payment in the appropriate currency, theoperation type and signature. Other parameters can also be specified in the request, but they are optional.

1. `operation_type`(details)*auth*—operation type for payment processing. The parameter value must be set to, if purchases for the project are enabled by merchant request.`project_id`—the project ID obtained from Platform.`payment_id`—the payment ID unique within the project.`payment_amount`—payment amount in minor currency units.`payment_currency`—payment currency code according to ISO-4217 alpha-3.`customer_id`—the customer ID unique within the project.`signature`—the signature created after you specify all the required parameters. For more information about signature generation, see .The request must contain the following required parameters:
2. `customer_emailcustomer_phone`To make sure that all required parameters are specified if the capability of collecting such customer data is not implemented (details), pass at least one of the following parameters in the request:or.
3. `account_token`If you need to have the payment form displayed with the payment card selected, specify theparameter in the request for opening the payment form. In this parameter you need to specify token of the payment card associated with the payment information of the card on the side of the payment platform.
4. `language_code`To display Payment Widget in a required language, you need to additionally specify in the request theparameter and the language code in accordance with ISO 639-1 alpha-2 as its value. If this parameter is not specified, the payment form is displayed in the language selected automatically (by the browser language, by the region, or by default—learn more).
5. `paymentDescription`To add description of the payment, you need to specify in the request theparameter. The value of this parameter is displayed to the customer on the page with information about the result and to the merchant in Dashboard and in a callback with information about the payment result.
6. `moto_type1moto_type2`To perform an MO (Mail Order) purchase, you must use theparameter set to; for a TO (Telephone Order) purchase, add theparameter set to.
7. If needed, you can also add any other additional parameters supported by Payment Widget in the Purchase operation mode. The full list of parameters for opening Payment Widget is provided in the  section.

```json
"customer_phone": "44991234567",{
   "operation_type": "auth",
   "project_id": 42,
   "payment_id": "456789",
   "customer_id": "customer_12",
   "payment_currency": "USD",
   "payment_amount": "2000","signature": "TSzdE5rJZaA9VyJtnfRI3620jOp2hf4RKwmKoWYjTYAK2MxF...",

// when processing payment using preselected card:
    "account_token":"959c664ad64b8caa54bb7836ddc737fd1a679242a039..."

}
```

## Callback format

The format of the callback to notify the merchant about the result of performing authorisation hold is the same as the format described in the  section.

`2 000,00 USDcustomer_12541333******001942`The following is an example of callback with an information about successful authorisation hold ofmade for the customerusing the payment card with the card numberin terms of the project.

The following is the example of a callback with information about authorisation hold declined due to incorrect input of the expiration date of the payment card.

`2 000,00 USD541333******0019customer_1242`The following is an example of callback with an information about withdrawal of the heldfrom the payment card with the card numberof the customerin terms of the project.

`2 000,00 USD541333******0019customer_1242`The following is an example of callback with an information about cancelling authorisation hold offor the payment card with the card numberof the customerin terms of the project.

The following is the example of a callback with information about authorisation hold declined due to incorrect card data input.

::: tip
In addition, use the following materials to gain a fuller understanding of processing one-time two-step purchases:—an article in the section  that provides a general description of processing one-time two-step purchases in the Platform payment platform and covers information about operations utilised to execute a payment of this type and statuses that are assigned to the payment and the operations performed within it.articles of the  section containing a description of processing one-time two-step purchases via Payment Widget with the focus on the specific features of the payment method used and information about relevant requests and callbacks.This article covers placing an authorisation hold via Payment Widget as part of processing one-time two-step purchases and describes requests and callbacks that are used in case of card payments.
:::
