# Set of parameters for tokens

The following table presents the basic set of parameters used to migrate tokens information.

| Parameter | Description |
| --- | --- |
| `project_id` | Identifier of the project in the Platform payment platform, to which the migrated information is related.`42`Example: |
| `customer_id`required for verification | Identifier of the customer in the web service. Must be a string of 255 or fewer characters.`customer_17008`Example: |
| `pan` | `card_number`Number of the payment card. During migration, the number is used in its full form, while in the verification file, the number is masked and specified in theparameter.`4314220000000056`Example: |
| `card_holder` | Cardholder's first and last names, provided as they are specified on the card and with regards to the applied restrictions.`ARTHUR EDDINGTON`Example: |
| `card_expiration_month` | Sequence number of the payment card expiration month as an integer from 1 to 12.`5`Example: |
| `card_expiration_year` | `YYYY`Sequence number of the payment card expiration year in the format of.`2025`Example: |
| `card_type` | Indicator of the card brand that can be one of the following:`amex`—American Express`maestro`—Maestro`mastercard`—Mastercard`visa`—Visa |
