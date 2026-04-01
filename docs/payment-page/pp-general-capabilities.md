# Capabilities

## Support for various required actions

Payment Widget allows performing the following required actions:

The required action is configured by specifying corresponding parameters in the request for opening the payment form and defines the way of using the payment form. For different scenarios various features are available, including entering and saving payment information, collecting additional information and using other options described below.

- *Payment processing.*Payment processing, especially processing one-step purchases, is the most common way of using the payment form. One-step purchase means that during one Payment Widget session a one-time transfer of funds from the customer to the merchant is made; for instance, this option can be used for payment for an item of goods.
- *Authorization hold.*, Dashboard,When authorization hold is performed, in terms of one Payment Widget session the payment amount is deducted from the customer's account, and after that the merchant can either charge the held amount or, alternatively, release the funds (using Gateor automatically after a specific time lag). For instance, this option is relevant when the customer books a hotel or rents a car.
- *COF purchases registration.*When building lasting customer relationships, it can be convenient to be able to process COF purchases without requiring the customer to enter payment information or make any steps at all (for instance, this is relevant for subscription payments). The payment platform supports COF purchases processing, and using Payment Widget the merchant can register all types of COF purchases — regular payments, automatic payments and express payments (OneClick), by specifying correspondent parameters in the request for opening the payment form.
- *Performing payouts.*This option allows transferring funds from the merchant to the customer following the initial registration of a payout via Gate.
- *Payment instrument verification.*(most commonly, payment card)or by authorizing a specific amount (non-zero) on the customer's card or account and then voiding the transfer or the authorizationThis option is designed to verify the payment instrument, for instance, for performing payouts to the customers. In terms of one Payment Widget session the payment instrument is validated by either transferring a dummy (zero) amount from the customer to the merchant.
- *Tokenization.*During tokenization no payment operations, including transfer of dummy amount, are performed, but information about the payment instrument is registered, and a secure identifier (token) for the customer's payment instrument is created. Tokenization is applicable to payment cards and serves for saving customer's payment information, for instance, during customer's registration on the web service, and then using this payment information for facilitated processing of payments.

## Support for different data input options

andselecting payment methodentering payment informationPayment Widget supports various ways of.

*Payment method*can be selected as follows:

*Payment information*can be entered as follows:

*Payment Widget supports moto paymentsthe data is entered by merchant's employee*Along with these options that require the customer to complete the fields,which mean that. The type of the order (Mail Order/Telephone Order) is specified in the request for opening the payment form and affects the scenario of using the payment form.

## Support for additional features

select payment method,In addition to basic scenarios (with each of them containing an option toenter payment information and perform other necessary steps), Payment Widget also supports the following features:

All these features are enabled and configured in cooperation with the Platform technical support by agreement with Platform Key Account Manager, which makes it possible to find and implement the best solution for every particular case.

- *Currency selection by the customer.*In this case the customer can select one of the currencies available on the payment form for processing the payment. If needed, currency conversion is performed on the side of the payment platform in accordance with the current exchange rate.
- *Collection of additional information about the customer.*Additional fields can be placed on the payment form in order to collect additional information about the customer, for instance, their address, telephone number and date of birth. The fields can be selected out of those available in the payment platform and can be marked as mandatory and optional for the customer to complete.
- *Additional attempts to enter payment information.*a different orAfter that, if the customer agrees to repeat the attempt, the customer can selectthe same payment method with no need to enter the data that was filled in during the previous attempt.If this option is used, in case of an error while performing required action the customer gets an error message (for instance, indicating insufficient funds) and has an option to repeat the attempt.
- *Cascading.*providers andproviders andThis feature resembles the option of making additional attempts to enter the payment information: if something goes wrong, the customer can repeat the attempt to process the payment. However, this feature is aimed at preventing errors that occur on the side ofpayment systems and not as a result of incorrect data input. In this case, in accordance with the configurations, additional attempts to process the payment are performed through stand-bypayment systems.
- *Sending notifications to the customer.*`successdecline`This option allows sending notifications about payment processing to the customer's email. It is possible to configure the content and format of the email messages and use different patterns for different types and statuses of the operations (this is especially relevant forandstatuses).

## Support for auxiliary procedures

authentication on the issuer's sideproviding additional payment informationpayment providers andIn some cases payment processing may require auxiliary procedures, such as. Generally, the need for such procedures depends on protocols and rules ofpayment systems, but in some cases merchant's preferences can also be taken into account (these preferences should be discussed with Platform Key Account Manager).

These auxiliary procedures do not require any additional actions on the merchant's side. However, it may be useful to know what features are available and if they require the customer to make any steps.

Payment Widget supports the following auxiliary procedures:

In case of any questions about auxiliary procedures check the corresponding section of documentation or contact the Platform technical support.

- *3‑D Secure authentication.*In terms of 3‑D Secure authentication, either the customer is transferred to the service of the issuer where the customer needs to complete authentication using the code received by SMS or performing other required steps, or loading page is displayed (while issuer confirms authentication with no customer effort required).3‑D Secure (Three-Domain Secure) authentication is applied to card payment processing in order to prevent fraud.
- *Authentication on merchant's request.*3‑D Secure 13‑D SecureIn terms of authentication on merchant's request, an additional page is displayed and the customer needs to enter special verification code received by SMS or in a bank statement; this type of authentication involves a temporary hold of the agreed amount on the customer's account.This type of authentication is supported by some providers and, at merchant's option, can be used to replaceauthentication or in addition to it. For instance, authentication on merchant's request can be appropriate if authentication methods used by the issuer are not secure enough.
- *Address Verification Service check.*To complete AVS check, the customer needs to specify their address and post code.Address Verification Service (AVS) check is aimed at providing additional anti-fraud protection during card payment processing. AVS check consists in matching the address specified by the customer during payment processing with the address specified for the cardholder on the side of the card issuer. Address Verification Service check is mandatory for payments committed in the UK and optional in the USA, Australia, Canada and New Zealand.
- *Providing additional payment information.*When providing additional information is required, corresponding notification and fields to be completed are displayed on the payment form. The fields should be completed on the same page of the payment form, and once they are, the procedure continues in the ordinary way.This procedure allows processing payments when payment system or payment platform require additional data that otherwise is not required. This data may be needed due to particular regional requirements, additional anti-fraud check or other circumstances.

## Support for different ways of displaying information about the result

The information about the payment processing result can be displayed on the payment form as well as in the merchant's web service.

`successdecline`The way of displaying information about the result can be configured by using corresponding parameters in the request for opening the payment form, and for redirecting the customer to the web service, either the default URLs or the URLs specified in the request for opening the payment form can be used. The URLs can be similar or different forandstatuses.

This diversity of options provides the required flexibility and allows showing different final pages for different required actions, regions, groups of customers when it is needed.

- `successdecline`When information is displayed on the payment form, standard final page of the payment form is used with a message saying that the action is completed (status) or declined (status) and a button leading to the web service, if needed.
- When information is displayed in the web service, the final page of the payment form is not used, and the customer is redirected to the merchant's web service to receive information about the result in any format at merchant's option.

## Monitoring payment form usage and required actions result

Payment Widget user experience is monitored primarily by the Platform payment platform; however, it is also possible to monitor user experience on the merchant's side using the following features:

These features allow the merchant to monitor almost all aspects that can be important when the payment form is used.

- *Monitoring the payment form events.*This feature allows to efficiently react to important payment form events on the client side. Thus, the customer can be asked about the reason of closing the payment form or additionally notified about the expiring time lag to enter the payment information. These monitoring options also provide the merchant with a basis for the further analysis of Payment Widget user experience in different user stories.Using Platform JavaScript libraries, the merchant can collect and process information about opening Payment Widget or an error during this step (if an error occurs), about confirmation of the required action by the customer or closing the payment form, and about other payment form events.
- *Time limit for entering payment information.*This feature allows to avoid “freezing” of the opened payment form for a long or indefinite time and controlling delivery of services to the customer (for instance, this may be especially applicable to sale of tickets, goods and other events relevant during specific time).Specific time lag for the customer to enter the payment information can be configured at opening Payment Widget. In this case the timer is displayed on the payment form, and if the customer does not confirm the required action during the configured time lag, an error message is displayed.
- *Result monitoring.**Notifications*that are sent automatically to the specified URLs upon result of performing required actions and contain detailed information about the result. With these notifications automatic monitoring can be handled on the server side.*requests that are sent to the Gate API and Data API*Specialand allow receiving detailed information about specific payments and groups of payments when it is necessary on the web service side.*Features of Dashboard*that allow monitoring and analysing the process by merchant's employees, including specific payments as well as common rates.There are different features that allow the merchant to check the result of interaction process through Payment Widget. These include:

## Support for customisation

The visual appearance of Payment Widget can be flexibly customised. It is possible to customise the following:

Configuration of all these features allows to efficiently incorporate Payment Widget in almost any web service, thus highlighting its unique character.

- *Payment form opening mode.*To configure the mode of opening the payment form, the merchant can either use the pluggable Platform JavaScript library that contains the required methods, or configure required functions in the web service.Payment Widget can be opened by clicking a button or using other interface events.
- *Payment form display mode.*as a separate browser tabas a modal windowas an iframe object embedded into the HTML pageThe merchant can use the most appropriate option for specific type of device and user story by specifying the required option in the request for opening the payment form.Payment Widget can be displayed as follows:
- *Options of redirecting the customer.*perform 3‑D Secure authentication orPerforming required actions sometimes involve redirecting the customer to the third-party services, for instance, in order toconfirm payment processing on the payment system side. To perform redirection to the third-party service, a separate HTML-page (in a current or a new browser tab) or an iframe object embedded into the HTML page can be used. Redirection option is configured by the Platform technical support with consideration to merchant's preferences.
- *Template customisation options.*Standard or customised design of the payment form can be used—depending on the needs and preferences of the merchant. To configure a customised version of the payment form, the merchant can use the Payment Widget Designer. If there are any questions or suggestions regarding customisation that is beyond the scope of the designer, the merchant should contact their Platform account manager.
- *Language configuration of the payment form.*The interface of Payment Widget can be displayed in various languages. The required language can be specified in the request for opening the payment form. If this parameter is not specified, the payment form is displayed in the language selected automatically (by the browser language, by the region, or by default). In addition, it is possible to configure a drop-down list of languages and therefore give the customer an option to select the language of the payment form. This functionality is configured by the Platform technical support.

## Support for UX customisation

Various aspects of the way users interact with Payment Widget can be flexibly customised. It is possible to customise the following:

Configuration of all these features allows to efficiently incorporate Payment Widget in almost any web service, thus highlighting its unique character.

- *Payment form opening mode.*Payment Widget can be opened by clicking a button or using other interface events. To configure the mode of opening the payment form, the merchant can either use the pluggable Platform JavaScript library that contains the required methods, or configure required functions in the web service.
- *Payment form display mode.*as a separate browser tabas a modal windowas an iframe object embedded into the HTML pageThe merchant can use the most appropriate option for specific type of device and user story by specifying the required option in the request for opening the payment form.Payment Widget can be displayed as follows:
- *Options of redirecting the customer.*Performing required actions sometimes involve redirecting the customer to the third-party services, for instance, in order to perform 3‑D Secure authentication or confirm payment processing on the payment system side. To perform redirection to the third-party service, a separate HTML-page (in a current or a new browser tab) or an iframe object embedded into the HTML page can be used. Redirection option is configured by the Platform technical support with consideration to merchant's preferences.
- *Language configuration of the payment form.*The interface of Payment Widget can be displayed in various languages. The required language can be specified in the request for opening the payment form. If this parameter is not specified, the payment form is displayed in the language selected automatically (by the browser language, by the region, or by default). In addition, it is possible to configure a drop-down list of languages and therefore give the customer an option to select the language of the payment form. This functionality is configured by the Platform technical support.
