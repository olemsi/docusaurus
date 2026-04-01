# Receipts and notifications

## Sending a receipt

`language_code`If you need to send sales receipts to customers, you have to make sure that this functionality is enabled in the settings. You also have to make sure that all positions to be indicated in the receipt are passed in the payment request. When this functionality is added and configured, you can also decide on the set of languages available for forming receipts and choose the default language. In individual cases, a different language can be selected the same way as the language of the payment form—with the use of theparameter.

receipt_data``The data for the receipt is passed as a JSON object which is encoded in Base64 and sent in the payment request in theparameter. The JSON object structure is given in themodel in the Gate API.

## Example of the receipt data to be sent

Initial JSON object:

The same data, encoded in Base64, to be sent to Payment Widget in the payment request (the contents of the parameter are split into several lines for the reader's convenience):

For more information about sending receipts to customers, see the section .
