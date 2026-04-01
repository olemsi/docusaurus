# Формат запросов

Чтобы провести выплату, составьте и отправьте в платежную платформу запрос — HTTP-сообщение заданной структуры — с использованием метода POST. В каждом запросе к платежной платформе должны передаваться следующие элементы в указанном порядке:

В следующей таблице перечислены конечные точки для выплаты.

В дополнение к обязательному полюв заголовке можно использовать любые другие поля из числа допустимых.`Host`[в HTTP версии 1.1](https://tools.ietf.org/html/rfc2616#page-31)

При формировании JSON-строки необходимо использовать базовый набор объектов и параметров:

Кроме базового набора объектов и параметров в запросе нужно передавать и другие параметры. Эти параметры указаны в таблице:

```
// Пример запроса на выплату. PHP
require_once 'Signer.php';

$payoutUrl = '';
$projectId = 200;
$secretKey = '123';

$requestParams = [
    'general' => [
        'project_id' => $projectId,
        'payment_id' => microtime(),
    ],
    'payment' => [
        'amount'   => 100,
        'currency' => '',
    ],
    'customer' => [
        'id' => 'test_customer_id',
        'ip_address'=> '14.192.204.152',
        'email'=> 'janedoe@example.com',
    ],
    'account' => [
        'bank_id' => 14,
        'customer_name' => 'Jane Doe',
        'number' => '314159265358979',
    ],
];

$requestParams['general']['signature'] = Signer::sign($requestParams, $secretKey);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $payoutUrl);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($requestParams));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

if (!$response) {
    print_r(curl_error($ch));
} else {
    print_r($response);
}

curl_close($ch);http://gate.test/v2/payment/banks/malaysia/payouthttp://gate.test/v2/payment/card/payoutMYRKZT# Пример запроса на выплату. Python
from datetime import datetime
from Signer import Signer
import requests
import json

payoutUrl = ''
secretKey = '123'
projectId = 200

params = {
    'general': {
        'project_id': 200,
        'payment_id': 'X03936'
    },
    'payment': {
        'amount': 122990,
        'currency': ''
    },
    'customer': {
        'id': 'customer_173',
        'ip_address': '1.2.3.4',
        'email': 'janedoe@example.com'
    },
    'account': {
        'bank_id': 114,
        'customer_name': 'Jane Doe',
        'number': '314159265358979'
    }
}

print(json.dumps(params))

signer = Signer()
params['general']['signature'] = signer.getSign(params, secretKey)

r = requests.post(
    payoutUrl,
    json=params
)

print(r.status_code, r.reason)
print(r.text[:300])http://gate.test/v2/payment/banks/malaysia/payouthttp://gate.test/v2/payment/card/payoutMYRKZT// Пример запроса на выплату. Java
const signer  = require('./Signer');
const request = require('request'); // npm install request

const secretKey = '123';
const params = {
    'general': {
        'project_id': 200,
        'payment_id': 'X03936'
    },
    'payment': {
        'amount': 122990,
        'currency': ''
    },
    'customer': {
        'id': 'customer_173',
        'ip_address': '1.2.3.4',
        'email': 'janedoe@example.com'
    },
    'account': {
        'bank_id': 114,
        'customer_name': 'Jane Doe',
        'number': '314159265358979'
    }
};

params['general']['signature'] = (new signer()).getSign(params, secretKey);

const opts = {
    uri: '',
    method: 'POST',
    json: params
};

request(opts, function (error, response, body) {
    if (error || response.statusCode !== 200) {
        console.log('request got an error:');
        console.log(body);
        return
    }

    console.log('request got OK');
    console.log(body);
});MYRKZThttp://gate.test/v2/payment/banks/malaysia/payouthttp://gate.test/v2/payment/card/payout
```
