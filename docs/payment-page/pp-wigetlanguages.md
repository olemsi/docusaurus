# Interface language support

## Overview

The Payment Widget text elements—various names (including names of fields and other), hints and messages (including error messages)—are the integral part of the payment form. These elements make the interface complete and clear and can have a significant impact on the user experience and the payment form conversion.

## Capabilities

basic setIn order to ensure the effectiveness of the Payment Widget texts, the Platform specialists work thoroughly on the content localisation and provide the capability of using any of the Payment Widget languages from the regularly expanded. Along with that, due to different business nuances and for a better adaptation of Payment Widget to a specific project, the following capabilities are available for merchants:

In addition to the described capabilities, it can be relevant to change the payment form design using the corresponding design builder., as in the case with design customisation,the chosen website colour palette,At the same time, it is important to understand thatwith the new languages or customised text elements added to the payment form, the responsibility for their correctness and potential negative effect on the conversion rate is placed on the merchant. For example, it can lead to customer inconvenience due totext elements that are not well-articulated enough, inability to select the language the customer actually needs, and other related issues. Therefore, any changes should be accurately prepared and analysed and, if necessary, reverted to the tested basic options.

- Expanding the basic set of languagesexpanding the working language set—for example, by adding the Welsh and Scottish languages and using them along with English (from the basic set of languages) for targeting the corresponding regions of the UK (for more information, see);
- Customising text elementscustomising text elements using the languages from the basic set—for example, adjusting the standard German language to Low German since this dialect is used in the web service  (for more information, see);
- (or a customised text variant in one of the languages)Specifying a language when opening the payment formspecifying the necessary languagewhen opening the payment form—for example, depending on the language selected by the customer in the web service (for more information, see);
- Enabling customers to change the languageenabling customers to change the language on the payment form—for example, when the merchant is unsure of the customer preferences but knows what languages are relevant for the targeted region (for more information, see).

## Workflow

By default, unless otherwise specified in the project parameters, when the payment form opens the customer cannot change the language of its interface. Along with that, the form is displayed in one of the following languages (the options are provided in order of priority):

1. detailsThe language of the payment form interface that was specified in the request for opening the form ()—this language is used if it is supported for the project in use.
2. The customer’s browser language—this language is used if it has been identified and is supported for the project in use.
3. The language of the region where the payment form is opened—this language is used if it has been identified by the customer’s IP address and is supported for the project in use.
4. The language used by default (in most cases, it is English).

## Expanding the basic set of languages

To add new languages to the basic set, the merchant should do the following:

1. Contact the technical support specialists in order to obtain the texts of the payment form elements used within the projects for which the new languages should be added.
2. [ISO 639-1](https://www.iso.org/iso-639-language-codes.html)In appropriate cases, this step also includes finalising the use of the language names (for displaying the names on the payment form) and their corresponding codes (for using the codes in requests). If the languages are covered by thestandard, their names and codes within the payment platform are given in the alpha-2 format of this standard, in other cases, the formats of the language names and codes are coordinated with the merchant.Prepare the texts translated into the necessary languages and provide them to the technical support specialists to have the texts embedded into Payment Widget.
3. Receive the notification about the newly added languages and accept the result. It is also possible to check whether the text elements are displayed correctly on the payment form with the new languages applied in the test project.

## Customising text elements

For Payment Widget localisation better suited for the requirements of your project, it is possible to replace the payment form basic text elements by the customised ones.

The procedure of adding customised text elements is similar to the procedure of expanding the set of languages:

Along with that, if relevant, it is possible to distinguish customer audiences for setting up different variants of the payment form: for example, the payment form with the basic text elements can be displayed to one group of customers, while the payment form with the customised text elements can be displayed to the other group. Hence it is important to establish what customised elements and in what situations are required on the side of the web service and then make sure their display is supported on the side of the payment platform. For this, terminals are implemented. Terminals are logical nodes that contain a set of parameters, including different versions of the text elements, for displaying Payment Widget and that allow displaying variants of the payment form even within the same project.

`terminal_id`The procedure of adding text elements in such cases corresponds to the one given above, with the following additional information: the second step includes coordinating the customised text elements for particular groups of customers with the technical support specialists within a single project, and the third step includes receiving the identifier of the created terminal (one or more, depending on the specific case). In order to open the payment form with the customised text elements of a particular terminal, the requests should contain the terminal identifier passed in theparameter.

1. Decide on the projects and languages for which the customised text elements should be used and contact the technical support specialists in order to obtain the basic texts of the payment form elements in the chosen languages.
2. Provide the technical support specialists with the ready-to-use texts in all the requested languages to have the texts embedded into Payment Widget.
3. Receive the notification that the customisation has been completed and accept the result. You may check the way the customised text is displayed on the payment form in the test project at this stage.

## Specifying a language when opening the payment form

`language_code`[ISO 639-1](https://www.iso.org/iso-639-language-codes.html)In order to localise the payment form for a particular session, submit the request for opening the payment form with the code of this language specified in theparameter. Within the payment platform, the codes are passed in the alpha-2 format of thestandard, the codes of the languages that are not covered by the standard are coordinated with the merchant. It should be noted that the language set for invoking the form will also be used to generate additional notifications regarding events related to the payment (if this functionality is enabled in the project settings; see this article)

With this capability, the language of the payment form is strictly the one specified in the request. This results in the following aspects:

- If the code in the request identifies a language beyond the working set of languages that are available in the project, the language of the payment form is set to English.
- If the project has the capability of changing the language on the customer side set up, but the specified language is beyond the list of languages available for selection, the payment form is displayed in the specified language, and changing the language for this session is not supported.

```json
{
   "project_id": 93211,
   "payment_id": "423289",
   "payment_currency": "EUR",
   "payment_amount": 131970,
   "customer_id": "customer_772",
   "language_code": "de",    // language code
   "signature": "TSzdE5rJZaA9TYAWEKoGpfXriFf82MxF..."
}
```

## Enabling customers to change the language

When using the standard design provided by Platform, merchants can configure the capability of changing the language on the customer side. With this functionality, the payment form pages are supplemented by a drop-down list with the names of the available languages for the customer to select the preferred one.

When using the capability of changing the language, consider the following aspects:

For setting up the functionality of changing the language on the customer side, the merchant should do the following:

- If the language of the browser's interface is available in the drop-down list on the payment form, the Payment Widget is displayed in this language (unless a different language is specified in the request).
- If the language specified in the request is not among the languages available for changing in the drop-down list, the payment form is displayed in this language and without the drop-down list.
- When the customer changes the language, they are redirected to the page that is initial within the current payment form session, while all the previous actions are ignored.

1. Create the list of languages that should be available to the customers in the drop-down list and provide the list to the technical support specialists for embedding it into Payment Widget. The list should always include English; any other languages can be selected from the working set at the merchant's choice.
2. Receive the notification about the configured functionality and accept the result. It is also possible to test the functionality of changing the languages in the test project.

## Basic set of languages

Platform supports displaying the payment form in the following languages.

| Language | Language code |
| --- | --- |
| English | `en` |
| Estonian | `et` |
| French | `fr` |
| German | `de` |
| Italian | `it` |
| Latvian | `lv` |
| Lithuanian | `lt` |
| Portuguese | `pt` |
| Russian | `ru` |
| Spanish | `es` |
| Ukrainian | `uk` |

| Language | Language code |
| --- | --- |
| Arabic | ar |
| Bulgarian | bg |
| Chinese | zh |
| Chinese (traditional script) | zh-hant |
| English | en |
| French | fr |
| German | de |
| Greek | el |
| Hindi | hi |
| Indonesian | id |
| Italian | it |
| Japanese | ja |
| Kazakh | kk |
| Korean | ko |
| Latvian | lv |
| Lithuanian | lt |
| Malay | ms |
| Polish | pl |
| Portuguese | pt |
| Russian | ru |
| Spanish | es |
| Thai | th |
| Turkish | tr |
| Vietnamese | vi |
