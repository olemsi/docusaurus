# Оплата через Gate

## Общая информация

Чтобы выполнить оплату через Gate с использованием метода title:

Полная схема оплаты с использованием метода title выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Получите от платежной платформы оповещение (callback) с информацией о том, какие данные вы должны передать платежной платформе.
3. Отправьте запрос с этими данными платежной платформе Some Platform.
4. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

## Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка |  |

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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `233123456789`Пример:Номер телефона пользователя для оплаты с использованием счета мобильной связи. Указывается с кодом страны, без знаков пунктуации и специальных символов. |
| service_providertype_string type_strictly_required | ru_pm_mobcommerce_africa_h2h_purchase_message.dita#ru_pm_mobcommerce_africa_h2h_purchase_message/mobile_operators_list_purchase_message`AIRTELTIGO`Пример:Идентификатор оператора связи пользователя. Подробнее о том, как получить список поддерживаемых операторов связи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением**основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как`105701050010600`references/ru/currencies/GHS.ditareferences/ru/currencies/GHS.ditaВ запросах передавайте только целочисленную сумму платежа. Так, например, вместо 105,70 ()передавайте в запросе 105,00 () или 106,00 ().Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

## OTP-кодаОтправкав платежную платформу

OTP-кодВведенный пользователемвы должны отправить в платежную платформу в новом запросе. Далее приведены основные характеристики и параметры 
     такого запроса.

OTP-кодаВот пример данных из запроса для передачи в платежную платформу:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе. |  |  |  |
| --- | --- | --- | --- |
| Объект | Объект/Параметр | Описание |  |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |  |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |  |
| additional_datatype_object type_strictly_required | additional_datatype_object type_strictly_required | approval_codetype_string type_strictly_required | `123456`Пример:OTP-код, который пользователь получает в сообщении от оператора связи. |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |  |

Чтобы оператор связи своевременно подтвердил платеж, отправляйте платежной платформе запрос с OTP-кодом в течение 80 или 90 секунд с момента получения от платежной платформы оповещения о необходимости передачи OTP-кода (точный срок действия OTP-кода для вас уточняйте у своего курирующего менеджера в Some Platform).

При отправке этого запроса проведение платежа может продолжаться следующим образом:

Если OTP-код отправлен после истечения 80 или 90 секунд, то возможны следующие варианты:

## Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат оплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

accountnumbertypeВ платежном методе title в оповещении дополнительно передается объектс параметрамии, в которых содержится информация о номере телефона и операторе связи пользователя.

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
2. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |  |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `233123456789`Пример:Номер телефона пользователя для оплаты с использованием счета мобильной связи. Указывается с кодом страны, без знаков пунктуации и специальных символов. |
| service_providertype_strictly_required✱type_string | ru_pm_mobcommerce_africa_h2h_purchase_ussd.dita#ru_pm_mobcommerce_africa_h2h_purchase_ussd/mobile_operators_list_purchase_ussd`MTN`Пример:Идентификатор оператора связи пользователя. Подробнее о том, как получить список поддерживаемых операторов связи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением**основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как`105701050010600`references/ru/currencies/GHS.ditareferences/ru/currencies/GHS.ditaВ запросах передавайте только целочисленную сумму платежа. Так, например, вместо 105,70 ()передавайте в запросе 105,00 () или 106,00 ().Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

### Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат оплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

accountnumbertypeВ платежном методе title в оповещении дополнительно передается объектс параметрамии, в которых содержится информация о номере телефона и операторе связи пользователя.

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
| Конечная точка |  |

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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `233123456789`Пример:Номер телефона пользователя для оплаты с использованием счета мобильной связи. Указывается с кодом страны, без знаков пунктуации и специальных символов. |
| service_providertype_string type_strictly_required | ru_pm_mobcommerce_africa_h2h_purchase_redirect.dita#ru_pm_mobcommerce_africa_h2h_purchase_redirect/mobile_operators_list_purchase_redirect`WAVE`Пример:Идентификатор оператора связи пользователя. Подробнее о том, как получить список поддерживаемых операторов связи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `XOF`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | Сумма платежа в основных единицах валюты, без дробной части.*в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробелов*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты есть дробные единицы (то есть количество разрядов дробных единиц не равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`100`Пример: 100 XOF передается как |  |
| return_urltype_object type_optional | successtype_string type_optional | `https://example.com/success/`Пример:URL-адрес, на который нужно перенаправить пользователя в случае успешного завершения оплаты. |
| declinetype_string type_optional | `https://example.com/decline/`Пример:URL-адрес, на который нужно перенаправить пользователя в случае отклонения оплаты. |  |
| returntype_string type_optional | successdeclinereturn_url`https://example.com/return/`Пример:URL-адрес, куда нужно перенаправить пользователя в случае прерывания оплаты пользователем до ее завершения. Этот же адрес используется, если не заданы параметрыи. Если не задан ни один из параметров объекта, то Gate по умолчанию перенаправляет пользователя по URL-адресу, указанному в вашем проекте в Some Platform. |  |
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

accountnumbertypeВ платежном методе title в оповещении дополнительно передается объектс параметрамии, в которых содержится информация о номере телефона и операторе связи пользователя.

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
| Конечная точка |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |  |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `233123456789`Пример:Номер телефона пользователя, на счет мобильной связи которого совершается выплата. Указывается с кодом страны, без знаков пунктуации и специальных символов. |
| service_providertype_strictly_required✱type_string | ru_pm_mobcommerce_africa_h2h_payout.dita#ru_pm_mobcommerce_africa_h2h_payout/mobile_operators_list_payout`AIRTELTIGO`Пример:Идентификатор оператора связи пользователя. Подробнее о том, как получить список поддерживаемых операторов связи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением**основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как`105701050010600`references/ru/currencies/GHS.ditareferences/ru/currencies/GHS.ditaВ запросах передавайте только целочисленную сумму платежа. Так, например, вместо 105,70 ()передавайте в запросе 105,00 () или 106,00 ().Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |

### Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат выплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

accountnumbertypeВ платежном методе title в оповещении дополнительно передается объектс параметрамии, в которых содержится информация о номере телефона и операторе связи пользователя.

Вот пример тела оповещения с информацией об успешно выполненной выплате:

Вот пример тела оповещения с информацией об отклоненной выплате.

### Дополнительные материалы

- ru_gate_interaction_scheme.dita
- ru_gate_payment_model.dita
- ru_gate_authentication.dita
- ru_gate_statuses_and_response_codes.dita

---

## «Мобильные деньги в странах Африки (Host2host)» -Выплата

При выплате 
пользователь инициирует платеж, после чего ожидает зачисление средств на свой счет. Непосредственное участие пользователя в процессе проведения выплаты не требуется.

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Выплата |  |  |  |

### Поддержка со стороны операторов связи

Выплата в методе title осуществляется через сервисы операторов связи, перечисленных в таблице ниже:

Данная таблица со списком операторов связи представлена в ознакомительных целях. Чтобы уточнить, какие операторы связи сейчас доступны для проведения выплаты, отправьте платежной платформе запрос со следующим форматом и параметрами:

Вот пример данных из запроса списка операторов связи, поддерживающих работу с методом title.

| Оператор связи | Идентификатор | Страны | Валюты |
| --- | --- | --- | --- |
| Africell | `AFRICELL` | country_CD | references/ru/currencies/CDF.dita |
| Airtel | `AIRTEL` | country_CD, country_ZM, country_KE, country_RW, country_TZ, country_UG | references/ru/currencies/CDF.ditareferences/ru/currencies/KES.ditareferences/ru/currencies/RWF.ditareferences/ru/currencies/TZS.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/ZMW.dita,,,,, |
| AirtelTigo | `AIRTELTIGO` | country_GH | references/ru/currencies/GHS.dita |
| Freemoney | `FREEMONEY` | country_SN | references/ru/currencies/XOF.dita |
| HaloPesa | `HALOPESA` | country_TZ | references/ru/currencies/TZS.dita |
| Moov | `MOOV` | country_BJ, country_BF, country_CI, country_TG | references/ru/currencies/XOF.dita |
| MTN | `MTN` | country_BJ, country_GH, country_ZM, country_CM, country_CI, country_RW, country_UG | references/ru/currencies/GHS.ditareferences/ru/currencies/RWF.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.ditareferences/ru/currencies/ZMW.dita,,,,, |
| M-Pesa | `MPESA` | country_KE | references/ru/currencies/KES.dita |
| Orange | `ORANGE` | country_BF, country_CM, country_CD, country_CI, country_SN | references/ru/currencies/CDF.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.dita,, |
| Telecel | `TELECEL` | country_GH | references/ru/currencies/GHS.dita |
| Vodacom | `VODACOM` | country_CD, country_TZ | references/ru/currencies/CDF.ditareferences/ru/currencies/TZS.dita, |
| Wave | `WAVE` | country_CI, country_SN | references/ru/currencies/XOF.dita |
| Yas | `YAS` | country_TZ, country_TG | references/ru/currencies/TZS.ditareferences/ru/currencies/XOF.dita, |
| Zamtel | `ZAMTEL` | country_ZM | references/ru/currencies/ZMW.dita |

| **HTTP-метод запроса** | POST |
| --- | --- |
| **Формат тела запроса** | JSON |
| **Конечная точка** | `/v2/info/mobile/payout/list` |
| **Полная спецификация конечной точки** | request-info-mobile-list |

| Объект | Параметр | Описание |
| --- | --- | --- |
| general | project_idtype_integer type_strictly_required | Идентификатор проекта, полученный от Some Platform при интеграции. |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |

| **Регионы использования** | country_BF, country_BJ, country_CD, country_CG, country_CI, country_CM, country_GH, country_GM, country_KE, country_RW, country_SN, country_TG, country_TZ, country_UG, country_ZM |
| --- | --- |
| **Валюты выплаты** | references/ru/currencies/CDF.ditareferences/ru/currencies/GHS.ditareferences/ru/currencies/GMD.ditareferences/ru/currencies/KES.ditareferences/ru/currencies/RWF.ditareferences/ru/currencies/TZS.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.ditareferences/ru/currencies/ZMW.dita,,,,,,,,, |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**references/ru/currencies/RWF.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.ditareferences/ru/currencies/RWF.dita`1000`Например, при оплате на 1000в запросе нужно передавать значение.ru_currency_codes.ditaЧисло дробных единиц для различных валют указано в разделе.Суммы в запросах с использованием валют,,,указываются в основных единицах валюты в соответствии со стандартом ISO-4217 alpha-3.references/ru/currencies/XOF.ditaДля валютыв некоторых случаях сумма выплаты в запросе должна быть кратна 5.`105701050010600`references/ru/currencies/GHS.ditareferences/ru/currencies/GHS.ditaВ запросах передавайте только целочисленную сумму платежа. Так, например, вместо 105,70 ()передавайте в запросе 105,00 () или 106,00 (). |  |

---

## «Мобильные деньги в странах Африки (Host2host)» -Оплата 3: подтверждение с помощью кода из сообщения

При оплате 
пользователь получает от сервиса provider_service сообщение с кодом, который он использует для подтверждения оплаты.

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата |  |  |  |

### Поддержка со стороны операторов связи

Оплата в методе title осуществляется через сервисы операторов связи, перечисленных в таблице ниже:

Данная таблица со списком операторов связи представлена в ознакомительных целях. Чтобы уточнить, какие операторы связи сейчас доступны для проведения оплаты, отправьте платежной платформе запрос со следующим форматом и параметрами:

Вот пример данных из запроса списка операторов связи, поддерживающих работу с методом title.

| Оператор связи | Идентификатор | Страны | Валюты |
| --- | --- | --- | --- |
| AirtelTigo | `AIRTELTIGO` | country_GH | references/ru/currencies/GHS.dita |
| Orange | `ORANGE` | country_CD, country_CM, country_CI | references/ru/currencies/CDF.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.dita,, |

| **HTTP-метод запроса** | POST |
| --- | --- |
| **Формат тела запроса** | JSON |
| **Конечная точка** | `/v2/info/mobile/sale/list` |
| **Полная спецификация конечной точки** | request-info-mobile-list |

| Объект | Параметр | Описание |
| --- | --- | --- |
| general | project_idtype_integer type_strictly_required | Идентификатор проекта, полученный от Some Platform при интеграции. |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |

| **Регионы использования** | country_CD, country_CI, country_CM, country_GH |
| --- | --- |
| **Валюты оплаты** | references/ru/currencies/CDF.ditareferences/ru/currencies/GHS.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.dita,,, |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**references/ru/currencies/XAF.ditareferences/ru/currencies/XOF.ditareferences/ru/currencies/XAF.dita`1000`Например, при оплате на 1000в запросе нужно передавать значение.ru_currency_codes.ditaЧисло дробных единиц для различных валют указано в разделе.Суммы в запросах с использованием валют,указываются в основных единицах валюты в соответствии со стандартом ISO-4217 alpha-3.`105701050010600`references/ru/currencies/GHS.ditareferences/ru/currencies/GHS.ditaВ запросах передавайте только целочисленную сумму платежа. Так, например, вместо 105,70 ()передавайте в запросе 105,00 () или 106,00 (). |  |

---

## «Мобильные деньги в странах Африки (Host2host)» -Оплата 1: подтверждение через USSD

При оплате 
пользователь подтверждает оплату посредством USSD сообщения, получаемого от сервиса provider_service.

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата |  |  |  |

### Поддержка со стороны операторов связи

Оплата в методе title осуществляется через сервисы операторов связи, перечисленных в таблице ниже:

Данная таблица со списком операторов связи представлена в ознакомительных целях. Чтобы уточнить, какие операторы связи сейчас доступны для проведения оплаты, отправьте платежной платформе запрос со следующим форматом и параметрами:

Вот пример данных из запроса списка операторов связи, поддерживающих работу с методом title.

| Оператор связи | Идентификатор | Страны | Валюты |
| --- | --- | --- | --- |
| Africell | `AFRICELL` | country_CD | references/ru/currencies/CDF.dita |
| Airtel | `AIRTEL` | country_CD, country_KE, country_RW, country_TZ, country_UG, | references/ru/currencies/CDF.ditareferences/ru/currencies/KES.ditareferences/ru/currencies/RWF.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/TZS.dita,,,, |
| HaloPesa | `HALOPESA` | country_TZ | references/ru/currencies/TZS.dita |
| MTN | `MTN` | country_GH, country_CM, country_CI, country_RW, country_UG | references/ru/currencies/GHS.ditareferences/ru/currencies/RWF.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.dita,,,, |
| Moov | `MOOV` | country_CI | references/ru/currencies/XOF.dita |
| M-Pesa | `MPESA` | country_KE | references/ru/currencies/KES.dita |
| Telecel | `TELECEL` | country_GH | references/ru/currencies/GHS.dita |
| Vodacom | `VODACOM` | country_TZ | references/ru/currencies/TZS.dita |
| Yas | `YAS` | country_TZ | references/ru/currencies/TZS.dita |

| **HTTP-метод запроса** | POST |
| --- | --- |
| **Формат тела запроса** | JSON |
| **Конечная точка** | `/v2/info/mobile/sale/list` |
| **Полная спецификация конечной точки** | request-info-mobile-list |

| Объект | Параметр | Описание |
| --- | --- | --- |
| general | project_idtype_integer type_strictly_required | Идентификатор проекта, полученный от Some Platform при интеграции. |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |

| **Регионы использования** | country_CD, country_CI, country_CM, country_GH, country_KE, country_RW, country_TZ, country_UG |
| --- | --- |
| **Валюты оплаты** | references/ru/currencies/CDF.ditareferences/ru/currencies/GHS.ditareferences/ru/currencies/KES.ditareferences/ru/currencies/RWF.ditareferences/ru/currencies/TZS.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.dita,,,,,,, |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**references/ru/currencies/RWF.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies/XOF.ditareferences/ru/currencies/RWF.dita`1000`Например, при оплате на 1000в запросе нужно передавать значение.ru_currency_codes.ditaЧисло дробных единиц для различных валют указано в разделе.Суммы в запросах с использованием валют,,,указываются в основных единицах валюты в соответствии со стандартом ISO-4217 alpha-3.`105701050010600`references/ru/currencies/GHS.ditareferences/ru/currencies/GHS.ditaВ запросах передавайте только целочисленную сумму платежа. Так, например, вместо 105,70 ()передавайте в запросе 105,00 () или 106,00 (). |  |

---

## «Мобильные деньги в странах Африки (Host2host)» -Оплата 2: перенаправление в сервис провайдера

При оплате 
пользователь перенаправляется в сервис provider_service, где выполняет оплату.

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата |  |  |  |

### Поддержка со стороны операторов связи

Оплата в методе title осуществляется через сервисы операторов связи, перечисленных в таблице ниже:

Данная таблица со списком операторов связи представлена в ознакомительных целях. Чтобы уточнить, какие операторы связи сейчас доступны для проведения оплаты, отправьте платежной платформе запрос со следующим форматом и параметрами:

Вот пример данных из запроса списка операторов связи, поддерживающих работу с методом title.

| Оператор связи | Идентификатор | Страны | Валюты |
| --- | --- | --- | --- |
| Wave | `WAVE` | country_CI | references/ru/currencies/XOF.dita |

| **HTTP-метод запроса** | POST |
| --- | --- |
| **Формат тела запроса** | JSON |
| **Конечная точка** | `/v2/info/mobile/sale/list` |
| **Полная спецификация конечной точки** | request-info-mobile-list |

| Объект | Параметр | Описание |
| --- | --- | --- |
| general | project_idtype_integer type_strictly_required | Идентификатор проекта, полученный от Some Platform при интеграции. |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |

| **Регионы использования** |  |
| --- | --- |
| **Валюты оплаты** | references/ru/currencies/XOF.dita |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**references/ru/currencies/XOF.ditareferences/ru/currencies/XOF.dita`1000`Например, при оплате на 1000в запросе нужно передавать значение.ru_currency_codes.ditaЧисло дробных единиц для различных валют указано в разделе.Суммы в запросах с использованием валютыуказываются в основных единицах валюты в соответствии со стандартом ISO-4217 alpha-3.references/ru/currencies/XOF.ditaДля валютыв некоторых случаях сумма оплаты в запросе должна быть кратна 5.В некоторых случаях перенаправление пользователя назад в вашу систему может быть недоступно, поэтому рекомендуется осуществлять перенаправление пользователя в режиме iframe. Актуальность данной особенности для вас уточняйте у своего курирующего менеджера в Some Platform. |  |

---

## title

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата 1 |  |  |  |
| Оплата 2 |  |  |  |
| Оплата 3 |  |  |  |
| Выплата |  |  |  |

### Сценарий платежа

Оплата выполняется по одному из следующих сценариев:

Уточняйте у курирующего менеджера Some Platform, какой из сценариев оплаты актуален для вас.

выплатеПрипользователь инициирует платеж, после чего ожидает зачисление средств на свой счет. Непосредственное участие пользователя в процессе проведения выплаты не требуется.

- Оплата 1— пользователь подтверждает оплату посредством USSD сообщения, получаемого от сервиса provider_service.
- Оплата 2— пользователь перенаправляется в сервис provider_service, где выполняет оплату.
- Оплата 3— пользователь получает от сервиса provider_service сообщение с кодом, который он использует для подтверждения оплаты.

| title — это популярный в Африке платежный метод, с помощью которого пользователи могут оплачивать в вашей системе различные услуги, а также получать денежные средства.Платежный метод title позволяет принимать от пользователей оплату, используя Gate, а также проводить пользователям выплату через Gate и Dashboard.здесьЗагрузить логотип этого платежного метода в векторном формате можно. |  |
| --- | --- |

| Тип платежного метода | Мобильная коммерция |
| --- | --- |
| Регионы использования | country_GH, country_CD, country_CM, country_KE, country_CI, country_RW, country_TZ, country_UG |
| Валюты платежей | references/ru/currencies/CDF.ditareferences/ru/currencies_by_id/CDF.ditareferences/ru/currencies/GHS.ditareferences/ru/currencies_by_id/GHS.ditareferences/ru/currencies/KES.ditareferences/ru/currencies_by_id/KES.ditareferences/ru/currencies/RWF.ditareferences/ru/currencies_by_id/RWF.ditareferences/ru/currencies/TZS.ditareferences/ru/currencies_by_id/TZS.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies_by_id/UGX.ditareferences/ru/currencies/XAF.ditareferences/ru/currencies_by_id/XAF.ditareferences/ru/currencies/XOF.ditareferences/ru/currencies_by_id/XOF.dita,,,,,,, |
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
| Конечная точка |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |  |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `233123456789`Пример:Номер телефона пользователя, на счет мобильной связи которого совершается выплата. Указывается с кодом страны, без знаков пунктуации и специальных символов. |
| service_providertype_strictly_required✱type_string | ru_pm_mobcommerce_africa_h2h_payout.dita#ru_pm_mobcommerce_africa_h2h_payout/mobile_operators_list_payout`AIRTELTIGO`Пример:Идентификатор оператора связи пользователя. Подробнее о том, как получить список поддерживаемых операторов связи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением**основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как`105701050010600`references/ru/currencies/GHS.ditareferences/ru/currencies/GHS.ditaВ запросах передавайте только целочисленную сумму платежа. Так, например, вместо 105,70 ()передавайте в запросе 105,00 () или 106,00 ().Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |

### Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат выплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

accountnumbertypeВ платежном методе title в оповещении дополнительно передается объектс параметрамии, в которых содержится информация о номере телефона и операторе связи пользователя.

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
2. Получите от платежной платформы оповещение (callback) с информацией о том, какие данные вы должны передать платежной платформе.
3. Отправьте запрос с этими данными платежной платформе Some Platform.
4. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка |  |

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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `233123456789`Пример:Номер телефона пользователя для оплаты с использованием счета мобильной связи. Указывается с кодом страны, без знаков пунктуации и специальных символов. |
| service_providertype_string type_strictly_required | ru_pm_mobcommerce_africa_h2h_purchase_message.dita#ru_pm_mobcommerce_africa_h2h_purchase_message/mobile_operators_list_purchase_message`AIRTELTIGO`Пример:Идентификатор оператора связи пользователя. Подробнее о том, как получить список поддерживаемых операторов связи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением**основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как`105701050010600`references/ru/currencies/GHS.ditareferences/ru/currencies/GHS.ditaВ запросах передавайте только целочисленную сумму платежа. Так, например, вместо 105,70 ()передавайте в запросе 105,00 () или 106,00 ().Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

### OTP-кодаОтправкав платежную платформу

OTP-кодВведенный пользователемвы должны отправить в платежную платформу в новом запросе. Далее приведены основные характеристики и параметры 
     такого запроса.

OTP-кодаВот пример данных из запроса для передачи в платежную платформу:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе. |  |  |  |
| --- | --- | --- | --- |
| Объект | Объект/Параметр | Описание |  |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |  |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |  |
| additional_datatype_object type_strictly_required | additional_datatype_object type_strictly_required | approval_codetype_string type_strictly_required | `123456`Пример:OTP-код, который пользователь получает в сообщении от оператора связи. |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |  |

