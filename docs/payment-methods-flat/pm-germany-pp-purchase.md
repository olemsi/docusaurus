# Open Banking in Germany

## General information

pageTo obtain such consent and information (when required), a correspondingis displayed on Payment Widget.To process a purchase through Payment Widget by using the Open Banking in Germany method, the merchant's web service is required to send a request with all required parameters and signature to the Platform URL and receive a callback with the result. It should be taken into account that in the process of making a payment, the customer is redirected to the service of the provider or bank and in some cases, taking into account the specifics of the provider processing the payment, the customer may additionally be required to provide consent and certain information.

The full sequence and special aspects of purchase processing are provided below.

Generally, when a customer confirms their intention to pay on the side of the web service, they are redirected to Payment Widget where they select the payment method and, in the case of working with the Open Banking in Germany method, additionally select one of the available banks. However, in some situations, other options for choosing a payment method and bank may be relevant. For example, upon opening Payment Widget, you can immediately redirect the customer to the bank selection page or limit the list of supported banks for a particular payment and display only target bank selection buttons to the customer. And from the web service side, you can control the use of such options.

detailsThe specific option of selecting the payment method and bank is determined depending on the parameters specified in the request for opening Payment Widget (). The following options are available:

Information about the formats of requests and callbacks used for processing payments by using the Open Banking in Germany method via Payment Widget is presented further in this section; general information about working with the Payment Widget API is presented in .

- 1—when the payment form is opened, it sequentially displays separate pages for selecting a method and a bank. Then the customer selects the method and the bank (this option is used by default).
- 2—when the payment form is opened, the buttons for selecting other methods and banks supported by this method are displayed on one page. Then the customer selects one of these banks.
- 3—when the payment form is opened, the buttons for selecting other methods of the specified group and banks supported by this method are displayed on one page. Then the customer selects one of these banks.
- 4—when the payment form is opened, it displays a page with buttons for selecting all available banks for this method. Then the customer selects one of these banks.
- 5—when the payment form is opened, it displays a page with buttons for selecting only specific banks supported by this method. Then the customer selects one of these banks.
- 6—when the payment form is opened, it displays a page requesting confirmation of redirection to the service of the specific bank. Then the customer confirms the redirection.

::: warning
When redirecting to services of providers and banks, the iframe element cannot be used. The pages of these services can be opened in a separate tab or in a modal window (regardless of the Payment Widget opening option).
:::

## Request format

There are several things you need to consider when using the Open Banking in Germany method:

Thus, a correct request for opening the payment form using the Open Banking in Germany method must contain the project identifier, basic payment information (identifier, amount, and currency code), URL for customer redirection, customer identifier and signature, as well as various optional parameters.

At the same time, in case of selecting a bank among specific banks (5), the request for opening Payment Widget may contain additional data.

