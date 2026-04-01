# Data formats

## Required parameters

Requests for processing card payments must contain one of the following parameters.

These parameters are not required in requests for payment instrument verification (Card Verify
                Payment Widget operation mode).

| Parameters | Description |
| --- | --- |
| `customer_email`string | Customer's email. Required if the customer's phone number is not passed. |
| `customer_phone`string | Customer's phone number. Required if the customer's email is not passed. |
| `billing_country`string | Country of the customer's billing address in the ISO 3166-1 alpha-2 format (learn more). |
| `billing_region_code`string | `DEV`State, province, or region code in the ISO 3166-2 format, for example,. |
| `billing_postal`string | Postal code of the customer's billing address. |
| `billing_city`string | City of the customer's billing address. |
| `billing_address`string | Street of the customer's billing address. |

## Recommended parameters

To increase the possibility of the frictionless flow selection, it is recommended that you pass additional payment and customer data in the request for opening the payment form. Such data can include the indication of the preferred authentication flow, the selected shipping method, the customer's billing address and contact information. This information can be collected in whatever way is deemed most convenient, including via the payment form (using the capability of collecting additional customer data), and passed in the following parameters:

| Parameter | Description | tree |
| --- | --- | --- |
| `payment_merchant_risk`string | Details of the customer's purchase and the indication of the preferred authentication flow.`payment`A Base64 string converted from theJSON object with the relevant objects and parameters.Example of a JSON object{    "payment":{      "reorder":"01",     "preorder_purchase":"01",     "preorder_date":"11-10-2022",     "challenge_indicator":"01",     "challenge_window":"01",     "gift_card":{        "amount":12345,       "currency":"USD",       "count":1     }   } }Example of a stringeyAKICAicGF5bWVudCI6eyAKICAgICJyZW9yZGVyIjoiMDEiLAogICAgInByZW9yZGVyX3B1cmNoYXNlIjoiMDEiLAogICAgInByZW9yZGVyX2RhdGUiOiIxMS0xMC0yMDIyIiwKICAgICJjaGFsbGVuZ2VfaW5kaWNhdG9yIjoiMDEiLAogICAgImNoYWxsZW5nZV93aW5kb3ciOiIwMSIsCiAgICAiZ2lmdF9jYXJkIjp7IAogICAgICAiYW1vdW50IjoxMjM0NSwKICAgICAgImN1cnJlbmN5IjoiVVNEIiwKICAgICAgImNvdW50IjoxCiAgICB9CiAgfQp9== | 2 |
| `challenge_indicator`string | `01`—no preferences`02`—not using the challenge flow is preferred`03`—using the challenge flow is preferred`04`—using the challenge flow is required`05`—do not use the challenge flow, the merchant has performed the risk analysis`06`—do not use the challenge flow, use the Data Only flow`07`—do not use the challenge flow, Strong Customer Authentication has been applied otherwise`08`—do not use the challenge flow, the merchant is included in cardholder's trusted beneficiaries list`09`—using the challenge flow is required, prompt the cardholder to add the merchant to the trusted beneficiaries listIndicates whether the challenge flow is preferred. Possible values: | 2-12 |
| `challenge_window`string | `01`—250 x 400 px`02`—390 x 400 px`03`—500 x 600 px`04`—600 x 400 px`05`—full screenThe dimensions of a window in which the authentication page opens. Possible values: | 2-22 |
| `preorder_date`string | `DD-MM-YYYY`The date the preordered merchandise or service will be available in theformat. | 2-32 |
| `preorder_purchase`string | `01`—not a preorder`02`—a preorderIndicates whether the purchase is a preorder. Possible values: | 2-42 |
| `reorder`string | `01`—first-time purchase`02`—repeat purchaseIndicates whether the customer is buying the merchandise or the service for the first time or it is a repeat purchase. Possible values: | 2-52 |
| `gift_card`object | Object with information about a purchase made with a prepaid or gift card. | 2-62 |
| `amount`integer | The amount of the purchase made with a prepaid or gift card in the smallest units of currency. | 2-6-12-6 |
| `currency`string | Currency of the purchase made with a prepaid or gift card in the ISO 4217 alpha-3 format (for example, GBP). | 2-6-22-6 |
| `count`integer | Total number of prepaid or gift cards used for making a purchase. | 2-6-32-6 |
| `customer_account_info`string | Customer's account details and contact information kept on file on the side of the web service.`customer`A Base64 string converted from theJSON object with the relevant objects and parameters.Example of a JSON object{    "customer":{      "address_match":"Y",     "home_phone":"442055526608",     "work_phone":"442055537709",     "account":{        "additional":"gamer12345",       "age_indicator":"01",       "date":"01-10-2022",       "change_indicator":"01",       "change_date":"01-10-2022",       "pass_change_indicator":"01",       "pass_change_date":"01-10-2022",       "purchase_number":12,       "provision_attempts":16,       "activity_day":22,       "activity_year":222,       "payment_age_indicator":"01",       "payment_age":"01-10-2022",       "suspicious_activity":"01",       "auth_method":"01",       "auth_time":"01-10-202213:12",       "auth_data":"login_0102"     }   } }Example of a stringeyAKICAiY3VzdG9tZXIiOnsgCiAgICAiYWRkcmVzc19tYXRjaCI6IlkiLAogICAgImhvbWVfcGhvbmUiOiI0NDIwNTU1MjY2MDgiLAogICAgIndvcmtfcGhvbmUiOiI0NDIwNTU1Mzc3MDkiLAogICAgImFjY291bnQiOnsgCiAgICAgICJhZGRpdGlvbmFsIjoiZ2FtZXIxMjM0NSIsCiAgICAgICJhZ2VfaW5kaWNhdG9yIjoiMDEiLAogICAgICAiZGF0ZSI6IjAxLTEwLTIwMjIiLAogICAgICAiY2hhbmdlX2luZGljYXRvciI6IjAxIiwKICAgICAgImNoYW5nZV9kYXRlIjoiMDEtMTAtMjAyMiIsCiAgICAgICJwYXNzX2NoYW5nZV9pbmRpY2F0b3IiOiIwMSIsCiAgICAgICJwYXNzX2NoYW5nZV9kYXRlIjoiMDEtMTAtMjAyMiIsCiAgICAgICJwdXJjaGFzZV9udW1iZXIiOjEyLAogICAgICAicHJvdmlzaW9uX2F0dGVtcHRzIjoxNiwKICAgICAgImFjdGl2aXR5X2RheSI6MjIsCiAgICAgICJhY3Rpdml0eV95ZWFyIjoyMjIyLAogICAgICAicGF5bWVudF9hZ2VfaW5kaWNhdG9yIjoiMDEiLAogICAgICAicGF5bWVudF9hZ2UiOiIwMS0xMC0yMDIyIiwKICAgICAgInN1c3BpY2lvdXNfYWN0aXZpdHkiOiIwMSIsCiAgICAgICJhdXRoX21ldGhvZCI6IjAxIiwKICAgICAgImF1dGhfdGltZSI6IjAxLTEwLTIwMjIxMzoxMiIsCiAgICAgICJhdXRoX2RhdGEiOiJsb2dpbl8wMTAyIgogICAgfQogIH0KfQ===== | 3 |
| `address_match`string | `shipping`Indicates whether the customer's billing address matches the address specified in theobject.`Y`—addresses match`N`—addresses do not matchPossible values: | 3-13 |
| `home_phone`string | `44991234567`Customer's home phone number, contains between 4 and 24 digits (for example,). | 3-23 |
| `work_phone`string | `44997654321`Customer's work phone number, contains between 4 and 24 digits (for example,). | 3-33 |
| `account`object | Object with the customer's account information kept on file by the merchant. | 3-43 |
| `additional`string | Additional information about the customer's account in free text, for example, its identifier. Can contain up to 64 characters. | 3-4-13-4 |
| `activity_day`integer | `999`Number of payment attempts in the last 24 hours, 3 characters maximum (). | 3-4-23-4 |
| `activity_year`integer | `999`Number of payment attempts in the last 365 days, 3 characters maximum (). | 3-4-33-4 |
| `age_indicator`string | `01`—guest checkout`02`—the account was created at the moment of making a payment`03`—fewer than 30 days`04`—between 30 and 60 days`05`—more than 60 daysNumber of days since the customer account was created. Possible values: | 3-4-43-4 |
| `auth_data`string | Additional login information in free text, can contain up to 255 characters. | 3-4-53-4 |
| `auth_method`string | `01`—no authentication`02`—logging in with authentication data kept on file by the merchant`03`—logging in with the federated identity credentials(for example, Google Account or Facebook ID)`04`—logging in with the use of FIDO authenticator (Fast Identity Online)Indicates how the customer was authenticated during their most recent login to the web service. Possible values: | 3-4-63-4 |
| `auth_time`string | `DD-MM-YYYYhh:mm`Date and time of the customer's most recent account login in theformat. | 3-4-73-4 |
| `date`string | `DD-MM-YYYY`Account creation date in theformat. | 3-4-83-4 |
| `change_date`string | `DD-MM-YYYY`Date of the most recent change to the account, except for the password change or password reset, in theformat. | 3-4-93-4 |
| `change_indicator`string | `01`—the account was updated on the day when the payment was made`02`—fewer than 30 days`03`—between 30 and 60 days`04`—more than 60 daysNumber of days since the most recent change to the account, except for the password change or password reset. Possible values: | 3-4-103-4 |
| `pass_change_date`string | `DD-MM-YYYY`Date of the most recent password change or reset in theformat. | 3-4-113-4 |
| `pass_change_indicator`string | `01`—password was not changed or reset`02`—password was changed or reset on the day when the payment was made`03`—fewer than 30 days`04`—between 30 and 60 days`05`—more than 60 daysNumber of days since the most recent password change or reset. Possible values: | 3-4-123-4 |
| `payment_age`string | `DD-MM-YYYY`Card record creation date in theformat. | 3-4-133-4 |
| `payment_age_indicator`string | `01`—guest checkout`02`—card details were saved on the day when the payment was made`03`—fewer than 30 days`04`—between 30 and 60 days`05`—more than 60 daysNumber of days since the payment card details were saved to a customer's account. Possible values: | 3-4-143-4 |
| `provision_attempts`integer | `999`Number of attempts to save new card details to a customer's account in the last 24 hours, 3 characters maximum (). | 3-4-153-4 |
| `purchase_number`integer | `9999`Number of purchases made via the customer's account in the last 6 months, 4 characters maximum (). | 3-4-163-4 |
| `suspicious_activity`string | `01`—no suspicious activity detected`02`—suspicious activity detectedIndicates the presence of suspicious activity. Possible values: | 3-4-173-4 |
| `customer_shipping`string | Purchase shipping information.`customer`A Base64 string converted from theJSON object with the relevant objects and parameters.Example of a JSON object"region":"Vilnius County",{    "customer":{      "shipping":{        "type":"01",       "delivery_time":"01",       "delivery_email":"test@gmail.com",       "address_usage_indicator":"01",       "address_usage":"01-10-2022",       "city":"London",       "country":"GB",       "address":"Blackheath Ave",       "postal":"SE10 8XJ","region_code":"LND",       "name_indicator":"01"     }   } }Example of a stringeyAKICAiY3VzdG9tZXIiOnsgCiAgICAic2hpcHBpbmciOnsgCiAgICAgICJ0eXBlIjoiMDEiLAogICAgICAiZGVsaXZlcnlfdGltZSI6IjAxIiwKICAgICAgImRlbGl2ZXJ5X2VtYWlsIjoidGVzdEBnbWFpbC5jb20iLAogICAgICAiYWRkcmVzc191c2FnZV9pbmRpY2F0b3IiOiIwMSIsCiAgICAgICJhZGRyZXNzX3VzYWdlIjoiMDEtMTAtMjAyMiIsCiAgICAgICJjaXR5IjoiTG9uZG9uIiwKICAgICAgImNvdW50cnkiOiJHQiIsCiAgICAgICJhZGRyZXNzIjoiQmxhY2toZWF0aCBBdmUiLAogICAgICAicG9zdGFsIjoiU0UxMCA4WEoiLAogICAgICAicmVnaW9uX2NvZGUiOiJMTkQiLAogICAgICAibmFtZV9pbmRpY2F0b3IiOiIwMSIKICAgIH0KICB9Cn0== | 4 |
| `shipping`object | Object with shipping details. | 4-14 |
| `address`string | Shipping address, can contain up to 150 characters. | 4-1-14-1 |
| `address_usage`string | `DD-MM-YYYY`Date when the specified shipping address was used for the first time, in theformat. | 4-1-24-1 |
| `address_usage_indicator`string | `01`—first-time use`02`—fewer than 30 days`03`—between 30 and 60 days`04`—more than 60 daysNumber of days since the specified shipping address was used for the first time. Possible values: | 4-1-34-1 |
| `city`string | Shipping city, can contain up to 50 characters. | 4-1-44-1 |
| `country`string | `GB`Shipping country code in the ISO 3166-1 alpha-2 format (for example,). | 4-1-54-1 |
| `delivery_email`string | The email to deliver purchased digital content to if the customer chooses email delivery. Can contain up to 255 characters. | 4-1-64-1 |
| `delivery_time`string | `01`—digital same day delivery`02`—same day delivery`03`—next day delivery`04`—delivery more than one day after the purchase was madeDelivery time. Possible values: | 4-1-74-1 |
| `name_indicator`string | `01`—names match`02`—names do not matchIndicates whether the customer's name matches the recipient's name. Possible values: | 4-1-84-1 |
| `postal`string | Shipping postal code, can contain up to 16 characters. | 4-1-94-1 |
| `region_code`string | `DOR``countryshipping`If you specify this parameter, you also need to specify and populate theparameter in theobject.State, province, or region code in the ISO 3166-2 format, for example,for Dorset. | 4-1-104-1 |
| `type`string | `01`—delivery to the cardholder's billing address`02`—delivery to a different verified address`03`—delivery to the address that is not verified and does not match the billing address`04`—store delivery`05`—digital delivery`06`—no delivery needed (for example, event ticket purchase)`07`—otherDelivery option selected by the customer. Possible values: | 4-1-114-1 |
| `customer_mpi_result`string | Information about the previous authentication attempt of the customer.`customermpi_result`A Base64 string converted from theJSON object with theobject and other relevant objects and parameters.Example of a JSON object{    "customer":{      "mpi_result":{        "acs_operation_id":"00000000-0005-5a5a-8000-016d3ea31d54",       "authentication_flow":"01",       "authentication_timestamp":"202210111050"     }   } }Example of a stringeyAKICAiY3VzdG9tZXIiOnsgCiAgICAibXBpX3Jlc3VsdCI6eyAKICAgICAgImFjc19vcGVyYXRpb25faWQiOiIwMDAwMDAwMC0wMDA1LTVhNWEtODAwMC0wMTZkM2VhMzFkNTQiLAogICAgICAiYXV0aGVudGljYXRpb25fZmxvdyI6IjAxIiwKICAgICAgImF1dGhlbnRpY2F0aW9uX3RpbWVzdGFtcCI6IjIwMjIxMDEwMTA1MCIKICAgIH0KICB9Cn0=== | 5 |
| `mpi_result`object | Object that contains information about the previous authentication attempt of the customer. | 5-15 |
| `acs_operation_id`string | `acs_operation_id`The identifier that the issuer assigned to the previous operation of the customer and returned in theparameter of the callback with payment processing result. Can contain up to 36 characters. | 5-1-15-1 |
| `authentication_flow`string | `authentication_flow`The flow used by the issuer to authenticate the cardholder when processing the previous operation. It is a value of theparameter returned in the callback with payment processing result.Possible values:`01`—frictionless flow`02`—challenge flow | 5-1-25-1 |
| `authentication_timestamp`string | `mpi_timestamp`Date and time of the previous successful customer authentication as returned in theparameter of the callback with payment processing result. | 5-1-35-1 |
| `billing_address`string | Street of the customer's billing address. | 6 |
| `billing_city`string | City of the customer's billing address. | 7 |
| `billing_country`string | Country of the customer's billing address in the ISO 3166-1 alpha-2 format. | 8 |
| `billing_postal`string | Postal code of the customer's billing address. | 9 |
| `billing_region_code`string | `DEV``billing_country`If you specify this parameter, you also need to specify and populate theparameter.State, province, or region code in the ISO 3166-2 format, for example,for Devon. | 10 |
| `customer_email`string | Customer's email. | 11 |
| `customer_phone`string | Customer's phone number, contains between 4 and 24 digits. | 12 |
