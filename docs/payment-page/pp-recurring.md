# COF purchase registration

If there are changes in the payment provider's service settings, you may need to register COF purchase again. In such cases, the merchant receives an email from the Platform technical support with a list of IDs of COF purchases that should be re-registered. For this registration, merchant must notify customers of the termination of previous debits and the need to initiate new ones by unlinking the saved card, and then initiate registration in the platform. Each newly registered COF purchase receives a new ID, which is sent to the merchant in the callback with information on successful registration.

## General information

as well as by migrating information about COF purchases and payment card tokens (details)The Platform payment platform allows you to register COF purchases in a variety of ways by processing payments via Payment Widget, Gate (details), and Dashboard (details). This article covers information about registering COF purchases via Payment Widget by performing one-time purchases and payment instrument verification.

*Recurring purchase*is a payment type which uses only one request to make one (recurring) transfer of funds from customer to merchant. Recurring payments are processed by using previously stored payment credentials with no need for validation of the payment instrument (such as card validation code, or CVC).

Support for COF purchases processing may be convenient when building lasting customer relationships when you would like to offer your customers an option to make purchases with no extra effort on their side.

In terms of processing COF purchase registration using Payment Widget, the basic steps that the customer performs may be selecting payment instrument, specifying its details and waiting for notification about the payment processing result.

The payment platform supports the following COF purchase types:

Registration of any type of COF purchase requires customer's consent for storage of their payment information and its usage on certain terms.

COF purchase is registered by using the Purchase and Card Verify operation modes. To initiate COF purchase processing, change its terms, cancel it, or to issue a refund, the merchant can use Gate (for all types of COF purchases) and Dashboard (for regular COF purchases).

- *OneClick purchases*are initiated by the customer and do not depend on any schedule or predetermined payment amount. For instance, the customer can make a one-click purchase in order to watch a movie online.
- *Autopurchases*are initiated by merchant and do not depend on any schedule or predetermined payment amount. For example, when customer's mobile phone account balance falls below specific threshold, merchant may automatically top up the account.
- *Regular purchases*are initiated by the merchant and are based on specific schedule and fixed amount. The schedule may be stored either on the payment platform side or in your web service. For instance, weekly payment for online subscription may be regularly debited to customer's account.

## Workflow

COF purchase registration by using Payment Widget requires the merchant web service to do the following:

COF purchase registration may involve auxiliary procedures:

These procedures do not require any additional effort on the merchant's web service side, but usually require customer effort.

For more information about request and callback formats to use when registering COF purchases by using alternative payment methods, see Methods.The following sections cover information about request and callback formats to use when registering COF purchases by using payment cards.

- *3‑D Secure authentication*, in terms of which the customer is transferred to the service of the issuer where the customer needs to complete authentication using the code received by SMS or performing other required steps, or loading page is displayed (while issuer confirms authentication with no user input required).
- *Customer authentication on merchant's request*, in terms of which an additional page is displayed and the customer needs to enter special verification code received by SMS or in a bank statement; this type of authentication involves a temporary hold of the agreed amount on the customer's account. This type of authentication can be used instead of 3‑D Secure authentication or in addition to it.
- *Submission of additional payment information*, in terms of which notification and additional fields to be completed are displayed on the payment form. The fields should be completed on the same page of the payment form.

1. Create and send a request for opening Payment Widget to the payment platform.
2. Receive callback with the result of the request processing from the payment platform.

## Request format

The format of the request for opening Payment Widget to register COF purchases is the same as the format described in the . When creating request, you should consider the following:

Thus, a request for COF purchases registration must include:

- `recurring`in terms of payment instrument verification—parameters for opening Payment Widget for payment instrument verification and theparameter with information about COF purchase registration.
- `recurring`in terms of purchase processing—parameters for opening Payment Widget for processing a purchase and theparameter with information about COF purchase registration.

