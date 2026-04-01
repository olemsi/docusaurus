import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Payment link purchases","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-purchases-payment-link-purchases.md","filePath":"dashboard/dbl-payments-purchases-payment-link-purchases.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-purchases-payment-link-purchases.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "payment-link-purchases",
      tabindex: "-1"
    }, [
      createTextVNode("Payment link purchases "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#payment-link-purchases",
        "aria-label": 'Permalink to "Payment link purchases"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "and, if necessary, also register regular COF purchases performed as part of subscription payments. For example, the customer can use the link to pay for an airline ticket or subscribe to a streaming service with the first month subscription fee debited from their accountYou can use payment links to accept one-time purchases.", -1),
    createBaseVNode("p", null, "(while also registering a regular COF purchase if necessary)To perform a one-time purchase with the use of a payment link:", -1),
    createBaseVNode("p", null, [
      createBaseVNode("strong", null, "DeactivatePayment links"),
      createTextVNode("If you need to deactivate the payment link (before the customer makes the payment), turn on the toggle switchin the corresponding row of the list in thesection. The link will no longer be valid, even if the link was already sent to the customer, and the customer will not be able to use it for making the payment.")
    ], -1)
  ])]);
}
const dblPaymentsPurchasesPaymentLinkPurchases = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblPaymentsPurchasesPaymentLinkPurchases as default
};
