# Test cards

To check the validity of the technical integration and different user scenarios for card payments, you can execute test payments in the test projects using test cards.

, such as payment amount, cardholder name, or verification code,For example, the card expiry date cannot predate the payment date.With test cards, the processing scenario is selected based on the card number. Other parameterscan take arbitrary values, but they must be specified in the correct format.The followings test cards are currently supported in the payment platform.

In additional to testing card payments, in the payment platform are supported capabilities to testing alternative methods. For more information, see .Additional questions about testing payments can be addressed to Platform technical support.

| Card | Payment system | Status | Notes |
| --- | --- | --- | --- |
| `4000 0000 0000 0077` | Visa | `success` | – |
| `4111 1111 1111 1111` | Visa | `decline` | – |
| `4000 0000 0000 0119` | Visa | `success` | Payment to register a COF purchase |
| `4000 0000 0000 0119` | Visa | `decline` | `10102`Debit operation performed as part of the registered COF purchase was declined due to invalid card data, error code |
| `4000 0000 0000 0135` | Visa | `success` | Payment to register a COF purchase |
| `4000 0000 0000 0135` | Visa | `decline` | `10105`Debit operation performed as part of the registered COF purchase was declined due to insufficient funds on the card, error code |
| `4539 1214 1116 8251` | Visa | `decline` | Payment was declined due to a delay in request processing by the issuer |

| Card | Status | Notes |
| --- | --- | --- |
| `5586 2001 0437 743412/30641`Number:Expiration date:CVC (CVV): | `success` | – |
| `4058 7032 1169 885912/30769`Number:Expiration date:CVC (CVV): | `success` | – |

| Card | Payment system | Status |
| --- | --- | --- |
| `4314 2200 0000 0056` | Visa | `success` |
| `4006 2600 0000 0014` | Visa | `success` |
| `4314 2200 0000 0072` | Visa | `decline` |
| `4314 2200 0000 0098` | Visa | `decline` |
| `5413 3300 0000 0019` | Mastercard | `success` |
| `5413 3300 0000 0035` | Mastercard | `decline` |
| `5413 3300 0000 0092` | Mastercard | `decline` |

| Card | Status | Notes |
| --- | --- | --- |
| `5586 2000 7526 970112/30641`Number:Expiration date:CVC (CVV): | ```success``decline` | `123456`The valid confirmation code to perform the 3‑D Secure authentication is. When any other confirmation codes are entered, payments are declined |
| `4058 7032 1169 826312/30769`Number:Expiration date:CVC (CVV): | ```success``decline` | `123456`The valid confirmation code to perform the 3‑D Secure authentication is. When any other confirmation codes are entered, payments are declined |

| Card | Payment system | Status | Notes |
| --- | --- | --- | --- |
| `4314 2200 0000 0056` | Visa | `success` | Challenge flow when the ACS page is displayed for entering the code |
| `4012 0000 0002 0089` | Visa | `decline` | Challenge flow when the ACS page is displayed for entering the code |
| `4477 0000 0000 0006` | Visa | `success` | Frictionless flow |
| `4012 0000 0002 0063` | Visa | `success` | Frictionless flow when 3‑D Secure 2 fails and the 3‑D Secure 1 authentication is performed instead |
| `4344 6931 3609 2508` | Visa | `success` | Challenge flow when 3‑D Secure 2 is not supported by the issuer and 3‑D Secure 1 authentication is performed instead |
| `4165 5197 6126 9614` | Visa | `decline` | Challenge flow when 3‑D Secure 2 is not supported by the issuer and 3‑D Secure 1 authentication is performed instead |
| `4331 2899 2560 8649` | Visa | `decline` | Frictionless flow when 3‑D Secure 2 fails and the 3‑D Secure 1 authentication is performed instead |
| `4383 6043 4680 7330` | Visa | `decline` | Challenge flow when 3‑D Secure 2 fails and the 3‑D Secure 1 authentication is performed instead |
| `5413 3300 0000 0019` | Mastercard | `success` | Challenge flow when the ACS page is displayed for entering the code |
| `5544 3300 0000 0045` | Mastercard | `decline` | Challenge flow when the ACS page is displayed for entering the code |
| `5252 0000 0000 0004` | Mastercard | `success` | Frictionless flow |
| `5544 3300 0000 0029` | Mastercard | `success` | Frictionless flow when 3‑D Secure 2 fails and the 3‑D Secure 1 authentication is performed instead |
| `5426 2574 9884 1734` | Mastercard | `success` | Challenge flow when 3‑D Secure 2 fails and the 3‑D Secure 1 authentication is performed instead |
| `5722 7532 3501 6359` | Maestro | `decline` | Challenge flow when 3‑D Secure 2 fails and the 3‑D Secure 1 authentication is performed instead |

| Card | Status | Notes |
| --- | --- | --- |
| `2201 3820 0000 001312/30590`Number:Expiration date:CVC (CVV): | `success` | – |
| `2201 3820 0000 002112/30487`Number:Expiration date:CVC (CVV): | `decline` | – |
| `2201 3820 0000 003912/30324`Number:Expiration date:CVC (CVV): | `success` | `1qwezxc`Challenge flow when the ACS page is displayed for entering the code. The valid confirmation code is. When any other confirmation codes are entered, payments are declined |
| `2201 3820 0000 004712/30584`Number:Expiration date:CVC (CVV): | `success` | `1qwezxc`Challenge flow when the ACS page is displayed for entering the code. The valid confirmation code is. When any other confirmation codes are entered, payments are declined |
