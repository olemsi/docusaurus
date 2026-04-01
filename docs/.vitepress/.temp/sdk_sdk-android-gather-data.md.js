import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gathering customer data","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-android-gather-data.md","filePath":"sdk/sdk-android-gather-data.md"}');
const _sfc_main = { name: "sdk/sdk-android-gather-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gathering-customer-data" tabindex="-1">Gathering customer data <a class="header-anchor" href="#gathering-customer-data" aria-label="Permalink to &quot;Gathering customer data&quot;">​</a></h1><p>en_pp_gathering_customer_data.ditaUsually payment form requires a minimum set of data to complete the request for payment. However, in order to gather more extensive data and statistics about customers you can send and/or request additional data about your customers, such as customer phone number or email. For more information, see.</p><p><code>paymentInfo</code>JavapaymentInfo.sdk_android_set_additional_fields(new sdk_android_additional_field[]{ new sdk_android_additional_field(sdk_android_additional_field.AdditionalFieldType.customer_first_name, &quot;Mark&quot;), new sdk_android_additional_field(sdk_android_additional_field.AdditionalFieldType.billing_country, &quot;US&quot;), sdk_android_additional_field(aps_account_number, &quot;&quot;), sdk_android_additional_field(aps_account_security_code, &quot;&quot;) ..... });KotlinpaymentInfo.sdk_android_additional_fields = arrayOf(sdk_android_additional_field( sdk_android_additional_field.AdditionalFieldType.customer_first_name, &quot;Mark&quot;), sdk_android_additional_field(sdk_android_additional_field.AdditionalFieldType.billing_country, &quot;US&quot;), sdk_android_additional_field(aps_account_number, &quot;&quot;), sdk_android_additional_field(aps_account_security_code, &quot;&quot;) ..... )To pass additional information, set them in theobject:</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sdk/sdk-android-gather-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sdkAndroidGatherData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sdkAndroidGatherData as default
};
