import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dashboard","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-about.md","filePath":"dashboard/dbl-about.md"}');
const _sfc_main = { name: "dashboard/dbl-about.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dashboard" tabindex="-1">Dashboard <a class="header-anchor" href="#dashboard" aria-label="Permalink to &quot;Dashboard&quot;">​</a></h1><p>This page maps the Dashboard documentation section and helps you navigate the main areas of the interface.</p><h2 id="overview-and-getting-started" tabindex="-1">Overview and getting started <a class="header-anchor" href="#overview-and-getting-started" aria-label="Permalink to &quot;Overview and getting started&quot;">​</a></h2><p>Use these articles to understand what Dashboard is, how access is organised, and how the interface is structured:</p><ul><li><a href="./index.html"><strong>Overview</strong></a> — what Dashboard is used for and which tasks it covers.</li><li><a href="./dbl-roles-overview.html"><strong>Capabilities and roles</strong></a> — core capabilities, default access roles, and access rights distribution.</li><li><a href="./dbl-interface-overview.html"><strong>User interface</strong></a> — main navigation elements, sections, registers, and common interface patterns.</li><li><a href="./dbl-projects.html"><strong>Managing projects</strong></a> — project-level settings available in Dashboard, including callback configuration.</li></ul><h2 id="working-with-the-interface" tabindex="-1">Working with the interface <a class="header-anchor" href="#working-with-the-interface" aria-label="Permalink to &quot;Working with the interface&quot;">​</a></h2><p>These sections cover the operational tasks that merchants perform in Dashboard:</p><ul><li><a href="./dbl-payments-overview.html"><strong>Monitoring payments</strong></a> — payment monitoring, purchases, refunds, payouts, and subscription management.</li><li><a href="./dbl-balances-overview.html"><strong>Monitoring balances</strong></a> — balances, statements, currency rates, and finance-related data.</li><li><a href="./dbl-fraud-operations-control-overview.html"><strong>Risk management</strong></a> — fraud monitoring plus whitelist and blacklist management.</li></ul><h2 id="related-interfaces" tabindex="-1">Related interfaces <a class="header-anchor" href="#related-interfaces" aria-label="Permalink to &quot;Related interfaces&quot;">​</a></h2><p>Dashboard can be combined with other interfaces of the platform:</p><ul><li><a href="./dbl-api-protocol.html"><strong>Using Data API</strong></a> — retrieve operations, balances, fraud events, and chargeback data programmatically.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-about.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblAbout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblAbout as default
};
