# COF retry attempts

## Introduction

You can add this capability for specific projects and for a specific group of payment methodsupon agreement with your Platform account manager.If a scheduled automatic debiting is declined, for example, in case when the customer's account has insufficient balance, initiating this debiting can be attempted again in the Platform payment platform after a certain time period.Note that the merchant is responsible for notifying the customers that this functionality is being used, specifically when a scheduled debiting was declined and retry attempts have been set up.

When retry attempts are used for COF purchases, their number and the time allocated for making them are limited: for each scheduled debiting there can be no more than 7 retry attempts carried out within 6 days. The time interval between an initial debiting and the first retry attempt as well as between the first and the second retry attempts equals 12 hours. The rest of the retry attempts are carried out every 24 hours. Along with that, it is checked that according to the debiting schedule the next debiting is to occur at least 12.5 or 24.5 hours after the retry attempt. If not, the retry attempts are halted. These restrictions are applicable to all payments within any project and cannot be modified in any way.

(details)If retry attempts are not used for COF purchases, when a scheduled debiting in the series is declined, the next scheduled debiting is expected to be processed in the payment platform according to the schedule. Whether an additional debiting should occur or whether the series of debitings should be cancelled is decided by the merchant.

## Special aspects

When working with the debiting retries, consider the following:

- a specific retry schedule: either a default one by Platform or a custom oneonly a default schedule by PlatformFor each project you can implement.
- a limited number of the globally accepted payment methods: Apple Pay, Google Pay, and standardDebiting retries can be used forcard payments.
- `R`Debiting retries can be used only for regular COF purchases when the debiting schedule is stored on the side of the payment platform (type).
- Debiting can be retried only if the previous debiting attempts were declined by the issuer or the payment system.
- `decline`Using the functionality of debiting retries does not guarantee that the funds will be withdrawn eventually. If the allowed number of retries does not result in debiting, then this debit operation is deemed declined (it is assigned thestatus), and the COF purchase in question is subsequently processed in the platform according to its debiting schedule.

## Use

The specifics of using debiting retries can be illustrated with the following examples.

Suppose within a specific COF purchase automatic debitings are initiated on Monday at 12:00 and, according to the schedule, are to be performed on November 02, 09, 16, and 23, but on November 09 and 16 scheduled debitings do not occur, then the options to respond to this situation can be as follows:

Since schedules of both regular COF purchases and debiting retry attempts can be flexibly configured, these scenarios can be used in a wide range of situations. However, it is also important to monitor statuses of all operations and maintain appropriate communication with customers depending on the operation statuses and retry schedule.

1. If the functionality of debiting retries is not available for this purchase, then regardless whether the scheduled debiting was completed or declined, the next scheduled debiting will be performed.
2. If a default retry schedule from Platform is usedIf the functionality of debiting retries is available for this purchase, then after the initial scheduled debiting is declined, the platform will retry it as many times as determined by the schedule: the first two attempts will occur with a delay of 12 hours between them, the following attempts will occur every 24 hours, and the attempts will be stopped at least 24.5 hours before the next scheduled debiting on Monday.
3. If a default retry schedule from Platform is usedIf the functionality of debiting retries is available for this purchase, and the web service requests to stop subsequent debiting retries after three attempts are declined one after another, then if the initial debiting is declined, the platform will retry it up to three times in a row.
4. If a custom retry schedule is used,  then after the initial scheduled debiting is declined, the platform will retry it as many times as configured with a delay of 24 hours between consecutive attempts, and the attempts will be stopped at least 24.5 hours before the next scheduled debiting on Monday.
