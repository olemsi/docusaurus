import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Payment link overview","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-invoice-overview.md","filePath":"gate/gate-invoice-overview.md"}');
const _sfc_main = { name: "gate/gate-invoice-overview.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "payment-link-overview",
      tabindex: "-1"
    }, [
      createTextVNode("Payment link overview "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#payment-link-overview",
        "aria-label": 'Permalink to "Payment link overview"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, [
      createBaseVNode("em", null, "Payment link purchase"),
      createTextVNode("or recurringAs a rule, payment link purchases are used for one-time payments with or without the authorisation hold. At the same time, if needed, payment link purchases can be used for registering COF purchases, while with certain payment methods payment links can be used for obtaining the customer's consent to registration of a COF purchase, without actual withdrawal of fundsis a payment type which uses an initial request to generate a web link that customers can click to make purchases that involve a one-timetransfer of funds from the customer to the merchant..")
    ], -1),
    createBaseVNode("p", null, "The merchant can also specify the payment method for making the payment. Alternatively, the merchant can allow the customer to choose one of the payment methods available in the merchant project.Purchases of this type utilise Payment Widget. The payment link to open the payment form is delivered to the customer by the Platform payment platform via email or by the merchant using any available delivery media. The merchant chooses the payment link validity period and the payment processing scenario and specifies them in the request for initiating the payment. The validity period of the link (from the moment when the link is generated in the payment platform to the moment when the request to initiate the payment is received in the payment platform) cannot exceed 30 days, and when the link expires, the payment platform sends a corresponding callback.", -1),
    createBaseVNode("p", null, "Because payment link purchases are processed via Payment Widget, payment requests either do not contain payment instrument data, or provide it in the form of a card token. In the latter case, the customer is required only to prove the validity of the payment instrument; there is no need to specify payment instrument details in the payment form.", -1),
    createBaseVNode("p", null, "As in other payment types, payment link purchase may require additional procedures such as the 3‑D Secure authentication, submission of additional payment information, or currency conversion. These procedures are performed on the side of Payment Widget and require no additional effort on the merchant's web service side.", -1)
  ])]);
}
const gateInvoiceOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gateInvoiceOverview as default
};
