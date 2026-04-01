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
| Конечная точка | `/v2/payment/bank-transfer/bolivia/sale` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |  |
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
| identifytype_object type_optional | doc_numbertype_string type_optional | `12345678901`Пример:Номер документа, подтверждающего личность пользователя. |
| doc_typetype_string type_optional | Возможные значения:`CI`Пример:`CI`— для идентификатора удостоверения личности (Cédula de Identidad);`CEX`— для идентификатора удостоверения личности иностранного гражданина (Cédula de Identidad de Extranjero);`PAS`— для номера паспорта (Pasaporte);`OD`— для идентификатора иного удостоверения личности (Otro Documento de Identidad);`NIT`— для уникального номера налогоплательщика (Número de Identificatión Tributaria).Тип документа, подтверждающего личность пользователя. |  |
| accounttype_object type_optional | numbertype_string type_optional | `1234567890`Пример:Номер счета пользователя. |
| typetype_string type_optional | Возможные значения:`SVGS`Пример:`CACC`— для текущего счета;`SVGS`— для сберегательного счета.Тип счета пользователя. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| return_urltype_object type_optional | successtype_string type_optional | `https://example.com/success/`Пример:URL-адрес, на который нужно перенаправить пользователя в случае успешного завершения оплаты. |
| declinetype_string type_optional | `https://example.com/decline/`Пример:URL-адрес, на который нужно перенаправить пользователя в случае отклонения оплаты. |  |
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
| Конечная точка | `/v2/payment/bank-transfer/bolivia/payout` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе. |  |  |
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
| identifytype_object type_strictly_required | doc_numbertype_string type_strictly_required | `12345678901`Пример:Номер документа, подтверждающего личность пользователя. |
| doc_typetype_string type_strictly_required | Возможные значения:`CI`Пример:`CI`— для идентификатора удостоверения личности (Cédula de Identidad);`CEX`— для идентификатора удостоверения личности иностранного гражданина (Cédula de Identidad de Extranjero);`PAS`— для номера паспорта (Pasaporte);`OD`— для идентификатора иного удостоверения личности (Otro Documento de Identidad);`NIT`— для уникального номера налогоплательщика (Número de Identificatión Tributaria).Тип документа, подтверждающего личность пользователя. |  |
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890`Пример:Номер счета пользователя. |
| typetype_string type_strictly_required | Возможные значения:`SVGS`Пример:`CACC`— для текущего счета;`SVGS`— для сберегательного счета.Тип счета пользователя. |  |
| bank_idtype_integer type_strictly_required | ru_pm_bolivia_bt_payout_banks.dita`75542`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков см.. |  |
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

## Банки для выплаты

### Список банков

account.bank_idВыплата в методе title осуществляется через банки, поддерживающие работу с этим методом. В запросе на выплату в параметревы должны передать идентификатор банка пользователя, который следует использовать для выполнения платежа.

В таблице ниже представлена информация о доступных для выплаты банках в методе title.

Данная таблица со списком банков представлена в ознакомительных целях. Поскольку состав этого списка может меняться, рекомендуем уточнять актуальный список банков, доступных при работе с методом title, с помощью запроса списка банков.

| Банк | Идентификатор |
| --- | --- |
| 1 de Septiembre Ltda. | 78852 |
| 2 de Junio Abasto Ltda | 78702 |
| 4 de Agosto Ltda. | 78842 |
| Alalay Ltda. | 78862 |
| Almacenes Internacionales S.A. | 78672 |
| Andrés Ibáñez Ltda. | 78872 |
| Argenper Bolivia S.R.L. | 78622 |
| Banco BISA | 75626 |
| Banco de Crédito de Bolivia | 75542 |
| Banco de la Nacían Argentina | 75936 |
| Banco do Brasil | 75616 |
| Banco Ecofuturo | 75896 |
| Banco Economico | 75646 |
| Banco Fassil | 75886 |
| Banco FIE | 75876 |
| Banco Fortaleza | 75906 |
| Banco Ganadero | 75666 |
| BANCO MERCANTIL SANTA CRUZ S.A | 78682 |
| BANCO MERCANTIL | 74552 |
| Banco Nacional de Bolivia | 75606 |
| Banco para el Fomento a Iniciativas Económicas S.A. | 78552 |
| Banco Pyme de la Comunidad | 75866 |
| BANCO PYME LOS ANDES PROCREDIT S.A. | 78532 |
| Banco Solidario | 75656 |
| Banco Union | 75636 |
| Billetera Movil de Entel | 75956 |
| Caceres Ltda | 78632 |
| Cantera Ltda. | 78882 |
| Compañia Interamericana de Servicios S.R.L. | 78642 |
| Concordia Ltda | 78892 |
| Cooperativa Catedral | 75846 |
| Cooperativa Comarapa | 75806 |
| Cooperativa Educadores Gran Chaco | 75836 |
| Cooperativa El Chorolque | 75826 |
| Cooperativa Fatima | 75726 |
| Cooperativa Jesus Nazareno | 75706 |
| Cooperativa La Merced | 75926 |
| Cooperativa Loyola | 75746 |
| Cooperativa PIO X | 75766 |
| Cooperativa Quillacollo | 75776 |
| Cooperativa San Antonio | 75756 |
| Cooperativa San Jose de Punata | 75786 |
| Cooperativa San Martin | 75716 |
| Cooperativa San Mateo | 75816 |
| Cooperativa San Pedro | 75736 |
| Cooperativa Trinidad | 75796 |
| Cooprole Ltda. | 78712 |
| Credicoop Ltda | 78902 |
| Crédito Abierta Jesús Nazareno Ltda | 79112 |
| Credito con Educacion Rural Institucion Financiera de Desarrollo (CRECER IFD) | 78562 |
| Cristo Rey Ltda. | 78722 |
| Diaconia IFD | 78572 |
| El Buen Samaritano Ltda. | 78732 |
| El Churqui Ltda | 78742 |
| El Cristo Ltda | 78912 |
| EMPETROL Ltda | 78752 |
| EUROENVIOS S.R.L | 78662 |
| FONDECO IFD | 78582 |
| FUBODE IFD | 78592 |
| Gran Grigotá Ltda. | 78762 |
| Hospicio Ltda. | 78922 |
| Ibercoop Ltda | 78932 |
| IDEPRO IFD | 78602 |
| IMPRO IFD | 78612 |
| Institución Financiera de Desarrollo CIDRE | 78542 |
| Institucion Financiera de Desarrollo | 75916 |
| Jerusalén Ltda. | 78942 |
| La Primavera Ltda. | 78952 |
| La Sagrada Familia Ltda. | 78772 |
| Magisterio Rural de Chuquisaca Ltda. | 78782 |
| Magisterio Rural | 75856 |
| More Bolivia S.A | 78652 |
| Multiactiva Santiago de Munaypata Ltda | 79102 |
| Mutual el Progreso | 75696 |
| Mutual la Primera | 75676 |
| Mutual la Promotora | 75686 |
| Nuestra Señora de Los Remedios Ltda. | 78792 |
| Paulo VI Ltda. | 78962 |
| Perú Services S.R.L | 78692 |
| Piraí Ltda | 78972 |
| Reyes Ltda. | 78982 |
| Sacarosa Ltda. | 78802 |
| San Bartolomé Ltda | 78992 |
| San Francisco de Asís Ltda. | 79002 |
| San Francisco Solano Ltda. | 78812 |
| San Gabriel Ltda. | 79012 |
| Sarco Ltda | 78822 |
| Señor de Burgos Ltda. | 79022 |
| Solucredit San Silvestre | 79032 |
| Terracoop Ltda. | 79042 |
| Tigo Money | 75946 |
| Tukuypaj Ltda. | 78832 |
| Varsa Ltda. | 79052 |
| Vía y Obras Ltda. | 79062 |
| Vinto Ltda. | 79072 |
| Virgen de los Remedios Ltda | 79082 |
| Virgen de Urkupiña Ltda. | 79092 |
| YAPE | 79122 |

### Запрос списка банков

Состав списка банков может меняться, поэтому мы рекомендуем уточнять актуальный список банков, доступных 
    при работе с методом title, с помощью запроса со следующим форматом и параметрами:

Вот пример данных из запроса списка банков, поддерживающих работу с методом title.

| **HTTP-метод запроса** | POST |
| --- | --- |
| **Формат тела запроса** | JSON |
| **Конечная точка** | `/v2/info/banks/bank-transfer/bolivia/payout/list` |
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

## Bank transfers in Bolivia -Выплата

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
| **Валюты выплаты** | references/ru/currencies/BOB.dita |
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
| customer_account_numbertype_string type_optional | `1234567890`Пример:Номер счета пользователя. |
| identify_doc_numbertype_string type_optional | `12345678901`Пример:Номер документа, подтверждающего личность пользователя. |
| identify_doc_typetype_string type_optional | Возможные значения:`CI`Пример:`CI`— для идентификатора удостоверения личности (Cédula de Identidad);`CEX`— для идентификатора удостоверения личности иностранного гражданина (Cédula de Identidad de Extranjero);`PAS`— для номера паспорта (Pasaporte);`OD`— для идентификатора иного удостоверения личности (Otro Documento de Identidad);`NIT`— для уникального номера налогоплательщика (Número de Identificatión Tributaria).Тип документа, подтверждающего личность пользователя. |
| payment_currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| payment_amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |
| force_payment_methodtype_string type_optional | force_payment_method`force_pm`ru_pp__preselectingps.ditaЧтобы пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода, добавьте в запрос параметрсо значением. (Подробнее о предварительном выборе метода см..)`force_payment_method: 'force_pm'`Пример:Параметр, позволяющий пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода. |
| account_typetype_string type_optional | Возможные значения:`SVGS`Пример:`CACC`— для текущего счета;`SVGS`— для сберегательного счета.Тип счета пользователя. |
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

## Bank transfers in Bolivia -Оплата

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
| **Валюты оплаты** | references/ru/currencies/BOB.dita |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**Если пользователь при оплате укажет сумму, отличную от суммы, указанной в запросе на оплату, то платеж останется в промежуточном статусе, пока конфликт не будет разрешен вручную техническими специалистами Some Platform.Реквизиты для оплаты должны использоваться только один раз. Для повторной оплаты пользователь должен инициировать новый платеж. |  |

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

| title — это популярный в Боливии платежный метод, с помощью которого пользователи могут оплачивать в вашей системе различные услуги, а также получать денежные средства.Платежный метод title позволяет принимать от пользователей оплату, используя Payment Widget и Gate, а также проводить пользователям выплату через Gate и Dashboard.здесьЗагрузить логотип этого платежного метода в векторном формате можно. |  |
| --- | --- |

| Тип платежного метода | Банковские переводы |
| --- | --- |
| Регионы использования |  |
| Валюты платежей | references/ru/currencies/BOB.dita |
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
| Конечная точка | `/v2/payment/bank-transfer/bolivia/payout` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе. |  |  |
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
| identifytype_object type_strictly_required | doc_numbertype_string type_strictly_required | `12345678901`Пример:Номер документа, подтверждающего личность пользователя. |
| doc_typetype_string type_strictly_required | Возможные значения:`CI`Пример:`CI`— для идентификатора удостоверения личности (Cédula de Identidad);`CEX`— для идентификатора удостоверения личности иностранного гражданина (Cédula de Identidad de Extranjero);`PAS`— для номера паспорта (Pasaporte);`OD`— для идентификатора иного удостоверения личности (Otro Documento de Identidad);`NIT`— для уникального номера налогоплательщика (Número de Identificatión Tributaria).Тип документа, подтверждающего личность пользователя. |  |
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890`Пример:Номер счета пользователя. |
| typetype_string type_strictly_required | Возможные значения:`SVGS`Пример:`CACC`— для текущего счета;`SVGS`— для сберегательного счета.Тип счета пользователя. |  |
| bank_idtype_integer type_strictly_required | ru_pm_bolivia_bt_payout_banks.dita`75542`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков см.. |  |
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
2. Перенаправьте пользователя в сервис provider_service.
3. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `/v2/payment/bank-transfer/bolivia/sale` |
| Полная спецификация конечной точки |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |  |
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
| identifytype_object type_optional | doc_numbertype_string type_optional | `12345678901`Пример:Номер документа, подтверждающего личность пользователя. |
| doc_typetype_string type_optional | Возможные значения:`CI`Пример:`CI`— для идентификатора удостоверения личности (Cédula de Identidad);`CEX`— для идентификатора удостоверения личности иностранного гражданина (Cédula de Identidad de Extranjero);`PAS`— для номера паспорта (Pasaporte);`OD`— для идентификатора иного удостоверения личности (Otro Documento de Identidad);`NIT`— для уникального номера налогоплательщика (Número de Identificatión Tributaria).Тип документа, подтверждающего личность пользователя. |  |
| accounttype_object type_optional | numbertype_string type_optional | `1234567890`Пример:Номер счета пользователя. |
| typetype_string type_optional | Возможные значения:`SVGS`Пример:`CACC`— для текущего счета;`SVGS`— для сберегательного счета.Тип счета пользователя. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
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

