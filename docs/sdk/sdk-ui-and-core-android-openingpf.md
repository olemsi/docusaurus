# Opening payment form

`sdk_ui_android_host_first_capPaymentInfosdk_ui_android_host_first_capPaymentOptions`sdk_ui_android allows you to process one-time purchases and place authorization holds as part of executing two-step purchases, register COF purchases and verify payment cards. To initiate these actions, you need a certain parameter set. The required minimum of parameters is passed in theobject while other parameters can be passed in theobject, requested from the customer, or received from the payment platform.

To open the payment form:

1. `sdk_ui_android_host_first_capPaymentInfo``projectId`(type_integer)—a project identifier assigned by Some Platform`paymentId`(type_string)—a payment identifier unique within the project`paymentCurrency`(type_string)—the payment currency code in the ISO 4217 alpha-3 format`paymentAmount`(type_integer)—the payment amount in the smallest currency unit`customerId`(type_string)—a customer's identifier within the project`signature`(type_string)—a request signature generated after all required parameters have been specifiedYour object must contain the following required parameters:in the following tableYou can also add any other parameters listed.val sdk_ui_android_host_first_capPaymentInfo = sdk_ui_android_host_first_capPaymentInfo(
        projectId = 77655,
        paymentId = "payment_322",
        paymentAmount = 100,
        paymentCurrency = "USD",
        paymentDescription = "Cool stuff shop payment", 
        customerId = "customer_003",
        regionCode = "DE",           //Code of the customer's country
        token = "o8i7u65y4t3rkjhgfdw3456789oikjhgfdfghjkl...", //Token associated with certain payment data
        languageCode = "de",         //Payment interface language code
        receiptData = "eyAKICAicG9zaXRpb25zIjpbIAogICAgIIjoxLAogICAgICAgICJhbW91bnQiOjU5OTAsCiAgQ==",
        //Data to be included in the notification with the list of the purchased items
        hideSavedWallets = false,    //Parameter to enable hiding or displaying saved payment instruments
        forcePaymentMethod = "card"    //Identifier of the preselected payment method
   )Create theobject.
2. `sdk_ui_android_host_first_capPaymentInfo`sdk_ui_android_host_first_capPaymentInfo.signature = SignatureGenerator.generateSignature(
        paramsToSign = sdk_ui_android_host_first_capPaymentInfo.getParamsForSignature(),
        secret = SECRET_KEY
   )Sign the parameters contained in theobject.
3. `sdk_ui_android_host_first_capPaymentOptionsactionTypeSaleAuthVerify`in the following table`sdk_ui_android_host_first_capPaymentInfoactionTypeadditionalFields`In addition to the requiredobject and theparameter, the following example contains several additional parameters including theobject with data specified in the fields that are used for collecting customer information.val paymentOptions = paymentOptions {
        paymentInfo = sdk_ui_android_host_first_capPaymentInfo
        actionType = sdk_ui_android_host_first_capActionType.Sale
        brandColor = "#800008"
        isDarkTheme = false
        logoImage = BitmapFactory.decodeResource(resources, R.drawable.example_logo)
        hideScanningCards = false 
        isTestEnvironment = true
        merchantId = BuildConfig.GPAY_MERCHANT_ID
        merchantName = "Example Merchant Name"
        screenDisplayModes {
          mode(sdk_ui_android_host_first_capScreenDisplayMode.HIDE_DECLINE_FINAL_SCREEN)
          mode(sdk_ui_android_host_first_capScreenDisplayMode.HIDE_SUCCESS_FINAL_SCREEN)
        }
        additionalFields {
          field {
            type = sdk_ui_android_host_first_capAdditionalFieldType.CUSTOMER_EMAIL
            value = "mail@mail.com"
          }
          field {
            type = sdk_ui_android_host_first_capAdditionalFieldType.CUSTOMER_FIRST_NAME
            value = "firstName"
          }
        }
}Create theobject that contains the required parameter(type_string) with the value specifying the required operation type:,, or. You can also add any other objects and parameters listed.
4. `sdk_ui_android_host_first_capPaymentSDK`val sdk = sdk_ui_android_host_first_capPaymentSDK(
        context = applicationContext,
        paymentOptions = paymentOptions,
        )`sdk_ui_android_host_first_capPaymentSDKsdk_ui_android_host_first_capPaymentSDK.sdk_ui_android_host_first_capMockModeType.SUCCESSmockModeTypeSuccesssdk_ui_android_host_first_capPaymentSDK.sdk_ui_android_host_first_capMockModeType.DECLINEDeclinesdk_ui_android_host_first_capPaymentSDK.sdk_ui_android_host_first_capMockModeType.DISABLED`If necessary, you can open the payment form in the test mode in order to get information about errors if there were any when payment parameters were specified or to test processing payments with a certain payment result. In theobject, specify thevalue for theparameter (if you need to receivepayment result). You can also pass values(if you need to receivepayment result) and(if you need to switch to the production mode).Create theobject.
5. sdk.openPaymentScreen(this, 1234)Open the payment form.
