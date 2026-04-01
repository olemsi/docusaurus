# Оплата через Gate

## Общая информация

Чтобы выполнить оплату через Gate с использованием метода title:

Полная схема оплаты с использованием метода title выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Перенаправьте пользователя в сервис provider_service.
3. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

## Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `/v2/payment/banks/philippines/sale` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |  |
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
| accounttype_object type_strictly_required | bank_idtype_integer type_strictly_required | ru_pm_philippines_banks_purchase_redirect_banks.dita`498`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков см.. |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| return_urltype_object type_strictly_required | successtype_string type_strictly_required | `https://example.com/success/`Пример:URL-адрес, на который нужно перенаправить пользователя в случае успешного завершения оплаты. |
| declinetype_strictly_required✱type_string | `https://example.com/decline/`Пример:URL-адрес, на который нужно перенаправить пользователя в случае отклонения оплаты. |  |
| returntype_string type_optional | successdeclinereturn_url`https://example.com/return/`Пример:URL-адрес, куда нужно перенаправить пользователя в случае прерывания оплаты пользователем до ее завершения. Этот же адрес используется, если не заданы параметрыи. Если не задан ни один из параметров объекта, то Gate по умолчанию перенаправляет пользователя по URL-адресу, указанному в вашем проекте в Some Platform. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

## Перенаправление пользователей

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

## Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат оплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

Вот пример тела оповещения с информацией об успешно выполненной оплате:

Вот пример тела оповещения с информацией об отклоненной оплате.

## Тестирование

Для метода title доступно тестирование оплат через Gate.

