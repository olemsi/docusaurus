# Data API overview

, chargeback dataThe Data API is an API of the Platform payment platform which allows retrieving information onbalance information, operation data and fraudulent operation data with regard to the access rights to certain projects of the merchant and the specified conditions (such as the type of the operation and the time when it was performed). Access rights are determined via the specialized tokens of the Dashboard user accounts while the conditions of data retrieval are specified directly in the API requests.

`https://data.platform.dev/v1`The Data API is available atand allows accepting requests at specified endpoints with the use of HTTP, version 1.1 or higher, and the TLS protocol, version 1.2 or higher. For the interface specification, see.

To work with the Platform payment platform using the Data API, the merchant needs to:

1. Make sure the requests can be sent and the responses can be received according to the Data API specification.
2. Authorize users who require access to the Data API to generate API tokens and secret keys in the Dashboard interface.
3. Test and deploy the developed solutions into production.
