import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Response processing","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-ios-status.md","filePath":"sdk/sdk-ios-status.md"}');
const _sfc_main = { name: "sdk/sdk-ios-status.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="response-processing" tabindex="-1">Response processing <a class="header-anchor" href="#response-processing" aria-label="Permalink to &quot;Response processing&quot;">​</a></h1><p>To receive and process response with the payment processing results you need to add the following code:</p><p>paymentStatusThe result code is returned in theparameter.</p><p>paymentStatusThe following table lists possible response codes returned in theparameter.</p><table tabindex="0"><thead><tr><th>paymentStatusValue in</th><th>Description</th></tr></thead><tbody><tr><td>0</td><td>Checkout successfully completed.</td></tr><tr><td>100</td><td>Operation was declined, for example because of insufficient funds.</td></tr><tr><td>301</td><td>Operation was cancelled by the customer.</td></tr><tr><td>501</td><td>An internal error occurred. You may need to contact technical support.</td></tr></tbody></table>', 5)
  ])]);
}
const sdkIosStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  sdkIosStatus as default
};
