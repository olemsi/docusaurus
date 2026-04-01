# Purchase processingOne-step purchase

## General information

*One-step purchaseone-time one-step purchase*, or, is a payment type which uses only one request to make a one-time transfer of funds from customer to merchant.

or alternative payment instruments including MO/TO (Mail Order/Telephone Order) purchases in which user submits card details through mail, phone, or any other means of communicationPayment Widget allows you to process one-step purchases by using payment cards. When adding a new payment card for purchase processing, its payment data is saved and a token associated with this card is generated if this option is available in the merchant project (for more details, see ). These operations are performed in the Purchase operation mode of the payment form.

In terms of processing one-time one-step purchases using Payment Widget, the basic steps that the customer performs may be selecting payment instrument, specifying its details and waiting for notification about the payment processing result.

When processing one-time one-step purchases by using Payment Widget, payment information can be specified as follows:

*Different options of specifying payment information on Payment Widget: by completing the fields on the form, by selecting the saved payment instrument on the form and by selecting saved payment instrument before opening the payment form respectively.*

- *On the payment form, by completing the fields.*In case of card payments, it is possible to make the field with the cardholder name optional instead of required. Note it can only be done upon consultation with your account manager which includes examination and assessment of associated risks).In this case the customer completes all the fields on the payment form.
- *On the payment form, with an option to use saved payment information.*In addition to selecting payment information, for some payment instruments entering verification code is required (such as CVC, CVV or CID for card payments).If the customer's identifier is specified in the request for opening Payment Widget, the customer can either choose one of the saved payment instruments or enter new payment information; the new payment instrument can also be saved for subsequent purchases.
- *Outside the payment form, with an option to use saved payment information.*In this case the customer selects specific card in the web service, the token of this card is specified in the request for opening the payment form, and, when the payment form is opened, it already contains all required payment information, except for verification code (CVC, CVV, CID) which the customer is required to enter on the payment form.

::: warning
`booking_info`In order to enhance the quality of payment processing and ensure compliance with industry standards, starting from January 15, 2026, merchants in certain business categories must specify theparameter containing information about the start and end dates of the booked service (details), for each initiated card purchase. This requirement applies to merchants with Merchant Category Codes (MCC) 3000–3999, 4411, 4511, 4722, 5962, 6513, 7011, 7012, 7512, 7519, and 7922.
:::

## Workflow

In terms of processing one-step purchases by using Payment Widget, the merchant web service is required to do the following:

One-step purchase processing may involve auxiliary procedures:

These procedures do not require any additional effort on the merchant's web service side, but usually require customer effort.

The following sections cover information about request and callback formats to use when processing purchases by using payment cards. For more information about request and callback formats to use when processing purchases by using alternative payment methods, see Methods.

- *3‑D Secure authentication*—the customer is forwarded to the service of the issuer where the customer needs to complete authentication using the code received by SMS or performing other required steps, or loading page is displayed (while issuer confirms authentication with no customer effort required).
- *Customer authentication on merchant's request*3‑D Secure 13‑D Secure, in terms of which an additional page is displayed and the customer needs to enter special verification code received by SMS or in a bank statement; this type of authentication involves a temporary hold of the agreed amount on the customer's account. This type of authentication can be used instead ofauthentication or in addition to it.
- *Authentication by payment system*, in terms of which a notification and an additional field to enter a verification code received via a text message are displayed to the customer. This type of authentication replaces 3‑D Secure for cards of certain payment systems (such as Humo and Uzcard).
- *Submission of additional payment information*, in terms of which a notification and additional fields to be completed are displayed on the payment form. The fields should be completed on the same page of the payment form.

1. Create and send a request for opening Payment Widget to the payment platform.
2. Receive callback with the result of the request processing from the payment platform.

## Request format

The format of the request for opening Payment Widget to process one-step payments using payment cards is the same as the request format described in the  section. When creating request, you should consider the following:

Thus, a correct request for processing card payment must include project, customer and payment IDs, payment currency and amount and signature. Other parameters can also be specified in the request, but they are optional.

1. `project_id`—the project ID obtained from Platform.`payment_id`—the payment ID unique within the project.`customer_id`—the customer ID unique within the project.`payment_amount`—payment amount in minor currency units.`payment_currency`—payment currency code in the ISO-4217 alpha-3 format.`signature`—the signature that is created after you specify all the required parameters. For more information about signature generation, see .The request body must contain the following required parameters:
2. `operation_typesale`(details)When performing one-step purchase in a project that by default requires authorisation hold, you must additionally use theparameter set to; note that this parameter is not required in other operations.
3. `customer_emailcustomer_phone`To make sure that all required parameters are specified if the capability of collecting such customer data is not implemented (details), pass at least one of the following parameters in the request:or.
4. `account_token`If you need to have the payment form displayed with the payment card selected, specify theparameter in the request for opening the payment form. In this parameter you need to specify token of the payment card associated with the payment information of the card on the side of the payment platform.
5. `language_code`To display Payment Widget in a required language, you need to additionally specify in the request theparameter and the language code in accordance with ISO 639-1 alpha-2 as its value. If this parameter is not specified, the payment form is displayed in the language selected automatically (by the browser language, by the region, or by default—learn more).
6. `payment_description`To add description of the payment, you need to specify in the request theparameter. The value of this parameter is displayed to the customer on the page with information about the result and to the merchant in Dashboard and in a callback with information about the payment result.
7. `moto_type1moto_type2`To perform an MO (Mail Order) purchase, you must use theparameter set to; for a TO (Telephone Order) purchase, you must add theparameter set to.
8. If needed, you can also add any other additional parameters supported by Payment Widget in the Purchase operation mode. The full list of parameters for opening Payment Widget is provided in the  section.

```json
"customer_phone": "44991234567",{
   "project_id": "42",
   "payment_id": "456789",
   "payment_currency": "USD",
   "payment_amount": "131970",
   "customer_id": "customer_12","signature": "TSzdE5rJZaA9TYAKoGpfXriFf82MxF..."

// when processing payment using preselected card:
    "account_token":"959c664ad6045679d71d89caff6c242a0..."

}
```

## Callback format

The format of the callback to notify the merchant about the result of processing one-step purchase is the same as the format described in the  section.

`1 319,70 USDcustomer_12431422******005642`The following is an example of callback with an information about successfulpurchase made by the customerusing the payment card with the card numberin the project.

The following is the example of a callback with information about one-step purchase declined due to incorrect card data input.

::: tip
In addition, use the following materials to gain a fuller understanding of processing one-time one-step purchases:—an article in the section  that provides a general description of processing one-time one-step purchases in the Platform payment platform and covers information about operations utilised to execute a payment of this type and statuses that are assigned to the payment and the operations performed within it.articles of the  section containing a description of processing one-time one-step purchases via Payment Widget with the focus on the specific features of the payment method used and information about relevant requests and callbacks.This article covers processing one-time one-step purchases via Payment Widget and describes requests and callbacks that are used in case of card payments.
:::
