# Payment status information

`onActivityResult`To receive payment result notifications, use themethod.

Possible payment result codes:

- `RESULT_SUCCESS`—payment has been completed.
- `RESULT_CANCELLED`—payment has been cancelled.
- `RESULT_DECLINE`—payment has been denied.
- `RESULT_ERROR`—error occurred when the payment was being processed.

```json
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
 
        when (resultCode) {
            Ecmpsdk_ui_android_host_first_capPaymentSDK.RESULT_SUCCESS -> {
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
