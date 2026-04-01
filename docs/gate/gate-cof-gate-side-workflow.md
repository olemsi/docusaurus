# Workflow

## COF purchase with initiation of the first debit operation during registration

`scheduled_payment_id`If theparameter has been passed during the COF purchase registration, these are the steps to perform a COF purchase with automatic debiting:

To update or cancel a COF purchase or to refund one or more debit operations, you need to submit the corresponding requests to the payment platform. (For more information, see .)

The sections that follow discuss formats for requests and callbacks; for general information about using the API, see . Information about possible statuses of this payment type can be found in the corresponding article.

1. Register a COF purchase. For more information, see.
2. Accept a callback with the debiting result from the payment platform.
3. Accept subsequent callbacks for each debit operation for this payment.

## COF purchase with a separate initiation of the first debit operation

`scheduled_payment_id`If theparameter has not been passed during the COF purchase registration, these are the steps to perform a COF purchase with automatic debiting:

1. Register a COF purchase. For more information, see.
2. performing a COF paymentSubmit a request forwith an identifier of the debit series record.
3. Accept a callback with the debiting result from the payment platform.
4. Accept subsequent callbacks for each debit operation for this payment.
