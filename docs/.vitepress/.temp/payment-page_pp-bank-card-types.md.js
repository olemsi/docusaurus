import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Supported payment cards","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-bank-card-types.md","filePath":"payment-page/pp-bank-card-types.md"}');
const _sfc_main = { name: "payment-page/pp-bank-card-types.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="supported-payment-cards" tabindex="-1">Supported payment cards <a class="header-anchor" href="#supported-payment-cards" aria-label="Permalink to &quot;Supported payment cards&quot;">​</a></h1><p>Payment Widget supports processing payment and pre-selecting the payment method type with the following payment card types:</p><p>, Mastercard,American ExpressMastercardIn accordance with the recommendations of the Visaandfor 2020, the payment platform supports the possibility of making payments on expired cards. If the functionality is enabled, a corresponding warning is displayed when the customer enters expired card details in the payment form, and the payment is made at Issuer&#39;s discretion. To enable this feature, contact the Platform technical support.</p><table tabindex="0"><thead><tr><th>Card type</th><th>Code</th></tr></thead><tbody><tr><td>American Express</td><td>amex</td></tr><tr><td>BELKART</td><td>belcard</td></tr><tr><td>Maestro</td><td>maestro</td></tr><tr><td>Mastercard</td><td>mastercard</td></tr><tr><td>Troy</td><td>troy</td></tr><tr><td>Mir</td><td>mir</td></tr><tr><td>VISA</td><td>visa</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-bank-card-types.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppBankCardTypes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppBankCardTypes as default
};