Чтобы начать тестировать оплаты, вам необходимо связаться со специалистами технической поддержки Some Platform (support@example.com для получения идентификатора тестового проекта, секретного ключа от него, а также для настройки тестовой среды для работы с методом title.

При проведении тестовых платежей учитывайте, что:

**Статусы тестовых оплат**

При тестировании оплат в методе title итоговый статус платежа зависит от того, какую сумму вы передали в запросе. В следующей таблице представлено соответствие между суммами и статусами платежа.

**Порядок проведения тестовой оплаты через Gate**

Чтобы выполнить тестовую оплату через Gate:

ru_pm_philippines_banks_gate_purchase_redirect.ditaПодробная информация о проведении оплаты с использованием метода title через Gate представлена в разделе.

- **тестового**в запросах вы должны передавать идентификаторпроекта;
- `486487`в качестве идентификатора банка пользователя в запросе можно использовать толькоили;
- references/ru/currencies/PHP.ditaв качестве валюты оплаты в запросе можно использовать только;
- в качестве значений параметров с данными пользователя и идентификатора платежа можно использовать случайные значения.

1. Отправьте платежной платформе запрос на проведение тестовой оплаты.
2. Примите оповещение с данными для перенаправления.
3. Перейдите по полученному URL-адресу.
4. **SuccessDecline**Щелкните кнопкуили(соответствующая кнопка отобразится в зависимости от суммы, указанной в запросе).
5. Примите оповещение (callback) с информацией о результате тестовой оплаты.

| Сумма платежа | Итоговый статус |
| --- | --- |
| 40000 или 40400 | decline— платеж отклонен |
| Любая другая сумма | success— платеж успешно проведен, сумма платежа в финальном оповещении совпадает с суммой в запросе на проведение платежа |

## Дополнительные материалы

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
| Конечная точка | `/v2/payment/banks/philippines/payout` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| customertype_object type_strictly_required | idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| ip_addresstype_string type_strictly_required | `198.51.100.47`Пример:IP-адрес устройства пользователя. |  |
| emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |  |
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `123456`Пример:Номер счета пользователя. |
| bank_idtype_integer type_strictly_required | ru_pm_philippines_banks_payout_banks.dita`487`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков см.. |  |
| customer_nametype_string type_strictly_required | `John Doe`Пример:Полное имя пользователя. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| descriptiontype_string type_strictly_required | `Payout description`Пример:Описание платежа. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |

### Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат выплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

Вот пример тела оповещения с информацией об успешно выполненной выплате:

Вот пример тела оповещения с информацией об отклоненной выплате.

### Тестирование

Для метода title доступно тестирование выплат через Gate.

Чтобы начать тестировать оплаты, вам необходимо связаться со специалистами технической поддержки Some Platform (support@example.com для получения идентификатора тестового проекта, секретного ключа от него, а также для настройки тестовой среды для работы с методом title.

При проведении тестовых выплат учитывайте, что:

**Статусы тестовых выплат**

При тестировании выплат в методе title итоговый статус выплаты зависит от того, какую сумму вы передали в запросе. В следующей таблице представлено соответствие между суммами и статусами выплаты.

**Порядок проведения тестовой выплаты через Gate**

Чтобы выполнить тестовую выплату через Gate:

ru_pm_philippines_banks_gate_payout.ditaПодробная информация о проведении выплаты с использованием метода title через Gate представлена в разделе.

- **тестового**в запросах вы должны передавать идентификаторпроекта;
- `486487`в качестве идентификатора банка пользователя в запросе можно использовать толькоили;
- references/ru/currencies/PHP.ditaв качестве валюты оплаты в запросе можно использовать только;
- в качестве значений параметров с данными пользователя и идентификатора платежа можно использовать случайные значения.

1. Отправьте платежной платформе запрос на проведение тестовой выплаты.
2. Примите оповещение (callback) с информацией о результате тестовой выплаты.

| Сумма выплаты | Итоговый статус |
| --- | --- |
| 40000 или 40400 | decline— выплата отклонена |
| Любая другая сумма | success— выплата выполнена |

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

**Отображение значков банков на странице оплаты**

Платежи в методе title осуществляются через определенные банки. Поэтому помимо платежного метода, на странице оплаты пользователю предлагается выбрать банк, через который он будет совершать оплату.

Метод title позволяет вам определить, как отображать значки банков на странице оплаты:

**banks_idИдентификаторы банков для передачи в параметре**

banks_idru_pm_philippines_banks_purchase_redirect_banks.ditaИдентификаторы банков, которые вы можете передавать в параметре, чтобы отобразить пользователю на странице оплаты значки конкретных банков, представлены в разделе.

- **Выбор банка в два шага**Этот вариант используется по умолчанию. Пользователь выбирает банк в два шага: сначала он выбирает title среди прочих методов, а затем — конкретный банк из списка банков, доступных в методе.
- **Отображение банков на одной странице с платежными методами**split_bankspayment_methods_options`true`payment_methods_optionsВот пример использованияпри открытии страницы оплаты по ссылке:payment_methods_options={"pm_options": {"split_banks": true}}Чтобы отобразить банки на странице оплаты в виде отдельных кнопок наряду с другими платежными методами, передайте параметрсо значениемв объекте.
- **Отображение банков только одного метода**`force_pm`force_payment_methodЧтобы отобразить на странице оплаты только банки (без других платежных методов), доступные в методе title, передайте в запросе на открытие страницы оплаты код платежного методав параметре.
- **Отображение только конкретных банков**`force_pm`force_payment_methodbanks_idpayment_methods_optionsВот пример использованияпри открытии страницы оплаты по ссылке:`EPayWidget`Вот пример данных из запроса на открытие страницы оплаты с предварительно выбранными банками через виджет.payment_methods_options={"pm_options": {"split_banks": true, "banks_id": [140, 141]}}Пример данных из запроса на оплату с несколькими предварительно выбранными банками**payment_methods_options: '{"pm_options": {"banks_id": [140, 141]}}',**EPayWidget.run(
    {
        project_id: 1234,
        payment_id: 'payment_47',
        customer_id: 'customer_123',
        customer_first_name: 'John',
        customer_last_name: 'Doe',
        customer_email: 'johndoe@example.com',
        payment_currency: 'example_currency',
        payment_amount: example_amount,
        force_payment_method: 'force_pm',signature: 'kUi2x9dKHA5VNU0FY...vySO8RLCv1htT4DqtVUkDJrOcZzUCwX6Rek7pZhkIQg=='
    }
)Чтобы отобразить на странице оплаты только определенные банки из тех, что доступны в методе title, передайте в запросе на открытие страницы оплаты код платежного методав параметре, а также идентификаторы нужных банков в массиве.
- **Принудительный выбор банка**`force_pm`force_payment_methodbanks_idpayment_methods_optionsВот пример использованияпри открытии страницы оплаты по ссылке:`EPayWidget`Далее приведен пример данных из запроса на открытие страницы оплаты с предварительно выбранным банком через виджет.payment_methods_options={"pm_options": {"split_banks": true, "banks_id": [140]}}Пример данных из запроса на оплату с предварительно выбранным банком**payment_methods_options: '{"pm_options": {"banks_id": [140]}}',**EPayWidget.run(
    {
        project_id: 1234,
        payment_id: 'payment_47',
        customer_id: 'customer_123',
        customer_first_name: 'John',
        customer_last_name: 'Doe',
        customer_email: 'johndoe@example.com',
        payment_currency: 'example_currency',
        payment_amount: example_amount,
        force_payment_method: 'force_pm',signature: 'kUi2x9dKHA5VNU0FY...vySO8RLCv1htT4DqtVUkDJrOcZzUCwX6Rek7pZhkIQg=='
    }
)Если в запросе на открытие страницы оплаты передать код платежного методав параметре, а также идентификатор одного из банков в массиве, то страницы выбора метода и банка будут пропущены, а пользователь будет сразу перенаправлен в сервис банка.

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

### Тестирование

Для метода title доступно тестирование оплат через Payment Widget.

Чтобы начать тестировать оплаты, вам необходимо связаться со специалистами технической поддержки Some Platform (support@example.com для получения идентификатора тестового проекта, секретного ключа от него, а также для настройки тестовой среды для работы с методом title.

При проведении тестовых платежей учитывайте, что:

**Статусы тестовых оплат**

При тестировании оплат в методе title итоговый статус платежа зависит от того, какую сумму вы передали в запросе. В следующей таблице представлено соответствие между суммами и статусами платежа.

**Порядок проведения тестовой оплаты через Payment Widget**

Чтобы выполнить тестовую оплату через Payment Widget:

ru_pm_philippines_banks_pp_purchase_redirect.ditaПодробная информация о проведении оплаты с использованием метода title через Payment Widget представлена в разделе.

- **тестового**в запросах вы должны передавать идентификаторпроекта;
- в качестве значений параметров с данными пользователя и идентификатора платежа можно использовать случайные значения;
- `486487`в качестве идентификатора банка пользователя в запросе можно использовать толькоили;
- references/ru/currencies/PHP.ditaв качестве валюты оплаты в запросе можно использовать только;
- интерфейс эмулятора страницы оплаты может отличаться от интерфейса страницы оплаты, предоставляемой Some Platform.

1. Отправьте платежной платформе запрос на открытие страницы оплаты.
2. force_payment_method`force_pm`Выберите на странице эмулятора платежный метод title. Если в запросе был передан параметрсо значением, выбирать платежный метод не нужно.
3. При необходимости, укажите произвольные значения для запрашиваемых параметров.
4. Выберите банк, который будет использоваться для тестовой оплаты.
5. **SuccessDecline**Щелкните кнопкуили(соответствующая кнопка отобразится в зависимости от суммы, указанной в запросе).
6. Примите оповещение (callback) с информацией о результате тестовой оплаты.
7. Подождите несколько секунд, чтобы на странице эмулятора вам отобразился результат тестовой оплаты.

| Сумма платежа | Итоговый статус |
| --- | --- |
| 40000 или 40400 | decline— платеж отклонен |
| Любая другая сумма | success— платеж успешно проведен, сумма платежа в финальном оповещении совпадает с суммой в запросе на проведение платежа |

### Дополнительные материалы

- ru_pp_interaction_organisation.dita
- ru_pp_payment_model.dita
- ru_pp_authentication.dita
- ru_pp_statuses_and_response_codes.dita

---

## Banks of the Philippines -Оплата

При оплате 
пользователь перенаправляется в сервис provider_service, где выполняет оплату.

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата |  |  |  |

| **Регионы использования** |  |
| --- | --- |
| **Валюты оплаты** | references/ru/currencies/PHP.dita |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |

### Банки для оплаты

#### Список банков

account.bank_idОплата в методе title осуществляется через банки, поддерживающие работу с этим методом. В запросе на оплату в параметревы должны передать идентификатор банка пользователя, который следует использовать для выполнения платежа.

В таблице ниже представлена информация о доступных для оплаты банках в методе title.

Данная таблица со списком банков представлена в ознакомительных целях. Поскольку состав этого списка может меняться, рекомендуем уточнять актуальный список банков, доступных при работе с методом title, с помощью запроса списка банков.

| Банк | Идентификатор |
| --- | --- |
| Bank of Commerce | 1561 |
| BDO Corporate Internet Banking | 2241 |
| BDO Unibank, Inc | 486 |
| Bank of the Philippine Islands (BPI) | 487 |
| Chinabank Online | 489 |
| Landbank ATM Online | 2291 |
| Maybank Online Banking | 2281 |
| Metrobank | 492 |
| PNB e-Banking Bills Payment | 2301 |
| RCBC Online Banking | 494 |
| Robinsons Bank Corporation | 495 |
| Security Bank Online Transfer | 496 |
| UCPB Connect | 498 |
| Unionbank EON | 2321 |
| Unionbank Internet Banking | 2311 |

#### Запрос списка банков

Далее представлена информация, необходимая для создания и отправки запроса на получение актуального списка банков, поддерживаемых в методе title.

Вот пример данных из запроса списка банков, поддерживающих работу с методом title.

| **HTTP-метод запроса** | POST |
| --- | --- |
| **Формат тела запроса** | JSON |
| **Конечная точка** | `/v2/info/banks/philippines/sale/list` |
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

## Банки для выплаты

### Список банков

account.bank_idВыплата в методе title осуществляется через банки, поддерживающие работу с этим методом. В запросе на выплату в параметревы должны передать идентификатор банка пользователя, который следует использовать для выполнения платежа.

В таблице ниже представлена информация о доступных для выплаты банках в методе title.

Данная таблица со списком банков представлена в ознакомительных целях. Поскольку состав этого списка может меняться, рекомендуем уточнять актуальный список банков, доступных при работе с методом title, с помощью запроса списка банков.

| Банк | Идентификатор |
| --- | --- |
| AL-AMANAH ISLAMIC BANK | 67971 |
| All Bank | 5461 |
| Asia United Bank | 485 |
| AUSTRALIA and NEW ZEALAND BANK | 67981 |
| BANANA FINTECH SERVICES CORPORATION | 68001 |
| BANGKO KABAYAN | 68291 |
| Bangko Mabuhay | 5581 |
| BANGKO NUESTRA SENORA DEL PILAR | 68451 |
| BANGKOK BANK PUBLIC CO., LTD. | 68011 |
| BANK OF AMERICA | 68031 |
| Bank of China | 68881 |
| Bank of Commerce | 1561 |
| BANK OF FLORIDA | 68041 |
| BANK OF MAKATI | 68391 |
| BANK OF MONTALBAN, INC. | 68621 |
| Bayad Center | 2601 |
| BAYANIHAN BANK | 68581 |
| BDO Network Bank Inc | 68461 |
| BDO Unibank, Inc | 486 |
| BINAN RURAL BANK, INC. | 68821 |
| Binangonan Rural Bank | 55741 |
| BPI Direct BanKO, Inc., A Savings Bank | 5471 |
| Bank of the Philippine Islands (BPI) | 487 |
| Camalig Bank | 55751 |
| Cantilan Bank | 68111 |
| CARD Bank | 55761 |
| CARD SME BANK INC | 68131 |
| CATHAY UNITED BANK CO. LTD | 68791 |
| Cebuana Lhuilier Rural Bank | 68071 |
| CENTURY SAVINGS BANK | 68081 |
| Chinabank Online | 489 |
| Chinabank Savings | 1531 |
| Chinatrust | 1571 |
| CIMB BANK PHILIPPINES INC | 68101 |
| Citibank, N.A. | 5371 |
| CITY SAVINGS BANK | 68831 |
| Community Rural Bank of Romblon, Inc. | 70812 |
| COOPERATIVE BANK OF QUEZON PROVINCE | 68061 |
| COUNTRY BUILDERS BANK, INC. | 68121 |
| CTBC Bank | 5481 |
| DCPay Philippines Inc. | 5491 |
| Deutsche Bank | 5381 |
| Development Bank of the Philippines | 5391 |
| DM BANK | 68161 |
| Dumaugete City Development Bank Inc | 68151 |
| Dungganon Bank | 5501 |
| East West Banking Corporation | 55771 |
| East West Rural Bank | 21831 |
| Entrepreneur Rural Bank, Inc | 70892 |
| Equicom Savings Bank | 5511 |
| FILIDIAN RURAL BANK OF ANTIPOLO | 68181 |
| FIRST CONSOLIDATED BANK | 68171 |
| G-Xchange | 5521 |
| GATEWAY RURAL BANK | 68221 |
| GM BANK OF LUZON, INC. | 68191 |
| GoTyme Bank | 68201 |
| GUAGUA RURAL BANK | 68211 |
| HK AND SHANGHAI BANKING CORP. | 68241 |
| HSBC SAVINGS BANK PHILS | 68231 |
| INDUSTRIAL BANK OF KOREA - MANILA | 68251 |
| INDUSTRIAL COMMERCIAL BANK OF CHINA | 68271 |
| ING Bank N.V. | 5591 |
| INNOVATIVE BANK | 68281 |
| Isla Bank (A Thrift Bank), Inc. | 5601 |
| JPMORGAN CHASE BANK | 68091 |
| KEB HANA BANK | 68301 |
| LAGUNA PRESTIGE BANKING CORPORATION | 68331 |
| Land Bank of the Philippines (Landbank) / The Overseas Filipino Bank (OFBank) | 491 |
| LEGAZPI SAVINGS BANK | 68311 |
| LOLC BANK PHILIPPINES | 68901 |
| LULU FINANCIAL SERVICES PHILS INC | 68321 |
| Luzon Development Bank | 70912 |
| MALARAYAT RURAL BANK | 68841 |
| Malayan Bank Savings | 68341 |
| MAYA BANK, INC | 68431 |
| Maybank | 1541 |
| Maybank Phils. Inc. | 5421 |
| MEGA INTL CMML BANK CO. LTD | 68261 |
| MEGA RURAL BANK (LUCENA CITY) | 68361 |
| Metrobank | 492 |
| METROSOUTH COOPERATIVE BANK | 68351 |
| MINDANAO CONSOLIDATED COOPERATIVE | 68381 |
| MIZUHO BANK | 68371 |
| MONEY MALL RURAL BANK | 68401 |
| MUFG BANK, LTD. | 68051 |
| MVSM BANK RURAL BANK | 68411 |
| Netbank Rural Bank, Inc. | 68141 |
| NEW RURAL BANK OF SAN LEONARDO (NUEVA ECIJA) | 68441 |
| Omnipay, Inc. | 5611 |
| Own Bank | 68471 |
| Pacific Ace Savings Bank | 68481 |
| Partner Rural Bank (Cotabato), Inc. | 5621 |
| Paymaya Philippines, Inc. | 5541 |
| PAYMONGO PAYMENTS, INC | 68911 |
| PBCom | 1511 |
| Philippine Bank of Communications | 68891 |
| Philippine Business Bank (A Savings Bank) | 5631 |
| PHILIPPINE DIGITAL ASSET EXCHANGE (INSTAPAY) | 68491 |
| PHILIPPINE DIGITAL ASSET EXCHANGE (PESONET) | 68861 |
| Philippine Trust Company | 70922 |
| Philtrust Bank | 5431 |
| Philippine National Bank (PNB) | 493 |
| PORAC RURAL BANK | 55781 |
| Producers Savings Bank Corporation | 68521 |
| PSBank | 1501 |
| Queen City Development Bank, Inc. | 55791 |
| Quezon Capital Rural Bank | 5641 |
| Rang-Ay Bank | 68531 |
| RBT RURAL BANK | 68541 |
| RCBC Online Banking | 494 |
| Robinsons Bank Corporation | 495 |
| RURAL BANK OF BACOLOD CITY | 68591 |
| RURAL BANK OF BAUANG | 68601 |
| RURAL BANK OF CAUAYAN INCORPORATED | 67991 |
| RURAL BANK OF DIGOS | 68611 |
| Rural Bank of Guinobatan, Inc. | 55801 |
| RURAL BANK OF LA PAZ | 68631 |
| RURAL BANK OF LEBAK (SULTAN KUDARAT) | 68561 |
| RURAL BANK OF ROSARIO | 68641 |
| RURAL BANK OF SAGAY | 68661 |
| RURAL BANK OF SAN MEDJUGORJE | 68551 |
| RURAL BANK OF STA. IGNACIA | 68561 |
| MariBank Philippines | 66671 |
| Security Bank Online Transfer | 496 |
| SHINHAN BANK | 68681 |
| Standard Chartered Bank | 5441 |
| Starpay Corporation | 68701 |
| Sterling Bank | 1551 |
| SUMITOMO MITSUI BANKING CORP | 68691 |
| Sun Savings Bank | 5571 |
| TAYOCASH INC | 68711 |
| Tonik Bank | 68721 |
| TONIK DIGITAL BANK, INC. | 68731 |
| Topjuan Tech Corporation | 68741 |
| TRAXION PAY, INC. | 68751 |
| UCPB Connect | 498 |
| UCPB Savings Bank | 5651 |
| Unionbank | 497 |
| UnionDigital Bank | 68781 |
| UNITED COCONUT PLANTERS BANK | 498 |
| United Overseas Bank | 5451 |
| UNObank | 68771 |
| USSC Money Services Inc | 55721 |
| Veterans Bank | 1521 |
| Wealth Development Bank Corporation | 5661 |
| Yuanta Savings Bank | 55811 |
| ZAMBALES RURAL BANK | 68801 |
| ZYBI Tech, Inc. | 70862 |

### Запрос списка банков

Состав списка банков может меняться, поэтому мы рекомендуем уточнять актуальный список банков, доступных 
    при работе с методом title, с помощью запроса со следующим форматом и параметрами:

Вот пример данных из запроса списка банков, поддерживающих работу с методом title.

| **HTTP-метод запроса** | POST |
| --- | --- |
| **Формат тела запроса** | JSON |
| **Конечная точка** | `/v2/info/banks/philippines/payout/list` |
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

В ответе на запрос списка банков отсутствует информация о поддержке банками выплаты через сервисы InstaPay и PESONet. Данная информация представлена в следующей таблице.

| Банк | InstaPay | PESONet | ID |
| --- | --- | --- | --- |
| AL-AMANAH ISLAMIC BANK |  |  | 67971 |
| ALLBANK |  |  | 5461 |
| AllBank Inc |  |  | 68851 |
| Asia United Bank |  |  | 485 |
| AUSTRALIA &amp; NEW ZEALAND BANK |  |  | 67981 |
| BANANA FINTECH SERVICES CORPORATION |  |  | 68001 |
| BANGKO KABAYAN |  |  | 68291 |
| Bangko Mabuhay |  |  | 5581 |
| BANGKO NUESTRA SENORA DEL PILAR |  |  | 68451 |
| BANGKOK BANK PUBLIC CO., LTD. |  |  | 68011 |
| BANK OF AMERICA |  |  | 68031 |
| Bank of China |  |  | 68881 |
| Bank of Commecre |  |  | 1561 |
| BANK OF FLORIDA |  |  | 68041 |
| BANK OF MAKATI |  |  | 68391 |
| BANK OF MONTALBAN, INC. |  |  | 68621 |
| Bayad Center |  |  | 2601 |
| BAYANIHAN BANK |  |  | 68581 |
| BDO Unibank, Inc |  |  | 486 |
| BDO Network Bank Inc |  |  | 68461 |
| BINAN RURAL BANK, INC. |  |  | 68821 |
| Binangonan Rural Bank |  |  | 55741 |
| Bank of the Philippine Islands (BPI) |  |  | 487 |
| BPI Direct BanKO, Inc., A Savings Bank |  |  | 5471 |
| Camalig Bank |  |  | 55751 |
| Cantilan Bank |  |  | 68111 |
| CARD Bank |  |  | 55761 |
| CARD SME BANK INC |  |  | 68131 |
| CATHAY UNITED BANK CO. LTD |  |  | 68791 |
| Cebuana Lhuillier Rural Bank |  |  | 68071 |
| CENTURY SAVINGS BANK |  |  | 68081 |
| China Banking Corporation |  |  | 489 |
| Chinabank Savings |  |  | 1531 |
| CIMB BANK PHILIPPINES INC |  |  | 68101 |
| Citibank, N.A. |  |  | 5371 |
| CITY SAVINGS BANK |  |  | 68831 |
| COOPERATIVE BANK OF QUEZON PROVINCE |  |  | 68061 |
| COUNTRY BUILDERS BANK,INC. |  |  | 68121 |
| CTBC Bank |  |  | 5481 |
| DCPay Philippines Inc. |  |  | 5491 |
| Deutsche Bank |  |  | 5381 |
| Development Bank of the Philippines |  |  | 5391 |
| DM BANK |  |  | 68161 |
| Dumaugete City Development Bank Inc |  |  | 68151 |
| Dungganon Bank |  |  | 5501 |
| East West Banking Corporation |  |  | 55771 |
| East West Rural Bank |  |  | 21831 |
| Equicom Savings Bank |  |  | 5511 |
| FILIDIAN RURAL BANK OF ANTIPOLO |  |  | 68181 |
| FIRST CONSOLIDATED BANK |  |  | 68171 |
| GATEWAY RURAL BANK |  |  | 68221 |
| GM BANK OF LUZON, INC. |  |  | 68191 |
| GoTyme Bank |  |  | 68201 |
| GUAGUA RURAL BANK |  |  | 68211 |
| HK AND SHANGHAI BANKING CORP. |  |  | 68241 |
| HSBC SAVINGS BANK PHILS |  |  | 68231 |
| INDUSTRIAL BANK OF KOREA - MANILA |  |  | 68251 |
| INDUSTRIAL COMMERCIAL BANK OF CHINA |  |  | 68271 |
| ING Bank N.V. |  |  | 5591 |
| INNOVATIVE BANK |  |  | 68281 |
| Isla Bank (A Thrift Bank), Inc. |  |  | 5601 |
| JPMORGAN CHASE BANK |  |  | 68091 |
| KEB HANA BANK |  |  | 68301 |
| LAGUNA PRESTIGE BANKING CORPORATION |  |  | 68331 |
| Land Bank of the Philippines (Landbank) / The Overseas Filipino Bank (OFBank) |  |  | 491 |
| LEGAZPI SAVINGS BANK |  |  | 68311 |
| LOLC BANK PHILIPPINES |  |  | 68901 |
| LULU FINANCIAL SERVICES PHILS INC |  |  | 68321 |
| MALARAYAT RURAL BANK |  |  | 68841 |
| Malayan Bank Savings |  |  | 68341 |
| MAYA BANK, INC |  |  | 68431 |
| Maybank Phils. Inc. |  |  | 5421 |
| MEGA INTL COMML BANK CO. LTD |  |  | 68261 |
| MEGA RURAL BANK (LUCENA CITY) |  |  | 68361 |
| Metrobank |  |  | 492 |
| METROSOUTH COOPERATIVE BANK |  |  | 68351 |
| MINDANAO CONSOLIDATED COOPERATIVE |  |  | 68381 |
| MIZUHO BANK |  |  | 68371 |
| MONEY MALL RURAL BANK |  |  | 68401 |
| MUFG BANK, LTD. |  |  | 68051 |
| MVSM BANK RURAL BANK |  |  | 68411 |
| Netbank Rural Bank, Inc. |  |  | 68141 |
| NEW RURAL BANK OF SAN LEONARDO (NUEVA ECIJA) |  |  | 68441 |
| Own Bank |  |  | 68471 |
| Pacific Ace Savings Bank |  |  | 68481 |
| Partner Rural Bank (Cotabato) |  |  | 5621 |
| Paymaya Philippines Inc. |  |  | 5541 |
| PAYMONGO PAYMENTS, INC |  |  | 68911 |
| Philippine Bank of Communications |  |  | 68891 |
| Philippine Business Bank (A Savings Bank) |  |  | 5631 |
| PHILIPPINE DIGITAL ASSET EXCHANGE (Instapay) |  |  | 68491 |
| PHILIPPINE DIGITAL ASSET EXCHANGE (Pesonet) |  |  | 68861 |
| Philippine National Bank (PNB) |  |  | 493 |
| Philtrust Bank |  |  | 5431 |
| PORAC RURAL BANK |  |  | 55781 |
| Producers Savings Bank Corporation |  |  | 68521 |
| Queen City Development Bank, Inc. |  |  | 55791 |
| Quezon Capital Rural Bank |  |  | 5641 |
| Rang-Ay Bank |  |  | 68531 |
| RBT RURAL BANK |  |  | 68541 |
| RCBC Online Banking |  |  | 494 |
| RURAL BANK OF BACOLOD CITY |  |  | 68591 |
| RURAL BANK OF BAUANG |  |  | 68601 |
| RURAL BANK OF CAUAYAN INCORPORATED |  |  | 67991 |
| RURAL BANK OF DIGOS |  |  | 68611 |
| Rural Bank of Guinobatan, Inc. |  |  | 55801 |
| RURAL BANK OF LA PAZ |  |  | 68631 |
| RURAL BANK OF LEBAK (SULTAN KUDARAT) |  |  | 68561 |
| RURAL BANK OF ROSARIO |  |  | 68641 |
| RURAL BANK OF SAGAY |  |  | 68661 |
| RURAL BANK OF SAN MEDJUGORJE |  |  | 68551 |
| RURAL BANK OF STA. IGNACIA |  |  | 68651 |
| MariBank Philippines |  |  | 66671 |
| Security Bank Online Transfer |  |  | 496 |
| SHINHAN BANK |  |  | 68681 |
| Standard Chartered Bank |  |  | 5441 |
| Starpay Corporation |  |  | 68701 |
| Sterling Bank |  |  | 1551 |
| SUMITOMO MITSUI BANKING CORP |  |  | 68691 |
| Sun Savings Bank |  |  | 5571 |
| TAYOCASH INC |  |  | 68711 |
| Tonik Bank |  |  | 68721 |
| TONIK DIGITAL BANK, INC. |  |  | 68731 |
| Topjuan Tech Corporation |  |  | 68741 |
| TRAXION PAY, INC. |  |  | 68751 |
| UCPB Savings Bank |  |  | 5651 |
| Unionbank |  |  | 497 |
| UnionDigital Bank |  |  | 68781 |
| UNITED COCONUT PLANTERS BANK |  |  | 498 |
| United Overseas Bank |  |  | 5451 |
| UNObank |  |  | 68771 |
| USSC Money Services Inc |  |  | 55721 |
| Veterans Bank |  |  | 1521 |
| Wealth Development Bank Corporation |  |  | 5661 |
| Yuanta Savings Bank |  |  | 55811 |
| ZAMBALES RURAL BANK |  |  | 68801 |

---

## Banks of the Philippines -Выплата

При выплате 
пользователь инициирует платеж, после чего ожидает зачисление средств на свой счет. Непосредственное участие пользователя в процессе проведения выплаты не требуется.

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Выплата |  |  |  |

| **Регионы использования** |  |
| --- | --- |
| **Валюты выплаты** | references/ru/currencies/PHP.dita |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**Выплата в методе title проводится через сервисы InstaPay и PESONet. Вот основные различия этих сервисов:InstaPayPESONet**Время зачисления выплаты**С минимальной задержкойЗапросы, поступившие в систему с 9:31 до 15:30, обрабатываются до 22:00. Запросы, поступившие в систему с 15:31 текущего дня до 9:30 следующего дня, обрабатываются до 13:00 следующего дня. Все времена указаны для зоны UTC+8.**Максимальная сумма выплаты**references/ru/currencies/PHP.dita50 000,00Без ограниченийтаблицеИнформация о банках, поддерживающих проведение  выплаты через сервисы PESONet и Instapay, представлена в. Подробности о проведении платежей через PESONet и Instapay уточняйте у своего курирующего менеджера Some Platform. |  |

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

оплатеПрипользователь перенаправляется в сервис provider_service, где выполняет оплату.

выплатеПрипользователь инициирует платеж, после чего ожидает зачисление средств на свой счет. Непосредственное участие пользователя в процессе проведения выплаты не требуется.

| title — это платежный метод, который позволит вам принимать оплату от пользователей, а также выплачивать пользователям денежные средства. Пользователи выполняют оплату с использованием интернет-банкинга.Платежный метод title позволяет принимать от пользователей оплату, используя Payment Widget и Gate, а также проводить пользователям выплату через Gate и Dashboard.здесьЗагрузить логотип этого платежного метода в векторном формате можно. |  |
| --- | --- |

| Тип платежного метода | Интернет-банкинг |
| --- | --- |
| Регионы использования |  |
| Валюты платежей | references/ru/currencies/PHP.dita |
| Суммы платежей | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| Время проведения платежа | Информацию уточняйте у курирующего менеджера Some Platform. |
| Конвертация валют | На стороне Some Platform |
| Оплата |  |
| Выплата |  |
| Повторяемая оплата |  |
| Возврат |  |
| Организация и стоимость подключения | По согласованию с курирующим менеджером Some Platform |

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
| Конечная точка | `/v2/payment/banks/philippines/payout` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| customertype_object type_strictly_required | idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| ip_addresstype_string type_strictly_required | `198.51.100.47`Пример:IP-адрес устройства пользователя. |  |
| emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |  |
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `123456`Пример:Номер счета пользователя. |
| bank_idtype_integer type_strictly_required | ru_pm_philippines_banks_payout_banks.dita`487`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков см.. |  |
| customer_nametype_string type_strictly_required | `John Doe`Пример:Полное имя пользователя. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| descriptiontype_string type_strictly_required | `Payout description`Пример:Описание платежа. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |

### Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат выплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

Вот пример тела оповещения с информацией об успешно выполненной выплате:

Вот пример тела оповещения с информацией об отклоненной выплате.

### Тестирование

Для метода title доступно тестирование выплат через Gate.

Чтобы начать тестировать оплаты, вам необходимо связаться со специалистами технической поддержки Some Platform (support@example.com для получения идентификатора тестового проекта, секретного ключа от него, а также для настройки тестовой среды для работы с методом title.

При проведении тестовых выплат учитывайте, что:

**Статусы тестовых выплат**

При тестировании выплат в методе title итоговый статус выплаты зависит от того, какую сумму вы передали в запросе. В следующей таблице представлено соответствие между суммами и статусами выплаты.

**Порядок проведения тестовой выплаты через Gate**

Чтобы выполнить тестовую выплату через Gate:

ru_pm_philippines_banks_gate_payout.ditaПодробная информация о проведении выплаты с использованием метода title через Gate представлена в разделе.

- **тестового**в запросах вы должны передавать идентификаторпроекта;
- `486487`в качестве идентификатора банка пользователя в запросе можно использовать толькоили;
- references/ru/currencies/PHP.ditaв качестве валюты оплаты в запросе можно использовать только;
- в качестве значений параметров с данными пользователя и идентификатора платежа можно использовать случайные значения.

1. Отправьте платежной платформе запрос на проведение тестовой выплаты.
2. Примите оповещение (callback) с информацией о результате тестовой выплаты.

| Сумма выплаты | Итоговый статус |
| --- | --- |
| 40000 или 40400 | decline— выплата отклонена |
| Любая другая сумма | success— выплата выполнена |

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
2. Перенаправьте пользователя в сервис provider_service.
3. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `/v2/payment/banks/philippines/sale` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей.✱ — обязательность этого параметра уточняйте у своего курирующего менеджера в Some Platform. |  |  |
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
| accounttype_object type_strictly_required | bank_idtype_integer type_strictly_required | ru_pm_philippines_banks_purchase_redirect_banks.dita`498`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков см.. |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| return_urltype_object type_strictly_required | successtype_string type_strictly_required | `https://example.com/success/`Пример:URL-адрес, на который нужно перенаправить пользователя в случае успешного завершения оплаты. |
| declinetype_strictly_required✱type_string | `https://example.com/decline/`Пример:URL-адрес, на который нужно перенаправить пользователя в случае отклонения оплаты. |  |
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

Вот пример тела оповещения с информацией об успешно выполненной оплате:

Вот пример тела оповещения с информацией об отклоненной оплате.

### Тестирование

Для метода title доступно тестирование оплат через Gate.

Чтобы начать тестировать оплаты, вам необходимо связаться со специалистами технической поддержки Some Platform (support@example.com для получения идентификатора тестового проекта, секретного ключа от него, а также для настройки тестовой среды для работы с методом title.

При проведении тестовых платежей учитывайте, что:

**Статусы тестовых оплат**

При тестировании оплат в методе title итоговый статус платежа зависит от того, какую сумму вы передали в запросе. В следующей таблице представлено соответствие между суммами и статусами платежа.

**Порядок проведения тестовой оплаты через Gate**

Чтобы выполнить тестовую оплату через Gate:

ru_pm_philippines_banks_gate_purchase_redirect.ditaПодробная информация о проведении оплаты с использованием метода title через Gate представлена в разделе.

- **тестового**в запросах вы должны передавать идентификаторпроекта;
- `486487`в качестве идентификатора банка пользователя в запросе можно использовать толькоили;
- references/ru/currencies/PHP.ditaв качестве валюты оплаты в запросе можно использовать только;
- в качестве значений параметров с данными пользователя и идентификатора платежа можно использовать случайные значения.

1. Отправьте платежной платформе запрос на проведение тестовой оплаты.
2. Примите оповещение с данными для перенаправления.
3. Перейдите по полученному URL-адресу.
4. **SuccessDecline**Щелкните кнопкуили(соответствующая кнопка отобразится в зависимости от суммы, указанной в запросе).
5. Примите оповещение (callback) с информацией о результате тестовой оплаты.

| Сумма платежа | Итоговый статус |
| --- | --- |
| 40000 или 40400 | decline— платеж отклонен |
| Любая другая сумма | success— платеж успешно проведен, сумма платежа в финальном оповещении совпадает с суммой в запросе на проведение платежа |

### Дополнительные материалы

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

**Отображение значков банков на странице оплаты**

Платежи в методе title осуществляются через определенные банки. Поэтому помимо платежного метода, на странице оплаты пользователю предлагается выбрать банк, через который он будет совершать оплату.

Метод title позволяет вам определить, как отображать значки банков на странице оплаты:

**banks_idИдентификаторы банков для передачи в параметре**

banks_idru_pm_philippines_banks_purchase_redirect_banks.ditaИдентификаторы банков, которые вы можете передавать в параметре, чтобы отобразить пользователю на странице оплаты значки конкретных банков, представлены в разделе.

- **Выбор банка в два шага**Этот вариант используется по умолчанию. Пользователь выбирает банк в два шага: сначала он выбирает title среди прочих методов, а затем — конкретный банк из списка банков, доступных в методе.
- **Отображение банков на одной странице с платежными методами**split_bankspayment_methods_options`true`payment_methods_optionsВот пример использованияпри открытии страницы оплаты по ссылке:payment_methods_options={"pm_options": {"split_banks": true}}Чтобы отобразить банки на странице оплаты в виде отдельных кнопок наряду с другими платежными методами, передайте параметрсо значениемв объекте.
- **Отображение банков только одного метода**`force_pm`force_payment_methodЧтобы отобразить на странице оплаты только банки (без других платежных методов), доступные в методе title, передайте в запросе на открытие страницы оплаты код платежного методав параметре.
- **Отображение только конкретных банков**`force_pm`force_payment_methodbanks_idpayment_methods_optionsВот пример использованияпри открытии страницы оплаты по ссылке:`EPayWidget`Вот пример данных из запроса на открытие страницы оплаты с предварительно выбранными банками через виджет.payment_methods_options={"pm_options": {"split_banks": true, "banks_id": [140, 141]}}Пример данных из запроса на оплату с несколькими предварительно выбранными банками**payment_methods_options: '{"pm_options": {"banks_id": [140, 141]}}',**EPayWidget.run(
    {
        project_id: 1234,
        payment_id: 'payment_47',
        customer_id: 'customer_123',
        customer_first_name: 'John',
        customer_last_name: 'Doe',
        customer_email: 'johndoe@example.com',
        payment_currency: 'example_currency',
        payment_amount: example_amount,
        force_payment_method: 'force_pm',signature: 'kUi2x9dKHA5VNU0FY...vySO8RLCv1htT4DqtVUkDJrOcZzUCwX6Rek7pZhkIQg=='
    }
)Чтобы отобразить на странице оплаты только определенные банки из тех, что доступны в методе title, передайте в запросе на открытие страницы оплаты код платежного методав параметре, а также идентификаторы нужных банков в массиве.
- **Принудительный выбор банка**`force_pm`force_payment_methodbanks_idpayment_methods_optionsВот пример использованияпри открытии страницы оплаты по ссылке:`EPayWidget`Далее приведен пример данных из запроса на открытие страницы оплаты с предварительно выбранным банком через виджет.payment_methods_options={"pm_options": {"split_banks": true, "banks_id": [140]}}Пример данных из запроса на оплату с предварительно выбранным банком**payment_methods_options: '{"pm_options": {"banks_id": [140]}}',**EPayWidget.run(
    {
        project_id: 1234,
        payment_id: 'payment_47',
        customer_id: 'customer_123',
        customer_first_name: 'John',
        customer_last_name: 'Doe',
        customer_email: 'johndoe@example.com',
        payment_currency: 'example_currency',
        payment_amount: example_amount,
        force_payment_method: 'force_pm',signature: 'kUi2x9dKHA5VNU0FY...vySO8RLCv1htT4DqtVUkDJrOcZzUCwX6Rek7pZhkIQg=='
    }
)Если в запросе на открытие страницы оплаты передать код платежного методав параметре, а также идентификатор одного из банков в массиве, то страницы выбора метода и банка будут пропущены, а пользователь будет сразу перенаправлен в сервис банка.

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

### Тестирование

Для метода title доступно тестирование оплат через Payment Widget.

Чтобы начать тестировать оплаты, вам необходимо связаться со специалистами технической поддержки Some Platform (support@example.com для получения идентификатора тестового проекта, секретного ключа от него, а также для настройки тестовой среды для работы с методом title.

При проведении тестовых платежей учитывайте, что:

**Статусы тестовых оплат**

При тестировании оплат в методе title итоговый статус платежа зависит от того, какую сумму вы передали в запросе. В следующей таблице представлено соответствие между суммами и статусами платежа.

**Порядок проведения тестовой оплаты через Payment Widget**

Чтобы выполнить тестовую оплату через Payment Widget:

ru_pm_philippines_banks_pp_purchase_redirect.ditaПодробная информация о проведении оплаты с использованием метода title через Payment Widget представлена в разделе.

- **тестового**в запросах вы должны передавать идентификаторпроекта;
- в качестве значений параметров с данными пользователя и идентификатора платежа можно использовать случайные значения;
- `486487`в качестве идентификатора банка пользователя в запросе можно использовать толькоили;
- references/ru/currencies/PHP.ditaв качестве валюты оплаты в запросе можно использовать только;
- интерфейс эмулятора страницы оплаты может отличаться от интерфейса страницы оплаты, предоставляемой Some Platform.

1. Отправьте платежной платформе запрос на открытие страницы оплаты.
2. force_payment_method`force_pm`Выберите на странице эмулятора платежный метод title. Если в запросе был передан параметрсо значением, выбирать платежный метод не нужно.
3. При необходимости, укажите произвольные значения для запрашиваемых параметров.
4. Выберите банк, который будет использоваться для тестовой оплаты.
5. **SuccessDecline**Щелкните кнопкуили(соответствующая кнопка отобразится в зависимости от суммы, указанной в запросе).
6. Примите оповещение (callback) с информацией о результате тестовой оплаты.
7. Подождите несколько секунд, чтобы на странице эмулятора вам отобразился результат тестовой оплаты.

| Сумма платежа | Итоговый статус |
| --- | --- |
| 40000 или 40400 | decline— платеж отклонен |
| Любая другая сумма | success— платеж успешно проведен, сумма платежа в финальном оповещении совпадает с суммой в запросе на проведение платежа |

### Дополнительные материалы

- ru_pp_interaction_organisation.dita
- ru_pp_payment_model.dita
- ru_pp_authentication.dita
- ru_pp_statuses_and_response_codes.dita

