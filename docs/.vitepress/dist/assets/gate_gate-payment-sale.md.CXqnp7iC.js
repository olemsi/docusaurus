import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"One-step purchase","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-payment-sale.md","filePath":"gate/gate-payment-sale.md"}');
const _sfc_main = { name: "gate/gate-payment-sale.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="one-step-purchase" tabindex="-1">One-step purchase <a class="header-anchor" href="#one-step-purchase" aria-label="Permalink to &quot;One-step purchase&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In addition, use the following materials to gain a fuller understanding of processing one-time one-step purchases:—an article in the section that provides a general description of processing one-time one-step purchases in the Platform payment platform and covers information about operations utilised to execute a payment of this type and statuses that are assigned to the payment and the operations performed within it.articles of the section containing a description of processing one-time one-step purchases via Gate with the focus on the specific features of the payment method used and information about relevant requests and callbacks.This article covers processing one-time one-step purchases via Gate and describes requests and callbacks that are used in case of card payments.</p></div><h2 id="callback-format" tabindex="-1">Callback format <a class="header-anchor" href="#callback-format" aria-label="Permalink to &quot;Callback format&quot;">​</a></h2><p>A one-step purchase uses the standard format for callbacks to submit purchase results. For more information, see .</p><p><code>4,000.00 USDcustomer_12431422******005642</code>The following is the example of a callback with an information about successfulpurchase themade by using the payment card №in theproject.</p><p>The following is the example of a callback for a one-step purchase declined due to incorrect card data entered.</p>', 6)
  ])]);
}
const gatePaymentSale = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gatePaymentSale as default
};
