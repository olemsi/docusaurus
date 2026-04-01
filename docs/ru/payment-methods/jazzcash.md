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
| Конечная точка | `/v2/payment/wallet/jazzcash/sale` |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890`Пример:Номер электронного кошелька пользователя в сервисе title. |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

## Отображение платежной инструкции пользователю

Получив и обработав запрос на оплату, платежная платформа направит вам оповещение (callback) с платежной инструкцией для отображения пользователю.

display_dataЧтобы отобразить пользователю платежную инструкцию, используйте информацию из массива.

Пример текста платежной инструкции, который вы можете использовать в своей системе.

display_dataДалее представлен фрагмент оповещения с массивом.

```json
"display_data": [
    {
        "type": "add_info",
        "title": "receiver_name",
        "data": "example"
    },
    {
        "type": "add_info",
        "title": "account_number",
        "data": "1234567891"
    }
]
```

| Элемент | Описание |
| --- | --- |
| {     "type": "add_info",     "title": "receiver_name",     "data": "example" } | `example`Пример:Название платежного метода. |
| {     "type": "add_info",     "title": "account_number",     "data": "1234567891" } | `1234567891`Пример:Номер счета получателя перевода. |

| Текст инструкции на языке урду | Текст инструкции на языке урду с записью латиницей | Текст инструкции на английском языке |
| --- | --- | --- |
| رقم ادائیگی کی ہدایاتTill ID کے ذریعے رقم کی منتقلی کیلئے جاز کیش مینو سے "Scan QR" کو منتخب کریں۔مہربانی کر کے اس پیج پر دکھائی گئی رقم کے مطابق سختی سے رقم منتقل کریں اور رقم میں تبدیلی نہ کریں۔جب آپ رقم منتقل کرتے ہیں تو آپ کو یہ یقینی بنانا ہوگا کہ ہمیں بغیر کسی کٹوتی کے اُتنی ہی رقم موصول ہو۔غلطی کی صورت میں ہمیں کم یا زیادہ رقم ملتی ہیں ہم اس کے مطابق آپ کے اکاؤنٹ میں کریڈٹ کر دینگے۔مہرابانی کر کے پہلے جمع کی گئی اکاؤنٹس میں براہ راست راقم نہ بھیجے۔ ہوسکتا ہے کہ یہ ٹریک نہ ہو اور ہم اس طرح کے ٹرانزیکشنز کے زمہ دار نہیں ہونگے۔ اس سے پہلے کہ آپ رقم ادائیگی کرنا چاہیں ہمیشہ ایک نیا آرڈر دیں۔مہرابانی کر کے ایک گھنٹے کے اندر ٹرانزیکشن مکمل کریں۔ اگر آپ ایک گھنٹے کے بعد اس طرح کے ٹرانزیکشن کی ادائیگی کرتے ہیں، تو مہربانی کر کے کسٹمر سپورٹ سے رابطہ کریں۔* مہربانی کر کے اوپر دی گئی رقم ادائیگی کی ہدایت کی سختی سے پابندی کرے۔ اگر کوئی خلاف ورزی ہوتی ہے، تو اکاؤنٹ میں پیسے واپس نہیں کیا جائے گا، اور پلیٹ فارم کسی بھی نقصان کیلئے زمہ دار نہیں ہوگا:مہربانی کرکے جاز کیش ٹرانزیکشن آئی ڈی درج کریں۔براہ کرم درست رقم درج کریں۔براہ کرم ہمیں درست معلومات فراہم کریں جیسا کہ کامیاب ٹرانزیکشن آئی ڈی اور رقم، تاکہ رقم آپ کے اکاؤنٹ میں جمع ہو جائے۔ | Payment ke Hidayat:Till ID k zariye raqam ki muntaqili k liay JazzCash menu sy ScanQR ko muntakhib karen.Mehrabani kar k iss page par dekhae gaye raqam k mutabiq sakhty sy raqam transfer karen, aur raqam mein tabdeeli na karen.jaab aap transfer karty hain, to aap ko yeh yaqeeni banana hoga keh hamein baghair kisi katothy k uthni he raqam maosool ho.Ghalti ki surat mein hamein km ya zayada raqam melti hi, hum iss k mutabiq aap k account mein credit kar deingay.Mehrabani kar k pehly jama ky gayee accounts mein direct raqam na bhejay. Hosakta hai keh yeh track na ho aur hum iss tarah k transactions k zema dar nahi hongay. Iss say pehly keh aap adaigi karna chahian hamesha aik naya order dai.Mehrabani kar k 1 ghantay k andar transaction mukammal karen. Agar aap 1 ghantay k baad iss tarah k transaction ki payment karty hain to mehrabani kar k customor support sy rabta karen.*Mehrabani kar k oppar dee gaye payment ki hidayat ki sakhti sy pabandi karen. Agar koe khelaf warzi hoti hai, to account mein paisy wapas nahi keya jae ga, aur platform kessi bhi nuqsaan ke liye zema daar nahi hoga:Mehrabani kar k JazzCash transaction ID daraj karenMehrabani kar k drust raqam daraj karenMehrabani kar k hamein drust maloomat paraham karen, jesy keh successful transaction ID aur raqam aap k account mein raqam jama karwany ke liye | Payment Instructions:To transfer money via Till ID, select ScanQR from the JazzCash menu, then enter your Till ID number.Please transfer funds strictly in accordance with the amount displayed on this page and do not modify the amount.When transferring, make sure we receive the same amount without any deduction.If there is a mistake while transferring, and we receive a smaller or larger amount, we will credit to your account accordingly.Please do not send money directly to the previously deposit accounts. It may not be trackable, and we will not be responsible for such transactions. Always place a new order before you pay.Please complete the payment within 1 hour. If you complete the payment after the time limit expires, please contact the customer support.*Please follow the payment instructions as written. If there is any violation, the account will not be credited, and the platform will not be responsible for any losses caused:Please enter the Jazzcash transaction id.Please enter the correct amount.Please provide us with correct information such as the successful transaction ID and amount so that the funds are credited to your account. |

## идентификатора платежаОтправкав платежную платформу

идентификатор платежаВведенный пользователемвы должны отправить в платежную платформу в новом запросе. Далее приведены основные характеристики и параметры 
     такого запроса.

идентификатора платежаВот пример данных из запроса для передачи в платежную платформу:

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
| additional_datatype_object type_strictly_required | additional_datatype_object type_strictly_required | txreftype_string type_strictly_required | `1234567890`Пример:Идентификатор платежа, который пользователь получает от сервиса title. |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |  |

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
| Конечная точка | `/v2/payment/wallet/jazzcash/sale` |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890`Пример:Номер телефона, привязанный к электронному кошельку пользователя в сервисе title. |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

