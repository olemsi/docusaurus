# Parameters for opening payment form

`sdk_ui_android_host_first_capPaymentInfo`When working with sdk_ui_android, you can pass the following optional parameters in theobject.

`sdk_ui_android_host_first_capPaymentOptions`You can pass the following optional parameters in theobject.

`recurrentDatasdk_ui_android_host_first_capPaymentOptions`To work with COF purchases, you should pass relevant parameters in theobject of theobject.

`sdk_ui_android_host_first_capThreeDSecureInfo`You can pass the following optional parameters in theobject.

| Parameter | Description |
| --- | --- |
| `paymentDescription`type_kotlin_string | Description of the payment. A string that contains between 1 and 255 characters.`Fancy shoes purchase`Example: |
| `receiptData`type_kotlin_string | Data to be included in the notification with the list of the purchased items, passed as a JSON object encoded using the Base64 scheme.`eyAgCiAgICAgICJwb3NpdGlvbnMiOlsgIAogICAgICAgICB7ICAKICAgICAgI CAgICAgInF1YW50aXR5IjozLAogICAgICAgICAgICAiYW1vdW50IjoxMDAwMC wKICAgICAgICAgICAgInRheCI6MTgsCiAgICAg`Example: |
| `token`type_kotlin_string | Token associated with certain payment data. A string that contains between 1 and 255 characters.`6bbd9255e484f00cc778246c5b7489aa4c498b8bb5231e85942437c`Example: |
| `hideSavedWallets`type_kotlin_boolean | Parameter to enable hiding or displaying saved payment instruments in the payment form.Possible values:`true`—saved payment data is hidden`false`—saved payment data is displayed. |
| `forcePaymentMethod`type_kotlin_string | en_pp_force_payment_method_codes.ditaThe identifier of the preselected payment method as specified in.`card`Example: |
| `sdk_ui_android_host_first_capThreeDSecureInfo`type_kotlin_object | Object that contains additional objects and parameters necessary for the 3ds2 authentication. |
| `languageCode`type_kotlin_string | Payment interface language code in the ISO 639-1 alpha-2 format.`EN`Example: |
| `regionCode`type_kotlin_string | Code of the customer's country in the ISO 3166-1 alpha-2 format.`GB`Example: |

| Parameter | Description |
| --- | --- |
| `merchantID`type_kotlin_string | The Google Pay identifier of the merchant. |
| `merchantName`type_kotlin_string | The Google Pay name of the merchant. |
| `logoImage`type_kotlin_bitmap | A bitmap file that contains the logo of the merchant. |
| `brandColor`type_kotlin_string | Payment interface color in hexadecimal format.`#800080`Example: |
| `isTestEnvironment`type_kotlin_boolean | Parameter to indicate a test payment.Possible values:`true``false` |
| `additionalFields`type_kotlin_list | Additional fields that contain information about the customer.`sdk_ui_android_host_first_capAdditionalField(sdk_ui_android_host_first_capAdditionalFieldType.CUSTOMER_EMAIL,"mail@mail.com")`Example: |
| `recipientInfo`type_kotlin_object—object with information about the recipient of the payment. |  |
| `pan`type_kotlin_string | Card number.`5413330000000019`Example: |
| `card_holder`type_kotlin_string | First and last name (as specified on the card).`Sonya Svantesson`Example: |
| `wallet_id`type_kotlin_string | Number of the wallet.`WID301185029011891`Example: |
| `wallet_owner`type_kotlin_string | First and last name of the recipient.`Sonya Svantesson`Example: |
| `country`type_kotlin_string | Code of the recipient's country in the ISO 3166-1 alpha-2 format.`SE`Example: |
| `address`type_kotlin_string | Recipient's address.`Albanovaegen 28`Example: |
| `city`type_kotlin_string | Recipient's city of residence.`Stockholm`Example: |
| `state`type_kotlin_string | Recipient's state.`MN`Example: |

