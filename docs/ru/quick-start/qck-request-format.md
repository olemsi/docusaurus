# Запрос

## Общая информация

Чтобы провести оплату, сначала необходимо открыть страницу оплаты Some Platform пользователю. Это можно сделать следующими способами:

Информация об этих способах, а также о параметрах, поддерживаемых при открытии страницы оплаты, представлена далее.

- перенаправить пользователя по прямой ссылке для открытия страницы оплаты в виде отдельной HTML-страницы;
- обратиться к JavaScript-библиотеке, предоставляемой Some Platform, для открытия страницы оплаты как в виде отдельной HTML-страницы, так и в виде элемента iframe.

## Открытие страницы оплаты с использованием ссылки

С использованием ссылки можно открыть страницу оплаты в виде отдельной HTML-страницы. Для этого достаточно перенаправить пользователя по ссылке представленного формата.

При этом в качестве набора параметров необходимо добавить строку данных, состоящую из пар названий и значений параметров.

```
// Пример формирования ссылки на открытие страницы оплаты на PHP
include 'Signer.php';

$secretKey = 123;

$params = [
    'project_id' => 2990,
    'payment_amount' => 10000,
    'payment_currency' => '',
    'customer_id' => 'customer_173',
    'customer_first_name' => 'John',
    'customer_last_name' => 'Doe',
    'customer_email' => 'johndoe@example.com',
    'payment_id' => 'X03935',
];

$params['signature'] = Signer::getSign($params, $secretKey);

$uriParams = http_build_query($params);
$link = implode('?', ['http://pp.terminal.test/payment', $uriParams]);MYRKZT# Пример формирования ссылки на открытие страницы оплаты на Python
import urllib.parse
import Signer

params = {
    'project_id': 2990,
    'payment_amount': 10000,
    'payment_currency': '',
    'customer_id': 'customer_173',
    'customer_first_name': 'John',
    'customer_last_name': 'Doe',
    'customer_email': 'johndoe@example.com',
    'payment_id': 'X03935',
}

signer = Signer.Signer()

params['signature'] = signer.getSign(params, '123')

print(params['signature'])

jointParams = urllib.parse.urlencode(params)

link = '?'.join(['http://pp.terminal.test/payment', jointParams])MYRKZT// Пример формирования ссылки на открытие страницы оплаты на Java
const signer  = require('./Signer');

let params = {
    'project_id': 2990,
    'payment_amount': 10000,
    'payment_currency': '',
    'customer_id': 'customer_173',
    'customer_first_name': 'John',
    'customer_last_name': 'Doe',
    'customer_email': 'johndoe@example.com',
    'payment_id': 'X03935',
};

params['signature'] = (new signer()).getSign(params, '123');

const uriParams = Object.keys(params).sort().reduce(
    (paramsArray, key) => {
        paramsArray.push(key + '=' + encodeURIComponent(params[key]));
        return paramsArray;
    },
    []
);

const link = ['http://pp.terminal.test/payment', uriParams.join('&amp;')].join('?');MYRKZTdomen_PP/payment?<parameters>
```

::: tip
Здесь вместо <> надо указать доменное имя Payment Widget, которое следует узнавать у своего курирующего менеджера или в службе поддержки.*pp_host*
:::

## Открытие страницы оплаты с использованием JavaScript-библиотеки

С использованием JavaScript-библиотеки, предоставляемой Some Platform, можно открыть страницу оплаты в элементе iframe или в виде отдельной HTML-страницы. Сначала необходимо подключить CSS- и JavaScript-библиотеки с помощью элементовисоответственно. Как правило, эти элементы размещаются внутри заголовка HTML-страницы.`${empty}${empty}`

Для открытия страницы оплаты следует использовать один из двух методов JavaScript-объекта:`EPayWidget`

При этом необходимо указать:

В объектенеобходимо передавать все параметры, обязательные для выполнения оплаты, а также подпись к данным. Информация обо всех параметрах, доступных для использования в этом объекте, представлена далее, а информация о формировании подписи к данным — в разделе.`configObj`ru_signature_intro.dita

```
<head>
...
<!-- Подключение CSS-библиотеки -->
<link rel="stylesheet" href="domen_PP/shared/merchant.css" /> 
<!-- Подключение JavaScript-библиотеки -->
<script type="text/javascript" src="domen_PP/shared/merchant.js">
</script>
...
</head>
```

::: tip
Здесь вместо <> надо указать доменное имя Payment Widget, которое следует узнавать у своего курирующего менеджера или в службе поддержки.*pp_host*
:::

::: tip
Здесь вместо <> надо указать доменное имя Payment Widget, которое следует узнавать у своего курирующего менеджера или в службе поддержки.*pp_host*
:::

## Параметры открытия страницы оплаты

При формировании запросов на открытие страницы оплаты для проведения оплаты необходимо учитывать следующее:

1. В запросе должны использоваться следующие обязательные параметры:
2. При указании некоторых кодов валют следует учитывать следующие особенности, касающиеся суммы платежа:
3. Дополнительно в запросах могут использоваться другие параметры открытия страницы оплаты, информация о которых представлена далее.

| Параметр | Описание |
| --- | --- |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
