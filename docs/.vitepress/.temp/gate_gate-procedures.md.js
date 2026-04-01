import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Auxiliary procedures","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-procedures.md","filePath":"gate/gate-procedures.md"}');
const _sfc_main = { name: "gate/gate-procedures.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="auxiliary-procedures" tabindex="-1">Auxiliary procedures <a class="header-anchor" href="#auxiliary-procedures" aria-label="Permalink to &quot;Auxiliary procedures&quot;">​</a></h1><p>Some payments require additional platform-side procedures beyond the primary payment request. Gate supports these procedures as part of the overall processing workflow.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./gate-payment-3ds-overview.html"><strong>3-D Secure overview</strong></a> — customer authentication during card payments.</li><li><a href="./gate-clarification.html"><strong>Additional payment info</strong></a> — submitting extra data requested during processing.</li><li><a href="./gate-avs.html"><strong>Address Verification (AVS)</strong></a> — address-based cardholder verification.</li><li><a href="./gate-conversion.html"><strong>Currency conversion</strong></a> — handling payments involving different currencies.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when a payment flow includes authentication, clarification, address verification, or conversion steps in addition to the main request.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-procedures.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateProcedures = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateProcedures as default
};
