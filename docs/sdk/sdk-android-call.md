# Opening payment form

This section contains samples of payment form invocation code in Java and Kotlin.

## Opening payment form in Java

To open payment form, do the following:

1. Once all the payment parameters are collected, pack the parameters into a string for signing:paymentInfo.getParamsForSignature();
2. **115,          // Project ID
              "pid42582512", // Payment ID, must be unique within the project
              1999,          // Payment amount in minor currency units
              "USD"          // Payment currency***"T-shirt with dog print", // Payment description
              "10",         // Customer identifier in your project
              "US"          // Region code*sdk_android_payment_info paymentInfo = new sdk_android_payment_info();Here are the required parameters:Here are the optional parameters:projectID—project (merchant) ID Some Platform assigned youpaymentID—payment ID, must be unique within the projectpaymentAmount—payment amount in minor currency unitspaymentCurrency—payment currency code according to ISO-4217 alpha-3recurrentInfomore—object with the details of COF payment ()paymentDescriptionpaymentDescription—payment description (this parameter is available not only to the merchant, but also to the customer; ifis specified in the request, it is visible to the customer in the payment form (in the dialog box with information about the payment); if this parameter is not specified in the request, it is not visible to the customer)customerID—customer IDregionCode—customer countryActionType`SaleAuthTokenizeVerify`—action type ((by default),,, ortoken—card tokenforcePaymentMethoden_pp_force_payment_method_codes.dita—the identifier of the payment method which is opened in the payment form. The payment method selection page is skipped. The list of codes is provided in thesectionhideSavedWallets`true`—saved payment instruments are hidden, they are not displayed in the payment form`false`—saved payment instruments are displayed in the payment form—hiding or displaying saved payment instruments in the payment form. Possible values:`hide_success_final_page`—the final page with the message about the performed payment is not displayed in the payment form`hide_decline_final_page`—the final page with the message about the declined payment is not displayed in the payment form`hide_success_final_pagehide_decline_final_page`The following is an example of specifying theandparameters in the request:// Init sdk_android_payment_info
 
paymentInfo.sdk_android_add_screen_display_mode("hide_success_final_page")
           .sdk_android_add_screen_display_mode("hide_decline_final_page");—object to manage display of the final page of the payment form and hide the final page if necessary. The following parameters can be passed in the object:Create an instance of theclass with all the required parameters and any number of optional parameters, for example (required parameters are highlighted with bold optional parameters highlighted with italic):
3. Send the string to your back end.
4. Have your back end generate the signature on the basis of the string and your secret key.
5. paymentInfo*signature*paymentInfo.setSignature(<>);Send the signature to the client app and add it in theobject:
6. startActivityForResult(sdk_android_activity.buildIntent(this,
                    paymentInfo),
                    PAY_ACTIVITY_REQUEST);Open the payment form by using the following code:

## Opening payment form in Kotlin

To open payment form, do the following:

1. **115,              // Project ID
              "pid42582512",    // Payment ID, must be unique within the project
              1999,             // Payment amount in minor currency units
              "USD"             // Payment currency***"T-shirt with dog print", // Payment description
              "10",            // Customer identifier in your project
              "US"):           // Region code*val paymentInfo = sdk_android_payment_info(Here are the required parameters:Here are the optional parameters:projectID—Project (merchant) ID Some Platform assigned youpaymentID—Payment ID, must be unique within the projectpaymentAmount—Payment amount in minor currency unitspaymentCurrency—Payment currency code according to ISO-4217 alpha-3recurrentInfomore—object with the details of COF payment ()paymentDescriptionpaymentDescription—payment description (this parameter is available not only to the merchant, but also to the customer; ifis specified in the request, it is visible to the customer in the payment form (in the dialog box containing information about the payment); if this parameter is not specified in the request, it is not visible to the customer)customerID—customer IDregionCode—customer countryActionType`SaleAuthTokenizeVerify`—action type ((by default),,, or.token—card tokenforcePaymentMethoden_pp_force_payment_method_codes.dita—the identifier of the payment method to opened on the payment form. If this parameter is specified, the payment method selection page is skipped. The list of payment method codes is provided in thesectionhideSavedWallets`true`—saved payment instruments are hidden, they are not displayed in the payment form.`false`—saved payment instruments are displayed in the payment form.—hiding or displaying saved payment instruments in the payment form. Possible values:`sdk_android_screen_display_mode``hide_success_final_page`—the final page with the message about the performed payment is not displayed in the payment form.`hide_decline_final_page`—the final page with the message about the declined payment is not displayed in the payment form.`hide_success_final_pagehide_decline_final_page`The following is an example of specifying theandparameters in the request:// Init sdk_android_payment_info
 
paymentInfo.sdk_android_add_screen_display_mode("hide_success_final_page")
           .sdk_android_add_screen_display_mode("hide_decline_final_page");—object to manage display of the final page of the payment form and hide the final page if necessary. The following parameters can be passed in the object:Create an instance of theclass with all the required parameters and any number of optional parameters, for example (required parameters are highlighted with bold optional parameters highlighted with italic):
2. paymentInfo.getParamsForSignature();Once all the payment parameters are collected, pack the parameters into a string for signing:
3. Send the string to your back end.
4. Have your back end generate the signature on the basis of the string and your secret key.
5. `paymentInfo`*signature*paymentInfo.signature = <>Send the signature to the client app and add it in theobject:
6. startActivityForResult(
                    sdk_android_activity.buildIntent(this,
                    paymentInfo),
                    PAY_ACTIVITY_REQUEST)Open the payment form by using the following code:
