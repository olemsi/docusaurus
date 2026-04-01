# Дополнительные возможности

## Обзор

При проведении оплаты можно использовать различные дополнительные возможности для достижения разнообразных целей: повышения проходимости платежей, конверсии страницы оплаты и лояльности пользователей. Информация о таких возможностях представлена далее.

## Дополнение информации о платеже

*Общая информация*

В общем случае для проведения платежа в запросе на открытие страницы оплаты достаточно передавать набор параметров, обязательных для инициирования этого платежа. Но в некоторых случаях со стороны платежной системы или провайдера могут запрашиваться дополнительные данные, необходимые для проведения конкретного платежа. Это может быть вызвано специфическими региональными требованиями, необходимостью дополнительной проверки на мошенничество или иными факторами. При работе с Payment Widget для таких ситуаций используется процедура, в рамках которой обеспечиваются уведомление пользователя о необходимости дополнить данные, сбор этих данных и переход к дальнейшей обработке платежа с учетом полученной информации.*дополнения информации о платеже*

При дополнении информации о платеже никаких добавочных действий со стороны вашей системы не требуется, поскольку выполнение процедуры обеспечивается за счет взаимодействия пользователя с страницей оплаты. Однако, чтобы уйти от необходимости предоставлять дополнительную информацию, вы можете в запросах на открытие страницы оплаты передавать сразу все данные, которые могут запрашиваться со стороны платежных систем и провайдеров для проведения платежа, в том числе необязательные.

Для дальнейшего проведения платежа со стороны пользователя необходимо указывать все запрашиваемые данные. Информация о базовых действиях пользователя при дополнении информации о платеже представлена далее.

*Пользовательский сценарий*

Базовый пользовательский сценарий проведения оплаты при дополнении информации о платеже можно представить следующим образом:

*Схема работы*

Далее представлена схема выполнения процедуры дополнения информации о платеже.

*Особенности применения*

Время ожидания на ввод дополнительной информации установлено по умолчанию и составляет 30 минут с момента выявления необходимости дополнить данные. Если время ожидания истекло и данные не переданы в платформу — платеж автоматически отклоняется.

Для контроля платежей, при проведении которых выполнялась процедура дополнения информации, можно использовать оповещения и сведения из карточки платежа, доступной в интерфейсе Dashboard. В промежуточных и итоговых оповещениях, отправляемых со стороны платежной платформы, содержится набор данных, запрашиваемых у пользователя во время процедуры дополнения информации о платеже, а также статус платежа.`awaiting_clarification`

Справа приведен пример фрагмента оповещения, в котором указано, что для проведения оплатыплатежной платформе необходимы данные о пользователе: имя, фамилия и адрес электронной почты пользователя.с использованием метода Vietnam Bank Transfer

1. Пользователь подтверждает готовность провести оплату, после чего на странице оплаты отображается страница ожидания.
2. В результате того, что в платежной платформе выявлена необходимость в дополнении данных, на странице оплаты отображается страница с уведомлением и полями для ввода дополнительных данных. На этом шаге при задании ограничения времени работы страницы оплаты начинается новый отсчет времени.
3. Пользователь указывает запрашиваемые данные и подтверждает готовность продолжить проведение оплаты.

| Страна | Дополнительные параметры |
| --- | --- |
| country_VN |  |
| country_TH |  |
| Кореяcountry_PK |  |
| country_PK | — имя пользователя`customer_first_name` |
| country_IN |  |
| country_PH |  |

## Предварительный выбор платежного метода

*Общая информация*

По умолчанию работа пользователя с Payment Widget начинается со страницы выбора платежного метода, но в некоторых случаях нет необходимости отображать эту страницу. Например, когда пользователь выбирает метод в вашей системе до открытия страницы оплаты или когда вы по каким-либо причинам (с учетом специфики региона, пользователя или иных факторов) хотите использовать конкретный платежный метод.

Для работы с такими ситуациями в платежной платформе Some Platform предусмотрена возможность открытия страницы оплаты с учетом предварительно выбранного (вами или пользователем) метода, минуя выбор метода на странице оплаты. Выбранный метод в таких случаях указывается в запросе на открытие страницы оплаты, и для подключения этой возможности не требуется никаких дополнительных действий.

*Особенности*

При работе с предварительным выбором платежных методов необходимо учитывать следующие особенности:

*Формат запросов*

Для указания платежного метода в запросе на открытие страницы оплаты необходимо передавать код этого метода в параметре. Коды платежных методов представлены в следующей таблице.`force_payment_method`

Справа приведен пример данных из запроса на открытие страницы оплаты с предварительным выбором метода UPI.

- в качестве предварительно выбранного может указываться один из методов, доступных в рамках используемого проекта, иначе запрос отклоняется;
- пользователю не предоставляется возможность выбрать другой метод, кроме указанного при вызове Payment Widget.

| Страна | Платежный метод | Код платежного метода |
| --- | --- | --- |
| Весь мир | Платежные карты | card |
| Binance Pay | unify_Binance_Pay |  |
| Bybit Pay | bybit |  |
| Crypto | crypto |  |
| Gate Pay | gatepay |  |
| country_AU | PayID | bank-transfer-australia-payid |
| country_DZ | BaridiMob | baridi-wallet |
| country_AR | Bank transfers | argentina |
| country_BD | Bkash | bkash-wallet |
| Nagad | nagad-wallet |  |
| Rocket | rocket-wallet |  |
| Unify Upay | unify_upay |  |
| country_BJ | Mobile Money | mobile |
| country_BO | Bank transfers | bank-transfer-bolivia |
| Tigo Money Wallet | tigomoney-wallet |  |
| country_BR | PIX | pix |
| Boleto | boleto |  |
| PicPay | unify_picpay |  |
|  | Bank transfers | bank-transfer-brazil |
| country_BN | Cash | cash-brunei |
| country_BF | Mobile Money | mobile |
| country_VE | Bank Transfers | bank-transfer-venezuela |
| country_VN | Online debit | online-vietnam-banks |
| ATM Bank Transfer | bank-transfer-vietnam |  |
| MoMo Pay | momopay |  |
| VietQR | vietqr |  |
|  | QR pay | vietnam-banks-qr |
| country_GH | Mobile Money | mobile |
| country_HK | Hong Kong FPS QR | hk-qr |
| country_EG | Mobile Money | mobile |
|  | QafPay | qafpay |
| country_ZM | Mobile Money | mobile |
| country_IN | Cash on delivery | unify_cash_on_delivery |
| GlobePay | globepay |  |
| IMPS | imps |  |
| NetWallet | netwallet |  |
| Paytm | paytm-wallet |  |
| PhonePe | phonepe-wallet |  |
| UPI | upi |  |
| UPI QR | upi |  |
|  | Online debit | online-indian-banks |
| country_ID | Online debit | online-indonesian-banks |
| DANA Wallet | dana |  |
| LinkAja | linkaja |  |
| OVO Wallet | ovo |  |
| QRIS | indonesia-qr |  |
| Virtual Accounts | indonesia-va |  |
| country_ID | Shopee | shopee |
|  | Local Bank Transfer | bank-transfer-indonesia |
| country_KH | Bank transfers | bank-transfer-cambodia |
| QR banking | banks-cambodia-qr |  |
| country_CM | Mobile Money | mobile |
| country_KE | Mobile Money | mobile |
| country_CN | Online debit | online-china-banks |
|  | Bank transfers | bank-transfer-china |
| country_TW | Bank transfers | bank-transfer-taiwan-va |
| country_CO | Bank transfers | bank-transfer-colombia |
| Bre-B | bank-transfer/bre-b |  |
| Efecty | efecty |  |
| Nequi | nequi-wallet |  |
| PSE | pse |  |
| country_CR | Bank transfers | bank-transfer-costa-rica |
| Cash | cash-costa-rica |  |
| country_CI | Mobile Money | mobile |
| country_LA | Bank transfers | bank-transfer-laos |
| QR banking | banks-laos-qr |  |
| country_MY | Bank transfers | bank-transfer-malaysia |
| Boost | boost |  |
| DuitNow | duitnow-wallet |  |
| Grabpay Wallet | grabpay-wallet |  |
| Online debit | online-malaysian-banks |  |
| Shopee | shopee |  |
| Touch&amp;Go | touchngo-wallet |  |
| country_ML | Mobile Money | mobile |
| country_MA | Bank transfers | bank-transfer-morocco |
| Cash Plus | cashplus-wallet |  |
| Chaabi Cash | chaabi-wallet |  |
| Damane Cash | damanecash-wallet |  |
| Jibi | jibi-wallet |  |
| Orange | orange |  |
| country_MX | Bank transfers | bank-transfer-mexico |
| CoDi | codi |  |
| Oxxo | oxxo |  |
| SPEI | spei |  |
| country_MN | Mongolia QR | unify_mongolia-qr |
| country_MM | Bank transfers | bank-transfer-myanmar |
| QR banking | banks-myanmar-qr |  |
| KBZPay | kbzpay |  |
| Wave Money | wavemoney |  |
| country_NP | Cellpay Wallet | cellpay-wallet |
| Esewa Wallet | esewa-wallet |  |
| Imepay Wallet | imepay-wallet |  |
| Khalti Wallet | khalti-wallet |  |
| country_NG | Bank transfers | bank-transfer-africa |
| Local Cards | card |  |
|  | QafPay | qafpay |
|  | Bank transfers | bank-transfer-pakistan |
| country_PK | Cashmaal | unify_cashmaal |
| EasyPaisa | easypaisa-wallet |  |
| JazzCash | jazzcash-wallet |  |
| country_PE | Bank transfers | bank-transfer-peru |
| PagoEfectivo | pagoefectivo-voucher |  |
| Yape | yape-wallet |  |
| country_KR | Bank Transfers | bank-transfer-korea |
| Payment Agency Bank transfer | unify_eBuy |  |
| country_RW | Mobile Money | mobile |
|  | P2P Bank transfers | korea |
| country_SV | Cash | cash-el-salvador |
| country_SN | Mobile Money | mobile |
| country_SG | Online debit | online-singapore-banks |
| country_TH | Online debit | online-thailand-banks |
| Bank Transfer | bank-transfer-thailand |  |
| ThaiQR (Promptpay) | promptpay |  |
| TrueMoney | true-money |  |
|  | LINE Pay | unify_linepay |
| country_TZ | Mobile Money | mobile |
| country_TG | Mobile Money | mobile |
| country_TR | Bank transfers | bank-transfer-turkey |
| Papara | papara-wallet |  |
| country_UG | Mobile Money | mobile |
| country_PH | Online debit | online-philippines-banks |
| 7-Eleven | eleven7 |  |
| ATM Philippines | philippines-atm |  |
| Coins.ph | coinsph-wallet |  |
| GCash | gcash-wallet |  |
| GoTyme | gotyme |  |
| GrabPay | grabpay-wallet |  |
| PayMaya | paymaya-wallet |  |
| QR Ph | ph-qr |  |
| Virtual Accounts | bank-transfer-philippines-va |  |
| country_PH | Shopee | shopee |
|  | Local Bank Transfer | unify_philippines-local-bank-transfer |
| country_CL | Bank transfers | bank-transfer-chile |
| Cash | cash-chile |  |
| Webpay | webpay-chile |  |
| Tenpo Wallet | tenpo-wallet |  |
| Mercado Pago Wallet | mercado-wallet |  |
| Prepago Los Heroes Wallet | prepago-wallet |  |
| Copec Pay Wallet | copec-wallet |  |
| Superdigital Wallet | digital-wallet |  |
| Tapp Wallet | tapp-wallet |  |
| country_LK | Banks of Sri Lanka | sri-lanka-banks |
| Ipay | ipay-wallet |  |
| Upay | upay-wallet |  |
| country_EC | Bank Transfers | bank-transfer-ecuador |
| Cash | cash-ecuador |  |
| country_ZA | 1Voucher | 1voucher |
| Instant EFT | bank-transfer-africa |  |
| country_JP | Платежные карты | card |
| Bank transfers | bank-transfer-japan |  |
| Vega Wallet | vega-wallet |  |

## Скрытие платежных методов

Вы можете скрывать от пользователя платежные методы, если они неактуальны для конкретного платежа. Чтобы скрыть платежный метод на странице оплаты, передайте в запросе код платежного метода в параметре. Чтобы скрыть несколько платежных методов, укажите в этом параметре коды скрываемых платежных методов через запятую.

Коды платежных методов см. выше в разделе.#ru_qck_purchase_additional/section_wvv_c3w_5qb

Справа приведен пример данных из запроса на открытие страницы оплаты со скрытыми платежными методами UPI и GlobePay.

## Отображение платежных методов для доверенных пользователей

Список отображаемых на странице оплаты платежных методов может отличаться для доверенных и недоверенных пользователей. Чтобы определить, доверенный ли пользователь совершает оплату, в Some Platform вы можете подключить проверку пользователей.

Для проверки пользователя платежная платформа Some Platform использует идентификатор пользователя, который вы передаете в запросе в параметре. Если пользователь с данным идентификатором ранее уже получал выплату через платежную платформу Some Platform, он становится доверенным. В таком случае при оплате на странице оплаты ему отобразится полный список доступных для его региона платежных методов. Если пользователь с данным идентификатором выплаты ранее не получал — на странице оплаты ему отобразятся только некоторые платежные методы из списка доступных.

