# Processing scenarios

`1379.50 USD12.99 GBPeddington@mail.ukbaskerville@mail.uk`Suppose that your customer wants to make apurchase by using payment link and asks you to send the payment link to email.

## Payment processing

1. The web service sends to the payment platform a request with parameters that require the Platform platform to send the payment link to customer.
2. Standard email content is shown below.Sample email with a payment linkThe payment platform processes the request, issues the corresponding callback to merchant's web service, and sends the payment link to the email that was specified in the initial request.The preferable language of email is English.
3. If the initial request does not contain instructions to select specific payment method, Payment Widget displays payment method selection page. If the initial request specifies the payment method, Payment Widget displays the page for the selected payment method.Sample page for purchase with cardCustomer clicks the payment link to open Payment Widget.
4. paymentThe customer entersdetails and proceeds with payment; if necessary the customer performs additional operations required to complete one or more auxiliary procedures.
5. Sample payment result pageAfter payment is complete the payment platform submits a callback with the payment results to the web service; the web page with the payment result information is displayed to the customer.

## Payment cancellation

1. Merchant's web service sends a request for payment cancellation to the payment platform.
2. Standard email content is shown below.Sample payment cancellation emailThe payment platform processes the request, issues the corresponding callback to merchant's web service, and sends an email to the email address that was specified in the initial request.The preferable language of email is English.
3. Customer clicks the payment link and is presented with the payment cancellation page.

## Payment link expiration

Below you find the information about what the web service is required to do to complete payment.

1. The payment platform sends a callback with notification about expired payment link to the web service.
2. Page with notification about expired payment linkIf customer clicks the payment link, a page with the notification about expired payment link is displayed.
