# Сбор данных о пользователе

ru_pp_gathering_customer_data.ditaДля проведения платежа с использованием платежной формы обычно требуется минимальный набор параметров, при этом для сбора данных о пользователях можно передавать и (или) запрашивать дополнительные данные, например, телефон или электронную почту пользователя. Подробнее —.

*передачи*`paymentInfo`SwiftpaymentInfo.setAdditionalFields(additionalFields: [
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
]];Длядополнительных данных о пользователе в объектенеобходимо задать список дополнительных параметров и их значение:
