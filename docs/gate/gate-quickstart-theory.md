# Brief theory

## Workflow

To ensure payments are processed via Gate correctly, you need to set up collecting relevant parameters, forming and sending requests to the payment platform as well as accepting and processing information sent in responses from the payment platform. Along with that, all interaction with customers (necessary for collecting and displaying relevant information) should be carried out on the side of the web service with the use of your own in-house solutions, while all other procedures (to process the information) can be implemented with the use of the code samples presented below.

Let's have a look at the workflow of processing a purchase with the focus on the technical aspects for the web service and the payment platform.

When you work with other payment types, the actions can somewhat differ; however, the overall workflow remains the same. Modes of its implementation on the side of the web service can vary. In this guide, we cover basic procedures that can be used and adapted to the specifics of your web service.

|  | Web service | Payment platform |
| --- | --- | --- |
| 1 | Collects all necessary data when the customer is ready to pay for their order, combines payment parameters into a payload of the request and signs it, creates a payment request and sends it to the payment platform. | – |
| 2 | Informs the customer that the payment is being processed. | Accepts the request and works on it to execute the payment. If applicable, sends a callback prescribing necessary actions. |
| 3 | If applicable, accepts the callback prescribing necessary actions, performs these actions (with or without the customer's involvement) and sends the request for resuming payment processing to the payment platform. | – |
| 4 | Informs the customer that the payment is being processed. | If applicable, accepts the additional request and performs actions necessary to resume the payment processing. Sends a callback with the payment result to the web service. |
| 5 | Accepts the payment result callback and displays relevant information to the customer. | – |

## Request parameters

payment method and theand payment methodsThe set of parameters required for executing a payment can vary depending on the type of this payment, the specifics of the utilisedpayment system, regional characteristics and other aspects. Thus, sometimes you may need to provide the payment description, the customer's address, or other details, and sometimes such data may not be required. This is why when you set up processing of different payment types, refer to the documentation and the Gate API specification for particular details.

To process a basic card purchase, you need to specify its amount and currency, add three identifiers (of the project, payment, and customer) and the payment card details, and then generate a signature for these parameters.

If the card details are provided as is, then required parameters include the following:

with the Open Banking methodTo process a basic purchase, you need to specify the following parameters:

The request payload with these parameters may look like the following:

You may also need to use other parameters when processing payments:

To ensure proper handling of these parameters, you may require to set up additional procedures. They are partially described below and fully covered in . Refer to this section of the article once you configured and tested all basic procedures.

Overall, collection of necessary parameters can be set up at your convenience, with regard to your web service's architecture and other aspects (for examples, relevant dictionaries and databases). Now that the required parameters have been covered, let's get to implementation.

- Parameters necessary due to specific characteristics of payment systems and regional differences. If these parameters were not passed in the initial request, the payment may be declined or you may need to specify them while the payment is being processed.
- when the 3‑D Secure authentication is performed on the side of the web service, orParameters necessary due to specific characteristics of the web service operation, for example,when you need to send the payment result notification to the customer. If such parameters are not provided, these capabilities may not be supported.

| Parameter | Description |
| --- | --- |
| `general`—object containing general request identification information |  |
| `project_id`integer | `42`Project identifier. Together with the key, it is provided by Platform and should be accurately specified even in test requests. If not, the payment platform will react accordingly: think of it as trying to enter someone else's hotel room with your key. Example: |
| `payment_id`string | `Cosmoshop_purchase_2025-01-01_000001`Payment identifier. It can have random values but should always be unique within the project used. Otherwise, an error will occur. Example: |
| `signature`string | `rnv1OS3PJUKEJ5kw5wqoK0ftZGSd4Q6LX5A5NxK6d5alpND4sQTRFt7/9aFV+m3SRwNB8ba98GMsOY91yTVhEQ==`Request signature. It is generated according to the specialised algorithm described below. Use the test key for sending test requests and use the production secret key for processing live payments. Example: |
| `payment`—object containing general payment information |  |
| `payment_amount`integer | `885588.55`Payment amount. In test requests it can be a random amount while in real ones the amount should correspond to the amount of the order. The amount is specified in minor currency units. Example:(for the amount of) |
| `payment_currency`string | `USD`Payment currency code. It is specified in the three-letter ISO 4217 alpha-3 format. Test requests can contain any of the existing codes while every real request should contain the code of the currency in which the payment is being initiated. The currency codes are provided in the corresponding reference. Example: |
| `customer`—object containing general customer information |  |
| `customer_id`string | Otherwise, it can lead to processing difficulties including those related to risk assessment.`17008`Customer identifier in the web service. It can have random values and be reused in different requests; however, the identifier of every real customer should exactly match the account of this very customer in the web service and be unique within the project.Example: |
| `ip_address` | `248.121.176.220`IP address of the customer. In test requests you can provide your own IP address while in real requests you must specify an actual IP address where the customer initiates the payment. Example: |
| `card`—object containing the customer's payment card details |  |
| `pan`string | `4242424242424243`PAN. In test requests you can specify any realistic values, including the test values provided below; however, real requests must contain actual card data. Example: |
| `year`string | `YYYY2025`Card expiration year, in theformat. In test requests you can provide any value as long as it is valid and in proper format; real requests must contain actual card data. Example: |
| `month`string | `5`Card expiration month, a number between 1 and 12. In test requests you can provide any value as long as it is valid and in proper format; real requests must contain actual card data. Example: |
| `card_holder`string | relevant restrictions, passed if this parameter is required for the specific project (note that if you want to make this parameter optional instead of required, it can only be done upon consultation with your account manager which includes examination and assessment of associated risks)`SONYA KOVALEVSKY`Customer name as specified on the card and with regard to. In test requests you can provide any random value; real requests must contain actual card data. Example: |
| `cvv`string | `345`Card verification code as specified on the card or provided to the cardholder by the issuer. In test requests you can provide random values as long as they consist of three digits; real requests must contain actual card data.  Example: |
| `account`— object containing the customer's bank account details |  |
| `bank_id`integer | `54981`Bank identifier Example: |

::: tip
If the tokens and identifiers are not yet created or the relevant card details have not been migrated to the Platform platform from the other provider, you need to create them first.Payment card details can be provided as is and in the form of the standardized tokens and arbitrary identifiers of the card data saved earlier.You can do it as soon as you set up processing purchases (which includes testing and going live), that is, after you complete the steps described in this guide.
:::
