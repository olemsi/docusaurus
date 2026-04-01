# Payment installment

## General information

When making a payment using payment cards, if customers cannot pay the entire amount at once, they can make the payment in installments. To do this, on the payment widget, a customer selects the period during which the full payment amount will be deposited. The amount of the first part of the payment, which is actually debited from the card, is automatically calculated and displayed to the customer on Payment Widget. After receiving a request to debit the first part of the installment payment, the issuing bank or other financial organisation that issued the card pays the full amount of the payment to the payment system. The remaining parts of the payment are debited by the issuing bank from the card according to the schedule selected by the customer.

For information about enabling this functionality, please contact your Platform key account manager.

## Installment payment processing

To perform an installment payment by using Payment Widget, the merchant web service should send a request with all the required parameters and signature to the Platform URL and get the callback with the payment result from the payment platform.

If required, you can also add any other additional parameters Payment Widget supports. For information about all available parameters, see .

**1369121**After opening the Payment Widget and selecting the payment method on the data entry page, the customer selects the number of months during which they will make the entire payment amount. Acceptable values are provided to the customer in the drop down list:,,,,. By default, the value is set to.

customer_installment_countAlso, the number of installment months can be pre-selected for the customer on Payment Widget. To do this, pass theparameter in the opening request.

After selecting the installment period on Payment Widget, the payment amount is automatically recalculated, and only the first amount part of the payment is debited from the card.

Then the payment request specifying the full payment amount and the number of installment months is passed from the Platform payment platform to the payment system. The payment system sends payment data to the issuing bank, receives the full payment amount from the bank, and sends a notification of payment to the Platform payment platform. The payment platform sends the callback to the web service with the payment result and the data on the installment payment, for more information, see .
