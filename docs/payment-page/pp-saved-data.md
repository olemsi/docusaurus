# Saving customer payment data

Saved payment credentials are shown on the payment method selection page together with the details of cards for which tokens were generated.To ensure convenience and efficiency of the Payment Widget user scenarios, you can implement the capability of storing customer payment credentials for subsequent use without prompting the customer to provide this data again. Customer payment credentials can be saved when customers make purchases or when their payment instruments are verified.

always save customer payment datanever save customer payment dataask customers about saving payment dataPayment Widget supports the following options for saving payment data:

Additionally, you can limit the maximum number of saved payment instruments per customer.

If necessary, the customer can delete saved payment instruments in Payment Widget. In case when the customer deletes a saved card that was used to register a COF purchase, the debiting of funds continues to take place. For details on cancelling a COF purchase, see .
