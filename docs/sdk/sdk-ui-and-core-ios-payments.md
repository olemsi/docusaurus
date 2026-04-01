# Processing payments

`Sale`By default, sdk_ui_ios allows processing one-step purchases (action type). This type of checkout works right out-of-the-box and requires no additional setup.

In addition, sdk_ui_ios supports processing two-step purchases (which involves placing an authorization hold via the SDK and subsequent debiting of the authorized amount). To perform a two-step purchase:

1. `AuthpaymentOptions`SwiftpaymentOptions.action = .AuthObjective-C[paymentOptions setAction: ActionTypeAuth];Open the payment form withspecified as a value for the action type parameter in theobject:
2. When needed, initiate debiting of the authorized amount via Dashboard or Gate. To confirm debiting, use a request to theendpoint.
