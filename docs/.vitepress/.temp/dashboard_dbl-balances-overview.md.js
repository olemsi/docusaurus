import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Monitoring balances","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-balances-overview.md","filePath":"dashboard/dbl-balances-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-balances-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="monitoring-balances" tabindex="-1">Monitoring balances <a class="header-anchor" href="#monitoring-balances" aria-label="Permalink to &quot;Monitoring balances&quot;">​</a></h1><p>Dashboard provides finance-related views for current balances, statements, and exchange-rate information. These views are intended for monitoring and operational analysis of financial data available in the platform.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./dbl-finance-overview.html"><strong>Financial statements</strong></a> — available finance tabs and statement-related tools.</li><li><a href="./dbl-balances-aspects.html"><strong>Balances overview</strong></a> — balance types, availability, and usage specifics.</li><li><a href="./dbl-finance-statement.html"><strong>Analysing statement data</strong></a> — how statement data is structured and reviewed.</li><li><a href="./dbl-balances-real-time.html"><strong>Retrieving balance data in real time</strong></a> — up-to-date balance retrieval scenarios.</li><li><a href="./dbl-balances-currency-rates.html"><strong>Currency rates</strong></a> — exchange-rate information used in finance workflows.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section for balance monitoring and statement analysis. For programmatic access to the same domain, see <a href="./dbl-api-protocol.html"><strong>Using Data API</strong></a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-balances-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblBalancesOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblBalancesOverview as default
};
