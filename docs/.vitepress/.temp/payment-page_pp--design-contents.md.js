import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Purchase mode template","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp--design-contents.md","filePath":"payment-page/pp--design-contents.md"}');
const _sfc_main = { name: "payment-page/pp--design-contents.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="purchase-mode-template" tabindex="-1">Purchase mode template <a class="header-anchor" href="#purchase-mode-template" aria-label="Permalink to &quot;Purchase mode template&quot;">​</a></h1><p>The Payment Widget template layout includes:</p><ul><li>A page without error messagedA page with error messaged</li><li>A page without error messagedA page with error messaged(optional)</li><li>A page without error messagedA page with error messaged(optional)</li><li>Payment success pagePayment failure page(optional)</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp--design-contents.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp_DesignContents = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp_DesignContents as default
};