Вот пример тела оповещения с информацией об успешно выполненной оплате:

Вот пример тела оповещения с информацией об отклоненной оплате.

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

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |
| --- | --- |
| Параметр | Описание |
| project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |
| customer_idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| customer_first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |
| customer_last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |
| customer_emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |
| customer_account_numbertype_string type_optional | `1234567890`Пример:Номер счета пользователя. |
| identify_doc_numbertype_string type_optional | `12345678901`Пример:Номер документа, подтверждающего личность пользователя. |
| identify_doc_typetype_string type_optional | Возможные значения:`CI`Пример:`CI`— для идентификатора удостоверения личности (Cédula de Identidad);`CEX`— для идентификатора удостоверения личности иностранного гражданина (Cédula de Identidad de Extranjero);`PAS`— для номера паспорта (Pasaporte);`OD`— для идентификатора иного удостоверения личности (Otro Documento de Identidad);`NIT`— для уникального номера налогоплательщика (Número de Identificatión Tributaria).Тип документа, подтверждающего личность пользователя. |
| payment_currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| payment_amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |
| force_payment_methodtype_string type_optional | force_payment_method`force_pm`ru_pp__preselectingps.ditaЧтобы пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода, добавьте в запрос параметрсо значением. (Подробнее о предварительном выборе метода см..)`force_payment_method: 'force_pm'`Пример:Параметр, позволяющий пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода. |
| account_typetype_string type_optional | Возможные значения:`SVGS`Пример:`CACC`— для текущего счета;`SVGS`— для сберегательного счета.Тип счета пользователя. |
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

