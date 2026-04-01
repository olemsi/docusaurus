import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Financial statements","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-finance-overview.md","filePath":"dashboard/dbl-finance-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-finance-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="financial-statements" tabindex="-1">Financial statements <a class="header-anchor" href="#financial-statements" aria-label="Permalink to &quot;Financial statements&quot;">​</a></h1><p><strong>Finance</strong><code>FinanceMerchant Admin</code>Dashboard allows you to monitor the current state of the company&#39;s balances, analyse balance statements for specified time periods, get currency conversion about exchange rates used for currency conversion, and work with your designated bank accounts for funds withdrawal from the company&#39;s balances at Platform in thesection. This section can be accessed only with a separate set of permissions provided by default to user accounts with the assignedandroles.</p><p><strong>Finance</strong>Thesection includes the following tabs:</p><p><strong>Finance</strong>When working with thesection, you should keep in mind the following special aspects of using the information it contains:</p><p>The overview of balance information, guidelines on how to monitor balances, a list of reporting positions used to itemise statements for a specified time period, guidelines on how to get currency rates and how to work with bank accounts are provided below.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-finance-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblFinanceOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblFinanceOverview as default
};
