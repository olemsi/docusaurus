import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Analytics overview","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-analytics-overview.md","filePath":"dashboard/dbl-analytics-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-analytics-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="analytics-overview" tabindex="-1">Analytics overview <a class="header-anchor" href="#analytics-overview" aria-label="Permalink to &quot;Analytics overview&quot;">​</a></h1><p><strong>Analytics</strong><code>OperationsFinanceRisksMerchant Admin</code>Dashboard allows you to organise and analyse payment processing information in thesection where you can create a customised data visualisation board drawing on a number of available datasets. This section can be accessed only with a separate set of permissions provided by default to user accounts with the following assigned roles:,,, and(details).</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-analytics-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblAnalyticsOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblAnalyticsOverview as default
};
