import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Processing payments","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-ui-and-core-android-payments.md","filePath":"sdk/sdk-ui-and-core-android-payments.md"}');
const _sfc_main = { name: "sdk/sdk-ui-and-core-android-payments.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="processing-payments" tabindex="-1">Processing payments <a class="header-anchor" href="#processing-payments" aria-label="Permalink to &quot;Processing payments&quot;">​</a></h1><p><code>Sale</code>By default, sdk_ui_android allows you to process one-step purchases (action type). This type of checkout works right out-of-the-box and requires no additional setup.</p><p>In addition, sdk_ui_android supports processing two-step purchases (which involves placing an authorization hold via the SDK and subsequent debiting of the authorized amount). To perform a two-step purchase:</p><ol><li><code>sdk_ui_android_host_first_capActionType.AuthpaymentOptions</code>sdk_ui_android_host_first_capPaymentOptions.sdk_ui_android_host_first_capActionType.Auth;Open the payment form withspecified as a value for the action type parameter in theobject:</li><li>When required, initiate debiting of the authorized amount via Dashboard or Gate by sending the request to theendpoint.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sdk/sdk-ui-and-core-android-payments.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sdkUiAndCoreAndroidPayments = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sdkUiAndCoreAndroidPayments as default
};
