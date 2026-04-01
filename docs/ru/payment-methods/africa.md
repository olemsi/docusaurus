# Обзор

## Схема работы

В проведении отдельного платежа с использованием title задействуются веб-сервис мерчанта, один из интерфейсов и платежная платформа Some Platform, а также технические средства title.

## Основные операции

**ПроектыПлатежные методы**Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.

|  | Интерфейсы | Суммы, в любой поддерживаемой валюте | Время |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard | минимум | максимум | базовое | предельное |  |
| Выплата |  |  |  | 100,00 |  | в пределах двух часов |  |

## Сценарии использования

Проведение выплат с использованием метода title выполняется с уведомлением пользователей через веб-сервис мерчанта.

## Поддержка со стороны банков

`/v2/info/banks/africa/payout/list`Проведение платежей с применением метода title осуществляется через банки, поддерживающие работу с этим методом. Банкам соответствуют свои идентификаторы, которые используются при инициировании выплат через Gate. Далее в таблице в ознакомительных целях представлена информация об этих банках, которую следует уточнять у курирующего менеджера Some Platform или по запросу, отправляемому методом POST через Gate API и относящемуся к группе запросов request-info-banks-list.

Запрос должен содержать идентификаторы проекта и платежа, подпись, валюту и сумму платежа, как указано в примере. Важно передавать реальные данные о платеже, но в случае если платеж еще не сформирован, для идентификатора платежа в запросе можно указать случайное значение.

Детальные сведения о том, что необходимо делать со стороны мерчанта для проведения платежей, а также о том, что можно использовать для анализа информации о проведенных платежах и операциях, представлены далее.

