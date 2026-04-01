import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Receipts overview","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-receipts-overview.md","filePath":"gate/gate-receipts-overview.md"}');
const _sfc_main = { name: "gate/gate-receipts-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="receipts-overview" tabindex="-1">Receipts overview <a class="header-anchor" href="#receipts-overview" aria-label="Permalink to &quot;Receipts overview&quot;">​</a></h1><p>an e-wallet registration as part of processing a payment request orPlatform payment platform supports a capability of sending notifications to inform customers about various events related to processing of their payments. As a rule, these notifications contain information about operation processing results; however, depending on the needs of the merchant, notifications can inform customers about other events, for example,an update of the COF purchase&#39;s terms.</p><p>Notifications are sent if the following conditions are met:</p><p><code>saleauthcancelpayoutrefund</code>(for example, operations,,,, and)(for example, an update of the COF purchase&#39;s terms)Events which can generate notifications include both the results of operation processing as part of executing a paymentand the results of separate actions that are part of operation processing.</p><p>You can also send your customers purchase receipts—notifications that contain information about the purchases they made. In this case, notifications include a list of purchased items with the corresponding attributes for each item (price, quantity, description, and the amount of added VAT).</p><p>If you need a certain notification to be sent once again, contact technical support specialists support@platform.dev.</p><p>Sections below describe how this capability is set up, what versions of notification design can be used, and what relevant data to provide in payment requests. For more information about sent receipts to customers from Payment Widget, see the section .</p><ul><li>Sending notifications has been set up for the project in question.</li><li>The email of the customer has been passed to the payment platform (either in the initial request to perform a payment or in the clarification request).</li><li>The event that triggers sending of notifications has occurred.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-receipts-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateReceiptsOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateReceiptsOverview as default
};
