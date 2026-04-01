# Customization

Light theme of the payment formDark theme of the payment formuse pre-defined themes (light and dark)set the custom value to any available settingYou may change design of the sdk_android payment form:

**Using pre-defined themes**

sdk_android allows you to choose between two pre-defined themes (light and dark) of payment form. By default sdk_android uses light theme.

Javasdk_android_theme theme = sdk_android_theme.getDarkTheme();
startActivityForResult(sdk_android_activity.buildIntent(this,
               paymentInfo,
               theme),
               PAY_ACTIVITY_REQUEST);Kotlinval theme = sdk_android_theme.getDarkTheme()
startActivityForResult(
   sdk_android_activity.buildIntent(
               this,
               paymentInfo,
               theme
    ),
    PAY_ACTIVITY_REQUEST
 )To set a dark theme:

**Changing settings**

Javatheme.fullScreenBackgroundColor = Color.GREEN;
theme.showShadow = false;Kotlintheme.fullScreenBackgroundColor = Color.GREEN
theme.showShadow = falseAlso you can set the custom value to any available setting. For example, set:

`overlayColor`—the color of the overlay`statusBarColor`—the color of the status bar`modalBackgroundColor`— the color of the modal window`fullScreenBackgroundColor`—the color of the payment form background in full-screen mode`headingTextColor`— the color of the heading`menuTextColor`—the color of the text on the buttons in the modal window header`fieldTextColor`payment methods names,— the color of the text of the additional fields,text on the page with information about the result`fieldPlaceholderTextColor`—the color of the placeholder texts`fieldImageTintColor`—the color of the icons of the CVV field and payment data fields for payment with a new card`fieldBackgroundColor`—the color of the buttons of the payment systems and CVV field`fieldUnderlineSelectedColor`—the color of the underline when the field is selected`fieldUnderlineDefaultColor`—the color of the underline by default`fieldUnderlineErrorColor`—the color of the underline when validation of the completed field fails`navigationBarItemsColor`—the color of the navigation bar items`navigationBarColor`—the color of the navigation bar`primaryTintColor`—the main color of the buttons and icons of the payment form`secondaryTintColor`—the secondary color of the payment form`actionButtonDisableBackgroundColor`—the color of the disabled action button`actionButtonDisableTextColor`—the color of the text on the disabled action button`actionButtonTextColor`—the color of the text on the action button`supportiveTextColor`—the color of the secondary text`secureKeyboardTextColor`—the color of the symbols of the onscreen keyboard`showShadow`payment methods andpayment method—enables shadow forsaved cards on the page ofselection`showLightLogo`—enables light logos when using dark themeThe list of available settings:
