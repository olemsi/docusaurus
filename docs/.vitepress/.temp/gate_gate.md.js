import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Additional capabilities","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate.md","filePath":"gate/gate.md"}');
const _sfc_main = { name: "gate/gate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="additional-capabilities" tabindex="-1">Additional capabilities <a class="header-anchor" href="#additional-capabilities" aria-label="Permalink to &quot;Additional capabilities&quot;">​</a></h1><p>Gate includes optional capabilities that help monitor payments, improve acceptance, reuse payment data, and support specialised business scenarios.</p><h2 id="monitoring-payment-processing" tabindex="-1">Monitoring payment processing <a class="header-anchor" href="#monitoring-payment-processing" aria-label="Permalink to &quot;Monitoring payment processing&quot;">​</a></h2><ul><li><a href="./gate-payment-status-request-overview.html"><strong>Payment status overview</strong></a> — retrieving current payment status on demand.</li></ul><h2 id="boosting-payment-acceptance-rates" tabindex="-1">Boosting payment acceptance rates <a class="header-anchor" href="#boosting-payment-acceptance-rates" aria-label="Permalink to &quot;Boosting payment acceptance rates&quot;">​</a></h2><ul><li><a href="./gate-cascading-cards.html"><strong>Cascading option</strong></a> — retrying payment processing through an alternative provider when supported.</li></ul><h2 id="using-payment-data" tabindex="-1">Using payment data <a class="header-anchor" href="#using-payment-data" aria-label="Permalink to &quot;Using payment data&quot;">​</a></h2><ul><li><a href="./gate-token.html"><strong>Using tokens</strong></a> — processing by stored payment credentials.</li><li><a href="./gate-data-migration-overview.html"><strong>General information on data migration</strong></a> — migrating saved payment data and recurring records.</li></ul><h2 id="informing-customers" tabindex="-1">Informing customers <a class="header-anchor" href="#informing-customers" aria-label="Permalink to &quot;Informing customers&quot;">​</a></h2><ul><li><a href="./gate-receipts-overview.html"><strong>Receipts overview</strong></a> — sending customer notifications and receipts.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when your integration needs features beyond the core payment flows covered in the main Gate operation sections.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gate as default
};
