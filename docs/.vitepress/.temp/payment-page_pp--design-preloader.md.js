import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Preloader page","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp--design-preloader.md","filePath":"payment-page/pp--design-preloader.md"}');
const _sfc_main = { name: "payment-page/pp--design-preloader.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="preloader-page" tabindex="-1">Preloader page <a class="header-anchor" href="#preloader-page" aria-label="Permalink to &quot;Preloader page&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p><strong>Pay</strong>The loading page shows a preloader animation or image when a payment is being submitted and processed. After a customer presses thebutton, the page becomes blurred and the customer cannot change input data. You can customise interface elements of this page. All of elements are mandatory.</p><h2 id="interface-elements" tabindex="-1">Interface elements <a class="header-anchor" href="#interface-elements" aria-label="Permalink to &quot;Interface elements&quot;">​</a></h2><ul><li>Preloader animation or image</li><li>Preloader text</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp--design-preloader.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp_DesignPreloader = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp_DesignPreloader as default
};
