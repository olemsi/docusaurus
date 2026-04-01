# Processing payments

`Sale`By default, sdk_ui_android allows you to process one-step purchases (action type). This type of checkout works right out-of-the-box and requires no additional setup.

In addition, sdk_ui_android supports processing two-step purchases (which involves placing an authorization hold via the SDK and subsequent debiting of the authorized amount). To perform a two-step purchase:

1. `sdk_ui_android_host_first_capActionType.AuthpaymentOptions`sdk_ui_android_host_first_capPaymentOptions.sdk_ui_android_host_first_capActionType.Auth;Open the payment form withspecified as a value for the action type parameter in theobject:
2. When required, initiate debiting of the authorized amount via Dashboard or Gate by sending the request to theendpoint.
