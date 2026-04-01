# General information

In some instances, it may be relevant for the merchant to process payments via Platform by using the payment details previously saved in the services of other acquirers. For such situations, Platform offers the capability of migrating and using the information about COF purchases (both regular and unscheduled) and payment card tokens.

While Platform charges no fees for such migration, certain fees may be charged by the acquirer providing the target information. Besides, migration is only possible if the acquirer supports such a capability and if other conditions are met (described further). If you have any questions about the organisation of data migration to Platform from other acquirers or in reverse, contact the Platform account manager.

Due to the data sensitivity, the data should be encrypted before migration. When it comes to migrating data to the Platform platform, this data is usually encrypted via the PGP (Pretty Good Privacy) algorithm; however, in certain cases, other methods can be used upon the coordination with the Platform specialists (for example, when the acquirer that provides the data does not support the PGP encryption).

For migrating data, the file with this data must be encrypted by your current acquirer providing the data with the use of the public key from Platform (in case of the PGP encryption) and sent to the Platform specialists. Contact your Platform account manager to set up a communication channel with the dedicated Platform specialists responsible for the data migration.

**PaymentsSubscriptions**After all the necessary data has been migrated to the Platform payment platform and its correctness has been confirmed by the merchant, the target COF purchases and tokens can be used for making various actions supported in the platform: performing series of debits within COF purchases (details), managing these debits (details), processing purchases and payouts with the help of tokens (details), performing payment cards verification (details), and so on. Along with that, all information about payments processed by using the migrated details can be obtained via the Dashboard interface (in thesection, with the information about all payments, and thesection, with the information about regular purchases), the Data API, and the Gate API.

::: tip
`token`card tokens specified in theparameter`payment_id`identifiers of payments specified in theparameter`idrecurring`identifiers of series of debits specified in theparameter of theobject`project_id`Note that for performing any actions with the use of the migrated data, it is required to use new identifiers registered in the Platform payment platform:These identifiers are included in the verification file sent to the merchant's specialists to confirm the correctness of the migrated data and can only be used with the identifier of the project (), to which they are initially assigned.
:::
