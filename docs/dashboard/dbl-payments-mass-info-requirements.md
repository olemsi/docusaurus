# File upload requirements

hereTo prepare the file, you can use the template available for download on Dashboard or. Having downloaded the template, you can fill it in any CSV file editor, for example, Microsoft Excel. Each file used for adding criteria in bulk must meet the following requirements:

- The data files must be uploaded in CSV format and the character encoding must be UTF-8 without BOM (Byte Order Mark string).
- The file size cannot exceed 128 MB.
- The first row must contain the names of parameters. The order of parameters can be random.
- The subsequent rows must contain values of target parameters. Specifying values for optional parameters is recommended but not required.
- All parameter values in the file must meet the requirements provided in the table below.
- If you use Microsoft Excel to create and prepare the file, make sure that strings do not include incorrect separators or extra characters. You should use a different editor, for example Notepad, to check if extra characters have been added.If operation parameters are specified in strings (not in table format), parameter values in each row must be separated by a semicolon (";"). In addition, the fields without values are separated by semicolons in the same way as the fields with values, and two or more ";" characters can follow one another, for example:
