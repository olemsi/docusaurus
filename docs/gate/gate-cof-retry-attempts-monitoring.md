# Monitoring debiting retries

specificThe debiting retries are performed automatically in the payment platform, according to aschedule and the processing workflow. On the side of the web service, you need to monitor the retries and maintain appropriate communication with customers depending on the debiting operation results.

`recurring_retry`To monitor the schedule and execution of each retry attempt, you can use callbacks sent from the platform (details). In cases when retrying automatic debitings is enabled for the project, callbacks include theobject that can include some or all of the following parameters:

The following example of a callback contains information that no retry attempts were performed or scheduled for one of the debit operations in the series. Such callbacks are sent if the debiting resulted in funds transfer when it was first initiated or retry attempts cannot be performed.

`"next_retry_exists": true`The following example of a callback contains information that the declined debiting can be retried and the first retry attempt has been scheduled (). In this case, the identifiers of the debit operation and the retry attempt are not specified because no retry attempts have been performed yet.

`"retry_count": 1344589675"next_retry_exists" : true2026-01-25T16:58:02+0000`The following example of a callback contains information that the first attempt () to retry debit operationwas declined and, as a result, the second attempt () has been scheduled for this debit operation at.

`"retry_count": 2344589675"next_retry_exists" : falsesuccessdecline`The following example of a callback contains information that the second attempt () to retry debit operationhave been completed and no subsequent retry attempts have been scheduled (). This can be either the case that the funds were transferred from the customer to the merchant (then the operation status should be), or that there are no available retry attempts left as they have been used up without actual transfer of funds (then the operation status should be).

- `trigger_operation_id`—identifier of the debit operation that was retried. Specified when at least one retry attempt was performed.
- `retry_count`in case of the default schedule and from 1 to 10 in case of the custom one)—the number of the retry attempts already used up (an integer from 1 to 7. Specified when at least one retry attempt was performed.
- `next_retry_existstruefalse`—an indicator that shows whether the next scheduled attempt is available. This parameter is set toif the debiting resulted in decline and there is an available retry attempt (the number of attempts and the time allocated for making them are not used up). In all other cases this parameter is set to. Specified in all cases.
- `next_retry_date`—the scheduled date and time of the next retry attempt. Specified when the next retry attempt has been scheduled.
