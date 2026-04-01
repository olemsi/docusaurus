# Chargebacks

a merchant of record (MoR)representing the merchant's interestsan acquirerand interacts with issuers and card networks(details). You can use these callbacks along with other interfaces that provide information about chargebacks (such as the Data API and Dashboard).When working with the Platform payment platform, you can enable and use the functionality of daily callbacks with information about events occurring within the chargeback process. It is relevant when Platform acts

Similar to standard callbacks sent from the Platform payment platform, chargeback callbacks are HTTP POST requests that contain data in JSON format for processing by the merchant’s web service. However, keep the following special aspects in mind when working with chargeback callbacks:

Refer to your Platform account manager to integrate chargeback callbacks.

- Data is sent without any form of digital signature.
- Callbacks are sent daily at 12:00 UTC. If for any reason delivery cannot be performed at this time, callbacks are sent at 15:00 UTC instead.
- Callbacks are limited to one URL per merchant project.
- `200 OK400 Bad Request`Callbacks are sent only once. Resending callbacks is not supported even if the callback delivery is not acknowledged with theresponse code or if an error response is returned (for example).
- Callbacks are tied to specific stages within the chargeback process and fall into two types: summary and detailed callbacks (details).
- Callbacks are triggered only if there is updated data. If no changes are detected, no callback is sent.

## Setup

To enable chargeback callbacks:

1. Agree with the Platform account manager on adding this feature for specific projects, decide on the callback types you need, and provide the destination URL for the web service. Keep in mind that only one URL can be used per merchant project.
2. Receive a notification from the Platform specialists confirming that the feature is enabled.
3. If relevant chargeback events have occurred, make sure that you have received the corresponding callbacks.

## Callback types

### Summary callbacks

Summary callbacks communicate the number of chargebacks for which chargeback process-specific events were recorded in the platform during the reporting period. These events are categorised as follows:

For each of these categories, separate callbacks are generated and contain the following set of parameters:

`/chargeback/list/chargeback/get`**Chargebacks**Having recorded the information received in the summary callbacks, you can review the itemised chargeback data via detailed callbacks, requests to the Data API (such asand; details), or Dashboard (using thesection).

### Detailed callbacks

Detailed callbacks contain itemised information about chargebacks for which chargeback process-specific events were recorded in the platform during the reporting period. These events are categorised as follows:

For each of these categories, separate callbacks are generated and contain the following set of parameters:

Having recorded and reviewed the information received in these callbacks, you can proceed to taking subsequent steps of the chargeback process if necessary.

::: tip
`chargebacksChargebackchargeback_finalization_datechb_completed_atchargeback_statusstatus`detailsThe parameters of the objects in thearray match those of theobject in the Data API () with the exception of two parameter names:instead ofandinstead of.
:::

## Use

The procedure of responding to each callback on the web service side consists of the following steps:

1. `200 OKHTTP 500 Internal Server Error`For confirming the receipt of callbacks, synchronous HTTP responses should be sent to the payment platform with the corresponding response codes. If no errors have been detected upon the receipt, the response code should be. In other cases, the response code should reflect the error type: for example,if the callback has been received at an incorrect URL of the web service.Note that resending of callbacks is not supported. Regardless of the response, even if it indicates failure to receive the callback, the information sent in previous callbacks is not included in subsequent ones.Accept and confirm the callback receipt.
2. detailsPerform the required actions in accordance with the guidelines for handling chargebacks () and the specifics of the web service.

## Useful links

The following sections can be useful for handling chargeback callbacks:

- —a section on handling chargebacks (includes an overview, a description of chargeback process, and answers to frequently asked questions).
- —a section on using the API that allows retrieving operation and balance data (includes an overview, a description of interaction with the interface, and detailed information about each endpoints).
