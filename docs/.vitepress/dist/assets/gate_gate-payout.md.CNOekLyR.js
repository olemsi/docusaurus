import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Payouts","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-payout.md","filePath":"gate/gate-payout.md"}');
const _sfc_main = { name: "gate/gate-payout.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="payouts" tabindex="-1">Payouts <a class="header-anchor" href="#payouts" aria-label="Permalink to &quot;Payouts&quot;">​</a></h1><p>Gate supports payouts from merchant to customer for the payment methods and providers configured for the project.</p><h2 id="what-this-section-covers" tabindex="-1">What this section covers <a class="header-anchor" href="#what-this-section-covers" aria-label="Permalink to &quot;What this section covers&quot;">​</a></h2><ul><li>the payout workflow</li><li>required request data and payout-specific parameters</li><li>callback handling for payout results</li><li>constraints and provider-specific considerations</li></ul><h2 id="related-materials" tabindex="-1">Related materials <a class="header-anchor" href="#related-materials" aria-label="Permalink to &quot;Related materials&quot;">​</a></h2><ul><li><a href="./gate-token.html"><strong>Using tokens</strong></a> — token-based payout scenarios.</li><li><a href="./gate-requests-format.html"><strong>Request format</strong></a> — common Gate request structure.</li><li><a href="./gate-sts-protocol.html"><strong>API Description</strong></a> — technical reference for request, response, and callback formats.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when the merchant web service needs to initiate payouts directly through Gate.</p>', 8)
  ])]);
}
const gatePayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gatePayout as default
};
