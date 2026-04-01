# Adding criteria using the file

## How to add criteria

If you use additional sources of information about risks, you can add various criteria to blacklists (and if the user account has the appropriate permissions—to whitelists) by uploading a file. This is convenient when both whitelists and blacklists need to be updated without referencing specific operations and with no limitations on how many criteria should be added. To add criteria with the help of a file,

1. **Merchant**Note that you can specify criteria for both whitelists and blacklists in the same file. You are required to provide the merchant ID assigned by Platform at the stage of integration for each operation (if necessary, this identifier can be found in the Payments list—add thecolumn using the register builder).You can find the file requirements with the template and a file sample below.Create and prepare the file with the information about criteria in the specified format.
2. **Black/White listsRisks**Go to thesubsection of thesection.**Add item(s) to list**Click thebutton on the left of the filter panel.**Add multiple items**Go to thetab.Open the form of adding criteria in bulk.
3. **BrowseApply**You can either drag the file or use thebutton to upload. After the file has been uploaded, clickto add the criteria.**Apply**If any of the fields is filled incorrectly, the corresponding error message is shown. Correct the errors in the file, reupload it, and clickagain.Upload the file with the list of criteria to add.
4. **Black/White lists**A notification that the adding request was sent successfully should be shown. Also you can verify that the criteria have been added to the criteria list in thesubsection.Make sure that the criteria have been added.

## File upload requirements

hereTo prepare the file, you can use the template available for download on Dashboard or. Having downloaded the template, you can fill it in any CSV file editor, for example, Microsoft Excel. Each file used for adding criteria in bulk must meet the following requirements:

- The data files must be uploaded in CSV format and the character encoding must be UTF-8 without BOM (Byte Order Mark string).
- The file size cannot exceed 128 MB.
- The first row must contain the names of parameters. The order of parameters can be random.
- The subsequent rows must contain values of target parameters. Specifying values for optional parameters is not required.
- If operation parameters are specified in strings (not in the table format), parameter values in each row must be separated by a semicolon (";"). In addition, the fields without values are separated by semicolons in the same way as the fields with values, and two or more ";" characters can follow one another, for example:If you use Microsoft Excel to create and prepare the file, use a different editor, for example Notepad, to check it for errors.

## Available parameters

When adding data to files, you can use the following parameters.

| merchant_idinteger, required | `644`Merchant identifier assigned by Platform at the stage of integration. Example: |
| --- | --- |
| project_idinteger, required | `1020`Project identifier assigned by Platform at the stage of integration. It identifies the project to which the added criterion applies. When the IP address of the customer is added, the ID of any merchant project can be specified. Example: |
| list_typestring, required | `whitelistblacklistwhitelist`List type. The value can beor. You can specify criteria for both whitelists and blacklists in the same file.  Example:for the whitelist |
| categorystring, required | Category of the criterion:`ipemail`When thecategory is used, the criterion is added to the lists applicable to all projects of the merchant, regardless of the specified project ID. Example:`email`—email address of the customer`customer_id`—the customer ID`pan`—card number of the customer`bin`—bank identification number`ip`—IP address of the customer |
| valuestring, required | `joe.doe12@sunmail.com`Value of the criterion. Example:for email |
| reasonstring, optional | `The customer requests a refund for each purchase`The reason of adding a certain criterion. Example: |
