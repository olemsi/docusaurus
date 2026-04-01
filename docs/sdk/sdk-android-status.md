# Response processing

`onActivityResultsdk_android_activity`To receive and process response with the payment processing results you need to override themethod in activity from which you started.

The following table lists the possible values of response codes as well as the corresponding constant names and description along with the suggested response actions.

| Response code | Result constant | Description |
| --- | --- | --- |
| 0 | RESULT_SUCCESS | Checkout successfully completed. |
| 100 | RESULT_DECLINE | Operation was declined, for example because of insufficient funds. |
| 301 | RESULT_CANCELLED | Operation was cancelled by the customer. |
| 501 | RESULT_FAILED | An internal error occurred. You may need to contact technical support. |
