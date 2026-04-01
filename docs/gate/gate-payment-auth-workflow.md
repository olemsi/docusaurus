# Workflow

When processing a two-step purchase by using Gate, the merchant web service is required to do the following:

The following diagram provides the detailed picture of an ordinary (without additional requests) two-step purchase processing procedure with cancelling an authorisation hold.

The sections that follow discuss in more details the request format and the required parameters and the information about the format of callbacks with payment results. For the general information on how to use the API, see . Information about possible statuses of this payment type can be found in the corresponding article.

1. Send the request for an authorisation hold with payment details to the following endpoint:.
2. *3‑D Secure authentication*. This authentication is intended to provide security to online payments by payment cards. For more information on the authentication workflow, as well as request and callback formats, see .**Customer authentication on merchant's request**. This authentication is intended to make purchases with payment cards more secure. For more information on the authentication workflow, as well as request and callback formats, see .*Additional payment information submission*. This procedure is intended for cases, where the initial request did not contain the information necessary for any payment process stakeholders. For more information on this procedure, see .If necessary, complete the additional procedures:
3. Receive a callback with the authorisation hold result from the payment platform.
4. `/v2/payment/card/incremental`—to increase the authorised amount`/v2/payment/card/cancel`—to decrease the authorised amountThen, you need to receive a callback with the result of your authorised amount change request.If you need to change previously authorised amount without actually debiting customer account, send a request with the corresponding parameters to one of the following endpoints:
5. `/v2/payment/card/capture`If you need debit amount different from the authorised amount, simply specify the debit amount and the currency in a request to theendpoint.Send the request for debiting customer account to theendpoint or the request for cancelling an authorisation hold to theendpoint.
6. Receive a callback with the payment result from the payment platform.
7. If needed, after completing a one-time one-step purchase you can return your customers their money, if the payment method supports refunds. For more information on this procedure, see .
