# Processing payments made with Apple Pay

In order to implement payment processing which involves the Apple Pay payment method, it is necessary to do the following:

`applePayOptions`Once these steps are completed, you can process Apple Pay payments. The main steps such as opening the payment form and processing the responses are performed according to the general procedure, which is the same for all payment methods. In addition, you need to pass the following data in theobject

`applePayOptions`All parameters passed in theobject are mandatory and are necessary for the Apple Pay session to start correctly.

1. [Create a merchant identifier](https://help.apple.com/developer-account/#/devb2e62b839?sub=dev103e030bb)Register the merchant's identifier (Merchant ID) with Apple. Merchant ID allows the merchant to accept payments made with the Apple Pay method. This identifier never expires and can be used in multiple websites and iOS applications. For more information see Apple documentation:.
2. [Create a payment processing certificate](https://help.apple.com/developer-account/#/devb2e62b839?sub=devf31990e3f)Create Payment Processing Certificate. This certificate is associated with the Merchant ID and is used to secure transaction data when processing Apple Pay payments. For more information see Apple documentation:.
3. Send Payment Processing Certificate to the Some Platform technical support. Use the agreed upon security methods.
4. [Enable Apple Pay](https://help.apple.com/xcode/mac/9.3/#/deva43983eb7?sub=dev44ce8ef13)Enable the Apple Pay capability for the mobile application in the programming environment. For information about enabling Apple Pay capability in Xcode environment, see Apple documentation:
