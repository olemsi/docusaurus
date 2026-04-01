# Response processing

To receive and process response with the payment processing results you need to add the following code:

paymentStatusThe result code is returned in theparameter.

paymentStatusThe following table lists possible response codes returned in theparameter.

| paymentStatusValue in | Description |
| --- | --- |
| 0 | Checkout successfully completed. |
| 100 | Operation was declined, for example because of insufficient funds. |
| 301 | Operation was cancelled by the customer. |
| 501 | An internal error occurred. You may need to contact technical support. |
