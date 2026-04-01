# Workflow

The steps of the debiting retry procedure are as follows:

The general workflow of this procedure is as follows.

The format of callbacks used in this workflow is described below.

1. `decline`When a scheduled debiting is initially declined by the payment system or the issuer, the Platform payment platform checks if there is a possibility to retry the debiting once again. If this possibility is confirmed, the web service is sent a callback that contains the information about the declined debit operation with theoperation status as well as the scheduled date and time of the retry attempt.
2. At the scheduled time, the debiting retry attempt is performed automatically.
3. `success`If the attempt results in debiting the funds from the customer to the merchant, a callback containing the debiting result information (with theoperation status ) is sent to the web service. The COF purchase series continues according to the existing schedule.`decline`If the attempt results in decline and the payment platform confirms the possibility to perform another attempt, a callback containing the information about the debiting decline (with theoperation status and the scheduled date and time of the next retry attempt) is sent to the web service. Then step 2 is repeated.`decline`If the attempt results in decline and the payment platform does not confirm the possibility to perform another attempt, a final callback containing the information about the debiting decline (with theoperation status and without information about the next attempt) is sent to the web service. The COF purchase series continues according to the existing schedule. In this case, whether an additional debiting should occur or whether the series of debit operations should be cancelled must be decided by the merchant.Depending on the attempt result, the following steps are executed:
