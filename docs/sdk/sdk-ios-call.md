# Opening payment form

This section contains samples of payment form invocation code in Swift and Objective-C.

## Opening payment form in Swift

To open payment form, do the following:

import sdk_ios_importImport the library:`sdk_ios_importviewDidLoad`let sdk_ios_import = sdk_ios_sdk_capital()Declare thelibrary in you app (for example, inside themethod):`PaymentInfo`**projectID: 10,
                            paymentID: "internal_payment_id_1",
                            paymentAmount: 1999,
                            paymentCurrency: "USD",***paymentDescription: "T-shirt with dog print",
                            customerID: "10",
                            regionCode: "US"*let paymentInfo = PaymentInfo()Here are the required parameters:Here are the optional parameters:projectID—project (merchant) ID Some Platform assigned youpaymentID—payment ID, must be unique within the projectpaymentAmount—payment amount in minor currency unitspaymentCurrency—payment currency code according to ISO-4217 alpha-3recurrentInfomore—object with the details of COF purchase ()paymentDescriptionpaymentDescription—payment description (this parameter is available not only to the merchant, but also to the customer; ifis specified in the request, it is visible to the customer in the payment form (in the dialog box containing information about the payment); if this parameter is not specified in the request, it is not visible to the customer)customerID—customer IDregionCode—customer countrytoken—card tokenaction`SaleAuthTokenizeVerify`—action type ((by default),,, or)forcePaymentMethoden_pp_force_payment_method_codes.dita—the identifier of the payment method to opened on the payment form. If this parameter is specified, the payment method selection page is skipped. For the list of the payment method codes, see.hideSavedWallets`true`—saved payment instruments are hidden, they are not displayed in the payment form`false`—saved payment instruments are displayed in the payment form—hiding or displaying saved payment instruments in the payment form. Possible values:`sdk_ios_screen_display_mode``hide_success_final_page`—the final page with the message about the performed payment is not displayed in the payment form.`hide_decline_final_page`—the final page with the message about the declined payment is not displayed in the payment form.`hide_success_final_pagehide_decline_final_page`The following is an example of specifying theandparameters in the request:// Init sdk_ios_payment_info
 
paymentInfo.sdk_ios_add_screen_display_mode(value: "hide_success_final_page")
           .sdk_ios_add_screen_display_mode(value: "hide_decline_final_page")—object to manage display of the final page of the payment form and hide the final page if necessary. The following parameters can be passed in the object:Create an object namedwith all the required parameters and any number of optional parameters, for example (required parameters are highlighted with bold optional parameters highlighted with italic):paymentInfo.getParamsForSignature();Pack all the payment parameters into a string for signing:Send the string to your back end.Have your back end generate the signature on the basis of the string and your secret key.`PaymentInfo`paymentInfo.setSignature(value: signature)Add signature in yourobject:sdk_ios_import.presentPayment(at: self, paymentInfo: paymentInfo) { (result) in
   print("sdk_ios_import finished with status \(result.status.rawValue)")
   if let error = result.error {                     // if error occurred
      print("Error: \(error.localizedDescription)")
   }
   if let token = result.token {                    // if tokenize action
      print("Token: \(token)")
   }
 }`presentPayment`Before opening the payment form, the library check for any errors and opens the payment form only if no errors occur. Otherwise, the payment form is not opened and themethod returns the error code.Open the payment form by using the following code:

## Opening payment form in Objective-C

To open payment form, do the following:

#import ${empty}Import the library:`viewDidLoad`sdk_ios_lib *sdk_ios_import = [[sdk_ios_head alloc] init];Declare the sdk_ios_import library in you app (for example, inside themethod).`PaymentInfo`**ProjectID:10
                            paymentID:@"internal_payment_id_1"
                        paymentAmount:1999
                      paymentCurrency:@"USD"***paymentDescription:@"T-shirt with dog print"
                           customerID:@"10"
                           regionCode:@"US"*PaymentInfo *paymentInfo = [[PaymentInfo alloc] initWith];Here are the required parameters:Here are the optional parameters:projectID—project (merchant) ID Some Platform assigned youpaymentID—payment ID, must be unique within the projectpaymentAmount—payment amount in minor currency unitspaymentCurrency—payment currency code according to ISO-4217 alpha-3recurrentInfomore—object with the details of COF purchase ()paymentDescriptionpaymentDescription—payment description (this parameter is available not only to the merchant, but also to the customer; ifis specified in the request, it is visible to the customer in the payment form (in the dialog box containing information about the payment); if this parameter is not specified in the request, it is not visible to the customer)customerID—customer IDregionCode—customer countryActionType`SaleAuthTokenizeVerify`—action type ((by default),,, or)token—card tokenforcePaymentMethoden_pp_force_payment_method_codes.dita—the identifier of the payment method to opened on the payment form. If this parameter is specified, the payment method selection page is skipped. For the list of the payment method codes, see.hideSavedWallets`true`—saved payment instruments are hidden, they are not displayed in the payment form.`false`—saved payment instruments are displayed in the payment form.—hiding or displaying saved payment instruments in the payment form. Possible values:`sdk_ios_screen_display_mode``hide_success_final_page`—the final page with the message about the performed payment is not displayed in the payment form.`hide_decline_final_page`—the final page with the message about the declined payment is not displayed in the payment form.`hide_success_final_pagehide_decline_final_page`The following is an example of specifying theandparameters in the request:// Init sdk_ios_payment_info
 
[paymentInfo sdk_ios_add_screen_display_mode: hide_success_final_page];
[paymentInfo sdk_ios_add_screen_display_mode: hide_decline_final_page];—object to manage display of the final page of the payment form and hide the final page if necessary. The following parameters can be passed in the object:Create an object namedwith all the required parameters and any number of optional parameters, for example (required parameters are highlighted with bold optional parameters highlighted with italic):paymentInfo.getParamsForSignature();Pack all the payment parameters into a string for signing:Send the string to your back end.Have your back end generate the signature on the basis of the string and your secret key.`PaymentInfo`[paymentInfo setSignature:signature];Add signature in yourobject:[self.sdk_ios_import presentPaymentAt:self paymentInfo:paymentInfo 
     completionHandler:^(sdk_ios_payment_result *result) {
     NSLog(@"sdk_ios_import finished with status %ld", (long)result.status);
     if(result.error != NULL) {                                  // if error occurred
         NSLog(@"Error: %@", result.error.localizedDescription);
     }
     if(result.token != NULL) {                               // if tokenize action
         NSLog(@"Token: %@", result.token);
     }
 }];`presentPayment`Before opening the payment form, the library check for any errors and opens the payment form only if no errors occur. Otherwise, the payment form is not opened and themethod returns the error code.Open the payment form by using the following code:
