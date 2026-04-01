# sdk_ios

sdk_ios is a software development kit for fast integration of the Some Platform payment solutions right in your mobile app for iOS. With sdk_ios, you can quickly build and offer you customers a fast checkout experience from inside of your iOS app. In this section you will find information about using sdk_ios as well as Swift and Objective-C code samples.

Within sdk_ios 1.9 two versions are available: sdk_ios 1.9.1 can be embedded in mobile applications running on iOS 11 or above and compatible with XCode 11 or above, while for mobile applications running on iOS 10 and compatible with Xcode 10 sdk_ios 1.9.0 should be used.

Libraries:Sample code:You can also download sdk_ios from GitHub. Use the following links to download sdk_ios:

## Callbacks

### Overview

moreas well as the payment method that was usedWhen using sdk_ios, the merchant can receive callbacks that are sent by the payment platform directly to merchant web service and callbacks that are first sent by the payment platform to sdk_ios and then by sdk_ios to merchant mobile application. In the former case, the parameters sent in callbacks may vary depending on the configurations (). In the latter case, specific set of parameters is provided—the data about status, type and ID of the payment, currency and amount of the payment:

The following sections provide information about these callback messages.

```
{
    "payment": {
        "status": "success",
        "type": "purchase",
        "id": "12345",
        "date": "2020-09-11T14:49:18+0000",
        "method": "card",
        "sum": 1000,
        "currency": "USD"
         }
}
```

### Callbacks sent by the payment platform

en_pp_callbacks.ditaThe payment platform sends all the callback messages to the callback URL you specify. You need to contact the Some Platform technical support and provide the URL to send callbacks. For more information about callbacks, see.

### Callbacks sent by sdk_ios

Merchant mobile application can receive callback messages with information about purchase processing result from sdk_ios as information about payment processing result is sent to sdk_ios by the payment platform. The callback message is sent to the merchant before the page with information about the result is displayed to the customer on the payment form.

`sdk_ios_callback`onPaymentResultTo obtain information about payment result, you need to use thepublic protocol. This protocol involves the use of themethod which comes into action automatically as the final payment status is received and, as a result, the merchant receives information about the payment result. To obtain information about the purchase processing result, you can use the following examples of the code with no additional setup; if needed, you can also change the code.
