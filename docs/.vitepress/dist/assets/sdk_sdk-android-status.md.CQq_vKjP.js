import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Response processing","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-android-status.md","filePath":"sdk/sdk-android-status.md"}');
const _sfc_main = { name: "sdk/sdk-android-status.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="response-processing" tabindex="-1">Response processing <a class="header-anchor" href="#response-processing" aria-label="Permalink to &quot;Response processing&quot;">​</a></h1><p><code>onActivityResultsdk_android_activity</code>To receive and process response with the payment processing results you need to override themethod in activity from which you started.</p><p>The following table lists the possible values of response codes as well as the corresponding constant names and description along with the suggested response actions.</p><table tabindex="0"><thead><tr><th>Response code</th><th>Result constant</th><th>Description</th></tr></thead><tbody><tr><td>0</td><td>RESULT_SUCCESS</td><td>Checkout successfully completed.</td></tr><tr><td>100</td><td>RESULT_DECLINE</td><td>Operation was declined, for example because of insufficient funds.</td></tr><tr><td>301</td><td>RESULT_CANCELLED</td><td>Operation was cancelled by the customer.</td></tr><tr><td>501</td><td>RESULT_FAILED</td><td>An internal error occurred. You may need to contact technical support.</td></tr></tbody></table>', 4)
  ])]);
}
const sdkAndroidStatus = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  sdkAndroidStatus as default
};
