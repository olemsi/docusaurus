# Data format

For the notification to be sent, in addition to the required parameters, the payment request should contain the following:

`receipt_datareceipt_datapositions`To add the list of purchased items to the notification, send relevant data in theobject. Theobject contains thearray which allows listing up to 300 purchased items in the notification. For each listed item, the following information can be specified:

`receipt_datatotal_tax_amountcommon_taxtax`As a rule, theobject also contains theparameter specifying the total VAT amount for the entire purchase. If the VAT rate is the same for all items, then it is specified in theparameter after the total amount has been specified. If the VAT rate differs for listed items, then it is specified in theparameter separately for each item.

``The JSON object structure is provided in themodel in the Gate API specification.

`positionsreceipt_datataxcommon_tax`In the example below, the purchase request contains the list of three items in thearray of theobject. The VAT rates for the listed items differ; therefore, they are specified separately in theparameter for each item. There is no need to pass theparameter with the VAT rate for all items in this case.
