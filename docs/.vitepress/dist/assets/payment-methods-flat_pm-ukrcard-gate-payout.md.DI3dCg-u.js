import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"partner","description":"","frontmatter":{},"headers":[],"relativePath":"payment-methods-flat/pm-ukrcard-gate-payout.md","filePath":"payment-methods-flat/pm-ukrcard-gate-payout.md"}');
const _sfc_main = { name: "payment-methods-flat/pm-ukrcard-gate-payout.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="partner" tabindex="-1">partner <a class="header-anchor" href="#partner" aria-label="Permalink to &quot;partner&quot;">​</a></h1><h2 id="general-information" tabindex="-1">General information <a class="header-anchor" href="#general-information" aria-label="Permalink to &quot;General information&quot;">​</a></h2><p>To perform a payout through the partner method, merchant&#39;s web service sends a request with all the required parameters and signature to Ecommlabs URL, and receives a callback with the payment result. The full sequence of the payout process is provided below.</p><p>Information on the format of requests and parameters for initiating payouts by using Gate, as well as on the format of callbacks with the payout results is given in the section; for general information on working with the API, see the section .</p><p>The currency of payout by using partner service can only be UAH.</p><h2 id="related-topics" tabindex="-1">Related topics <a class="header-anchor" href="#related-topics" aria-label="Permalink to &quot;Related topics&quot;">​</a></h2><p>The following topics might be useful when implementing payments through Gate:</p>', 7)
  ])]);
}
const pmUkrcardGatePayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  pmUkrcardGatePayout as default
};
