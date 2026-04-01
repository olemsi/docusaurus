# General information about sdk_android

## What can I do with sdk_android?

and alternative payment methodssdk_android supports the following alternative payment methods:moresdk_android allows you to perform purchases by using payment cards. You can perform one-step and two-step purchases and COF purchases using payment cards, as well as card verification ().

en_pm_intro.ditasdk_android also supports payment processing by using methods listed in thesection. For information about setup and configuration, contact your Some Platform Key Account Manager.

Support for English and Russian. Default language is English; the payment form uses Russian only when Russian is selected as the user interface language in the mobile device settings. For the merchant it is also possible to select the language of the payment form.moreCustomization of payment form ().moremanuallycard scanningchoosing saved cardusing preselected cardSupport for different ways to enter card data ():moreGathering or passing additional customer data for further analysis ().moreClarification of additional parameters required for payment ().en_3ds2_about.ditaSupport for 3ds2 authentication. 3ds2 is a new version of 3ds (Three-Domain Secure) protocol, which is intended to secure e-commerce card payments. (For more information about 3ds, see.)moreSupport for additional attempts to perform payments ().Getting information about the payment. On all pages of the payment form there is an information button; when tapped, this button shows information about the ID, the amount, the date of the payment and payment description.moreSending receipts to the customer ().In terms of sdk_android, the Some Platform payment form is used and the following features are available:

- en_pm_skrill_wallet.dita—purchases by using e-wallets in all countries.
- en_pm_malaysia_banks.ditaMalaysian banks—purchases by using online banking through.
- en_pm_thailand_banks.ditaThai banks—purchases by using online banking through.
- en_pm_neteller.dita—purchases by using e-wallets.
- en_pm_webmoney.ditaen_sdk_android_payments.dita#en_sdk_android_payments/section_kgt_l1p_2jbWebMoneyLightWebMoneyClassic—purchases by using WM e-wallets. For payment processing by using sdk_android, theandpurchase scenarios are supported. For more detailed information about purchase processing through sdk_android by using these payment scenarios, see.

## What's inside?

`sdk_android_lib`—the Android library file with the payment form implementationJava and Kotlin code samplessdk_android contains the following:

## Payment workflow

Your client app creates an instance of payment object with all the necessary checkout details.On the basis of the payment object parameters, the back end part of you app generates the signature for checkout request.You call a special method of the payment object to have the client app initiate a checkout request and send it to the Some Platform payment platform.The Some Platform payment platform processes the checkout request and performs the payment.The payment platform sends the payment processing results to the client app.The payment platform sends a callback with the payment processing results to the callback URL you specified.After you integrate the sdk_android library into your Android app, checkout payment is processed as follows:

## Using sdk_android

If your company has never obtained any ID or secret key from Some Platform, you need to submit an application for connecting to the Some Platform payment platform.If your company already has an ID and a secret key to sign messages obtained from Some Platform, you need to notify Some Platform customer support that you want to use sdk_android and consult with the customer support on how to arrange a test run.Make sure you have you have ready your merchant ID and secret key obtained from Some Platform.Download sdk_android.Import the sdk_android library into your client app and implement the following functionality: collection of payment details, preparation of data for signing checkout request, opening payment form, and submitting request to the payment platform for payment results.Implement the checkout request signing functionality on the back end side of your mobile app.Integrate the Some Platform payment solution in your app:Request test card numbers and test merchant ID from Some Platform and debug and test your app.Once testing is complete, request your production merchant ID from Some Platform and put your app in production mode.Test and put in production mode.To start using sdk_android you need to complete the following tasks:

With any questions regarding usage of sdk_android contact Some Platform technical support service.

## Payment form interface
