# Using Data API

The following endpoints in the Data API are used to retrieve data:

in the interface specificationThe general procedure of sending requests to any of these endpoints is the same as described in previous articles of this section. This article covers special aspects of using these requests and complements the description of data structures.

- `/balance/get`—to retrieve balance information (currently available only for OUT balances)
- `/chargeback/list`—to retrieve chargeback information filtered by specified conditions
- `/chargeback/get`—to retrieve information about a single chargeback
- `/fraud/list`—to retrieve information about operations flagged as fraudulent
- `/financial-reporting/operations`—to retrieve itemised operation data for financial reporting (including charged fees) for a specified time period
- `/operations/get`—to retrieve itemised operation data for a specified time period
- `/operations/get-by-payment`—to retrieve information about operations initiated within a specific payment
