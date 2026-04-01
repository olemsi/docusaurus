import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cancelling the subscription","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-subscriptions-cancelling.md","filePath":"dashboard/dbl-payments-subscriptions-cancelling.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-subscriptions-cancelling.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cancelling-the-subscription" tabindex="-1">Cancelling the subscription <a class="header-anchor" href="#cancelling-the-subscription" aria-label="Permalink to &quot;Cancelling the subscription&quot;">​</a></h1><p>To cancel automatic debits executed as part of the regular COF purchase:</p><ol><li><strong>Subscriptions</strong>You can use the Search function (search by payment identifier, for example) or go toand use the registry and filters.Open the payment information tab of the subscription you need.</li><li><strong>Subscription settings****Go to SettingsCancel Subscription</strong>Clickin payment management panel and then clickin the top left corner of the window that opens.Open thewindow and select cancelling the subscription.</li><li>Confirm cancellation in the modal window.</li><li><strong>Settings HistoryCancelled</strong>Clickon the payment management panel: the registry of changes to subscription terms should contain a record of the update. In addition, the status of the regular COF purchase in the subscriptions list should state.Make sure that the subscription has been cancelled.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-payments-subscriptions-cancelling.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblPaymentsSubscriptionsCancelling = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblPaymentsSubscriptionsCancelling as default
};
