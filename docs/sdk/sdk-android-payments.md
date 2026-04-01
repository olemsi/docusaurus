# Checkout

## One-step purchase

`Sale`By default, sdk_android uses one-step purchases (action type). This type of checkout works right out-of-the-box and requires no additional setup.

## Two-step purchase

sdk_android supports two-step purchases in which payment is performed in two steps.

1. `Auth`JavapaymentInfo.setAction(sdk_android_payment_info.ActionType.Auth);KotlinpaymentInfo.setAction(sdk_android_payment_info.ActionType.Auth)Before opening the payment form, set the action type parameter in the payment object to:
2. Capture payment by using Dashboard or sending payment capture request to the request-payment-card-capture endpoint.

## COF purchases

en_gate__saved_cards_payments_type.ditaSome Platform allows you to perform COF purchases. There are three types of COF purchases: oneclick, auto payments and regular payments. For more information about COF purchases, see.

`sdk_android_recurrent_info`Javasdk_android_recurrent_info recurrentInfo = new sdk_android_recurrent_info(
                    "R",             // Payment type
                    "10",            // End of payment period, day
                    "11",            // End of payment period, month
                    "2020",          // End of payment period, year
                    "M",             // Period of COF purchase (M means 'month') 
                    "12:00:00",      // Time to initiate the first payment
                    "12-02-2019",    // Date to initiate the first payment
                    "pid178545578"); // Payment ID, must be unique within your projectKotlinval recurrentInfo = sdk_android_recurrent_info(
                    "R",                 // Payment type
                    "10",                // End of payment period, day
                    "11",                // End of payment period, month
                    "2020",              // End of payment period, year
                    "M",                 // Period of COF purchase, M means 'month' 
                    "12:00:00",          // Time to initiate the first payment
                    "12-02-2-2019",      // Date to initiate the first payment
                    "your_recurrent_id") // Payment ID, must be unique within your projectTo implement COF purchases, instantiate theclass:

JavarecurrentInfo.setAmount(1000);KotlinrecurrentInfo.setAmount(1000)Amount of COF purchase. By default the amount of COF purchase is equal to payment amount. To change it, set:JavarecurrentInfo.setSchedule(new sdk_android_recurrent_info_schedule[]{
               new sdk_android_recurrent_info_schedule("10-10-2020",1200),
               new sdk_android_recurrent_info_schedule("10-11-2020",1000),
               .....
});KotlinrecurrentInfo.setSchedule(arrayOf(sdk_android_recurrent_info_schedule("10-10-2020",1200),
                                  sdk_android_recurrent_info_schedule("10-11-2020",1000),
                                  .....
))Data and amount of COF purchase. By default the debit of funds is strictly fixed in time and amount. To customize schedule for COF purchases, set:Additionally you may set:

`sdk_android_recurrent_infosdk_android_payment_info`And then, add your instance ofinto the instance ofyou previously created:

## Card verification

The card verification is used when it is necessary to check the customer's card without debiting the card, as well as to save the card data for future use. With card verification, a zero amount is debited to the card.

`Verify`JavapaymentInfo.setAction(sdk_android_payment_info.ActionType.Verify);KotlinpaymentInfo.setAction(sdk_android_payment_info.ActionType.Verify)To perform card verification, setas action type:

## Purchase by using alternative payment methods

en_pm_skrill_wallet.ditaBanks of Malaysiaen_pm_thailand_banks.ditaen_pm_neteller.ditaen_pm_webmoney.dita,WebMoneyLightWebMoneyClassicsdk_android supports the following alternative payment methods:,,,(theandpurchase scenarios). In most cases customer needs to be redirected to the payment form of the alternative payment method (APM) service. Each method is described in a separate topic, and the sections below provide the description of special features of usingthe WebMoney payment method.

The full sequence and particularities of the purchase process are provided below.

the ability to pass additional customer informationTo perform purchases by using alternative payment methods, contact the Some Platform technical support in order to enable that ability for the particular project. Additionally, you may use.

**WebMoney**

WebMoneyLightWebMoneyClassicWebMoneyLightWebMoneyWebMoneyClassicWebMoneyFor payment processing by using sdk_android, theandpurchase scenarios are supported. When thescenario is used, customer is redirected to thepayment form in order to transfer funds to the merchant WM e-wallet. When thescenario is used, customer uses theservice in order to perform purchase. The main procedures, such as opening the payment form, processing response and callbacks, are performed the same way as when other alternative payment methods are used, but you also need to consider the following:

1. [Google Pay Business Console](https://pay.google.com/business/console)Register with theand receive a Google merchant ID.
2. [Acceptable Use Policy](https://payments.developers.google.com/terms/aup)[Google Pay API Terms of Service](https://payments.developers.google.com/terms/sellertos)Adhere to the Google Pay APIsand accept the terms defined in the.
3. Contact the Some Platform technical support in order to enable the Google Pay payment method for the particular project.
