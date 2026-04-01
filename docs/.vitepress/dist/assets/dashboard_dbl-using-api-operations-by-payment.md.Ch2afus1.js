import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Operations by payment","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-using-api-operations-by-payment.md","filePath":"dashboard/dbl-using-api-operations-by-payment.md"}');
const _sfc_main = { name: "dashboard/dbl-using-api-operations-by-payment.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "operations-by-payment",
      tabindex: "-1"
    }, [
      createTextVNode("Operations by payment "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#operations-by-payment",
        "aria-label": 'Permalink to "Operations by payment"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "Requests to retrieve information about all operations initiated within a specific payment should be sent to theendpoint.", -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, "payment_idtokensignature"),
      createTextVNode("These requests must contain parameters(ID of the target payment),(a token associated with the specific Dashboard user account), and(details). Responses to such requests contain information about the operations initiated within the target payment.")
    ], -1)
  ])]);
}
const dblUsingApiOperationsByPayment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblUsingApiOperationsByPayment as default
};
