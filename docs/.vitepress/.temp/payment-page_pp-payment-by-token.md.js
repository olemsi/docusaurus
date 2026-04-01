import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Payments by using tokens","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-payment-by-token.md","filePath":"payment-page/pp-payment-by-token.md"}');
const _sfc_main = { name: "payment-page/pp-payment-by-token.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="payments-by-using-tokens" tabindex="-1">Payments by using tokens <a class="header-anchor" href="#payments-by-using-tokens" aria-label="Permalink to &quot;Payments by using tokens&quot;">​</a></h1><p>Payment Widget supports performing fast payments by using bank card tokens.</p><p><strong>Pay</strong>While requesting to open a payment widget you specify the active token of a customer bank card. The generated payment widget opens with the filled bank card details (except CVV). To make a payment, the customer enters only CVV and confirms the payment amount by clicking.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>or payment accountWhen performing a payment by using a token the customer will not be able to select any other bank card.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The functionality is available in the Purchase mode.</p></div><h2 id="parameters-to-pass" tabindex="-1">Parameters to pass <a class="header-anchor" href="#parameters-to-pass" aria-label="Permalink to &quot;Parameters to pass&quot;">​</a></h2><p>account_tokencustomer_idTo perform a payment by token, specify the token in theparameter and the ID of a customer in theparameter in the object or the URL.</p><p>For the full list of the supported parameters see .</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-payment-by-token.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppPaymentByToken = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppPaymentByToken as default
};
