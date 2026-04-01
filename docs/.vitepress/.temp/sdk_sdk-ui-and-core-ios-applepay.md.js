import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Processing payments made with Apple Pay","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-ui-and-core-ios-applepay.md","filePath":"sdk/sdk-ui-and-core-ios-applepay.md"}');
const _sfc_main = { name: "sdk/sdk-ui-and-core-ios-applepay.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="processing-payments-made-with-apple-pay" tabindex="-1">Processing payments made with Apple Pay <a class="header-anchor" href="#processing-payments-made-with-apple-pay" aria-label="Permalink to &quot;Processing payments made with Apple Pay&quot;">​</a></h1><p>In order to implement payment processing which involves the Apple Pay payment method, it is necessary to do the following:</p><p><code>applePayOptions</code>Once these steps are completed, you can process Apple Pay payments. The main steps such as opening the payment form and processing the responses are performed according to the general procedure, which is the same for all payment methods. In addition, you need to pass the following data in theobject</p><p><code>applePayOptions</code>All parameters passed in theobject are mandatory and are necessary for the Apple Pay session to start correctly.</p><ol><li><a href="https://help.apple.com/developer-account/#/devb2e62b839?sub=dev103e030bb" target="_blank" rel="noreferrer">Create a merchant identifier</a>Register the merchant&#39;s identifier (Merchant ID) with Apple. Merchant ID allows the merchant to accept payments made with the Apple Pay method. This identifier never expires and can be used in multiple websites and iOS applications. For more information see Apple documentation:.</li><li><a href="https://help.apple.com/developer-account/#/devb2e62b839?sub=devf31990e3f" target="_blank" rel="noreferrer">Create a payment processing certificate</a>Create Payment Processing Certificate. This certificate is associated with the Merchant ID and is used to secure transaction data when processing Apple Pay payments. For more information see Apple documentation:.</li><li>Send Payment Processing Certificate to the Some Platform technical support. Use the agreed upon security methods.</li><li><a href="https://help.apple.com/xcode/mac/9.3/#/deva43983eb7?sub=dev44ce8ef13" target="_blank" rel="noreferrer">Enable Apple Pay</a>Enable the Apple Pay capability for the mobile application in the programming environment. For information about enabling Apple Pay capability in Xcode environment, see Apple documentation:</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sdk/sdk-ui-and-core-ios-applepay.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sdkUiAndCoreIosApplepay = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sdkUiAndCoreIosApplepay as default
};