Чтобы оператор связи своевременно подтвердил платеж, отправляйте платежной платформе запрос с OTP-кодом в течение 80 или 90 секунд с момента получения от платежной платформы оповещения о необходимости передачи OTP-кода (точный срок действия OTP-кода для вас уточняйте у своего курирующего менеджера в Some Platform).

При отправке этого запроса проведение платежа может продолжаться следующим образом:

Если OTP-код отправлен после истечения 80 или 90 секунд, то возможны следующие варианты:

### Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат оплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

accountnumbertypeВ платежном методе title в оповещении дополнительно передается объектс параметрамии, в которых содержится информация о номере телефона и операторе связи пользователя.

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
2. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |  |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `233123456789`Пример:Номер телефона пользователя для оплаты с использованием счета мобильной связи. Указывается с кодом страны, без знаков пунктуации и специальных символов. |
| service_providertype_strictly_required✱type_string | ru_pm_mobcommerce_africa_h2h_purchase_ussd.dita#ru_pm_mobcommerce_africa_h2h_purchase_ussd/mobile_operators_list_purchase_ussd`MTN`Пример:Идентификатор оператора связи пользователя. Подробнее о том, как получить список поддерживаемых операторов связи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением**основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как`105701050010600`references/ru/currencies/GHS.ditareferences/ru/currencies/GHS.ditaВ запросах передавайте только целочисленную сумму платежа. Так, например, вместо 105,70 ()передавайте в запросе 105,00 () или 106,00 ().Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

### Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат оплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

accountnumbertypeВ платежном методе title в оповещении дополнительно передается объектс параметрамии, в которых содержится информация о номере телефона и операторе связи пользователя.

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
| Конечная точка |  |

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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `233123456789`Пример:Номер телефона пользователя для оплаты с использованием счета мобильной связи. Указывается с кодом страны, без знаков пунктуации и специальных символов. |
| service_providertype_string type_strictly_required | ru_pm_mobcommerce_africa_h2h_purchase_redirect.dita#ru_pm_mobcommerce_africa_h2h_purchase_redirect/mobile_operators_list_purchase_redirect`WAVE`Пример:Идентификатор оператора связи пользователя. Подробнее о том, как получить список поддерживаемых операторов связи см.. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `XOF`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | Сумма платежа в основных единицах валюты, без дробной части.*в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробелов*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты есть дробные единицы (то есть количество разрядов дробных единиц не равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`100`Пример: 100 XOF передается как |  |
| return_urltype_object type_optional | successtype_string type_optional | `https://example.com/success/`Пример:URL-адрес, на который нужно перенаправить пользователя в случае успешного завершения оплаты. |
| declinetype_string type_optional | `https://example.com/decline/`Пример:URL-адрес, на который нужно перенаправить пользователя в случае отклонения оплаты. |  |
| returntype_string type_optional | successdeclinereturn_url`https://example.com/return/`Пример:URL-адрес, куда нужно перенаправить пользователя в случае прерывания оплаты пользователем до ее завершения. Этот же адрес используется, если не заданы параметрыи. Если не задан ни один из параметров объекта, то Gate по умолчанию перенаправляет пользователя по URL-адресу, указанному в вашем проекте в Some Platform. |  |
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

accountnumbertypeВ платежном методе title в оповещении дополнительно передается объектс параметрамии, в которых содержится информация о номере телефона и операторе связи пользователя.

Вот пример тела оповещения с информацией об успешно выполненной оплате:

Вот пример тела оповещения с информацией об отклоненной оплате.

### Дополнительные материалы

- ru_gate_interaction_organisation.dita
- ru_gate_payment_model.dita
- ru_gate_authentication.dita
- ru_gate_statuses_and_response_codes.dita

