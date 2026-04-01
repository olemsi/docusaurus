# sdk_android

sdk_android may be embedded in mobile applications developed for Android version 4.4 (API Level: 19) or later and supporting AndroidX. The screen resolution of the mobile device must be at least 480x800 pixels.

Library: sdk_android_releasesSample code: sdk_android_sampleYou candownload sdk_android from GitHub. Use the following links to download sdk_android:

sdk_android is a software development kit for fast integration of the Some Platform payment solutions right in your mobile application for Android. With sdk_android, you can quickly build and offer you customers a fast checkout experience from inside of your Android app. In this section you will find information about using sdk_android, and Java and Kotlin code samples.

## Callbacks

### Overview

more, as well as the payment method usedWhen using sdk_android, the merchant can receive callbacks that are sent by the payment platform directly to merchant web service and callbacks that are first sent by the payment platform to sdk_android and then by sdk_android to merchant mobile application. In the former case, the parameters included in callbacks may vary depending on the configuration (). In the latter case, the specific set of parameters need to be provided: the data about status, type and ID of the payment, currency and amount of the payment:

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

### Callbacks sent by sdk_android

Merchant mobile application can receive callback messages with information about purchase processing result from sdk_android as information about payment processing result is sent to sdk_android by the payment platform. The callback message is sent to the merchant before the page with information about the result is displayed to the customer on the payment form.

Information about purchase processing result is provided in broadcast messages sent to merchant mobile application by sdk_android. To obtain this information, you need to do the following:

BroadcastReceiverThe following are examples of implementation offor obtaining information about the purchase processing result.

1. BroadcastReceiverCreate theobject to receive broadcast messages.
2. Intent`sdk_android_callback_type.getValue()sdk_android_activity`Upon receipt of broadcast messages from sdk_android, obtain information about the purchase processing result from theobject by using thekey. The key is a constant provided by.
