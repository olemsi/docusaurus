import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Monitoring payments","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-overview.md","filePath":"dashboard/dbl-payments-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="monitoring-payments" tabindex="-1">Monitoring payments <a class="header-anchor" href="#monitoring-payments" aria-label="Permalink to &quot;Monitoring payments&quot;">​</a></h1><p>Dashboard lets you monitor payment processing across consolidated and specialised sections, inspect individual payment details, and perform operational actions permitted for your role.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./dbl-payments-control.html"><strong>Monitoring payment processing</strong></a> — working with payment registers, filters, and payment detail tabs.</li><li><a href="./dbl-payments-purchases-overview.html"><strong>Performing purchases</strong></a> — payment links, MO/TO payments, and two-step purchase operations.</li><li><a href="./dbl-payments-refunds.html"><strong>Issuing refunds</strong></a> — full and partial refunds for supported purchase types.</li><li><a href="./dbl-payments-payouts-overview.html"><strong>Performing payouts</strong></a> — single and batch payouts in Dashboard.</li><li><a href="./dbl-payments-subscriptions-overview.html"><strong>Managing subscriptions</strong></a> — creating, updating, retrying, and cancelling recurring debits.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when you need to work with payment operations from the Dashboard side rather than through Gate or Payment Widget APIs.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-payments-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblPaymentsOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblPaymentsOverview as default
};
