# Выплата через Gate

## Общая информация

Чтобы выполнить выплату через Gate с использованием метода title:

Полная схема выплаты с использованием метода title выглядит следующим образом.

1. Отправьте запрос с нужными параметрами и подписью на рабочий URL-адрес платежной платформы Some Platform.
2. Примите от платежной платформы Some Platform оповещение (callback) с результатом выплаты.

## Запрос

Далее представлена информация, необходимая для создания и отправки запроса на выплату с использованием метода 
        title.

Вот пример тела запроса на выплату с использованием метода title:

| HTTP-метод запроса | POST |
| --- | --- |
| Формат тела запроса | JSON |
| Конечная точка | `/v2/payment/banks/korea/payout` |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890123456`Пример:Номер счета пользователя. |
| bank_idtype_integer type_strictly_required | ru_pm_korea_payout_banks.dita`1486`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков см.. |  |
| customer_nametype_string type_strictly_required | `John Doe`Пример:Полное имя пользователя. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | Сумма платежа в основных единицах валюты, без дробной части.*в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробелов*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты есть дробные единицы (то есть количество разрядов дробных единиц не равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
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

## Банки для выплаты

### Список банков

account.bank_idВыплата в методе title осуществляется через банки, поддерживающие работу с этим методом. В запросе на выплату в параметревы должны передать идентификатор банка пользователя, который следует использовать для выполнения платежа.

В таблице ниже представлена информация о доступных для выплаты банках в методе title.

Данная таблица со списком банков представлена в ознакомительных целях. Поскольку состав этого списка может меняться, рекомендуем уточнять актуальный список банков, доступных при работе с методом title, с помощью запроса списка банков.

| Банк | Идентификатор |
| --- | --- |
| Bank of America - 뱅크오브아메리카 | 67751 |
| Bank of China - 중국은행 | 67761 |
| Bank of Communications - 교통은행 | 67911 |
| BNP Paribas Bank - 비엔피파리바은행 | 70652 |
| Bookook Securities - 부국증권 | 70532 |
| Busan Bank - 부산은행 | 1376 |
| CAPE INVESTMENT Securities - 케이프투자증권 | 70692 |
| China Construction Bank - 중국건설은행 | 70582 |
| Citibank Korea - 한국씨티은행 | 1476 |
| Credit Union - 신용협동조합 | 1426 |
| Daegu Bank - 대구은행 | 1366 |
| Daishin Securities - 대신증권 | 70742 |
| DB Financial Investment - DB금융투자 | 70592 |
| Deutsche Bank - 도이치은행 | 67801 |
| dmsgod Mutual Savings Bank - 상호저축 | 1396 |
| eBEST Investment &amp; Securities - 이베스트투자증권 | 70632 |
| Eugene Investment &amp; Securities - 유진투자증권 | 70492 |
| Gwangju Bank - 광주은행 | 66702 |
| Hana Financial Investment - 하나금융투자 | 70502 |
| Hanwha Investment &amp; Securities - 한화투자증권 | 70552 |
| Hi Investment &amp; Securities - 하이투자증권 | 70782 |
| HSBC Bank - HSBC은행 | 70562 |
| Hyundai Motor Securities - 현대차증권 | 70722 |
| Industrial Bank of Korea - 기업은행 | 761 |
| Industrial and Commercial Bank of China - 중국공상은행 | 67771 |
| Jeju Bank - 제주은행 | 1456 |
| Jeonbuk Bank - 전북은행 | 1446 |
| Jiyeok Nonghyup - NH지역농.축협 | 75452 |
| JPMorgan Chase - JP모건 체이스 | 67811 |
| K Bank - 케이뱅크 | 1486 |
| KAKAO PAY Securities - 카카오페이증권 | 70762 |
| KakaoBank - 카카오뱅크 | 1406 |
| KB Securities - KB증권 | 70732 |
| KDB - 산업은행 | 1386 |
| KEB Hana Bank - 하나은행 | 1466 |
| KFCC - 새마을금고 | 2791 |
| Kiwoom - 키움증권 | 70702 |
| Kookmin Bank - KB국민은행 | 2751 |
| Korea Development Bank - 산업은행 | 67721 |
| KOREA FOSS Securities - 한국포스증권 | 70642 |
| Korea Investment &amp; Securities - 한국투자증권 | 70682 |
| Korean Federation of Community Credit Cooperatives - 새마을금고 | 66722 |
| Kwangju Bank - 광주은행 | 1356 |
| KYOBO Securities - 교보증권 | 70612 |
| Kyongnam Bank - 경남은행 | 1346 |
| MERITZ Securities - 메리츠증권 | 70542 |
| MiraeAssetDaewoo - 미래에셋대우 | 70672 |
| Mizuho Corporate Bank - 미즈호은행 | 67821 |
| Morgan Stanley Bank - 모건스탠리은행 | 70662 |
| MUFG Bank - 엠유에프지은행 | 70512 |
| NACUFOK (shinhyup) - 신협중앙회 | 77286 |
| National Agricultural Cooperative Federation - 농협 | 66682 |
| National Agricultural Cooperative Federation Union - 농․축협 | 66742 |
| National Credit Union Federation of Korea - 신협은행 | 66732 |
| National Forestry Cooperative Federation - 산림조합 | 67921 |
| NH Investment &amp; Securities - NH투자증권 | 70772 |
| Nonghyup Bank - NH농협은행 | 2761 |
| Korea Post - 우체국 | 1436 |
| Saemaul - 새마을금고 | 811 |
| Samsung Securities - 삼성증권 | 70522 |
| Saving Bank - 저축은행 | 70622 |
| Shinhan - 신한은행 | 751 |
| Shinhyup Bank - 신협은행 | 70272 |
| SHINYOUNG Securities - 신영증권 | 70482 |
| SK Securities - SK증권 | 70602 |
| Standard Chartered Bank Korea - SC은행 | 2801 |
| Suhyup Bank - 수협 | 1416 |
| The Korea Securities Finance Corporation - 한국증권금융 | 70572 |
| TossBank - 토스뱅크 | 70282 |
| United Overseas Bank - 대화은행 | 67781 |
| Woori Bank - 우리은행 | 791 |
| Yuanta Securities - 유안타증권 | 70752 |

### Запрос списка банков

Состав списка банков может меняться, поэтому мы рекомендуем уточнять актуальный список банков, доступных 
    при работе с методом title, с помощью запроса со следующим форматом и параметрами:

Вот пример данных из запроса списка банков, поддерживающих работу с методом title.

| **HTTP-метод запроса** | POST |
| --- | --- |
| **Формат тела запроса** | JSON |
| **Конечная точка** | `/v2/info/banks/korea/payout/list` |
| **Полная спецификация конечной точки** |  |

| type_strictly_required — параметр обязательно должен присутствовать в начальном запросе. |  |  |
| --- | --- | --- |
| Объект | Параметр | Описание |
| generaltype_object type_strictly_required | project_idtype_integer type_strictly_required | `123`Пример:Идентификатор проекта, полученный от Some Platform при интеграции. |
| payment_idtype_string type_strictly_required | Если платеж еще не сформирован, в качестве идентификатора платежа в запросе следует указать                              произвольное уникальное значение.`payment_47`Пример:Идентификатор платежа, уникальный в рамках проекта. |  |
| signaturetype_string type_strictly_required | Использование подписи к даннымПодпись запроса, составленная после определения всех параметров запроса. Подробнее о составлении подписи см.. |  |
| paymenttype_object type_strictly_required | amounttype_integer type_strictly_required | Сумма платежа в основных единицах валюты, без дробной части.*в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробелов*ru_currency_codes.ditaЕсли у валюты есть дробные единицы (то есть количество разрядов дробных единиц не равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см..`example_amount`Пример: example_amount_in_majors example_currency передается как |
| currencytype_string type_strictly_required | `example_currency`Пример:Код валюты выплаты в формате ISO-4217 alpha-3. |  |
| API ReferenceПри необходимости добавьте в запрос необязательные параметры, указанные в спецификации                              Gate:. |  |  |

---

## Banks of Korea -Выплата

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
| **Валюты выплаты** | references/ru/currencies/KRW.dita |
| **Суммы платежей** | Информацию уточняйте у курирующего менеджера Some Platform. Также вы можете уточнить в Dashboard минимальную и максимальную сумму платежа, доступную в вашем проекте. |
| **Время проведения платежа** | Информацию уточняйте у курирующего менеджера Some Platform. |
| **Конвертация валют** | На стороне Some Platform |
| **Возврат** |  |
| **Организация и стоимость подключения** | По согласованию с курирующим менеджером Some Platform |
| **Особенности**references/ru/currencies/KRW.ditaСуммы в запросах с использованием валютыуказываются в основных единицах валюты в соответствии со стандартом ISO-4217 alpha-3.references/ru/currencies/KRW.dita`1000`Например, при оплате на 1000в запросе нужно передавать значение.ru_currency_codes.ditaЧисло дробных единиц для различных валют указано в разделе. |  |

---

## title

### Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

|  | Интерфейсы |  |  |
| --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard |  |
| Выплата |  |  |  |

### Сценарий платежа

выплатеПрипользователь инициирует платеж, после чего ожидает зачисление средств на свой счет. Непосредственное участие пользователя в процессе проведения выплаты не требуется.

| title — это платежный метод, который позволит вам выплачивать пользователям денежные средстваПлатежный метод title позволяет проводить пользователям выплату через Gate и Dashboard.здесьЗагрузить логотип этого платежного метода в векторном формате можно. |  |
| --- | --- |

| Тип платежного метода | Интернет-банкинг |
| --- | --- |
| Регионы использования |  |
| Валюты платежей | references/ru/currencies/KRW.dita |
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
| Конечная точка | `/v2/payment/banks/korea/payout` |
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
| accounttype_object type_strictly_required | numbertype_string type_strictly_required | `1234567890123456`Пример:Номер счета пользователя. |
| bank_idtype_integer type_strictly_required | ru_pm_korea_payout_banks.dita`1486`Пример:Идентификатор банка пользователя. Подробнее о том, как получить список поддерживаемых банков см.. |  |
| customer_nametype_string type_strictly_required | `John Doe`Пример:Полное имя пользователя. |  |
| paymenttype_object type_strictly_required | currencytype_string type_strictly_required | `example_currency`Пример:Код валюты платежа в формате ISO-4217 alpha-3. |
| amounttype_integer type_strictly_required | Сумма платежа в основных единицах валюты, без дробной части.*в дробных единицах валюты без десятичного разделителя (точки или запятой) и пробелов*ru_currency_units.ditaru_currency_codes.ditaЕсли у валюты есть дробные единицы (то есть количество разрядов дробных единиц не равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.и.`example_amount`Пример: example_amount_in_majors example_currency передается как |  |
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

