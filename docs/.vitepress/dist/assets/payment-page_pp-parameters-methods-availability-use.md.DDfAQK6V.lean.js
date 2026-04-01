import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Use","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-parameters-methods-availability-use.md","filePath":"payment-page/pp-parameters-methods-availability-use.md"}');
const _sfc_main = { name: "payment-page/pp-parameters-methods-availability-use.md" };
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
      createBaseVNode("em", null, "by the currency"),
      createBaseVNode("code", null, "payment_currency"),
      createTextVNode("Once the functionality of filtering payment methodsis set up, no actions by the web service are required since the payment currency (passed in theparameter) is a required parameter for invoking Payment Widget. Filtering by this parameter will be carried out automatically.")
    ], -1),
    createBaseVNode("p", null, [
      createBaseVNode("em", null, "by the country"),
      createBaseVNode("code", null, "region_code"),
      createTextVNode("Once the functionality of filtering payment methodsis set up, the web service needs to be configured in order to pass in the requests for opening Payment Widget relevant country codes (the customer's country is specified in theparameter), according to the reference. If the country code is specified in the request, filtering by this parameter will be carried out automatically. If not, payment methods will be filtered by the country associated with an IP-address of the customer's device.")
    ], -1)
  ])]);
}
const ppParametersMethodsAvailabilityUse = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppParametersMethodsAvailabilityUse as default
};
