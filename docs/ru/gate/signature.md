# Подписывание запросов

## Описание алгоритма

*В качестве входных данных*для подписывания выступают:

*В качестве выходных данныхподписьподписанные данные*`signature`подписывания в зависимости от реализации алгоритма могут выступать либо, либо— как правило, это итоговое тело запроса в формате JSON с параметром, включенным в его состав.

`signaturesignature`Далее в описании, примере и форме для тестирования представлен часто используемый и наиболее показательный вариант реализации алгоритма: с телом запроса в формате JSON на входе (без параметра) и на выходе (с параметром).

1. *Данные*`signature`Как правило, это заполненное тело запроса в формате JSON без включения в него параметра., которые требуется подписать.
2. *Ключ*Для отладки и тестирования алгоритма подписывания могут использоваться произвольные ключи. Для рабочих запросов в платформу следует применять только актуальный секретный ключ, используемый для подписывания.

## Пример для запроса на оплату через Gate

Допустим, что надо подписать запрос в Gate при следующих условиях:

`signature`Задача заключается в том, чтобы вычислить подпись, то есть рассчитать значение параметраи добавить его в запрос. Для этого необходимо:

- `secret`Используемый ключ —
- ***подпись, которую нужно создать*"signature": "<>"**{
    "general": {
        "project_id": 3254,
        "payment_id": "id_38202316",},
    "customer": {
        "id": "585741",
        "email": "johndoe@example.com",
        "first_name": "John",
        "last_name": "Doe",
        "address": "Downing str., 23",
        "identify": {
            "doc_number": "54122312544"
        },
        "ip_address": "198.51.100.47"
    },
    "payment": {
        "amount": 10800,
        "currency": "USD",
        "description": "Computer keyboards"
    },
    "receipt_data": {
        "positions": [
            {
                "quantity": "10",
                "amount": "108",
                "description": "Computer keyboard"
            }
        ]
    },
    "return_url": {
        "success": "https://paymentpage.example.com/complete-redirect?id=success",
        "decline": "https://paymentpage.example.com/complete-redirect?id=decline"
    }
}Предварительная версия тела запроса, в котором еще нет значения параметра с подписью, выглядит так:

1. `signature`***подпись, которую нужно создать*"signature": "<>"**,{
    "general": {
        "project_id": 3254,
        "payment_id": "id_38202316"},
    "customer": {
        "id": "585741",
        "email": "johndoe@example.com",
        "first_name": "John",
        "last_name": "Doe",
        "address": "Downing str., 23",
        "identify": {
            "doc_number": "54122312544"
        },
        "ip_address": "198.51.100.47"
    },
    "payment": {
        "amount": 10800,
        "currency": "USD",
        "description": "Computer keyboards"
    },
    "receipt_data": {
        "positions": [
            {
                "quantity": "10",
                "amount": "108",
                "description": "Computer keyboard"
            }
        ]
    },
    "return_url": {
        "success": "https://paymentpage.example.com/complete-redirect?id=success",
        "decline": "https://paymentpage.example.com/complete-redirect?id=decline"
    }
}Убедиться, что в теле запроса нет параметра, даже с пустым значением. Если такой параметр есть, его нужно удалить.
2. general:project_id:3254
general:payment_id:id_38202316
customer:id:585741
customer:email:johndoe@example.com
customer:first_name:John
customer:last_name:Doe
customer:address:Downing str., 23
customer:identify:doc_number:54122312544
customer:ip_address:198.51.100.47
payment:amount:10800
payment:currency:USD
payment:description:Computer keyboards
receipt_data:positions:0:quantity:10
receipt_data:positions:0:amount:108
receipt_data:positions:0:description:Computer keyboard
return_url:success:https://paymentpage.example.com/complete-redirect?id=success
return_url:decline:https://paymentpage.example.com/complete-redirect?id=declineПреобразовать оставшиеся параметры в строки UTF-8 согласно правилам алгоритма:
3. customer:address:Downing str., 23
customer:email:johndoe@example.com
customer:first_name:John
customer:id:585741
customer:identify:doc_number:54122312544
customer:ip_address:198.51.100.47
customer:last_name:Doe
general:payment_id:id_38202316
general:project_id:3254
payment:amount:10800
payment:currency:USD
payment:description:Computer keyboards
receipt_data:positions:0:amount:108
receipt_data:positions:0:description:Computer keyboard
receipt_data:positions:0:quantity:10
return_url:decline:https://paymentpage.example.com/complete-redirect?id=decline
return_url:success:https://paymentpage.example.com/complete-redirect?id=successОтсортировать полученные строки по алфавиту:
4. customer:address:Downing str., 23;customer:email:johndoe@example.com;customer:first_name:John;customer:id:585741;customer:identify:doc_number:54122312544;customer:ip_address:198.51.100.47;customer:last_name:Doe;general:payment_id:id_38202316;general:project_id:3254;payment:amount:10800;payment:currency:USD;payment:description:Computer keyboards;receipt_data:positions:0:amount:108;receipt_data:positions:0:description:Computer keyboard;receipt_data:positions:0:quantity:10;return_url:decline:https://paymentpage.example.com/complete-redirect?id=decline;return_url:success:https://paymentpage.example.com/complete-redirect?id=successОбъединить отсортированные строки в одну строку с использованием в качестве разделителя точки с запятой:
5. lagSnuspAn+F6XkmQISqwtBg0PsiTy62fF9x33TM+278mnufIDZyi1yP0BQALuCxyikkIxIMbodBn2F8hMdRwA==Вычислить HMAC полученной строки с использованием функции хеширования SHA-512 и используемого ключа, после чего кодировать двоичный код HMAC с применением алгоритма Base64:
6. **"signature": "lagSnuspAn+F6XkmQISqwtBg0PsiTy62fF9x33TM+278mnufIDZyi1yP0BQALuCxyikkIxIMbodBn2F8hMdRwA=="**{
    "general": {
        "project_id": 3254,
        "payment_id": "id_38202316",},
    "customer": {
        "id": "585741",
        "email": "johndoe@example.com",
        "first_name": "John",
        "last_name": "Doe",
        "address": "Downing str., 23",
        "identify": {
            "doc_number": "54122312544"
        },
        "ip_address": "198.51.100.47"
    },
    "payment": {
        "amount": 10800,
        "currency": "USD",
        "description": "Computer keyboards"
    },
    "receipt_data": {
        "positions": [
            {
                "quantity": "10",
                "amount": "108",
                "description": "Computer keyboard"
            }
        ]
    },
    "return_url": {
        "success": "https://paymentpage.example.com/complete-redirect?id=success",
        "decline": "https://paymentpage.example.com/complete-redirect?id=decline"
    }
}Добавить полученную подпись в тело запроса:

## Форма для тестирования

<iframe scrolling="no"  style="width:100%;"
     src="oxygen-webhelp/template/signature_mock/generation.html" 
      onload="iframeResize(this)" frameborder="0">
