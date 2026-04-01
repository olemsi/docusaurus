import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"General information","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-directive-methods-avalability-info.md","filePath":"payment-page/pp-directive-methods-avalability-info.md"}');
const _sfc_main = { name: "payment-page/pp-directive-methods-avalability-info.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "general-information",
      tabindex: "-1"
    }, [
      createTextVNode("General information "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#general-information",
        "aria-label": 'Permalink to "General information"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, [
      createBaseVNode("em", null, "Directive filtering"),
      createTextVNode("allows you to hide those payment methods that are available within the current project but are not relevant for a particular payment due to region- or customer-specific reasons and other factors. With this filtering option, the page for selecting payment methods displays to the customer all available methods except for the hidden ones.")
    ], -1),
    createBaseVNode("p", null, "However, if the payment is to be processed with the use of only one payment method or group, you might consider setting up the capability of preselecting payment methods and groups (details).", -1),
    createBaseVNode("p", null, "However, if the payment is to be processed with the use of only one payment method, you might consider setting up the capability of preselecting payment methods (details).", -1)
  ])]);
}
const ppDirectiveMethodsAvalabilityInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppDirectiveMethodsAvalabilityInfo as default
};
