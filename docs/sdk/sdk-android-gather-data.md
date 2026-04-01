# Gathering customer data

en_pp_gathering_customer_data.ditaUsually payment form requires a minimum set of data to complete the request for payment. However, in order to gather more extensive data and statistics about customers you can send and/or request additional data about your customers, such as customer phone number or email. For more information, see.

`paymentInfo`JavapaymentInfo.sdk_android_set_additional_fields(new sdk_android_additional_field[]{
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
)To pass additional information, set them in theobject:
