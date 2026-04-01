# Payment card verification

Payment instrument verification can be used when you need to validate a card without withdrawing funds instantly (for example, before performing a payout) or when you need to save card details for subsequent use. It is essentially a payment that involves debiting a dummy (zero) amount from the customer's card.

`sdk_ui_android_host_first_capActionType.VerifypaymentOptions`To perform verification, open the payment form withspecified as a value for the action type parameter in theobject:

```java
sdk_ui_android_host_first_capPaymentOptions.sdk_ui_android_host_first_capActionType.Verify;
```
