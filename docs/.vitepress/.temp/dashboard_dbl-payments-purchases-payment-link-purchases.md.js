import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Payment link purchases","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-purchases-payment-link-purchases.md","filePath":"dashboard/dbl-payments-purchases-payment-link-purchases.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-purchases-payment-link-purchases.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="payment-link-purchases" tabindex="-1">Payment link purchases <a class="header-anchor" href="#payment-link-purchases" aria-label="Permalink to &quot;Payment link purchases&quot;">​</a></h1><p>and, if necessary, also register regular COF purchases performed as part of subscription payments. For example, the customer can use the link to pay for an airline ticket or subscribe to a streaming service with the first month subscription fee debited from their accountYou can use payment links to accept one-time purchases.</p><p>(while also registering a regular COF purchase if necessary)To perform a one-time purchase with the use of a payment link:</p><p><strong>DeactivatePayment links</strong>If you need to deactivate the payment link (before the customer makes the payment), turn on the toggle switchin the corresponding row of the list in thesection. The link will no longer be valid, even if the link was already sent to the customer, and the customer will not be able to use it for making the payment.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-payments-purchases-payment-link-purchases.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblPaymentsPurchasesPaymentLinkPurchases = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblPaymentsPurchasesPaymentLinkPurchases as default
};
