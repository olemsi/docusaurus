import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"faq/index.md","filePath":"faq/index.md"}');
const _sfc_main = { name: "faq/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "faq",
      tabindex: "-1"
    }, [
      createTextVNode("FAQ "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#faq",
        "aria-label": 'Permalink to "FAQ"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "Frequently asked questions about payment platform integration.", -1)
  ])]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
