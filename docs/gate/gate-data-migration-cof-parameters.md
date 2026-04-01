# Set of parameters for COF purchases

The following table presents the basic set of parameters used to migrate COF purchases information.

## Project and customer identifiers

| Parameter | Description |
| --- | --- |
| `project_id` | Identifier of the project in the Platform payment platform, to which the migrated information is related.`42`Example: |
| `customer_id`required for verification | Identifier of the customer in the web service. Must be a string of 255 or fewer characters.`customer_17008`Example: |

## Payment card details

| Parameter | Description |
| --- | --- |
| `pan`required for verification | `card_number`Number of the payment card. During migration, the number is used in its full form, while in the verification file, the number is masked and specified in theparameter.`4314220000000056`Example: |
| `card_holder` | Cardholder's first and last names, provided as they are specified on the card and with regards to the applied restrictions.`ARTHUR EDDINGTON`Example: |
| `card_expiration_month` | Sequence number of the payment card expiration month as an integer from 1 to 12.`5`Example: |
| `card_expiration_year` | `YYYY`Sequence number of the payment card expiration year in the format of.`2025`Example: |
| `card_type` | Indicator of the card brand that can be one of the following:`amex`—American Express`maestro`—Maestro`mastercard`—Mastercard`visa`—Visa |

## Basic details about a COF purchase

| Parameter | Description |
| --- | --- |
| `description` | COF purchase description, specified as a string of 255 or fewer characters.`Subscription for Cosmoshop mini games pack`Example: |
| `scheme_id` | Identifier of the initial operation of COF registration. This identifier is assigned by the global card network (Mastercard or Visa) and can be used when a COF purchase is registered in the European Economic Area.`MDS60JXCH0209482269429345022`Examples:(for Mastercard) and(for Visa) |
| `register_payment_id` | `Platform–yyyymmddnnn`Identifier of the record of a series of recurring debits in the merchant's web service specified as a string of 255 or fewer characters. If this parameter is not provided, the identifier is set in the payment platform automatically in the format ofand sent to the merchant in the verification file.`Platform-20230515001`Example: |
| `status` | `active`—further debits are awaited.`canceled`—further debits are canceled.`active`If this parameter is not provided, thestatus is assigned to the series of debits.Status of the record of a series of recurring debits (details): |
| `recurring_type` | Indicator of the COF purchase type (details):`U`—autopurchase`R`—regular purchase |

## Parameters of recurring debits

| Parameter | Description |
| --- | --- |
| `amount`required for verification | `recurring_amount`Amount of a single debit. Specified in minor currency units (if applicable). In the verification file, the amount is specified in theparameter.`999`Example: |
| `currency`required for verification | `recurring_currency`Code of the debits currency in the ISO 4217 alpha-3 format. In the verification file, the amount is specified in theparameter.`USD`Example: |
| `start_date`required for verification | `dd-mm-yyyy`Date on which debits should begin after the migration, specified in theformat.`01-06-2023`Example: |
| `start_time`required for verification | `hh–mm–ss`Time at which debits should be performed, specified in theformat.`15-00-00`Example: |
| `period`required for verification | *nth*Period used for calculating the interval of debits (to set up recurring debits to be performed eachnumber of days, weeks, or other periods), with the following values allowed:`periodperiod_interval`In case if alongside theparameter, theparameter is not specified, the debits are respectively performed daily, weekly, monthly, quarterly, and yearly.`D`—day`W`—week`M`—month`Q`—quarter`Y`—year |
| `period_interval` | `period`*nthnth*Multiplier used in relation to theparameter for defining the interval of regular debits (to set up recurring debits to be performed eachnumber of days, weeks, or other periods, where thenumber is the interval), with the allowed integer values from 1 to 100.`3period_intervalWperiod`For example, if the valueof theparameter and the valueof theparameter are used, the debits should occur every 3 weeks. |
| `scheduled_payment_id` | `Platform–yyyymmddnnn`Identifier assigned to the payment within which scheduled debits are performed, specified as a string of 255 or fewer characters. If this parameter is not provided, the identifier is specified in the payment platform automatically in the format ofand sent to the merchant in the verification file.`Platform-20230515001`Example: |
