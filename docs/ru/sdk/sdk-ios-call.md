# Вызов платежной формы

## Вызов в Swift

Для вызова платежной формы необходимо выполнить следующие действия:

import sdk_ios_importИмпортировать библиотеку.`sdk_ios_importviewDidLoad`let sdk_ios_import = sdk_ios_sdk_capital()Объявить библиотекув любом месте приложения (например, внутри метода).`PaymentInfo`projectID— идентификатор проекта, полученный от Some Platform при интеграции;paymentID— идентификатор платежа, уникальный в рамках проекта;paymentAmount— сумма платежа в дробных единицах валюты без десятичной точки и пробелов;paymentCurrency— валюта платежа в формате ISO-4217 alpha-3.`PaymentInfo`Пример объекта, который содержит только обязательные параметры:recurrentInfoподробнее— объект с информацией о повторяемой оплате ().paymentDescriptionpaymentDescription— описание платежа (данный параметр доступен не только мерчанту, но и пользователю; если параметрпередан в запросе, он отображается в платежной форме в диалоговом окне с информацией о платеже; если параметр не передан в запросе, пользователю он не виден).customerID— идентификатор пользователя, уникальный в рамках проекта.regionCode— код страны пользователя в формате ISO 3166 alpha-2.token— токен карты.action`SaleAuthVerifyTokenize`— тип действия. Допустимые значения:(по умолчанию),,и.forcePaymentMethodru_pp_force_payment_method_codes.dita— идентификатор платежного метода, который следует открыть в платежной форме. Если этот параметр задан, то страница выбора метода не отображается и пользователю не предоставляется возможность выбрать платежный метод. Список идентификаторов методов см. в.hideSavedWallets`true`— сохраненные ранее платежные инструменты скрыты, они не отображаются при открытии платежной формы.`false`— сохраненные ранее платежные инструменты отображаются при открытии платежной формы.— параметр, позволяющий управлять отображением сохраненных ранее платежных инструментов и при необходимости скрывать сохраненные платежные инструменты в платежной форме. Возможные значения:`sdk_ios_screen_display_mode``hide_success_final_page`— финальная страница с сообщением о совершенном платеже не отображается в платежной форме,`hide_decline_final_page`— финальная страница с сообщением об отклоненном платеже не отображается в платежной форме.`hide_success_final_pagehide_decline_final_page`Пример передачи в запросе параметрови:// Init sdk_ios_payment_info
 
paymentInfo.sdk_ios_add_screen_display_mode(value: "hide_success_final_page")
           .sdk_ios_add_screen_display_mode(value: "hide_decline_final_page")— объект, позволяющий управлять отображением финальной страницы оплаты и при необходимости скрывать ее. В объекте необходимо передавать следующие параметры:Дополнительно могут использоваться следующие объекты и параметры:`PaymentInfo`Пример объекта, который содержит необязательные параметры (описание платежа, идентификатор и страну пользователя):let paymentInfo = PaymentInfo(projectID: 10,
                        paymentID: "internal_payment_id_1",
                        paymentAmount: 1999,
                        paymentCurrency: "USD")let paymentInfo = PaymentInfo(projectID: 10,
                            paymentID: "internal_payment_id_1",
                            paymentAmount: 1999,
                            paymentCurrency: "USD",
                            paymentDescription: "T-shirt with dog print",
                            customerID: "10",
                            regionCode: "US")Создать объект. Этот объект должен содержать обязательные параметры для открытия платежной формы:paymentInfo.getParamsForSignature();Получить строку для подписывания указанных параметров.Передать сгенерированную строку в серверную часть приложения.Сгенерировать подпись на стороне серверной части приложения и передать ее в клиентскую часть.`PaymentInfo`paymentInfo.setSignature(value: signature)Добавить подпись в объект.sdk_ios_import.presentPayment(at: self, paymentInfo: paymentInfo) { (result) in
   print("sdk_ios_import finished with status \(result.status.rawValue)")
   if let error = result.error {                     // в случае ошибки
      print("Error: \(error.localizedDescription)")
   }
   if let token = result.token {                    // при генерации токена
      print("Token: \(token)")
   }
 }После вызова платежной формы библиотека выполняет проверку на ошибки. При отсутствии ошибок открывается платежная форма, в других случаях платежная форма не открывается, а метод вызова платежной формы возвращает код ошибки.Вызвать платежную форму.

## Вызов в Objective-C

