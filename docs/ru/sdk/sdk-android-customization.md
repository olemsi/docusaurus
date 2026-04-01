# Индивидуальный дизайн

Светлая тема платежной формыТемная тема платежной формыиспользовать светлую или темную тему,настраивать оформление отдельных элементов.Дизайн платежной формы sdk_android можно менять:

**Использование темы**

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
 )sdk_android позволяет использовать две темы платежной формы: светлую (по умолчанию) и темную. Для смены темы необходимо установить:

**Настройка оформления отдельных элементов**

Javatheme.fullScreenBackgroundColor = Color.GREEN;
theme.showShadow = false;Kotlintheme.fullScreenBackgroundColor = Color.GREEN
theme.showShadow = falseТакже можно настраивать цветовое оформление отдельных элементов. Например:

`overlayColor`— цвет затемнения открытой области платежной формы,`statusBarColor`— цвет строки состояния,`modalBackgroundColor`— цвет фона модального окна,`fullScreenBackgroundColor`— цвет фона платежной формы в полноэкранном режиме,`headingTextColor`— цвет текста заголовка,`menuTextColor`— цвет текста кнопок в заголовке модального окна,`fieldTextColor`названий платежных методов— цвет текста дополнительных полей,и данных на странице с информацией о результате проведения платежа,`fieldPlaceholderTextColor`— цвет заполнителей полей,`fieldImageTintColor`— цвет иконок в полях ввода при оплате новой картой и в поле CVV,`fieldBackgroundColor`— цвет кнопок платежных систем и поля CVV,`fieldUnderlineSelectedColor`— цвет нижней линии полей ввода при выборе поля в фокус,`fieldUnderlineDefaultColor`— цвет нижней линии полей ввода по умолчанию,`fieldUnderlineErrorColor`— цвет нижней линии полей ввода при неуспешной проверке заполненного поля,`navigationBarItemsColor`— цвет кнопок панели навигации,`navigationBarColor`— цвет панели навигации,`primaryTintColor`— основной цвет кнопок и иконок платежной формы,`secondaryTintColor`— вспомогательный цвет платежной формы,`actionButtonDisableBackgroundColor`— цвет заблокированной кнопки,`actionButtonDisableTextColor`— цвет текста на заблокированной кнопке,`actionButtonTextColor`— цвет текста на активной кнопке,`supportiveTextColor`— цвет вспомогательного текста,`secureKeyboardTextColor`— цвет цифр экранной клавиатуры,`showShadow`кнопок платежных методов иплатежных методов— включение тенисохраненных карт на странице выбора,`showLightLogo`— включение светлых логотипов при использовании темной темы.Оформление платежной формы можно настраивать с помощью следующих параметров:
