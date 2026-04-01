# Checkout

## One-step purchase

`Sale`By default, sdk_ios uses one-step purchases (action type). This type of checkout works right out-of-the-box and requires no additional setup.

## Two-step purchase

sdk_ios supports two-step purchases in which payment is performed in two steps.

`Auth`SwiftpaymentInfo.setAction(action: .Auth)Objective-C[paymentInfo setAction:ActionTypeAuth];Before opening the payment form, set the action type parameter in the payment object to:Capture payment by using Dashboard or sending payment capture request to the request-payment-card-capture endpoint.

en_pp_purchase_auth.ditaFor more information about two-step purchases, see.

## COF purchases

en_gate__saved_cards_payments_type.ditaSome Platform allows you to perform COF purchases. There are three types of COF purchases: oneclick, auto payments and regular payments. For more information about COF purchases, see.

`RecurrentInfo`type`.OneClick.Regular,.Autopayment`—type of COF purchase (,or)cardOperationType`sale`—purchase with direct withdrawal of funds`auth`—authorization hold which is a part of two-step purchase`verify`—payment instrument verification—type of operation in terms of which COF purchase is registered. Possible values:expiryDay—last day of the payment periodexpiryMonth—last month of the payment periodexpiryYear—last year of the payment periodperiod—payment periodtime—time or COF purchasesstartDate—date to initiate the first paymentscheduledPaymentID—payment ID, must be unique within your projectTo implement COF purchases, you need to create aobject with the following parameters:

SwiftrecurrentInfo.setAmount(amount: 1000)Objective-C[recurrentInfo setAmount:1000];Amount of COF purchase. By default the amount of COF purchase is equal to payment amount. To change it, set:SwiftrecurrentInfo.setSchedule(schedule: [
           RecurrentInfoSchedule(date: "10-10-2020", amount: 1200),
           RecurrentInfoSchedule(date: "10-11-2020", amount: 1000),
           ...
])Objective-C[recurrentInfo setSchedule:@[
              [[RecurrentInfoSchedule alloc] initWithDate:@"10-10-2020" amount:1200],
              [[RecurrentInfoSchedule alloc] initWithDate:@"10-11-2020" amount:1000],
              ...
]];Data and amount of COF purchase. By default the debit of funds is strictly fixed in time and amount. To customize schedule for COF purchases, set:Additionally you may set:

`RecurrentInfoPaymentInfo`SwiftpaymentInfo.setRecurrent(recurrent: recurrentInfo)Objective-C[paymentInfo setRecurret:recurrentInfo];And then, add yourobject into theobject.

::: tip
`saleauthverify`COF purchase registration through sdk_ios is performed in terms of the,andoperations and is supported only for purchases by using payment cards.
:::

## Card verification

The card verification is used when it is necessary to check the customer's card without debiting the card, as well as to save the card data for future use. With card verification, a zero amount is debited to the card.

`Verify`SwiftpaymentInfo.setAction(action: .Verify)Objective-C[paymentInfo setAction:ActionTypeVerify];To perform card verification, setas action type:

## Purchase by using alternative payment methods

**General information**

pm_applepay.ditaen_pm_skrill_wallet.ditaBanks of Malaysiaen_pm_thailand_banks.ditaen_pm_neteller.ditaen_pm_webmoney.dita,WebMoneyLightWebMoneyClassicsdk_ios supports the following alternative payment methods:,,,,(theand thepurchase scenarios). Each of these payment methods is described in a separate topic.Payment processing flow through sdk_ios using alternative payment methods can be divided into two types: the first type involves confirmation of payment processing by the alternative payment method service without redirecting the customer to this service (this is relevant only for Apple Pay), and the second type involves redirecting the customer to the alternative payment method service for payment confirmation and processing (this is relevant for other alternative payment methods). Diagrams showing both of these types are provided below along with the description of special features of using the Apple Pay and the WebMoney payment methods.

To enable support for purchases by using alternative payment methods, contact the Some Platform technical support.

**Apple Pay**

In order to implement payment processing which involves the Apple Pay payment method, it is necessary to do the following:

Once these steps are completed, it is possible to process payments involving the Apple Pay payment method. The main procedures, such as opening the payment form, processing response and callbacks, are performed the same way as when other alternative payment methods are used, but you also need to consider the following:

Payment involving the Apple Pay payment method is processed as follows.

#en_sdk_ios_payments/section_dtg_gv4_lhbRegistration of COF purchases involving the Apple Pay method is also supported. For more information about the required parameters as well as Swift and Objective-C code samples see thesection.

**WebMoney**

WebMoneyLightWebMoneyClassicWebMoneyLightWebMoneyWebMoneyClassicWebMoneyFor payment processing by using sdk_ios, theand thepurchase scenarios are supported. When thescenario is used, customer is redirected to thepayment form in order to transfer funds to the merchant WM e-wallet. When thescenario is used, customer uses theservice in order to perform purchase. The main procedures, such as opening the payment form, processing response and callbacks, are performed the same way as when other alternative payment methods are used, but you also need to consider the following:

**Other alternative payment methods**

The full sequence of the purchase process involving redirection to the alternative payment method service is provided below.

1. [Create a merchant identifier](https://help.apple.com/developer-account/#/devb2e62b839?sub=dev103e030bb)Register merchant's identifier (Merchant ID) with Apple. Merchant ID allows the merchant to accept payments involving the Apple Pay method. This ID never expires, and can be used in multiple websites and iOS applications. For more information see Apple documentation:.
2. [Create a payment processing certificate](https://help.apple.com/developer-account/#/devb2e62b839?sub=devf31990e3f)Create Payment Processing Certificate. This certificate is associated with Merchant ID and is used to secure transaction data when processing payments that involve the Apple Pay method. For more information see Apple documentation:.
3. Send Payment Processing Certificate to the Some Platform technical support using the agreed security methods.
4. [Enable Apple Pay](https://help.apple.com/xcode/mac/9.3/#/deva43983eb7?sub=dev44ce8ef13)Enable the Apple Pay capability for the mobile application in the programming environment. For information about enabling Apple Pay capability in Xcode environment see Apple documentation:
