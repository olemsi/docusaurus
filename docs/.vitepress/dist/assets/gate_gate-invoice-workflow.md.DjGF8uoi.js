import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Workflow","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-invoice-workflow.md","filePath":"gate/gate-invoice-workflow.md"}');
const _sfc_main = { name: "gate/gate-invoice-workflow.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "workflow",
      tabindex: "-1"
    }, [
      createTextVNode("Workflow "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#workflow",
        "aria-label": 'Permalink to "Workflow"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "When processing a payment link purchase by using Gate, merchant's web service is required to do the following:", -1),
    createBaseVNode("p", null, "In a two-step payment link purchase, you need to complete the second step which includes either capturing the authorised amount or cancelling authorisation. For more information about performing the second step in two-step purchase, see .", -1),
    createBaseVNode("p", null, "The following diagram provides the detailed picture of payment link purchase processing.", -1),
    createBaseVNode("p", null, [
      createBaseVNode("em", null, "before"),
      createTextVNode("To cancel the purchase, do the followingthe customer confirms the purchase:")
    ], -1),
    createBaseVNode("p", null, "The next sections describes request formats and the parameters for initiating and cancelling payment link purchases; the sections that follow also discuss payment callback formats. Information about possible statuses of this payment type can be found in the corresponding article.", -1)
  ])]);
}
const gateInvoiceWorkflow = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gateInvoiceWorkflow as default
};
