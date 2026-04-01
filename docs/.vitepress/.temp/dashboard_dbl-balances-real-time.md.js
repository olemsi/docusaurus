import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Monitoring real-time balance data","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-balances-real-time.md","filePath":"dashboard/dbl-balances-real-time.md"}');
const _sfc_main = { name: "dashboard/dbl-balances-real-time.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="monitoring-real-time-balance-data" tabindex="-1">Monitoring real-time balance data <a class="header-anchor" href="#monitoring-real-time-balance-data" aria-label="Permalink to &quot;Monitoring real-time balance data&quot;">​</a></h1><p>Real-time balance information includes total amounts for each currency used and the list of balances. (Keep in mind that balance calculation may take up to 30 minutes and, consequently, balance information may reflect the aforementioned delay.)</p><ol><li><strong>Real-timeFinance</strong>Open thetab of thesection.</li><li><strong>IN</strong>,<strong>OUTIN/OUT</strong>(,)<strong>INFinance</strong>If thetab is not available in thesection, you should contact your Platform account manager.Expand the tab you needand make sure the balance register displays the required information: total amounts in available currencies at top of the tab and the list with balance information below.</li><li>You can use the dropdown list of agreements concluded with Platform.If necessary, filter the information by relevant agreements.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-balances-real-time.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblBalancesRealTime = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblBalancesRealTime as default
};
