import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Payment link purchases","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-invoice.md","filePath":"gate/gate-invoice.md"}');
const _sfc_main = { name: "gate/gate-invoice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="payment-link-purchases" tabindex="-1">Payment link purchases <a class="header-anchor" href="#payment-link-purchases" aria-label="Permalink to &quot;Payment link purchases&quot;">​</a></h1><p>Payment link purchases are initiated through Gate but completed by the customer in Payment Widget. This flow is useful when the merchant wants to generate a payment link and deliver it to the customer without hosting the payment form directly.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./gate-invoice-overview.html"><strong>Payment link overview</strong></a> — how payment links are generated and used.</li><li><a href="./gate-invoice-workflow.html"><strong>Payment link workflow</strong></a> — the end-to-end processing sequence.</li><li><a href="./gate-invoice-format-request.html"><strong>Request format</strong></a> — parameters used to create the link and configure the purchase.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when you need the control of Gate request generation together with a hosted customer-facing payment step in Payment Widget.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-invoice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateInvoice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateInvoice as default
};
