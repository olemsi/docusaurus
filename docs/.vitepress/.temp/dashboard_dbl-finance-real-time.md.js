import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Monitoring real-time balance data","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-finance-real-time.md","filePath":"dashboard/dbl-finance-real-time.md"}');
const _sfc_main = { name: "dashboard/dbl-finance-real-time.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="monitoring-real-time-balance-data" tabindex="-1">Monitoring real-time balance data <a class="header-anchor" href="#monitoring-real-time-balance-data" aria-label="Permalink to &quot;Monitoring real-time balance data&quot;">​</a></h1><p>Real-time balance information includes total amounts for each currency used and the list of balances. (Keep in mind that balance calculation may take up to 30 minutes and, consequently, balance information may reflect the aforementioned delay.)</p><p>To view this information:</p><p>To refresh balance data, you can use the tab refresh feature of your browser. Auto updating of the information in this section is not supported.</p><ol><li><strong>Real-timeFinance</strong>Open thetab of thesection.</li><li><strong>INOUTIN/OUTAgreement №Agreement with</strong>You can use buttons,, andand dropdown listsandlocated on the control panel. By default, the register includes information about all balances that can be accessed with the permissions granted to a specific user account.If necessary, filter the information by balance types and agreements.</li><li>Make sure the balance register displays the required information: total balance amounts in available currencies on the left and the list with balance information on the right.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-finance-real-time.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblFinanceRealTime = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblFinanceRealTime as default
};