### Отображение платежной инструкции пользователю

display_dataВ некоторых случаях, получив и обработав запрос на оплату, платежная платформа направит вам оповещение (callback) с массивом.

Вам нужно только принять это оповещение, отображать данные пользователю не требуется.

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
        "data": "PKR"
    },
    {
        "type": "add_info",
        "title": "account_number",
        "data": "1234567890"
    }
]
```

| Элемент | Описание |
| --- | --- |
| {     "type": "add_info",     "title": "amount",     "data": "10000" } | `10000`Пример:Сумма платежа. |
| {     "type": "add_info",     "title": "currency",     "data": "PKR" } | `PKR`Пример:Валюта платежа. |
| {     "type": "add_info",     "title": "account_number",     "data": "1234567890" } | `1234567890`Пример:Номер счета пользователя. |

### OTP-кодаОтправкав платежную платформу

OTP-кодВведенный пользователемвы должны отправить в платежную платформу в новом запросе. Далее приведены основные характеристики и параметры 
     такого запроса.

OTP-кодаВот пример данных из запроса для передачи в платежную платформу:

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
| additional_datatype_object type_strictly_required | otp_codetype_string type_strictly_required | `1234`Пример:OTP-код, который пользователь получает в сообщении от оператора связи. |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |

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
2. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `/v2/payment/wallet/jazzcash/sale` |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890`Пример:Номер телефона, привязанный к электронному кошельку пользователя в сервисе title. |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

### Отображение платежной инструкции пользователю

display_dataВ некоторых случаях, получив и обработав запрос на оплату, платежная платформа направит вам оповещение (callback) с массивом.

Вам нужно только принять это оповещение, отображать данные пользователю не требуется.

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
        "data": "PKR"
    },
    {
        "type": "add_info",
        "title": "account_number",
        "data": "1234567890"
    }
]
```

| Элемент | Описание |
| --- | --- |
| {     "type": "add_info",     "title": "amount",     "data": "10000" } | `10000`Пример:Сумма платежа. |
| {     "type": "add_info",     "title": "currency",     "data": "PKR" } | `PKR`Пример:Валюта платежа. |
| {     "type": "add_info",     "title": "account_number",     "data": "1234567890" } | `1234567890`Пример:Номер счета пользователя. |

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
| Конечная точка | `/v2/payment/wallet/jazzcash/sale` |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890`Пример:Номер телефона, привязанный к электронному кошельку пользователя в сервисе title. |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
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
| Конечная точка | `/v2/payment/wallet/jazzcash/payout` |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890`Пример:Номер электронного кошелька пользователя в сервисе title. |
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

## JazzCash -Выплата

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
| **Валюты выплаты** | references/ru/currencies/PKR.dita |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**Выплата может занимать до 24 часов. |  |

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

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_pp_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, на странице оплаты пользователю отобразятся поля, где он сможет самостоятельно ввести недостающую информацию. Подробнее о предоставлении таких параметров см..type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |
| --- | --- |
| Параметр | Описание |
| project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |
| customer_idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| customer_first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |
| customer_last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |
| customer_emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |
| account_customer_nametype_string type_required | `John Doe`Пример:Полное имя пользователя. |
| account_numbertype_string type_required | `1234567`Пример:Номер электронного кошелька пользователя в сервисе title. |
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

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_pp_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, на странице оплаты пользователю отобразятся поля, где он сможет самостоятельно ввести недостающую информацию. Подробнее о предоставлении таких параметров см..type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |
| --- | --- |
| Параметр | Описание |
| project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |
| customer_idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| customer_first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |
| customer_last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |
| customer_emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |
| account_numbertype_string type_required | `12345678901`Пример:Номер телефона, привязанный к электронному кошельку пользователя в сервисе title. |
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

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_pp_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, на странице оплаты пользователю отобразятся поля, где он сможет самостоятельно ввести недостающую информацию. Подробнее о предоставлении таких параметров см..type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |
| --- | --- |
| Параметр | Описание |
| project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |
| customer_idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| customer_first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |
| customer_last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |
| customer_emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |
| account_customer_nametype_string type_required | `John Doe`Пример:Полное имя пользователя. |
| account_numbertype_string type_required | `12345678901`Пример:Номер телефона, привязанный к электронному кошельку пользователя в сервисе title. |
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

## JazzCash -Оплата 1: с отображением реквизитов

При оплате 
пользователь следует шагам платежной инструкции, отображаемой на странице оплаты или в вашей системе (при работе через Gate).

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата |  |  |  |

| **Регионы использования** |  |
| --- | --- |
| **Валюты оплаты** | references/ru/currencies/PKR.dita |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**Оплата может занимать до 24 часов.Если в процессе оплаты пользователь не введет в платежную форму идентификатор платежа в течение 1 часа, оплата будет автоматически отклонена.ru_gate_amount_modification.ditaЕсли пользователь при оплате укажет сумму, отличную от суммы, указанной в запросе на оплату, то платеж будет проводиться с особенностями, которые описаны в разделе. Для получения более подробной информации обратитесь к своему курирующему менеджеру Some Platform. |  |

---

## JazzCash -Оплата 4: подтверждение через OTP код

При оплате 
пользователь сначала вводит OTP код, а после подтверждает оплату посредством USSD-сообщения или push-уведомления в мобильном приложении (зависит от мобильного оператора), получаемого от сервиса provider_service.

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата |  |  |  |

| **Регионы использования** |  |
| --- | --- |
| **Валюты оплаты** | references/ru/currencies/PKR.dita |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |

---

## JazzCash -Оплата 3: подтверждение без OTP кода

При оплате пользователь подтверждает оплату посредством USSD сообщения или push-уведомления, получаемого от сервиса provider_service.

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

Далее подробно рассказывается, что вам нужно делать для проведения платежа, а также о возможностях анализа уже проведенных платежей.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Оплата |  |  |  |

| **Регионы использования** |  |
| --- | --- |
| **Валюты оплаты** | references/ru/currencies/PKR.dita |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**ru_gate_amount_modification.ditaЕсли пользователь при оплате укажет сумму, отличную от суммы, указанной в запросе на оплату, то платеж будет проводиться с особенностями, которые описаны в разделе. Для получения более подробной информации обратитесь к своему курирующему менеджеру Some Platform. |  |

---

## JazzCash -Оплата 2: перенаправление в сервис провайдера

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
| **Валюты оплаты** | references/ru/currencies/PKR.dita |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**Если в процессе оплаты пользователь не введет в платежную форму идентификатор платежа в течение 30 минут, оплата будет автоматически отклонена.ru_gate_amount_modification.ditaЕсли пользователь при оплате укажет сумму, отличную от суммы, указанной в запросе на оплату, то платеж будет проводиться с особенностями, которые описаны в разделе. Для получения более подробной информации обратитесь к своему курирующему менеджеру Some Platform. |  |

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
| Оплата 4 |  |  |  |
| Выплата |  |  |  |

### Сценарий платежа

Оплата выполняется по одному из следующих сценариев:

Уточняйте у курирующего менеджера Some Platform, какой из сценариев оплаты актуален для вас.

выплатеПрипользователь инициирует платеж, после чего ожидает зачисление средств на свой счет. Непосредственное участие пользователя в процессе проведения выплаты не требуется.

- Оплата 1— пользователь следует шагам платежной инструкции, отображаемой на странице оплаты или в вашей системе (при работе через Gate).
- Оплата 2— пользователь перенаправляется в сервис provider_service, где выполняет оплату.
- Оплата 3— пользователь подтверждает оплату посредством USSD сообщения, получаемого от сервиса provider_service.
- Оплата 4— пользователь сначала вводит OTP код, а после подтверждает оплату посредством USSD-сообщения или push-уведомления в мобильном приложении (зависит от мобильного оператора), получаемого от сервиса provider_service.

| title — это платежный метод, который позволит вам принимать оплату от пользователей, а также выплачивать пользователям денежные средства. Пользователи выполняют оплату с использованием электронных кошельков.Платежный метод title позволяет принимать от пользователей оплату, используя Payment Widget и Gate, а также проводить пользователям выплату через Gate и Dashboard.здесьЗагрузить логотип этого платежного метода в векторном формате можно. |  |
| --- | --- |

| Тип платежного метода | Электронные кошельки |
| --- | --- |
| Регионы использования |  |
| Валюты платежей | references/ru/currencies/PKR.dita |
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
| Конечная точка | `/v2/payment/wallet/jazzcash/payout` |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890`Пример:Номер электронного кошелька пользователя в сервисе title. |
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
| Конечная точка | `/v2/payment/wallet/jazzcash/sale` |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890`Пример:Номер электронного кошелька пользователя в сервисе title. |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

### Отображение платежной инструкции пользователю

Получив и обработав запрос на оплату, платежная платформа направит вам оповещение (callback) с платежной инструкцией для отображения пользователю.

display_dataЧтобы отобразить пользователю платежную инструкцию, используйте информацию из массива.

Пример текста платежной инструкции, который вы можете использовать в своей системе.

display_dataДалее представлен фрагмент оповещения с массивом.

```json
"display_data": [
    {
        "type": "add_info",
        "title": "receiver_name",
        "data": "example"
    },
    {
        "type": "add_info",
        "title": "account_number",
        "data": "1234567891"
    }
]
```

| Элемент | Описание |
| --- | --- |
| {     "type": "add_info",     "title": "receiver_name",     "data": "example" } | `example`Пример:Название платежного метода. |
| {     "type": "add_info",     "title": "account_number",     "data": "1234567891" } | `1234567891`Пример:Номер счета получателя перевода. |

| Текст инструкции на языке урду | Текст инструкции на языке урду с записью латиницей | Текст инструкции на английском языке |
| --- | --- | --- |
| رقم ادائیگی کی ہدایاتTill ID کے ذریعے رقم کی منتقلی کیلئے جاز کیش مینو سے "Scan QR" کو منتخب کریں۔مہربانی کر کے اس پیج پر دکھائی گئی رقم کے مطابق سختی سے رقم منتقل کریں اور رقم میں تبدیلی نہ کریں۔جب آپ رقم منتقل کرتے ہیں تو آپ کو یہ یقینی بنانا ہوگا کہ ہمیں بغیر کسی کٹوتی کے اُتنی ہی رقم موصول ہو۔غلطی کی صورت میں ہمیں کم یا زیادہ رقم ملتی ہیں ہم اس کے مطابق آپ کے اکاؤنٹ میں کریڈٹ کر دینگے۔مہرابانی کر کے پہلے جمع کی گئی اکاؤنٹس میں براہ راست راقم نہ بھیجے۔ ہوسکتا ہے کہ یہ ٹریک نہ ہو اور ہم اس طرح کے ٹرانزیکشنز کے زمہ دار نہیں ہونگے۔ اس سے پہلے کہ آپ رقم ادائیگی کرنا چاہیں ہمیشہ ایک نیا آرڈر دیں۔مہرابانی کر کے ایک گھنٹے کے اندر ٹرانزیکشن مکمل کریں۔ اگر آپ ایک گھنٹے کے بعد اس طرح کے ٹرانزیکشن کی ادائیگی کرتے ہیں، تو مہربانی کر کے کسٹمر سپورٹ سے رابطہ کریں۔* مہربانی کر کے اوپر دی گئی رقم ادائیگی کی ہدایت کی سختی سے پابندی کرے۔ اگر کوئی خلاف ورزی ہوتی ہے، تو اکاؤنٹ میں پیسے واپس نہیں کیا جائے گا، اور پلیٹ فارم کسی بھی نقصان کیلئے زمہ دار نہیں ہوگا:مہربانی کرکے جاز کیش ٹرانزیکشن آئی ڈی درج کریں۔براہ کرم درست رقم درج کریں۔براہ کرم ہمیں درست معلومات فراہم کریں جیسا کہ کامیاب ٹرانزیکشن آئی ڈی اور رقم، تاکہ رقم آپ کے اکاؤنٹ میں جمع ہو جائے۔ | Payment ke Hidayat:Till ID k zariye raqam ki muntaqili k liay JazzCash menu sy ScanQR ko muntakhib karen.Mehrabani kar k iss page par dekhae gaye raqam k mutabiq sakhty sy raqam transfer karen, aur raqam mein tabdeeli na karen.jaab aap transfer karty hain, to aap ko yeh yaqeeni banana hoga keh hamein baghair kisi katothy k uthni he raqam maosool ho.Ghalti ki surat mein hamein km ya zayada raqam melti hi, hum iss k mutabiq aap k account mein credit kar deingay.Mehrabani kar k pehly jama ky gayee accounts mein direct raqam na bhejay. Hosakta hai keh yeh track na ho aur hum iss tarah k transactions k zema dar nahi hongay. Iss say pehly keh aap adaigi karna chahian hamesha aik naya order dai.Mehrabani kar k 1 ghantay k andar transaction mukammal karen. Agar aap 1 ghantay k baad iss tarah k transaction ki payment karty hain to mehrabani kar k customor support sy rabta karen.*Mehrabani kar k oppar dee gaye payment ki hidayat ki sakhti sy pabandi karen. Agar koe khelaf warzi hoti hai, to account mein paisy wapas nahi keya jae ga, aur platform kessi bhi nuqsaan ke liye zema daar nahi hoga:Mehrabani kar k JazzCash transaction ID daraj karenMehrabani kar k drust raqam daraj karenMehrabani kar k hamein drust maloomat paraham karen, jesy keh successful transaction ID aur raqam aap k account mein raqam jama karwany ke liye | Payment Instructions:To transfer money via Till ID, select ScanQR from the JazzCash menu, then enter your Till ID number.Please transfer funds strictly in accordance with the amount displayed on this page and do not modify the amount.When transferring, make sure we receive the same amount without any deduction.If there is a mistake while transferring, and we receive a smaller or larger amount, we will credit to your account accordingly.Please do not send money directly to the previously deposit accounts. It may not be trackable, and we will not be responsible for such transactions. Always place a new order before you pay.Please complete the payment within 1 hour. If you complete the payment after the time limit expires, please contact the customer support.*Please follow the payment instructions as written. If there is any violation, the account will not be credited, and the platform will not be responsible for any losses caused:Please enter the Jazzcash transaction id.Please enter the correct amount.Please provide us with correct information such as the successful transaction ID and amount so that the funds are credited to your account. |

### идентификатора платежаОтправкав платежную платформу

идентификатор платежаВведенный пользователемвы должны отправить в платежную платформу в новом запросе. Далее приведены основные характеристики и параметры 
     такого запроса.

идентификатора платежаВот пример данных из запроса для передачи в платежную платформу:

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
| additional_datatype_object type_strictly_required | additional_datatype_object type_strictly_required | txreftype_string type_strictly_required | `1234567890`Пример:Идентификатор платежа, который пользователь получает от сервиса title. |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |  |

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
| Конечная точка | `/v2/payment/wallet/jazzcash/sale` |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890`Пример:Номер телефона, привязанный к электронному кошельку пользователя в сервисе title. |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

