# Получение информации о платеже

`onActivityResult`Для получения уведомлений о результатах проведения платежей используется метод.

Допустимые коды результатов проведения платежей:

- `RESULT_SUCCESS`— платеж проведен;
- `RESULT_CANCELLED`— платеж отменен;
- `RESULT_DECLINE`— платеж отклонен;
- `RESULT_ERROR`— возникла ошибка при проведении платежа.

```java
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
 
        when (resultCode) {
            sdk_ui_android_host_first_capPaymentSDK.RESULT_SUCCESS -> {
                Toast.makeText(this, "Payment was finished successfully", Toast.LENGTH_SHORT).show()
                Log.d("PaymentSDK", "Payment was finished successfully")
            }
            sdk_ui_android_host_first_capPaymentSDK.RESULT_CANCELLED -> {
                Toast.makeText(this, "Payment was cancelled", Toast.LENGTH_SHORT).show()
                Log.d("PaymentSDK", "Payment was cancelled")
            }
            sdk_ui_android_host_first_capPaymentSDK.RESULT_DECLINE -> {
                Toast.makeText(this, "Payment was declined", Toast.LENGTH_SHORT).show()
                Log.d("PaymentSDK", "Payment was declined")
            }
            sdk_ui_android_host_first_capPaymentSDK.RESULT_ERROR -> {
                val errorCode = data?.getStringExtra(sdk_ui_android_host_first_capPaymentSDK.EXTRA_ERROR_CODE)
                val message = data?.getStringExtra(sdk_ui_android_host_first_capPaymentSDK.EXTRA_ERROR_MESSAGE)
                Toast.makeText(this, "Payment was interrupted. See logs", Toast.LENGTH_SHORT).show()
                Log.d(
                    "PaymentSDK",
                    "Payment was interrupted. Error code: $errorCode. Message: $message"
                )
            }
        }
    }
```
