# COF callback format

The payment platform communicates results of processing each debit operation in callbacks sent to your web service. These callbacks are arranged in a standard format the detailed description of which can be found in .

`4.00 USD431422******0056customer_1242`The following callback contains information about processingdebit operation for cardof the customer with identifierwithin project. The capability of debiting retries is not available.

`recurring_retry`If the capability to perform debiting retry attempts is enabled, callbacks include theobject. The description of its format can be found in this article.
