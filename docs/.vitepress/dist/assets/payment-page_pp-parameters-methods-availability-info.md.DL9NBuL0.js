import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"General information","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-parameters-methods-availability-info.md","filePath":"payment-page/pp-parameters-methods-availability-info.md"}');
const _sfc_main = { name: "payment-page/pp-parameters-methods-availability-info.md" };
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
      createBaseVNode("em", null, "Parametric filtering"),
      createTextVNode("ensures automatic hiding of those payment methods that are available within the current project but are not relevant for the country or currency of a particular payment. With this filtering option, the page for selecting payment methods displays to the customer only relevant payment methods with relevancy determined by the specific criteria.")
    ], -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, "PLN"),
      createTextVNode("For example, if within the current project payment method availability is determined by currency, and in general situations, standard card payments, , , and are usually available, when the request for opening Payment Widget specifies the currency of Polish zloty (), then the customer will be shown the selection of standard card payments and the payment methods.")
    ], -1),
    createBaseVNode("p", null, "You can choose which parameter will be used for filtering (country or currency) and how to filter individual methods depending on their specific characteristics and the characteristics of the web service, following which filtering will be configured accordingly. Keep in mind that once set up, the option to filter payment methods by currency is applied each time when Payment Widget is invoked.Other than the aforementioned considerations, no actions are required once this functionality is set up.", -1)
  ])]);
}
const ppParametersMethodsAvailabilityInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppParametersMethodsAvailabilityInfo as default
};
