# Possible errors

The following error messages can appear after the validity check of the file uploaded to Dashboard has been performed.

| Error message | Possible reason |
| --- | --- |
| File is empty | File is empty |
| Columns are duplicated | Parameter has been duplicated |
| File does not contain required columns | Required parameters are missing |
| Incorrect file format | Extension or format of the file is incorrect |
| File is broken | Encoding or data structure is incorrect |
| Payment method is not available (line# number) | Specified payment method is not available |
| Specified project_id does not belong to specified merchant account | Project identifier is incorrect |
| Project_id is not numeric (line# number) | Project identifier is non-numeric |
| Project_id does not exist (line# number) | Nonexistent project identifier has been specified |
| Payment_id is empty (line# number) | Payment identifier has not been specified |
| Payment with payment_id already exists (line# number) | Specified payment identifier has already been registered in the payment platform |
| Amount is empty (line# number) | Payment amount has not been specified |
| Incorrect Amount (line# number) | Incorrect payment amount value |
| Currency is empty (line# number) | Payment currency has not been specified |
| Incorrect Currency (line# number) | Incorrect payment currency value |
| Invalid date | Card expiration date has not been specified or is incorrect |
| Card.year is in past (line# number) | Expired card; expiration year is incorrect |
| Card.month is in past (line# number) | Expired card; expiration month is incorrect |
