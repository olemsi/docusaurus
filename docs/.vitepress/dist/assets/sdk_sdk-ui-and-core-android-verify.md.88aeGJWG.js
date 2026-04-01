import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Payment card verification","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-ui-and-core-android-verify.md","filePath":"sdk/sdk-ui-and-core-android-verify.md"}');
const _sfc_main = { name: "sdk/sdk-ui-and-core-android-verify.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="payment-card-verification" tabindex="-1">Payment card verification <a class="header-anchor" href="#payment-card-verification" aria-label="Permalink to &quot;Payment card verification&quot;">​</a></h1><p>Payment instrument verification can be used when you need to validate a card without withdrawing funds instantly (for example, before performing a payout) or when you need to save card details for subsequent use. It is essentially a payment that involves debiting a dummy (zero) amount from the customer&#39;s card.</p><p><code>sdk_ui_android_host_first_capActionType.VerifypaymentOptions</code>To perform verification, open the payment form withspecified as a value for the action type parameter in theobject:</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sdk_ui_android_host_first_capPaymentOptions.sdk_ui_android_host_first_capActionType.Verify;</span></span></code></pre></div>', 4)
  ])]);
}
const sdkUiAndCoreAndroidVerify = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  sdkUiAndCoreAndroidVerify as default
};
