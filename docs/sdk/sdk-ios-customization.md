# Customization

Light theme of the payment formDark theme of the payment formuse pre-defined themes (light and dark)set the custom value to any available settingYou may change design of the sdk_ios payment form:

**Using pre-defined themes**

sdk_ios allows you to choose between two pre-defined themes (light and dark) of payment form. By default sdk_ios uses light theme.

Swiftlet theme = sdk_ios_theme.getDarkTheme()
sdk_ios_sdk_small.setTheme(theme: theme)Objective-Csdk_ios_theme *theme = [sdk_ios_theme getDarkTheme];
[self.sdk_ios_import setTheme:theme];To set a dark theme:

**Changing settings**

Swifttheme.backgroundColor = UIColor.green
theme.showDarkKeyboard = trueObjective-Ctheme.backgroundColor = UIColor.greenColor;
theme.showDarkKeyboard = true;Also you can set the custom value to any available setting. For example, for green background color and dark virtual keyboard, set:

`overlayColor`—the color of the overlay`backgroundColor`—the color of the background of the payment form`headingTextColor`—the color of the heading`menuTextColor`—the text color of the buttons in the heading of the modal window`fieldTextColor`payment methods names,—the text color of additional fields,text on the page with information about the result`supportiveTextColor`—the color of the additional text`fieldPlaceholderTextColor`—the color of the placeholder texts`fieldImageTintColor`—the color of the icons of the CVV field and payment data fields for payment with a new card`fieldTextCorrectColor`—the color of the text if validation of the completed field is successful`fieldTextWrongColor`—the color of the text if validation of the completed field fails`fieldBackgroundColor`—the color of the buttons of payment systems and CVV field`primaryTintColor`—the main color of buttons and icons of the payment form,`secondaryTintColor`—the secondary color of the payment form,`lineColor`—the color of the field borders on the page with fields for payment with a new card`actionButtonDisableBackgroundColor`—the color of the disabled action button`actionButtonDisableTextColor`— the color of the text on the disabled action button`actionButtonTextColor`—the color of the text on the action button`showShadow`payment methods andpayment method—enables shadow forsaved cards on the page ofselection`showDarkKeyboard`—enables dark theme for the keyboard`showDarkNavigationBar`—enables dark theme for the navigation bar`showLightLogo`—enables light logos when using dark themeThe list of available setting:
