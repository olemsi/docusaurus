import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Risk management","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-fraud-operations-control-overview.md","filePath":"dashboard/dbl-fraud-operations-control-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-fraud-operations-control-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="risk-management" tabindex="-1">Risk management <a class="header-anchor" href="#risk-management" aria-label="Permalink to &quot;Risk management&quot;">​</a></h1><p>Dashboard includes tools for monitoring suspicious activity and managing whitelist and blacklist rules used in fraud control workflows.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./dbl-risks-bwlist-overview.html"><strong>Whitelists and blacklists overview</strong></a> — how trust and fraud rules are applied.</li><li><a href="./dbl-fraud-operations-control-dashboard.html"><strong>Managing lists in Dashboard</strong></a> — interface tools for reviewing and maintaining risk data.</li><li><a href="./dbl-fraud-operations-control-mail.html"><strong>Risk notifications by email</strong></a> — automated notifications for fraud-related events.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when you need to review fraudulent operations, maintain list-based risk rules, or connect Dashboard-based risk monitoring with notification workflows.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-fraud-operations-control-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblFraudOperationsControlOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblFraudOperationsControlOverview as default
};
