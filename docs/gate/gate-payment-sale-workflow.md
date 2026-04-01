# Workflow

When processing a one-step purchase by using Gate, the merchant web service is required to do the following:

The following diagram provides the detailed picture of an ordinary one-step purchase processing procedure without additional requests.

The sections that follow discuss in greater detail the request format and the required parameters and the information about the format of callbacks with payment results. Information about possible statuses of this payment type can be found in the corresponding article.

1. `{payment method}card/v2/payment//sale[/specifying payment details]`Send the one-step purchase request with payment details to one of the relevant endpoints in the following group:.
2. *3‑D Secure authentication*. This authentication is intended to provide security to online payments by payment cards. For more information on the authentication workflow, as well as request and callback formats, see .**Customer authentication on merchant's request**. This authentication is intended to make purchases with payment cards more secure. For more information on the authentication workflow, as well as request and callback formats, see .*Additional payment information submission*. This procedure is intended for cases in which the initial request did not contain the information needed by one of the payment process stakeholders. For more information on this procedure, see .If necessary, complete the additional procedures:
3. Receive a callback with the payment result from the payment platform.
4. , if the payment method supports refundsIf needed, after completing a one-time one-step purchase you can return your customers their money. For more information on this procedure, see .