Для вызова платежной формы необходимо выполнить следующие действия:

#import ${empty}Импортировать библиотеку.`viewDidLoad`sdk_ios_lib *sdk_ios_import = [[sdk_ios_head alloc] init];Объявить библиотеку sdk_ios_import в любом месте приложения (например, внутри метода).`PaymentInfoPaymentInfo`projectID— идентификатор проекта, полученный от Some Platform при интеграции;paymentID— идентификатор платежа, уникальный в рамках проекта;paymentAmount— сумма платежа в дробных единицах валюты;paymentCurrency— валюта платежа в формате ISO-4217 alpha-3.PaymentInfo *paymentInfo = [[PaymentInfo alloc] initWithProjectID:10
                        paymentID:@"internal_payment_id_1"
                        paymentAmount:1999
                        paymentCurrency:@"USD"];PaymentInfo *paymentInfo = [[PaymentInfo alloc] initWithProjectID:10
                            paymentID:@"internal_payment_id_1"
                            paymentAmount:1999
                            paymentCurrency:@"USD"
                            paymentDescription:@"T-shirt with dog print"
                            customerID:@"10"
                            regionCode:@"US"];recurrentInfoподробнее— объект с информацией о повторяемой оплате ().paymentDescriptionpaymentDescription— описание платежа (данный параметр доступен не только мерчанту, но и пользователю; если параметрпередан в запросе, он отображается в платежной форме в диалоговом окне с информацией о платеже; если параметр не передан в запросе, пользователю он не виден).customerID— идентификатор пользователя, уникальный в рамках проекта.regionCode— код страны пользователя в формате ISO 3166 alpha-2.token— токен карты.ActionType`SaleAuthVerifyTokenize`— тип действия. Допустимые значения:(по умолчанию),,и.forcePaymentMethodru_pp_force_payment_method_codes.dita— идентификатор платежного метода, который следует открыть в платежной форме. Если этот параметр задан, то страница выбора метода не отображается и пользователю не предоставляется возможность выбрать платежный метод. Список идентификаторов методов приведен в разделе.hideSavedWallets`true`— сохраненные ранее платежные инструменты скрыты, они не отображаются при открытии платежной формы.`false`— сохраненные ранее платежные инструменты отображаются при открытии платежной формы.— параметр, позволяющий управлять отображением сохраненных ранее платежных инструментов и при необходимости скрывать сохраненные платежные инструменты в платежной форме. Возможные значения:`sdk_ios_screen_display_mode``hide_success_final_page`— финальная страница с сообщением о совершенном платеже не отображается в платежной форме,`hide_decline_final_page`— финальная страница с сообщением об отклоненном платеже не отображается в платежной форме.`hide_success_final_pagehide_decline_final_page`Пример передачи в запросе параметрови:// Init sdk_ios_payment_info
 
[paymentInfo sdk_ios_add_screen_display_mode: hide_success_final_page];
[paymentInfo sdk_ios_add_screen_display_mode: hide_decline_final_page];— объект, позволяющий управлять отображением финальной страницы оплаты и при необходимости скрывать ее. В объекте возможно передавать следующие параметры:Дополнительно могут использоваться следующие объекты и параметры:`PaymentInfo`Пример объекта, который содержит необязательные параметры (описание платежа, идентификатор и страну пользователя):Создать объект. Этот объект должен содержать обязательные параметры для открытия платежной формы:Пример объекта, который содержит только обязательные параметры:paymentInfo.getParamsForSignature();Получить строку для подписывания указанных параметров.Передать сгенерированную строку в серверную часть приложения.Сгенерировать подпись на стороне серверной части приложения и передать ее в клиентскую часть.`PaymentInfo`[paymentInfo setSignature:signature];Добавить подпись в объект.[self.sdk_ios_import presentPaymentAt:self paymentInfo:paymentInfo 
     completionHandler:^(sdk_ios_payment_result *result) {
     NSLog(@"sdk_ios_import finished with status %ld", (long)result.status);
     if(result.error != NULL) {                                  // в случае ошибки
         NSLog(@"Error: %@", result.error.localizedDescription);
     }
     if(result.token != NULL) {                               // при генрации токена
         NSLog(@"Token: %@", result.token);
     }
 }];После вызова платежной формы библиотека выполняет проверку на ошибки. При отсутствии ошибок открывается платежная форма, в других случаях платежная форма не открывается, а метод вызова платежной формы возвращает код ошибки.Вызвать платежную форму.
