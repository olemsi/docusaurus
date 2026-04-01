# Оплата через Gate

## Общая информация

Чтобы выполнить оплату через Gate с использованием метода title:

Полная схема оплаты с использованием метода title выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Отобразите пользователю инструкцию для оплаты.
3. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

## Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `/v2/payment/bank-transfer/africa/sale` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_gate_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, платежная платформа отправит вам оповещение со списком недостающих параметров. Подробнее о таких случаях см. раздел.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |  |
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
| phonetype_required✱type_string | `2712345678`Пример:Номер телефона пользователя, без знака +, без пробелов и знаков препинания. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

## Отображение платежной инструкции пользователю

Получив и обработав запрос на оплату, платежная платформа направит вам оповещение (callback) с платежной инструкцией для отображения пользователю.

display_dataЧтобы отобразить пользователю платежную инструкцию, используйте информацию из массива.

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
        "title": "receiver_name",
        "data": "John Doe"
    },
    {
        "type": "add_info",
        "title": "receiver_account",
        "data": "1122334455667788"
    },
    {
        "type": "add_info",
        "title": "bank_name",
        "data": "BANK"
    },
    {
        "type": "add_info",
        "title": "expired_timestamp",
        "data": "3600"
    }
]
```

| Элемент | Описание |
| --- | --- |
| {     "type": "add_info",     "title": "amount",     "data": "10000" } | `10000`Пример:Сумма платежа в дробных единицах валюты. |
| {     "type": "add_info",     "title": "receiver_name",     "data": "John Doe" } | `John Doe`Пример:Полное имя получателя перевода. |
| {     "type": "add_info",     "title": "receiver_account",     "data": "1122334455667788" } | `1122334455667788`Пример:Номер счета получателя перевода. |
| {     "type": "add_info",     "title": "bank_name",     "data": "BANK" } | `BANK`Пример:Название банка получателя перевода. |
| {     "type": "add_info",     "title": "expired_timestamp",     "data": "3600" } | `3600`Пример:Момент истечения срока действия платежа. Указывается в формате Unix-времени. |

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

## Оплата через Gate

### Общая информация

Чтобы выполнить оплату через Gate с использованием метода title:

Полная схема оплаты с использованием метода title выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Перенаправьте пользователя в сервис provider_service.
3. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `/v2/payment/bank-transfer/africa/sale` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_gate_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, платежная платформа отправит вам оповещение со списком недостающих параметров. Подробнее о таких случаях см. раздел.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |  |
| --- | --- | --- |
| Объект | Объект/Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| customertype_object type_strictly_required | idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| ip_addresstype_string type_strictly_required | `198.51.100.47`Пример:IP-адрес устройства пользователя. |  |
| first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |  |
| last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |  |
| emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |  |
| phonetype_required✱type_string | `123456789`Пример:Номер телефона пользователя без знака +, только цифры, без пробелов и знаков препинания. |  |
| identifytype_required✱type_object | doc_numbertype_required✱type_string | `1234567891012`Пример:Номер документа, удостоверяющего личность пользователя. Необходим при выполнении оплаты в Южной Африке. Это может быть номер паспорта (1 буква и 8 цифр) или идентификационный номер пользователя (13 цифр). |
| accounttype_strictly_required✱type_object | typetype_required✱type_string | Возможные значения:`savings`Пример:`cheque`— текущий счет;`savings`— сберегательный счет;`transmission`— счет, используемый для перевода средств между финансовыми институтами.Тип счета пользователя. |
| bank_idtype_strictly_required✱type_integer | ru_pm_africa_bt_purchase_redirect_banks.dita`12345`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков см.. |  |
| security_codetype_strictly_required✱type_string | `12345678910`Пример:Банковский проверочный номер пользователя, состоящий из 11 цифр (BVN). Необходим при выполнении оплаты в Нигерии. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| return_urltype_object type_strictly_required | returntype_string type_strictly_required | successdeclinereturn_url`https://example.com/return/`Пример:URL-адрес, куда нужно перенаправить пользователя в случае прерывания оплаты пользователем до ее завершения. Этот же адрес используется, если не заданы параметрыи. Если не задан ни один из параметров объекта, то Gate по умолчанию перенаправляет пользователя по URL-адресу, указанному в вашем проекте в Some Platform. |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

### Перенаправление пользователей

Получив и обработав запрос на оплату, платежная платформа направит вам оповещение (callback) с данными для перенаправления пользователя в сервис provider_service.

redirect_dataЧтобы перенаправить пользователя, используйте значения следующих параметров, находящихся в объекте:

Вот пример фрагмента оповещения, содержащего данные для перенаправления пользователя:

- url— адрес для перенаправления пользователя;
- body— данные для отправки в теле запроса;
- method`POSTGET`— метод запроса HTML-страницы сайта (например,или);
- encrypted— это служебный параметр. Игнорируйте содержащиеся в нем данные.

```json
"redirect_data": {
    "method": "GET",
    "body": [],
    "encrypted": [],
    "url": "https://example.com/redirect"
}
```

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
| Конечная точка | `/v2/payment/bank-transfer/africa/payout` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |  |
| --- | --- | --- |
| Объект | Объект/Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| customertype_object type_strictly_required | idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| ip_addresstype_string type_strictly_required | `198.51.100.47`Пример:IP-адрес устройства пользователя. |  |
| first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |  |
| last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |  |
| emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |  |
| phonetype_strictly_required✱type_string | `123456789`Пример:Номер телефона пользователя без знака +, только цифры, без пробелов и знаков препинания. |  |
| identifytype_strictly_required✱type_object | doc_numbertype_strictly_required✱type_string | `1234567891012`Пример:Номер документа, удостоверяющего личность пользователя. Необходим при выполнении оплаты в Южной Африке. Это может быть номер паспорта (1 буква и 8 цифр) или идентификационный номер пользователя (13 цифр). |
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `NGNZAR``0123456789`Пример:Номер счета пользователя, только цифры, без пробелов или знаков препинания. Если валюта платежа, то номер счета должен содержать 10 цифр, если валюта, то номер счета должен содержать 10 или 11 цифр. |
| typetype_strictly_required✱type_string | Возможные значения:`savings`Пример:`cheque`— текущий счет;`savings`— сберегательный счет;`transmission`— счет, используемый для перевода средств между финансовыми институтами.Тип счета пользователя. |  |
| bank_idtype_integer type_strictly_required | ru_pm_africa_bt_payout_banks.dita`12345`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков см.. |  |
| security_codetype_strictly_required✱type_string | `1234567890`Пример:Банковский проверочный номер пользователя, состоящий из 11 цифр (BVN). Необходим при выполнении выплаты в Нигерии. |  |
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
| Конечная точка | `/v2/payment/bank-transfer/africa/refund` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, по которому необходимо выполнить возврат. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_optional | При выполнении частичного возврата этот параметр является обязательным.`example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_optional | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.При выполнении частичного возврата этот параметр является обязательным.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| descriptiontype_string type_strictly_required | `Описание возврата.`Пример:Описание или комментарий возврата. |  |
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
| Конечная точка | `/v2/payment/bank-transfer/africa/refund` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, по которому необходимо выполнить возврат. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_optional | При выполнении частичного возврата этот параметр является обязательным.`example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_optional | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.При выполнении частичного возврата этот параметр является обязательным.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| descriptiontype_string type_strictly_required | `Описание возврата.`Пример:Описание или комментарий возврата. |  |
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

## Банки для выплаты

### Список банков

account.bank_idВыплата в методе title осуществляется через банки, поддерживающие работу с этим методом. В запросе на выплату в параметревы должны передать идентификатор банка пользователя, который следует использовать для выполнения платежа.

В таблице ниже представлена информация о доступных для выплаты банках в методе title.

Данная таблица со списком банков представлена в ознакомительных целях. Поскольку состав этого списка может меняться, рекомендуем уточнять актуальный список банков, доступных при работе с методом title, с помощью запроса списка банков.

| Банк | Идентификатор |
| --- | --- |
| 3Line Card Management Limited | 85914 |
| 9 Payment Service Bank | 72452 |
| 78 FINANCE COMPANY | 87492 |
| AAA FINANCE AND INVESTMENT COMPANY LIMITED | 87502 |
| AB Microfinance Bank | 72462 |
| Abbey Mortgage Bank | 72472 |
| Above Only Microfinance Bank | 72482 |
| ABU Microfinance Bank | 72492 |
| AbucoopMicrofinance Bank | 82694 |
| Abulesoro Microfinance Bank Ltd | 85934 |
| ACCELEREX NETWORK | 83434 |
| ACCESS BANK NIGERIA | 193 |
| ACCESS MOBILE | 194 |
| Access Yello | 72512 |
| ACCESSMONEY | 83454 |
| Accion Microfinance Bank | 72522 |
| Ada MFB | 82704 |
| Addosser Microfinance Bank | 72532 |
| Adeyemi College Staff Microfinance Bank | 72542 |
| ADVANS LA FAYETTE MFB | 83464 |
| Afekhafe MFB | 85074 |
| AG Mortgage Bank | 72552 |
| AGOSASA MICROFINANCE BANK | 85944 |
| Aku Microfinance Bank | 85964 |
| Akuchukwu Microfinance Bank Ltd | 85974 |
| AL-Barakah Microfinance Bank | 72442 |
| Al-Hayat Microfinance Bank | 72562 |
| Alekun Microfinance Bank | 72572 |
| Alert MFB | 72582 |
| Allworkers Microfinance Bank | 72592 |
| Alpha Kapital Microfinance Bank | 72602 |
| ALTERNATIVE BANK | 78172 |
| Amac MFB | 85104 |
| AMEGY MICROFINANCE BANK | 87522 |
| AMJU Unique Microfinance Bank | 72612 |
| AMML Microfinance Bank | 72622 |
| AMUCHA MFB | 86034 |
| Apeks Microfinance Bank | 72632 |
| APEX TRUST MICROFINANCE BANK | 83474 |
| APPLE MICROFINANCE BANK | 86044 |
| Aspire Microfinance Bank | 86084 |
| ARCA PAYMENTS COMPANY LIMITED | 83484 |
| Arise Microfinance Bank | 72642 |
| Aso Savings and Loans | 196 |
| Assets Matrix MFB | 82714 |
| Astrapolaris Microfinance Bank | 72652 |
| Auchi Microfinance Bank | 72662 |
| AWACASH MICROFINANCE BANK | 87532 |
| BABURA MICROFINANCE BANK | 87542 |
| Baines Credit Microfinance Bank | 72672 |
| Balera Microfinance Bank Ltd | 86124 |
| Balogun FulaniMicrofinance Bank | 82724 |
| Balogun Gambari MFB | 72682 |
| BANC CORP MICROFINANCE BANK | 86134 |
| BERACHAH MICROFINANCE BANK | 87552 |
| Beststar MFB | 86144 |
| BANK OF INDUSTRY FINANCIAL DEPARTMENT | 78202 |
| BANKLY MICROFINANCE BANK | 78242 |
| BAOBAB MICROFINANCE BANK | 78252 |
| Bayero Microfinance Bank | 72692 |
| BC Kash Microfinance Bank | 72702 |
| BETA-ACCESS YELLO | 83494 |
| BIPC MICROFINANCE BANK | 72712 |
| Boctrust Microfinance Bank | 72722 |
| Boji Boji Microfinance Bank | 82734 |
| Borgu MFB | 82744 |
| Borno Renaissance Microfinance bank | 82754 |
| Bosak Microfinance Bank | 72732 |
| Bowen Microfinance Bank | 72742 |
| Brent Mortgage Bank | 72752 |
| BRETHREN MICROFINANCE BANK | 72762 |
| BRIDGEWAY MICROFINANCE BANK | 72772 |
| Brightway Microfinance Bank | 72782 |
| Branch International Finance Company Limited | 86174 |
| Broadview Microfinance Bank Ltd | 86184 |
| BUNDI MICROFINANCE BANK | 87562 |
| Bunkure Microfinance Bank | 87572 |
| Business Support Microfinance Bank | 82764 |
| CANAAN MICROFINANCE BANK | 87582 |
| CAPITALMETRIQ SWIFT MICROFINANCE BANK | 82774 |
| Capricorn Digital | 82784 |
| CAPSTONE MICROFINANCE BANK | 86204 |
| CARBON MICROFINANCE BANK LIMITED | 78212 |
| Cashbridge Microfinance Bank | 86214 |
| CASHCONNECT MICROFINANCE BANK | 86224 |
| CASHRITE MICROFINANCE BANK | 86234 |
| Catland Microfinance Bank | 85254 |
| CBN | 86244 |
| Cedar Microfinance Bank Ltd | 86254 |
| Cellulant | 604 |
| CEMCS Microfinance Bank | 72792 |
| ChamsMobile | 598 |
| Chanelle Bank | 82794 |
| Changan RTS Microfinance Bank | 82804 |
| Chikum Microfinance Bank | 72802 |
| CIT Microfinance Bank | 72812 |
| CitiBank | 587 |
| Citizen Trust Microfinance Bank Ltd | 82814 |
| CloverleafMFB | 82824 |
| COASTLINE MICROFINANCE BANK | 86284 |
| Confidence Microfinance Bank Ltd | 86294 |
| Consistent Trust Microfinance Bank Ltd | 86304 |
| Consumer Microfinance Bank | 72822 |
| Contec Global Infotech Limited (NowNow) | 72832 |
| COOP MORTGAGE BANK | 87592 |
| CORESTEP MICROFINANCE BANK | 78272 |
| Coronation Merchant Bank | 222 |
| County Finance Ltd | 86314 |
| Covenant Microfinance Bank | 600 |
| Credit Afrique Microfinance Bank | 72842 |
| Creditville Microfinance Bank | 86324 |
| Crescent Microfinance bank | 85314 |
| CROWDFORCE | 82834 |
| CS ADVANCE FINANCE COMPANY LIMITED | 87602 |
| Cyberspace Limited | 86334 |
| DAL MICROFINANCE BANK | 87612 |
| Davodani Microfinance Bank | 83504 |
| Daylight Microfinance Bank | 72852 |
| Delta Trust Mortgage bank | 82844 |
| DIAMOND BANK PLC | 197 |
| Dignity Finance | 86344 |
| DIOBU MICROFINANCE BANK | 87622 |
| Doje Microfinance Bank Limited | 83514 |
| DOT MICROFINANCE BANK | 78262 |
| e-Barcs Microfinance Bank | 72862 |
| Eagle Flight MFB | 72872 |
| Eartholeum | 588 |
| EBSU MICROFINANCE Bank | 82854 |
| EcoBank Express Account | 72882 |
| Ecobank Mobile | 198 |
| ECOBANK NIGERIA LIMITED | 199 |
| Edfin MFB | 72892 |
| E-FINANCE | 87632 |
| EK-Reliable Microfinance Bank | 83524 |
| Ekondo MFB | 72902 |
| Emeralds Microfinance Bank | 78282 |
| Empire Trust Microfinance Bank | 72912 |
| ENCO FINANCE COMPANY LTD | 87642 |
| ENTERPRISE BANK LIMITED | 200 |
| ENTITY MICROFINANCE BANK | 87652 |
| Esan Microfinance Bank | 72922 |
| Eso-E Microfinance Bank | 72932 |
| eTranzact | 586 |
| Evangel MFB | 72942 |
| Evergreen MICROFINANCE BANK | 72952 |
| Evib Finance | 83534 |
| Eyowo MFB | 72962 |
| Excellent Microfinance Bank | 86414 |
| FAIRMONEY | 82864 |
| FAST CREDIT | 86424 |
| FAST Microfinance Bank | 72972 |
| FBN MOBILE | 201 |
| FBN Mortgages Limited | 72982 |
| FBNQuest Merchant Bank | 72992 |
| FCMB Easy Account | 73002 |
| FCMB Plc | 73012 |
| FCT MFB | 73022 |
| Federal Polytechnic Nekede Microfinance Bank | 82874 |
| FEDERAL UNIVERSITY DUTSE MICROFINANCE BANK | 73032 |
| FederalPoly NasarawaMFB | 73042 |
| Fedeth MFB | 82884 |
| FETS | 73052 |
| Fewchore Finance Company Limited | 86434 |
| FFS Microfinance Bank | 73062 |
| FIDELITY BANK PLC | 202 |
| Fidelity Mobile | 592 |
| Fidfund Microfinance Bank | 73072 |
| FINATRUST MICROFINANCE BANK | 21381 |
| FINCA MFB | 87662 |
| Firmus MFB | 73082 |
| First Apple Limited | 86474 |
| FIRST BANK PLC | 203 |
| FIRST CITY MONUMENT BANK PLC | 204 |
| First Generation Mortgage Bank | 73092 |
| First Heritage MFB | 82894 |
| First Multiple MFB | 73102 |
| First Option MFB | 73112 |
| First Royal Microfinance Bank | 73122 |
| First Trust Mortgage Bank Plc | 73132 |
| FirstMonie Wallet | 73142 |
| FLOURISH MFB | 86494 |
| Flutterwave Technology Solutions Limited | 73152 |
| Foresight Microfinance bank | 85354 |
| FORTRESS MICROFINANCE BANK | 87672 |
| Fortis Microfinance Bank | 596 |
| FortisMobile | 582 |
| FSDH | 607 |
| Futo Microfinance Bank | 73162 |
| FULLRANGE MICROFINANCE BANK | 78292 |
| GABASAWA MICROFINANCE BANK | 87682 |
| GABSYN MICROFINANCE BANK LIMITED | 83544 |
| Gadol Finance | 83554 |
| Gashua Microfinance Bank | 73172 |
| Gateway Mortgage Bank | 73182 |
| Giant Stride MFB | 82904 |
| GIDAUNIYAR ALHERI MICROFINANCE BANK | 86564 |
| GiGinya Microfinance Bank | 82914 |
| Girei MFB | 85374 |
| GLOBAL INITIATIVE MICROFINANCE BANK | 87692 |
| Globus Bank | 73192 |
| Glory MFB | 73202 |
| GMB Microfinance Bank | 85394 |
| GOMBE MICROFINANCE BANK LTD | 86584 |
| GoMoney | 73212 |
| Good Neighbours Microfinance Bank | 82924 |
| GOODNEWS MICROFINANCE BANK | 73222 |
| Greenacres MFB | 86604 |
| GREENBANK MFB | 86614 |
| Green Energy Microfinance Bank Ltd | 73232 |
| Greenville Microfinance Bank | 73242 |
| Greenwich Merchant Bank | 73252 |
| Grooming Microfinance Bank | 73262 |
| GT MOBILE | 73272 |
| GTBank Mobile Money | 205 |
| GTBANK PLC | 206 |
| GTI Microfinance Bank | 86624 |
| Gwong Microfinance bank | 85414 |
| Hackman Microfinance Bank | 73282 |
| Haggai Mortgage Bank Limited | 73292 |
| Hala MF | 73302 |
| Hasal Micro-finance Bank | 73312 |
| HEADWAY MICROFINANCE BANK | 87702 |
| Hedonmark | 589 |
| HERITAGE BANK | 207 |
| Highland Microfinance Bank | 82944 |
| HomeBase Mortgage | 85424 |
| HopePSB | 82954 |
| IBETOMicrofinance Bank | 82964 |
| IBILE Microfinance Bank | 73322 |
| Ibolo Micorfinance Bank Ltd | 86644 |
| Ibom fadama Microfinance Bank | 82974 |
| IC GLOBALMicrofinance bank | 82984 |
| Igbo-ukwu MFB | 83574 |
| Ijebu-Ife Microfinance Bank Ltd | 86664 |
| IKENNE MFB | 73332 |
| Ikire MFB | 73342 |
| Ilaro Poly Microfinance Bank Ltd | 86684 |
| ILISAN MICROFINANCE BANK | 87712 |
| ILE-OLUJI MFB | 83584 |
| Ilora Microfinance Bank | 85444 |
| Imo State Microfinance Bank | 73352 |
| Imowo Microfinance Bank | 85454 |
| Imperial Homes Mortgage Bank | 601 |
| Infinity Microfinance Bank | 73362 |
| Infinity Trust Mortgage Bank | 73372 |
| Innovectives Kesh | 73382 |
| Intellfin | 73392 |
| Interland MFB | 82994 |
| Interswitch Limited | 86724 |
| IRL Microfinance Bank | 73402 |
| ISALEOYO MICROFINANCE BANK | 86734 |
| Island MFB | 86744 |
| Iyeru Okin Microfinance Bank Ltd | 86804 |
| IYIN EKITI MICROFINANCE BANK | 87722 |
| JAIZ Bank | 591 |
| Jessefield Microfinance Bank | 83004 |
| Jubliee Life | 73412 |
| Kadick Integration Limited | 73422 |
| Kadpoly MICROFINANCE BANK | 73432 |
| KADUPE MICROFINANCE BANK | 87732 |
| Kayvee Microfinance Bank | 86834 |
| KC MICROFINANCE BANK | 87742 |
| KCMB Microfinance Bank | 73442 |
| Kegow | 73452 |
| KEGOW(CHAMSMOBILE) | 83014 |
| KEYSTONE BANK PLC | 208 |
| Kingdom CollegeMicrofinance Bank | 83024 |
| KKU Microfinance Bank | 86854 |
| KOLOMONI MFB | 83594 |
| Kontagora MFB | 73462 |
| KOPO KOPE MICROFINANCE BANK | 87752 |
| Koraypay | 83034 |
| KREDI MONEY MICROFINANCE BANK | 83044 |
| Kuda Micro-finance Bank | 73472 |
| Kwasu MF Bank | 83054 |
| La Fayette Microfinance Bank | 73482 |
| Lagos Building Investment Company | 73492 |
| LandgoldMicrofinance Bank | 83064 |
| Lapo Microfinance Bank | 73502 |
| Lavender Microfinance Bank | 73512 |
| LEADCITY MICROFINANCE BANK | 87762 |
| Leadremit Limited | 86864 |
| LEGEND MICROFINANCE BANK | 86874 |
| Letshego MFB | 73522 |
| Lifegate Microfinance Bank Ltd | 86884 |
| Links Microfinance Bank | 85524 |
| Liquidcrest MFB | 83604 |
| LIVINGTRUST MORTGAGE BANK PLC | 83614 |
| LOVONUS MICROFINANCE BANK | 78302 |
| Lotus Bank | 83074 |
| LOTUS BANK LIMITED | 78182 |
| LUKEFIELD FINANCE COMPANY LIMITED | 87772 |
| M36 | 73532 |
| Mab Allianz MFB | 86914 |
| MABINAS MICROFINANCE BANK | 87782 |
| MACROD MICROFINANCE BANK LIMITED | 87792 |
| MADOBI MICROFINANCE BANK | 86924 |
| Mainland MICROFINANCE BANK | 73542 |
| Mainstreet Micro-finance Bank | 73552 |
| Maintrust MFB | 83084 |
| Malachy Microfinance Bank | 73562 |
| Manny Microfinance bank | 73572 |
| Maritime Microfinance Bank | 83094 |
| MAUTECH Microfinance Bank | 73582 |
| Mayfair MFB | 73592 |
| MayFresh Mortgage Bank | 73602 |
| Medef Microfinance Bank | 86934 |
| Megapraise Microfinance Bank | 73612 |
| MERIDAN MFB | 87802 |
| MICHAEL OKPARA UNIAGRIC MICROFINANCE BANK | 83624 |
| MICROBIZ MICROFINANCE BANK | 86984 |
| Microcred Microfinance Bank | 73622 |
| MICROVIS MICROFINANCE BANK | 86994 |
| Microsystems Investment and Development Limited | 83104 |
| Midland MFB | 85544 |
| MINJIBIR MICROFINANCE BANK | 87812 |
| MINT-FINEX Microfinance Bank | 78232 |
| MKOBO Microfinance Bank | 78222 |
| Mkudi | 608 |
| MOLUSI MICROFINANCE BANK | 87004 |
| MoMo PSB | 83114 |
| Money Master PSB | 83124 |
| Money Trust Micro-finance Bank | 73632 |
| MoneyBox | 590 |
| Moniepoint | 75512 |
| Moremonee Microfinance Bank Limited | 83634 |
| Mozfin Microfinance Bank | 85574 |
| Mutual Benefits Microfinance Bank | 73642 |
| Mutual Trust Microfinance Bank | 73652 |
| Nagarta Microfinance Bank | 73662 |
| Nasarawa Microfinance bank | 83134 |
| Navy Microfinance Bank | 73672 |
| Ndiorah Microfinance Bank | 73682 |
| NetApps Technology Limited | 83144 |
| NEPTUNE MICROFINANCE BANK | 87024 |
| New Dawn Microfinance Bank | 73692 |
| NEW GOLDEN PASTURES MICROFINANCE BANK | 83644 |
| New Prudential Bank | 73702 |
| NEXIM BANK | 83654 |
| NIBSSUSSD PAYMENTS | 83154 |
| Nigeria Prisons Microfinance bank | 83164 |
| NIP Virtual Bank | 594 |
| NIRSAL Microfinance Bank | 73712 |
| Nnew women MFB | 73722 |
| Nomba financial services Limited | 83174 |
| Northquest Finance | 83664 |
| Nova Merchant Bank | 73732 |
| NPF MicroFinance Bank | 602 |
| NSEHE MICROFINANCE BANK | 87822 |
| NSUK MICROFINANCE BANK LTD | 83674 |
| NUTURE MFB | 87064 |
| Nwannegadi MFB | 83184 |
| Oche MFB | 73742 |
| ODOAKPU MICROFINANCE BANK LIMITED | 83684 |
| Ohafia Microfinance Bank | 73752 |
| OHHA MICROFINANCE BANK | 87832 |
| Ojokoro Mfb | 83194 |
| Okpoga Microfinance Bank | 73762 |
| Oke-Aro Oredegbe Microfinance Bank Ltd | 87094 |
| OKENGWE MICROFINANCE BANK | 87842 |
| Okuku Microfinance Bank Ltd | 87104 |
| Olabisi Onabanjo University Microfinance Bank | 73772 |
| OLOFIN OWENA Microfinance Bank | 83204 |
| Olowolagba Microfinance Bank | 85614 |
| Omiye MFB | 73782 |
| Omoluabi Mortgage Bank | 585 |
| One Finance | 73792 |
| OPAY | 75502 |
| OPTIMUS BANK | 83694 |
| Orokam Microfinance Bank Ltd | 87124 |
| Oscotech MFB | 85654 |
| Otech Microfinance Bank Ltd | 87134 |
| Otuo Microfinance Bank Ltd | 87144 |
| OYAN MICROFINANCE BANK | 87852 |
| Pagatech | 606 |
| Page Micro-finance Bank | 73802 |
| PALMPAY | 73812 |
| PARALLEX BANK | 73822 |
| Parkway | 209 |
| ParkWay-ReadyCash | 73832 |
| PARRALEX BANK | 224 |
| PatrickGold Microfinance Bank | 73842 |
| PayAttitude Online | 597 |
| PAYCOM | 210 |
| Paystack Payments Limited | 87164 |
| Peace Microfinance Bank | 85684 |
| PecanTrust Microfinance Bank | 73852 |
| Pennywise Microfinance Bank | 73862 |
| Personal Trust Microfinance Bank | 73872 |
| Pillar MFB | 73882 |
| Platinum Mortgage Bank | 73892 |
| POCKETAPP | 83704 |
| Poder finance | 83714 |
| Polaris bank | 21371 |
| Polyuwanna MFB | 73902 |
| PREMIUM TRUST BANK | 83724 |
| PRESTIGE MICROFINANCE BANK | 87194 |
| Pristine Divitis Microfinance Bank | 83214 |
| Prodigy MFB | 83734 |
| Prospa Capital Microfinance Bank | 83744 |
| PROSPERITY MICROFINANCE BANK | 87862 |
| Providus Bank | 223 |
| Purplemoney MFB | 73912 |
| PYRAMID MICROFINANCE BANK | 87204 |
| Quickfund Microfinance Bank | 73922 |
| Rahama MFB | 73932 |
| Rand Merchant Bank | 73942 |
| RAYYAN Microfinance Bank | 87234 |
| Refuge Mortgage Bank | 73952 |
| Regent Micro-finance Bank | 73962 |
| Rehoboth Microfinance Bank | 85734 |
| Reliance Microfinance Bank | 73972 |
| RenMoney Microfinance Bank | 73982 |
| Rephidim MICROFINANCE BANK | 73992 |
| Resident Fintech Limited | 83224 |
| REVELATION MICROFINANCE BANK | 87872 |
| Richway Microfinance Bank | 74002 |
| RIGO Microfinance Bank | 85744 |
| Rima Growth pathway Microfinance Bank | 83234 |
| Rockshield Microfinance Bank | 87244 |
| ROYAL BLUE MICROFINANCE BANK | 83754 |
| Royal Exchange Microfinance Bank | 74012 |
| Rubies Micro-finance Bank | 74022 |
| Safe Haven MFB | 74032 |
| Safegate Microfinance Bank | 83244 |
| SafeTrust Mortgage Bank | 599 |
| Sagamu Micro-finance Bank | 74042 |
| Sagegrey Finance Limited | 87264 |
| SEAP Microfinance Bank | 85764 |
| SEEDVEST MICROFINANCE BANK | 87274 |
| Seed Capital Micro-finance Bank | 74052 |
| SHALOM MICROFINANCE BANK LTD | 83764 |
| SHERPERD TRUST MICROFINANCE BANK | 87882 |
| Shield Microfinance Bank Ltd | 87284 |
| Shongom Microfinance Bank Ltd | 87294 |
| SIGNATURE BANK LIMITED | 78192 |
| SIMPLE FINANCE LIMITED | 87304 |
| SLS MF Bank | 85784 |
| SmartCash Payment Service bank | 83254 |
| Solid Allianze MFB | 83264 |
| Solidrock Microfinance bank | 85794 |
| SOURCE MICROFINANCE BANK | 87892 |
| Sparkle | 74062 |
| SPAY business | 83274 |
| Spectrum Microfinance Bank | 85804 |
| Stanbic IBTC @ease Wallet | 74072 |
| STANBIC IBTC BANK PLC | 212 |
| Stanbic Mobile | 213 |
| STANDARD CHARTERED BANK NIGERIA LIMITED | 214 |
| Standard MFB | 83284 |
| Stanford Microfinance Bak | 74082 |
| STATESIDE MFB | 87324 |
| STELLAS MICROFINANCE BANK | 87334 |
| STERLING BANK PLC | 215 |
| SIGNATURE BANK LIMITED | 78192 |
| STERLING BANK PLC | 215 |
| Sterling Mobile | 584 |
| Sulsap MFB | 74092 |
| SUNTOP MICROFINANCE | 87902 |
| SunTrust Bank | 603 |
| Support MF Bank | 85844 |
| Supreme Microfinance Bank Ltd | 87344 |
| TagPay | 583 |
| Taj Bank | 74102 |
| TajWallet | 83294 |
| TANADI MFB (CRUST) | 87354 |
| TANGALE MICROFINANCE BANK | 87912 |
| Tangerine Money MFB | 83304 |
| TCF Micro-finance Bank | 74112 |
| TeamApt | 87374 |
| TeasyMobile | 593 |
| TF MICROFINANCE BANK | 83774 |
| THINK FINANCE MICROFINANCE BANK | 87922 |
| Titan Trust Bank | 74122 |
| TITAN-PAYSTACK MICROFINANCE BANK | 83314 |
| Total Trust Microfinance Bank | 87394 |
| TREASURES MICROFINANCE BANK | 87932 |
| Trident Microfinance Bank | 74132 |
| TRINITY FINANCIAL SERVICES LIMITED | 87414 |
| TRIPLEA MICROFINANCE BANK | 87942 |
| Triple A Microfinance bank | 83324 |
| Trust MFB | 74142 |
| TRUSTBANC J6 MICROFINANCE BANK LIMITED | 83784 |
| Trustbond | 610 |
| Trustfund Microfinance Bank | 74152 |
| U AND C MFB | 74162 |
| Uda Microfinance Bank | 87434 |
| Uhuru Microfinance bank | 83334 |
| Ummah Microfinance Bank | 87444 |
| Umuchinemere Procredit Microfinance Bank | 83344 |
| UMUCHUKWU MICROFINANCE BANK | 87952 |
| UNAAB MFB | 74172 |
| Uniben Microfinance Bank | 74182 |
| Unical Microfinance Bank | 74192 |
| UNIFUND MICROFINANCE BANK LIMITED | 87962 |
| Unilorin Microfinance Bank | 87454 |
| UNION BANK OF NIGERIA PLC | 216 |
| UNITED BANK FOR AFRICA PLC | 217 |
| UNITY BANK PLC | 218 |
| UNN MFB | 74202 |
| Uzondu MF Bank | 85904 |
| VALE FINANCE LIMITED | 83804 |
| Vas2nets Limited | 83364 |
| Venture Garden Nigeria Limited | 83814 |
| Verdant Microfinance Bank | 83374 |
| Verite Microfinance Bank | 74212 |
| VFD Micro-finance Bank | 74222 |
| VIRTUE MFB | 83824 |
| Visa Microfinance Bank | 74232 |
| VTNetworks | 595 |
| Wallet MFB | 83834 |
| Waya Microfinance Bank | 87464 |
| WEMA BANK PLC | 219 |
| WetLand Micro-finance Bank | 74242 |
| WinView Bank | 83384 |
| XPRESS PAYMENTS | 83844 |
| XPRESS WALLET | 83854 |
| Xslnce Microfinance Bank | 74252 |
| YCT Microfinance Bank | 83394 |
| Yello Digital financial services | 83404 |
| Yes Microfinance Bank | 74262 |
| Yobe MFB | 83414 |
| ZENITH BANK PLC | 220 |
| ZENITH EAZY WALLET | 83864 |
| ZENITH Mobile | 221 |
| Zikora Microfinance bank | 83424 |
| ZINTERNET - KONGAPAY | 74272 |

| Банк | Идентификатор |
| --- | --- |
| ABSA Bank ZA | 21311 |
| Access Bank ZA | 74282 |
| African Bank ZA | 74292 |
| Albaraka Bank ZA | 74302 |
| Bank Zero ZA | 74312 |
| Bidvest Bank ZA | 74322 |
| Capitec Bank ZA | 21341 |
| Citi Bank ZA | 74332 |
| Discovery Bank ZA | 74342 |
| First National Bank ZA | 438 |
| FNB ZA | 21321 |
| Grindrod ZA | 74352 |
| HSBC Bank ZA | 74362 |
| Investec Bank ZA | 21351 |
| Mercantile Bank ZA | 74372 |
| Nedbank Limited ZA | 2841 |
| Olympus Mobile ZA | 74382 |
| Rand Merchant Bank ZA | 74392 |
| Sasfin Bank ZA | 74402 |
| Standard Bank ZA | 21331 |
| Standard Chartered Bank ZA | 74412 |
| TymeBank ZA | 74422 |
| Ubank Limited ZA | 74432 |

### Запрос списка банков

Состав списка банков может меняться, поэтому мы рекомендуем уточнять актуальный список банков, доступных 
    при работе с методом title, с помощью запроса со следующим форматом и параметрами:

Вот пример данных из запроса списка банков, поддерживающих работу с методом title.

| **HTTP-метод запроса** | POST |
| --- | --- |
| **Формат тела запроса** | JSON |
| **Конечная точка** | `/v2/info/banks/bank-transfer/africa/payout/list` |
| **Полная спецификация конечной точки** |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `123`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | Если платеж еще не сформирован, в качестве идентификатора платежа в запросе следует указать                              произвольное уникальное значение.`payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| paymenttype_object type_strictly_required | amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см..`example_amount`Пример: example_amount_in_majors example_currency передается как |
| currencytype_string type_strictly_required | `example_currency`Пример:Код валюты выплаты в формате ISO-4217 alpha-3. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                              Gate:. |  |  |

---

## Bank transfers in Africa -Выплата

При выплате 
пользователь инициирует платеж, после чего ожидает зачисление средств на свой счет. Непосредственное участие пользователя в процессе проведения выплаты не требуется.

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Выплата |  |  |  |

| **Регионы использования** | country_NG, country_ZA |
| --- | --- |
| **Валюты выплаты** | references/ru/currencies/NGN.ditareferences/ru/currencies/ZAR.dita, |
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

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_pp_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, на странице оплаты пользователю отобразятся поля, где он сможет самостоятельно ввести недостающую информацию. Подробнее о предоставлении таких параметров см..type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |
| --- | --- |
| Параметр | Описание |
| project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |
| customer_idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| customer_first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |
| customer_last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |
| customer_emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |
| customer_phonetype_required✱type_string | `2712345678`Пример:Номер телефона пользователя, без знака +, без пробелов и знаков препинания. |
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

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_pp_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, на странице оплаты пользователю отобразятся поля, где он сможет самостоятельно ввести недостающую информацию. Подробнее о предоставлении таких параметров см..type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |
| --- | --- |
| Параметр | Описание |
| project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |
| customer_idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| customer_first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |
| customer_last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |
| customer_emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |
| customer_phonetype_required✱type_string | `123456789`Пример:Номер телефона пользователя без знака +, только цифры, без пробелов и знаков препинания. |
| identify_doc_numbertype_required✱type_string | `1234567891012`Пример:Номер документа, удостоверяющего личность пользователя. Необходим при выполнении оплаты в Южной Африке. Это может быть номер паспорта (1 буква и 8 цифр) или идентификационный номер пользователя (13 цифр). |
| payment_currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| payment_amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |
| force_payment_methodtype_string type_optional | force_payment_method`force_pm`ru_pp__preselectingps.ditaЧтобы пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода, добавьте в запрос параметрсо значением. (Подробнее о предварительном выборе метода см..)`force_payment_method: 'force_pm'`Пример:Параметр, позволяющий пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода. |
| account_bank_idtype_integer type_optional | ru_pm_africa_bt_purchase_redirect_banks.ditaaccount_bank_idforce_payment_method`12345`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков, см.. Чтобы пропустить страницу выбора банка и принудительно выбрать конкретный банк, добавьте в запрос параметрдополнительно к параметру. Уточняйте у курирующего менеджера Some Platform актуальность этого параметра для вас. |
| account_typetype_required✱type_string | `chequesavingstransmission`Возможные значения:`savings`Пример:`cheque`— текущий счет;`savings`— сберегательный счет;`transmission`— счет, используемый для перевода средств между финансовыми институтами.Тип счета пользователя. Возможные значения:— для текущего счета,— для сберегательного счета,— для счета, используемого для перевода средств между финансовыми институтами. |
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

## Bank transfers in Africa -Оплата 2: с отображением реквизитов

При оплате 
пользователь следует шагам платежной инструкции, отображаемой на странице оплаты или в вашей системе (при работе через Gate).

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата |  |  |  |
| Возврат |  |  |  |

| **Регионы использования** |  |
| --- | --- |
| **Валюты оплаты** | references/ru/currencies/NGN.dita |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**references/ru/currencies/NGN.ditaДоступность возвратов уточняйте у вашего курирующего менеджера в Some Platform. Минимальная сумма возврата составляет 100,00. Возвраты для платежей в других валютах временно не выполняются.Реквизиты для оплаты должны использоваться только один раз. Для повторной оплаты пользователь должен инициировать новый платеж.Платеж отклоняется, если пользователь не совершит оплату в течение 1 часа с момента инициирования платежа. |  |

---

## Bank transfers in Africa -Оплата 1: перенаправление в сервис провайдера

При оплате 
пользователь перенаправляется в сервис provider_service, где выполняет оплату.

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата |  |  |  |
| Возврат |  |  |  |

| **Регионы использования** | country_NG, country_ZA |
| --- | --- |
| **Валюты оплаты** | references/ru/currencies/NGN.ditareferences/ru/currencies/ZAR.dita, |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**references/ru/currencies/NGN.ditaДоступность возвратов уточняйте у вашего курирующего менеджера в Some Platform. Минимальная сумма возврата составляет 100,00. Возвраты для платежей в других валютах временно не выполняются.Реквизиты для оплаты должны использоваться только один раз. Для повторной оплаты пользователь должен инициировать новый платеж.Время проведения платежа ограничено. Дата и время, до которого нужно завершить платеж, отображается пользователю. Если пользователь не выполнит необходимые для оплаты действия до этого срока, то платеж отклоняется. |  |

### Банки для оплаты

#### Список банков

account.bank_idОплата в методе title осуществляется через банки, поддерживающие работу с этим методом. В запросе на оплату в параметревы должны передать идентификатор банка пользователя, который следует использовать для выполнения платежа.

В таблице ниже представлена информация о доступных для оплаты банках в методе title.

Данная таблица со списком банков представлена в ознакомительных целях. Поскольку состав этого списка может меняться, рекомендуем уточнять актуальный список банков, доступных при работе с методом title, с помощью запроса списка банков.

| Банк | Идентификатор |
| --- | --- |
| ABSA Bank ZA | 21311 |
| African Bank ZA | 74292 |
| Bidvest Bank ZA | 74322 |
| Capitec Bank ZA | 21341 |
| First National Bank ZA | 438 |
| Investec Bank ZA | 21351 |
| Nedbank Limited ZA | 2841 |
| Standard Bank ZA | 21331 |
| Tyme Bank ZA | 74422 |

| Банк | Идентификатор |
| --- | --- |
| OPAY | 75502 |
| PALMPAY | 73812 |

#### Запрос списка банков

Далее представлена информация, необходимая для создания и отправки запроса на получение актуального списка банков, поддерживаемых в методе title.

Вот пример данных из запроса списка банков, поддерживающих работу с методом title.

| **HTTP-метод запроса** | POST |
| --- | --- |
| **Формат тела запроса** | JSON |
| **Конечная точка** | `/v2/info/banks/bank-transfer/africa/sale/list` |
| **Полная спецификация конечной точки** |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `123`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | Если платеж еще не сформирован, в качестве идентификатора платежа в запросе следует указать произвольное уникальное значение.`payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| paymenttype_object type_strictly_required | amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см..`example_amount`Пример: example_amount_in_majors example_currency передается как |
| currencytype_string type_strictly_required | `example_currency`Пример:Код валюты оплаты в формате ISO-4217 alpha-3. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации Gate:. |  |  |

---

## title

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата 1 |  |  |  |
| Возврат 1 |  |  |  |
| Оплата 2 |  |  |  |
| Возврат 2 |  |  |  |
| Выплата |  |  |  |

### Сценарий платежа

Оплата выполняется по одному из следующих сценариев:

Уточняйте у курирующего менеджера Some Platform, какой из сценариев оплаты актуален для вас.

выплатеПрипользователь инициирует платеж, после чего ожидает зачисление средств на свой счет. Непосредственное участие пользователя в процессе проведения выплаты не требуется.

- Оплата 1— пользователь перенаправляется в сервис provider_service, где выполняет оплату.
- Оплата 2— пользователь следует шагам платежной инструкции, отображаемой на странице оплаты или в вашей системе (при работе через Gate).

| title — это платежный метод, который позволит вам принимать оплату от пользователей, а также выплачивать пользователям денежные средства. Пользователи выполняют оплату с использованием банковских переводов.Платежный метод title позволяет принимать от пользователей оплату, используя Payment Widget и Gate, а также проводить пользователям возврат и выплату через Gate и Dashboard.здесьЗагрузить логотип этого платежного метода в векторном формате можно. |  |
| --- | --- |

| Тип платежного метода | Банковские переводы |
| --- | --- |
| Регионы использования | country_NG, country_ZA |
| Валюты платежей | references/ru/currencies/NGN.ditareferences/ru/currencies/ZAR.dita, |
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
| Конечная точка | `/v2/payment/bank-transfer/africa/payout` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |  |
| --- | --- | --- |
| Объект | Объект/Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| customertype_object type_strictly_required | idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| ip_addresstype_string type_strictly_required | `198.51.100.47`Пример:IP-адрес устройства пользователя. |  |
| first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |  |
| last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |  |
| emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |  |
| phonetype_strictly_required✱type_string | `123456789`Пример:Номер телефона пользователя без знака +, только цифры, без пробелов и знаков препинания. |  |
| identifytype_strictly_required✱type_object | doc_numbertype_strictly_required✱type_string | `1234567891012`Пример:Номер документа, удостоверяющего личность пользователя. Необходим при выполнении оплаты в Южной Африке. Это может быть номер паспорта (1 буква и 8 цифр) или идентификационный номер пользователя (13 цифр). |
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `NGNZAR``0123456789`Пример:Номер счета пользователя, только цифры, без пробелов или знаков препинания. Если валюта платежа, то номер счета должен содержать 10 цифр, если валюта, то номер счета должен содержать 10 или 11 цифр. |
| typetype_strictly_required✱type_string | Возможные значения:`savings`Пример:`cheque`— текущий счет;`savings`— сберегательный счет;`transmission`— счет, используемый для перевода средств между финансовыми институтами.Тип счета пользователя. |  |
| bank_idtype_integer type_strictly_required | ru_pm_africa_bt_payout_banks.dita`12345`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков см.. |  |
| security_codetype_strictly_required✱type_string | `1234567890`Пример:Банковский проверочный номер пользователя, состоящий из 11 цифр (BVN). Необходим при выполнении выплаты в Нигерии. |  |
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
2. Отобразите пользователю инструкцию для оплаты.
3. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `/v2/payment/bank-transfer/africa/sale` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_gate_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, платежная платформа отправит вам оповещение со списком недостающих параметров. Подробнее о таких случаях см. раздел.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |  |
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
| phonetype_required✱type_string | `2712345678`Пример:Номер телефона пользователя, без знака +, без пробелов и знаков препинания. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

