import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Payment status information","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-ui-and-core-ios-status.md","filePath":"sdk/sdk-ui-and-core-ios-status.md"}');
const _sfc_main = { name: "sdk/sdk-ui-and-core-ios-status.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="payment-status-information" tabindex="-1">Payment status information <a class="header-anchor" href="#payment-status-information" aria-label="Permalink to &quot;Payment status information&quot;">​</a></h1><p>To receive payment result notifications, use requests with the following code included:</p><p><code>PaymentResult.status</code>Possible payment result codes passed in theparameter:</p><table tabindex="0"><thead><tr><th>Result code</th><th>Message</th><th>Description</th></tr></thead><tbody><tr><td><code>0</code></td><td>Success</td><td>Payment has been completed</td></tr><tr><td><code>100</code></td><td>Decline</td><td>Payment has been declined</td></tr><tr><td><code>200</code></td><td>Cancelled</td><td>Payment has been cancelled by the customer</td></tr><tr><td><code>500</code></td><td>Error</td><td>An error occurred when the payment was being processed</td></tr></tbody></table>', 4)
  ])]);
}
const sdkUiAndCoreIosStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  sdkUiAndCoreIosStatus as default
};
