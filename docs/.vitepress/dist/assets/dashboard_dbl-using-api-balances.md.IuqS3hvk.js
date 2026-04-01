import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Retrieving balance data","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-using-api-balances.md","filePath":"dashboard/dbl-using-api-balances.md"}');
const _sfc_main = { name: "dashboard/dbl-using-api-balances.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "retrieving-balance-data",
      tabindex: "-1"
    }, [
      createTextVNode("Retrieving balance data "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#retrieving-balance-data",
        "aria-label": 'Permalink to "Retrieving balance data"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "Requests to retrieve balance information on the merchant's projects should be sent to theendpoint.", -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, "tokensignature"),
      createTextVNode("These requests must contain parameters(a token associated with the specific Dashboard user account) and(details). Responses to such requests contain information about the current state of OUT balances.")
    ], -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, '"&lt;currency>": "&lt;sum>"'),
      createTextVNode("Information about each balance includes the balance type and the available total sum in this balance's currency. The currency is specified in the name of the parameter and the sum is passed as its value ().")
    ], -1)
  ])]);
}
const dblUsingApiBalances = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblUsingApiBalances as default
};
