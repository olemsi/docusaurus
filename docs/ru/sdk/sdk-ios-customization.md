# Индивидуальный дизайн

Светлая тема платежной формыТемная тема платежной формыиспользовать светлую или темную тему,настраивать оформление отдельных элементов,Дизайн платежной формы sdk_ios можно менять:

**Использование темы**

Swiftlet theme = sdk_ios_theme.getDarkTheme()
sdk_ios_sdk_small.setTheme(theme: theme)Objective-Csdk_ios_theme *theme = [sdk_ios_theme getDarkTheme];
[self.sdk_ios_import setTheme:theme];sdk_ios позволяет использовать две темы платежной формы: светлую (по умолчанию) и темную. Для смены темы необходимо установить:

**Настройка оформления отдельных элементов**

Swifttheme.backgroundColor = UIColor.green
theme.showDarkKeyboard = trueObjective-Ctheme.backgroundColor = UIColor.greenColor;
theme.showDarkKeyboard = true;Также можно настраивать цветовое оформление отдельных элементов. Например, для использования зеленого цвета фона и темной виртуальной клавиатуры, необходимо задать:

`overlayColor`— цвет затемнения открытой области платежной формы,`backgroundColor`— цвет фона платежной формы,`headingTextColor`— цвет текста заголовка,`menuTextColor`— цвет текста кнопок в заголовке модального окна,`fieldTextColor`названий платежных методов,— цвет текста дополнительных полей,данных на странице с информацией о результате проведения платежа,`supportiveTextColor`— цвет вспомогательного текста,`fieldPlaceholderTextColor`— цвет заполнителей полей,`fieldImageTintColor`— цвет иконок в полях ввода при оплате новой картой и в поле CVV,`fieldTextCorrectColor`— цвет текста при успешной проверке заполнения полей,`fieldTextWrongColor`— цвет текста при неуспешной проверке заполнения полей,`fieldBackgroundColor`— цвет кнопок платежных систем и поля CVV,`primaryTintColor`— основной цвет кнопок и иконок платежной формы,`secondaryTintColor`— вспомогательный цвет платежной формы,`lineColor`— цвет линий полей на странице оплаты новой картой,`actionButtonDisableBackgroundColor`— цвет заблокированной кнопки,`actionButtonDisableTextColor`— цвет текста на заблокированной кнопке,`actionButtonTextColor`— цвет текста на активной кнопке,`showShadow`кнопок платежных методов иплатежных методовкарты— включение тенисохраненных карт на странице выбора,`showDarkKeyboard`— использование темной темы клавиатуры,`showDarkNavigationBar`— использование темной темы панели навигации,`showLightLogo`— включение светлых логотипов при использовании темной темы.Оформление платежной формы можно настраивать с помощью следующих параметров:
