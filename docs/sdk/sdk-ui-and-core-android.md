# Additional capabilities

## Submitting additional payment information

en_pp_clarification.ditaGenerally, for processing a payment, it is enough to send a set of parameters that are mandatory for its initiation. However, in some cases, a payment system or a provider can require additional data necessary for processing a particular payment. This can be due to region-specific requirements, the need for an additional anti-fraud check, or other factors. The information about submitting additional payment data is provided in.

The final set of required parameters can vary depending on a specific provider or a payment system. The list of parameters relevant for a particular payment is displayed to the customer on the payment form. The customer fills in the required data, confirms the payment, and receives the payment result information.

## Cascade payment processing

details()In case of a payment attempt failure, the capability of cascade payment processing can be used. This capability implies executing a sequence of payment attempts via alternative providers without the payment method change and can be set up upon coordination with the Some Platform specialists.

`cascading_with_redirect = true`If this capability is set up for the project in use, then after the first unsuccessful attempt, a notification is received from sdk_ui_android. This notification contains theattribute-value pair. Along with that, the error page with the button to retry making the payment is shown to the customer. If the 3ds authentication is not required as part of the additional attempt, then the attempt is executed without any further interaction with the customer. Otherwise, a separate page opens for repeating the authentication process.

## Collecting customer data

en_pp_gathering_customer_data.ditaIn some cases, alongside the mandatory parameters, it can be relevant to require the additional ones (such as phone numbers and email addresses) from the customers. To have this capability set up, the merchant should decide which data has to be mandatory to be specified by the customers and communicate data collection preferences to the technical support specialists. For more information about using the capability, see.

## Payment interface language support

`languageCode`detailsBy default, when using sdk_ui_android, the payment interface is localized according either to the language of the customer's device—if this language is supported for the project in use—or to a language set as default for other cases (generally, English). Along with that, if relevant, you can localize the payment interface for particular sessions. For this, every request for opening the payment form must contain a corresponding language code in the().

The following languages are supported for the SDK interface and can be promptly set up in the projects of the payment platform.

- de—German
- en—English
- es—Spanish
- fr—French
- hu—Hungarian
- it—Italian
- kk—Kazakh
- ru—Russian

::: warning
If the language you specify is not supported for the project, the payment form will not open and the error information will be displayed to the customer.
:::

## Saving payment data

*always save payment dataask the customer to select the option*en_pp_saved_data.ditasdk_ui_android allows saving payment data of the customer for subsequent processing of payments without the need for the said customer to re-enter such data. This capability is set up individually for each project. The merchant has to let the technical support know which of the two options is preferable:or. For more information about this capability, refer to.

`customerIdfalsehideSavedWalletssdk_ui_android_host_first_capPaymentOptions`As a result of saving payment data, a separate identifier is generated for each payment instrument. This identifier is associated with the identifier of a certain customer (). To display saved payment data to the customer, passin theparameter of theobject.

## Testing

Before you start processing real payments via sdk_ui_android, we suggest recommended that you test payment processing in the test project. You can obtain the identifier and the secret key of the test project when accessing the Some Platform test environment. Along with that, upon the coordination with the Some Platform specialists, it is possible to test the use of the Google Pay method and additional capabilities, such as cascade payment processing and collection of customer data.

To test payment processing:

To switch to the production mode, change the test values (the identifier and the secret key of the test project) to the production ones.

1. `build.gradle.kts`Open themodule in the application.
2. `projectIdprojectSecretKey`Specify the test project identifier () and the secret key of the given project ().
3. `gradle`Run thesynchronization process.
