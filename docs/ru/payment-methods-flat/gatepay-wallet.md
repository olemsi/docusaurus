# Оплата через Gate

## Общая информация

Чтобы выполнить оплату через Gate с использованием метода title:

Полная схема оплаты с использованием метода title выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Отобразите пользователю QR-код для оплаты.
3. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

## Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `v2/payment/wallet/gatepay/sale` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| customertype_object type_strictly_required | idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| ip_addresstype_string type_strictly_required | `198.51.100.47`Пример:IP-адрес устройства пользователя. |  |
| first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |  |
| last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |  |
| emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |  |
| browsertype_string type_optional | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36`Пример:Название и версия браузера пользователя. |  |
| device_typetype_string type_optional | Возможные значения:`WEB`Пример:`APP`— мобильное устройство;`WEB`— компьютер;`OTHERS`— другое устройство.Тип устройства пользователя. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

## Отображение пользователям QR-кода для оплаты

Получив и обработав запрос на оплату, платежная платформа направит вам оповещение (callback) с данными QR-кода для отображения пользователю.

display_dataЧтобы отобразить пользователю QR-код для оплаты, используйте информацию из массива.

display_dataДалее представлен фрагмент оповещения с массивом.

```json
"display_data": [
    {
        "type": "add_info",
        "title": "amount",
        "data": "10000"
    },
    {
        "type": "add_info",
        "title": "currency",
        "data": "USD"
    },
    {
        "type": "add_info",
        "title": "expired_timestamp",
        "data": "3600"
    },
    {
        "type": "qr_data",
        "title": "QR code",
        "data": "http://openplatform.gate.io/qr/123"
    },
    {
        "type": "add_info",
        "title": "checkoutLink",
        "data": "https://example.com"
    }
]
```

| Элемент | Описание |
| --- | --- |
| {     "type": "add_info",     "title": "amount",     "data": "10000" } | `10000`Пример:Сумма оплаты в дробных единицах валюты без десятичной точки и пробелов. |
| {     "type": "add_info",     "title": "currency",     "data": "USD" } | `USD`Пример:Код валюты оплаты в формате ISO-4217 alpha-3. |
| {     "type": "add_info",     "title": "expired_timestamp",     "data": "3600" } | `3600`Пример:Время в секундах, в течение которого действителен QR-код. |
| {     "type": "qr_data",     "title": "QR code",     "data": "http://openplatform.gate.io/qr/123" } | `http://openplatform.gate.io/qr/123`Пример:Данные для отображения QR-кода. После сканирования QR-кода пользователь выполняет оплату в приложении title. |
| {     "type": "add_info",     "title": "checkoutLink",     "data": "https://example.com" } | `https://example.com`Пример:Ссылка для перехода в приложение или на сайт провайдера. После открытия title пользователю будут отображены доступные способы оплаты, включая платежные реквизиты, которые он может использовать при переводе средств через криптокошелек. |

## Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат оплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

Вот пример тела оповещения с информацией об успешно выполненной оплате:

Вот пример тела оповещения с информацией об отклоненной оплате.

## Дополнительные материалы

- ru_gate_interaction_organisation.dita
- ru_gate_payment_model.dita
- ru_gate_authentication.dita
- ru_gate_statuses_and_response_codes.dita

---

## Оплата через Payment Widget

### Общая информация

Чтобы выполнить оплату через Payment Widget с использованием метода title:

Полная схема оплаты через Payment Widget выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

### Запрос

В запросе на открытие страницы оплаты с использованием метода 
        title укажите необходимые параметры:

`EPayWidget`Вот пример параметров из запроса на открытие страницы оплаты с использованием виджета:

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |
| --- | --- |
| Параметр | Описание |
| project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |
| customer_idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| customer_first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |
| customer_last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |
| customer_emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |
| payment_currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| payment_amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |
| force_payment_methodtype_string type_optional | force_payment_method`force_pm`ru_pp__preselectingps.ditaЧтобы пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода, добавьте в запрос параметрсо значением. (Подробнее о предварительном выборе метода см..)`force_payment_method: 'force_pm'`Пример:Параметр, позволяющий пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода. |
| signaturetype_string type_strictly_required | ru_pp_authentication.ditaПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |
| ru_pp_parameters.ditaПри необходимости добавьте в запрос необязательные параметры из числа доступных для работы                  с Payment Widget. Подробнее о параметрах запросов в Payment Widget см.. |  |

