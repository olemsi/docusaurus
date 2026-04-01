# Выплата через Gate

## Общая информация

Чтобы выполнить выплату через Gate с использованием метода title:

Полная схема выплаты с использованием метода title выглядит следующим образом.

## Запрос

Далее представлена информация, необходимая для создания и отправки запроса на выплату с использованием метода 
        title.

Вот пример тела запроса на выплату с использованием метода title:

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
| accounttype_object type_strictly_required | wallet_addresstype_string type_strictly_required | `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`Пример:Адрес электронного кошелька, поддерживающего криптовалюты. |
| crypto_currencytype_string type_strictly_required | payment.currencyВозможные значения:`USDT`Пример:`A7A5:TRC20`— при передаче криптовалюты A7A5 (TRC20) на блокчейне TRON;`BNB`— при передаче криптовалюты BNB на блокчейне BSC;`BTC`— при передаче криптовалюты BTC на блокчейне Bitcoin;`ETH`— при передаче криптовалюты ETH на блокчейне Ethereum;`LTC`— при передаче криптовалюты LTC на блокчейне Litecoin;`TON`— при передаче криптовалюты TON на блокчейне TON;`TRX`— при передаче криптовалюты TRX на блокчейне TRON;`USDC:ERC20`— при передаче криптовалюты USDC (ERC20) на блокчейне Ethereum;`USDC:polygon`— при передаче криптовалюты USDC (ERC20) на блокчейне Polygon;`USDT:ERC20`— при передаче криптовалюты USDT (ERC20) на блокчейне Ethereum;`USDT:polygon`— при передаче криптовалюты USDT (ERC20) на блокчейне Polygon;`USDT:TRC20`— при передаче криптовалюты USDT (TRC20) на блокчейне TRON;`USDT:ton`— при передаче криптовалюты USDT (TRC20) на блокчейне TON.Код (тикер) криптовалюты.   Значение этого параметра должно совпадать со значением параметра. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | amount.crypto_currency`example_currency`Пример:Код валюты платежа. 		 Значение этого параметра должно совпадать со значением параметра. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |

## Запрос

Далее представлена информация, необходимая для создания и отправки запроса на выплату с использованием метода 
        title.

Вот пример тела запроса на выплату с использованием метода title:

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
| accounttype_object type_strictly_required | wallet_addresstype_string type_strictly_required | `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`Пример:Адрес электронного кошелька, поддерживающего криптовалюты. |
| crypto_currencytype_string type_strictly_required | payment.currencyВозможные значения:`USDT`Пример:`A7A5:TRC20`— при передаче криптовалюты A7A5 (TRC20) на блокчейне TRON;`BNB`— при передаче криптовалюты BNB на блокчейне BSC;`BTC`— при передаче криптовалюты BTC на блокчейне Bitcoin;`ETH`— при передаче криптовалюты ETH на блокчейне Ethereum;`LTC`— при передаче криптовалюты LTC на блокчейне Litecoin;`TON`— при передаче криптовалюты TON на блокчейне TON;`TRX`— при передаче криптовалюты TRX на блокчейне TRON;`USDC:ERC20`— при передаче криптовалюты USDC (ERC20) на блокчейне Ethereum;`USDC:polygon`— при передаче криптовалюты USDC (ERC20) на блокчейне Polygon;`USDT:ERC20`— при передаче криптовалюты USDT (ERC20) на блокчейне Ethereum;`USDT:polygon`— при передаче криптовалюты USDT (ERC20) на блокчейне Polygon;`USDT:TRC20`— при передаче криптовалюты USDT (TRC20) на блокчейне TRON;`USDT:ton`— при передаче криптовалюты USDT (TRC20) на блокчейне TON.Код (тикер) криптовалюты.   Значение этого параметра должно совпадать со значением параметра. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | amount.crypto_currency`example_currency`Пример:Код валюты платежа. 		 Значение этого параметра должно совпадать со значением параметра. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |

## Оповещение (callback)

ru_gate_callbacks.ditaВ методе title результат выплаты платежная платформа возвращает в оповещении. Подробнее о структуре оповещений см..

Вот пример тела оповещения с информацией об успешно выполненной выплате:

Вот пример тела оповещения с информацией об отклоненной выплате.

## Дополнительные материалы

- ru_gate_interaction_scheme.dita
- ru_gate_payment_model.dita
- ru_gate_authentication.dita
- ru_gate_statuses_and_response_codes.dita

---

## Выплата через Gate

### Общая информация

Чтобы выполнить выплату через Gate с использованием метода title:

Полная схема выплаты с использованием метода title выглядит следующим образом.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на выплату с использованием метода 
        title.

Вот пример тела запроса на выплату с использованием метода title:

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
| accounttype_object type_strictly_required | wallet_addresstype_string type_strictly_required | `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`Пример:Адрес электронного кошелька, поддерживающего криптовалюты. |
| crypto_currencytype_string type_strictly_required | `USDT`Значение этого параметра всегда.`USDT`Пример:Код (тикер) криптовалюты. |  |
| crypto_paywaytype_string type_strictly_required | Возможные значения:`TRC20`Пример:`ERC20`— для криптовалюты USDT (ERC20) на блокчейне Ethereum;`TRC20`— для криптовалюты USDT (TRC20) на блокчейне TRON.Этот параметр указывает на блокчейн, в котором хранится криптовалюта. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| descriptiontype_string type_strictly_required | `Описание операции.`Пример:Описание или комментарий к операции. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на выплату с использованием метода 
        title.

Вот пример тела запроса на выплату с использованием метода title:

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
| accounttype_object type_strictly_required | wallet_addresstype_string type_strictly_required | `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`Пример:Адрес электронного кошелька, поддерживающего криптовалюты. |
| crypto_currencytype_string type_strictly_required | `USDT`Значение этого параметра всегда.`USDT`Пример:Код (тикер) криптовалюты. |  |
| crypto_paywaytype_string type_strictly_required | Возможные значения:`TRC20`Пример:`ERC20`— для криптовалюты USDT (ERC20) на блокчейне Ethereum;`TRC20`— для криптовалюты USDT (TRC20) на блокчейне TRON.Этот параметр указывает на блокчейн, в котором хранится криптовалюта. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| descriptiontype_string type_strictly_required | `Описание операции.`Пример:Описание или комментарий к операции. |  |
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
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| crypto_currencytype_string type_optional | crypto_paywayВозможные значения:`USDT`Пример:`BNB`— для криптовалюты BNB;`BTC`— для криптовалюты BTC;`DAI`— для криптовалюты DAI;`ETH`— для криптовалюты ETH;`LTC`— для криптовалюты LTC;`TON`— для криптовалюты TON;`TRX`— для криптовалюты TRX;`USDC`— для криптовалюты USDC.`USDT`— для криптовалюты USDT.Код (тикер) криптовалюты. Передается в запросе вместе с параметром, чтобы предварительно выбрать криптовалюту для пользователя. Если не передан в запросе, пользователю придется самостоятельно выбрать криптовалюту в процессе оплаты. Уточняйте у специалистов технической поддержки Some Platform (support@example.com доступна ли вам возможность предварительного выбора криптовалюты для пользователя. |  |
| crypto_paywaytype_string type_optional | crypto_currencyВозможные значения:`TRC20`Пример:`BITCOIN`— при передаче криптовалюты BTC на блокчейне Bitcoin;`BSC`— при передаче криптовалют BNB и DAI (BEP20) на блокчейне BSC;`ERC20`— при передаче криптовалют USDT и USDC на блокчейне Ethereum;`ETHEREUM`— при передаче криптовалют ETH, USDT (ERC20) и USDC (ERC20) на блокчейне Ethereum;`LITECOIN`— при передаче криптовалюты LTC на блокчейне Litecoin;`POLYGON`— при передаче криптовалют USDT (ERC20) и USDC (ERC20) на блокчейне Polygon;`TON`— при передаче криптовалют TON и USDT на блокчейне TON;`TRC20`— при передаче криптовалют USDT и USDC на блокчейне TRON;`TRON`— при передаче криптовалют TRX и USDT (TRC20) на блокчейне TRON.Этот параметр указывает на блокчейн, в котором хранится криптовалюта. Передается в запросе вместе с параметром, чтобы предварительно выбрать криптовалюту для пользователя. Если не передан в запросе, пользователю придется самостоятельно выбрать криптовалюту в процессе оплаты. Уточняйте у специалистов технической поддержки Some Platform (support@example.com доступна ли вам возможность предварительного выбора криптовалюты для пользователя. |  |
| return_urltype_object type_optional | successtype_string type_optional | `https://example.com/success/`Пример:URL-адрес, на который нужно перенаправить пользователя в случае успешного завершения оплаты. |
| declinetype_string type_optional | `https://example.com/decline/`Пример:URL-адрес, на который нужно перенаправить пользователя в случае отклонения оплаты. |  |
| returntype_string type_optional | successdeclinereturn_url`https://example.com/return/`Пример:URL-адрес, куда нужно перенаправить пользователя в случае прерывания оплаты пользователем до ее завершения. Этот же адрес используется, если не заданы параметрыи. Если не задан ни один из параметров объекта, то Gate по умолчанию перенаправляет пользователя по URL-адресу, указанному в вашем проекте в Some Platform. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

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
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| crypto_currencytype_string type_optional | crypto_paywayВозможные значения:`USDT`Пример:`BNB`— для криптовалюты BNB;`BTC`— для криптовалюты BTC;`DAI`— для криптовалюты DAI;`ETH`— для криптовалюты ETH;`LTC`— для криптовалюты LTC;`TON`— для криптовалюты TON;`TRX`— для криптовалюты TRX;`USDC`— для криптовалюты USDC.`USDT`— для криптовалюты USDT.Код (тикер) криптовалюты. Передается в запросе вместе с параметром, чтобы предварительно выбрать криптовалюту для пользователя. Если не передан в запросе, пользователю придется самостоятельно выбрать криптовалюту в процессе оплаты. Уточняйте у специалистов технической поддержки Some Platform (support@example.com доступна ли вам возможность предварительного выбора криптовалюты для пользователя. |  |
| crypto_paywaytype_string type_optional | crypto_currencyВозможные значения:`TRC20`Пример:`BITCOIN`— при передаче криптовалюты BTC на блокчейне Bitcoin;`BSC`— при передаче криптовалют BNB и DAI (BEP20) на блокчейне BSC;`ERC20`— при передаче криптовалют USDT и USDC на блокчейне Ethereum;`ETHEREUM`— при передаче криптовалют ETH, USDT (ERC20) и USDC (ERC20) на блокчейне Ethereum;`LITECOIN`— при передаче криптовалюты LTC на блокчейне Litecoin;`POLYGON`— при передаче криптовалют USDT (ERC20) и USDC (ERC20) на блокчейне Polygon;`TON`— при передаче криптовалют TON и USDT на блокчейне TON;`TRC20`— при передаче криптовалют USDT и USDC на блокчейне TRON;`TRON`— при передаче криптовалют TRX и USDT (TRC20) на блокчейне TRON.Этот параметр указывает на блокчейн, в котором хранится криптовалюта. Передается в запросе вместе с параметром, чтобы предварительно выбрать криптовалюту для пользователя. Если не передан в запросе, пользователю придется самостоятельно выбрать криптовалюту в процессе оплаты. Уточняйте у специалистов технической поддержки Some Platform (support@example.com доступна ли вам возможность предварительного выбора криптовалюты для пользователя. |  |
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
    "method": "POST",
    "body": {
        "example_parameter_1": "value_1",
        "example_parameter_2": "value_2"
    },
    "encrypted": [],
    "url": "https://example.com/redirect"
}
```

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
    "method": "POST",
    "body": {
        "example_parameter_1": "value_1",
        "example_parameter_2": "value_2"
    },
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
| payment_currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| payment_amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |
| force_payment_methodtype_string type_optional | force_payment_method`force_pm`ru_pp__preselectingps.ditaЧтобы пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода, добавьте в запрос параметрсо значением. (Подробнее о предварительном выборе метода см..)`force_payment_method: 'force_pm'`Пример:Параметр, позволяющий пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода. |
| signaturetype_string type_strictly_required | ru_pp_authentication.ditaПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |
| ru_pp_parameters.ditaПри необходимости добавьте в запрос необязательные параметры из числа доступных для работы                  с Payment Widget. Подробнее о параметрах запросов в Payment Widget см.. |  |

Вы можете предварительно выбрать на странице оплаты криптовалюту для пользователя, чтобы он не смог изменить ее при оплате. Для этого добавьте в запрос на открытие страницы оплаты параметры:

Вот пример данных из запроса на открытие страницы оплаты с использованием метода title и предварительным выбором криптовалюты для пользователя:

| Объект/параметр | Параметр | Описание |
| --- | --- | --- |
| force_payment_methodtype_string  type_optional | `force_pm`Передавайте значениев этом параметре.`force_payment_method: 'force_pm'`Пример:Параметр, позволяющий пропустить страницу выбора метода и принудительно выбрать title в качестве платежного метода. |  |
| payment_methods_optionstype_object  type_optional | currency_idtype_string  type_optional | Возможные значения:`BTC`Пример:`BNB`— для криптовалюты BNB на блокчейне BSC;`BTC`— для криптовалюты BTC на блокчейне Bitcoin;`DAI_BEP20`— для криптовалюты DAI (BEP20) на блокчейне BSC;`DAI_ERC20`— для криптовалюты DAI (ERC20) на блокчейне Ethereum;`ETH`— для криптовалюты ETH на блокчейне Ethereum;`LTC`— для криптовалюты LTC на блокчейне Litecoin;`TON`— для криптовалюты TON на блокчейне TON;`TRX`— для криптовалюты TRX на блокчейне TRON;`USDC_ERC20`— для криптовалюты USDC (ERC20) на блокчейне Ethereum;`USDC_POLYGON`— для криптовалюты USDC (ERC20) на блокчейне Polygon;`USDT_ERC20`— для криптовалюты USDT (ERC20) на блокчейне Ethereum;`USDT_POLYGON`— для криптовалюты USDT (ERC20) на блокчейне Polygon;`USDT_TON`— для криптовалюты USDT на блокчейне TON;`USDT_TRC20`— для криптовалюты USDT (TRC20) на блокчейне TRON.Код (тикер) криптовалюты. |

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

