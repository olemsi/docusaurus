# Request format

*payment cards*In this section the presented request format is applicable to one-step purchases made with.When performing requests the following needs to be considered:

Thus, to perform a one-step payment by a payment card, the request must include project and payment IDs, signature, IP-address of the customer, currency and amount of payment, as well as information about the payment card, as shown in the following example:

1. when indicating complete card credentials—when indicating the identifier instead of card credentials—when indicating the token instead of card credentials—The request is sent by using POST (HTTP) method to one of the following endpoints:
2. `general``project_id`—the project ID obtained from Platform`payment_id`—payment ID unique within the project`signature`—signature created after you specify all the required parameters. For more information about signature generation, seeObject—general request identification information:`customer``ip_address`—IP address`id`—the ID of the customer within the merchant project`screen_resx360x640`—screen resolution of the customer's device, in pixels, with ancharacter as a delimiter (for example,)`email`—customer's email`phone`—customer's phone numberObject—customer information:`payment``amount`—payment amount in minor units`currency`—payment currency in the ISO-4217 alpha-3 formatObject—payment information:`booking_info`In order to enhance the quality of payment processing and ensure compliance with industry standards, starting from January 15, 2026, merchants in certain business categories must specify theobject containing information about the start and end dates of the booked service (details), for each initiated card purchase. This requirement applies to merchants with Merchant Category Codes (MCC) 3000–3999, 4411, 4511, 4722, 5962, 6513, 7011, 7012, 7512, 7519, and 7922.The following objects and parameters should be specified in the request:
3. `card``pan`—card number`year`—year of expiration date`month`—month of expiration date`card_holder`cardholder's first and last name (as indicated on the card)name of the cardholder, passed if this parameter is required for the specific project (the name must be spelled as specified on the card; note that if you want to make this parameter optional instead of required, it can only be done upon consultation with your account manager which includes examination and assessment of associated risks)—`cvv`Not passed in specific cases of payments with cards that do not have a verification code.This parameter is not necessary for processing of MO/TO payments. For more information, see—card verification code (as indicated on the card).when indicating complete card credentials—the following data in theobject:`saved_account_idcvv`when indicating the identifier—the identifier which is associated with the card credentials in the payment platform in theparameter, and the card verification code in theparameter`tokencvv`when indicating the token—token in theparameter and the card verification code in theparameterThe request should contain the following customer's payment card information:
4. `return_url``success`—the URL for redirecting the customer after the payment is completed`decline`—the URL for redirecting the customer after the payment is declinedThe request should contain theobject with the addresses for redirecting the customer to the web service:
5. `first_name`—first name`last_name`—last name`middle_name`—middle name (or patronymic)`day_of_birth`—birth date`phone`—phone number`email`—email address`zip`—post code of residence location`address`—address (street, house number)`city`—city of residence (town, village, etc.)`district`—district of residence`state`—region of residence (state, county, canton, etc.)`avs_post_code`—post code registered with issuer as customer's actual post code`avs_street_address`—street and house number registered with issuer as customer's actual addressIf some parameters are missing from request submitted by your web service, the payment platform may require the web service to submit additional payment information. (For more information, see ). For detailed information what parameters are required is you specific case, refer to your account manager at Platform.Depending on specific regional requirements and requirements of providers and payment systems, you may be required to add the following additional user information:
6. If required, you can also add any other additional parameters Gate supports.

```json
,
      "screen_res": "360x640",
      "phone": "44991234567",
      "email": "john_smith@email.com"{
  "general": {
      "project_id": 42,
      "payment_id": "456789",
      "signature": "v7KNMpfogAxwRIL9tVftZ1ZZ5D/aZAeb0VMdeR+CqGrNxYyilUwSm...=="
  },
    "customer": {
      "ip_address": "248.121.176.220",
      "id": "customer_12"},
    "payment": {
      "amount": 400000,
      "currency": "USD"
  },
    "return_url": {
      "success": "https://example.com/success",
      "decline": "https://example.com/decline"
  },

//when indicating complete card credentials:
    "card": {
      "pan": "4314220000000056",
      "year": 2025,
      "month": 8,
      "card_holder": "JOHN SMITH",
      "cvv": "123"
  }

//when indicating the identifier of a stored payment card:
    "saved_account_id": 2345678,
    "cvv": "123"

//when indicating the token of a stored payment card:
    "token": "f365bb1729f9b72fd9c09703a751c979f3becc679f29c3e35c91d18070d15654",
    "cvv": "123"   
}
```
