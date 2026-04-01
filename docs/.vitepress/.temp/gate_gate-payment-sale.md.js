import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"One-step purchase","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-payment-sale.md","filePath":"gate/gate-payment-sale.md"}');
const _sfc_main = { name: "gate/gate-payment-sale.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="one-step-purchase" tabindex="-1">One-step purchase <a class="header-anchor" href="#one-step-purchase" aria-label="Permalink to &quot;One-step purchase&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In addition, use the following materials to gain a fuller understanding of processing one-time one-step purchases:—an article in the section that provides a general description of processing one-time one-step purchases in the Platform payment platform and covers information about operations utilised to execute a payment of this type and statuses that are assigned to the payment and the operations performed within it.articles of the section containing a description of processing one-time one-step purchases via Gate with the focus on the specific features of the payment method used and information about relevant requests and callbacks.This article covers processing one-time one-step purchases via Gate and describes requests and callbacks that are used in case of card payments.</p></div><h2 id="callback-format" tabindex="-1">Callback format <a class="header-anchor" href="#callback-format" aria-label="Permalink to &quot;Callback format&quot;">​</a></h2><p>A one-step purchase uses the standard format for callbacks to submit purchase results. For more information, see .</p><p><code>4,000.00 USDcustomer_12431422******005642</code>The following is the example of a callback with an information about successfulpurchase themade by using the payment card №in theproject.</p><p>The following is the example of a callback for a one-step purchase declined due to incorrect card data entered.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-payment-sale.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gatePaymentSale = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gatePaymentSale as default
};
