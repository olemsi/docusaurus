# Opening payment form

`PaymentOptions`sdk_ui_ios supports such actions as performing one-time purchases and placing authorization holds as part of performing two-step purchases, COF purchases registration, and payment card verification. To initiate these actions, you need a certain parameter set. The required minimum of parameters is passed in theobject. Optional parameters can be passed in the same object. Also, they can be requested from the customer or received from the payment platform.

## Opening the payment form in Swift

To open the payment form:

1. import sdk_ui_ios_host_first_capSDKImport the library:
2. `sdk_ui_ios_host_first_capSDKviewDidLoad`let sdk_ui_ios_host_first_capSDK = sdk_ui_ios_host_first_capSDK()Declare thelibrary in you app (for example, inside themethod):
3. `PaymentOptions``projectId`(type_integer)—a project identifier assigned by Some Platform`paymentId`(type_string)—a payment identifier unique within the project`paymentCurrency`(type_string)—the payment currency code in the ISO 4217 alpha-3 format`paymentAmount`(type_integer)—the payment amount in the smallest currency unit`customerId`(type_string)—a customer's identifier within the project`SaleAuthVerifyaction`the following sectionTo specify the action you need, indicate the required operation type:,, orin theparameter. You can also add any other parameters listed in.`PaymentOptions`The following is an example of theobject that includes optional parameters (description of the payment and the customer's country)let paymentOptions = PaymentOptions(projectID: 10,
                            paymentID: "internal_payment_id_1",
                            paymentAmount: 1999,
                            paymentCurrency: "USD",
                            paymentDescription: "T-shirt with dog print",
                            customerID: "10",
                            regionCode: "US")Create an object named. This object must contain the following required parameters:
4. paymentOptions.paramsForSignature();Pack all payment parameters into a string for signing:
5. Send the string to the server side of your web service.
6. Have your web service generate the signature on the basis of the string and your secret key.
7. `PaymentOptions`paymentOptions.signature = signature;Add signature in yourobject:
8. sdk_ui_ios_host_first_capSDK.presentPayment(at: self, paymentOptions: paymentOptions) { result in
         print("sdk_ui_ios_host_first_capSDK finished with status \(result.status.rawValue)")
   ...
 }`presentPayment`Before opening the payment form, the library checks for any errors and opens the payment form only if no errors occur. Otherwise, the payment form is not opened and themethod returns the error code.Open the payment form by using the following code:

## Opening the payment form in Objective-C

To open the payment form:

1. #import ${empty}Import the library:
2. `sdk_ui_ios_host_first_capSDKviewDidLoad`sdk_ui_ios_host_first_capSDK *self.sdk_ui_ios_host_first_capSDK = [[sdk_ui_ios_host_first_capSDK alloc] init];Declare thelibrary in you app (for example, inside themethod):
3. `PaymentOptions``projectId`(type_integer)—a project identifier assigned by Some Platform`paymentId`(type_string)—a payment identifier unique within the project`paymentCurrency`(type_string)—the payment currency code in the ISO 4217 alpha-3 format`paymentAmount`(type_integer)—the payment amount in the smallest currency unit`customerId`(type_string)—a customer's identifier within the project`SaleAuthVerifyaction`the following sectionTo specify the action you need, indicate the required operation type:,, orin theparameter. You can also add any other parameters listed in.`PaymentOptions`The following is an example of theobject that includes optional parameters (description of the payment and the customer's country)PaymentOptions *paymentOptions = [[PaymentOptions alloc] initWithProjectID:10
                            paymentID:@"internal_payment_id_1"
                        paymentAmount:1999
                      paymentCurrency:@"USD"
                   paymentDescription:@"T-shirt with dog print"
                           customerID:@"10"
                           regionCode:@"US"];Create an object named. This object must contain the following required parameters:
4. paymentOptions.paramsForSignature();Pack all payment parameters into a string for signing:
5. Send the string to the server side of your web service.
6. Have your web service generate the signature on the basis of the string and your secret key.
7. `PaymentOptions`[paymentOptions setSignature:signature]Add signature in yourobject:
8. [self.sdk_ui_ios_host_first_capSDK presentPaymentAt:self paymentOptions:paymentOptions 
     completionHandler:^(PaymentResult *result) {
     NSLog(@"sdk_ui_ios_host_first_cap SDK finished with status %ld", (long)result.status);
     ...
 }];`presentPayment`Before opening the payment form, the library checks for any errors and opens the payment form only if no errors occur. Otherwise, the payment form is not opened and themethod returns the error code.Open the payment form by using the following code:
