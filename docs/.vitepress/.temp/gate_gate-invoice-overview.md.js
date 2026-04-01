import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Payment link overview","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-invoice-overview.md","filePath":"gate/gate-invoice-overview.md"}');
const _sfc_main = { name: "gate/gate-invoice-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="payment-link-overview" tabindex="-1">Payment link overview <a class="header-anchor" href="#payment-link-overview" aria-label="Permalink to &quot;Payment link overview&quot;">​</a></h1><p><em>Payment link purchase</em>or recurringAs a rule, payment link purchases are used for one-time payments with or without the authorisation hold. At the same time, if needed, payment link purchases can be used for registering COF purchases, while with certain payment methods payment links can be used for obtaining the customer&#39;s consent to registration of a COF purchase, without actual withdrawal of fundsis a payment type which uses an initial request to generate a web link that customers can click to make purchases that involve a one-timetransfer of funds from the customer to the merchant..</p><p>The merchant can also specify the payment method for making the payment. Alternatively, the merchant can allow the customer to choose one of the payment methods available in the merchant project.Purchases of this type utilise Payment Widget. The payment link to open the payment form is delivered to the customer by the Platform payment platform via email or by the merchant using any available delivery media. The merchant chooses the payment link validity period and the payment processing scenario and specifies them in the request for initiating the payment. The validity period of the link (from the moment when the link is generated in the payment platform to the moment when the request to initiate the payment is received in the payment platform) cannot exceed 30 days, and when the link expires, the payment platform sends a corresponding callback.</p><p>Because payment link purchases are processed via Payment Widget, payment requests either do not contain payment instrument data, or provide it in the form of a card token. In the latter case, the customer is required only to prove the validity of the payment instrument; there is no need to specify payment instrument details in the payment form.</p><p>As in other payment types, payment link purchase may require additional procedures such as the 3‑D Secure authentication, submission of additional payment information, or currency conversion. These procedures are performed on the side of Payment Widget and require no additional effort on the merchant&#39;s web service side.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-invoice-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateInvoiceOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateInvoiceOverview as default
};
