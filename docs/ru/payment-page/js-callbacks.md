# Получение и обработка информации о действиях пользователя на Payment Widget

Сгенерированная платежная страница может синхронно передавать на страницу сайта информацию о действиях пользователя, а также позволяет вам реализовать собственные функции-обработчики для произвольной обработки этих действий на сайте. Вот некоторые действия пользователя на сайте которые можно обработать с применением функций-обработчиков:

выбор вкладки;выбор платежного метода;выбор любых переключателей: сумма, сохранение реквизитов;изменение значений полей ввода: счета, телефоны, префиксы, кроме секретных данных;или выплатуотправка запроса на оплату.

Названия и код функций-обработчиков указываются в строке вызова самого виджета. В следующих разделах подробнее рассказывается, как передавать эту информацию при вызове виджета.

::: tip
оповещенийЭта возможность предназначена для получения информации о событиях страницы и действиях пользователя на ней, но не о статусах платежа и операций. Информацию о статусах следует получать из.
:::

## Предварительная настройка

<link rel="stylesheet" href="domen_PP/shared/merchant.css" />
${empty}Чтобы иметь возможность получать информацию о событиях страницы и действиях пользователя на ней, а также обрабатывать эти события, вы должны встроить Payment Widget в веб-страницу своего проекта. Кроме того, в заголовок веб-страницы надо добавить ссылки на следующие библиотеки:

Никаких дополнительных операций по конфигурированию среды для обработки событий не требуется.

::: tip
*pp_host*Здесь вместо <> надо указать доменное имя Payment Widget, которое следует узнавать у своего курирующего менеджера или в службе поддержки.
:::

## Реализация функций-обработчиков событий

`onResize`При выполнении пользователем некоторых операций на веб-странице инициируются те или иные события, которые можно обрабатывать с помощью пользовательских функций-обработчиков. При возникновении событий автоматически вызываются функции, определения которых были ранее переданы при вызове виджета. Вот пример вызова виджета с определением функции, которая будет автоматически вызываться при событии изменения размера окна:

`onResize`— название функции-обработчика с указанием события (изменение размера), которое эта функция обрабатывает, а выделенный курсивным начертанием текст — код функции, которая будет автоматически выполняться при возникновении события.`datadatamyWidthmyHighdata`— JavaScript-объект, в котором передается информация, относящаяся к выбранному событию. В частности, в этом примере в объектепередаются новая ширина и высота окна после изменения его размера. Эти значения функция-обработчик присваивает переменными, соответственно. Более подробная информация о содержащихся в JavaScript-объектеданных приведена в таблице далее в этом разделеВ приведенном выше примере полужирным начертанием выделен код функции-обработчика, которая будет вызываться при возникновении указанного события. Вот некоторые компоненты этого кода:

`dataonPaymentMethodSelectonPaymentMethodSelectnewPaymentsMethod`При возникновении других событий передается другая полезная информация. Например когда пользователь выбирает на странице тот или иной платежный метод в переменнойпередается название, тип и код платежного метода. Эту информацию вы вправе использовать в своей реализации функции, которая служит для обработки события выбора платежного метода. Вот пример, определения функции в котором при выборе пользователем на сайте того или иного платежного метода вызывается функция-обработчикприсваивающая название этого метода переменной:

`data`Надо понимать, что эта функция-обработчик события не присутствует в подключаемых к веб-странице библиотеках напрямую — код этих функций передается при вызове виджета. Иначе говоря, чтобы обеспечить вызов такой функции надо при вызове виджета, помимо кода вызова самого виджета для каждого перехватываемого события указать код функции-обработчика. В коде функции-обработчика можно обращаться к объекту, в котором в функцию-обработчик передается информация, относящаяся к перехватываемому событию.

`data`В следующей таблице перечислены поддерживаемые функции-обработчики событий вместе с описанием событий и примерами данных, передаваемых в JavaScript-объекте.

