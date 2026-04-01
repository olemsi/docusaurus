# partner

Payment method that supports purchase and payout processing via partners in Ukraine by using payment cards. You can perform purchases through this method by using Payment Widget and Gate, payouts by using Gate.

The sections that follow provide detailed information about what you need to perform payments and how you can analyse the information on payments and operations.

## General information

| Payment method type | card payments via partner |
| --- | --- |
| Countries and regions | UA |
| Payment currencies | UAH |
| Currency conversion | + |
| Purchases | + |
| Payouts | + |
| Stored credentials payments | – |
| Full refunds | – |
| Partial refunds | – |
| Chargebacks | – |
| Notes | – |
| Currencies for settlements with merchants | *out-of-the-box:**on demand:* |
| Processing times for settlements with merchants | usually immediately |
| Onboarding and access fee | Refer to your key account manager Platform |

## Interaction diagram

Payment processing by using the payment method requires merchant's web service, one of Platform interfaces, and the Platform payment platform, as well as partner technical facilities.

## Operations support

|  | Interfaces | Amounts, UAH |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Payment Widget | CMS Plug-ins | Gate | Dashboard | minimum | maximum |  |
| Purchases | + | – | + | – | 1.00 | 30,000.00 |
| Payouts | – | – | + | – | 1.00 | – |

|  | Interfaces | Amounts, UAH |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Payment Widget | Gate | Dashboard | minimum | maximum |  |
| Purchases | + | + | – | 1.00 | 30,000.00 |
| Payouts | – | + | – | 1.00 | – |

## Processing scenarios

To perform a purchase operation, you need to redirect customer to the partner's service, while to perform a payout, you need to notify customer via merchant's web service.
