# Time limit

## Overview

During the work with Payment Widget, it is possible to specify the date and time until which the customer can work with the payment form to confirm the targeted action. This capability allows to control providing services to customers with regard to time and can be especially relevant in sales of tickets or clearance sales of goods.

The date and time allocated for working with the payment form are specified in requests for opening Payment Widget, and for setting up this capability, there are no additional actions required. If the restriction is set, the Payment Widget pages contain an additional information panel that displays:

- `hh:mm`the information about the time when the work with the form is set to be completed, in the format of;
- `mm:ss`the information about the time that remains until the completion of the work with the form, with the use of the timer;
- the indicator that counts down the final five minutes of the whole time allocated for working with Payment Widget.

::: tip
Note that the time allocated for working with the form cannot exceed 30 days from the moment when the request for opening Payment Widget was sent. Otherwise the date and time specified in the request will be ignored and the time limit will not be applied.
:::

## Usage scenario

On the customer side, purchase processing with the limited time of working with Payment Widget looks as follows:

1. On the merchant web service side, the customer confirms the purchase of the order and is redirected to the payment form.
2. In case if the customer does not confirm the targeted action until the allocated time expires, the customer is notified about the time expiration on the next page of the payment form.The customer performs the actions required for making the purchase and receives the result information.

## Special aspects

When using the capability of limiting the time of the work with Payment Widget, consider the following aspects:

- or providersDuring the processing of separate payments, payment systemscan require additional customer data—this can increase the time of working with the form (details).
- .;The time allocated for working with the form within a separate payment is also relevant for making all retry attempts within this payment, regardless of their number (details)
- detailsWhen necessary, it is possible to add and use customised text elements for informing customers about the remaining time of working with the form ().

## Request format

`YYYY-MM-DDThh:mm:ss±hhYYYY-MM-DDThh:mm:ss±hh:mm`To specify the time limit within which the customer can work with the form, pass the best_before parameter with the date, time, and time zone in the format oforin the request for opening Payment Widget. The time allocated for working with the form cannot exceed 30 days from the moment when the request for opening Payment Widget was sent.

```json
{  
    // required parameters for purchase processing
   "project_id": 42,
   "payment_id": "7654321777",
   "payment_currency": "USD",
   "payment_amount": 131970,
   "customer_id": "customer_12",
   "signature": "TSzdE5rJZaA9TYAKoGpfXriFf82MxF...",

    // date and time when the work with the payment form is set to be completed—
    // 12 April 2021 10:15:30, GMT+3
   "best_before": "2021-04-12T10:15:30+03"  
 
}
```
