import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Related links","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-payment-status-request-related-links.md","filePath":"gate/gate-payment-status-request-related-links.md"}');
const _sfc_main = { name: "gate/gate-payment-status-request-related-links.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "related-links",
      tabindex: "-1"
    }, [
      createTextVNode("Related links "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#related-links",
        "aria-label": 'Permalink to "Related links"'
      }, "​")
    ], -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, "—general information about integration with the payment platform using Gate."),
      createBaseVNode("li", null, "—detailed information about types, workflows, and possible statuses of supported payments."),
      createBaseVNode("li", null, "—detailed information about generating and verifying signatures in requests and callbacks sent by the payment platform."),
      createBaseVNode("li", null, "—a comprehensive list of error and response codes used in the payment platform to provide operation processing information.")
    ], -1)
  ])]);
}
const gatePaymentStatusRequestRelatedLinks = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gatePaymentStatusRequestRelatedLinks as default
};
