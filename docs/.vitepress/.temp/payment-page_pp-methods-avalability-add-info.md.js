import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Related links","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-methods-avalability-add-info.md","filePath":"payment-page/pp-methods-avalability-add-info.md"}');
const _sfc_main = { name: "payment-page/pp-methods-avalability-add-info.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="related-links" tabindex="-1">Related links <a class="header-anchor" href="#related-links" aria-label="Permalink to &quot;Related links&quot;">​</a></h1><p>The following articles can be useful when you work with the functionality of filtering payment methods:</p><ul><li>—the article with the information about the capability of ranking payment methods.</li><li>—the article with the information about selecting a particular payment method when invoking Payment Widget.</li><li>—the reference with the list of codes for the supported payment methods.</li><li>Methods—the section with the information about the payment methods that are supported within the platform.</li><li>—the reference with the list of short letter codes for country names.</li><li>—the parameter specification for invoking Payment Widget.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-methods-avalability-add-info.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppMethodsAvalabilityAddInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppMethodsAvalabilityAddInfo as default
};
