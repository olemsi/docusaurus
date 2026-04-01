# Receipts overview

an e-wallet registration as part of processing a payment request orPlatform payment platform supports a capability of sending notifications to inform customers about various events related to processing of their payments. As a rule, these notifications contain information about operation processing results; however, depending on the needs of the merchant, notifications can inform customers about other events, for example,an update of the COF purchase's terms.

Notifications are sent if the following conditions are met:

`saleauthcancelpayoutrefund`(for example, operations,,,, and)(for example, an update of the COF purchase's terms)Events which can generate notifications include both the results of operation processing as part of executing a paymentand the results of separate actions that are part of operation processing.

You can also send your customers purchase receipts—notifications that contain information about the purchases they made. In this case, notifications include a list of purchased items with the corresponding attributes for each item (price, quantity, description, and the amount of added VAT).

If you need a certain notification to be sent once again, contact technical support specialists support@platform.dev.

Sections below describe how this capability is set up, what versions of notification design can be used, and what relevant data to provide in payment requests. For more information about sent receipts to customers from Payment Widget, see the section .

- Sending notifications has been set up for the project in question.
- The email of the customer has been passed to the payment platform (either in the initial request to perform a payment or in the clarification request).
- The event that triggers sending of notifications has occurred.
