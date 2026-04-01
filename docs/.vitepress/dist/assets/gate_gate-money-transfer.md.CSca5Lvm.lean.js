import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Available workflows","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-money-transfer.md","filePath":"gate/gate-money-transfer.md"}');
const _sfc_main = { name: "gate/gate-money-transfer.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "available-workflows",
      tabindex: "-1"
    }, [
      createTextVNode("Available workflows "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#available-workflows",
        "aria-label": 'Permalink to "Available workflows"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "To initiate money transfer processing through Gate, the web service is required to do the following:", -1),
    createBaseVNode("p", null, "The following diagram illustrates the money transfer processing workflow (without completion of additional procedures).", -1),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, "Send a request to theendpoint."),
      createBaseVNode("li", null, "If necessary, complete an additional procedure (for example, the )."),
      createBaseVNode("li", null, "Receive a callback with the money transfer result from the payment platform.")
    ], -1)
  ])]);
}
const gateMoneyTransfer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gateMoneyTransfer as default
};
