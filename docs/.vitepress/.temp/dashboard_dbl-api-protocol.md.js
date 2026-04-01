import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Using Data API","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-api-protocol.md","filePath":"dashboard/dbl-api-protocol.md"}');
const _sfc_main = { name: "dashboard/dbl-api-protocol.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="using-data-api" tabindex="-1">Using Data API <a class="header-anchor" href="#using-data-api" aria-label="Permalink to &quot;Using Data API&quot;">​</a></h1><p>Data API is the program interface associated with Dashboard. It allows you to retrieve operational and financial data for the projects available to the Dashboard account whose token you use.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./dbl-using-api-overview.html"><strong>Data API overview</strong></a> — supported endpoint groups and the overall usage model.</li><li><a href="./dbl-using-api-operations.html"><strong>Retrieving operation data</strong></a> — operation lists and filtering options.</li><li><a href="./dbl-using-api-operations-by-payment.html"><strong>Retrieving operation data by payment</strong></a> — getting operations for a specific payment.</li><li><a href="./dbl-using-api-balances.html"><strong>Retrieving balance data</strong></a> — current balance information.</li><li><a href="./dbl-using-api-fraud.html"><strong>Retrieving fraud data</strong></a> — operations marked as fraudulent.</li><li><a href="./dbl-chargeback.html"><strong>Chargebacks</strong></a> — chargeback-related data and notifications.</li><li><a href="./dbl-api-token.html"><strong>API token</strong></a> — token generation and use.</li><li><a href="./dbl-api-signature-info.html"><strong>Signature generation</strong></a> — request signing for Data API calls.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use Data API when you need programmatic access to the same data domains that are available for monitoring in Dashboard.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-api-protocol.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblApiProtocol = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblApiProtocol as default
};
