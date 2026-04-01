# Managing debiting retry attempts

## Overview

One attempt is usually enough to perform a scheduled debit operation executed as part of a COF purchase. However, in some cases, for example, when the customer's account has insufficient balance, it can be useful to retry debiting after a certain amount of time. The Platform payment platform has the capability to retry COF purchase debits automatically (learn more).

configure a custom schedule for debiting retries for each project (which will be applied to every regular COF purchase within this project) as well asThis capability is set up upon agreement with your Platform account manager, and when it is supported for the project, you canmanage and cancel debiting retries in the Dashboard interface.

**Show retriesBack to main operation**If the capability of debiting retries is set up for the project, the information about retry attempts is shown in subscription information tabs of Dashboard. These tabs allow you to switch between two viewing modes. You can view the information about retries by clicking thebutton. To return to viewing the information about the initial debit operation, click.

Depending on the viewing mode, the panels contain the following information.

The following statuses are assigned to the retries attempted as part of a scheduled debit operation:

- `retries active`—the debiting retry has been scheduled in the payment platform (when the scheduled debit operation was declined by the payment system or the issuer).
- `retry in progress`—the retry attempt is being performed.
- `retries successful`—one of the attempted retries resulted in debiting the funds from the customer to the merchant.
- `retries unsuccessful`—all available retries have been declined.
- `retries cancelled`—retry attempts have been cancelled (either by request from the merchant or automatically, due to modification of the COF purchase debiting terms or other reasons).

| Panel | Working with debit operations | Working with debiting retries |
| --- | --- | --- |
| 1. Panel with the list of all actions | contains the list of debit operations and refunds for a specific regular COF purchase (each list item corresponds to an individual debit operation, shows its status and can show the status of debiting retries) | `retry operation`contains the list of retry attempts for a specific debit operation (each list item corresponds to an individual retry attempt, shows its status, and is marked with theattribute) |
| 2. Panel for performing a specific action. | , to customise the retry attempts settings, and to cancel the retry attemptscontains the information about a specific debit operation (including an explanatory note to the status of the debiting retries)  and buttons to switch to the list of debiting retries | `retry operation`contains the information about a specific retry (including theattribute) and the button to return to the list of all debit operations executed as part of a COF purchase |
| 3. Panel with information about a specific action | contains detailed information about a specific retry | contains detailed information about a specific retry |

## Configuring the retry schedule

The payment platform allows you to implement one schedule of debiting retries which will apply to all regular COF purchases within one project. It can be a default schedule from Platform or a custom schedule that merchants can set up on their own depending on the specific project.

The schedule implemented for a project can be customised by modifying its specific parameters or by resetting them to default. Keep in mind that a retry attempt for this project that was scheduled before the retry schedule was customised is performed according to the initially set time and date (according to the previous schedule). However, if any of these attempts is declined after the schedule was modified and it is possible to perform the next attempt of this debiting retry in the payment platform, then the new attempt is scheduled and performed according to the updated schedule. In either case, the information about each subsequent retry attempt is sent to the web service in the callback notifying that a debiting attempt was declined (details).

To modify the retry attempts schedule for the specific project:

1. **ProjectsYour projectsSubscription retry settingsSubscriptions settingsConfigure retries settings**To do so, navigate to thesection, select in thedropdown menu the project you need and open thetab. (You can also get to this tab directly from theby clicking. Make sure to check that the project selected in the dropdown menu is the one you need.)Open in the tab of the project you need the tab that allows configuring the subscription retry settings.
2. **Default subscription retry schedule**To use the default schedule, select.**Custom subscription retry schedule**To use the custom schedule, selectand specify the days on which retries will be performed for each declined debit operation by clicking the buttons with the ordinal numerals of the days you need. You can schedule one to ten retry attempts with the minimum delay of 24 hours between them.Select the retry schedule you need.
3. **Save****Save**Keep in mind that the changes will be applied when you click thebutton. You will not be asked to confirm the action additionally.Save changes by clicking.
4. To do so, open the tab with the settings of the project you need and check the schedule implemented for this project.Make sure that the new schedule has been saved.

## Monitoring retry attempts

detailsDashboard allows users to monitor processing of debiting retries. This information can be accessed via subscription tabs that contain information about all debit operations performed as part of a regular COF purchase and retries of individual debitings ().

To view information about retry attempts for a specific debit operation:

1. **SubscriptionsPayments**You can use the Search function (search by payment identifier, for example) or go toorand use the registry and filters.Open the payment information tab of the subscription you need.
2. Select the item on the panel with the list of debit operations on the left of the subscription tab.Go to the detailed information about the specific debit operation.
3. **Show retries**Clickon the panel for managing the debit operation.Open the list of the debiting retries.
4. Select the item on the panel with the list of debiting retries on the left of the subscription tab.Go to the detailed information about the specific retry.
5. **Back to main operation**Clickon the panel for managing the debiting retry or clickin the top right corner of the panel with the list of retries.If necessary, return to the list of all debit operations.

## Cancelling subsequent retry attempts

To cancel retrying a specific debit operation:

1. **SubscriptionsPayments**You can use the Search function (search by payment identifier for example) or go toorand use the registry and filters.Open the payment information tab of the subscription you need.
2. Select the item on the panel with the list of debit operations on the left of the subscription tab.Go to the detailed information about the specific debit operation.
3. **Cancel retries**Clickon the panel for managing the debit operation and confirm cancellation.Cancel debiting retries.
4. `activeretries cancelled`Check the status of the retries in the row of the corresponding debit operation on the panel with the list of all debit operations: it should change fromto.Make sure that the subsequent retries have been cancelled.
