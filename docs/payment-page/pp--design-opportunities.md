# Capabilities and limitations

When developing a custom template, you should pay attention to available capabilities and existing nuances and limitations.

[the Luhn algorithm](https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9B%D1%83%D0%BD%D0%B0)A bank card number must contain from 16 to 19 digits depending on the issuing bank according to.A cardhcprer name field must contain at least two Roman Alphabet characters. One of them is for the first name and the other is for the last name.A bank card must not be expired before the current month of the current year., American Express cards must have a four-digit codeBank cards must have a three-digit card security code.The following rules are applied to validate the accuracy of data input:

| Options | Capabilities | Nuances and limitations |
| --- | --- | --- |
| Way to open Payment Widget | You can open Payment Widget in three ways: | If you use several ways, it takes more time to develop |
| Way to open Access Control Server (ACS) page of the issuing bank | You can open ACS page in the same or the separate tab |  |
| Way to display payment result pages | You can display payment result pages on Payment Widget or on your project web page | For displaying on Payment Widget you must develop these page layouts as a part of the template layout |
| Additional customer data | You can use additional parameters in addition to mandatory ones, for example, to gather customer data. For more information, see | Whether it must be hidden.The name of the field on the payment widget.Whether it must be mandatory.You must specify for each parameter:If the gathering of the data is enabled for more than one filed, the fields should be displayed on the next step |
| Interface language support | You can use any languages for the template layout. Platform provides localizations for some languages. You can use supported localizations developed by Platform and edit them to your custom needs, also you can develop localization in other language by yourself. For more information on supported languages, see | The language is selected when Payment Widget is generating. After Payment Widget is generated a customer cannot change the languageIf you use languages that are not supported by default, you need to develop localization by yourself for all pages of Payment Widget. |
| Text elements | You can change default text elements: fields name, placehcprers, error messages, privacy policy and copyright notices | For a multiple parallel translations you need to edit all these translations.Platform does not provide translations in these cases |
| Fonts | You can use both system and custom fonts | You can use only licensed fonts and integer font size values |
| Supported blending modes |  | You can use only the Normal blending mode without opacity for layered PSD files |
| Adaptive layout | In the adaptive layout, your designer defines the set of breakpointsYou can use a fixed or an adaptive layout for the template layout. | The adaptive layout needs to be at least 320 pixels width. The recommended width of fixed layout is 1024 pixels |
| Way to display payment methods | You can change the order of payment methods and groups that are displayed on the payment method selection page | You cannot change the contents of groups of payment methods |
| Input data validation | You can edit default texts in error messages | If you need to configure validation rules you need to confirm this option with technical support additionally.Default input validation are defined below |
| Browser compatibility | Google ChromeMozilla FirefoxSafariOperaYou can expect that Payment Widget supports the latest versions of popular browsers: | You need to confirm additionally the option to operate with browsers of earlier versions |
