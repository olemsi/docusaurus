import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"partner","description":"","frontmatter":{},"headers":[],"relativePath":"payment-methods-flat/pm-ukrcardbank-dash-analysis.md","filePath":"payment-methods-flat/pm-ukrcardbank-dash-analysis.md"}');
const _sfc_main = { name: "payment-methods-flat/pm-ukrcardbank-dash-analysis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="partner" tabindex="-1">partner <a class="header-anchor" href="#partner" aria-label="Permalink to &quot;partner&quot;">​</a></h1><p>As with other payment methods Ecommlabs offers, when using the partner method, you have several options to analyse the information about payments and operations performed by using the method—alone or in conjunction with other methods.</p><p><strong>Analytics</strong>You can load and analyse all the necessary information in Dashboard, for instance you can use the analytic panels on thetab to this end.</p><p>Also, you can export the information for further analysis by using third party analytical tools. The following options are available:</p><p>If you have any further questions regarding payment data analysis, contact Ecommlabs technical support.</p><ul><li>PaymentsDashboard allows you to download reports in CSV and XLS formats—by using the tools on thetab. You can perform export as a one-time download to your local computer or have payment data regularly exported and delivered to email addresses you specify.</li><li>Data APIallows you to have payment information exported in JSON format and delivered to a URL you specify. The payment information is exported by using the /operations/get queries.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-methods-flat/pm-ukrcardbank-dash-analysis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pmUkrcardbankDashAnalysis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pmUkrcardbankDashAnalysis as default
};