### Отображение платежной инструкции пользователю

Получив и обработав запрос на оплату, платежная платформа направит вам оповещение (callback) с платежной инструкцией для отображения пользователю.

display_dataЧтобы отобразить пользователю платежную инструкцию, используйте информацию из массива.

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
        "title": "receiver_name",
        "data": "John Doe"
    },
    {
        "type": "add_info",
        "title": "receiver_account",
        "data": "1122334455667788"
    },
    {
        "type": "add_info",
        "title": "bank_name",
        "data": "BANK"
    },
    {
        "type": "add_info",
        "title": "expired_timestamp",
        "data": "3600"
    }
]
```

| Элемент | Описание |
| --- | --- |
| {     "type": "add_info",     "title": "amount",     "data": "10000" } | `10000`Пример:Сумма платежа в дробных единицах валюты. |
| {     "type": "add_info",     "title": "receiver_name",     "data": "John Doe" } | `John Doe`Пример:Полное имя получателя перевода. |
| {     "type": "add_info",     "title": "receiver_account",     "data": "1122334455667788" } | `1122334455667788`Пример:Номер счета получателя перевода. |
| {     "type": "add_info",     "title": "bank_name",     "data": "BANK" } | `BANK`Пример:Название банка получателя перевода. |
| {     "type": "add_info",     "title": "expired_timestamp",     "data": "3600" } | `3600`Пример:Момент истечения срока действия платежа. Указывается в формате Unix-времени. |

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

## Оплата через Gate

### Общая информация

Чтобы выполнить оплату через Gate с использованием метода title:

Полная схема оплаты с использованием метода title выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Перенаправьте пользователя в сервис provider_service.
3. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `/v2/payment/bank-transfer/africa/sale` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_gate_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, платежная платформа отправит вам оповещение со списком недостающих параметров. Подробнее о таких случаях см. раздел.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |  |
| --- | --- | --- |
| Объект | Объект/Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| customertype_object type_strictly_required | idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| ip_addresstype_string type_strictly_required | `198.51.100.47`Пример:IP-адрес устройства пользователя. |  |
| first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |  |
| last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |  |
| emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |  |
| phonetype_required✱type_string | `123456789`Пример:Номер телефона пользователя без знака +, только цифры, без пробелов и знаков препинания. |  |
| identifytype_required✱type_object | doc_numbertype_required✱type_string | `1234567891012`Пример:Номер документа, удостоверяющего личность пользователя. Необходим при выполнении оплаты в Южной Африке. Это может быть номер паспорта (1 буква и 8 цифр) или идентификационный номер пользователя (13 цифр). |
| accounttype_strictly_required✱type_object | typetype_required✱type_string | Возможные значения:`savings`Пример:`cheque`— текущий счет;`savings`— сберегательный счет;`transmission`— счет, используемый для перевода средств между финансовыми институтами.Тип счета пользователя. |
| bank_idtype_strictly_required✱type_integer | ru_pm_africa_bt_purchase_redirect_banks.dita`12345`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков см.. |  |
| security_codetype_strictly_required✱type_string | `12345678910`Пример:Банковский проверочный номер пользователя, состоящий из 11 цифр (BVN). Необходим при выполнении оплаты в Нигерии. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| return_urltype_object type_strictly_required | returntype_string type_strictly_required | successdeclinereturn_url`https://example.com/return/`Пример:URL-адрес, куда нужно перенаправить пользователя в случае прерывания оплаты пользователем до ее завершения. Этот же адрес используется, если не заданы параметрыи. Если не задан ни один из параметров объекта, то Gate по умолчанию перенаправляет пользователя по URL-адресу, указанному в вашем проекте в Some Platform. |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

