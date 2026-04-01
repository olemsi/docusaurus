import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Options for opening Payment Widget","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-integration.md","filePath":"payment-page/pp-integration.md"}');
const _sfc_main = { name: "payment-page/pp-integration.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "options-for-opening-payment-widget",
      tabindex: "-1"
    }, [
      createTextVNode("Options for opening Payment Widget "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#options-for-opening-payment-widget",
        "aria-label": 'Permalink to "Options for opening Payment Widget"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "There are different options to open the Payment Widget payment form on customers' devices: in a separate browser tab, in a modal window, and directly on the web service page—in an iframe element. These options are managed on the web service side, and when they are set up, various factors can be considered: for example, the payment form can be set up in such a way that on mobile devices it opens in a separate browser tab, while on other devices it opens in a modal window.", -1),
    createBaseVNode("p", null, "In order to configure the opening of Payment Widget on the web service side in a way needed, address the general issues of the interaction concepts and refer to the articles of this subsection.", -1)
  ])]);
}
const ppIntegration = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppIntegration as default
};
