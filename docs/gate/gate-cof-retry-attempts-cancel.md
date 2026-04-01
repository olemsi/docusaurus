# Cancelling retries

To cancel retrying a specific debiting  via the Gate API:

Keep in mind that these requests are processed according to the synchronous model of interaction between the web service and the payment platform. This implies that each such request is fully processed within one HTTP session. The response to the correct request contains the required data. The description of the response format can be found here.

The full sequence of processing request to cancel retry attempts is provided below.

Each request to cancel retrying the specific debiting must include the following objects and parameters:

Thus, a correct request to cancel retries must contain the project identifier, signature, and the identifiers of the debiting series record and the relevant debit operation.

`200 OKerror`When the request to cancel debiting retries is processed, the payment platform sends a response with the codeto the web service. If the request is declined, the response contains a request processing statusand the description of the error that occurred.

- `general``project_id`—project identifier obtained from Platform during integration.`signature`—request signature generated after all required parameters are specified (details—in the article ).—object with general request identification information:
- `recurring``id`—identifier of the debit series received in the callback with the COF purchase registration data or assigned when the COF purchase information was migrated from another acquirer.—object with the COF payment information:
- `trigger_operation_id`—identifier of the recurring debit operation for which you need to cancel retries.

1. ``Send an HTTP-POST request to theendpoint.
2. Receive a synchronous response communicating that performing the subsequent retry attempts has been cancelled.