1. `project_id`—project identifier obtained from Platform during integration`payment_id`—payment identifier unique within the project`payment_currency`—alphabetic payment currency code in the ISO-4217 alpha-3 format`payment_amount`—payment amount in the smallest currency unit`customer_id`—customer identifier unique within the projectThe following parameters required for any payment must be specified:
2. `customer_first_namecustomer_last_name`Additionally, when selecting certain banks the customer can be required to specify the International Bank Account Number (IBAN) on Payment Widget, while selecting other banks the IBAN is specified on the provider side. Due to the specifics of the payment methods this number can only be specified by the customer separately and can't be used in requests.Additionally, it is recommended to specify the first and last names of the customer in the parametersand. If any of these parameters are missing, the payment form may display input fields for entering the missing values (details are available in ).
3. `merchant_return_url`It is recommended to specify in the request theparameter with the URL for redirecting the customer to the web service, so that the customer can return to the web service by clicking the corresponding button on the payment form in case the customer does not grant their consent for payment processing.
4. The following are the bank selection options:*Selecting the method and the bank on Payment Widget (1)2–6*`force_payment_methodpayment_methods_options`—the default option, applied if theparameter and theobject, mentioned in subpointsare not used.*Selecting a bank among other methods on Payment Widget (2)*`payment_methods_optionsonline_german_bankssplit_bankstrue"U+0022\U+005C`"payment_methods_options": "{\"online_german_banks\": {\"split_banks\": true}}"As a result of using this option for the specified method, instead of a button for selecting it, buttons for selecting all supported banks are displayed.—for this option, you need to specify a string object in the value of theparameter, the name of which is the method indicator (), and the value of which is theparameter set to the value. While specifying such an object, all nestedcharacters () must be escaped using the precedingcharacters ().*Selecting a bank among other methods of the specified group on Payment Widget (3)*`payment_methods_optionsonline_german_bankssplit_bankstrue"U+0022\U+005C`Specify a string object in the value of theparameter, the name of which is the method indicator (), and the value of which is theparameter set to the value. While specifying such an object, all nestedcharacters () must be escaped using the precedingcharacters ().`openbankingforce_payment_group`Specify thegroup code in theparameter"payment_methods_options": "{\"online_german_banks\": {\"split_banks\": true}}",
"force_payment_group": "openbanking"As a result of using this option for the specified method, instead of a button for selecting it, buttons for selecting all supported banks are displayed, as well as buttons for other methods of the Open Banking group.—this option requires the following:*Selecting a bank among all available ones on Payment Widget (4)*`online-german-banksforce_payment_method`"force_payment_method": "online-german-banks"As a result of using this option for the specified method, buttons for selecting all banks, supported by this method, are displayed.—for this option specify the selected Open Banking in Germany method code () in theparameter.*Selecting a bank among specific ones on Payment Widget (5)*`payment_methods_optionsonline_german_bankssplit_bankstruebanks_id"U+0022\U+005C`Specify a string object in the value of theparameter, the name of which is the method indicator (), and the value of which is theparameter set to include the valueand thearray containing the target bank identifiers. While specifying such an object, all nestedcharacters () must be escaped using the precedingcharacters ().`online-german-banksforce_payment_method`Specify the selected Open Banking in Germany method code () in theparameter."payment_methods_options": "{\"online_german_banks\": {\"split_banks\": true, \"banks_id\": [54971, 54981]}}",
"force_payment_method": "online-german-banks"As a result of using this option, buttons for selecting specified banks that support working with the specified method are displayed in the payment form.—this option requires the following:*Confirming redirection to the service of the specific bank on Payment Widget (6)*`payment_methods_optionsonline_german_bankssplit_bankstruebanks_id"U+0022\U+005C`Specify a string object in the value of theparameter, the name of which is the method indicator (), and the value of which is theparameter set to include the valueand thearray containing the target bank identifier. While specifying such an object, all nestedcharacters () must be escaped using the precedingcharacters ().`online-german-banksforce_payment_method`Specify the selected Open Banking in Germany method code () in theparameter."payment_methods_options": "{\"online_german_banks\": {\"split_banks\": true, \"banks_id\": [54971]}}",
"force_payment_method": "online-german-banks"As a result of using this option, when opening a payment form, a confirmation page is displayed in it to redirect to the service of the specified bank.—this option requires the following:
5. Additionally, any other parameters available for working with Payment Widget can be used (details).
6. After all target parameters are specified, generate a signature (details).

## Callback format

The Open Banking in Germany method uses the standard format for callbacks to deliver purchase results. For more information, see .

`10.00 EUR239`The following is the example of a callback with information about apurchase made in theproject.

The following is the example of a callback with information about a declined purchase.

## Useful links

The following articles can be useful when implementing purchases via Payment Widget:

- and—about the interaction with the payment platform by using Payment Widget.
- —about the procedure of generating and verifying signatures in requests and callbacks.
- —about the types, processing models, and possible statuses of supported payments and operations.
- —about processing of one-time one-step purchases with immediate debiting of funds by using Payment Widget.
- —about error and response codes that are used in the payment platform to record information about performing of operations.
