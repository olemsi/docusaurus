# Request format

## Request to initiate a payment

When creating requests, you need to consider the following:

, and, if required, payment card token`true`Thus, a correct payment request for purchase by a payment link must include project and payment identifiers, signature, customer identifier, payment currency and amount, payment link expiry date and time. If you want Platform to send the payment link to your customer, you also need to specify a customer email and set the automatic payment link delivery indicator to.

1. one of the following endpoints:orThe request is sent by using POST (HTTP) method to.
2. `general``project_id`—the project identifier obtained from Platform when onboarding`payment_id`—payment identifier that must be unique within the project`signature`—signature created after you specify all the required parameters. For more information about signature generation, see .—object with general request identification information:`customer``id`—customer identifier in merchant's web service—object with customer information:`payment``amount`—payment amount in minor currency units`currency`—payment currency in the ISO-4217 alpha-3 format`best_beforeYYYY-MM-DDThh:mm:ss±hh:mm`—expiry date and time of the payment link in the following format:. Keep in mind that the validity period of the payment link cannot exceed 30 days.—object with payment information:The following objects and parameters must be specified in the request:
3. `token`To initiate a payment by card token, specify it in theparameter.
4. `send_emailtrue`—the indicator that communicates the need to send the link automatically (must be set to).`emailcustomer`(in theobject)—the email of the customer to be used.`languagecustomer`(in theobject)—the code of the language to be used in the email. The parameter is required if the customer language is not English (used by default) and the email template in this language has been previously configured in the payment platform.To send the payment link via the Platform payment platform, specify the following parameters:
5. `send_emailfalse`To send the payment link via your web service (and, thus, removing the option to send the email via the Platform platform), pass theparameter set to.
6. `operation_type`To select the purchase type that differs from a default one, specify the appropriate value in theparameter.
7. `force_method`To preselect a specific payment method, pass the payment method code in the. (For complete list of payment methods codes, see .)
8. `recurring``registertrue`—COF purchase registration indicator; usevalue to have the COF purchase registered.`type``C`—one-click purchase`U`—autopurchase`R`—regular purchase—type of the COF purchase to register, possible values:`period``D`—daily`W`—weekly`M`—monthly`Q`—quarterly`Y`—yearly—debiting period for the regular purchase:`timehh:mm:ss`—time of subsequent debiting for the regular purchase informatTo register a COF purchase, pass theobject that contains required parameters for the COF purchase being registered:
9. `recipient`To initiate a debiting operation executed as part of the Mastercard MoneySend and Visa Direct services, specify the information about the payment recipient in theobject (to learn more about the request format, refer to the article about working with these services.
10. If necessary, you can also add other additional parameters as specified in the API specification.

## Request to cancel the payment

When creating requests, you need to consider the following:

Thus, a correct payment request for payment cancellation must include project and payment identifiers and signature.

1. The request is sent by using POST (HTTP) method to the following endpoint:.
2. `general``project_id`—the project identifier obtained from Platform when onboarding`payment_id`—identifier of payment to cancel`signature`—signature created after you specify all the required parameters. For more information about signature generation, see .The request must contain theobject with the key parameters:
3. If required, you can also add other additional parameters as specified in the API specification.

```json
{
  "general": {
      "project_id": 1901,
      "payment_id": "456789",
      "signature": "v7KNMpfogAxwRIL9tVftZ1ZZ5D/aZAeb0VMdeR+CqGrNxYyilUwSm=="
  }
}
```
