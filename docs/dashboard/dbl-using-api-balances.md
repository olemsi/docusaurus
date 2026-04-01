# Retrieving balance data

Requests to retrieve balance information on the merchant's projects should be sent to theendpoint.

`tokensignature`These requests must contain parameters(a token associated with the specific Dashboard user account) and(details). Responses to such requests contain information about the current state of OUT balances.

`"&lt;currency>": "&lt;sum>"`Information about each balance includes the balance type and the available total sum in this balance's currency. The currency is specified in the name of the parameter and the sum is passed as its value ().
