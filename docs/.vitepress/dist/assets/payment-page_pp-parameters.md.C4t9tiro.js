import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Parameters for opening the payment form","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-parameters.md","filePath":"payment-page/pp-parameters.md"}');
const _sfc_main = { name: "payment-page/pp-parameters.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="parameters-for-opening-the-payment-form" tabindex="-1">Parameters for opening the payment form <a class="header-anchor" href="#parameters-for-opening-the-payment-form" aria-label="Permalink to &quot;Parameters for opening the payment form&quot;">​</a></h1><p>This article describes parameters used to open Payment Widget, including basic information about them and links to related articles, which contain descriptions of the parameters&#39; functionality and set out possible scenarios for their use.</p><p><em>not</em><code>payment_amountpayment_currencypayment_id</code>intended to process payments. In the Card Tokenize mode, the following parameters arerequired:,,Parameters marked in this list as required must be included in all Payment Widget calls.</p><p>Moreover, the inclusion of some parameters is recommended in order to avoid the customer being subjected to the 3‑D Secure authentication procedure (i.e., undergo authentication via the frictionless flow instead of the challenge flow; details) and having to provide additional payment information, as well as for other improvements to custom scenarios and the general functionality of the payment formParameters marked in this list as optional can be used as additional parameters for specific projects and payment methods..</p><p>If you have any additional questions about whether specific parameters are required or recommended for different individual use cases, consult the existing documentation and the Platform technical support specialists.</p><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>account_token</code>string, optional</td><td>Payment instrument token.Consists of an identifier obtained for a specific payment instrument from the payment platform when data for that instrument is saved. Can be used to perform payments using that saved data (i.e., when making a purchase).<code>42ab631449a78914502803aed8a0e5a728d558035d29a56f4dcc136c6bfc3021</code>Example:</td></tr><tr><td><code>addendum_data</code>string, optional</td><td>Booking itinerary information.Consists of a string obtained by encoding a JSON object using the Base64 encoding scheme.Can be used in requests to process payments for services of companies in the travel industry, to make payments more secure and allow for more competitive payment processing rates (see ). Subject to regulations of the Mastercard and Visa global card schemes.Example of a JSON objectExample of the resulting string</td></tr><tr><td><code>avs_post_code</code>string, optional</td><td>The postal code of the customer to be used in the Address Verification Service check.<code>WS13 6LG</code>Example:</td></tr><tr><td><code>avs_street_address</code>string, optional</td><td>The address of the customer to be used in the Address Verification Service check.Consists of a house number and a street name.<code>4 Breadmarket Street</code>Example:</td></tr><tr><td><code>baseUrl</code>string, optional</td><td>The base URL used to open the payment form.Must be specified when a root address different from the default one (<a href="https://paymentpage.platform.dev" target="_blank" rel="noreferrer">https://paymentpage.platform.dev</a>) has been approved by the Platform account manager, in cases where the address needs to be provided explicitly.<code>https://cosmopage.site.com</code>Example:</td></tr><tr><td><code>best_before</code>string, optional</td><td>The date and time in the specified timezone until which the customer is able to use the payment form to confirm their targeted action (see this article).``±<code>YYYY-MM-DDThh:mm:sshh</code>±<code>YYYY-MM-DDThh:mm:sshh:mm</code>Should be specified as follows:or. The time allocated for working with the form cannot exceed 30 days from the moment when the request for opening Payment Widget was sent.<code>2024-04-26T13:50:37+00</code>Example:</td></tr><tr><td><code>billing_address</code>string, optional</td><td>The house number (including any additional parts of the address such as building indicators and apartment numbers) and the name of the street in the customer&#39;s billing address.When the parameter is passed for card payments, data contained in this parameter may serve to improve the probability of a successful 3‑D Secure authentication without any further input from the customer (i.e., authentication via the frictionless flow instead of the challenge flow; details).<code>33 Store Street</code>Example:</td></tr><tr><td><code>billing_city</code>string, optional</td><td>The name of the city in the customer&#39;s billing address.When the parameter is passed for card payments, data contained in this parameter may serve to improve the probability of a successful 3‑D Secure authentication without any further input from the customer (i.e., authentication via the frictionless flow instead of the challenge flow; details).<code>London</code>Example:</td></tr><tr><td><code>billing_country</code>string, optional</td><td>The country code in the customer&#39;s billing address.Specified in the ISO 3166-1 alpha-2 format. When the parameter is passed for card payments, data contained in this parameter may serve to improve the probability of a successful 3‑D Secure authentication without any further input from the customer (i.e., authentication via the frictionless flow instead of the challenge flow; details).<code>GB</code>Example:</td></tr><tr><td><code>billing_postal</code>string, optional</td><td>The postal code in the customer&#39;s billing address.When the parameter is passed for card payments, data contained in this parameter may serve to improve the probability of a successful 3‑D Secure authentication without any further input from the customer (i.e., authentication via the frictionless flow instead of the challenge flow; details).<code>BR1 1AA</code>Example:</td></tr><tr><td><code>billing_region</code>string, optional</td><td>The name of the region (i.e., state, province, or other administrative division type) in the customer&#39;s billing address.When the parameter is passed for card payments, data contained in this parameter may serve to improve the probability of a successful 3‑D Secure authentication without any further input from the customer (i.e., authentication via the frictionless flow instead of the challenge flow; details).<code>Greater London</code>Example:</td></tr><tr><td><code>billing_region_code</code>string, optional</td><td><code>billing_country</code>When the parameter is passed for card payments, data contained in this parameter may serve to improve the probability of a successful 3‑D Secure authentication without any further input from the customer (i.e., authentication via the frictionless flow instead of the challenge flow; details).The recipient&#39;s country subdivision code (state, province, region, or territory). The value of this parameter is the second element of a code for a subdivision (in ISO 3166-2), without the two-letter country code and the hyphen-minus used as a separator. This parameter should be specified in requests where theparameter is also specified.<code>DOR</code>Example:</td></tr><tr><td><code>booking_info</code>string, optional</td><td>Booking information tracked by the web service.The JSON object can include various combinations of elements from the list of supported data. Can be used to record and track relevant data about payments rendered for services by various organisations (see this article).Consists of a string obtained by encoding a JSON object using the Base64 encoding scheme.Supported data<code>bookers``first_name</code>, string—the name of the customer provided at the time of booking<code>last_name</code>, string—the last name of the customer provided at the time of booking<code>email</code>, string—the email provided at the time of booking, array—the array with the information about the customers for whom the service is booked. Each element of this array contains:<code>items``description</code>, string—description of the service included in the booking<code>start_date</code>, string—starting date of the service included in the booking<code>end_date</code>, string—ending date of the service included in the booking, array—the array with the information about separate services included in the booking. Each element of this array contains:<code>start_date</code>, string—starting date of the booked service<code>end_date</code>, string—ending date of the booked service<code>description</code>, string—a free-form description of the booked service<code>total</code>, integer—the total cost of the booking<code>pax</code>, integer—the number of people per booking<code>reference</code>, string—the booking reference, which can be the URL, the name of the booked service, or its code in the merchant web service<code>id</code>, string—the identifier of the booking, unique in the merchant web serviceExample of a JSON object&quot;booking_info&quot;: { &quot;firstname&quot;: &quot;William&quot;, &quot;surname&quot;: &quot;Herschel&quot;, &quot;email&quot;: &quot;<a href="mailto:rsfellow@mail.com" target="_blank" rel="noreferrer">rsfellow@mail.com</a>&quot;, &quot;start_date&quot;: &quot;12-08-2026&quot;, &quot;end_date&quot;: &quot;13-08-2026&quot;, &quot;description&quot;: &quot;Sideris music festival full pass&quot;, &quot;total&quot;: 200000, &quot;pax&quot;: 4, &quot;reference&quot;: &quot;musicfestlink&quot;, &quot;id&quot;: &quot;83&quot; }&quot;booking_info&quot;: { &quot;start_date&quot;: &quot;12-08-2026&quot;, &quot;end_date&quot;: &quot;14-08-2026&quot;, &quot;description&quot;: &quot;Sideris music festival full pass&quot;, &quot;total&quot;: 200000, &quot;pax&quot;: 2, &quot;bookers&quot;: [ { &quot;first_name&quot;: &quot;William&quot;, &quot;last_name&quot;: &quot;Herschel&quot;, &quot;email&quot;: &quot;<a href="mailto:rsfellow@mail.com" target="_blank" rel="noreferrer">rsfellow@mail.com</a>&quot; }, { &quot;first_name&quot;: &quot;Caroline&quot;, &quot;last_name&quot;: &quot;Herschel&quot;, &quot;email&quot;: &quot;<a href="mailto:salariedastronomer@mail.com" target="_blank" rel="noreferrer">salariedastronomer@mail.com</a>&quot; } ], &quot;items&quot;:[ { &quot;description&quot;: &quot;VIP Arrival&quot;, &quot;start_date&quot;: &quot;12-08-2026&quot;, &quot;end_date&quot;: &quot;12-08-2026&quot; }, { &quot;description&quot;: &quot;Hotel&quot;, &quot;start_date&quot;: &quot;12-08-2026&quot;, &quot;end_date&quot;: &quot;14-08-2026&quot; }, { &quot;description&quot;: &quot;Concerts&quot;, &quot;start_date&quot;: &quot;12-08-2026&quot;, &quot;end_date&quot;: &quot;14-08-2026&quot; }, { &quot;description&quot;: &quot;VIP Departure&quot;, &quot;start_date&quot;: &quot;14-08-2026&quot;, &quot;end_date&quot;: &quot;14-08-2026&quot; } ], &quot;reference&quot;: &quot;musicfestlink&quot;, &quot;id&quot;: &quot;83&quot; }Example of the resulting stringewogICAgImZpcnN0bmFtZSI6ICJXaWxsaWFtIiwKICAgICJzdXJuYW1lIjogIkhlcnNjaGVsIiwKICAgICJlbWFpbCI6ICJyc2ZlbGxvd0BtYWlsLmNvbSIsCiAgICAic3RhcnRfZGF0ZSI6ICIxMi0wOC0yMDI2IiwKICAgICJlbmRfZGF0ZSI6ICIxMy0wOC0yMDI2IiwKICAgICJkZXNjcmlwdGlvbiI6ICJTaWRlcmlzIG11c2ljIGZlc3RpdmFsIGZ1bGwgcGFzcyIsCiAgICAidG90YWwiOiAyMDAwMDAsCiAgICAicGF4IjogNCwKICAgICJyZWZlcmVuY2UiOiAibXVzaWNmZXN0bGluayIsCiAgICAiaWQiOiAiODMiCn0=ewogICJzdGFydF9kYXRlIjogIjEyLTA4LTIwMjYiLAogICJlbmRfZGF0ZSI6ICIxNC0wOC0yMDI2IiwKICAiZGVzY3JpcHRpb24iOiAiU2lkZXJpcyBtdXNpYyBmZXN0aXZhbCBmdWxsIHBhc3MiLAogICJ0b3RhbCI6IDIwMDAwMCwKICAicGF4IjogMiwKICAiYm9va2VycyI6IFsKICAgICB7CiAgICAgICAgImZpcnN0X25hbWUiOiAiV2lsbGlhbSIsCiAgICAgICAgImxhc3RfbmFtZSI6ICJIZXJzY2hlbCIsCiAgICAgICAgImVtYWlsIjogInJzZmVsbG93QG1haWwuY29tIgogICAgIH0sCiAgICAgewogICAgICAgICJmaXJzdF9uYW1lIjogIkNhcm9saW5lIiwKICAgICAgICAibGFzdF9uYW1lIjogIkhlcnNjaGVsIiwKICAgICAgICAiZW1haWwiOiAic2FsYXJpZWRhc3Ryb25vbWVyQG1haWwuY29tIgogICAgIH0KICBdLCAgICAgICAgCiAgIml0ZW1zIjpbCiAgICAgewogICAgICAgICJkZXNjcmlwdGlvbiI6ICJWSVAgQXJyaXZhbCIsCiAgICAgICAgInN0YXJ0X2RhdGUiOiAiMTItMDgtMjAyNiIsCiAgICAgICAgImVuZF9kYXRlIjogIjEyLTA4LTIwMjYiCiAgICAgfSwKICAgICB7CiAgICAgICAgImRlc2NyaXB0aW9uIjogIkhvdGVsIiwKICAgICAgICAic3RhcnRfZGF0ZSI6ICIxMi0wOC0yMDI2IiwKICAgICAgICAiZW5kX2RhdGUiOiAiMTQtMDgtMjAyNiIKICAgICB9LAogICAgIHsKICAgICAgICAiZGVzY3JpcHRpb24iOiAiQ29uY2VydHMiLAogICAgICAgICJzdGFydF9kYXRlIjogIjEyLTA4LTIwMjYiLAogICAgICAgICJlbmRfZGF0ZSI6ICIxNC0wOC0yMDI2IgogICAgIH0sCiAgICAgewogICAgICAgICJkZXNjcmlwdGlvbiI6ICJWSVAgRGVwYXJ0dXJlIiwKICAgICAgICAic3RhcnRfZGF0ZSI6ICIxNC0wOC0yMDI2IiwKICAgICAgICAiZW5kX2RhdGUiOiAiMTQtMDgtMjAyNiIKICAgICB9CiAgXSwKICAicmVmZXJlbmNlIjogIm11c2ljZmVzdGxpbmsiLAogICJpZCI6ICI4MyIKfQ==</td></tr><tr><td><code>card_holder</code>string, optional</td><td>The first and last name of the payment card holder.this articleData specified in this parameter can be used to fill in the corresponding fields on the payment form in advance—this data can then still be edited by the customer—and should be spelled as specified on the card and adhere to the rules for specifying names (see).<code>John Doe</code>Example:</td></tr><tr><td><code>card_operation_type</code>string, optional</td><td>Indicator that specifies whether a purchase made using a payment card is processed in one or two steps.Should be specified in cases where the intended payment type is different from the one specified by default (with regard to the number of steps). Can have one of the following values:Can be used for the 4th generation of Payment Widget or earlier.<code>auth</code>Example:<code>sale</code>—for one-step purchases (with the funds transferred to the merchant immediately; details),<code>auth</code>—for two-step purchases (with the funds transferred to the merchant after first being in an authorisation hold; details).</td></tr><tr><td><code>cash_voucher_data</code>string, optional</td><td>Information about payable line items for generating fiscal receipts.detailsConsists of a string obtained by encoding a JSON object () using the Base64 encoding scheme, in URL-encoded format. Used when the merchant&#39;s business activities are regulated by specific legislation requiring the merchant to retain this information and generate fiscal receipts</td></tr><tr><td><code>checkout_script</code>integer, optional</td><td>Indicator that specifies whether an encryption script is used to encrypt payment card information or not.Should be specified when making payments using a payment card or verifying its validity without specifying a card security code (CVV/CVC/CID; details). Can have one of the following values:<code>merchant.jsfalsetrue</code>If thelibrary is used (details), this parameter can be specified as a boolean value and set to eitheror.<code>1</code>Example:<code>0</code>—do not use the encryption script,<code>1</code>—use the encryption script.</td></tr><tr><td><code>close_on_missclick</code>integer (boolean*), optional</td><td>Indicator that specifies the action to be taken if the customer clicks outside of the borders of a payment form opened in a modal window.Should be specified for calls that make use of a modal window. Can have one of the following values:<code>merchant.jsfalsetrue</code>If thelibrary is used (details), this parameter can be specified as a boolean value and set to eitheror.<code>1</code>Example:<code>0</code>—do not close the payment form (used by default),<code>1</code>—close the form.</td></tr><tr><td><code>css_modal_wrap</code>string, optional</td><td>Indicator for an additional CSS class to wrap the payment form inside of a modal window.Should be specified for calls that make use of a modal window.<code>CosmoshopModal</code>Example:</td></tr><tr><td><code>customer_address</code>string, optional</td><td>The name of the street and the house number (including any additional parts of the address such as building indicators and apartment numbers) in the customer&#39;s address, separated by a comma.Passing this information, along with other information about the customer, may help avoid having to provide additional information about the payment and simplify user scenarios (see this article).The length of the string cannot be more than 255 characters.<code>Main Street, 12</code>Example:</td></tr><tr><td><code>customer_account_info</code>string, optional</td><td>Information about the customer&#39;s account and contact details obtained by the web service (see this article).The JSON object can include various combinations of elements from the list of supported data.Consists of a string obtained by encoding a JSON object using the Base64 encoding scheme.Supported data<code>address_matchshipping``Y</code>—addresses match<code>N</code>—addresses do not match, string—indicates whether the customer&#39;s billing address matches the address specified in theobject:<code>home_phone</code>, string—the customer&#39;s home phone number, contains between 4 and 24 digits<code>work_phone</code>, string—the customer&#39;s work phone number, contains between 4 and 24 digits<code>account``activity_day</code>, integer—number of payment attempts in the last 24 hours, 3 characters maximum<code>activity_year</code>, integer—number of payment attempts in the last 365 days, 3 characters maximum<code>additional</code>, string—additional information about the customer&#39;s account in free text, for example, its identifier. Can contain up to 64 characters<code>age_indicator``01</code>—guest checkout<code>02</code>—the account was created at the moment of making a payment<code>03</code>—fewer than 30 days<code>04</code>—between 30 and 60 days<code>05</code>—more than 60 days, string—number of days since the customer account was created. Possible values:<code>auth_data</code>, string—additional login information in free text, can contain up to 255 characters<code>auth_method``01</code>—no authentication<code>02</code>—logging in with authentication data kept on file by the merchant<code>03</code>—logging in with the federated identity credentials (for example, Google Account or Facebook ID)<code>04</code>—logging in with the use of FIDO authenticator (Fast Identity Online), string—indicates how the customer was authenticated during their most recent login to the web service. Possible values:<code>auth_timeDD-MM-YYYYhh:mm</code>, string—date and time of the customer&#39;s most recent account login in theformat<code>change_dateDD-MM-YYYY</code>, string—date of the most recent change to the account, except for the password change or password reset, in theformat<code>change_indicator``01</code>—the account was updated on the day when the payment was made<code>02</code>—fewer than 30 days<code>03</code>—between 30 and 60 days<code>04</code>—more than 60 days, string—number of days since the most recent change to the account, except for the password change or password reset. Possible values:<code>dateDD-MM-YYYY</code>, string—the account creation date in theformat<code>pass_change_dateDD-MM-YYYY</code>, string—date of the most recent password change or reset in theformat<code>pass_change_indicator``01</code>—password was not changed or reset<code>02</code>—password was changed or reset on the day when the payment was made<code>03</code>—fewer than 30 days<code>04</code>—between 30 and 60 days<code>05</code>—more than 60 days, string—number of days since the most recent password change or reset. Possible values:<code>payment_age_indicator``01</code>—guest checkout<code>02</code>—card details were saved on the day when the payment was made<code>03</code>—fewer than 30 days<code>04</code>—between 30 and 60 days<code>05</code>—more than 60 days, string—number of days since the payment card details were saved to a customer&#39;s account. Possible values:<code>payment_ageDD-MM-YYYY</code>, string—card record creation date in theformat<code>provision_attempts</code>, integer—number of attempts to save new card details to a customer&#39;s account in the last 24 hours, 3 characters maximum<code>purchase_number</code>, integer— number of purchases made via the customer&#39;s account in the last 6 months, 4 characters maximum<code>suspicious_activity``01</code>—no suspicious activity detected<code>02</code>—suspicious activity detected, string— indicates the presence of suspicious activity. Possible values:, object—the object with the customer&#39;s account information kept on file by the merchant:Example of a JSON objectExample of the resulting string</td></tr><tr><td><code>customer_account_number</code>string, optional</td><td>The identifier assigned to the customer&#39;s account by the payment system.(e.g.,and). Depending on the particular method, may consist of an e-wallet identifier, an email address, a phone number, or a different kind of identifierMay be required when using specific payment methods.<code>example@mail.com</code>Example:</td></tr><tr><td><code>customer_birthplace</code>string, optional</td><td>The name of the customer&#39;s birthplace (e.g., town, city, or other settlement type).Passing this information, along with other information about the customer, may help avoid having to provide additional information about the payment and simplify user scenarios (see this article).The length of the string cannot be more than 255 characters.<code>London</code>Example:</td></tr><tr><td><code>customer_city</code>string, optional</td><td>The name of the place of residence (e.g., town, city, or other settlement type) in the customer&#39;s address.Passing this information, along with other information about the customer, may help avoid having to provide additional information about the payment and simplify user scenarios (see this article).The length of the string cannot be more than 255 characters.<code>London</code>Example:</td></tr><tr><td><code>customer_country</code>string, optional</td><td>The country code in the customer&#39;s address.Passing this information, along with other information about the customer, may help avoid having to provide additional information about the payment and simplify user scenarios (see this article).Specified in ISO 3166-1 alpha-2 format.<code>GB</code>Example:</td></tr><tr><td><code>customer_day_of_birth</code>string, optional</td><td>The date of birth of the customer.<code>DD-MM-YYYY</code>Passing this information, along with other information about the customer, may help avoid having to provide additional information about the payment and simplify user scenarios (see this article).Consists of a string specified informat.<code>12-12-1990</code>Example:</td></tr><tr><td><code>customer_email</code>string, optional</td><td>The email address of the customer.<code>customer_phone</code>Required for purchases made using a payment card if theparameter is not specified and the customer is not provided an opportunity to specify their phone number themselves (see this article).The length of the string cannot be more than 255 characters. The string consists of a local-part and a domain name, separated by the &quot;@&quot; symbol.<code>helen@example.com</code>Example:</td></tr><tr><td><code>customer_first_name</code>string, optional</td><td>The first name of the customer.Passing this information, along with other information about the customer, may help avoid having to provide additional information about the payment and simplify user scenarios (see this article).The length of the string cannot be more than 255 characters.<code>Jane</code>Example:</td></tr><tr><td><code>customer_id</code>string, required</td><td><code>project_id</code>The identifier assigned to the customer within the scope of the project (specified in).Each web service account should be linked to only one identifier and vice versa. This requirement is intended to address various risks and fraudulent operations.<code>customer_112</code>Example:</td></tr><tr><td><code>customer_last_name</code>string, optional</td><td>The last name of the customer.Passing this information, along with other information about the customer, may help avoid having to provide additional information about the payment and simplify user scenarios (see this article).The length of the string cannot be more than 255 characters.<code>Smith</code>Example:</td></tr><tr><td><code>customer_middle_name</code>string, optional</td><td>The middle, second, or patronymic name of the customer.Passing this information, along with other information about the customer, may help avoid having to provide additional information about the payment and simplify user scenarios (see this article).The length of the string cannot be more than 255 characters.<code>Mary</code>Example:</td></tr><tr><td><code>customer_mpi_result</code>string, optional</td><td>Information about the customer&#39;s most recent authentication via the 3‑D Secure protocol.The JSON object can include various combinations of elements from the list of supported data. When passed for card purchases, data contained in this parameter may serve to improve the probability of a successful 3‑D Secure authentication without any further input from the customer (i.e., authentication via the frictionless flow instead of the challenge flow; details).Consists of a string obtained by encoding a JSON object using the Base64 encoding scheme.Supported data<code>mpi_result``acs_operation_idacs_operation_id</code>, string—the identifier that the issuer assigned to the previous operation of the customer and returned in theparameter of the callback with payment processing result. Can contain up to 36 characters.<code>authentication_flowauthentication_flow</code>Possible values:<code>01</code>—frictionless flow<code>02</code>—challenge flow, string—the flow used by the issuer to authenticate the cardholder when processing the previous operation. It is a value of theparameter returned in the callback with payment processing result.<code>authentication_timestampmpi_timestamp</code>, string—date and time of the previous successful customer authentication as returned in theparameter of the callback with payment processing result., object—object that contains information about the previous authentication attempt of the customer:Example of a JSON objectExample of the resulting string</td></tr><tr><td><code>customer_phone</code>string, optional</td><td>The phone number of the customer.Generally, should include the country code; however, some cases do not require a country code to be specified.<code>customer_email</code>Required for purchases made using a payment card if theparameter is not specified and the customer is not provided an opportunity to specify their email address themselves (see this article).Should contain between four and 24 digits. If a particular project and payment method allow for the inclusion of punctuation marks and special characters in the phone number, the parameter can contain such characters in those cases; this is usually specially arranged beforehand.<code>443031237300</code>Example:</td></tr><tr><td><code>customer_security_code</code>string, optional</td><td>The customer&#39;s purchase confirmation code.Some payment methods may require this parameter (depending on the methods themselves).<code>852923</code>Example:</td></tr><tr><td><code>customer_shipping</code>string, optional</td><td>Information about the delivery of a product or a service rendered to the customer.The JSON object can include various combinations of elements from the list of supported data. When passed for card purchases, data contained in this parameter may serve to improve the probability of a successful 3‑D Secure authentication without any further input from the customer (i.e., authentication via the frictionless flow instead of the challenge flow; details).Consists of a string obtained by encoding a JSON object using the Base64 encoding scheme.Supported data<code>shipping``address</code>, string—shipping address, can contain up to 150 characters.<code>address_usageDD-MM-YYYY</code>, string—date when the specified shipping address was used for the first time, in theformat.<code>address_usage_indicator``01</code>—first-time use<code>02</code>—fewer than 30 days<code>03</code>—between 30 and 60 days<code>04</code>—more than 60 days, string—number of days since the specified shipping address was used for the first time. Possible value:<code>city</code>, string—shipping city, can contain up to 50 characters.<code>country</code>, string—shipping country code in the ISO 3166-1 alpha-2 format.<code>delivery_email</code>, string—the email to deliver purchased digital content to if the customer chooses email delivery. Can contain up to 255 characters.<code>delivery_time``01</code>—digital same day delivery<code>02</code>—same day delivery<code>03</code>—next day delivery<code>04</code>—delivery more than one day after the purchase was made, string— delivery time. Possible values:<code>name_indicator``01</code>—names match<code>02</code>—names do not match, string— indicates whether the customer&#39;s name matches the recipient&#39;s name. Possible values:<code>postal</code>, string—shipping postal code, can contain up to 16 characters.<code>region</code>, string—the name of the region (state, province, or other administrative subdivision type) of the shipping address. Can contain up to 255 characters.<code>region_codeDOR``countryshipping</code>If you specify this parameter, you also need to specify and populate theparameter in theobject., string—state, province, or region code in the ISO 3166-2 format, for example,for Dorset.<code>type``01</code>—delivery to the cardholder&#39;s billing address<code>02</code>—delivery to a different verified address<code>03</code>—delivery to the address that is not verified and does not match the billing address<code>04</code>—store delivery<code>05</code>—digital delivery<code>06</code>—no delivery needed (for example, event ticket purchase)<code>07</code>—other, string—delivery option selected by the customer. Possible values:, object—object with shipping details:Example of a JSON objectExample of the resulting string</td></tr><tr><td><code>customer_ssn</code>integer, optional</td><td>The last four digits of the social security number of a US citizen.Passing this information, along with other information about the customer, may help avoid having to provide additional information about the payment and simplify user scenarios (see this article).<code>1984</code>Example:</td></tr><tr><td><code>customer_state</code>string, optional</td><td>The name of the region (state, province, or other administrative subdivision type) of the customer&#39;s address.Passing this information, along with other information about the customer, may help avoid having to provide additional information about the payment and simplify user scenarios (see this article)The length of the string cannot be more than 255 characters..<code>Greater London</code>Example:</td></tr><tr><td><code>customer_street</code>string, optional</td><td>The name of the street in the customer&#39;s address.Passing this information, along with other information about the customer, may help avoid having to provide additional information about the payment and simplify user scenarios (see this article)The length of the string cannot be more than 255 characters..<code>Main</code>Example:</td></tr><tr><td><code>customer_zip</code>string, optional</td><td>The postal or zip code in the customer&#39;s address.Passing this information, along with other information about the customer, may help avoid having to provide additional information about the payment and simplify user scenarios (see this article)The length of the string cannot be more than 10 characters..<code>75001</code>Example:</td></tr><tr><td><code>debt_account</code>string, optional</td><td>The number of the account designated to receive funds as part of debt settlement purchases.This parameter is required for debt settlement purchases (see this article). The length of the string cannot be more than ten characters. Only Latin-script letters and digits are allowed.<code>an9876170i</code>Example:</td></tr><tr><td><code>force_acs_new_window</code>integer (boolean*), optional</td><td>Indicator specifying whether a third-party web service that the customer is redirected to is opened in a new tab or not (see this article).May be required for specific payment methods and can have one of the following values:<code>merchant.jsfalsetrue</code>If thelibrary is used (details), this parameter can be specified as a boolean value and set to eitheror.<code>1</code>Example:<code>0</code>—redirected using the mode specified as the default mode for the payment method,<code>1</code>—redirected in a new tab, ignoring the mode specified as the default mode for the payment method.</td></tr><tr><td><code>force_payment_method</code>string, optional</td><td>The code of the payment method that should be preselected for the payment (see this article).Can have values specified in the payment method code list.<code>paypal-wallet</code>Example:</td></tr><tr><td><code>force_payment_group</code>string, optional</td><td>The code of the payment method group that should be preselected for the payment (see this article).<code>force_payment_method</code>If this parameter is passed, only those payment methods that are part of the corresponding method group and are supported within the project will be available to the customer. However, if this parameter is passed together with theparameter, only the payment method linked to the code specified in that parameter will be preselected in the payment form, while the payment method group code will be ignored.<code>openbanking</code>Currently, this parameter can be used to preselect the Open Banking method group when you work with the 4th generation Payment Widget—to do so, specifyas the value.<code>openbanking</code>Example:</td></tr><tr><td><code>force_payment_method_subtype</code>string, optional</td><td>The code of the payment card brand that should be preselected for the payment (see this aticle).Can have values specified in the payment card code list.<code>mastercard</code>Example:</td></tr><tr><td><code>hide</code>string, optional</td><td>detailsdetailsA single code or a list of codes for payment methods that should be excluded from the payment form for the payment (). If a list of codes is specified, they should be separated by commas.Can have values specified in the payment method code list.<code>, cup-unioncard</code>Example:</td></tr><tr><td><code>identify_doc_number</code>string, optional</td><td>The identifier of the document serving as a proof of identity for the customer.(e.g.,)May be required for specific payment methods and can consist of a personal identity number, a taxpayer number, or other similar identifiers.<code>6543234567</code>Example:</td></tr><tr><td><code>interface_type</code>string, optional</td><td>An identifier for the interface of the payment platform.Using this parameter requires case-by-case coordination with Platform.<code>{&quot;id&quot;:7}</code>Example:</td></tr><tr><td><code>language_code</code>string, optional</td><td>this articleThe code of the language in which the payment form should be displayed (see) and the notifications should be generated (see this article).Can consist of a two-letter ISO 639-1 alpha-2 code (see Language codes) or a code in a different format when this has been arranged prior.<code>de</code>Example:</td></tr><tr><td><code>merchant_callback_url</code>string, optional</td><td>URL for handling request callbacks.this articlethis articleThis parameter should be passed when callbacks for a request need to be sent to an address that is different from that specified by default (for information about callbacks and how to use them, see).<code>https://cosmoshop.earth/specialorder</code>Example:</td></tr><tr><td><code>merchant_data</code>string, optional</td><td>Additional information that needs to be tracked by the web service.<code>&quot;\\</code>The data that is passed in this parameter can vary. However, what data set is passed in this parameter should be communicated to the Platform specialists and configured beforehand to ensure the data is processed and displayed correctly in callbacks and payment information tabs (see this article). In specific cases can contain a JSON object; then, thecharacter (quotation mark, U+0022) needs to be preceded by theescape character (reverse solidus, U+005C) in order to be sent via a POST request. If the JSON object is passed via a GET request, escape characters are not required.Example of a JSON object for a GET request, no escape characters&quot;merchant_data&quot;: &quot;{&quot;items&quot;:[{&quot;sku&quot;:&quot;GM12-CC&quot;, &quot;description&quot;:&quot;10 Copper Coins&quot;,&quot;count&quot;:1}, {&quot;sku&quot;:&quot;GM12-GC&quot;,&quot;description&quot;:&quot;Golden Coin&quot;, &quot;count&quot;:2}],&quot;total_count&quot;:3,&quot;user_id&quot;:&quot;122&quot;}&quot;<em>with</em>Example of a JSON object for a POST request,escape characters&quot;merchant_data&quot;: &quot;{&quot;items&quot;:[{&quot;sku&quot;:&quot;GM12-CC&quot;, &quot;description&quot;:&quot;10 Copper Coins&quot;,&quot;count&quot;:1}, {&quot;sku&quot;:&quot;GM12-GC&quot;,&quot;description&quot;:&quot;Golden Coin&quot;, &quot;count&quot;:2}],&quot;total_count&quot;:3,&quot;user_id&quot;:&quot;122&quot;}&quot;</td></tr><tr><td><code>merchant_domain</code>string, optional</td><td>The domain name of the web service where the payment form should be opened.This parameter should be passed when Payment Widget is invoked in the form of embedded Apple Pay and Google Pay payment buttons (see this article).<code>merchant.example.com</code>Example:</td></tr><tr><td><code>merchant_fail_enabled</code>integer, optional</td><td>Indicator that specifies the availability options for the final redirection of the customer to the web service when a purchase is declined.Can have one of the following values:For more information about managing options for redirecting the customer back to the web service, see this article.<code>2</code>Example:<code>0</code>—redirection to the web service is not available,<code>1mode</code>—redirection to the web service is available if Payment Widget is opened in a separate browser tab (in this case, how the web service page is opened is determined by the corresponding parameter from thegroup) and not as an iframe object or in a modal window,<code>2mode</code>—redirection to the web service is available by default, using the mode specified in theparameter group.</td></tr><tr><td><code>merchant_fail_redirect_mode</code>string, optional</td><td>Indicator that specifies the mode for the final redirection of the customer to the web service when a purchase is declined.Can have one of the following values:For more information about managing options for redirecting the customer back to the web service, see this article.<code>blank_page</code>Example:<code>iframe</code>—opens the page in an iframe object (this value is ignored if the payment form is opened in a new tab and the customer is redirected in that new tab),<code>parent_page</code>—opens the page in the currently active tab,<code>blank_page</code>—opens the page in a new tab.</td></tr><tr><td><code>merchant_fail_url</code>string, optional</td><td>URL for final redirection to the web service by customer decision when a purchase is declined.For more information about managing options for redirecting the customer back to the web service, see this article.<code>https://cosmoshop.jupiter.example/pages/failed</code>Example:</td></tr><tr><td><code>merchant_return_enabled</code>integer, optional</td><td>Indicator that specifies the availability options for the preliminary redirection of the customer to the web service from the payment form.Can have one of the following values:For more information about managing options for redirecting the customer back to the web service, see this article.<code>0</code>Example:<code>0</code>—redirection to the web service is not available,<code>1mode</code>—redirection to the web service is available if Payment Widget is opened in a separate browser tab (in this case, how the web service page is opened is determined by the corresponding parameter from thegroup) and not as an iframe object or in a modal window,<code>2mode</code>—redirection to the web service is available by default, using the mode specified in theparameter group.</td></tr><tr><td><code>merchant_return_redirect_mode</code>string, optional</td><td>Indicator that specifies the mode for the preliminary redirection of the customer to the web service from the payment form.Can have one of the following values:For more information about managing options for redirecting the customer back to the web service, see this article.<code>iframe</code>Example:<code>iframe</code>—opens the page in an iframe object (this value is ignored if the payment form is opened in a new tab and the customer is redirected in that new tab),<code>parent_page</code>—opens the page in the currently active tab,<code>blank_page</code>—opens the page in a new tab.</td></tr><tr><td><code>merchant_return_url</code>string, optional</td><td>URL for preliminary redirection to the web service from the payment form.For more information about managing options for redirecting the customer back to the web service, see this article.<code>https://cosmoshop.jupiter.example/return</code>Example:</td></tr><tr><td><code>merchant_success_enabled</code>integer, optional</td><td>Indicator that specifies the availability options for the final redirection of the customer to the web service when the purchase is completed.Can have one of the following values:For more information about managing options for redirecting the customer back to the web service, see this article.<code>1</code>Example:<code>0</code>—redirection to the web service is not available,<code>1mode</code>—redirection to the web service is available if Payment Widget is opened in a separate browser tab (in this case, how the web service page is opened is determined by the corresponding parameter from thegroup) and not as an iframe object or in a modal window,<code>2mode</code>—redirection to the web service is available by default, using the mode specified in theparameter group.</td></tr><tr><td><code>merchant_success_redirect_mode</code>string, optional</td><td>Indicator that specifies the mode for the final redirection of the customer to the web service when the purchase is completed.Can have one of the following values:For more information about managing options for redirecting the customer back to the web service, see this article.<code>parent_page</code>Example:<code>iframe</code>—opens the page in an iframe object (this value is ignored if the payment form is opened in a new tab and the customer is redirected in that new tab),<code>parent_page</code>—opens the page in the currently active tab,<code>blank_page</code>—opens the page in a new tab.</td></tr><tr><td><code>merchant_success_url</code>string, optional</td><td>URL for final redirection to the web service by customer decision when the purchase is completed.For more information about managing options for redirecting the customer back to the web service, see this article.<code>https://cosmoshop.jupiter.example/pages/success</code>Example:</td></tr><tr><td><code>mode</code>string, optional</td><td>..Indicator that specifies the Payment Widget operation modeCan have one of the following values:<code>card_verifypurchase</code>Example:<code>purchase</code>—for making a purchase in Purchase mode (used by default),<code>payout</code>—for making a payout in Payout mode,<code>card_verify</code>—for verifying the validity of a payment instrument in Card Verify mode,<code>card_tokenize</code>—for creating a payment details token in Card Tokenize mode.</td></tr><tr><td><code>moto_type</code>integer, optional</td><td>Type of order for carrying out a Mail Order/Telephone Order purchase (involving the owner of the payment card providing its details over phone, mail, fax, or email):<code>2</code>Example:<code>1</code>—Mail Order,<code>2</code>—Telephone Order.</td></tr><tr><td><code>operation_type</code>string, optional</td><td>Indicator that specifies whether a purchase is processed in one or two steps.Should be specified in cases where the intended payment type is different from the one specified by default (with regard to the number of steps). Can have one of the following values:<code>auth</code>Example:<code>sale</code>—for one-step purchases (with the funds transferred to the merchant immediately; details),<code>auth</code>—for two-step purchases (with the funds transferred to the merchant after first being in an authorisation hold; details).</td></tr><tr><td><code>payment_amount</code>*integer, required</td><td>The amount of the payment in the smallest currency unit.Required for all Payment Widget modes except Card Tokenize.Specified in the smallest currency unit without a decimal separator.<code>1815</code>Example:(represents an amount of 18.15 currency units when referring to a currency with two decimals)</td></tr><tr><td><code>payment_cryptocurrency_type</code>string, optional</td><td>Indicator that specifies the type of the cryptocurrency.Required for Visa payments involving cryptocurrencies within the Visa Direct service. Can have one of the following values:<code>cbdc</code>Example:<code>cbdc</code>—a central bank digital currency or tokenized deposit issued by a central bank, reserve bank, or other national monetary authority.<code>stablecoins_fiat_backed</code>—a fiat-backed digital asset with reserves held by a licensed financial institution.<code>native_tokens</code>—a digital currency native to a specific blockchain, required for transactions within its network, including fee payments.<code>other</code>—a non-fiat digital asset that does not fit other types or cannot be classified at the time of transaction initiation.</td></tr><tr><td><code>payment_currency</code>*string, required</td><td>Three-letter code of the payment currency.Required for all Payment Widget modes except Card Tokenize.Specified in the ISO-4217 alpha-3 format, according to the currency codes reference.<code>EUR</code>Example:</td></tr><tr><td><code>payment_description</code>string, optional</td><td>A short description for the payment, intended to be displayed to the customer, as well as being used by the web service for tracking purposes.The length of the string cannot be more than 255 characters. Can be displayed to the customer on the information page, or via system notifications and the Dashboard interface.<code>Thai massage session</code>Example:</td></tr><tr><td><code>payment_extra_param</code>string, optional</td><td>Additional relevant information pertaining to the payment.May be required for specific payment methods and in other individual cases. Generally, where and how this parameter is used, as well as the format of any data contained therein should be decided upon during the integration of the web service, or when implementing additional payment methods or capabilities.</td></tr><tr><td><code>payment_id</code>*string, required</td><td>The payment identifier.Required for all Payment Widget modes except Card Tokenize.Must be assigned by the web service. Should consist of a string no longer than 255 characters, be case-insensitive, and correspond one-to-one with the relevant payment within that project.<code>payment_443</code>Example:</td></tr><tr><td><code>payment_merchant_risk</code>string, optional</td><td>Additional information about a purchase made for goods or services by a customer and about which 3‑D Secure authentication method is preferred by the merchant.The JSON object can include various combinations of elements from the list of supported data. When passed for card payments, data contained in this parameter may serve to improve the probability of a successful 3‑D Secure authentication without any further input from the customer (i.e., authentication via the frictionless flow instead of the challenge flow; details).Consists of a string obtained by encoding a JSON object using the Base64 encoding scheme.Supported data<code>challenge_indicator``01</code>—no preferences<code>02</code>—not using the challenge flow is preferred<code>03</code>—using the challenge flow is preferred<code>04</code>—using the challenge flow is required<code>05</code>—do not use the challenge flow, the merchant has performed the risk analysis<code>06</code>—do not use the challenge flow, use the Data Only flow<code>07</code>—do not use the challenge flow, Strong Customer Authentication has been applied otherwise<code>08</code>—do not use the challenge flow, the merchant is included in cardholder&#39;s trusted beneficiaries list<code>09</code>—using the challenge flow is required, prompt the cardholder to add the merchant to the trusted beneficiaries list, string—indicates whether the challenge flow is preferred. Possible values:<code>challenge_window``01</code>—250 x 400 px<code>02</code>—390 x 400 px<code>03</code>—500 x 600 px<code>04</code>—600 x 400 px<code>05</code>—full screen, string—the dimensions of a window in which the authentication page opens. Possible values:<code>gift_card``amount</code>, integer—the amount of the purchase made with a prepaid or gift card in the smallest units of currency<code>count</code>, integer—total number of prepaid or gift cards used for making a purchase<code>currency</code>, string—the currency of the purchase made with a prepaid or gift card in the ISO 4217 alpha-3 format, object—object with information about a purchase made with a prepaid or gift card:<code>preorder_dateDD-MM-YYYY</code>, string—the date when the preordered merchandise or service will be available in theformat<code>preorder_purchase``01</code>—not a preorder<code>02</code>—a preorder, string—indicates whether the purchase is a preorder. Possible values:<code>reorder``01</code>—first-time purchase<code>02</code>—repeat purchase, string—indicates whether the customer is buying the merchandise or the service for the first time or it is a repeat purchase. Possible values:Example of a JSON objectExample of the resulting string</td></tr><tr><td><code>payment_methods_options</code>string, optional</td><td>Additional information relevant for specific payment methods and third-party services., including Open Banking methods,Can be used to manage individual methodsin order to send additional information about the customer and the payment, manage the page size of third-party web services that the customer is redirected to, and for other possible reasons, depending on the specific payment methods being used.<code>{\\&quot;online_thailand_banks\\&quot;: {\\&quot;split_banks\\&quot;: true}}</code>Example:</td></tr><tr><td><code>project_id</code>integer, required</td><td>Identifier of the project intended to manage the interactions of the web service with the payment platform. This identifier is assigned by Platform during the integration (details).<code>57123</code>Example:</td></tr><tr><td><code>receipt_data</code>string, optional</td><td>Information about line items in an order.this articlethis articleThe JSON object can include various combinations of elements from the list of supported data.Can be used to generate a proof of purchase document to be sent to the customer (see). Consists of a string obtained by encoding a JSON object using the Base64 encoding scheme.Supported data<code>positions``amount</code>, integer—the price of the item<code>quantity</code>, integer—the number of purchased items of the same kind<code>tax</code>, integer—the VAT rate if it differs for different listed items<code>tax_amount</code>, integer—the VAT amount<code>description</code>, string—the description of the purchased item., array—array which allows listing up to 300 purchased items in the notification. For each listed item, the following information can be specified:<code>total_tax_amount</code>, integer—the total VAT amount for the entire purchase<code>common_tax</code>, integer—the VAT rate if it is the same for all listed itemsExample of a JSON object{ &quot;receipt_data&quot;:{ &quot;positions&quot;:[ { &quot;quantity&quot;:3, &quot;amount&quot;:10000, &quot;tax&quot;:18, &quot;tax_amount&quot;:1800, &quot;description&quot;:&quot;Design frame&quot; } ], &quot;total_tax_amount&quot;:1800, &quot;common_tax&quot;:18 } }{ &quot;receipt_data&quot;:{ &quot;positions&quot;:[ { &quot;quantity&quot;:1, &quot;amount&quot;:105, &quot;description&quot;:&quot;10 Copper Coins&quot; }, { &quot;quantity&quot;:2, &quot;amount&quot;:316, &quot;description&quot;:&quot;Golden coin&quot; } ] } }Example of the resulting stringreceipt_data: &quot;eyAgCiAgICAgICJwb3NpdGlvbnMiOlsgIAogICAgICAgICB7ICAKICAgICAg ICAgICAgInF1YW50aXR5IjozLAogICAgICAgICAgICAiYW1vdW50IjoxMDAwMCwKICAgICAgICAgICAgInRheCI 6MTgsCiAgICAgICAgICAgICJ0YXhfYW1vdW50IjoxODAwLAogICAgICAgICAgICAiZGVzY3JpcHRpb24iOiJEZXN pZ24gZnJhbWUiCiAgICAgICAgIH0KICAgICAgXSwKICAgICAgInRvdGFsX3RheF9hbW91bnQiOjE4MDAsCiAgICA gICJjb21tb25fdGF4IjoxOCAgICAgICAKfQ&quot;receipt_data: &quot;eyAgCiAgICAgICJwb3NpdGlvbnMiOlsgIAogICAgICAgICB7CiAgICAgICAgICAgICJxdWFudGl0eSI6MSwKIC AgICAgICAgICAgImFtb3VudCI6MTA1LAogICAgICAgICAgICAiZGVzY3JpcHRpb24iOiIxMCBDb3BwZXIgQ29pbn MiCiAgICAgICAgIH0sCiAgICAgICAgIHsgIAogICAgICAgICAgICAicXVhbnRpdHkiOjIsCiAgICAgICAgICAgIC JhbW91bnQiOjMxNiwKICAgICAgICAgICAgImRlc2NyaXB0aW9uIjoiR29sZGVuIGNvaW4iCiAgICAgICAgIH0gIC AKICAgICAgXSAgICAgICAKICAgfQ==&quot;</td></tr><tr><td><code>recipient_address</code>string, optional</td><td>The name of the street and the house number (including any additional parts of the address such as building indicators and apartment numbers) in the address of the payment recipient.The length of the string cannot be more than 99 characters.<code>Via Dietro Duomo 36</code>Example:</td></tr><tr><td><code>recipient_card_holder</code>string, optional</td><td>The first and last names of the holder of the payment card used to receive the payment.this articleShould be spelled as specified on the card and adhere to the rules for specifying names (see). The length of the string cannot be more than 255 characters.<code>Fran Petrarca</code>Example:</td></tr><tr><td><code>recipient_city</code>string, optional</td><td>The name of the place of residence (e.g., town, city, or other settlement type) in the address of the payment recipient.The length of the string cannot be more than 25 characters.<code>Padova</code>Example:</td></tr><tr><td><code>recipient_country</code>string, optional</td><td>The country code of the place of residence of the payment recipient.Specified in the ISO 3166-1 alpha-2 format.<code>IT</code>Example:</td></tr><tr><td><code>recipient_day_of_birth</code>string, optional</td><td>The date of birth of the payment recipient.<code>DD-MM-YYYY</code>Specified informat. Required if a Visa card is used to receive the payment.<code>12-12-1990</code>Example:</td></tr><tr><td><code>recipient_first_name</code>string, optional</td><td>The name of the payment recipient.The length of the string cannot be more than 255 characters.<code>Fran</code>Example:</td></tr><tr><td><code>recipient_last_name</code>string, optional</td><td>The last name of the payment recipient.The length of the string cannot be more than 255 characters.<code>Petrarca</code>Example:</td></tr><tr><td><code>recipient_pan</code>string, optional</td><td>The number of the payment card used to receive the payment.Specified as is, without masked characters, spaces, or other separators.<code>4314220000000056</code>Example:</td></tr><tr><td><code>recipient_state</code>string, optional</td><td>The local code of the region (state, province, or other administrative subdivision type) of the payout recipient&#39;s address (details).<code>recipient_countryCAUS</code>The value of this parameter is the second element of a code for a subdivision (in ISO 3166-2), without the two-letter country code and the hyphen-minus used as a separator. Should be specified for processing payouts when theparameter is also specified in the same query and its value is the country code of Canada () or the United States ().<code>AKUS-AK</code>Example:(when specified for Alaska, designated)</td></tr><tr><td><code>recipient_state_code</code>string, optional</td><td>The local code of the region (state, province, or other administrative subdivision type) associated with the recipient&#39;s address for fund transfers using Mastercard MoneySend and Visa Direct services (details).<code>recipient_countryCAUS</code>The value of this parameter is the second element of a code for a subdivision (in ISO 3166-2), without the two-letter country code and the hyphen-minus used as a separator. Should be specified for Mastercard MoneySend and Visa Direct operations when theparameter is also specified in the same query and its value is the country code of Canada () or the United States ().<code>ONCA-ON</code>Example:(when specified for Ontario, designated)</td></tr><tr><td><code>recipient_wallet_id</code>string, optional</td><td>The identifier of the digital wallet used by the payment recipient.The length of the string cannot be more than 64 characters. Specified as is, without masked characters, spaces, or other separators.<code>WID20071304</code>Example:</td></tr><tr><td><code>recipient_wallet_owner</code>string, optional</td><td>The first and last names of the owner of the digital wallet used by the payment recipient.Should be spelled the same way as in the payment system and be at most 255 characters long in total.<code>Fran Petrarca</code>Example:</td></tr><tr><td><code>recurring</code>string, optional</td><td>Information about the COF purchase being registered (details).(containing various combinations of elements from the list of supported data)If the Platform JavaScript library is used, can be passed as a JSON object, otherwise should be specified as a URL obtained by encoding the source JSON object.Example of a JSON object{ &quot;register&quot;: true, &quot;type&quot;: &quot;U&quot; }Example of the resulting string%7B%22register%22%3Atrue%2C%22type%22%3A%22U%22%7D%2C</td></tr><tr><td><code>recurring_register</code>integer, optional</td><td><code>recurring</code>Indicator specifying whether a COF purchase should be registered, using the information passed in theparameter (see this article).Can have one of the following values:<code>merchant.jsfalsetrue</code>If thelibrary is used (details), this parameter can be specified as a boolean value and set to eitheror.<code>1</code>Example:<code>0</code>—the COF purchase should not be registered,<code>1</code>—the COF purchase should be registered.</td></tr><tr><td><code>redirect</code>integer (boolean*), optional</td><td>Indicator specifying whether the payment form should be opened on a new HTML page regardless of the type of device being used (see this article).Can have one of the following values:<code>merchant.jsfalsetrue</code>If thelibrary is used (details), this parameter can be specified as a boolean value and set to eitheror.<code>1</code>Example:<code>0</code>—the payment form should be opened using either the default method or a different method specified in other parameters,<code>1</code>—the payment form should be opened in a new HTML page.</td></tr><tr><td><code>redirect_fail_mode</code>string, optional</td><td>Indicator that specifies the mode for the final redirection of the customer to the web service when the purchase is declined.Can have one of the following values:For more information about managing options for redirecting the customer back to the web service, see this article.<code>blank_page</code>Example:<code>iframe</code>—opens the page in an iframe object (this value is ignored if the payment form is opened in a new tab and the customer is redirected in that new tab),<code>parent_page</code>—opens the page in the currently active tab,<code>blank_page</code>—opens the page in a new tab.</td></tr><tr><td><code>redirect_fail_url</code>string, optional</td><td>URL for final redirection to the web service if the purchase is declined.For more information about managing options for redirecting the customer back to the web service, see this article.<code>https://cosmoshop.jupiter.example/pages/failed</code>Example:</td></tr><tr><td><code>redirect_on_mobile</code>integer (boolean*), optional</td><td>Indicator specifying whether the payment form should be opened on a new HTML page for mobile devices (see this article).Can have one of the following values:<code>merchant.jsfalsetrue</code>If thelibrary is used (details), this parameter can be specified as a boolean value and set to eitheror.<code>1</code>Example:<code>0</code>—the payment form should be opened using either the default method or a different method specified in other parameters,<code>1</code>—the payment form should be opened in a new HTML page.</td></tr><tr><td><code>redirect_success_mode</code>string, optional</td><td>Indicator that specifies the mode for the final redirection of the customer to the web service when the purchase is completed.Can have one of the following values:For more information about managing options for redirecting the customer back to the web service, see this article.<code>parent_page</code>Example:<code>iframe</code>—opens the page in an iframe object (this value is ignored if the payment form is opened in a new tab and the customer is redirected in that new tab),<code>parent_page</code>—opens the page in the currently active tab,<code>blank_page</code>—opens the page in a new tab.</td></tr><tr><td><code>redirect_success_url</code>string, optional</td><td>URL for final redirection to the web service by customer decision when a purchase is completed.For more information about managing options for redirecting the customer back to the web service, see this article.<code>https://cosmoshop.jupiter.example/pages/success</code>Example:</td></tr><tr><td><code>redirect_return_url</code>string, optional</td><td>URL for preliminary redirection to the web service from third-party services such as banks and other payment systems.Requires this functionality (for specific third-party services) to be set up and enabled beforehand. For more information about managing options for redirecting the customer back to the web service, see this article.<code>https://cosmoshop.jupiter.example/pages/third_party_services</code>Example:</td></tr><tr><td><code>redirect_tokenize_mode</code>string, optional</td><td>Indicator that specifies the mode for the automatic final redirection of the customer to the web service when a token has been generated in Card Tokenize mode using the relevant payment details.Can have one of the following values:For more information about managing options for redirecting the customer back to the web service, see this article.<code>parent_page</code>Example:<code>iframe</code>—opens the page in an iframe object (this value is ignored if the payment form is opened in a new tab and the customer is redirected in that new tab),<code>parent_page</code>—opens the page in the currently active tab.</td></tr><tr><td><code>redirect_tokenize_url</code>string, optional</td><td>URL for automatic final redirection to the web service when a token has been generated in Card Tokenize mode using the relevant payment details.For more information about managing options for redirecting the customer back to the web service, see this article.<code>https://cosmoshop.jupiter.example/pages/tokenize</code>Example:</td></tr><tr><td><code>region_code</code>string, optional</td><td>The country code for the customer&#39;s address.Specified in the ISO 3166-1 alpha-2 format. If this parameter is not specified, the country code is determined using the customer&#39;s IP address or other parameters.<code>FR</code>Example:</td></tr><tr><td><code>sender_address</code>string, optional</td><td>The name of the street and the house number (including any additional parts of the address such as building indicators and apartment numbers) in the address of the payment sender.The length of the string cannot be more than 99 characters.<code>Via Certaldo 18</code>Example:</td></tr><tr><td><code>sender_city</code>string, optional</td><td>The name of the place of residence (e.g., town, city, or other settlement type) in the address of the payment sender.The length of the string cannot be more than 25 characters.<code>Florence</code>Example:</td></tr><tr><td><code>sender_country</code>string, optional</td><td>The code of the country in the address of the payment sender.Specified in the ISO 3166-1 alpha-2 format.<code>IT</code>Example:</td></tr><tr><td><code>sender_first_name</code>string, optional</td><td>The first name of the payment sender.The length of the string cannot be more than 255 characters.<code>Gio</code>Example:</td></tr><tr><td><code>sender_last_name</code>string, optional</td><td>The last name of the payment sender.The length of the string cannot be more than 255 characters.<code>Boccaccio</code>Example:</td></tr><tr><td><code>sender_state</code>string, optional</td><td>The local code of the region (state, province, or other administrative subdivision type) of the payment sender&#39;s address.<code>sender_country</code>The value of this parameter is the second element of a code for a subdivision (in ISO 3166-2), without the two-letter country code and the hyphen-minus used as a separator. Should be specified when theparameter is also specified in the same query.<code>52IT‑52</code>Example:(when specified for Tuscany, designated)</td></tr><tr><td><code>sender_wallet_id</code>string, optional</td><td>The identifier of the digital wallet used by the payment sender.The length of the string cannot be more than 64 characters. Specified as is, without masked characters, spaces, or other separators.<code>WID16061313</code>Example:</td></tr><tr><td><code>sender_zip</code>string, optional</td><td>The postal code in the address of the payment sender.The length of the string cannot be more than 255 characters.<code>50142</code>Example:</td></tr><tr><td><code>signature</code>string, required</td><td>The digital signature used to sign the query parameters.this articlethis articleShould be generated using the appropriate algorithm after all relevant parameters have been specified (see).</td></tr><tr><td><code>style_id</code>integer, optional</td><td>The identifier of the payment form design style.Can be used for thePayment Widget design style (see this article).<code>6123</code>Example:</td></tr><tr><td><code>target_element</code>string, optional</td><td>The iframe element identifier (for the HTML page of the web service) of the element where the payment form should be opened (see this article).<code>widget-container</code>Example:</td></tr><tr><td><code>terminal_id</code>integer, optional</td><td>The identifier of the payment form terminal (see this article).The identifier of the payment form terminal.<code>54</code>Example:</td></tr><tr><td><code>uuid</code>string, optional</td><td>Identifier used for internal purposes.The length of the string cannot be more than 64 characters. Can be used to invoke the payment form in Payout mode by specifying the value received in the payout registration callback (see this article).<code>Lm3V9lmykig2d51Z/2Yrnue9+o5GTkVvY/sRDLKAnSS+AagnGCJ1nsPg==</code>Example:</td></tr></tbody></table>', 6),
    createBaseVNode("table", { tabindex: "0" }, [
      createBaseVNode("thead", null, [
        createBaseVNode("tr", null, [
          createBaseVNode("th", null, "Parameter"),
          createBaseVNode("th", null, "Mandatory"),
          createBaseVNode("th", null, "Type"),
          createBaseVNode("th", null, "Description"),
          createBaseVNode("th", null, "Example")
        ])
      ]),
      createBaseVNode("tbody", null, [
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "account_token"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Available in the Purchase and Card Verify modes.For details, seeThe token of the bank card that will be used to perform a payment. In this case, on the generated payment widget the bank card is preselected with the bank card details filled in."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "addendum_data"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "This parameter contains all the booking itinerary data such as booking number, check-in and check-out dates, and hotel guest name and is applicable only to payments in travel industry.addendum_dataThe value of this parameter is obtained by converting addendum data in a single string by using the Base64 algorithm. For more information on how to calculate thevalue, see"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "avs_post_code"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer's postal code passed in case of the AVS check."),
          createBaseVNode("td", null, "WS13 6LG")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "avs_street_address"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer's street address passed in case of the AVS check."),
          createBaseVNode("td", null, "4 Breadmarket Street")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "baseUrl"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The basic URL for opening the payment form (when it is necessary to provide an actual URL)"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "best_before"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "YYYY-MM-DDThh:mm:ss±hh"),
            createTextVNode("Date and time when the payment period expires. After the payment expiration date the customer is redirected to a page with the message that the time of possibility to proceed the payment is expired. Parameter is passed in the following format:")
          ]),
          createBaseVNode("td", null, "2020-04-26T13:50:37+00:00")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "billing_address"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Street of the customer billing address"),
          createBaseVNode("td", null, "33 Store Street")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "billing_city"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "City of the customer billing address"),
          createBaseVNode("td", null, "London")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "billing_country"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Country of the customer billing address, in ISO 3166-1 alpha-2 format"),
          createBaseVNode("td", null, "GB")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "billing_postal"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Postal code of the customer billing address"),
          createBaseVNode("td", null, "BR1 1AA")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "billing_region"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Region or state of the customer billing address"),
          createBaseVNode("td", null, "Greater London")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "billing_region_code"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "DOR"),
            createTextVNode("State, province, or region code in the ISO 3166-2 format. Example:for Dorset."),
            createBaseVNode("code", null, "billing_country"),
            createTextVNode("If you specify this parameter, you need also to specify and populate theparameter.")
          ]),
          createBaseVNode("td", null, "DOR")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "booking_info"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "A string containing the Base64 encoded booking data (details)"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "card_holder"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Name of the cardholder as specified on the card. When the parameter is passed, the value is displayed and editable on the payment form"),
          createBaseVNode("td", null, "CARD HOLDER")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "card_operation_type"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "sale"),
            createTextVNode(": payment with direct withdrawal of funds"),
            createBaseVNode("em", null, "auth"),
            createTextVNode(": payment with held fundsFor more information, see andType of payment performed via payment card. The following options are available:")
          ]),
          createBaseVNode("td", null, "sale")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cash_voucher_data"),
          createBaseVNode("td", null, "Mandatory for Purchase if the activity is regulated by the 54 Russia Federal law"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "``A string that contains the data of the receipt. The data is passed in a JSON object, described in API, themodel"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cashier_default_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("strong", null, "Deposit"),
            createTextVNode("The tab that is opened to customer when the payment widget is opened. By default, Payment Widget opens thetab.")
          ]),
          createBaseVNode("td", null, "withdrawal")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cashier_force_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The only tab that is opened in the payment widget."),
          createBaseVNode("td", null, "deposit")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cashier_manual_input"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "boolean"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "1"),
            createTextVNode(": manual input is turned on"),
            createBaseVNode("em", null, "0"),
            createTextVNode(": manual input is turned offThe following values are available:Turning on or turning off the customer's ability to manually input amount of the payment or payout.")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cashier_max_value"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "Maximum payment amount in minor unit of currency."),
          createBaseVNode("td", null, "500")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cashier_min_value"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "Minimum payment amount in minor unit of currency."),
          createBaseVNode("td", null, "100")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cashier_predefined_amounts"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "&lt;sum1>,&lt;sum2>]"),
            createTextVNode('A range of predefined amounts that are available for selection by the customer. The series is specified in the format, the amounts in minor units of the currency are separated by commas (",").')
          ]),
          createBaseVNode("td", null, "10,20,50")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "checkout_script"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "01"),
            createTextVNode("A parameter that determines the possibility to make a payment or to verify card by the card token using an encryption script without entering CVV/CVC/CID (allowed values:and). For more information, see"),
            createBaseVNode("code", null, "merchant.js"),
            createTextVNode("When working with Payment Widget without using thelibrary, a boolean value can be specified in this parameter.")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "close_on_missclick"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "1"),
            createTextVNode(": The widget is closed"),
            createBaseVNode("em", null, "0"),
            createTextVNode(": The widget remains open. This option is set as defaultFor more information, see"),
            createBaseVNode("code", null, "merchant.js"),
            createTextVNode("When working with Payment Widget without using thelibrary, a boolean value can be specified in this parameter.A parameter that specifies the action of the widget (opened in the modal window) when a customer clicks outside the widget area. The following options are available:")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "css_modal_wrap"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "An additional CSS class for a modal window. For more information, see"),
          createBaseVNode("td", null, "modal-popup")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_address"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Address of the customer"),
          createBaseVNode("td", null, "Main Street, 12")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_account_info"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "This parameter contains the customer account and contact information on record with the web service.The value of this parameter is obtained by converting the customer data into a single string by using the Base64 algorithm. For more information, see ."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_account_number"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "or e-walletCustomer accountnumber, can be also the email address or phone number (specified using a country code and without the + sign) linked to the account"),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "mailto:example@mail.com",
              target: "_blank",
              rel: "noreferrer"
            }, "example@mail.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_birthplace"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer place of birth"),
          createBaseVNode("td", null, "London")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_city"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "City of the customer address"),
          createBaseVNode("td", null, "London")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_country"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Country of the customer address in ISO 3166-1 alpha-2 format"),
          createBaseVNode("td", null, "GB")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_day_of_birth"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer date of birth, DD-MM-YYYY"),
          createBaseVNode("td", null, "12-12-1990")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_email"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, ".Required for card payments if the customer's phone number is not passed and the capability of collecting such customer data is not implemented (details).Customer e-mail"),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "mailto:smith@gmail.com",
              target: "_blank",
              rel: "noreferrer"
            }, "smith@gmail.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_first_name"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer first name"),
          createBaseVNode("td", null, "Jane")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_id"),
          createBaseVNode("td", null, ", PayoutMandatory for Card Tokenize, Purchase"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, ". The data passed in the parameter is collected and displayed in DashboardUnique ID of the customer in your project"),
          createBaseVNode("td", null, "customer_341")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_installment_count"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "The number of months of installment payment. For more information, see"),
          createBaseVNode("td", null, "2")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_last_name"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer last name"),
          createBaseVNode("td", null, "Smith")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_middle_name"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer middle name"),
          createBaseVNode("td", null, "Mary")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_mpi_result"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "This parameter contains the information about the previous authentication procedure of the customer.The value of this parameter is obtained by converting the authentication data into a single string by using the Base64 algorithm. For more information, see ."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_phone"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Required for card payments if the customer's email is not passed and the capability of collecting such customer data is not implemented (details).Customer's phone number. Generally, must be specified in full, with the country code, although in certain cases (such as card payments) the country code is not required. Technically, the number must include from 4 to 24 digits,and if it is allowed within the project and payment method used, punctuation marks and special symbols may be used while specifying the number (such cases are usually mentioned separately)."),
          createBaseVNode("td", null, "443031237300")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_security_code"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "or e-walletCustomer accountsecurity code for payment confirmation"),
          createBaseVNode("td", null, "852923")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_shipping"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "This parameter contains the shipping information.The value of this parameter is obtained by converting the shipping data into a single string by using the Base64 algorithm. For more information, see ."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_ssn"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "The last 4 digits of the social security number in the USA"),
          createBaseVNode("td", null, "1234")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_state"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "State or region of the customer address"),
          createBaseVNode("td", null, "Greater London")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_street"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Street of the customer address"),
          createBaseVNode("td", null, "Main")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_zip"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Postal code of the customer address"),
          createBaseVNode("td", null, "RdWC2N 5DU")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "debt_account"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The recipient's account number for debiting funds from the customer's card in order to repay the debt. Latin letters and numbers are allowed, the maximum length is 10 characters"),
          createBaseVNode("td", null, "an9876170i")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "descriptor"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createTextVNode("()"),
            createBaseVNode("code", null, '# $ * ( ) - _ = + " ; : ? \\ / , . '),
            createTextVNode(" ' ^`Information which identifies the merchant that performs the operation. The maximum length is 13. It is possible to use letters of the Latin alphabet, digits, and the following symbols:")
          ]),
          createBaseVNode("td", null, '"Merchant_1"')
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "default_payment_method"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "ID of the payment provider that is opened to customers by default. The customer can select another payment system."),
          createBaseVNode("td", null, "card")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "force_acs_new_window"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "1"),
            createTextVNode(": opening in a separate tab"),
            createBaseVNode("em", null, "0not passed"),
            createTextVNode("or: opening as specified previously"),
            createBaseVNode("code", null, "merchant.js"),
            createTextVNode("When working with Payment Widget without using thelibrary, a boolean value can be specified in this parameter.The forced display mode with the ACS page opening in a new window despite the settings in Payment Widget")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "force_payment_method"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The ID of the payment method that is opened to customers without an option to select another one. The list of codes is provided in"),
          createBaseVNode("td", null, "card")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "force_payment_group")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "force_payment_method"),
            createTextVNode("Identifier of the payment method group, the elements of which limit the choice of method in the payment form. When specifying this identifier, Payment Widget displays buttons for selecting only the methods that are included in the specified group and are available within the project. At the same time, when this identifier is specified in a single request along with the code of a specific method in theparameter, the payment form is opened for making a purchase by using the specified method, without taking into account the selected group."),
            createBaseVNode("code", null, "openbanking"),
            createTextVNode("Currently only the Open Banking group of methods is selectable by using theidentifier.")
          ]),
          createBaseVNode("td", null, "openbanking")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "force_payment_method_subtype"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "force_payment_method=card"),
            createTextVNode("The bank card type that is opened to customers by default ifwithout an option to select another type. Also applies to the saved cards display. For available options see")
          ]),
          createBaseVNode("td", null, "visa")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "hide"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The ID of the payment method that is hidden from customers on Payment Widget. If it is necessary to hide several methods, identifiers are comma-separated. The list of codes is provided in"),
          createBaseVNode("td", null, "card, cup-card")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "identify_doc_number"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Number of a customer identity document"),
          createBaseVNode("td", null, "6543234567")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "interface_type"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createTextVNode("id"),
            createBaseVNode("em", null, "7"),
            createTextVNode("String containing information on the source of a payment request. The data is collected in a JSON object. Available value for theparameter:– Payment Widget in iframe mode")
          ]),
          createBaseVNode("td", { "id:7": "" }, "interface_type:")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "language_code"),
          createBaseVNode("td", null, "Recommended"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The language in which the payment widget will be opened to the customer in ISO 639-1 alpha-2 format. By default, it is determined by the customer IP address"),
          createBaseVNode("td", null, "en")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "list_payment_block"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "payment_method: ID of the payment provider that has been used to perform the latest payment operationThe following options are available:The payment block on the list of payment methods."),
          createBaseVNode("td", null, "payment_method")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "merchant_callback_url")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "detailsThe URL to deliver callbacks with information about specific target actions to. Useful when you need to change the callback URL for a specific request ()."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_data"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The parameter for specifying extended information about the purchase in progress (for example, details of the services provided). Data is passed as a JSON object. For more information, see ."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_fail_enabled"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "The parameter responsible for the possibility of returning customers to the project after a failed payment. For more information, see"),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_fail_redirect_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Mode for opening the project page to which a customer is returned after a failed payment. For more information, see"),
          createBaseVNode("td", null, "iframe")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_fail_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The project page URL to which a customer is returned after a failed payment by clicking on the return button. For more information, see"),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "http://example.com",
              target: "_blank",
              rel: "noreferrer"
            }, "http://example.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_return_enabled"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "The parameter responsible for the possibility of returning customers to the project at any payment step by clicking on the return button. For more information, see"),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_return_redirect_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Mode for opening the project page to which a customer is returned at any payment step by clicking on the return button. For more information, see"),
          createBaseVNode("td", null, "iframe")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_return_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The project page URL to which a customer is returned at any payment step by clicking on the return button. For more information, see"),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "http://example.com",
              target: "_blank",
              rel: "noreferrer"
            }, "http://example.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_success_enabled"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "The parameter responsible for the possibility of returning customers to the project after a succeeded payment. For more information, see"),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_success_redirect_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Mode for opening the project page to which a customer is returned after a succeeded payment. For more information, see"),
          createBaseVNode("td", null, "iframe")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_success_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The project page URL to which a customer is returned after a successful payment by clicking on the return button. For more information, see"),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "http://example.com",
              target: "_blank",
              rel: "noreferrer"
            }, "http://example.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "mode"),
          createBaseVNode("td", null, "Mandatory for all modes, except Purchase"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createTextVNode("Payment Widget mode. The following values are available:"),
            createBaseVNode("em", null, "purchase"),
            createTextVNode(": the Purchase mode. This mode is used by default"),
            createBaseVNode("em", null, "payout"),
            createTextVNode(": the Payout mode"),
            createBaseVNode("em", null, "card_tokenize"),
            createTextVNode(": the Card Tokenize mode"),
            createBaseVNode("em", null, "card_verify"),
            createTextVNode(": the Card Verify mode")
          ]),
          createBaseVNode("td", null, "card_tokenize")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "moto_type"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "1: MO payment2: TO paymentParameter that indicates Mail Order/Telephone Order (moto) payment. The following values are available:"),
          createBaseVNode("td", null, "2")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_amount"),
          createBaseVNode("td", null, "Payout,Mandatory for Purchase,Card Verify"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, '"minimum": 1"maximum": 10000000000000for Purchase and Card Tokenize modes:"minimum": 0"maximum": 0for Card Verify mode:Payment amount specified in minor units of the payment currency. Restrictions:'),
          createBaseVNode("td", null, "10000")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_currency"),
          createBaseVNode("td", null, "Payout,Mandatory for Purchase,Card Verify"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Payment currency in ISO 4217 alpha-3 format"),
          createBaseVNode("td", null, "USD")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_description"),
          createBaseVNode("td", null, "Recommended"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Payment description"),
          createBaseVNode("td", null, "Order 3178")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_extra_param"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The parameter that contains extra payment processing settings. For more information regarding this option, you may apply to your Key Account Manager"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_id"),
          createBaseVNode("td", null, "Payout,Mandatory for Purchase,Card Verify"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Identifier of the payment, must be unique within the project. It is case-insensitive and can contain up to 255 random characters."),
          createBaseVNode("td", null, "order_314")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_merchant_risk"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "This parameter contains the purchase details and the authentication flow which is preferable for the merchant.The value of this parameter is obtained by converting the customer data into a single string by using the Base64 algorithm. For more information, see ."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_methods_options"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "or the payment method selection. For more information, see Methods in the sections on performing payments through Banks of South-East AsiaA string containing the specific display options for the payment widget opening. The data is collected in a JSON object"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "project_id"),
          createBaseVNode("td", null, "Yes"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "Unique ID of your project in the Payment Widget system"),
          createBaseVNode("td", null, "133")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "receipt_data"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, ". For more information, seeA string containing the coded data to send electronic sales receipt to a customer. The data is collected into a JSON object and encoded into Base64"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_address")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout recipient's street address. Must not exceed 99 characters"),
          createBaseVNode("td", null, "Via Dietro Duomo 36")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_card_holder")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The first and last name of the cardholder (as specified on the card). Must not exceed 255 characters"),
          createBaseVNode("td", null, "Fran Petrarca")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_city")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout recipient's city. Must not exceed 25 characters"),
          createBaseVNode("td", null, "Padova")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_country")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout recipient's country code in ISO 3166-1 alpha-2"),
          createBaseVNode("td", null, "IT")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_first_name")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout recipient's first name. Must not exceed 255 characters"),
          createBaseVNode("td", null, "Fran")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_last_name")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout recipient's last name. Must not exceed 255 characters"),
          createBaseVNode("td", null, "Petrarca")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_pan")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The recipient's card number"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_state")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The recipient's country subdivision code (state, province, region, or territory). The value of this parameter is the second element of a code for a subdivision (in ISO 3166-2), without the two-letter country code and the hyphen-minus used as a separator"),
          createBaseVNode("td", null, "34")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_wallet_id")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The wallet number. Must not exceed 64 characters"),
          createBaseVNode("td", null, "WID20071304")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_wallet_owner")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The first and last name of the wallet owner. Must not exceed 255 characters"),
          createBaseVNode("td", null, "Fran Petrarca")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "recurring"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "A string containingdetails about a COF purchase as a JSON object—if the payment form is opened via the JavaScript library of Platform—or as a string generated as a result of URL encoding—if the payment form is opened via another method. For more information, see the article."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "recurring_register"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "01"),
            createTextVNode("Parameter that indicates whether this payment should be registered as recurring (allowed values:or)."),
            createBaseVNode("code", null, "merchant.js"),
            createTextVNode("When working with Payment Widget without using thelibrary, a boolean value can be specified in this parameter.")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "1"),
            createTextVNode(": opening in a separate tab"),
            createBaseVNode("em", null, "0not passed"),
            createTextVNode("or: opening as specified previouslyFor more information, see"),
            createBaseVNode("code", null, "merchant.js"),
            createTextVNode("When working with Payment Widget without using thelibrary, a boolean value can be specified in this parameter.A parameter that enables opening of the generated payment widget in a separate tab. The following options are available:")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_fail_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "iframe"),
            createTextVNode(". This mode is used by default"),
            createBaseVNode("em", null, "parent_page**blank_page"),
            createTextVNode(": opening in a new tab. Pop-up blocking should be disabled in the customer browser.The mode for customer redirection when the payment failed. The following options are available:")
          ]),
          createBaseVNode("td", null, "parent_page")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_fail_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "blank_page"),
            createTextVNode("The URL of the page in your project to which the customer is redirected when the payment failed. Redirection occurs automatically without additional actions from customers. If themode is used, the page with the result is displayed on a separate tab, in other modes – is not displayed")
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "http://merchant.site.com",
              target: "_blank",
              rel: "noreferrer"
            }, "http://merchant.site.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_on_mobile"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "1"),
            createTextVNode(": opening in a separate tab"),
            createBaseVNode("em", null, "0not passed"),
            createTextVNode("or: opening as specified previouslyFor more information, see"),
            createBaseVNode("code", null, "merchant.js"),
            createTextVNode("When working with Payment Widget without using thelibrary, a boolean value can be specified in this parameter.A parameter that enables opening of the generated payment widget in a separate tab on mobile devices only. The following options are available:")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_success_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "iframe"),
            createTextVNode(". This mode is used by default"),
            createBaseVNode("em", null, "parent_page**blank_page"),
            createTextVNode(": opening in a new tab. Pop-up blocking should be disabled in the customer browser.The mode for customer redirection after a successful payment. The following options are available:")
          ]),
          createBaseVNode("td", null, "parent_page")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_success_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "blank_page"),
            createTextVNode("The URL of the page in your project to which the customer is redirected after a successful payment. Redirection occurs automatically without additional actions from customers. If themode is used, the page with the result is displayed on a separate tab, in other modes – is not displayed")
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "http://merchant.site.com",
              target: "_blank",
              rel: "noreferrer"
            }, "http://merchant.site.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_return_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The URL of the page in your project to which the customer is redirected from payment widget on external provider site at any step before the payment is completed by clicking the return button. For more information about this functionality, refer to the Platform Key Account Manager"),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "http://merchant.site.com",
              target: "_blank",
              rel: "noreferrer"
            }, "http://merchant.site.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_tokenize_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createTextVNode("The following options are available:"),
            createBaseVNode("em", null, "iframe"),
            createTextVNode(". This mode is used by default"),
            createBaseVNode("em", null, "parent_page"),
            createTextVNode("The mode for customer redirection once a token is generated in the Card Tokenize mode")
          ]),
          createBaseVNode("td", null, "parent_page")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_tokenize_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The URL of the page in your project to which the customer is redirected after a successful token generation in the Card Tokenize mode"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "region_code"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The customer country in ISO 3166-1 alpha-2 format. By default the region is determined by the IP address of the customer"),
          createBaseVNode("td", null, "us")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_address")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout sender's street address. Must not exceed 99 characters"),
          createBaseVNode("td", null, "Via Certaldo 18")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_city")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout sender's city. Must not exceed 25 characters"),
          createBaseVNode("td", null, "Florence")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_country")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout sender's country code in ISO 3166-1 alpha-2"),
          createBaseVNode("td", null, "IT")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_first_name")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout sender's first name. Must not exceed 255 characters"),
          createBaseVNode("td", null, "Gio")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_last_name")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout sender's last name. Must not exceed 255 characters"),
          createBaseVNode("td", null, "Boccaccio")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_state")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The sender's country subdivision code (state, province, region, or territory). The value of this parameter is the second element of a code for a subdivision (in ISO 3166-2), without the two-letter country code and the hyphen-minus used as a separator"),
          createBaseVNode("td", null, "52")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_wallet_id")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The number (identifier) of the payout sender's wallet. Must not exceed 64 characters"),
          createBaseVNode("td", null, "WID16061313")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_zip")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The postal code of the payout sender's address. Must not exceed 255 characters"),
          createBaseVNode("td", null, "50142")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "signature"),
          createBaseVNode("td", null, "Yes"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The signature to be passed in the request to open the payment widget. For more information, see"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "style_id"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "The identifier assigned to the Payment Widget design style that can be used in addition to the default style when you work with the payment form of the 5th generation (details)"),
          createBaseVNode("td", null, "6123")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "target_element"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The element in which the iframe of the payment widget is embedded in the web page of your project. For more information, see"),
          createBaseVNode("td", null, "pay_button_id")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "terminal_id"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "when you work with the payment form of the 4th and earlier generationsThe identifier assigned to the terminal with a style of the Payment Widget design that can be used in addition to the default style(details)"),
          createBaseVNode("td", null, "54")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "uuid")
          ]),
          createBaseVNode("td", null, "Mandatory for Payout"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The identifier received in a callback with information about the payout registration result that must be specified when the payment form is opened in the Payout operation mode. Must not exceed 64 characters"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "Lm3Z/2ue9+o5GTY/sRnS+Aag==")
          ])
        ])
      ])
    ], -1)
  ])]);
}
const ppParameters = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppParameters as default
};
