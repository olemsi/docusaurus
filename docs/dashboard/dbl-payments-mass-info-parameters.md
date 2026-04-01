# Parameters for mass payments

When adding data to files, you can use the parameters presented in the table below.

| Parameter | Description |
| --- | --- |
| operation_typestring, required | `capturecancelrefundpayoutrefund`Operation type. The value can be,,,  and. Example: |
| general.project_idinteger, required | `35`Project identifier assigned by Platform at the stage of integration. Example: |
| methodstring, required | For the full list, see .`card`Payment method identifier.Example: |
| general.payment_idstring, required * | `payment_536231`general.payment_idPayment identifier unique within the merchant's project. A string which contains between 1 and 255 characters and which can include any letters, digits, and symbols in UTF-8 encoding. Example:. * For refund,must be the identifier of the purchase to be refunded |
| general.operation_idstring, required * | `58468298003`Payment operation identifier provided by Platform. A string which contains between 1 and 255 characters and which can include any digits in UTF-8 encoding.  Example:. * To refund a specific debiting operation performed as part of the COF purchase, specify the identifier of the operation to be refunded |
| payment.amountinteger, required | `1100000000000001905190500`Payment amount in minor currency units. An integer betweenand(without a decimal separator between the integer and fractional parts). Example:for 19.05 andfor 1905 |
| payment.currencystring, required | `EUR`Payment currency code in ISO 4217 alpha-3 format. Example: |
| payment.descriptionstring, optional * | `Deposit 12456`Payment description. A string, must not exceed 255 characters. Example:. * Required for refunds |
| account.numberstring, optional | `1670033323`Account number of the customer. A string, must contain between 1 and 100 characters. Example: |
| account.bank_idinteger, optional | `1421`Bank identifier received from Platform. For more information about banks and their IDs, see the section on payment methods in the documentation, or contact Platform technical support specialists. An integer, must beor greater. Example: |
| account.customer_namestring, optional | `John Johnson`First name and last name of the account holder. A string, must contain 1 character or more. Example: |
| account.branchstring, optional | `Bank branch`Name of the customer's bank branch. A string, must not exceed 255 characters. Example: |
| account.citystring, optional | `London`City of the bank branch location.  A string, must not exceed 255 characters. Example: |
| account.region_idinteger, optional | `13`Region or state identifier of the bank branch location received from Platform. For more information about regions and their IDs, see the section on payment methods in the documentation, or contact Platform technical support specialists. An integer, must beor greater. Example: |
| card.paninteger, optional * | `2333776109871312token`Card number of the customer. An integer, must contain 32 digits or fewer. Example:. * Required for payouts ifis not present |
| card.yearinteger, optional * | `202099992024`Expiration year of the customer's card. An integer betweenand. Example:. * Required for payouts |
| card.monthinteger, optional * | `11212`Expiration month of the customer's card. An integer betweenand.  Example:. * Required for payouts |
| card.card_holderstring, optional  * | `John Johnson`Name of the cardholder as specified on the card. A string, must not exceed 255 characters. Example:. * Required for payouts |
| tokenstring, optional * | `Z0yTL5shY8ddhpxdQyplRPJYmGV7Kvcard.pan`Card token received from Platform. Example:. * Required for payouts ifis not present |
| customer.idstring, optional * | `customer313`Identifier of the customer within the merchant's project. A string, must not exceed 255 characters. Example:. * Required for payouts |
| customer.countrystring, optional * | `GB`Customer country code in ISO 3166-1 alpha-2 format. Example:. * Required for payouts |
| customer.citystring, optional * | `London`Customer city. A string, must not exceed 255 characters. Example:. * Required for payouts |
| customer.statestring, optional | `West Midlands`Region or state of the customer's billing address. A string, must not exceed 255 characters. Example: |
| customer.zipstring, optional | `B152SA`Postal code of the customer's billing address. A string,must not exceed 10 characters. Example: |
| customer.streetstring, optional | `Edgbaston`Street of the customer's billing address. Example: |
| customer.first_namestring, optional * | `John`First name of the customer. A string, must not exceed 255 characters. Example:. * Required for payouts |
| customer.last_namestring, optional * | `Johnson`Last name of the customer. A string, must not exceed 255 characters. Example:. * Required for payouts |
| customer.day_of_birthstring, optional * | `DD-MM-YYYY21-12-1989`The customer's day of birth informat. Example:. * Required for payouts |
| customer.phonestring, optional | `4402035551981+4402035551981`Phone number of the customer. A string, must be a sequence of digits, must contain between 4 and 24 characters, and can start with "+" . Example:or |
| customer.emailstring, optional | `test@mail.com`Email of the customer. A string, must not exceed 255 characters. Example: |
| customer.ip_addressstring, optional * | `127.0.0.1`IP address of the customer. A string, must not exceed 255 characters. Example:. * Required for payouts |
