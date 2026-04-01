# Payment request format

## Overview

`screen_resemailphone`and should also include the screen resolution of the customer's device (), the customer's email () and phone number ()`acs_return_url`Overall, the format of the payment request does not affect the probability of whether the authentication is going to be triggered and should conform to the standard described in . Similarly, the required parameters used for a certain payment should align with the parameter sets described in the articles about corresponding payment types. In addition, in case of the extended authentication workflow, the parameters should contain theobject with the web service URLs for redirecting the customer to the web service and for accepting acknowledgement from the issuer.

`billingbrowser`However, it is also recommended that you pass such optional parameters as additional payment data (for example, the preferred authentication flow and selected shipping method) and information about the customer (for example, the customer's billing address) to increase the possibility of the issuer's selecting the frictionless flow that bypasses interaction with the customer altogether. The merchant web service can pass all of these parameters or only some of them. Most frequently used optional parameters include the customer's billing address (parameters passed in theobject) and the User-Agent HTTP header received from the browser (in theparameter).

## Required parameters

`acs_return_url`In the extended workflow, required parameters must include theobject that contains the following data:

| Parameter | Description |
| --- | --- |
| `return_url`string | The URL to redirect the customer to the web service after authentication. Mandatory if you use the extended authentication workflow. |
| `3ds_notification_url`string | The URL the web service uses for accepting receipt acknowledgement from ACS. Mandatory if you use the extended authentication workflow. |

| Parameters | Description |
| --- | --- |
| `ip_address`string | Customer's IP address. |
| `screen_res`string | `x360x640`Screen resolution of the customer's device, in pixels, with ancharacter as a delimiter (for example,). |
| `email`string | Customer's email. Required if the customer's phone number is not passed. |
| `phonework_phonehome_phone`,,string | Customer's phone numbers (mobile, work, home, must specify at least one). Required if the customer's email is not passed. |
| `billing`—object with information about the customer's billing address. |  |
| `country`string | Country of the customer's billing address in the ISO 3166-1 alpha-2 format (learn more). |
| `region_code`string | `DEV`State, province, or region code in the ISO 3166-2 format, for example,for Devon. |
| `postal`string | Postal code of the customer's billing address. |
| `city`string | City of the customer's billing address. |
| `address`string | Street of the customer's billing address. |

## Optional parameters

Both in basic and extended workflows, use the following optional parameters to pass payment and customer data in the payment requests:

| Parameter | Description | tree |
| --- | --- | --- |
| `acs_return_url`object | Object that contains the web service URLs. | 1 |
| `return_url`string | The URL to redirect the customer to the web service after authentication. Mandatory if you use the extended authentication workflow. | 1-11 |
| `3ds_notification_url`string | The URL the web service uses for accepting receipt acknowledgement from ACS. Mandatory if you use the extended authentication workflow. | 1-21 |
| `customer`object | Object that contains customer data. | 2 |
| `accept_header`string | Value of the HTTP Accept request header as received from the customer's browser. | 2-12 |
| `accept_language_header`string | `en-GB,en;q=0.8,fr;q=0.3`Value of the Accept-Language HTTP header used in the requests sent from the customer's browser to the web service. It specifies the preferred languages of the browser and contains language codes and corresponding q-values that signify the order of preference (for example,). | 2-192 |
| `browser`string | Value of the HTTP User-Agent request header as received from the customer's browser. | 2-22 |
| `color_depth`integer | The colour depth of the screen as supported by the customer's browser, bits per pixel. | 2-32 |
| `java_enabled`boolean | Indicates whether the customer's browser supports Java. | 2-42 |
| `js_enabled`boolean | Indicates whether the customer's browser supports JavaScript. | 2-52 |
| `language`string | The code of the customer's browser language. | 2-62 |
| `screen_res`string | `x360x640`Screen resolution of the customer's device, in pixels, with ancharacter as a delimiter (for example,). | 2-72 |
| `timezone_name`string | `Europe/London`The name of the time zone the customer's browser is set to (for example,). | 2-82 |
| `timezone_offset`string | `-120`The difference between a date as evaluated in the UTC time zone and the same date as evaluated in the browser time zone, specified in minutes, (for example,. | 2-92 |
| `address_match`boolean | `shipping`Indicates whether the customer's billing address matches the address specified in theobject.`Y`—addresses match`N`—addresses do not matchPossible values: | 2-102 |
| `home_phone`string | `44991234567`Customer's home phone number, contains between 4 and 24 digits (for example,). | 2-112 |
| `work_phone`string | `44997654321`Customer's work phone number, contains between 4 and 24 digits (for example,). | 2-122 |
| `account`object | Object with the customer's account information kept on file by the merchant. | 2-132 |
| `additional`string | Additional information about the customer's account in free text, for example, its identifier. Can contain up to 64 characters. | 2-13-12-13 |
| `activity_day`integer | `999`Number of payment attempts in the last 24 hours, 3 characters maximum (). | 2-13-22-13 |
| `activity_year`integer | `999`Number of payment attempts in the last 365 days, 3 characters maximum (). | 2-13-32-13 |
| `age_indicator`string | `01`—guest checkout`02`—0 days (the account was created at the moment of making a payment)`03`—fewer than 30 days`04`—between 30 and 60 days`05`—more than 60 daysNumber of days since the customer account was created. Possible values: | 2-13-42-13 |
| `auth_data`string | Additional login information in free text, can contain up to 255 characters. | 2-13-52-13 |
| `auth_method`string | `01`—no authentication`02`—logging in with authentication data kept on file by the merchant`03`—logging in with the federated identity credentials (for example, Google Account or Facebook ID)`04`—logging in with the use of FIDO authenticator (Fast Identity Online)Indicates how the customer was authenticated during their most recent login to the web service. Possible values: | 2-13-62-13 |
| `auth_time`string | `DD-MM-YYYYhh:mm`Date and time of the customer's most recent account login in theformat. | 2-13-72-13 |
| `date`string | `DD-MM-YYYY`Account creation date in theformat. | 2-13-82-13 |
| `change_date`string | `DD-MM-YYYY`Date of the most recent change to the account, except for the password change or password reset, in theformat. | 2-13-92-13 |
| `change_indicator`string | `01`—0 days (the account was updated on the day when the payment was made)`02`—fewer than 30 days`03`—between 30 and 60 days`04`—more than 60 daysNumber of days since the most recent change to the account, except for the password change or password reset. Possible values: | 2-13-102-13 |
| `pass_change_date`string | `DD-MM-YYYY`Date of the most recent password change or reset in theformat. | 2-13-112-13 |
| `pass_change_indicator`string | `01`—the password was not changed or reset`02`—0 days (the password was changed or reset on the day when the payment was made)`03`—fewer than 30 days`04`—between 30 and 60 days`05`—more than 60 daysNumber of days since the most recent password change or reset. Possible values: | 2-13-122-13 |
| `payment_age`string | `DD-MM-YYYY`Card record creation date in theformat. | 2-13-132-13 |
| `payment_age_indicator`string | `01`—guest checkout`02`—0 days (card details were saved on the day when the payment was made)`03`—fewer than 30 days`04`—between 30 and 60 days`05`—more than 60 daysNumber of days since the payment card details were saved to a customer's account. Possible values: | 2-13-142-13 |
| `provision_attempts`integer | `999`Number of attempts to save new card details to a customer's account in the last 24 hours, 3 characters maximum (). | 2-13-152-13 |
| `purchase_number`integer | `9999`Number of purchases made via the customer's account in the last 6 months, 4 characters maximum (). | 2-13-162-13 |
| `suspicious_activity`string | `01`—no suspicious activity detected`02`—suspicious activity detectedIndicates the presence of suspicious activity. Possible values: | 2-13-172-13 |
| `email`string | Customer's email. | 2-142 |
| `phone`string | Customer's phone number, contains between 4 and 24 digits. | 2-152 |
| `billing`object | Object with information about the customer's billing address. | 2-162 |
| `address`string | Street of the customer's billing address. | 2-16-12-16 |
| `city`string | City of the customer's billing address. | 2-16-22-16 |
| `country`string | Country of the customer's billing address in the ISO 3166-1 alpha-2 format. | 2-16-32-16 |
| `postal`string | Postal code of the customer's billing address. | 2-16-42-16 |
| `region_code`string | `DEV``billing_country`If you specify this parameter, you also need to specify and populate theparameter.State, province, or region code in the ISO 3166-2 format, for example,for Devon. | 2-16-52-16 |
| `shipping`object | Object with shipping details. | 2-172 |
| `address`string | Shipping address, can contain up to 150 characters. | 2-17-12-17 |
| `address_usage`string | `DD-MM-YYYY`Date when the specified shipping address was used for the first time, in theformat. | 2-17-22-17 |
| `address_usage_indicator`string | `01`—first-time use`02`—fewer than 30 days`03`—between 30 and 60 days`04`—more than 60 daysNumber of days since the specified shipping address was used for the first time. Possible values: | 2-17-32-17 |
| `city`string | Shipping city, can contain up to 50 characters. | 2-17-42-17 |
| `country`string | Shipping country code in the ISO 3166-1 alpha-2 format (for example, GB). | 2-17-52-17 |
| `delivery_email`string | The email to deliver purchased digital content to if the customer chooses email delivery. Can contain up to 255 characters. | 2-17-62-17 |
| `delivery_time`string | `01`—digital same day delivery`02`—same day delivery`03`—next day delivery`04`—delivery more than one day after the purchase was madeDelivery time. Possible values: | 2-17-72-17 |
| `name_indicator`string | `01`—names match`02`—names do not matchIndicates whether the customer's name matches the recipient's name. Possible values: | 2-17-82-17 |
| `postal`string | Shipping postal code, can contain up to 16 characters. | 2-17-92-17 |
| `region_code`string | `DOR``countryshipping`If you specify this parameter, you also need to specify and populate theparameter in theobject.State, province, or region code in the ISO 3166-2 format, for example,for Dorset. | 2-17-102-17 |
| `type`string | `01`—delivery to the cardholder's billing address`02`—delivery to a different verified address`03`—delivery to the address that is not verified and does not match the billing address`04`—store delivery`05`—digital delivery`06`—no delivery needed (for example, event ticket purchase)`07`—otherDelivery option selected by the customer. Possible values: | 2-17-112-17 |
| `mpi_result`object | Object that contains information about the previous authentication attempt of the customer. | 2-182 |
| `acs_operation_id`string | `acs_operation_id`The identifier that the issuer assigned to the previous operation of the customer and returned in theparameter of the callback with payment processing result. Can contain up to 36 characters. | 2-18-12-18 |
| `authentication_flow`string | `authentication_flow`The flow used by the issuer to authenticate the cardholder when processing the previous operation. It is a value of theparameter returned in the callback with payment processing result.Possible values:`01`—frictionless flow`02`—challenge flow | 2-18-22-18 |
| `authentication_timestamp`string | `mpi_timestamp`Date and time of the previous successful customer authentication as returned in theparameter of the callback with payment processing result. | 2-18-32-18 |
| `payment`object | Object with payment information. | 3 |
| `challenge_indicator`string | `01`—no preferences`02`—not using the challenge flow is preferred`03`—using the challenge flow is preferred`04`—using the challenge flow is required`05`—do not use the challenge flow, the merchant has performed the risk analysis`06`—do not use the challenge flow, use the Data Only flow`07`—do not use the challenge flow, Strong Customer Authentication has been applied otherwise`08`—do not use the challenge flow, the merchant is included in cardholder's trusted beneficiaries list`09`—using the challenge flow is required, prompt the cardholder to add the merchant to the trusted beneficiaries listIndicates whether the challenge flow is preferred. Possible values: | 3-13 |
| `challenge_window`string | `01`—250 x 400 px`02`—390 x 400 px`03`—500 x 600 px`04`—600 x 400 px`05`—full screenThe dimensions of a window in which the authentication page opens. Possible values: | 3-23 |
| `preorder_date`string | `DD-MM-YYYY`The date the preordered merchandise or service will be available in theformat. | 3-33 |
| `preorder_purchase`string | `01`—not a preorder`02`—a preorderIndicates whether the purchase is a preorder. Possible values: | 3-43 |
| `reorder`string | `01`—first-time purchase`02`—repeat purchaseIndicates whether the customer is buying the merchandise or the service for the first time or it is a repeat purchase. Possible values: | 3-53 |
| `gift_card`object | Object with information about a purchase made with a prepaid or gift card. | 3-63 |
| `amount`integer | The amount of the purchase made with a prepaid or gift card in the smallest units of currency. | 3-6-13-6 |
| `currency`string | Currency of the purchase made with a prepaid or gift card in the ISO 4217 alpha-3 format (for example, GBP). | 3-6-23-6 |
| `count`integer | Number of prepaid or gift cards used for making the purchase. | 3-6-33-6 |
