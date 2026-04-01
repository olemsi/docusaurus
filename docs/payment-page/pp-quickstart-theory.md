# Brief theory

## Projects and keys

Platform*a project and a key*Working with thepayment platform can be compared to using hotel services: to check into a hotel, you need a room and a key for this room, and to start working with the platform, you needfor this project. And like in case of hotel rooms, there can be a different number of projects for one client—for different aims and purposes—and each project requires its own key.

Usually, to work with the platform, having one test and one production project is enough. This case is typical and is used as the basis within the Quickstart guide. If for any reason you need more projects, make sure to identify this need in the communication with your account manager. In the meantime, you don't have to wait till this issue gets resolved: you can already start working on the implementation and setup with one test project.

`project_idsecret_key`get an accessOtherwise, you canto the test project and return to this article.If you have already obtained the identifier () and the secret key () of the test project, have them at hand as you proceed with the implementation.

## Workflow

For Payment Widget to open correctly, the collection of parameters, signature generation, and the form opening should be set up. Along with that, it is important that data signing (which requires the secret key) is performed on the server side of the web service and the payment form opening—on the client side of the web service. Additionally, for the timely monitoring of results, setting up the server side to receive callbacks from the payment platform can be helpful.

This is an overall workflow.

Generally, this workflow scheme on the client and server sides of the web service can be implemented in a number of ways. This article—for the convenient and quick launch of the work with Payment Widget—describes all necessary procedures with the application of ready-to-use components (such as SDKs) and code examples to their fullest extent. Still it is always possible to combine our ready-to-use components with your solutions.

|  | Web service front end | Web service back end | In the payment platform |
| --- | --- | --- | --- |
| 1 | Creating an order. Collecting payment parameters and sending them to the web service back end (for signing the parameters) | – | – |
| 2 | – | Submitting additional parameters (if relevant) and signing them, then sending the information to the front end | – |
| 3 | Creating the request for opening Payment Widget and sending it to the payment platform | – | – |
| 4 | – | – | Accepting the request, preparing and displaying the form to the customer, processing the customer actions and the payment, after that sending the callback with the payment result information and returning the customer to the web service |
| 5 | – | Accepting the callback with the payment result information and updating the order status | – |
| 6 | Displaying the payment information to the customer and the information about the customer further actions (if such actions are required, for example, for the product delivery) | – | – |

## Parameters for opening the form

To display the payment form to the customer, in the simplest case, you just need to decide on the parameters of the payment amount and currency and add the following three identifiers to these two parameters: the identifier of the project, the payment, and the customer. In total, this makes up five required parameters. (And signing these parameters is technically required.)

furtherfurtherHow to collect these parameters (as well as which of them should be specified on the client and on the server side of the web service) is for you to decide (with regards to your web service architecture and other factors). For the initial few times of opening the payment form, it is not necessary to automate the collection of parameters, you can deal with this after the primary testing of the payment form operation. There is just one thing left to mention—in addition to the required parameters, you can use other parameters, for managing the payment form look and behaviour; but since it is better to use these parameters after setting up the standard Payment Widget opening, they are substantially described.

| Parameter | Description |
| --- | --- |
| `project_id`integer | `57123`Project identifier. Together with the key, it is provided by Platform and should be precisely specified even in test requests. Otherwise, this is going to look as if you are trying to enter someone else's hotel room and the payment platform reacts accordingly. Example: |
| `payment_id`string | `payment_443`Payment identifier. It can have random values but always should be unique within the project used. Otherwise, an error occurs. Example: |
| `payment_amount`integer | `181518.15`Payment amount. In test requests it can be a random amount, while in real ones the amount should correspond to the amount of the order. The amount is specified in minor currency units. Example:(for the amount of) |
| `payment_currency`string | `EUR`Payment currency code. It is specified in the three-letter ISO 4217 alpha-3 format. Test requests can contain any of the applicable codes, while every real request should contain the code of the currency in which the payment is being initiated. The currency codes are provided in the corresponding reference. Example: |
| `customer_id`string | Otherwise, there can occur different issues that also concern displaying to the customer saved payment data of another customer.`customer_112`Customer identifier. It can have random values and be reused in different requests, however, the identifier of every real customer should exactly match the account of this very customer in the web service and be unique within the project.Example: |