1. `project_id`—project identifier obtained from Platform`payment_id`—payment identifier unique within the project`customer_id`—customer identifier unique within the project`payment_amount0`—payment amount in the smallest currency unit (to register COF purchases in terms of payment instrument verification, you need to specify thevalue)`payment_currency`—payment currency code in the ISO-4217 alpha-3 format`signature`—request signature generated after all required parameters were specified (for more information, see the section )The basic minimum of parameters required for any payment must be specified:
2. `modecard_verify`For registering a COF purchase along with payment instrument verification, theparameter should be additionally specified. This parameter indicates the Payment Widget operation mode and should have thevalue.
3. `recurringrecurring``registertrue`, boolean—parameter which indicates whether the payment should be registered as recurring and which should be assigned thevalue.`type``C`—one-click purchase`U`—autopurchase`R`—regular purchase, string—COF purchase type which should be assigned one of the following values:`period``D`—daily`W`—weekly`M`—monthly (if the set day is not available in the next month, for example, 31, the payment is performed on the last day of the month)`Q`—quarterly`Y`—annually, string—frequency of debits (for a regular purchase), this parameter should be assigned one of the following values:`time*hh:mm:ss*period`, string—time of performing subsequent debits (for a regular purchase) informat. The parameter is used if theparameter is specified in the request.`interval1100period`, integer—interval of performing regular purchases. This parameter should be assigned a numeric value fromto(for example, each three weeks) and is necessarily used in conjunction with theparameter.For specifying the properties of a COF purchase, the request should contain theparameter as a JSON object—if the payment form is opened via the JavaScript library of Platform—or as a string generated as a result of URL encoding—if the payment form is opened via another method. Theparameter must contain the main details about COF purchase registration:
4. `recurring``amount`, integer—fixed amount of subsequent debits in the smallest currency unit`expiry_day`integer or,string—COF purchase expiry day`expiry_month`integer or,string—COF purchase expiry month`expiry_year`, integer—COF purchase expiry year`start_date*dd-mm-yyyy*scheduled_payment_id`, string—date on which the first debit is performed in theformat (the parameter is necessarily used in conjunction with theparameter)`scheduled_payment_ididrecurring``scheduled_payment_idpayment_id`If the identifier that should be assigned to the COF purchase () matches the identifier of the payment made to register a COF purchase (), the request to register a COF purchase is declined., string—identifier assigned to the payment within which scheduled debits are performed; it must differ from the identifier of the payment made to register a COF purchase and must be unique within the project; (also, not to be confused with the debiting series record identifier specified in theparameter of theobject that is passed in the callback with the COF purchase registration information)For specifying the properties of a regular purchase, theparameter can also contain other details:
5. `customer_emailcustomer_phone`To make sure that all required parameters are specified if the capability of collecting such customer data is not implemented (details), pass at least one of the following parameters in the request:or.
6. `language_code`For displaying the payment form to the customer in a specified language, theparameter should be used with the language code specified in the ISO 639-1 alpha-2 format. If this parameter is not specified, the payment form is displayed in the language selected automatically (by the browser language, by the region, or by default—learn more).
7. `payment_description`For adding a payment description, theparameter can be used. The value of this parameter is a string displayed to the customer on the page with the information about the operation result and to the merchant in the Dashboard interface and sent to the merchant in the callback with information about the payment result.
8. Additionally, it is possible to use any other parameters available for the Purchase and Card Verify modes of the Payment Widget operation. The full list of parameters for opening Payment Widget is provided in the  section.

## Callback formats

The format of the callback to notify the merchant about the result of purchase processing or payment instrument verification with COF purchase registration is the same as the format described in the  section.

`431422******0056customer_1042`The following is an example of a callback with information about successful registration of COF purchase using the card; COF purchase is registered for the customerin terms of the project.

::: tip
In addition, use the following materials to gain a fuller understanding of processing COF purchases:articles  and  in the section  that provide a general description of processing COF purchases in the Platform payment platform and cover information about operations utilised to execute a payment of this type and statuses that are assigned to the payment and the operations performed within it.articles of the  section containing a description of COF purchase registration via Payment Widget with the focus on the specific features of the payment method used and information about relevant requests and callbacks.This article that covers registering COF purchases via Payment Widget and describes requests and callbacks that are used in case of card payments.
:::
