import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, E as createVNode, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Host-to-host API","description":"","frontmatter":{},"headers":[],"relativePath":"gate/index.md","filePath":"gate/index.md"}');
const _sfc_main = { name: "gate/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArchDiagram = resolveComponent("ArchDiagram");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "host-to-host-api",
      tabindex: "-1"
    }, [
      createTextVNode("Host-to-host API "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#host-to-host-api",
        "aria-label": 'Permalink to "Host-to-host API"'
      }, "​")
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, "Host-to-host API is the direct server-to-server integration mode for merchants that want full control over their own checkout, server-side payment logic, and payment-data flow.", -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "Use Host-to-host API when you want to:", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("ul", null, [
      createBaseVNode("li", null, "build your own payment form instead of using Payment Widget"),
      createBaseVNode("li", null, "send payment requests directly from your back end"),
      createBaseVNode("li", null, "receive synchronous API responses and asynchronous callbacks"),
      createBaseVNode("li", null, "manage purchase, refund, payout, and verification flows from your own system")
    ], -1)),
    _cache[4] || (_cache[4] = createBaseVNode("p", null, "Processing card payments through Host-to-host API requires your side of the payment flow to meet the relevant compliance requirements, because the payment UI and card-data collection are handled in your own environment.", -1)),
    createVNode(_component_ArchDiagram, { variant: "gate" }),
    _cache[5] || (_cache[5] = createStaticVNode("", 8))
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
