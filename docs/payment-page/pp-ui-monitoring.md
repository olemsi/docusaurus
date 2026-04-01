# Handling events in Payment Widget

`onPaymentSubmitResultrequest_id`When testing the integration with the Platform payment platform via Payment Widget, you can log payment request identifiers in a browser console for the purpose of testing and debugging your web service and use the logged request identifiers for monitoring and analysing payment processing. The following is the example of theevent handler function that logs thevariable value to the browser console.

`onResize`The following is the example of theevent handler function that is executed when the page contained in an iframe is resized.

`onResizeframeWidthframeHeightdata`In this example, when theevent handler is triggered, it updates the iframe width and height based on theandvalues from theobject.

## Overview

When using a payment form, you may need to monitor customer interactions with the form, so that your web service can respond to different events in a timely and efficient manner. For example, if a payment form fails to load, the customer can be provided with an appropriate explanation, or if the customer abandons the order, they can be reminded to enter payment details to complete the purchase.

With Payment Widget, you can use libraries from Platform that support listening to events which occur in the front end of your web service and responding to them by executing JavaScript event handlers that are defined in the requests for opening Payment Widget. Note that the information about events can only complement information obtained from callbacks; hence, it is not recommended that you use event handlers exclusively as a replacement for callbacks.

## Use

To implement event handling within Payment Widget in your web service, you only need to complete technical steps (that is, using this option does not require you to contact the Platform technical support for additional assistance with this matter).

Firstly, make sure to link the following libraries from Platform to the front end of your web service.

Secondly, configure your web service to process the data received from triggered event handlers according to the specifics of the web service and customer scenarios. For example, you may implement functions for updating the payment status on the checkout page or for accepting payments with card tokens.

`datadata`Thirdly, in each request for opening Payment Widget that requires listening to interface events, define necessary event handlers from the table below. Event handlers must be specified in JavaScript and placed after the list of required parameters and signature. You can add any number of functions to an event handler and use theobject that contains data associated with certain events (not all event handlers support theobject).

```xml
&lt;link rel="stylesheet" href="https://paymentpage.platform.dev/shared/merchant.css" />
&lt;script type="text/javascript" src="https://paymentpage.platform.dev/shared/merchant.js">&lt;/script>
```

```javascript show_more
**onPaymentSubmitResult: async function (data) {
        console.log(data.request_id);
    }**EPayWidget.run({
    payment_id: 'payment_443',
    payment_amount: 1000,
    payment_currency: 'EUR',
    project_id: 57123,
    signature: 'YWb6Z20ByxpQ30hfTIjaCCsVIwVynXV',}, 'POST');
```

```javascript
**onResize: function (data) {
        site.resize({
            frameWidth: data.width,
            frameHeight: data.height
        });
    }**EPayWidget.run({
    payment_id: 'payment_443',
    payment_amount: 1000,
    payment_currency: 'EUR',
    project_id: 57123,
    signature: 'YWb6Z20ByxpQIjaCCsVIwVynXV',}, 'POST');
```
