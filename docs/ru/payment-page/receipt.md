# и оповещенийОтправка чековпользователю

## Отправка чека

Для формирования и отправки электронного товарного чека пользователю после проведения платежа необходимо передать все позиции, указанные в чеке.

receipt_data`model_receiptdata`Данные для чека передаются в виде JSON-объекта, который необходимо закодировать в Base64 и отправить в запросе на проведение платежа в параметре. Структура JSON-объекта приведена в схемев Gate
                sts_api.

## Пример передачи данных для чека

{  
   "receipt_data":{  
      "positions":[  
         {  
            "quantity":3,
            "amount":10000,
            "tax":18,
            "tax_amount":1800,
            "description":"Рамка с дизайном"
         }
      ],
      "total_tax_amount":1800,
      "common_tax":1800       
   }
}Исходный JSON-объект:

receipt_data: "eyAgCiAgICAgICJwb3NpdGlvbnMiOlsgIAogICAgICAgICB7ICAKICAgICAgICAgICAgInF1YW50aXR5IjozLAogICAgICAgICAgICAiYW1vdW50IjoxMDAwMCwKICAgICAgICAgICAgInRheCI6MTgsCiAgICAgICAgICAgICJ0YXhfYW1vdW50IjoxODAwLAogICAgICAgICAgICAiZGVzY3JpcHRpb24iOiLQoNCw0LzQutCwINGBINC00LjQt9Cw0LnQvdC+0LwiCiAgICAgICAgIH0KICAgICAgXSwKICAgICAgInRvdGFsX3RheF9hbW91bnQiOjE4MDAsCiAgICAgICJjb21tb25fdGF4IjoxODAwICAgICAgIAogICB9"Тот же массив, закодированный в Base64, для отправки в запросе на Payment Widget:

ru_gate_receipts.ditaПодробная информация об отправке чеков пользователям представлена в разделе.

## Отправка оповещения

В случае проведения платежей по картам белорусских банков возможно настроить отправку оповещений пользователям о совершении платежа на электронную почту. Подробную информацию о настройке и подключении данной функциональности уточняйте у курирующего менеджера.
