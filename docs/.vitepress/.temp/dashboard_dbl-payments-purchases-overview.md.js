import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Performing purchases","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-purchases-overview.md","filePath":"dashboard/dbl-payments-purchases-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-purchases-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="performing-purchases" tabindex="-1">Performing purchases <a class="header-anchor" href="#performing-purchases" aria-label="Permalink to &quot;Performing purchases&quot;">​</a></h1><p>Dashboard allows users to:</p><ul><li>and register regular COF purchases (if necessary)Create, send, and deactivate payment links in order to process one-time purchases. General description of the payment link purchase workflow and possible statuses can be found in the corresponding article.</li><li>to the workflowto the workflowto the workflowCertain restrictions may apply.Take MO/TO (Mail Order / Telephone Order) payments using a payment form when the customer provides payment card details over the phone, by email, or other means of communication. MO/TO payments are processed as one-time purchases according.</li><li>corresponding articlecorresponding sectioncorresponding articleManage authorisation holds as part of executing two-step purchases. Held funds can be captured or released with the use of individual and batch requests. General description of the two-step purchase workflow and possible statuses can be found in the.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-payments-purchases-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblPaymentsPurchasesOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblPaymentsPurchasesOverview as default
};
