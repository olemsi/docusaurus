# Сбор данных о пользователе

ru_pp_gathering_customer_data.ditaДля проведения платежа с использованием платежной формы обычно требуется минимальный набор параметров, при этом для сбора данных о пользователях можно передавать и (или) запрашивать дополнительные данные, например, телефон или электронную почту пользователя. Подробнее —.

*передачи*`paymentInfo`JavapaymentInfo.sdk_android_set_additional_fields(new sdk_android_additional_field[]{
     new sdk_android_additional_field(sdk_android_additional_field.AdditionalFieldType.customer_first_name, "Mark"),
     new sdk_android_additional_field(sdk_android_additional_field.AdditionalFieldType.billing_country, "US"),
     sdk_android_additional_field(aps_account_number, ""),
     sdk_android_additional_field(aps_account_security_code, "")
     .....
});KotlinpaymentInfo.sdk_android_additional_fields = arrayOf(sdk_android_additional_field(
             sdk_android_additional_field.AdditionalFieldType.customer_first_name, "Mark"),
             sdk_android_additional_field(sdk_android_additional_field.AdditionalFieldType.billing_country, "US"),
             sdk_android_additional_field(aps_account_number, ""),
             sdk_android_additional_field(aps_account_security_code, "")
             .....
)Длядополнительных данных о пользователе в объектенеобходимо задать список дополнительных параметров и их значение. В этом случае переданные данные отображаются на платежной форме в соответствующих полях.
