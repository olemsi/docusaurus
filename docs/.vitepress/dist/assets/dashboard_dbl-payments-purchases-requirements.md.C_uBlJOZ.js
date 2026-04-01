import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Requirements","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-purchases-requirements.md","filePath":"dashboard/dbl-payments-purchases-requirements.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-purchases-requirements.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "requirements",
      tabindex: "-1"
    }, [
      createTextVNode("Requirements "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#requirements",
        "aria-label": 'Permalink to "Requirements"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "To perform purchases by using Dashboard, the following requirements must be met:", -1),
    createBaseVNode("p", null, "If any issues regarding access rights occur, they can be solved with the merchant's specialists.", -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, "Two-factor authentication is required for accessing Dashboard in order to take MO/TO payments."),
      createBaseVNode("li", null, "The user account must be granted the appropriate permissions. Each action, including capturing held funds and releasing authorisation holds, requires a specific permission."),
      createBaseVNode("li", null, "and the payment methodRequired actions are supported for the selected project.")
    ], -1)
  ])]);
}
const dblPaymentsPurchasesRequirements = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblPaymentsPurchasesRequirements as default
};
