import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Purchase refunds","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-refund.md","filePath":"gate/gate-refund.md"}');
const _sfc_main = { name: "gate/gate-refund.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="purchase-refunds" tabindex="-1">Purchase refunds <a class="header-anchor" href="#purchase-refunds" aria-label="Permalink to &quot;Purchase refunds&quot;">​</a></h1><p>Gate lets you refund completed purchases in full or in part, subject to the rules of the payment method and provider involved in processing.</p><h2 id="what-this-section-covers" tabindex="-1">What this section covers <a class="header-anchor" href="#what-this-section-covers" aria-label="Permalink to &quot;What this section covers&quot;">​</a></h2><ul><li>the general refund model in the platform</li><li>limitations and special aspects of refund processing</li><li>request and callback formats for refund operations</li></ul><h2 id="related-materials" tabindex="-1">Related materials <a class="header-anchor" href="#related-materials" aria-label="Permalink to &quot;Related materials&quot;">​</a></h2><ul><li><a href="./gate-purchase.html"><strong>One-time purchases</strong></a> — purchase flows that can later be refunded.</li><li><a href="./gate-requests-format.html"><strong>Request format</strong></a> — common Gate request structure.</li><li><a href="./gate-sts-protocol.html"><strong>API Description</strong></a> — technical reference for Gate requests, responses, and callbacks.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when you need to return funds for a purchase from your own web service through Gate.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-refund.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateRefund = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateRefund as default
};
