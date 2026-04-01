# Gathering customer data

en_pp_gathering_customer_data.ditaUsually payment form requires a minimum of data to complete a request for payment. However, in order to gather more extensive data and statistics about customers you can send and/or request additional data about your customers, such as customer phone number or email. For more information, see.

`paymentInfo`SwiftpaymentInfo.setAdditionalFields(additionalFields: [
          AdditionalField(type: .customer_first_name, value: "Mark"),
          AdditionalField(type: .billing_country, value: "US"),
          AdditionalField.init(type: .aps_account_number, value: ""),
          AdditionalField.init(type: .aps_account_security_code, value: "")
          ....
])Objective-C[paymentInfo setAdditionalFields:@[
                 [[AdditionalField alloc] initWithType:customer_first_name value:@"Mark"],
                 [[AdditionalField alloc] initWithType:billing_country value:@"US"],
                 [[AdditionalField alloc] initWithType:aps_account_number value: ""],
                 [[AdditionalField alloc] initWithType:aps_account_security_code value: ""]
                 ...
]];To pass additional information, set them in theobject:
