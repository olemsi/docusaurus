import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Workflow","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-invoice-workflow.md","filePath":"gate/gate-invoice-workflow.md"}');
const _sfc_main = { name: "gate/gate-invoice-workflow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="workflow" tabindex="-1">Workflow <a class="header-anchor" href="#workflow" aria-label="Permalink to &quot;Workflow&quot;">​</a></h1><p>When processing a payment link purchase by using Gate, merchant&#39;s web service is required to do the following:</p><p>In a two-step payment link purchase, you need to complete the second step which includes either capturing the authorised amount or cancelling authorisation. For more information about performing the second step in two-step purchase, see .</p><p>The following diagram provides the detailed picture of payment link purchase processing.</p><p><em>before</em>To cancel the purchase, do the followingthe customer confirms the purchase:</p><p>The next sections describes request formats and the parameters for initiating and cancelling payment link purchases; the sections that follow also discuss payment callback formats. Information about possible statuses of this payment type can be found in the corresponding article.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-invoice-workflow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateInvoiceWorkflow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateInvoiceWorkflow as default
};
