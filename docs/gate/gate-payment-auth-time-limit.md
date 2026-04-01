# Limits

## Time limit for authorisation hold

, Mastercard,American ExpressMastercardAccording to the requirements of Visaand, the time lag for holding funds is limited. For different types of cards the maximum allowed time lag is defined as follows:

`authcapturecancel`There is an exception for American Express cards for which the maximum allowed time lag is limited by the entire duration of stay at a hotel, car rent duration or cruise duration—automatic withdrawal is not available for such cards.The maximum allowed time lag for holding funds is calculated starting from the moment theoperation is created in the Platform payment platform. 30 minutes before the time lag expires, depending on the parameters specified by the Platform employees, one of the following operations is performed automatically: a withdrawal () or a release () of the held funds, after that a callback is sent to the web service. The format of the callback is described in the  section. For more information and configuration of the operation type you can refer to your Platform key account manager.

For instance, if the merchant configures automatic release of the held funds after 10 days and authorisation hold is performed by using Maestro card (the maximum allowed time lag for Maestro card is 6 days), automatic release of funds is performed after 6 days.If the time lag specified by the merchant for automatic withdrawal or release of funds exceeds the maximum allowed time lag, withdrawal or release of funds is performed based on the maximum allowed time lag.

- If authorisation hold is performed as a part of COF purchase processing, the maximum allowed time lag is 5 days.If authorisation hold is performed not as a part of COF purchase processing or COF purchase registration, and the merchant's Merchant Category Code (MCC) is one of the following: 3351&#8211;3500, 3501&#8211;3999, 4411, 7011, 7512, 7513, the maximum allowed time lag is 30 days.In other cases the maximum allowed time lag is 10 days.Visa cards:
- Maestro and Cirrus cards: the maximum allowed time lag is 6 days.
- OtherMastercard cards: the maximum allowed time lag is 28 days.
- If merchant MCC is associated with hotel industry, car rental, or cruise lines the allowed time lag may extend to the entire duration of stay at a hotel, car rent duration or cruise duration, accordingly.In other cases the maximum allowed time lag is 7 days.American Express cards:
- MIR cards: the maximum allowed time lag is 7 days.

## Limits on authorised amount change

Changing the authorised amount is supported only for the purchases made with the use of the Mastercard and Visa cards with respect to the following restrictions:

For the American Express cards purchases, this capability is not supported.

- `3117`After reducing the authorised amount, the remaining amount should be at least 0.01 USD or equivalent to this amount in another currency according to therate for this currency. If the remaining amount is less than required, the request for reducing the amount is declined with theerror code.
- For the Visa cards purchases, initial amount changes of over 15 per cent are supported only for the following MCCs (Merchant Category Codes): 3351&#8211;3500, 3501&#8211;3999, 4111, 4112, 4121, 4131, 4411, 4457, 5411, 5552, 5812, 5813, 7011, 7033, 7394, 7512, 7513, 7519, 7523, 7996, 7999. For any other MCC, initial amount changes are limited to 15 per cent.
