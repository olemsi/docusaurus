import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Use","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-directive-methods-avalability-request.md","filePath":"payment-page/pp-directive-methods-avalability-request.md"}');
const _sfc_main = { name: "payment-page/pp-directive-methods-avalability-request.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "use",
      tabindex: "-1"
    }, [
      createTextVNode("Use "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#use",
        "aria-label": 'Permalink to "Use"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, "hide"),
      createTextVNode("China UnionPayOpen Banking in LatviaIf you need to filter out particular payment methods within a single Payment Widget session, specify theparameter in the request for opening Payment Widget. The value of this parameter is the code of the method to be hidden (according to the reference). If there is more than one method specified, the values should be separated by a comma. The codes are the same that are used for preselecting payment methods, but keep in mind that you cannot use the codes for preselecting payment method groups. Hiding groups of payment methods is only possible by specifying each method, not the group.and Alipay payment methods are excluded from the list of methods available for the customer within this payment.")
    ], -1)
  ])]);
}
const ppDirectiveMethodsAvalabilityRequest = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppDirectiveMethodsAvalabilityRequest as default
};
