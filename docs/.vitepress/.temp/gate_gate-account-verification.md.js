import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Payment instrument verification","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-account-verification.md","filePath":"gate/gate-account-verification.md"}');
const _sfc_main = { name: "gate/gate-account-verification.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="payment-instrument-verification" tabindex="-1">Payment instrument verification <a class="header-anchor" href="#payment-instrument-verification" aria-label="Permalink to &quot;Payment instrument verification&quot;">​</a></h1><p>Gate can be used to verify a payment instrument before a later purchase or payout flow. Verification can be based on a zero-amount check or on authorising a non-zero amount, depending on the project setup.</p><h2 id="what-this-section-covers" tabindex="-1">What this section covers <a class="header-anchor" href="#what-this-section-covers" aria-label="Permalink to &quot;What this section covers&quot;">​</a></h2><ul><li>verification use cases</li><li>supported verification workflows</li><li>request and callback handling</li><li>specifics of verification by card number or by token</li></ul><h2 id="related-materials" tabindex="-1">Related materials <a class="header-anchor" href="#related-materials" aria-label="Permalink to &quot;Related materials&quot;">​</a></h2><ul><li><a href="./gate-token.html"><strong>Using tokens</strong></a> — working with stored payment credentials.</li><li><a href="./gate-procedures.html"><strong>Auxiliary procedures</strong></a> — additional steps that may accompany verification.</li><li><a href="./gate-sts-protocol.html"><strong>API Description</strong></a> — technical reference for request and callback formats.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when you need to validate a card or another supported payment instrument before subsequent operations.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-account-verification.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateAccountVerification = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateAccountVerification as default
};
