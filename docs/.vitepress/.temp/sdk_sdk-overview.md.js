import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Integration with SDK","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-overview.md","filePath":"sdk/sdk-overview.md"}');
const _sfc_main = { name: "sdk/sdk-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="integration-with-sdk" tabindex="-1">Integration with SDK <a class="header-anchor" href="#integration-with-sdk" aria-label="Permalink to &quot;Integration with SDK&quot;">​</a></h1><p>Some PlatformTo integrate with thepayment platform, you can use software development kits (SDK) for several programming languages offered by Some Platform.</p><p>The following mobile SDKs allow you to quickly integrate checkout user experience right into your mobile application for Android or iOS:</p><p>You can use the following SDKs to enable your system to generate requests for opening the Payment Widget payment form and accept and process callback data returned by the payment platform:</p><p>Some PlatformWith any questions regarding usage of SDK contact thetechnical support service.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sdk/sdk-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sdkOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sdkOverview as default
};
