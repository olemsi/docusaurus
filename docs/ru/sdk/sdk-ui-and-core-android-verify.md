# Проверка платежных карт

Проверка карт обычно нужна, когда надо проверить карту без списания средств, например перед выплатой на эту карту, или сохранить данные карты для их дальнейшего использования. По сути это платеж со списанием нулевой суммы.

`sdk_ui_android_host_first_capActionType.VerifypaymentOptions`Для такой проверки вызовите платежную форму с типом действияв объекте:

```c
sdk_ui_android_host_first_capPaymentOptions.sdk_ui_android_host_first_capActionType.Verify;
```
