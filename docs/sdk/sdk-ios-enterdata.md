# Managing card data

When paying with a payment card, the customer needs to enter the card data on the payment form. In addition to the traditional data entry method (manually), sdk_ios allows you to scan a card, use a saved card or a card token for payment.

## Checkout by using stored checkout credentials

You can offer your customers an option to save credentials of cards used for checkout. Your customers will be able to save one or more cards and reuse them for any further purchases without specifying the card details—the customer will be only asked to enter CVV for the current card.

customerIDTo allow customer to save card credentials and use them later for checkout, you need to set theparameter with ID of the card owner. All the saved cards will be associated with this customer ID and the list of all the saved cards will be shown to your customer during checkout procedure. If the customer decides to delete a saved card, the sdk_ios library will send the corresponding request to the payment platform to remove the card from the list of saved cards.

## Checkout by using tokens

tokenBy using the sdk_ios library, you can implement token-based checkout. Before using the token-based checkout functionality, you need to implement storing payment card credentials and its token on your back end. Each time you initiate a token-based checkout, you need to set theparameter of your payment object:

Do not forget to include the parameter in your signature generation procedure. You customer will see the payment form with the preselected card with all its credentials, except for CVV, entered in the corresponding fields.

## Automatic token generation

Callback part with token information"account": {
            "number": "546942******3838",
            "token": "7e12077a71faf915bc4bda60f059854c7df4a46e7573057e52ece0801245666b",
            "type": "mastercard",
            "card_holder": "JOHN SMITH",
            "id": 7279487,
            "expiry_month": "11",
            "expiry_year": "2021"
        },Automatic generation procedure creates a token when the first successful purchase or payout is performed by using a card, as well as after holding the funds on a card. The generated token and the date when it was created are returned in the payment callback.

## Token generation by request

`Tokenize`SwiftpaymentInfo.setAction(action: .Tokenize)Objective-C[paymentInfo setAction:ActionTypeTokenize];Another way to generate a token is to send a request to generate a token. To generate a token setas action type:

The generated token and the time it was created at are returned in the token generation response.