```c
**onResize:*****function (data) {
        site.resize({
            myWidth: data.width,
            myHeight: data.high
  }); 
 }***EPayWidget.run({    
    payment_id: 'X03936',
    payment_amount: 2035,
    payment_currency: 'USD',
    project_id: 22,
    signature: 'YWb6Z20ByxpQ30hfTIjaCCsVIwVynXV',,
}, 'POST');
```

```c
**onPaymentMethodSelect:*****function (data) {
        site.resize({
            newPaymentMethod: data.name,
  });  
 }***EPayWidget.run({    
    payment_id: 'X03936',
    payment_amount: 2035,
    payment_currency: 'USD',
    project_id: 22,
    signature: 'YWb6Z20ByxpQ30hfTIjaCCsVIwVynXV',,
}, 'POST');
```

| Название функции-обработчика события | Описание обрабатываемого события | `data`Пример |
| --- | --- | --- |
| onResize | Изменение размеров документа внутри iframe-виджета | РазвернутьСвернуть{ "width":1080, "height":660 } |
| onTabChange | Изменение режима кассы: deposit или withdrawal | РазвернутьСвернуть{ "tab": "withdrawal" } |
| onPaymentMethodSelect | Выбор платежного метода | РазвернутьСвернуть{ "name":"Банковские карты", "payment_method_type":"1", "payment_method_code":"card" } |
| onLoaded | Завершение загрузки контента виджета | РазвернутьСвернуть{ "width":100, "height":100 } |
| onPaymentSuccess | Успешная оплата | РазвернутьСвернуть{ "sum_request":{     "amount":99,     "currency":"EUR" }, "request_id":"f68d1288e3e37b0ded8763d94588dd2915c5dfadb5024", "transaction":{     "id":2000000004,     "date":"2019-02-28T11:14:49+0000",     "type":"purchase" }, "payment":{     "method":"card",     "date":"2019-02-28T11:14:49+0000",     "result_code":"0",     "result_message":"Success",     "status":"success",     "is_new_attempts_available":false,     "attempts_timeout":0,     "id":"EP394c-56d4",     "provider_id":3 }, "sum_real":{     "amount":99,     "currency":"EUR" }, "customer":{     "id":"1" }, "status":"success", "account":{     "number":"555555******4444",     "type":"mastercard",     "card_holder":"FG FG",     "id":37489,     "expiry_month":"07",     "expiry_year":"2021" }, "rrn":"000047769105", "auth_code":"563253", "project_id":140, "description":"", "operations":[{     "id":2000000004,         "type":"sale",     "status":"success",     "date":"2019-02-28T11:14:49+0000",     "processing_time":"2019-02-28T11:14:49+0000",     "sum":{         "amount":99,         "currency":"EUR"         },     "code":"0",     "message":"Success" } ], "return_url":"http://pp/process/complete-redirect?0ebeqgdcgbsj3d278b46", "signature":"EjYXLJpvDBPtbwQSQ0u...ZTtNz2Vm33AA==" } |
| onPaymentFail | Отклонение оплаты | РазвернутьСвернуть{ "sum_request":{     "amount":99,     "currency":"EUR" }, "request_id":"f68d1288e3e37b0ded8763d94588dd2915c5dfadb5024", "transaction":{     "id":2000000004,     "date":"2019-02-28T11:14:49+0000",     "type":"purchase" }, "payment":{     "method":"card",     "date":"2019-02-28T11:14:49+0000",     "result_code":"10106",     "result_message":"expired",     "status":"decline",     "is_new_attempts_available":false,     "attempts_timeout":0,     "id":"EP39456d4",     "provider_id":3 }, "sum_real":{     "amount":99,     "currency":"EUR" }, "customer":{     "id":"1" }, "status":"success", "account":{     "number":"555555******4444",     "type":"mastercard",     "card_holder":"FG FG",     "id":37489,     "expiry_month":"07",     "expiry_year":"2021" }, "rrn":"000047769105", "auth_code":"563253", "project_id":140, "description":"", "operations":[{     "id":2000000004,         "type":"sale",     "status":"decline",     "date":"2019-02-28T11:14:49+0000",     "processing_time":null,     "sum":{         "amount":99,         "currency":"EUR"         },     "code":"10106",         "message":"expired" } ], "return_url":"http://pp/process/complete-redirect?0ebeqgdcgbsj3d278b46", "signature":"EjYXLJpvDBPtbwQSQ...aZTtNz2Vm33AA==" } |
| onExit | Закрытие виджета, не содержит данных | - |
| onPaymentSent | **Оплатить**Отправка платежных данных — пользователь нажал на, не содержит данных | - |
| onAmountChange | Изменение суммы заказа | РазвернутьСвернуть{ "value":"99", "currency":"USD" } |
| onWalletSelect | Выбор сохраненных платежных данных | РазвернутьСвернуть{ "code":"card", "id":"37489", "pan":"555555******4444", "month":"7","year":"2021", "type":"mastercard", "pan_first6":"555555", "pan_last4":"4444", "expired":"0", "cvv_required":"1", "holder":"FG FG", "token":"503596ab84feeef727745344e7874f53363fab1f67166776dde10813202341ce", "field_values":{     "country":"",     "phone":"",     "email":"",     "card[expiry]":"07/21",     "card[holder]":"FG FG",     "card[type]":"mastercard",     "card[country]":"RU",     "card[product_name]":"MLF - MasterCard Agro",     "card[bank_name]":"Super Test Bank XXX",     "recurring_enable":"0" } } |
| onWalletRemove | Удаление сохраненных платежных данных | РазвернутьСвернуть{ "code":"card", "id":"37490", "pan":"555555******4444", "month":"4","year":"2020", "type":"mastercard", "pan_first6":"555555", "pan_last4":"4444", "expired":"0", "cvv_required":"1", "holder":"FG FG", "token":"3c45c90d447aea21bd391e1f19453d94253ff9651f8c3bd8261b25e0c48a5a85", "field_values":{     "country":"",     "phone":"",     "email":"",     "card[expiry]":"07/21",     "card[holder]":"FG FG",     "card[type]":"mastercard",     "card[country]":"RU",     "card[product_name]":"MasterCard Agro",     "card[bank_name]":"Test Bank",     "recurring_enable":"0" } } |
| onTokenizeSuccess | Создание токена для банковской карты | РазвернутьСвернуть{ "project_id":140, "request":{     "id":"a748130e0350895d71bd815434feec695552",     "action":"tokenize",     "status":"success" }, "token":"9547420d22e411ae1...217", "customer":{     "ip_address":"192.168.15.1",     "id":"1" }, "token_created_at":"2019-02-28T11:25:30+0000", "token_status":"active", "signature":"Lqj0B3ue5tG33F9NnfEs0...O5MC64iW3k77tg==" } |
| onFailLoading | Ошибка при загрузке виджета | РазвернутьСвернуть{ "message": "Application error", "config":  { "css_modal_wrap": "standart", "customer_id": "Jablonskiy", "frame_mode": "iframe", "payment_amount": "1000", "payment_currency": "USD", "payment_id": "EP753c-bfb7", "project_id": "666", "signature": "qwerty", "target_element": "iframe-holder" } } |
| onPaymentSubmitResult | Регистрация запроса в платежной платформе | РазвернутьСвернуть{  "request_id": "bc6195a61ac65e1b08b039e7a47bc2d07750d454-5a03248280c624d2afe2045c4e954aca63ceee2f-00002836" } |
| onShowClarificationPage | Открытие страницы для ввода дополнительных данных о платеже | - |
| onSubmitClarificationForm | Подтверждение отправки дополнительных данных о платеже | - |

::: tip
Код функции-обработчика должен передаваться вместе с кодом вызова виджета.
:::
