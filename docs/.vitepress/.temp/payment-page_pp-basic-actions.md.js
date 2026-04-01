import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Basic actions","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-basic-actions.md","filePath":"payment-page/pp-basic-actions.md"}');
const _sfc_main = { name: "payment-page/pp-basic-actions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="basic-actions" tabindex="-1">Basic actions <a class="header-anchor" href="#basic-actions" aria-label="Permalink to &quot;Basic actions&quot;">​</a></h1><p>Payment Widget supports the main payment scenarios required for customer-facing checkout flows, from one-step purchases to payment-data tokenization.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./pp-purchase.html"><strong>Purchase processing</strong></a> — one-step purchases with immediate debiting.</li><li><a href="./pp-purchase-auth.html"><strong>Authorisation hold</strong></a> — the first step of a two-step purchase flow.</li><li><a href="./pp-recurring.html"><strong>COF purchase registration</strong></a> — registering payment credentials for future recurring debits.</li><li><a href="./pp-account-verification.html"><strong>Payment instrument verification</strong></a> — zero-amount or non-zero validation flows.</li><li><a href="./pp-token.html"><strong>Tokenization</strong></a> — collecting payment data and creating a reusable token.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when you need the customer-facing flow for a payment or verification scenario to be handled through Payment Widget.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-basic-actions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppBasicActions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppBasicActions as default
};
