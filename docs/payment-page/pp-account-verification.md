# Payment instrument verification

*Payment instrument verification*or accountbefore performing a payout oris a payment type in which the customer card or account is validated by either transferring a dummy (zero) amount from customer to merchant or by authorizing a specific amount (non-zero) on the customer cardand then voiding the transfer or the authorization. Authorization amount can be changed on merchant's request. The authorized amount can be held up to 45 days. This option may be convenient for validating a payment instrument without withdrawing funds instantly, for example,when registering in a service that offers a free trial period followed by subsequent withdrawals of funds (for more information about such cases, see the article ).

(Mail Order / Telephone Order; MO/TO)For performing payment instrument verification on Payment Widget, the Card Verify operation mode of the payment form is used. During the work with this mode, it is possible to specify card details the customers submitted via the means of communicationand save the provided card details in the platform.

In terms of performing payment instrument verification using Payment Widget, the basic steps that the customer performs may be specifying payment information, saving the payment information for subsequent payments processing and waiting for notification about the result.

## General information

## Workflow

Payment instrument verification by using Payment Widget requires the merchant web service to do the following:

Payment instrument verification may involve auxiliary procedures:

These procedures do not require any additional effort on the merchant's web service side, but usually require customer effort.

The following sections cover information about request and callback formats to use when performing payment cards verification.

- *3‑D Secure authentication*, in terms of which the customer is transferred to the service of the issuer where the customer needs to complete authentication using the code received by SMS or performing other required steps, or loading page is displayed (while issuer confirms authentication with no customer effort required).
- *Submission of additional payment information*, in terms of which notification and additional fields to be completed are displayed on the payment form. The fields should be completed on the same page of the payment form.

1. Create and send a request for opening Payment Widget to the payment platform.
2. Receive callback with the result of the request processing from the payment platform.

## Request format

The format of the request for opening Payment Widget to perform payment instrument verification is the same as the request format described in the  section. When creating request, you should consider the following:

`customer_id`Thus, a correct request for payment instrument verification must include Payment Widget operation mode indicator, project and payment IDs, signature, payment currency and amount. In order to save the payment information, you also need to specify, and in order to register COF purchase, you also need to specify a string which contains set of corresponding parameters.

1. `modecard_verify`—the indicator of the Payment Widget operation mode. The value must be.`project_id`—the project ID obtained from Platform.`payment_id`—the payment ID unique within the project.`payment_amount0`—payment amount in minor currency units, thevalue must be specified.`payment_currency`—payment currency code in the ISO-4217 alpha-3 format.`signature`—the signature that is created after you specify all the required parameters. For more information about signature generation, see .The following required parameters must be used:
2. `recurring`In order to register a COF purchase, you need to additionally specify theparameter with information about this COF purchase (for more information, see ).
3. `customer_id`To save payment instrument details, you need to additionally specify theparameter and the customer ID in merchant's web service as its value.
4. `account_token`To perform verification on the instrument token, specify theparameter—the token received from Platform.
5. `language_code`To display Payment Widget in a required language, you need to additionally specify theparameter. If this parameter is not specified, the payment form is displayed in the language selected automatically (by the browser language, by the region, or by default—learn more).
6. `payment_description`To add description of the payment, you need to specify theparameter. The value of this parameter is displayed to the customer on the page with information about the result and to the merchant in Dashboard and in a callback with information about the payment result.
7. `moto_type12`To specify card details submitted by customers via the means of communication, you must use theparameter with the value, for mail communication (Mail Order), or, for telephone communication (Telephone Order).
8. If needed, you can also add any other additional parameters supported by Payment Widget in the Card Verify operation mode. The full list of parameters for opening Payment Widget is provided in the  section.

```json
{
   "mode": "card_verify",
   "project_id": 874,
   "payment_id": "15538406111",
   "payment_currency": "EUR",
   "payment_amount": 0,
   "signature": "TSzdE5rJpfXriFf82MxF...",

// saving payment information:
    "customer_id": "customer_10",

// verification by card token:
   "account_token": "42ab631449a78914502803aed8a0e5a728d558035d29a56f4dcc136c6bfc3021",

// registering COF purchase:
   "recurring": {
        "register": "true",
        "type": "R",
        ...
   }

}
```

## Callback format

To notify the merchant about the result of payment instrument verification, the standard callback format is used. For more information, see .

`431422******0056customer_10`The following is an example of a callback with information about successful verification of the card with the card numberof the customerand successful registration of the card for subsequent COF purchases.

The following is an example of a callback with information about declined payment instrument verification with no decline reason specified.

::: tip
In addition, use the following materials to gain a fuller understanding of payment instrument verification:To find out whether you can use payment instrument verification, refer to your Platform account manager.—an article in the section  that provides a general description of performing payment instrument verification in the Platform payment platform and covers information about statuses that can be used in the process.articles of the  section containing a description of payment instrument verification via Payment Widget with the focus on the specific features of the payment method used and information about relevant requests and callbacks.This article covers payment instrument verification via Payment Widget and describes requests and callbacks that are used in case of card payments.
:::
