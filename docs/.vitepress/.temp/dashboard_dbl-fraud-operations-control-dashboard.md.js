import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Using the Dashboard tools","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-fraud-operations-control-dashboard.md","filePath":"dashboard/dbl-fraud-operations-control-dashboard.md"}');
const _sfc_main = { name: "dashboard/dbl-fraud-operations-control-dashboard.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="using-the-dashboard-tools" tabindex="-1">Using the Dashboard tools <a class="header-anchor" href="#using-the-dashboard-tools" aria-label="Permalink to &quot;Using the Dashboard tools&quot;">​</a></h1><p>Use the following tools to monitor fraudulent operations:</p><p>When working with these registers, you can use standard filtering tools (learn more) as well as payment information tabs which specify details of individual payments and all operations initiated within them (to open the payment information tab, click the row of the payment you need in the list).</p><p><strong>Risks</strong><code>RisksMerchant Admin</code>Access to fraud information in thesection and payment information tabs is limited by a separate permissions set and, by default, is granted to user accounts with theandroles. In addition, managing reports requires a separate permission that is available to all user accounts but not included in a basic permissions set.</p><p>When working with payments lists and fraud register, consider the following:</p><p>To monitor information about the relevant operations, you need:</p><ol><li><strong>PaymentsRisks</strong>Go to the required section:or.</li><li>Find the operation you need using filters if necessary ().</li><li><code>decline402</code>In the Payments list, the operation declined by Platform as high risk can be found by payment statusand the service response status code (such codes includeand codes from RCS). Operations flagged as fraudulent by other parties can be found by using the fraud indicator (also with the filter).</li><li><strong>Fraudulent payments information</strong>In the fraud register and thelocated in the payment information tab, you can view the details of the fraud for a certain operation.Verify the information you need, directly in the list or in the payment information tabs.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-fraud-operations-control-dashboard.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblFraudOperationsControlDashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblFraudOperationsControlDashboard as default
};
