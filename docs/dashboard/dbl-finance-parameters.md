# Reporting positions

Statement information is itemised with the help of reporting positions: for total amounts of different balances in each currency (as reflected in the brief summary) and for data contained in each separate balance (as reflected in the list of balances). These reporting positions fall into two categories:

The following table contains the list of positions with balance types for which they can be relevant and their description. To learn more about these positions, contact your Platform account manager.

- *Operating positions*—they are used for grouping data that is related to processing payments and operations: for example, payment amounts and processing fees.
- *Non-operating positions*—they are used for grouping data that is not related to processing payments and operations: for example, amounts of funds transferred from one balance to another and balance transfer fees.

| Position | Balance types | Description |
| --- | --- | --- |
| Opening balance | `INOUTIN/OUT` | The total amount of funds available at the beginning of the specified time period |
| Pay-in volume | `ININ/OUT` | `salecapturerecurring`Amount of cash inflow from processing purchases (operations,,) |
| Pay-in fee | `ININ/OUT` | Amount of funds charged for processing purchases |
| Pay-out volume | `OUTIN/OUT` | `payout`Amount of cash outflow from issuing payouts (operations) |
| Pay-out fee | `OUTIN/OUT` | Amount of funds charged for processing payouts |
| Refund volume | `ININ/OUT` | Amount of cash outflow from refunding purchases processed earlier |
| Refund fee | `ININ/OUT` | Amount of funds charged for processing refunds |
| Chargeback volume | `ININ/OUT` | Amount of cash outflow from issuing chargebacks |
| Chargeback fee | `ININ/OUT` | Amount of funds charged for processing chargebacks received over the specified time period |
| Chargeback additional fee | `ININ/OUT` | The additional fee charged for the chargeback process in cases when the chargeback amount exceeds the established threshold |
| Retrieval request fee | `ININ/OUT` | Amount of funds charged for filing requests to retrieve additional information about processed payments (collaboration or retrieval requests) |
| Representment | `ININ/OUT` | Amount of cash inflow from processing successfully disputed chargebacks |
| Other service fees | `INOUTIN/OUT` | Amount of funds charged in accordance with the terms and conditions as part of other administrative fees, including chargeback arbitration fees |
| Funds transfer from/to balance | `INOUTIN/OUT` | Amount resulting from funds transfer which includes adding funds from other balances and settlement accounts and withdrawing funds to other balances |
| Transfer fee | `OUTIN/OUT` | Amount of funds charged for balance transfer |
| Currency exchange | `INOUTIN/OUT` | Amount resulting from transferring the funds between balances in different currencies (with currency conversion applied) |
| Settlement | `ININ/OUT` | Amount of funds withdrawn to the merchant's settlement accounts |
| Settlement fee | `ININ/OUT` | Amount of funds charged for settlement |
| Balance correction | `INOUTIN/OUT` | Amount resulting from balance adjustment |
| Surcharge fee | `ININ/OUT` | Amount of funds that the customers (cardholders) were charged for (not the merchant). These charges are the internal fees of global card networks for operations processed in specific countries |
| Closing balance | `INOUTIN/OUT` | The total amount of funds available at the end of a specified period including the funds awaiting clearing |
| Accrued holdback volume | `ININ/OUT` | The total amount of funds held as a security deposit at the beginning of the specified time period |
| Net holdback volume | `IN` | The total amount of funds held as a security deposit at the end of the specified time period |