| Parameter | Description |
| --- | --- |
| `type`type_kotlin_string | COF purchase type:`C`—oneclick`U`—autopurchase`R`—regular purchase |
| `period`type_kotlin_string | Debiting period for a regular purchase.Possible values:`D`—daily`W`—weekly`M`—monthly`Q`—quarterly`Y`—yearly |
| `expiry_day`type_kotlin_string | Expiration day of the COF purchase. |
| `expiry_month`type_kotlin_string | Expiration month of the COF purchase. |
| `expiry_year`type_kotlin_integer | Expiration year of the COF purchase. |
| `scheduled_payment_id`type_kotlin_string | Identifier to assign to the COF purchase (for automatic debiting).`start_date`Parameter must be passed together with theparameter. |
| `start_date`type_kotlin_string | `*dd-mm-yyyy*scheduled_payment_id`Date to perform the first debit in theformat. Parameter must be passed together with theparameter. |
| `time`type_kotlin_string | `*hh:mm:ss*period`Time when to perform a scheduled debit (for regular purchases) in theformat, passed if theparameter is specified as well. |
| `schedule`type_kotlin_object | `amountdate`Schedule of debits performed as a part of the COF purchase (can be specified by the merchant). Should contain parametersand. |
| `amount`type_kotlin_integer | The amount to debit in the smallest currency unit. |
| `date`type_kotlin_string | `*dd-mm-yyyy*`Date to perform the debit in theformat. |

