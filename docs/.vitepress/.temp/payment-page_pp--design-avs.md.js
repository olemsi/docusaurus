import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Address Verification System page","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp--design-avs.md","filePath":"payment-page/pp--design-avs.md"}');
const _sfc_main = { name: "payment-page/pp--design-avs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="address-verification-system-page" tabindex="-1">Address Verification System page <a class="header-anchor" href="#address-verification-system-page" aria-label="Permalink to &quot;Address Verification System page&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>A number of countries require that you check the address and the postal code entered by a customer. The Address Verification Service (AVS) is a service that is used to verify the address of a customer claiming to own a bank card. After a customer enters the bank card details, the AVS page displays. If you use this option, you must design a page layout as a part of the template layout.</p><p>For more information, see . You can customise interface elements on this page.</p><h2 id="mandatory-elements" tabindex="-1">Mandatory elements <a class="header-anchor" href="#mandatory-elements" aria-label="Permalink to &quot;Mandatory elements&quot;">​</a></h2><ul><li>Customer postal code.</li><li>Customer address.</li><li><strong>Pay</strong>button that initiates payment processing.</li><li>Appendix 1Error messages. You need to specify the page layout with error messages displayed. The default texts of errors are presented in.</li></ul><h2 id="optional-elements" tabindex="-1">Optional elements <a class="header-anchor" href="#optional-elements" aria-label="Permalink to &quot;Optional elements&quot;">​</a></h2><p>Message ”To perform a payment with a card following fields are required:&quot;.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp--design-avs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp_DesignAvs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp_DesignAvs as default
};