Вы можете определить список платежных методов, отображаемых на странице оплаты для недоверенных пользователей, а также согласовать, сколько выплат должен получить пользователь, чтобы стать доверенным. Для этого, а также для подключения проверки пользователей, обратитесь к своему курирующему менеджеру или менеджеру по имплементации в Some Platform.

## Затемнение недоступных для оплаты платежных методов

Строки со значками платежных методов затемняются на странице оплаты, если сумма оплаты пользователя не попадает в допустимый диапазон сумм оплаты платежного метода.

Предположим, что пользователь из Таиланда хочет совершить в вашей системе оплату на сумму 1,00. После того, как вы передадите платежной платформе Some Platform запрос на открытие платежной страницы, пользователю отобразится платежная страница с методами, доступными для Таиланда.references/ru/currencies/THB.dita

Вот пример такой платежной страницы:

Для оплаты пользователь сможет выбрать только те платежные методы, в диапазон которых попадает его сумма оплаты. Строки со значками недоступных для оплаты платежных методов отображаются, но затемнены и недоступны для выбора. Также у них есть примечание, где указаны минимальная и максимальная суммы оплаты по платежному методу.

Таким образом, затемнение недоступных для оплаты платежных методов не позволяет пользователю совершить заведомо неуспешную оплату.

Вы можете уточнять минимальную и максимальную сумму платежа для доступных в вашем проекте платежных методов в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.**ПроектыПлатежные методы**

## Определение языка страницы оплатыи отображаемых платежных методов по валюте

В Some Platform страница оплаты автоматически отображается на языке пользователя.и содержит значки платежных методов, доступных для его региона

Payment Widget определяет язык и регион пользователя по валюте, которую вы передаете в запросе в параметре.Так, если вы передадите в этом параметре значение, страница оплаты отобразится пользователю на вьетнамском языке и будет содержать значки платежных методов, доступных для Вьетнама.references/ru/currencies/VND.dita

Если вы передадите в запросе валюту, которой нет среди доступных валют для вашего проекта в Some Platform, страница оплаты отобразится пользователю на английском языке., а платежные методы будут соответствовать региону, определенному по IP-адресу пользователя

Вы можете предварительно выбрать язык страницы оплаты и регион пользователя. Для этого передайте в запросе на открытие страницы оплаты параметры:, согласно которому отобразятся платежные методы

Наличие этих параметров в запросе приоритетнее указанной в запросе валюты и региона, определенного по IP-адресу пользователя. Следовательно, если вы передадите в запросе эти параметры, пользователю отобразится страница оплаты на языке, указанном в параметре.и с платежными методами региона, указанного в параметре

В таблице ниже перечислены страны, доступные для проведения платежей с использованием платежной платформы Some Platform, с указанием их кодов и кодов их языков.

