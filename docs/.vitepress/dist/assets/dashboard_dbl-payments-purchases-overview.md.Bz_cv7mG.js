import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Performing purchases","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-purchases-overview.md","filePath":"dashboard/dbl-payments-purchases-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-purchases-overview.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "performing-purchases",
      tabindex: "-1"
    }, [
      createTextVNode("Performing purchases "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#performing-purchases",
        "aria-label": 'Permalink to "Performing purchases"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "Dashboard allows users to:", -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, "and register regular COF purchases (if necessary)Create, send, and deactivate payment links in order to process one-time purchases. General description of the payment link purchase workflow and possible statuses can be found in the corresponding article."),
      createBaseVNode("li", null, "to the workflowto the workflowto the workflowCertain restrictions may apply.Take MO/TO (Mail Order / Telephone Order) payments using a payment form when the customer provides payment card details over the phone, by email, or other means of communication. MO/TO payments are processed as one-time purchases according."),
      createBaseVNode("li", null, "corresponding articlecorresponding sectioncorresponding articleManage authorisation holds as part of executing two-step purchases. Held funds can be captured or released with the use of individual and batch requests. General description of the two-step purchase workflow and possible statuses can be found in the.")
    ], -1)
  ])]);
}
const dblPaymentsPurchasesOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblPaymentsPurchasesOverview as default
};
