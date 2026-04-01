# partner

This payment method that allows customers to perform payments by using payment cards of the Ukrainian banks Privat24 and Monobank. You can perform purchases through this method by using Payment Widget and Gate.

The sections that follow provide detailed information about what you need to perform payments and how you can analyse the information on payments and operations.

## General information

| Payment method type | card payments via partner |
| --- | --- |
| Countries and regions | UA |
| Payment currencies | UAH |
| Currency conversion | on the Platform side |
| Purchases | + |
| Payouts | – |
| Stored credentials payments | – |
| Full refunds | refer to Platform technical support |
| Partial refunds | – |
| Chargebacks | – |
| Notes | – |
| Currencies for settlements with merchants | EUR |
| Processing times for settlements with merchants | usually immediately |
| Onboarding and access fee | refer to your Platform key account manager |

## Interaction diagram

Payment processing by using the partner payment method requires merchant's web service, one of Platform interfaces, and the Platform payment platform, as well as partner technical facilities.

## Operations support

* The basic and threshold times are defined as follows:

- *The basic time*is the average estimated time between the moment a payment is initiated in the payment platform to the moment the payment result is sent to the initiator. The basic time evaluation is made on the assumption of normal operation of all technical facilities and communication channels and typical customer behaviour (if any input from customer is required). Use the basic time to estimate when to react to the absence of payment result notifications or when to check payment status.
- *The threshold time*is the maximum possible time between the moment a payment is initiated in the payment platform to the moment the initiator receives the callback with the payment result. A payment is automatically declined, if its waiting time exceeds the threshold time. For individual setting of the threshold time limit, contact Platform technical support.

|  | Interfaces | Amounts, UAH | Times* |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Payment Widget | CMS Plug-ins | Gate | Dashboard | minimum | maximum | basic | threshold |  |
| Purchases | + | – | + | – | – | 14,999.00 | – | 2 hours |
| Full refunds | – | – | + | – | – | – | – | – |

|  | Interfaces | Amounts, UAH | Times* |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard | minimum | maximum | basic | threshold |  |
| Purchases | + | + | – | – | 14,999.00 | – | 2 hours |
| Full refunds | – | + | – | – | – | – | – |

## Processing scenarios

In the partner method to perform a purchase operation, you need to redirect customer to the partner service.
