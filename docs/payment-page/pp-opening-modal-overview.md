# Opening in modal

When opened in a modal window, the Payment Widget payment form is displayed to the customer over the merchant's web service page. This interrupts the customer's interaction with the web service but keeps them engaged and focuses the customer's attention on the purchase without redirecting them to another page.

For opening the payment form in a modal window, the following should be performed on the web service side:

When processing Apple Pay payments via Payment Widget with the option to open the payment form in a modal window, register your merchant domains with the Apple Pay service (learn more).

1. `https://paymentpage.platform.dev/shared/merchant.css`Link the CSS library from Platform on the client side of the web service for the payment form to be displayed correctly. This library is available at.
2. Define the events that will trigger the opening of the payment form (for example, the purchase button click).
3. `https://paymentpage.platform.dev/shared/merchant.js`Set up the payment form to open upon the required events by using your in house-solutions or the JavaScript library from Platform available at.

::: warning
Keep in mind that to ensure correct behaviour of the payment form, you must link the Platform CSS library via the CDN (Content Delivery Network). Storing this library locally is not allowed.
:::
