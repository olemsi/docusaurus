# Вызов платежной формы

`sdk_ui_android_host_first_capPaymentInfosdk_ui_android_host_first_capPaymentOptions`sdk_ui_android поддерживает выполнение таких целевых действий как проведение одностадийных разовых оплат, блокировка средств пользователей в рамках проведения двухстадийных оплат, регистрация повторяемых оплат и проверка действительности платежных карт. Для инициирования таких действий требуется определенный набор параметров: обязательный минимум параметров передается в объекте, в то время как остальные параметры могут быть переданы в объекте, запрошены у пользователя, а также получены со стороны платежной платформы.

Для вызова платежной формы необходимо выполнить следующие действия:

1. `sdk_ui_android_host_first_capPaymentInfo``projectId`(type_integer) — идентификатор проекта, полученный от Some Platform;`paymentId`(type_string) — идентификатор платежа, уникальный в рамках проекта;`paymentCurrency`(type_string) — код валюты платежа в формате ISO-4217 alpha-3;`paymentAmount`(type_integer) — сумма платежа в дробных единицах валюты;`customerId`(type_string) — идентификатор пользователя в рамках проекта;`signature`(type_string) — подпись запроса, составленная после указания всех целевых параметров.Этот объект должен содержать следующие обязательные параметры:в следующей таблицеДополнительно могут использоваться и другие параметры, представленные.val JetPayPaymentInfo = JetPayPaymentInfo(
      projectId = 77655,
      paymentId = "payment_322",
      paymentAmount = 100,
      paymentCurrency = "USD",
      paymentDescription = "Cool stuff shop payment payment",    //Описание платежа
      customerId = "customer_003",
      regionCode = "DE",      //Код страны проживания пользователя
      token = "o8i7u65y4t3rkjhgfdw3456789oikjhgfdfghjkl...", //Токен платежных данных
      languageCode = "de",    //Код языка отображения платежного интерфейса
      receiptData = "eyAKICAicG9zaXRpb25zIjpbIAxLAogICAgICAgICJhbW91bnQiOjU5OTAsCiAgQ==",
      //Данные уведомления с информацией о товарных позициях
      hideSavedWallets = false, // Параметр отображения сохраненных платежных данных
      forcePaymentMethod = "card" //Код предварительно выбранного платежного метода
   )Создать объект.
2. `sdk_ui_android_host_first_capPaymentInfo`JetPayPaymentInfo.signature = SignatureGenerator.generateSignature(
       paramsToSign = JetPayPaymentInfo.getParamsForSignature(),
       secret = SECRET_KEY
   )Подписать параметры из объекта.
3. `sdk_ui_android_host_first_capPaymentOptionsactionTypeSaleAuthVerify`в следующей таблице`sdk_ui_android_host_first_capPaymentInfoactionTypeadditionalFields`Следующий пример помимо обязательных объектаи параметрасодержит ряд дополнительных параметров, в том числе объектс данными, которые отображаются в полях для сбора информации о пользователе.val paymentOptions = paymentOptions {
        paymentInfo = JetPayPaymentInfo
        actionType = JetPayActionType.Sale
        brandColor = "#800008"
        isDarkTheme = false
        logoImage = BitmapFactory.decodeResource(resources, R.drawable.example_logo)
        hideScanningCards = false 
        isTestEnvironment = true
        merchantId = BuildConfig.GPAY_MERCHANT_ID
        merchantName = "Example Merchant Name"
        screenDisplayModes {
          mode(JetPayScreenDisplayMode.HIDE_DECLINE_FINAL_SCREEN)
          mode(JetPayScreenDisplayMode.HIDE_SUCCESS_FINAL_SCREEN)
        }
        additionalFields {
          field {
            type = JetPayAdditionalFieldType.CUSTOMER_EMAIL
            value = "mail@example.com"
          }
          field {
          type = sdk_ui_android_host_first_capAdditionalFieldType.CUSTOMER_FIRST_NAME
            value = "firstName"
          }
        }
}Создать объект, который должен содержать обязательный параметр(type_string). В этом параметре необходимо указать целевое действие: тип операции,или. Дополнительно также можно указать объекты и параметры, представленные.
4. `sdk_ui_android_host_first_capPaymentSDK`val sdk = sdk_ui_android_host_first_capPaymentSDK(
        context = applicationContext,
        paymentOptions = paymentOptions,
        )`sdk_ui_android_host_first_capPaymentSDKsdk_ui_android_host_first_capPaymentSDK.sdk_ui_android_host_first_capMockModeType.SUCCESSmockModeTypesdk_ui_android_host_first_capPaymentSDK.sdk_ui_android_host_first_capMockModeType.DECLINEsdk_ui_android_host_first_capPaymentSDK.sdk_ui_android_host_first_capMockModeType.DISABLED`При необходимости платежную форму можно открыть в тестовом режиме, чтобы получить информацию об ошибках, допущенных при указании параметров платежа, а при отсутствии ошибок протестировать проведение оплат с определенным результатом. Для этого в запросе на открытие платежной формы в объектеследует передать значениедля параметра(если необходим результат — платеж проведен). Также можно использовать значения(если необходим результат — платеж отклонен) и(для открытия формы в рабочем режиме).Создать объект.
5. sdk.openPaymentScreen(this, 1234)Открыть платежный интерфейс.
