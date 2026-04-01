import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Payments by using tokens","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-payment-by-token.md","filePath":"payment-page/pp-payment-by-token.md"}');
const _sfc_main = { name: "payment-page/pp-payment-by-token.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="payments-by-using-tokens" tabindex="-1">Payments by using tokens <a class="header-anchor" href="#payments-by-using-tokens" aria-label="Permalink to &quot;Payments by using tokens&quot;">​</a></h1><p>Payment Widget supports performing fast payments by using bank card tokens.</p><p><strong>Pay</strong>While requesting to open a payment widget you specify the active token of a customer bank card. The generated payment widget opens with the filled bank card details (except CVV). To make a payment, the customer enters only CVV and confirms the payment amount by clicking.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>or payment accountWhen performing a payment by using a token the customer will not be able to select any other bank card.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The functionality is available in the Purchase mode.</p></div><h2 id="parameters-to-pass" tabindex="-1">Parameters to pass <a class="header-anchor" href="#parameters-to-pass" aria-label="Permalink to &quot;Parameters to pass&quot;">​</a></h2><p>account_tokencustomer_idTo perform a payment by token, specify the token in theparameter and the ID of a customer in theparameter in the object or the URL.</p><p>For the full list of the supported parameters see .</p>', 8)
  ])]);
}
const ppPaymentByToken = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppPaymentByToken as default
};
