import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Implementation","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-3ds-implementation.md","filePath":"payment-page/pp-3ds-implementation.md"}');
const _sfc_main = { name: "payment-page/pp-3ds-implementation.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "implementation",
      tabindex: "-1"
    }, [
      createTextVNode("Implementation "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#implementation",
        "aria-label": 'Permalink to "Implementation"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "3‑D Secure is implemented when the Platform specialists add card payments to the merchant's project. Other than that, the merchant is not required to take any additional steps.", -1),
    createBaseVNode("p", null, "The 3‑D Secure authentication does not require any specific setup as it is enabled for the project automatically (at the stage of integration).", -1)
  ])]);
}
const pp3dsImplementation = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  pp3dsImplementation as default
};