### Перенаправление пользователей

Получив и обработав запрос на оплату, платежная платформа направит вам оповещение (callback) с данными для перенаправления пользователя в сервис provider_service.

redirect_dataЧтобы перенаправить пользователя, используйте значения следующих параметров, находящихся в объекте:

Вот пример фрагмента оповещения, содержащего данные для перенаправления пользователя:

- url— адрес для перенаправления пользователя;
- body— данные для отправки в теле запроса;
- method`POSTGET`— метод запроса HTML-страницы сайта (например,или);
- encrypted— это служебный параметр. Игнорируйте содержащиеся в нем данные.

```json
"redirect_data": {
    "method": "GET",
    "body": [],
    "encrypted": [],
    "url": "https://example.com/redirect"
}
```

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
| Конечная точка | `/v2/payment/bank-transfer/africa/refund` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, по которому необходимо выполнить возврат. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_optional | При выполнении частичного возврата этот параметр является обязательным.`example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_optional | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.При выполнении частичного возврата этот параметр является обязательным.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| descriptiontype_string type_strictly_required | `Описание возврата.`Пример:Описание или комментарий возврата. |  |
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
| Конечная точка | `/v2/payment/bank-transfer/africa/refund` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, по которому необходимо выполнить возврат. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_optional | При выполнении частичного возврата этот параметр является обязательным.`example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_optional | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.При выполнении частичного возврата этот параметр является обязательным.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| descriptiontype_string type_strictly_required | `Описание возврата.`Пример:Описание или комментарий возврата. |  |
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

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_pp_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, на странице оплаты пользователю отобразятся поля, где он сможет самостоятельно ввести недостающую информацию. Подробнее о предоставлении таких параметров см..type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |
| --- | --- |
| Параметр | Описание |
| project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |
| customer_idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| customer_first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |
| customer_last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |
| customer_emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |
| customer_phonetype_required✱type_string | `2712345678`Пример:Номер телефона пользователя, без знака +, без пробелов и знаков препинания. |
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

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_pp_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, на странице оплаты пользователю отобразятся поля, где он сможет самостоятельно ввести недостающую информацию. Подробнее о предоставлении таких параметров см..type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |
| --- | --- |
| Параметр | Описание |
| project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |
| customer_idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| customer_first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |
| customer_last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |
| customer_emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |
| customer_phonetype_required✱type_string | `123456789`Пример:Номер телефона пользователя без знака +, только цифры, без пробелов и знаков препинания. |
| identify_doc_numbertype_required✱type_string | `1234567891012`Пример:Номер документа, удостоверяющего личность пользователя. Необходим при выполнении оплаты в Южной Африке. Это может быть номер паспорта (1 буква и 8 цифр) или идентификационный номер пользователя (13 цифр). |
| payment_currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| payment_amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |
| force_payment_methodtype_string type_optional | force_payment_method`force_pm`ru_pp__preselectingps.ditaЧтобы пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода, добавьте в запрос параметрсо значением. (Подробнее о предварительном выборе метода см..)`force_payment_method: 'force_pm'`Пример:Параметр, позволяющий пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода. |
| account_bank_idtype_integer type_optional | ru_pm_africa_bt_purchase_redirect_banks.ditaaccount_bank_idforce_payment_method`12345`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков, см.. Чтобы пропустить страницу выбора банка и принудительно выбрать конкретный банк, добавьте в запрос параметрдополнительно к параметру. Уточняйте у курирующего менеджера Some Platform актуальность этого параметра для вас. |
| account_typetype_required✱type_string | `chequesavingstransmission`Возможные значения:`savings`Пример:`cheque`— текущий счет;`savings`— сберегательный счет;`transmission`— счет, используемый для перевода средств между финансовыми институтами.Тип счета пользователя. Возможные значения:— для текущего счета,— для сберегательного счета,— для счета, используемого для перевода средств между финансовыми институтами. |
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

