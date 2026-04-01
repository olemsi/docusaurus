# Debt repayment

## General information

*Debt repayment*`60126051`is a type of purchase from the customer's card intended for payment of a loan or debt. This type of payment is available for merchants providing microfinance services with the category codeor.

paymentdebt_account—the merchant account number for debiting funds from the customer's card in order to repay the debt. Latin letters and numbers are allowed, the maximum length is 10 characters—object containing payment data:customerfirst_name—first namelast_name—last nameday_of_birth—date of birth, in the DD-MM-YYYY formatzip—postal address code (mandatory for the UK).—object containing customer data:Debt repayment can be made as a one-time purchase, registration of a COF payment, or card verification operation. If an MFI is registered in the United Kingdom (for Mastercard payments) or in the European region according to Visa regulations (for Visa payments) in addition to the required objects and parameters, the MFI account number and additional customer data must be specified in the request:

This functionality is not available for payments with American Express cards.

If the parameter is not specified in the request, a callback containing this parameter is sent for additional payment information submission (for more details, see ).

If the debt re payment is made by the registration of a COF payment—you do not need to pass additional parameters in requests for payment processing—they will be taken from the initial request for registration.

For more information about this functionality and how to enable it, refer to the Platform key account manager.

## Mastercard restrictions

`601260126051`According to Mastercard requirements, this functionality is available to merchants from the United Kingdom only with the category code. For all other countries bothorcodes are available. It is prohibited to repay debts from credit and prepaid cards if the country of issue of the card and registration of the merchant is the United Kingdom.

## Visa restrictions

`605160126051`According to Visa requirements, merchants from the United Kingdom who accept payment of overdue debts must have the category code. In other cases and for all other countries bothorcodes are available. It is prohibited to repay debts from credit cards.
