import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"General information","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-directive-methods-avalability-info.md","filePath":"payment-page/pp-directive-methods-avalability-info.md"}');
const _sfc_main = { name: "payment-page/pp-directive-methods-avalability-info.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="general-information" tabindex="-1">General information <a class="header-anchor" href="#general-information" aria-label="Permalink to &quot;General information&quot;">​</a></h1><p><em>Directive filtering</em>allows you to hide those payment methods that are available within the current project but are not relevant for a particular payment due to region- or customer-specific reasons and other factors. With this filtering option, the page for selecting payment methods displays to the customer all available methods except for the hidden ones.</p><p>However, if the payment is to be processed with the use of only one payment method or group, you might consider setting up the capability of preselecting payment methods and groups (details).</p><p>However, if the payment is to be processed with the use of only one payment method, you might consider setting up the capability of preselecting payment methods (details).</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-directive-methods-avalability-info.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppDirectiveMethodsAvalabilityInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppDirectiveMethodsAvalabilityInfo as default
};
