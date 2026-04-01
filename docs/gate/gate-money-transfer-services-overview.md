# Transfer services overview

*debitcredit*The Platform payment platform supports the capabilities of Mastercard MoneySend and Visa Direct networks that significantly simplify transferring money between customers and merchants. These services offer the functionality that utilises specific operations to withdraw (i.e.) funds from the accounts of customers (senders) and to deliver (i.e.) funds to the accounts of customers (recipients). These debiting and crediting operations can be executed separately or combined, and since global card schemes require that the funds reach the target accounts in 30 minutes or less, using Mastercard MoneySend and Visa Direct services makes transferring funds fast and efficient as well as convenient for customers.

Main characteristics of these operations can be summed up as follows:

`salepayout`and mobile SDKsSince these operations are executed asandin the Platform payment platform (utilising the corresponding sets of required parameters), you can initiate them in any interface that fits your needs: debiting operations can be initiated not only via Gate but also via Payment Widgetwhile crediting operations can be initiated via Gate and Dashboard.

If you have any questions regarding the possible restrictions imposed by the global card schemes when these services are used and how to connect to them, refer to your Platform account manager.

|  | Debiting | Crediting |
| --- | --- | --- |
| Mastercard MoneySend operation | Funding transaction (FT) | Payment transaction (PT) |
| Visa Direct operation | Account Funding Transaction (AFT) | Original Credit Transaction (OCT) |
| Platform platform equivalent operation | `sale` | `payout` |
| Available payment methods | Card paymentsCard paymentsApple PayGoogle Pay | Card payments |
| Available payment instruments | Mastercard or Visa cards | Mastercard or Visa cards |
| after it has been processedOperation can be cancelled | with certain time restrictions+ | – |
| Use cases | Adding funds to the customer’s account in the merchant’s service.The first step of the card-to-card money transfer (with funds debited from the account of the sender). | A payout to a customer.The second step of the card to card money transfer (with funds credited to the account of the recipient) |
