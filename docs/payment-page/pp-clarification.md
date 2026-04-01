# Additional payment info

The information that the customer may be requested to provide may include the following:

Payment processing continues only after the customer specifies requested data and confirm the purchase. The following sections provide information about steps that the customer performs when submitting additional payment information.

## General information

or a payment provider*submission of additional payment information*Mandatory parameters specified in the request for opening Payment Widget usually provide enough information for payment processing. However, a payment systemmay require some additional data that otherwise is not required, this may be due to regional or country-specific requirements, additional fraud testing procedures or other conditions. Payment Widget allows you handling such cases as it supports. In terms of this procedure, the customer is notified about the need to submit additional data, the required data is collected and the payment is processed considering the provided data.

or payment providersSubmission of additional payment information does not require extra effort of the merchant, as the procedure is performed through interaction between the customer and the payment platform. Nevertheless, in order to avoid the need of submitting additional data, you can specify in the request for opening Payment Widget data that may be required by payment systemsfor processing payments, including optional parameters.

, and for payments by using alternative payment methods it is the data provided in any optional parameters supported by Payment Widget for initial request for payment processingThe requested data generally concerns the customer and their payment instrument. for processing payments, for example:

- `customer_first_name`—first name
- `customer_last_name`—last name
- `customer_middle_name`patronymic or—middle name
- `customer_day_of_birth`—birth date
- `customer_email`—email address
- `customer_address`—the name of the street and the house number (including any additional parts of the address such as building indicators and apartment numbers) in the customer's address
- `customer_city`—city of residence
- `customer_country`—code of the country
- `customer_street`—street of residence
- `customer_zip`—postal code

::: tip
provider orTo precise the set of the data that may be requested depending on the payment method, you may contact your Platform key account manager.The final set of the requested data depends on the requirements of a particularpayment system and may vary.
:::
