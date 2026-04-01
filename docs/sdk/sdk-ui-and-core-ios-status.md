# Payment status information

To receive payment result notifications, use requests with the following code included:

`PaymentResult.status`Possible payment result codes passed in theparameter:

| Result code | Message | Description |
| --- | --- | --- |
| `0` | Success | Payment has been completed |
| `100` | Decline | Payment has been declined |
| `200` | Cancelled | Payment has been cancelled by the customer |
| `500` | Error | An error occurred when the payment was being processed |