| Parameter | Description |
| --- | --- |
| `threeDSecureInfosdk_ui_android_host_first_capThreeDSecureInfo`—object of theclass containing additional objects and parameters used during the 3ds2 authentication |  |
| `threeDSecurePaymentInfosdk_ui_android_host_first_capThreeDSecurePaymentInfo`—object of theclass with information about the purchase details and indication of the preferable authentication flow |  |
| `challengeIndicator`type_kotlin_string | This parameter indicates whether challenge flow is requested for this payment.`01`—no preferences`02`—it is preferable not to use challenge flow`03`—challenge flow preferred`04`—always use challenge flowPossible values: |
| `challengeWindow`type_kotlin_string | The dimensions of a window in which authentication page opens.`01`—250 x 400 px`02`—390 x 400 px`03`—500 x 600 px`04`—600 x 400 px`05`—full screenPossible values: |
| `preorderDate`type_kotlin_string | The date the preordered merchandise will be available.*dd-mm-yyyy*Format:. |
| `preorderPurchase`type_kotlin_string | This parameter indicates whether cardholder is placing an order for merchandise with a future availability or release date.`01`—merchandise available in stock`02`—future merchandise availabilityPossible values: |
| `reorder`type_kotlin_string | This parameter indicates whether the cardholder is reordering previously purchased merchandise.`01`—first time order`02`—reorderPossible values: |
| `threeDSecureGiftCardInfosdk_ui_android_host_first_capThreeDSecureGiftCardInfo`—object of theclass with information about payment with prepaid card or gift card. |  |
| `amount`type_kotlin_integer | Amount of the payment with prepaid or gift card denominated in the smallest currency unit. |
| `currency`type_kotlin_string | references/en/currencies/GBP.ditaCurrency code of the payment with prepaid or gift card in the ISO 4217 alpha-3 format, for example. |
| `count`type_kotlin_integer | Total number of individual prepaid or gift cards/codes used in purchase. |
| `threeDSecureCustomerInfosdk_ui_android_host_first_capThreeDSecureCustomerInfo`—object of theclass with information about the customer. |  |
| `addressMatch`type_kotlin_string | `threeDSecureShippingInfo`The parameter indicates whether the customer billing address matches the address specified in theobject.**Y**—shipping address is the same as billing address**N**—shipping address and billing address are not identicalPossible values: |
| `billingRegionCode`type_kotlin_string | `DOR`State, province, or region code in the ISO 3166-2 format. Example:for Dorset. |
| `homePhone`type_kotlin_string | Customer home phone number.`44991234567`Numeric, from 4 to 24 characters. Example:. |
| `workPhone`type_kotlin_string | Customer work phone number.`44997654321`Numeric, from 4 to 24 characters. Example. |
| `threeDSecureAccountInfosdk_ui_android_host_first_capThreeDSecureAccountInfo`—object of theclass with information about customer account details on record with the web service |  |
| `additional`type_kotlin_string | Additional customer account information, for instance arbitrary customer ID.Maximum 64 characters. |
| `activityDay`type_kotlin_integer | `999`Maximum 3 characters (for example,).Number of card payment attempts in the last 24 hours. |
| `activityYear`type_kotlin_integer | `999`Maximum 3 characters (for example,).Number of card payment attempts in the last 365 days. |
| `ageIndicator`type_kotlin_string | Number of days since the customer account was created.`01`—guest check-out`02`—customer account was created in this transaction`03`—customer account was created less than 30 days ago`04`—customer account was created 30 to 60 days ago`05`—customer account was created over 60 days agoPossible values: |
| `authData`type_kotlin_string | Any additional log in information in free text. Maximum 255 characters. |
| `authMethod`type_kotlin_string | Authentication type the customer used to log on to the account when placing the order.`01`—no authentication`02`—log on by using authentication data on file with merchant`03`—log on by using federated ID (for example, Google Account or Facebook)`04`—log on by using a FIDO authenticator (Fast IDentity Online)Possible values: |
| `authTime`type_kotlin_string | Account log on date and time.*dd-mm-yyyyhh:mm*Format:. |
| `date`type_kotlin_string | Account creation date.*dd-mm-yyyy*Format:. |
| `changeDate`type_kotlin_string | Last account change date except for password change or password reset.*dd-mm-yyyy*Format:. |
| `changeIndicator`type_kotlin_string | Number of days since last customer account update, not including password change or reset.`01`—updated in this transaction`02`—updated less than 30 days ago`03`—updated 30−60 days ago`04`—updated over 60 days agoPossible values: |
| `passChangeDate`type_kotlin_string | Last password change or password reset date.*dd-mm-yyyy*Format:. |
| `passChangeIndicator`type_kotlin_string | Number of days since the last password change or reset.`01`—password never changed`02`—changed in this transaction`03`—changed less than 30 days ago`04`—changed 30−60 days ago`05`—changed over 60 days agoPossible values: |
| `paymentAge`type_kotlin_string | Card record creation date.*dd-mm-yyyy*Format:. |
| `paymentAgeIndicator`type_kotlin_string | Number of days since the payment card details were saved in a customer account.`01`—current payment uses no customer account (guest checkout)`02`—card details were saved today`03`—card details were saved less than 30 days ago`04`—card details were saved 30 to 60 days ago`05`—card details were saved more than 60 days agoPossible values: |
| `provisionAttempts`type_kotlin_integer | `999`Maximum 3 characters ().Number of attempts to add card details in customer account in the last 24 hours. |
| `purchaseNumber`type_kotlin_integer | `9999`Maximum 4 characters ().Number of purchases with this cardholder account in the previous six months. |
| `suspiciousActivity`type_kotlin_string | Suspicious activity detection result.`01`—no suspicious activity detected`02`—suspicious activity detectedPossible values: |
| `threeDSecureShippingInfosdk_ui_android_host_first_capThreeDSecureShippingInfo`—object of theclass with shipping details. |  |
| `address`type_kotlin_string | Shipping address.Maximum 150 characters. |
| `addressUsage`type_kotlin_string | *dd-mm-yyyy*Format:.First shipping address usage date. |
| `addressUsageIndicator`type_kotlin_string | Number of days since the first time usage of the shipping address.`01`—this transaction`02`—less than 30 days ago`03`—30−60 days ago`04`—more than 60 days agoPossible values: |
| `city`type_kotlin_string | Shipping city.Maximum 50 characters. |
| `country`type_kotlin_string | `GB`Shipping country in the ISO 3166-1 alpha-2 format, for examplefor country_GB. |
| `deliveryEmail`type_kotlin_string | The email for the digital content delivery.Maximum 255 characters. |
| `deliveryTime`type_kotlin_string | Shipment terms.`01`—digital delivery`02`—same-day delivery`03`—overnight delivery`04`—longer than overnight deliveryPossible values: |
| `nameIndicator`type_kotlin_string | Shipment recipient flag.`01`—customer and shipment recipient are the same person`02`—customer and shipment recipient are different personsPossible values: |
| `postal`type_kotlin_string | Shipping postbox number.Maximum 16 characters. |
| `regionCode`type_kotlin_string | `DOR`State, province, or region code in the ISO 3166-2 format. Example:for Dorset.`countrythreeDSecureShippingInfo`If you specify this parameter, you need also to specify and populate theparameter in theobject. |
| `type`type_kotlin_string | Shipment indicator.`01`—ship to cardholder billing address`02`—ship to another verified address on file with merchant`03`—ship to address that is different from the cardholder billing address or any verified address on file with merchant`04`—ship to local store`05`—digital goods shipment`06`—no shipment, for instance for travel or event tickets`07`—other, for example gaming or subscriptionsPossible values: |
| `threeDSecureMpiResultInfosdk_ui_android_host_first_capThreeDSecureMpiResultInfo`—object of theclass with information about previous customer authentication |  |
| `acsOperationId`type_kotlin_string | The ID the issuer assigned to the previous customer operation. Maximum 36 characters. |
| `authenticationFlow`type_kotlin_string | The flow the issuer used to authenticate the cardholder in the previous operation.`01`—frictionless flow`02`—challenge flowPossible values: |
| `authenticationTimestamp`type_kotlin_string | Date and time of the previous successful customer authentication |