- — код языка пользователя в формате ISO 639-1 alpha-2, чтобы определить язык страницы оплаты;
- — код страны пользователя в формате ISO 3166 alpha-2., чтобы определить, платежные методы какого региона должны отображаться на странице оплаты

| Страна | Код страны | Код языка |
| --- | --- | --- |
| country_AU | references/ru/countries_by_id/AU.dita | references/ru/langs/en.dita |
| country_DZ | references/ru/countries_by_id/DZ.dita | references/ru/langs/ar.dita |
| country_AR | references/ru/countries_by_id/AR.dita | references/ru/langs/es.dita |
| country_BD | references/ru/countries_by_id/BD.dita | references/ru/langs/bn.dita |
| country_BO | references/ru/countries_by_id/BO.dita | references/ru/langs/es.dita |
| country_BR | references/ru/countries_by_id/BR.dita | references/ru/langs/pt.dita |
| country_BN | references/ru/countries_by_id/BN.dita | references/ru/langs/ms.dita |
| country_VE | references/ru/countries_by_id/VE.dita | references/ru/langs/es.dita |
| country_VN | references/ru/countries_by_id/VN.dita | references/ru/langs/vi.dita |
| country_GH | references/ru/countries_by_id/GH.dita | references/ru/langs/en.dita |
| country_HK | references/ru/countries_by_id/HK.dita | references/ru/langs/zh.dita |
| country_EG | references/ru/countries_by_id/EG.dita | references/ru/langs/ar.dita |
| country_ZM | references/ru/countries_by_id/ZM.dita | references/ru/langs/en.dita |
| country_IN | references/ru/countries_by_id/IN.dita | references/ru/langs/hi.dita |
| country_ID | references/ru/countries_by_id/ID.dita | references/ru/langs/id.dita |
| country_KH | references/ru/countries_by_id/KH.dita | references/ru/langs/km.dita |
| country_CM | references/ru/countries_by_id/CM.dita | references/ru/langs/fr.dita |
| country_KE | references/ru/countries_by_id/KE.dita | references/ru/langs/en.dita |
| country_CN | references/ru/countries_by_id/CN.dita | references/ru/langs/zh.dita |
| country_TW | references/ru/countries_by_id/TW.dita | references/ru/langs/zh.dita |
| country_CO | references/ru/countries_by_id/CO.dita | references/ru/langs/es.dita |
| country_CR | references/ru/countries_by_id/CR.dita | references/ru/langs/es.dita |
| country_KR | references/ru/countries_by_id/KR.dita | references/ru/langs/ko.dita |
| country_CI | references/ru/countries_by_id/CI.dita | references/ru/langs/fr.dita |
| country_LA | references/ru/countries_by_id/LA.dita | references/ru/langs/lo.dita |
| country_MY | references/ru/countries_by_id/MY.dita | references/ru/langs/ms.dita |
| country_MA | references/ru/countries_by_id/MA.dita | references/ru/langs/ar.dita |
| country_MX | references/ru/countries_by_id/MX.dita | references/ru/langs/es.dita |
| country_MN | references/ru/countries_by_id/MN.dita | references/ru/langs/mn.dita |
| country_MM | references/ru/countries_by_id/MM.dita | references/ru/langs/my.dita |
| country_NP | references/ru/countries_by_id/NP.dita | references/ru/langs/ne.dita |
| country_NG | references/ru/countries_by_id/NG.dita | references/ru/langs/en.dita |
| country_PK | references/ru/countries_by_id/PK.dita | references/ru/langs/ur.dita |
| country_PE | references/ru/countries_by_id/PE.dita | references/ru/langs/es.dita |
| country_RW | references/ru/countries_by_id/RW.dita | references/ru/langs/en.dita |
| country_SV | references/ru/countries_by_id/SV.dita | references/ru/langs/es.dita |
| country_SN | references/ru/countries_by_id/SN.dita | references/ru/langs/fr.dita |
| country_SG | references/ru/countries_by_id/SG.dita | references/ru/langs/en.dita |
| country_TH | references/ru/countries_by_id/TH.dita | references/ru/langs/th.dita |
| country_TZ | references/ru/countries_by_id/TZ.dita | references/ru/langs/en.dita |
| country_TR | references/ru/countries_by_id/TR.dita | references/ru/langs/tr.dita |
| country_UG | references/ru/countries_by_id/UG.dita | references/ru/langs/en.dita |
| country_PH | references/ru/countries_by_id/PH.dita | references/ru/langs/en.dita |
| country_CL | references/ru/countries_by_id/CL.dita | references/ru/langs/es.dita |
| country_LK | references/ru/countries_by_id/LK.dita | references/ru/langs/si.dita |
| country_EC | references/ru/countries_by_id/EC.dita | references/ru/langs/es.dita |
| country_ZA | references/ru/countries_by_id/ZA.dita | references/ru/langs/en.dita |
| country_JP | references/ru/countries_by_id/JP.dita | references/ru/langs/ja.dita |