### Оповещение (callback)

ru_pp_callbacks.ditaВ методе title результат оплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

Вот пример тела оповещения с информацией об успешно выполненной оплате:

Вот пример тела оповещения с информацией об отклоненной оплате.

### Дополнительные материалы

- ru_pp_interaction_organisation.dita
- ru_pp_payment_model.dita
- ru_pp_authentication.dita
- ru_pp_statuses_and_response_codes.dita

---

## Gate Pay -Оплата

При оплате 
пользователь при помощи мобильного приложения сканирует QR-код, который отображается на странице оплаты или в вашей системе (при работе через Gate).

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата |  |  |  |

| **Регионы использования** | [Пользовательском соглашении](https://www.gate.com/ru/legal/user-agreement)Все страны, кроме: country_AT, country_AR, country_BO, country_GB, country_VE, country_DE, country_HK, country_IN, country_ID, country_IR, country_ES, country_KH, country_CA, country_CN, country_KP, country_CU, country_MY, country_MT, country_MM, country_NL, country_AE, country_PK, country_KR, country_SG, country_SD, country_US, country_TH, country_UZ, country_PH, country_FR, country_JP и стран, перечисленных в. |
| --- | --- |
| **Валюты оплаты** | references/ru/currencies/ARS.ditareferences/ru/currencies/EGP.ditareferences/ru/currencies/GHS.ditareferences/ru/currencies/KES.ditareferences/ru/currencies/NGN.ditareferences/ru/currencies/RWF.ditareferences/ru/currencies/TZS.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.ditareferences/ru/currencies/ZAR.ditaВсе валюты, кроме:,,,,,,,,,,. |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**references/ru/currencies/USD.ditaCумма платежа конвертируется на стороне Some Platform в эквивалентную сумму в валюте.QR-код для оплаты можно использовать только один раз. Для повторной оплаты пользователь должен инициировать новый платеж.Платеж отклоняется, если пользователь не совершит оплату в течение 1 часа с момента инициирования платежа.ru_gate_amount_modification.ditaЕсли пользователь при оплате укажет сумму, отличную от суммы, указанной в запросе на оплату, то платеж будет проводиться с особенностями, которые описаны в разделе.После открытия приложения или сайта title пользователю будут отображены доступные способы оплаты, включая QR-код для продолжения оплаты через приложение title, и платежные реквизиты, которые он может использовать при переводе средств через криптокошелек. |  |

---

## Выплата через Gate

### Общая информация

Чтобы выполнить выплату через Gate с использованием метода title:

Полная схема выплаты с использованием метода title выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Примите от платежной платформы Some Platform оповещение (callback) с результатом выплаты.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на выплату с использованием метода 
        title.

Вот пример тела запроса на выплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `v2/payment/wallet/gatepay/payout` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| customertype_object type_strictly_required | idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| ip_addresstype_string type_strictly_required | `198.51.100.47`Пример:IP-адрес устройства пользователя. |  |
| first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |  |
| last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |  |
| emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |  |
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`Пример:Адрес электронного кошелька, поддерживающего криптовалюты. |
| crypto_currencytype_string type_strictly_required | Возможные значения:`USDT`Пример:`USDC`— при передаче криптовалюты USDC;`USDT`— при передаче криптовалюты USDT;Код (тикер) криптовалюты. |  |
| crypto_paywaytype_string type_strictly_required | Возможные значения:`ETH`Пример:`ARBEVM`— при передаче криптовалюты USDT или USDC на блокчейне Arbitrum;`BSC`— при передаче криптовалюты USDT на блокчейне BNB Smart Chain;`ETH`— при передаче криптовалюты USDT или USDC на блокчейне Ethereum;`MATIC`— при передаче криптовалюты USDT или USDC на блокчейне Polygon (ex Matic);`SOL`— при передаче криптовалюты USDT или USDC на блокчейне Solana;`TRX`— при передаче криптовалюты USDT на блокчейне TRON.Этот параметр указывает на блокчейн, в котором хранится криптовалюта. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |

### Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат выплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

Вот пример тела оповещения с информацией об успешно выполненной выплате:

Вот пример тела оповещения с информацией об отклоненной выплате.

### Дополнительные материалы

- ru_gate_interaction_scheme.dita
- ru_gate_payment_model.dita
- ru_gate_authentication.dita
- ru_gate_statuses_and_response_codes.dita

---

## Gate Pay -Выплата

При выплате 
пользователь инициирует платеж, после чего ожидает зачисление средств на свой счет. Непосредственное участие пользователя в процессе проведения выплаты не требуется.

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Выплата |  |  |  |

| **Регионы использования** | [Пользовательском соглашении](https://www.gate.com/ru/legal/user-agreement)Все страны, кроме: country_AT, country_AR, country_BO, country_GB, country_VE, country_DE, country_HK, country_IN, country_ID, country_IR, country_ES, country_KH, country_CA, country_CN, country_KP, country_CU, country_MY, country_MT, country_MM, country_NL, country_AE, country_PK, country_KR, country_SG, country_SD, country_US, country_TH, country_UZ, country_PH, country_FR, country_JP и стран, перечисленных в. |
| --- | --- |
| **Валюты выплаты** | references/ru/currencies/ARS.ditareferences/ru/currencies/EGP.ditareferences/ru/currencies/GHS.ditareferences/ru/currencies/KES.ditareferences/ru/currencies/NGN.ditareferences/ru/currencies/RWF.ditareferences/ru/currencies/TZS.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.ditareferences/ru/currencies/ZAR.ditaВсе валюты, кроме:,,,,,,,,,,. |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |

---

## Возврат через Gate

### Общая информация

Чтобы выполнить возврат ранее выполненной оплаты через Gate с использованием метода title:

Полная схема возврата по оплате с использованием метода title выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Примите от платежной платформы Some Platform оповещение (callback) с результатом возврата.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на возврат с использованием метода 
        title.

Вот пример тела запроса на возврат с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `v2/payment/wallet/gatepay/refund` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, по которому необходимо выполнить возврат. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_optional | При выполнении частичного возврата этот параметр является обязательным.`example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_optional | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см..При выполнении частичного возврата этот параметр является обязательным.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| descriptiontype_string type_strictly_required | `Возврат.`Пример:Комментарий или описание возврата. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |

### Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат возврата платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

Вот пример тела оповещения с информацией об успешно выполненном возврате:

Вот пример тела оповещения с информацией об отклоненном возврате.

### Дополнительные материалы

- ru_gate_interaction_scheme.dita
- ru_gate_payment_model.dita
- ru_gate_authentication.dita
- ru_gate_statuses_and_response_codes.dita

---

## Анализ результатов проведения платежей

Как и при работе с другими платежными методами, которые предоставляет Some Platform, при использовании этого метода доступны разные способы анализа информации о платежах и операциях.

`das_link`**Аналитика**Всю необходимую информацию можно получать и анализировать средствами Dashboard (), в том числе с помощью аналитических панелей в разделе.

Также можно выгружать необходимую информацию для последующего анализа с помощью специализированных аналитических средств сторонних разработчиков:

С любыми вопросами о возможностях анализа можно обращаться в службу технической поддержки Some Platform.

- **Отчеты**Dashboard позволяет выгружать данные в формате CSV с помощью инструментов в разделе. При этом можно выполнять разовые и периодические выгрузки информации на локальный компьютер.
- Data APIпозволяет получать информацию в формате JSON и отправлять ее на заданный URL — для этого применяются запросы к конечной точке /operations/get.

---

## title

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата |  |  |  |
| Выплата |  |  |  |

### Сценарий платежа

оплатеПрипользователь при помощи мобильного приложения сканирует QR-код, который отображается на странице оплаты или в вашей системе (при работе через Gate).

выплатеПрипользователь инициирует платеж, после чего ожидает зачисление средств на свой счет. Непосредственное участие пользователя в процессе проведения выплаты не требуется.

| title – это платежный метод, который позволит вам принимать оплату от пользователей. Пользователи выполняют оплату с использованием криптокошельков.Платежный метод title позволяет принимать от пользователей оплату, используя Payment Widget и Gate, а также проводить пользователям выплату через Gate и Dashboard.здесьЗагрузить логотип этого платежного метода в векторном формате можно. |  |
| --- | --- |

| Тип платежного метода | Электронные кошельки |
| --- | --- |
| Регионы использования | [Пользовательском соглашении](https://www.gate.com/ru/legal/user-agreement)Все страны, кроме: country_AT, country_AR, country_BO, country_GB, country_VE, country_DE, country_HK, country_IN, country_ID, country_IR, country_ES, country_KH, country_CA, country_CN, country_KP, country_CU, country_MY, country_MT, country_MM, country_NL, country_AE, country_PK, country_KR, country_SG, country_SD, country_US, country_TH, country_UZ, country_PH, country_FR, country_JP и стран, перечисленных в. |
| Валюты платежей | references/ru/currencies/ARS.ditareferences/ru/currencies/EGP.ditareferences/ru/currencies/GHS.ditareferences/ru/currencies/KES.ditareferences/ru/currencies/NGN.ditareferences/ru/currencies/RWF.ditareferences/ru/currencies/TZS.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.ditareferences/ru/currencies/ZAR.ditaВсе валюты, кроме:,,,,,,,,,,. |
| Суммы платежей | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| Время проведения платежа | Информацию уточняйте у курирующего менеджера Some Platform. |
| Конвертация валют | На стороне Some Platform |
| Оплата |  |
| Выплата |  |
| Повторяемая оплата |  |
| Возврат |  |
| Организация и стоимость подключения | По согласованию с курирующим менеджером Some Platform |

---

## title

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата |  |  |  |
| Выплата |  |  |  |

### Сценарий платежа

оплатеПрипользователь при помощи мобильного приложения сканирует QR-код, который отображается на странице оплаты или в вашей системе (при работе через Gate).

выплатеПрипользователь инициирует платеж, после чего ожидает зачисление средств на свой счет. Непосредственное участие пользователя в процессе проведения выплаты не требуется.

| title – это платежный метод, который позволит вам принимать оплату от пользователей. Пользователи выполняют оплату с использованием криптокошельков.Платежный метод title позволяет принимать от пользователей оплату, используя Payment Widget и Gate, а также проводить пользователям выплату через Gate и Dashboard.здесьЗагрузить логотип этого платежного метода в векторном формате можно. |  |
| --- | --- |

| Тип платежного метода | Электронные кошельки |
| --- | --- |
| Регионы использования | [Пользовательском соглашении](https://www.gate.com/ru/legal/user-agreement)Все страны, кроме: country_AT, country_AR, country_BO, country_GB, country_VE, country_DE, country_HK, country_IN, country_ID, country_IR, country_ES, country_KH, country_CA, country_CN, country_KP, country_CU, country_MY, country_MT, country_MM, country_NL, country_AE, country_PK, country_KR, country_SG, country_SD, country_US, country_TH, country_UZ, country_PH, country_FR, country_JP и стран, перечисленных в. |
| Валюты платежей | references/ru/currencies/ARS.ditareferences/ru/currencies/EGP.ditareferences/ru/currencies/GHS.ditareferences/ru/currencies/KES.ditareferences/ru/currencies/NGN.ditareferences/ru/currencies/RWF.ditareferences/ru/currencies/TZS.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.ditareferences/ru/currencies/ZAR.ditaВсе валюты, кроме:,,,,,,,,,,. |
| Суммы платежей | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| Время проведения платежа | Информацию уточняйте у курирующего менеджера Some Platform. |
| Конвертация валют | На стороне Some Platform |
| Оплата |  |
| Выплата |  |
| Повторяемая оплата |  |
| Возврат |  |
| Организация и стоимость подключения | По согласованию с курирующим менеджером Some Platform |

---

## Анализ результатов проведения платежей

Как и при работе с другими платежными методами, которые предоставляет Some Platform, при использовании этого метода доступны разные способы анализа информации о платежах и операциях.

`das_link`**Аналитика**Всю необходимую информацию можно получать и анализировать средствами Dashboard (), в том числе с помощью аналитических панелей в разделе.

Также можно выгружать необходимую информацию для последующего анализа с помощью специализированных аналитических средств сторонних разработчиков:

С любыми вопросами о возможностях анализа можно обращаться в службу технической поддержки Some Platform.

- **Отчеты**Dashboard позволяет выгружать данные в формате CSV с помощью инструментов в разделе. При этом можно выполнять разовые и периодические выгрузки информации на локальный компьютер.
- Data APIпозволяет получать информацию в формате JSON и отправлять ее на заданный URL — для этого применяются запросы к конечной точке /operations/get.

---

## Выплата через Gate

### Общая информация

Чтобы выполнить выплату через Gate с использованием метода title:

Полная схема выплаты с использованием метода title выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Примите от платежной платформы Some Platform оповещение (callback) с результатом выплаты.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на выплату с использованием метода 
        title.

Вот пример тела запроса на выплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `v2/payment/wallet/gatepay/payout` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| customertype_object type_strictly_required | idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| ip_addresstype_string type_strictly_required | `198.51.100.47`Пример:IP-адрес устройства пользователя. |  |
| first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |  |
| last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |  |
| emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |  |
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`Пример:Адрес электронного кошелька, поддерживающего криптовалюты. |
| crypto_currencytype_string type_strictly_required | Возможные значения:`USDT`Пример:`USDC`— при передаче криптовалюты USDC;`USDT`— при передаче криптовалюты USDT;Код (тикер) криптовалюты. |  |
| crypto_paywaytype_string type_strictly_required | Возможные значения:`ETH`Пример:`ARBEVM`— при передаче криптовалюты USDT или USDC на блокчейне Arbitrum;`BSC`— при передаче криптовалюты USDT на блокчейне BNB Smart Chain;`ETH`— при передаче криптовалюты USDT или USDC на блокчейне Ethereum;`MATIC`— при передаче криптовалюты USDT или USDC на блокчейне Polygon (ex Matic);`SOL`— при передаче криптовалюты USDT или USDC на блокчейне Solana;`TRX`— при передаче криптовалюты USDT на блокчейне TRON.Этот параметр указывает на блокчейн, в котором хранится криптовалюта. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |

### Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат выплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

Вот пример тела оповещения с информацией об успешно выполненной выплате:

Вот пример тела оповещения с информацией об отклоненной выплате.

### Дополнительные материалы

- ru_gate_interaction_scheme.dita
- ru_gate_payment_model.dita
- ru_gate_authentication.dita
- ru_gate_statuses_and_response_codes.dita

---

## Оплата через Gate

### Общая информация

Чтобы выполнить оплату через Gate с использованием метода title:

Полная схема оплаты с использованием метода title выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Отобразите пользователю QR-код для оплаты.
3. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `v2/payment/wallet/gatepay/sale` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| customertype_object type_strictly_required | idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| ip_addresstype_string type_strictly_required | `198.51.100.47`Пример:IP-адрес устройства пользователя. |  |
| first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |  |
| last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |  |
| emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |  |
| browsertype_string type_optional | `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36`Пример:Название и версия браузера пользователя. |  |
| device_typetype_string type_optional | Возможные значения:`WEB`Пример:`APP`— мобильное устройство;`WEB`— компьютер;`OTHERS`— другое устройство.Тип устройства пользователя. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

### Отображение пользователям QR-кода для оплаты

Получив и обработав запрос на оплату, платежная платформа направит вам оповещение (callback) с данными QR-кода для отображения пользователю.

display_dataЧтобы отобразить пользователю QR-код для оплаты, используйте информацию из массива.

display_dataДалее представлен фрагмент оповещения с массивом.

```json
"display_data": [
    {
        "type": "add_info",
        "title": "amount",
        "data": "10000"
    },
    {
        "type": "add_info",
        "title": "currency",
        "data": "USD"
    },
    {
        "type": "add_info",
        "title": "expired_timestamp",
        "data": "3600"
    },
    {
        "type": "qr_data",
        "title": "QR code",
        "data": "http://openplatform.gate.io/qr/123"
    },
    {
        "type": "add_info",
        "title": "checkoutLink",
        "data": "https://example.com"
    }
]
```

| Элемент | Описание |
| --- | --- |
| {     "type": "add_info",     "title": "amount",     "data": "10000" } | `10000`Пример:Сумма оплаты в дробных единицах валюты без десятичной точки и пробелов. |
| {     "type": "add_info",     "title": "currency",     "data": "USD" } | `USD`Пример:Код валюты оплаты в формате ISO-4217 alpha-3. |
| {     "type": "add_info",     "title": "expired_timestamp",     "data": "3600" } | `3600`Пример:Время в секундах, в течение которого действителен QR-код. |
| {     "type": "qr_data",     "title": "QR code",     "data": "http://openplatform.gate.io/qr/123" } | `http://openplatform.gate.io/qr/123`Пример:Данные для отображения QR-кода. После сканирования QR-кода пользователь выполняет оплату в приложении title. |
| {     "type": "add_info",     "title": "checkoutLink",     "data": "https://example.com" } | `https://example.com`Пример:Ссылка для перехода в приложение или на сайт провайдера. После открытия title пользователю будут отображены доступные способы оплаты, включая платежные реквизиты, которые он может использовать при переводе средств через криптокошелек. |

### Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат оплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

Вот пример тела оповещения с информацией об успешно выполненной оплате:

Вот пример тела оповещения с информацией об отклоненной оплате.

### Дополнительные материалы

- ru_gate_interaction_organisation.dita
- ru_gate_payment_model.dita
- ru_gate_authentication.dita
- ru_gate_statuses_and_response_codes.dita

---

## Возврат через Gate

### Общая информация

Чтобы выполнить возврат ранее выполненной оплаты через Gate с использованием метода title:

Полная схема возврата по оплате с использованием метода title выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Примите от платежной платформы Some Platform оповещение (callback) с результатом возврата.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на возврат с использованием метода 
        title.

Вот пример тела запроса на возврат с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `v2/payment/wallet/gatepay/refund` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, по которому необходимо выполнить возврат. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_optional | При выполнении частичного возврата этот параметр является обязательным.`example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_optional | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см..При выполнении частичного возврата этот параметр является обязательным.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| descriptiontype_string type_strictly_required | `Возврат.`Пример:Комментарий или описание возврата. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |

### Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат возврата платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

Вот пример тела оповещения с информацией об успешно выполненном возврате:

Вот пример тела оповещения с информацией об отклоненном возврате.

### Дополнительные материалы

- ru_gate_interaction_scheme.dita
- ru_gate_payment_model.dita
- ru_gate_authentication.dita
- ru_gate_statuses_and_response_codes.dita

---

## Gate Pay -Выплата

При выплате 
пользователь инициирует платеж, после чего ожидает зачисление средств на свой счет. Непосредственное участие пользователя в процессе проведения выплаты не требуется.

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Выплата |  |  |  |

| **Регионы использования** | [Пользовательском соглашении](https://www.gate.com/ru/legal/user-agreement)Все страны, кроме: country_AT, country_AR, country_BO, country_GB, country_VE, country_DE, country_HK, country_IN, country_ID, country_IR, country_ES, country_KH, country_CA, country_CN, country_KP, country_CU, country_MY, country_MT, country_MM, country_NL, country_AE, country_PK, country_KR, country_SG, country_SD, country_US, country_TH, country_UZ, country_PH, country_FR, country_JP и стран, перечисленных в. |
| --- | --- |
| **Валюты выплаты** | references/ru/currencies/ARS.ditareferences/ru/currencies/EGP.ditareferences/ru/currencies/GHS.ditareferences/ru/currencies/KES.ditareferences/ru/currencies/NGN.ditareferences/ru/currencies/RWF.ditareferences/ru/currencies/TZS.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.ditareferences/ru/currencies/ZAR.ditaВсе валюты, кроме:,,,,,,,,,,. |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |

---

## Оплата через Payment Widget

### Общая информация

Чтобы выполнить оплату через Payment Widget с использованием метода title:

Полная схема оплаты через Payment Widget выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

### Запрос

В запросе на открытие страницы оплаты с использованием метода 
        title укажите необходимые параметры:

`EPayWidget`Вот пример параметров из запроса на открытие страницы оплаты с использованием виджета:

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |
| --- | --- |
| Параметр | Описание |
| project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |
| customer_idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| customer_first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |
| customer_last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |
| customer_emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |
| payment_currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| payment_amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |
| force_payment_methodtype_string type_optional | force_payment_method`force_pm`ru_pp__preselectingps.ditaЧтобы пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода, добавьте в запрос параметрсо значением. (Подробнее о предварительном выборе метода см..)`force_payment_method: 'force_pm'`Пример:Параметр, позволяющий пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода. |
| signaturetype_string type_strictly_required | ru_pp_authentication.ditaПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |
| ru_pp_parameters.ditaПри необходимости добавьте в запрос необязательные параметры из числа доступных для работы                  с Payment Widget. Подробнее о параметрах запросов в Payment Widget см.. |  |

### Оповещение (callback)

ru_pp_callbacks.ditaВ методе title результат оплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

Вот пример тела оповещения с информацией об успешно выполненной оплате:

Вот пример тела оповещения с информацией об отклоненной оплате.

### Дополнительные материалы

- ru_pp_interaction_organisation.dita
- ru_pp_payment_model.dita
- ru_pp_authentication.dita
- ru_pp_statuses_and_response_codes.dita

---

## Gate Pay -Оплата

При оплате 
пользователь при помощи мобильного приложения сканирует QR-код, который отображается на странице оплаты или в вашей системе (при работе через Gate).

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата |  |  |  |

| **Регионы использования** | [Пользовательском соглашении](https://www.gate.com/ru/legal/user-agreement)Все страны, кроме: country_AT, country_AR, country_BO, country_GB, country_VE, country_DE, country_HK, country_IN, country_ID, country_IR, country_ES, country_KH, country_CA, country_CN, country_KP, country_CU, country_MY, country_MT, country_MM, country_NL, country_AE, country_PK, country_KR, country_SG, country_SD, country_US, country_TH, country_UZ, country_PH, country_FR, country_JP и стран, перечисленных в. |
| --- | --- |
| **Валюты оплаты** | references/ru/currencies/ARS.ditareferences/ru/currencies/EGP.ditareferences/ru/currencies/GHS.ditareferences/ru/currencies/KES.ditareferences/ru/currencies/NGN.ditareferences/ru/currencies/RWF.ditareferences/ru/currencies/TZS.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.ditareferences/ru/currencies/ZAR.ditaВсе валюты, кроме:,,,,,,,,,,. |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**references/ru/currencies/USD.ditaCумма платежа конвертируется на стороне Some Platform в эквивалентную сумму в валюте.QR-код для оплаты можно использовать только один раз. Для повторной оплаты пользователь должен инициировать новый платеж.Платеж отклоняется, если пользователь не совершит оплату в течение 1 часа с момента инициирования платежа.ru_gate_amount_modification.ditaЕсли пользователь при оплате укажет сумму, отличную от суммы, указанной в запросе на оплату, то платеж будет проводиться с особенностями, которые описаны в разделе.После открытия приложения или сайта title пользователю будут отображены доступные способы оплаты, включая QR-код для продолжения оплаты через приложение title, и платежные реквизиты, которые он может использовать при переводе средств через криптокошелек. |  |