### Отображение платежной инструкции пользователю

display_dataВ некоторых случаях, получив и обработав запрос на оплату, платежная платформа направит вам оповещение (callback) с массивом.

Вам нужно только принять это оповещение, отображать данные пользователю не требуется.

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
        "data": "PKR"
    },
    {
        "type": "add_info",
        "title": "account_number",
        "data": "1234567890"
    }
]
```

| Элемент | Описание |
| --- | --- |
| {     "type": "add_info",     "title": "amount",     "data": "10000" } | `10000`Пример:Сумма платежа. |
| {     "type": "add_info",     "title": "currency",     "data": "PKR" } | `PKR`Пример:Валюта платежа. |
| {     "type": "add_info",     "title": "account_number",     "data": "1234567890" } | `1234567890`Пример:Номер счета пользователя. |

### OTP-кодаОтправкав платежную платформу

OTP-кодВведенный пользователемвы должны отправить в платежную платформу в новом запросе. Далее приведены основные характеристики и параметры 
     такого запроса.

OTP-кодаВот пример данных из запроса для передачи в платежную платформу:

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
| additional_datatype_object type_strictly_required | otp_codetype_string type_strictly_required | `1234`Пример:OTP-код, который пользователь получает в сообщении от оператора связи. |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                     Gate:. |  |  |

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
2. Примите от платежной платформы Some Platform оповещение (callback) с результатом оплаты.

### Запрос

Далее представлена информация, необходимая для создания и отправки запроса на оплату с использованием метода 
        title.

Вот пример тела запроса на оплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `/v2/payment/wallet/jazzcash/sale` |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890`Пример:Номер телефона, привязанный к электронному кошельку пользователя в сервисе title. |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                      Gate:. |  |  |

### Отображение платежной инструкции пользователю

display_dataВ некоторых случаях, получив и обработав запрос на оплату, платежная платформа направит вам оповещение (callback) с массивом.

Вам нужно только принять это оповещение, отображать данные пользователю не требуется.

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
        "data": "PKR"
    },
    {
        "type": "add_info",
        "title": "account_number",
        "data": "1234567890"
    }
]
```

| Элемент | Описание |
| --- | --- |
| {     "type": "add_info",     "title": "amount",     "data": "10000" } | `10000`Пример:Сумма платежа. |
| {     "type": "add_info",     "title": "currency",     "data": "PKR" } | `PKR`Пример:Валюта платежа. |
| {     "type": "add_info",     "title": "account_number",     "data": "1234567890" } | `1234567890`Пример:Номер счета пользователя. |

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
| Конечная точка | `/v2/payment/wallet/jazzcash/sale` |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890`Пример:Номер телефона, привязанный к электронному кошельку пользователя в сервисе title. |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | *за исключением*Сумма платежа в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробеловслучаев, когда у валюты нет дробной части.*основных единицах валюты*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
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

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_pp_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, на странице оплаты пользователю отобразятся поля, где он сможет самостоятельно ввести недостающую информацию. Подробнее о предоставлении таких параметров см..type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |
| --- | --- |
| Параметр | Описание |
| project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |
| customer_idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| customer_first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |
| customer_last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |
| customer_emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |
| account_customer_nametype_string type_required | `John Doe`Пример:Полное имя пользователя. |
| account_numbertype_string type_required | `1234567`Пример:Номер электронного кошелька пользователя в сервисе title. |
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

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_pp_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, на странице оплаты пользователю отобразятся поля, где он сможет самостоятельно ввести недостающую информацию. Подробнее о предоставлении таких параметров см..type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |
| --- | --- |
| Параметр | Описание |
| project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |
| customer_idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| customer_first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |
| customer_last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |
| customer_emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |
| account_numbertype_string type_required | `12345678901`Пример:Номер телефона, привязанный к электронному кошельку пользователя в сервисе title. |
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

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе.ru_pp_clarification.ditatype_required — параметр обязателен для проведения платежа, но может отсутствовать в начальном запросе. Если не передать такой параметр в начальном запросе, на странице оплаты пользователю отобразятся поля, где он сможет самостоятельно ввести недостающую информацию. Подробнее о предоставлении таких параметров см..type_optional — параметр необязателен, но в общем случае его наличие в запросе способствует оптимизации проведения платежа, например упрощает процесс платежа для пользователя или повышает процент успешных платежей. |  |
| --- | --- |
| Параметр | Описание |
| project_idtype_integer type_strictly_required | `1234`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | `payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |
| customer_idtype_string type_strictly_required | `customer_123`Пример:Идентификатор пользователя, уникальный в рамках проекта. |
| customer_first_nametype_string type_strictly_required | `John`Пример:Имя пользователя. |
| customer_last_nametype_string type_strictly_required | `Doe`Пример:Фамилия пользователя. |
| customer_emailtype_string type_strictly_required | `johndoe@example.com`Пример:Адрес электронной почты пользователя. |
| account_customer_nametype_string type_required | `John Doe`Пример:Полное имя пользователя. |
| account_numbertype_string type_required | `12345678901`Пример:Номер телефона, привязанный к электронному кошельку пользователя в сервисе title. |
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

