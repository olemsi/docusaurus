# Opening in new tab

When opened as a separate HTML page, the Payment Widget payment form is displayed to the customer in a separate browser tab. Depending on the browser operation setup, it can be an active tab, in which the web service page was opened, or a new tab—but in either case, the customer's interaction with the web service is interrupted and the customer is redirected to a different page, which focuses their attention on the purchase. After the purchase, the customer can be redirected back to the web service (details).

For opening the payment form as a separate page, the following should be performed on the web service side:

1. Define the events upon which the payment form should open (for example, the purchase button click).
2. `https://paymentpage.platform.dev/shared/merchant.js`Set up the payment form to open upon the required events by using your in-house solutions or the JavaScript library from Platform available at. Among other capabilities, this library allows you to automatically use a certain option of Payment Widget opening depending on a device. It means the form can be set to open as a separate page on mobile devices and in a modal window or in an iframe element on other devices.
