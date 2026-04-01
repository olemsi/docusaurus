import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Page for payment method selection","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp--design-payment-method-choice.md","filePath":"payment-page/pp--design-payment-method-choice.md"}');
const _sfc_main = { name: "payment-page/pp--design-payment-method-choice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="page-for-payment-method-selection" tabindex="-1">Page for payment method selection <a class="header-anchor" href="#page-for-payment-method-selection" aria-label="Permalink to &quot;Page for payment method selection&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The page displays a list of available payment methods.</p><p>You can customise interface elements on this page. Some of them must be displayed on the page, others can be absent.</p><h2 id="mandatory-elements" tabindex="-1">Mandatory elements <a class="header-anchor" href="#mandatory-elements" aria-label="Permalink to &quot;Mandatory elements&quot;">​</a></h2><ul><li>Payment method logos. In order to change default logos, you must provide logos of all required payment methods in two states: a default state and a state with a hover effect. You can change the display order of payment methods and their groups, but you cannot change the composition of payment methods groups.</li><li>Names of payment methods.</li></ul><h2 id="optional-elements" tabindex="-1">Optional elements <a class="header-anchor" href="#optional-elements" aria-label="Permalink to &quot;Optional elements&quot;">​</a></h2><p>The title &quot;All Payment Methods&quot;.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp--design-payment-method-choice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp_DesignPaymentMethodChoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp_DesignPaymentMethodChoice as default
};
