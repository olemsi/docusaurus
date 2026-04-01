import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Payment status information","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-ui-and-core-ios-status.md","filePath":"sdk/sdk-ui-and-core-ios-status.md"}');
const _sfc_main = { name: "sdk/sdk-ui-and-core-ios-status.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="payment-status-information" tabindex="-1">Payment status information <a class="header-anchor" href="#payment-status-information" aria-label="Permalink to &quot;Payment status information&quot;">​</a></h1><p>To receive payment result notifications, use requests with the following code included:</p><p><code>PaymentResult.status</code>Possible payment result codes passed in theparameter:</p><table tabindex="0"><thead><tr><th>Result code</th><th>Message</th><th>Description</th></tr></thead><tbody><tr><td><code>0</code></td><td>Success</td><td>Payment has been completed</td></tr><tr><td><code>100</code></td><td>Decline</td><td>Payment has been declined</td></tr><tr><td><code>200</code></td><td>Cancelled</td><td>Payment has been cancelled by the customer</td></tr><tr><td><code>500</code></td><td>Error</td><td>An error occurred when the payment was being processed</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sdk/sdk-ui-and-core-ios-status.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sdkUiAndCoreIosStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sdkUiAndCoreIosStatus as default
};
