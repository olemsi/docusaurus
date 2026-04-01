# Notification design

## Standard template

`purchase``payoutrefund`and aas well as the result of issuing aOur standard template can only be used for notifications about the results of operation processing as part of performing a.

This template includes:

- Date and time of the event that occurred with the time zone of the merchant's web service specified.
- Logo of Platform or the logo of the merchant.
- Platform orName, current address, and the registered domain name ofthe merchant.
- Type of the payment or operation the result of which is communicated in the notification.
- Status of this payment or operation.
- `payment_id`Payment identifier which corresponds to.
- Description of the payment or operation if it was specified in the initial request.
- Payment method which specifies the payment instrument used.
- Payment amount with the currency code.
- Platform orLink to the email ofthe merchant.
- Link to terms and conditions.

## Custom coded template

,or the details of the e-wallet registration, a warning about surpassing the daily amount limit for processed operations,or the update of the COF purchase's termsA custom coded template can be used for sending notifications about the results of operation processing as well as other events that occur during payment processing. Custom coded templates are developed by Platform specialists on the basis of the layouts provided by the merchant. These templates can include the same elements as the standard templates, with the option to modify the order in which the elements appear on the page, or they can include other elements, for example, the list of purchased items. Keep in mind that if you need a customised notification message, or the notification is sent in a language other than English (which is the default notification language), you should provide the text of the notification message to the technical support specialists.

The following are the examples of custom coded notification templates:

- Notification about the end of the free trial period which does not contain any elements of the standard template (except for the logo of the merchant).
- Notification with the list of purchased items which contains all elements of the standard template.
