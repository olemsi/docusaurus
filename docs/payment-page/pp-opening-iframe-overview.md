# Opening in iframe

When opened in an iframe element, the Payment Widget payment form is embedded in the merchant's web service HTML page. This option may not necessarily focus the customer's attention on the purchase but keeps the customer in the context of the web service, without interrupting their interaction with it and redirecting them to a different page.

For opening the payment form in an iframe element, the following should be performed on the web service side:

When processing Apple Pay payments via Payment Widget with the option to open the payment form in an iframe element, register your merchant domains with the Apple Pay service (learn more).

1. `https://paymentpage.platform.dev/shared/merchant.css`Link the CSS library from Platform on the client side of the web service for the payment form to be displayed correctly. The library is available at.
2. Define the events that will trigger the opening of the payment form (for example, the purchase button click).
3. `https://paymentpage.platform.dev/shared/merchant.js`Set up the payment form to open upon the required events by using your in house-solutions or the JavaScript library from Platform available at.

::: tip
For the payment form to be displayed correctly, the minimum dimensions of the iframe element should be 320 and 600 pixels in width and height accordingly—if smaller dimensions are specified, the form does not fit into the element. For responsive display on desktop computers, the minimum width of the element should be 480 pixels. The restrictions on the maximum size are not imposed.
:::

::: warning
Keep in mind that to ensure correct behaviour of the payment form, you must link the Platform CSS library via the CDN (Content Delivery Network). Storing this library locally is not allowed.
:::
