# Payment form opening parameters

`PaymentOptions`When working with sdk_ui_ios, you can pass the following optional parameters in theobject.

`recurrentInfoPaymentOptions`To work with COF purchases, you should pass relevant parameters in theobject of theobject.

`threeDSecureInfo`You can pass the following optional parameters in theobject.

| Parameter | Description |
| --- | --- |
| `paymentDescription`type_string | Description of the payment. A string that contains between 1 and 255 characters.`Cosmoshop purchase`Example: |
| `receiptData`type_string | Data to be included in the notification with the list of the purchased items, passed as a JSON object encoded using the Base64 scheme.`eyAgCiAgICAgICJwb3NpdGlvbnMiOlsgIAogICAgICAgICB7ICAKICAgICAgI CAgICAgInF1YW50aXR5IjozLAogICAgICAgICAgICAiYW1vdW50IjoxMDAwMC wKICAgICAgICAgICAgInRheCI6MTgsCiAgICAg`Example: |
| `token`type_string | Token associated with certain payment data. A string that contains between 1 and 255 characters.`6bbd9255e484f00cc778246c5b7489aa4c498b8bb5231e85942437c`Example: |
| `hideSavedWallets`type_boolean | Parameter to enable hiding or displaying saved payment instruments in the payment form.Possible values:`true`—saved payment data is hidden`false`—saved payment data is displayed. |
| `forcePaymentMethod`type_string | en_pp_force_payment_method_codes.ditaThe identifier of the preselected payment method according to.`card`Example: |
| `threeDSecureInfo`type_object | Object that contains additional objects and parameters necessary for the 3ds2 authentication. |
| `regionCode`type_string | Code of the customer's country in the ISO 3166-1 alpha-2 format.`GB`Example: |
| `applePayMerchantID`type_string | The Apple Pay identifier of the merchant. |
| `applePayDescription`type_string | The description of the merchant in the Apple Pay service. |
| `countryCode`type_string | Code of the customer's country in the ISO 3166-1 alpha-2 format. Passed when Apple Pay payments are processed.`GB`Example: |
| `logoImage`type_object | A PNG or SVG file that contains the logo of the merchant. |
| `brandColor`type_string | `UIColor`Payment interface color passed as aobject.`UIColor.green`Example: |
| `isTestEnvironment`type_boolean | Parameter to indicate a test payment.Possible values:`true``false` |
| `additionalFields`type_list | Additional fields that contain information about the customer. Includes a list of parameters with values.`AdditionalField(type: .customer_first_name, value: "Arthur")`Example: |
| `recipientInfo`type_object—object with information about the recipient of the payment. |  |
| `pan`type_string | Card number.`5413330000000019`Example: |
| `card_holder`type_string | First and last name (as specified on the card).`Arthur Eddington`Example: |
| `wallet_id`type_string | Number of the wallet.`WID2812188222111944`Example: |
| `wallet_owner`type_string | First and last name of the recipient.`Arthur Eddington`Example: |
| `country`type_string | Code of the recipient's country in the ISO 3166-1 alpha-2 format.`GB`Example: |
| `address`type_string | Recipient's address.`42 Walliscote Road`Example: |
| `city`type_string | Recipient's city of residence.`Weston-sur-Mare`Example: |
| `state`type_string | Recipient's state.`GB`Example: |

| Parameter | Description |
| --- | --- |
| `type`type_string | COF purchase type:`.OneClick``.Autopayment``.Regular` |
| `period`type_string | Debiting period for a regular purchase.Possible values:`.Day`— daily`.Week`—weekly`.Month`—monthly`.Quarter`— quarterly`.Year`—yearly |
| `expiryDay`type_string | Expiration day of the COF purchase. |
| `expiryMonth`type_string | Expiration month of the COF purchase. |
| `expiryYear`type_integer | Expiration year of the COF purchase. |
| `scheduledPaymentID`type_string | Identifier to assign to the COF purchase (for automatic debiting).`startDate`Parameter must be passed together with theparameter. |
| `startDate`type_string | `*dd-mm-yyyy*scheduledpaymentId`Date to perform the first debit in theformat. Parameter must be passed together with theparameter. |
| `time`type_string | `*hh:mm:ss*period`Time when to perform a scheduled debit (for regular purchases) in theformat, passed if theparameter is specified as well. |
| `scheduleamountdate`type_object—schedule of debits performed as part of the COF purchase (can be specified by the merchant). Should contain parametersand. |  |
| `amount`type_integer | The amount to debit in the smallest currency unit. |
| `date`type_string | `*dd-mm-yyyy*`Date to perform the debit in theformat. |

| Parameter | Description |
| --- | --- |
| `threeDSecureInfoThreeDSecureInfo`—object of theclass containing additional objects and parameters used during the 3ds2 authentication |  |
| `threeDSecurePaymentInfoThreeDSecurePaymentInfo`—object of theclass with information about the purchase details and indication of the preferable authentication flow |  |
| `challengeIndicator`type_string | This parameter indicates whether challenge flow is requested for this payment.`01`—no preferences`02`—it is preferable not to use challenge flow`03`—challenge flow preferred`04`—always use challenge flowPossible values: |
| `challengeWindow`type_string | The dimensions of a window in which authentication page opens.`01`—250 x 400 px`02`—390 x 400 px`03`—500 x 600 px`04`—600 x 400 px`05`—full screenPossible values: |
| `preorderDate`type_string | The date the preordered merchandise will be available.*dd-mm-yyyy*Format:. |
| `preorderPurchase`type_string | This parameter indicates whether cardholder is placing an order for merchandise with a future availability or release date.`01`—merchandise available in stock`02`—future merchandise availabilityPossible values: |
| `reorder`type_string | This parameter indicates whether the cardholder is reordering previously purchased merchandise.`01`—first time order`02`—reorderPossible values: |
| `threeDSecureGiftCardInfoThreeDSecureGiftCardInfo`—object of theclass with information about payment with prepaid card or gift card. |  |
| `amount`type_integer | Amount of payment with prepaid or gift card denominated in the smallest currency unit. |
| `currency`type_string | references/en/currencies/GBP.ditaCurrency of payment with prepaid or gift card in the ISO 4217 alpha-3 format, for example. |
| `count`type_integer | Total number of individual prepaid or gift cards/codes used in purchase. |
| `threeDSecureCustomerInfoThreeDSecureCustomerInfo`—object of theclass with information about the customer. |  |
| `addressMatch`type_string | `threeDSecureShippingInfo`The parameter indicates whether the customer billing address matches the address specified in theobject.**Y**—Shipping Address matches Billing Address**N**—Shipping Address does not match Billing AddressPossible values: |
| `billingRegionCode`type_string | `DOR`State, province, or region code in the ISO 3166-2 format. Example:for Dorset. |
| `homePhone`type_string | Customer home phone number.`44991234567`Numeric, from 4 to 24 characters. Example:. |
| `workPhone`type_string | Customer work phone number.`44997654321`Numeric, from 4 to 24 characters. Example. |
| `threeDSecureAccountInfoThreeDSecureAccountInfo`—object of theclass with information about customer account details on record with the web service |  |
| `additional`type_string | Additional customer account information, for instance arbitrary customer ID.Maximum 64 characters. |
| `activityDay`type_integer | `999`Maximum 3 characters ().Number of card payment attempts in the last 24 hours. |
| `activityYear`type_integer | `999`Maximum 3 characters ().Number of card payment attempts in the last 365 days. |
| `ageIndicator`type_string | Number of days since the customer account was created.`01`—guest check-out`02`—customer account was created in this transaction`03`—customer account was created less than 30 days ago`04`—customer account was created 30 to 60 days ago`05`—customer account was created over 60 days agoPossible values: |
| `authData`type_string | Any additional log in information in free text.Maximum 255 characters. |
| `authMethod`type_string | Authentication type the customer used to log on to the account when placing the order.`01`—no authentication`02`—log on by using authentication data on file with merchant`03`—log on by using federated ID (for example, Google Account or Facebook)`04`—log on by using a FIDO authenticator (Fast IDentity Online)Possible values: |
| `authTime`type_string | Account log on date and time.*dd-mm-yyyyhh:mm*Format:. |
| `date`type_string | Account creation date.*dd-mm-yyyy*Format:. |
| `changeDate`type_string | Last account change date except for password change or password reset.*dd-mm-yyyy*Format:. |
| `changeIndicator`type_string | Number of days since last customer account update, not including password change or reset.`01`—updated in this transaction`02`—updated less than 30 days ago`03`—updated 30−60 days ago`04`—updated over 60 days agoPossible values: |
| `passChangeDate`type_string | Last password change or password reset date.*dd-mm-yyyy*Format:. |
| `passChangeIndicator`type_string | Number of days since the last password change or reset.`01`—password never changed`02`—changed in this transaction`03`—changed less than 30 days ago`04`—changed 30−60 days ago`05`—changed over 60 days agoPossible values: |
| `paymentAge`type_string | Card record creation date.*dd-mm-yyyy*Format:. |
| `paymentAgeIndicator`type_string | Number of days since the payment card details were saved in a customer account.`01`—current payment uses no customer account (guest checkout)`02`—card details were saved today`03`—card details were saved less than 30 days ago`04`—card details were saved 30 to 60 days ago`05`—card details were saved more than 60 days agoPossible values: |
| `provisionAttempts`type_integer | `999`Maximum 3 characters ().Number of attempts to add card details in customer account in the last 24 hours. |
| `purchaseNumber`type_integer | `9999`Maximum 4 characters ().Number of purchases with this cardholder account in the previous six months. |
| `suspiciousActivity`type_string | Suspicious activity detection result.`01`—no suspicious activity detected`02`—suspicious activity detectedPossible values: |
| `threeDSecureShippingInfoThreeDSecureShippingInfo`—object of theclass with shipping details. |  |
| `address`type_string | Shipping address.Maximum 150 characters. |
| `addressUsage`type_string | *dd-mm-yyyy*Format:.First shipping address usage date. |
| `addressUsageIndicator`type_string | Number of days since the first time usage of the shipping address.`01`—this transaction`02`—less than 30 days ago`03`—30−60 days ago`04`—more than 60 days agoPossible values: |
| `city`type_string | Shipping city.Maximum 50 characters. |
| `country`type_string | `GB`Shipping country in the ISO 3166-1 alpha-2 format, for examplefor country_GB. |
| `deliveryEmail`type_string | The email for the digital content delivery.Maximum 255 characters. |
| `deliveryTime`type_string | Shipment terms.`01`—digital delivery`02`—same-day delivery`03`—overnight delivery`04`—longer than overnight deliveryPossible values: |
| `nameIndicator`type_string | Shipment recipient flag.`01`—customer and shipment recipient are the same person`02`—customer and shipment recipient are different personsPossible values: |
| `postal`type_string | Shipping postbox number.Maximum 16 characters. |
| `regionCode`type_string | `DOR`State, province, or region code in the ISO 3166-2 format. Example:for Dorset.`countrythreeDSecureShippingInfo`If you specify this parameter, you need also to specify and populate theparameter in theobject. |
| `type`type_string | Shipment indicator.`01`—ship to cardholder billing address`02`—ship to another verified address on file with merchant`03`—ship to address that is different from the cardholder billing address or any verified address on file with merchant`04`—ship to local store`05`—digital goods shipment`06`—no shipment, for instance for travel or event tickets`07`—other, for example gaming or subscriptionsPossible values: |
| `threeDSecureMpiResultInfothreeDSecureMpiResultInfo`—object of theclass with information about previous customer authentication |  |
| `acsOperationId`type_string | The ID the issuer assigned to the previous customer operation. Maximum 36 characters. |
| `authenticationFlow`type_string | The flow the issuer used to authenticate the cardholder in the previous operation.`01`—frictionless flow`02`—challenge flowPossible values: |
| `authenticationTimestamp`type_string | Date and time of the previous successful customer authentication |