## Конвертация валют

*Общая информация*

На стороне платежной платформы выполняется конвертация с учетом кода страны и языка пользователя, переданных в запросе. При выполнении конвертации валют в качестве источника валютных курсов используется.Для проведения платежей через платежную платформу Some Platform.поддерживаются следующие валюты:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,и,references/ru/currencies/LKR.dita, кроме случаев, отдельно описанных в разделах о региональных особенностях[сервис Currencylayer](https://currencylayer.com/)

Курсы сервиса Currencylayer обновляются один раз в день.

*Использование*

Для использования конвертации от вас не требуется действий, отличных от стандартных при проведении оплаты.

Информация о выполненной конвертации передается в оповещениях о результатах платежей — в объекте, где в объектеуказываются исходные сумма и валюта, а в объекте— конечные сумма и валюта с учетом конвертации. Эти объекты входят в стандартную структуру оповещения, описание которой представлено в разделе.`operationsum_initialsum_converted`ru_qck_callbacks.dita

Справа в примере оповещения содержится информация о том, что при проведении оплаты в размеревыполнена конвертация в.`100,00 USD5194,10 PHP53090,59 KZT`

## Округление суммы оплаты

Платежная платформа Some Platform может округлять сумму, которую вы передаете в запросе на проведение платежа. Округление суммы может быть характерно для платежей со слабыми валютами, а также может быть связано с особенностями работы провайдера.

Некоторые провайдеры не могут работать с суммами платежей, в которых дробные единицы валюты не равняются нулю. В таких случаях платежная платформа Some Platform округляет такие суммы до целых чисел по правилам математического округления. Это помогает избежать отказа провайдера в проведении платежа.

Например:

Также при работе со слабыми валютами встречаются случаи, когда провайдеры не могут обрабатывать запросы с суммами платежей, в которых последний десятичный ряд основной единицы валюты не равняется нулю. Чтобы избежать отказа провайдера в проведении платежа, платежная платформа Some Platform округляет последний десятичный ряд основной единицы валюты до целых чисел по правилам математического округления, например:

Пользователь должен совершить оплату на измененную сумму, а платежная платформа Some Platform отправит вашей системе оповещение с измененной суммой оплаты.

На этапе интеграции вы должны убедиться, что ваша система может принимать и обрабатывать оповещения с суммой, отличающейся от суммы в запросе на проведение платежа. Если ваша система не может принимать и обрабатывать оповещения с измененной суммой платежа, специалисты технической поддержки Some Platform свяжутся с вами, чтобы согласовать алгоритм решения данных ситуаций.

## Поддержка измененной суммы оплаты

Платежная платформа Some Platform поддерживает работу с платежами, если их сумма была изменена пользователем или сервисом провайдера.

В свою очередь, на этапе интеграции вы должны убедиться, что ваша система может принимать и обрабатывать оповещения с суммой, отличающейся от суммы в запросе на проведение платежа. Если ваша система не может принимать и обрабатывать оповещения с измененной суммой платежа, обратитесь к специалистам технической поддержки Some Platform, чтобы согласовать решение данной ситуации.

**Изменение суммы оплаты пользователем**

В некоторых платежных методах пользователь может самостоятельно вводить или менять сумму платежа. В результате этого может оказаться, что фактическая сумма оплаты будет отличаться от суммы, которую вы изначально указали в запросе.

Если пользователь при оплате преднамеренно или случайно указал сумму, отличную от суммы в запросе, дальнейшее проведение платежа может быть следующим:

Чтобы узнать, какой из этих сценариев актуален для вас, обратитесь к своему курирующему менеджеру или менеджеру по имплементации в Some Platform.

**Изменение суммы оплаты провайдером**

Из-за некоторых особенностей проведения оплаты провайдер может незначительно изменять сумму, которую должен оплатить пользователь.

Например:

Пользователь должен совершить оплату на предложенную провайдером сумму. Когда провайдер успешно проведет платеж, платежная платформа обработает его и отправит вам итоговое оповещение о проведении этого платежа, но уже с новой суммой. Дальнейшее развитие событий может быть следующим:

## Способы возврата пользователя в проект после оплаты

*Общая информация*

Payment Widget позволяет управлять способом возврата пользователей в проект после совершения оплаты на странице оплаты. Данные настройки управляются несколькими параметрами, отправляемыми в запросе на проведение платежа. Далее приведены эти параметры и их возможные значения.

*URL-адреса для возврата пользователя в проект после оплаты*

Чтобы задать URL-адрес, на который перенаправится пользователь после совершения оплаты, передайте в запросе параметрыиилиис указанием ссылок для перенаправления пользователя в случае проведенного или отклоненного платежа. В первом случае сипользователю отобразится страница с результатом и кнопкой возврата, по нажатии на которую происходит перенаправление на указанный URL-адрес. Во втором случае сипользователь перенаправится автоматически после оплаты на указанный URL-адрес без дополнительных шагов и страницы с результатом.

Вы также можете указать URL-адреса для возврата пользователя в проект после успешной или неуспешной оплаты в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.**ПроектыСсылки для перенаправления**

Чтобы пользователь мог вернуться с страницы оплаты в проектна любом шаге до завершения оплаты или отображения результата оплаты на странице оплаты, передайте URL-адрес в параметре.*по кнопке возврата*

Чтобы пользователь после совершения оплаты мог вернуться с страницы оплаты в проект, не дожидаясь отображения результата на странице оплаты, передайте URL-адрес в параметре.*автоматически*

При возникновении любых вопросов по способам возврата пользователя в проект, обращайтесь к своему курирующему менеджеру или менеджеру по имплементации в Some Platform.

*Возможность возврата пользователя после оплаты*

Для включения возможности возврата пользователя после проведенного платежа передайте, после отклоненного платежа —, на любом шаге оплаты по кнопке возвратас одним из значений:

*Режим возврата*

Для настройки режима открытия страницы проекта во время возврата пользователя после проведенного платежа передайте/, после отклоненного платежа —/, на любом шаге оплаты по кнопке возвратас одним из значений:

*Примеры режимов возврата*

Если страница оплаты открыта в режиме:

Если отправлены только параметры//при нажатии на кнопкуперенаправления не происходит, доступна обработка JavaScript оповещений.**Вернуться на сайт**

Еслиине переданы — возврат происходит в режиме "2".

Параметробязательно должен передаваться в запросе вместе с параметром, имеющим значение.`2`

Если страница оплаты открыта в отдельной вкладке:

В случае если отправлены только параметры//при нажатии на кнопкупроисходит перенаправление всей страницы.**Вернуться на сайт**

Еслиине переданы — возврат происходит в режиме "2".

Параметробязательно должен передаваться в запросе вместе с параметром, имеющим значение.`2`

## Способы перенаправления пользователяк платежному методу

При проведении оплаты может потребоваться перенаправление пользователей на страницу оплаты провайдера или внешней платежной системы. Например, для подтверждения оплаты или ввода дополнительных данных на стороне провайдера. По умолчанию перенаправление осуществляется в элементе iframe. Если вам необходимо изменить способ перенаправления пользователя для конкретного проекта, обратитесь к своему курирующему менеджеру или менеджеру по имплементации в Some Platform.
