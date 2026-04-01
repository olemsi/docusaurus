# Tokenization

This section covers information about tokenization performed by using Payment Widget in the Card Tokenize mode. For information about tokenization performed during purchase processing, see .

## General information

and Gate and for payout processing by using GatePayment Widget allows creating tokens. Tokens are stored on the merchant web service side and can be used for purchase processing by using Payment Widget.

*Token*is a unique, random sequence of 64 characters associated in terms of the payment platform with a specific payment card.

Token is created based on customer payment information, such as payment card number, name and surname of cardholder and card expiration date. Tokenization can be performed in the following cases:

`activeexpiryrevokeexpiryrevoke`In each case for a particular payment card one token is created with the expiration date equal to the expiration date of the payment card, and the status of the token is. Once the token expires, the status is set to. If the token is deleted on request from the web service, the status is set to. In both cases (and) payment processing using this token is unavailable.

For more information, see .To delete token or obtain payment information related to the token, you need to use Gate.

Following the successful generation of the payment card token, the details of this card are shown on the saved payment instruments list of the payment method selection page.When tokenization is used via Payment Widget, basic steps that the customer performs include specifying card details and waiting for notification about the result.

- Payment Widget is opened in the Card Tokenize mode.
- purchase processing with saving payment information in the Purchase mode completes successfully.
- or payoutthe first purchaseprocessing using payment card completes successfully—if this option is available to merchant project. In order to configure automatic tokenization using this option, contact Platform technical support (support@platform.dev).

## Workflow

In terms of performing tokenization by using Payment Widget, the merchant web service is required to do the following:

1. Create and send a request for opening Payment Widget to the payment platform.
2. Receive the callback with the result of the request processing from the payment platform.

## Request format

The format of the request for opening Payment Widget to perform tokenization is the same as the request format described in the  section. When creating request, you should consider the following:

Thus, a correct payment request must include identifier of the Payment Widget operation mode, project and customer IDs and signature.

1. `modecard_tokenize`—the indicator of the Payment Widget operation mode. The value must be.`project_id`—the project ID obtained from Platform.`customer_id`—the customer ID unique within the project.`signature`—the signature created after you specify all the required parameters. For more information about signature generation, see .The request must contain the following required parameters:
2. `language_code`To display Payment Widget in a required language, you need to additionally specify in the request theparameter and the language code in accordance with ISO 639-1 alpha-2 as its value. If this parameter is not specified, the payment form is displayed in the language selected automatically (by the browser language, by the region, or by default—learn more).
3. If needed, you can also add any other additional parameters supported by Payment Widget in the Card Tokenize mode. The full list of parameters for opening Payment Widget is provided in the  section.

```json
{
   "mode": "card_tokenize",
   "project_id": 112,
   "customer_id": "cust_123",
   "signature": "TSzdE5rJZaA9VyJtnfRI362oGpfXriFf82MxF..."
}
```

## Callback format

The format of the callback to notify the merchant about token creation is the same as the format described in the  section.

`tokencust_123112token_created_attoken_status`The following is an example of a token () created for the customerin terms of the project. Date and time of token creation () as well as the current status of the token () are also specified.
