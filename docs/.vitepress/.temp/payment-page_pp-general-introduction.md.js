import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-general-introduction.md","filePath":"payment-page/pp-general-introduction.md"}');
const _sfc_main = { name: "payment-page/pp-general-introduction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>paymentspurchases and payoutsand to perform other actionsOpen Bankingvariouspayment methodspayment cardspayment cards and Open Banking payment methodsPayment Widget can be used in web services and mobile applications and allows processing card payments even if the merchant does not have the PCI DSS compliance certificate.Payment Widget is payment form by Platform: it is a flexibly configured software module with user interface designed to processinvolving.</p><p>, and plug-ins for websites based on a range of the widely used CMSPayment Widget is opened via the API, and the merchant can use the API itself or special components that can facilitate its usage: a pluggable JavaScript library, SDK for projects developed in various programming languages. This diversity of techniques allows efficiently configuring Payment Widget for very different projects.</p><p>Payment Widget is opened via the API, and the merchant can use the API itself or special components that can facilitate its usage. This allows merchants to configure Payment Widget efficiently for very different projects.</p><p>with the standard or a customised design appliedTherefore, this variety of options allows efficiently configuring Payment Widget for different user stories.Payment Widget is opened on the customer&#39;s device as a separate browser tab, a modal window or an iframe object embedded into the HTML page. Payment Widget display mode, the way of handling intermediate actions and showing information about the result can be configured in the request for opening the payment form.</p><p>as well as the emulator showing its functioning in accordance with different scenariosThis section contains the overview of capabilities of Payment Widget and interaction process through it.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-general-introduction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppGeneralIntroduction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppGeneralIntroduction as default
};