| Банк | ID |
| --- | --- |
| Access Bank Nigeria | 193 |
| Access Mobile | 194 |
| ABC Capital Bank Limited | 659 |
| Access Bank | 269 |
| Accessbank Tanzania Ltd | 687 |
| African Banking Corp. Bank Ltd | 235 |
| African Banking Corporation Tanzania Limited | 691 |
| Agricultural Development Bank Limited | 618 |
| Airtel Mobile Money | 614 |
| Akiba Commercial Bank Plc | 669 |
| Amalgamated Bank Ltd | 625 |
| Amana Bank Limited | 695 |
| ARB Apex Bank Ltd | 617 |
| ASO Savings &amp; Loans | 196 |
| Azania Bank Ltd | 696 |
| Bank M Tanzania Plc | 689 |
| Bank Of Africa Uganda Ltd | 654 |
| Bank Of Baroda | 628 |
| Bank Of Baroda | 649 |
| Bank Of Baroda (Tanzania) Ltd | 694 |
| Bank Of Ghana | 615 |
| Bank Of India (Tanzania) Limited | 690 |
| Bank Of Tanzania | 693 |
| Barclays Bank | 616 |
| Barclays Bank Of Kenya | 257 |
| Barclays Bank Of Uganda Limited | 643 |
| Barclays Bank Tanzania Limited | 679 |
| BOA Bank Tanzania | 677 |
| BSIC Ghana Ltd | 629 |
| Cairo International Bank Ltd | 662 |
| Cal Bank | 265 |
| Canara Bank (Tanzania) Ltd | 697 |
| Cellulant | 604 |
| Centenary Rural Development Bank Limited | 641 |
| Cfc Stanbic Bank Kenya Limited | 234 |
| Chamsmobile | 598 |
| Chase Bank Limited | 233 |
| China Commercial Bank Limited | 674 |
| Citibank | 587 |
| Citibank N.A. | 229 |
| Citibank Tanzania Ltd | 664 |
| Citibank Uganda Ltd | 651 |
| Commercial Bank Of Africa (Tanzania) Limited | 673 |
| Commercial Bank Of Africa Limited | 254 |
| Commercial Bank Of Africa Uganda | 656 |
| Consolidated Bank Of Kenya Limited | 231 |
| Co-Operative Bank Of Kenya Limited | 226 |
| Coronation Merchant Bank | 222 |
| Covenant Bank For Women (Tanzania) Limited | 681 |
| Covenant Microfinance Bank | 600 |
| CRDB Bank Limited | 684 |
| DFCU Bank | 642 |
| Diamond Bank Plc | 197 |
| Diamond Trust Bank Limited | 249 |
| Diamond Trust Bank Tanzania Ltd | 667 |
| Diamond Trust Bank Uganda Limited | 646 |
| Eartholeum | 588 |
| Ecobank | 264 |
| Ecobank Mobile | 198 |
| Ecobank Nigeria Limited | 199 |
| Ecobank Tanzania Limited | 671 |
| Ecobank Uganda Limited | 647 |
| Energy Bank | 270 |
| Enterprise Bank Limited | 200 |
| Equatorial Commercial Bank Limited | 240 |
| Equity Bank Limited | 251 |
| Equity Bank Tanzania Limited | 665 |
| Equity Bank Uganda Ltd | 660 |
| Etranzact | 586 |
| Exim Bank Uganda Ltd | 652 |
| Eximbank (Tanzania) Ltd | 699 |
| FBN Bank Ghana | 624 |
| FBN Mobile | 201 |
| Fet | 609 |
| Fidelity Bank | 275 |
| Fidelity Bank Plc | 202 |
| Fidelity Mobile | 592 |
| Fina Bank Limited | 243 |
| Finance Trust Bank Ltd | 655 |
| First Atlantic Merchant | 622 |
| First Bank Plc | 203 |
| First Capital Plus Bank | 630 |
| First City Monument Bank Ltd | 204 |
| First National Bank | 272 |
| First National Bank Of Tanzania | 663 |
| Fortis Microfinance Bank | 596 |
| Fortismobile | 582 |
| FSDH | 607 |
| GCB Bank Limited | 259 |
| GN Bank Limited | 631 |
| GTBank Mobile Money | 205 |
| GTBank Plc | 206 |
| Guaranty Trust Bank | 267 |
| Guardian Bank Limited | 245 |
| Habib African Bank | 676 |
| Hedonmark | 589 |
| Heritage Bank | 207 |
| HFC Bank | 262 |
| Housing Finance Bank Ltd | 653 |
| I&amp;M Bank (T) Ltd | 680 |
| I&amp;M Bank Limited | 246 |
| Imperial Bank Limited | 236 |
| Imperial Homes Mortgage Bank | 601 |
| Intercontinental Bank Plc | 627 |
| International Commercial Bank (Tanzania) Ltd | 678 |
| Jaiz Bank | 591 |
| Jamii Bora Bank | 242 |
| Jubilee Life Mortgage Bank | 605 |
| KCB Bank Tanzania Limited | 688 |
| KCB Bank Uganda Limited | 657 |
| Kenya Commercial Bank Limited | 253 |
| Keystone Bank Limited | 208 |
| Kilimanjaro Co-Operative Bank Ltd | 700 |
| K-Rep Bank Limited | 250 |
| M&amp;F bank | 581 |
| Maendeleo Bank Ltd | 683 |
| Middle East Bank Kenya Limited | 230 |
| Mkombozi Commercial Bank Ltd | 670 |
| Mkudi | 608 |
| Moneybox | 590 |
| M-Pesa | 640 |
| MTN Mobile Money | 611 |
| Mwanga Community Bank Ltd | 672 |
| National Bank Of Commerce | 701 |
| National Bank Of Kenya Limited | 227 |
| National Investment Bank | 260 |
| NC Bank Uganda Limited | 645 |
| NIC Bank (Tanzania) Limited | 666 |
| NIC Bank Limited | 237 |
| NIP Virtual Bank | 594 |
| NMB Bank Plc | 692 |
| NPF Microfinance Bank | 602 |
| Omnibank Ghana Ltd | 634 |
| Omoluabi Mortgage Bank | 585 |
| Orient Bank Ltd | 644 |
| Oriental Commercial Bank Limited | 228 |
| Pagatech | 606 |
| Paramount Universal Bank Limited | 241 |
| Parkway | 209 |
| Parralex Bank | 224 |
| Payattitude Online | 597 |
| Paycom | 210 |
| People`s Bank Of Zanzibar | 685 |
| Premium Bank | 633 |
| Prime Bank Limited | 225 |
| Prudential Bank Ltd | 623 |
| Royal Bank | 271 |
| Safetrust Mortgage Bank | 599 |
| SG-SSB Ltd | 619 |
| Skye Bank Plc | 211 |
| Sovereign Bank | 632 |
| Stanbic Bank | 266 |
| Stanbic Bank Tanzania Limited | 675 |
| Stanbic Bank Uganda Limited | 658 |
| Stanbic Ibtc Bank Plc | 212 |
| Stanbic Mobile | 213 |
| Standard Chartered Bank | 258 |
| Standard Chartered Bank Nigeria Limited | 214 |
| Standard Chartered Bank Tanzania Ltd | 686 |
| Standard Chartered Bank Uganda Limited | 661 |
| Sterling Bank Plc | 215 |
| Sterling Mobile | 584 |
| Suntrust Bank | 603 |
| Tagpay | 583 |
| Teasymobile | 593 |
| Tigo Mobile Money | 612 |
| Trans-National Bank Limited | 232 |
| Tropical Bank | 648 |
| Trust Bank Limited | 620 |
| Trustbond | 610 |
| UBA Kenya Bank Limited | 252 |
| UBL Bank (Tanzania) Limited | 682 |
| Uchumi Commercial Bank Ltd | 698 |
| Unibank Limited (Ghana) | 626 |
| Union Bank Of Nigeria Plc | 216 |
| United Bank For Africa | 268 |
| United Bank For Africa (Tanzania) Limited | 668 |
| United Bank For Africa Plc | 217 |
| United Bank For Africa Uganda Limited | 650 |
| Unity Bank Plc | 218 |
| Universal Merchant Bank | 261 |
| UT Bank | 621 |
| Victoria Commercial Bank Ltd | 244 |
| Vodafone Mobile Money | 613 |
| Vtnetworks | 595 |
| Wema Bank Plc | 219 |
| Zenith Bank | 263 |
| Zenith Bank Plc | 220 |
| Zenith Mobile | 221 |

| title — платежный метод, позволяющий производить выплаты на банковские счета. Для работы с этим методом доступно проведение выплат через Gate.здесьЗагрузить логотип этого платежного метода в векторном формате можно. |  |
| --- | --- |

| Тип платежного метода | Интернет-банкинг |
| --- | --- |
| Регионы использования | country_NG, country_GH, country_KE, country_UG, country_TZ, country_ZA |
| Валюты платежей | references/ru/currencies/GHS.ditareferences/ru/currencies/KES.ditareferences/ru/currencies/NGN.ditareferences/ru/currencies/TZS.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/ZAR.ditareferences/ru/currencies/XOF.dita,,,,,, |
| Конвертация валют | На стороне Some Platform |
| Оплата |  |
| Выплата |  |
| Оплата по сохраненным данным |  |
| Полный возврат |  |
| Частичный возврат |  |
| Опротестование |  |
| Особенности |  |
| Валюты расчетов с мерчантами | *по умолчанию:**по запросу:* |
| Скорость расчетов с мерчантами | без задержек |
| Организация и стоимость подключения | По согласованию с курирующим менеджером Some Platform |

---

## Выплата через Gate

### Общая информация

Для выплаты через Gate с использованием метода title со стороны веб-сервиса необходимо отправить запрос, содержащий требуемые параметры и подпись, на рабочий URL Some Platform и принять оповещение о результате выплаты. Полная схема проведения выплаты представлена далее.

ru_gate_sts_protocol.ditaИнформация о формате запросов и параметрах инициализации выплат методом title через Gate, а также о формате оповещений о результатах выплат приведена далее, общая информация о работе с API представлена в разделе.

### Формат запросов

При работе с запросами на выплаты с применением метода title необходимо учитывать следующее:

Вот пример данных из запроса на выплату с использованием метода title:

1. `/v2/payment/banks/africa/payout`Должен использоваться запрос, отправляемый методом POST. Этот запрос относится к группе запросов для проведения платежей в одном из поддерживаемых банков: request-payment-banks-payout.
2. generalproject_id— идентификатор проекта, полученный от Some Platform при интеграции;payment_id— идентификатор платежа, уникальный в рамках проекта;signatureИспользование подписи к данным— подпись запроса, составленная после определения всех параметров запроса. (Подробнее см. раздел.);— объект, содержащий основные сведения о запросе:paymentamount*за исключениемосновных единицах валюты*ru_currency_codes.dita— сумма выплаты в дробных единицах валюты без десятичной точки и пробеловслучаев, когда у валюты нет дробной части. Если у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.;currency— код валюты выплаты в формате ISO-4217 alpha-3;— объект, содержащий сведения о выплате:customerid— идентификатор пользователя, уникальный в рамках проекта;ip_address— IP-адрес устройства пользователя;first_name— имя пользователя;last_name— фамилия пользователя;email— адрес электронной почты пользователя;— объект, содержащий сведения о пользователе:accountbank_id— идентификатор банка;number— номер счета пользователя.— объект, содержащий сведения о счете пользователя:В запросе должны использоваться следующие объекты и параметры:
3. references/ru/currencies/GHS.ditareferences/ru/currencies/KES.ditareferences/ru/currencies/NGN.ditareferences/ru/currencies/TZS.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/ZAR.ditareferences/ru/currencies/XOF.ditaВалютой платежа может быть только,,,,,,.
4. Дополнительно могут использоваться любые другие параметры, указанные в спецификации.

### Формат оповещений

ru_gate_callbacks.ditaДля оповещений о результатах выплат с применением метода title используется стандартный формат, описание которого представлено в разделе.

`2990user45100,00 XOF1543647567`В следующем примере оповещение свидетельствует о том, что в рамках проектадля пользователябыла успешно проведена выплата в размересо счета №банка.

В следующем примере выплата была отклонена из-за нарушения ограничения на сумму выплаты.

### Дополнительные материалы

Для организации работы с выплатами через Gate также могут быть полезны следующие материалы:

- ru_gate_interaction_scheme.dita
- ru_gate_authentication.dita
- ru_gate_payment_model.dita
- ru_gate_statuses_and_response_codes.dita

---

## Выплата через Gate

### Общая информация

Для выплаты через Gate с использованием метода title со стороны веб-сервиса необходимо отправить запрос, содержащий требуемые параметры и подпись, на рабочий URL Some Platform и принять оповещение о результате выплаты. Полная схема проведения выплаты представлена далее.

ru_gate_sts_protocol.ditaИнформация о формате запросов и параметрах инициализации выплат методом title через Gate, а также о формате оповещений о результатах выплат приведена далее, общая информация о работе с API представлена в разделе.

### Формат запросов

При работе с запросами на выплаты с применением метода title необходимо учитывать следующее:

Вот пример данных из запроса на выплату с использованием метода title:

1. `/v2/payment/banks/africa/payout`Должен использоваться запрос, отправляемый методом POST. Этот запрос относится к группе запросов для проведения платежей в одном из поддерживаемых банков: request-payment-banks-payout.
2. generalproject_id— идентификатор проекта, полученный от Some Platform при интеграции;payment_id— идентификатор платежа, уникальный в рамках проекта;signatureИспользование подписи к данным— подпись запроса, составленная после определения всех параметров запроса. (Подробнее см. раздел.);— объект, содержащий основные сведения о запросе:paymentamount*за исключениемосновных единицах валюты*ru_currency_codes.dita— сумма выплаты в дробных единицах валюты без десятичной точки и пробеловслучаев, когда у валюты нет дробной части. Если у валюты нет дробных единиц (то есть количество разрядов дробных единиц равно нулю), то в этом параметре нужно указывать сумму в. Подробнее о разрядах дробных единиц у валют см.;currency— код валюты выплаты в формате ISO-4217 alpha-3;— объект, содержащий сведения о выплате:customerid— идентификатор пользователя, уникальный в рамках проекта;ip_address— IP-адрес устройства пользователя;first_name— имя пользователя;last_name— фамилия пользователя;email— адрес электронной почты пользователя;— объект, содержащий сведения о пользователе:accountbank_id— идентификатор банка;number— номер счета пользователя.— объект, содержащий сведения о счете пользователя:В запросе должны использоваться следующие объекты и параметры:
3. references/ru/currencies/GHS.ditareferences/ru/currencies/KES.ditareferences/ru/currencies/NGN.ditareferences/ru/currencies/TZS.ditareferences/ru/currencies/UGX.ditareferences/ru/currencies/ZAR.ditareferences/ru/currencies/XOF.ditaВалютой платежа может быть только,,,,,,.
4. Дополнительно могут использоваться любые другие параметры, указанные в спецификации.

### Формат оповещений

ru_gate_callbacks.ditaДля оповещений о результатах выплат с применением метода title используется стандартный формат, описание которого представлено в разделе.

`2990user45100,00 XOF1543647567`В следующем примере оповещение свидетельствует о том, что в рамках проектадля пользователябыла успешно проведена выплата в размересо счета №банка.

В следующем примере выплата была отклонена из-за нарушения ограничения на сумму выплаты.

### Дополнительные материалы

Для организации работы с выплатами через Gate также могут быть полезны следующие материалы:

- ru_gate_interaction_scheme.dita
- ru_gate_authentication.dita
- ru_gate_payment_model.dita
- ru_gate_statuses_and_response_codes.dita

