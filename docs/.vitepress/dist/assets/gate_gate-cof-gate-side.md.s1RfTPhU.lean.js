import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"COF callback format","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-cof-gate-side.md","filePath":"gate/gate-cof-gate-side.md"}');
const _sfc_main = { name: "gate/gate-cof-gate-side.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "cof-callback-format",
      tabindex: "-1"
    }, [
      createTextVNode("COF callback format "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#cof-callback-format",
        "aria-label": 'Permalink to "COF callback format"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "The payment platform communicates results of processing each debit operation in callbacks sent to your web service. These callbacks are arranged in a standard format the detailed description of which can be found in .", -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, "4.00 USD431422******0056customer_1242"),
      createTextVNode("The following callback contains information about processingdebit operation for cardof the customer with identifierwithin project. The capability of debiting retries is not available.")
    ], -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, "recurring_retry"),
      createTextVNode("If the capability to perform debiting retry attempts is enabled, callbacks include theobject. The description of its format can be found in this article.")
    ], -1)
  ])]);
}
const gateCofGateSide = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gateCofGateSide as default
};
