# Вызов платежной формы

PaymentOptionssdk_ui_ios поддерживает проведение одностадийных разовых оплат, блокировку средств пользователей в рамках двухстадийных оплат, регистрацию повторяемых оплат и проверку платежных карт. Для выполения таких действий требуется определенный набор параметров: обязательный минимум передается в объекте, а остальные параметры можно передать в этом же объекте, запросить их у пользователя или получить от платежной платформы.

## Вызов в Swift

Чтобы вызвать платежную форму:

1. import sdk_ui_ios_host_first_capSDKИмпортируйте библиотеку.
2. `sdk_ui_ios_host_first_capSDKviewDidLoad`let sdk_ui_ios_host_first_capSDK = sdk_ui_ios_host_first_capSDK()Объявите библиотекув любом месте приложения (например, внутри метода).
3. PaymentOptionsprojectId(type_integer) — идентификатор проекта, полученный от Some Platform;paymentId(type_string) — идентификатор платежа, уникальный в рамках проекта;paymentCurrency(type_string) — код валюты платежа в формате ISO-4217 alpha-3;paymentAmount(type_integer) — сумма платежа в дробных единицах валюты;customerId(type_string) — идентификатор пользователя в рамках проекта;`SaleAuthVerify`actionru_sdk_ui_and_core_ios_parameters.ditaЧтобы задать нужное действие, укажите тип операции —,илив параметре. Дополнительно можно использовать и другие параметры, представленные в разделе.`PaymentOptions`Вот пример объекта, который содержит необязательные параметры (описание платежа и страну пользователя):let paymentOptions = PaymentOptions(projectID: 10,
                            paymentID: "internal_payment_id_1",
                            paymentAmount: 1999,
                            paymentCurrency: "USD",
                            paymentDescription: "T-shirt with dog print",
                            customerID: "10",
                            regionCode: "US")Создайте объект. Этот объект должен содержать обязательные параметры для открытия платежной формы:
4. paymentOptions.paramsForSignature();Получите строку для подписывания указанных параметров.
5. Передайте сгенерированную строку в серверную часть приложения.
6. Сгенерируйте подпись на стороне серверной части приложения и передать ее в клиентскую часть.
7. PaymentOptionspaymentOptions.signature = signature;Добавьте подпись в объект.
8. sdk_ui_ios_host_first_capSDK.presentPayment(at: self, paymentOptions: paymentOptions) { result in
         print("sdk_ui_ios_host_first_capSDK finished with status \(result.status.rawValue)")
   ...
 }После вызова платежной формы библиотека выполняет проверку на ошибки. При отсутствии ошибок открывается платежная форма, в других случаях платежная форма не открывается, а метод вызова платежной формы возвращает код ошибки.Вызовите платежную форму.

## Вызов в Objective-C

Для вызова платежной формы необходимо выполнить следующие действия:

1. #import ${empty}Импортируйте библиотеку:
2. `sdk_ui_ios_host_first_capSDKviewDidLoad`sdk_ui_ios_host_first_capSDK *self.sdk_ui_ios_host_first_capSDK = [[sdk_ui_ios_host_first_capSDK alloc] init];Объявите библиотекув любом месте приложения, например внутри метода.
3. PaymentOptionsprojectId(type_integer) — идентификатор проекта, полученный от Some Platform;paymentId(type_string) — идентификатор платежа, уникальный в рамках проекта;paymentCurrency(type_string) — код валюты платежа в формате ISO-4217 alpha-3;paymentAmount(type_integer) — сумма платежа в дробных единицах валюты;customerId(type_string) — идентификатор пользователя в рамках проекта;`SaleAuthVerifyaction`ru_sdk_ui_and_core_ios_parameters.ditaЧтобы задать целевое действие, необходимо указать тип операции,илив параметре. Дополнительно вы можете использовать и другие параметры, представленные в разделе.PaymentOptionsПример объекта, который содержит необязательные параметры (описание платежа и страну пользователя):PaymentOptions *paymentOptions = [[PaymentOptions alloc] initWithProjectID:10
                            paymentID:@"internal_payment_id_1"
                        paymentAmount:1999
                      paymentCurrency:@"USD"
                   paymentDescription:@"T-shirt with dog print"
                           customerID:@"10"
                           regionCode:@"US"];Создайте объект. Этот объект должен содержать обязательные параметры для открытия платежной формы:
4. paymentOptions.paramsForSignature();Получите строку для подписывания указанных параметров.
5. Передайте сгенерированную строку в серверную часть приложения.
6. Сгенерируйте подпись на стороне серверной части приложения и передать ее в клиентскую часть.
7. PaymentOptions[paymentOptions setSignature:signature]Добавьте подпись в объект.
8. [self.sdk_ui_ios_host_first_capSDK presentPaymentAt:self paymentOptions:paymentOptions 
     completionHandler:^(PaymentResult *result) {
     NSLog(@"sdk_ui_ios_host_first_capSDK finished with status %ld", (long)result.status);
     ...
 }];После вызова платежной формы библиотека выполняет проверку на ошибки. При отсутствии ошибок открывается платежная форма, в других случаях платежная форма не открывается, а метод вызова платежной формы возвращает код ошибки.Вызовите платежную форму.
