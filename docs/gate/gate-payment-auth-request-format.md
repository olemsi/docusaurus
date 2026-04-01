# Request format

*payment cards*This section describes the request format applied in two-step purchases by.Note that processing of two-step purchases includes issuing requests for authorisation hold, as well increase, decrease, release, and debit of authorised amount.

## Request for authorisation hold

There are several things you need to consider when issuing requests:

Thus, to perform a two-step payment by a payment card, the request must include project and payment IDs, signature, IP-address of the customer, currency and amount of payment, as well as information about the payment card, as shown in the following example:

1. when indicating full card details—,when indicating an identifier instead of card details—,when indicating a token instead of card details—.The request is sent by using POST (HTTP) method to one of the following endpoints:
2. `general``project_id`—the project ID obtained from Platform`payment_id`—payment ID unique within the project`signature`—signature created after you specify all the required parameters. For more information about signature generation, seeObject—general request identification information:`customer``ip_address`—IP address`id`—the ID of the customer within the merchant project`screen_resx360x640`—screen resolution of the customer's device, in pixels, with ancharacter as a delimiter (for example,)`email`—customer's email`phone`—customer's phone numberObject—customer information:`payment``amount`—payment amount in minor units`currency`—payment currency in the ISO-4217 alpha-3 format`cryptocurrency_type``cbdc`—a central bank digital currency or tokenized deposit issued by a central bank, reserve bank, or other national monetary authority`stablecoins_fiat_backed`—a fiat-backed digital asset with reserves held by a licensed financial institution`native_tokens`—a digital currency native to a specific blockchain, required for transactions within its network, including fee payments`other`—a non-fiat digital asset that does not fit other types or cannot be classified at the time of transaction initiation—the indicator that specifies the type of the cryptocurrency, required for Visa payments involving cryptocurrencies. This parameter should be assigned one of the following values:Object—payment information:`booking_info`In order to enhance the quality of payment processing and ensure compliance with industry standards, starting from January 15, 2026, merchants in certain business categories must specify theobject containing information about the start and end dates of the booked service (details), for each initiated card purchase. This requirement applies to merchants with Merchant Category Codes (MCC) 3000–3999, 4411, 4511, 4722, 5962, 6513, 7011, 7012, 7512, 7519, and 7922.The following objects and parameters should be specified in the request:
3. `card``pan`—card number`year`—year of expiration date`month`—month of expiration date`card_holder`cardholder's first and last name (as indicated on the card)name of the cardholder, passed if this parameter is required for the specific project (the name must be spelled as specified on the card; note that if you want to make this parameter optional instead of required, it can only be done upon consultation with your account manager which includes examination and assessment of associated risks)—`cvv`. This parameter is not necessary for processing of MO/TO payments. For more information, see ;—card verification code (as indicated on the card)when indicating complete card credentials—the following data in theobject:`saved_account_idcvv`when indicating the identifier—the identifier which is associated with the card credentials in the payment platform in theparameter, and the card verification code in theparameter`tokencvv`when indicating the token—token in theparameter and the card verification code in theparameter.The request should contain the following customer's payment card information:
4. `return_url``success`—the URL for redirecting the customer after the payment is completed;`decline`—the URL for redirecting the customer after the payment is declined.The request should contain theobject with the addresses for redirecting the customer to the web service:
5. `customer``first_name`—first name`last_name`—last name`address`—address (street, house number)`email`—email`city`—city of residence (town, village, etc.)`state`—region of residence (state, county, canton, etc.)In case it is needed tot transfer funds to a merchant e-wallet, the objectmust contain the following additional parameters:
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

## Request for increasing the authorised amount

The request is sent by using POST (HTTP) method to the following endpointand must contain the following objects and parameters:

Thus, the correct request for increasing the authorised amount must include project and payment IDs and signature, as well as the amount by which you need to increase the authorised amount and the currency code.

- `general``project_id`—the project ID obtained from Platform`payment_id`—payment ID unique within the project`signature`—signature created after you specify all the required parameters. For more information about signature generation, see .Object—general request identification information:
- `customer``id`—the ID of the customer within the merchant projectObject—customer information:
- `payment``amount`—amount by which you request to increase the authorised amount, specified in minor units`currency`—payment currency in the ISO-4217 alpha-3 format, must be the same as the currency submitted when requesting authorisation holdObject—payment information:
- If required, you can also add any other additional parameters as specified on the specification.

```json
{
    "general": {
      "project_id": 42,
      "payment_id": "456789",
      "signature": "v7KNMpfogAxwRIL9tVftZ1ZZ5D/aZAeb0VMdeR+CqGrNxYyilUwSm...=="
  },
    "customer": {
      "id": "customer_12"
  },
    "payment": {
      "amount": 1000,
      "currency": "USD"
  }
```

## Request for debiting of authorised amount

The request is sent by using POST (HTTP) method to the following endpointand must contain the following objects and parameters:

`payment`These parameters are required to debit the entire authorised amount. To debit only a part of the authorised amount, you must additionally specify the following parameters in theobject:

Thus, the correct request for debiting of authorised amount must include project and payment IDs and signature and, if required, the amount and currency code.

```json
{
    "general": {
        "project_id": 42,
        "payment_id": "456789",
        "signature": "v7KNMpfogAxwRIL9tVftZ1ZZ5D/aZAeb0VMdeR+CqGrNxYyilUwSm...=="
    }
}
```

## Request for partial debit or release of authorised amount

The request is sent by using POST (HTTP) method to the following endpointand must contain the following objects and parameters:

`payment`These parameters are required to release the entire authorised amount. To decrease the authorised amount, you must additionally specify the following parameters in theobject:

Thus, the correct request for releasing of authorised amount must include project and payment IDs and signature; if you need just to decrease the authorised amount, the correct request must contain the amount and the currency code.

```json
{
    "general": {
        "project_id": 42,
        "payment_id": "456789",
        "signature": "v7KNMpfogAxwRIL9tVftZ1ZZ5D/aZAeb0VMdeR+CqGrNxYyilUwSm...=="
    }
}
```
