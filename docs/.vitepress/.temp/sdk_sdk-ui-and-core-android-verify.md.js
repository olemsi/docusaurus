import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Payment card verification","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-ui-and-core-android-verify.md","filePath":"sdk/sdk-ui-and-core-android-verify.md"}');
const _sfc_main = { name: "sdk/sdk-ui-and-core-android-verify.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="payment-card-verification" tabindex="-1">Payment card verification <a class="header-anchor" href="#payment-card-verification" aria-label="Permalink to &quot;Payment card verification&quot;">​</a></h1><p>Payment instrument verification can be used when you need to validate a card without withdrawing funds instantly (for example, before performing a payout) or when you need to save card details for subsequent use. It is essentially a payment that involves debiting a dummy (zero) amount from the customer&#39;s card.</p><p><code>sdk_ui_android_host_first_capActionType.VerifypaymentOptions</code>To perform verification, open the payment form withspecified as a value for the action type parameter in theobject:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">sdk_ui_android_host_first_capPaymentOptions.sdk_ui_android_host_first_capActionType.Verify;</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sdk/sdk-ui-and-core-android-verify.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sdkUiAndCoreAndroidVerify = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sdkUiAndCoreAndroidVerify as default
};
