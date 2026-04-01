# country_PH

## Поддерживаемые платежные методы

* Точную минимальную и максимальную сумму оплаты уточняйте у курирующего менеджера Some Platform

Уточнить минимальную и максимальную сумму платежа, доступную в вашем проекте, вы можете в Dashboard. Для этого в Dashboard перейдите в раздели выберите вкладку.**ПроектыПлатежные методы**

Логотип для группировки методов country_PH — Express Payment:

Загрузить логотип для этой страны в векторном формате можно.здесь

Логотипы платежных методов доступны для загрузки.здесь

| Название и тип метода | Суммы оплат, PHP | Суммы выплат, PHP |
| --- | --- | --- |
| Online Debit — интернет-банкинг | 100,00 | 1&#160;000&#160;000,00 | 100,00 |  |
| 7-Eleven — оплата наличными | 100,00 | 10&#160;000,00 | Выплат нет |  |
| ATM Philippines — банковские переводы | 10,00 | 1&#160;000&#160;000,00 | Выплат нет |  |
| Coins.ph — электронный кошелек | 5,00 | 1&#160;000&#160;000,00 | 15,00 | 50&#160;000,00 |
| GCash — электронный кошелек | 50,00 | 50&#160;000,00 | 50,00 | 50&#160;000,00 |
| GoTyme — электронный кошелек | 100,00 | 50&#160;000,00 | \* | \* |
| GrabPay — электронный кошелек | 100,00 | 50&#160;000,00 | 100,00 | 50&#160;000,00 |
| Local Bank Transfer — банковские переводы | 100,00 | 1&#160;000&#160;000,00 | Выплат нет |  |
| PayMaya — электронный кошелек | 100,00 | 50&#160;000,00 | 100,00 | 50&#160;000,00 |
| QR Ph — платежи с помощью QR-кода | 100,00* | 1&#160;000&#160;000,00* | Выплат нет |  |
| Shopee — электронный кошелек | Оплат нет | 100,00 | 50&#160;000,00 |  |
| Virtual Accounts — банковские переводы | 100,00 | 1&#160;686&#160;000,00 | 100,00 |  |

## Особенности проведения платежей

Нужно помнить про особенности некоторых методов:

- Оплата и выплата с использованием методов ATM Philippines и Coins.ph доступны только для мерчантов категории Financial Services (Forex, Binaries) по предварительному согласованию с курирующим менеджером Some Platform.
- Выплата пользователям через методы Coins.ph, GCash, GrabPay или PayMaya доступна только после совершения оплаты этими пользователями через один из этих платежных методов.
- В методах GCash, PayMaya, GrabPay и 7-Eleven открытие страницы оплаты в режиме iframe недоступно.
- При проведении платежей через методы Online Debit и ATM Philippines, возможность открытия страницы оплаты в режиме iframe уточняйте у курирующего менеджера Some Platform.
- Выплата с использованием методов Online Debit и Virtual Accounts проводится через сервисы InstaPay и PESONet. При этом у сервиса PESONet есть особенность: запросы на выплату, поступившие в систему с 9:31 до 15:30, обрабатываются до 22:00. Запросы, поступившие в систему с 15:31 текущего дня до 9:30 следующего дня, обрабатываются до 13:00 следующего дня. Все времена указаны для зоны UTC+8.
- В платежном методеQR Ph если пользователь не выполнит необходимые для оплаты действия в течении 6 минут после инициирования оплаты, то платеж отклоняется на стороне провайдера.
- При проведении оплаты с использованием методовQR Ph и GoTyme из-за особенностей работы провайдера сумма платежа, указанная в инструкции на стороне сервиса провайдера, незначительно отличается от суммы в запросе на проведение платежа. Пользователь должен произвести оплату согласно платежной инструкции, при этом мерчанту зачисляется полная сумма, указанная в платежной инструкции, например:
- В платежных методах QR Ph и GoTyme, если пользователь выполнит оплату с указанием иной суммы, например укажет первоначальную сумму платежа (20 000,00), проведение платежа приостанавливается, пока конфликт не будет разрешен вручную техническими специалистами Some Platform.references/ru/currencies/PHP.dita
- В платежном методе QR Ph QR-код на странице провайдера может использоваться лишь единожды.

## Выплата через банки

Идентификаторы банков для проведения выплаты:

| Банк | InstaPay | PESONet | ID |
| --- | --- | --- | --- |
| AL-AMANAH ISLAMIC BANK | – | + | 67971 |
| ALLBANK | – | + | 5461 |
| AllBank Inc | + | – | 68851 |
| Asia United Bank | + | + | 485 |
| AUSTRALIA &amp; NEW ZEALAND BANK | – | + | 67981 |
| BANANA FINTECH SERVICES CORPORATION | – | + | 68001 |
| BANGKO KABAYAN | – | + | 68291 |
| Bangko Mabuhay | + | + | 5581 |
| BANGKO NUESTRA SENORA DEL PILAR | – | + | 68451 |
| BANGKOK BANK PUBLIC CO., LTD. | – | + | 68011 |
| BANK OF AMERICA | – | + | 68031 |
| Bank of China | + | + | 68881 |
| Bank of Commecre | + | + | 1561 |
| BANK OF FLORIDA | – | + | 68041 |
| BANK OF MAKATI | – | + | 68391 |
| BANK OF MONTALBAN, INC. | – | + | 68621 |
| Bayad Center | + | – | 2601 |
| BAYANIHAN BANK | – | + | 68581 |
| BDO Unibank, Inc | + | + | 486 |
| BDO Network Bank Inc | + | + | 68461 |
| BINAN RURAL BANK, INC. | – | + | 68821 |
| Binangonan Rural Bank | + | – | 55741 |
| Bank of the Philippine Islands (BPI) | + | + | 487 |
| BPI Direct BanKO, Inc., A Savings Bank | + | + | 5471 |
| Camalig Bank | + | + | 55751 |
| Cantilan Bank | + | + | 68111 |
| CARD Bank | + | – | 55761 |
| CARD SME BANK INC | + | – | 68131 |
| CATHAY UNITED BANK CO. LTD | – | + | 68791 |
| Cebuana Lhuillier Rural Bank | + | + | 68071 |
| CENTURY SAVINGS BANK | – | + | 68081 |
| Chinabank Online | + | + | 489 |
| Chinabank Savings | + | + | 1531 |
| CIMB BANK PHILIPPINES INC | + | + | 68101 |
| Citibank, N.A. | – | + | 5371 |
| CITY SAVINGS BANK | – | + | 68831 |
| COOPERATIVE BANK OF QUEZON PROVINCE | – | + | 68061 |
| COUNTRY BUILDERS BANK,INC. | – | + | 68121 |
| CTBC Bank | + | + | 5481 |
| DCPay Philippines Inc. | + | + | 5491 |
| Deutsche Bank | – | + | 5381 |
| Development Bank of the Philippines | + | + | 5391 |
| DM BANK | – | + | 68161 |
| Dumaugete City Development Bank Inc | + | + | 68151 |
| Dungganon Bank | + | + | 5501 |
| East West Banking Corporation | + | + | 55771 |
| East West Rural Bank | + | + | 21831 |
| Equicom Savings Bank | + | + | 5511 |
| FILIDIAN RURAL BANK OF ANTIPOLO | – | + | 68181 |
| FIRST CONSOLIDATED BANK | – | + | 68171 |
| GATEWAY RURAL BANK | – | + | 68221 |
| GM BANK OF LUZON, INC. | – | + | 68191 |
| GoTyme Bank | + | + | 68201 |
| GUAGUA RURAL BANK | – | + | 68211 |
| HK AND SHANGHAI BANKING CORP. | – | + | 68241 |
| HSBC SAVINGS BANK PHILS | – | + | 68231 |
| INDUSTRIAL BANK OF KOREA - MANILA | – | + | 68251 |
| INDUSTRIAL COMMERCIAL BANK OF CHINA | – | + | 68271 |
| ING Bank N.V. | – | + | 5591 |
| INNOVATIVE BANK | – | + | 68281 |
| Isla Bank (A Thrift Bank), Inc. | + | + | 5601 |
| JPMORGAN CHASE BANK | – | + | 68091 |
| KEB HANA BANK | – | + | 68301 |
| LAGUNA PRESTIGE BANKING CORPORATION | – | + | 68331 |
| LAND BANK OF THE PHILIPPINES | + | + | 491 |
| LEGAZPI SAVINGS BANK | + | – | 68311 |
| LOLC BANK PHILIPPINES | – | + | 68901 |
| LULU FINANCIAL SERVICES PHILS INC | + | + | 68321 |
| MALARAYAT RURAL BANK | – | + | 68841 |
| Malayan Bank Savings | + | + | 68341 |
| MAYA BANK, INC | – | + | 68431 |
| Maybank Phils. Inc. | + | + | 5421 |
| MEGA INTL COMML BANK CO. LTD | – | + | 68261 |
| MEGA RURAL BANK (LUCENA CITY) | – | + | 68361 |
| Metrobank | + | + | 492 |
| METROSOUTH COOPERATIVE BANK | – | + | 68351 |
| MINDANAO CONSOLIDATED COOPERATIVE | + | + | 68381 |
| MIZUHO BANK | – | + | 68371 |
| MONEY MALL RURAL BANK | – | + | 68401 |
| MUFG BANK, LTD. | – | + | 68051 |
| MVSM BANK RURAL BANK | – | + | 68411 |
| Netbank Rural Bank, Inc. | + | + | 68141 |
| NEW RURAL BANK OF SAN LEONARDO (NUEVA ECIJA) | – | + | 68441 |
| Own Bank | + | + | 68471 |
| Pacific Ace Savings Bank | + | + | 68481 |
| Partner Rural Bank (Cotabato) | + | – | 5621 |
| Paymaya Philippines Inc. | + | + | 5541 |
| PAYMONGO PAYMENTS, INC | – | + | 68911 |
| Philippine Bank of Communications | + | + | 68891 |
| PHILIPPINE BUSINESS BANK | + | + | 68871 |
| Philippine Business Bank (A Savings Bank) | + | + | 5631 |
| PHILIPPINE DIGITAL ASSET EXCHANGE (Instapay) | + | – | 68491 |
| PHILIPPINE DIGITAL ASSET EXCHANGE (Pesonet) | – | + | 68861 |
| Philippine National Bank (Pesonet) | – | + | 68511 |
| Philippine National Bank (PNB) | + | – | 493 |
| Philtrust Bank | + | + | 5431 |
| PORAC RURAL BANK | – | + | 55781 |
| Producers Savings Bank Corporation | + | + | 68521 |
| Queen City Development Bank, Inc. | + | + | 55791 |
| Quezon Capital Rural Bank | + | – | 5641 |
| Rang-Ay Bank | + | + | 68531 |
| RBT RURAL BANK | – | + | 68541 |
| RCBC Online Banking | + | + | 494 |
| ROBINSONS BANK CORPORATION | + | + | 68571 |
| RURAL BANK OF BACOLOD CITY | – | + | 68591 |
| RURAL BANK OF BAUANG | – | + | 68601 |
| RURAL BANK OF CAUAYAN INCORPORATED | – | + | 67991 |
| RURAL BANK OF DIGOS | – | + | 68611 |
| Rural Bank of Guinobatan, Inc. | + | + | 55801 |
| RURAL BANK OF LA PAZ | – | + | 68631 |
| RURAL BANK OF LEBAK (SULTAN KUDARAT) | – | + | 68561 |
| RURAL BANK OF ROSARIO | – | + | 68641 |
| RURAL BANK OF SAGAY | – | + | 68661 |
| RURAL BANK OF SAN MEDJUGORJE | – | + | 68551 |
| RURAL BANK OF STA. IGNACIA | – | + | 68651 |
| MariBank Philippines | + | + | 66671 |
| Security Bank Online Transfer | + | + | 496 |
| SHINHAN BANK | – | + | 68681 |
| Standard Chartered Bank | + | + | 5441 |
| Starpay Corporation | + | – | 68701 |
| Sterling Bank | + | + | 1551 |
| SUMITOMO MITSUI BANKING CORP | – | + | 68691 |
| Sun Savings Bank | + | – | 5571 |
| TAYOCASH INC | + | + | 68711 |
| Tonik Bank | + | – | 68721 |
| TONIK DIGITAL BANK, INC. | – | + | 68731 |
| Topjuan Tech Corporation | + | – | 68741 |
| TRAXION PAY, INC. | – | + | 68751 |
| UCPB Savings Bank | + | + | 5651 |
| Unionbank | + | + | 497 |
| UnionDigital Bank | + | + | 68781 |
| UNITED COCONUT PLANTERS BANK | – | + | 498 |
| United Overseas Bank | – | + | 5451 |
| UNObank | + | + | 68771 |
| USSC Money Services Inc | + | + | 55721 |
| Veterans Bank | + | + | 1521 |
| Wealth Development Bank Corporation | + | + | 5661 |
| Yuanta Savings Bank | – | + | 55811 |
| ZAMBALES RURAL BANK | – | + | 68801 |
