import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Opening via custom code","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-opening-iframe-via-in-house-solutions.md","filePath":"payment-page/pp-opening-iframe-via-in-house-solutions.md"}');
const _sfc_main = { name: "payment-page/pp-opening-iframe-via-in-house-solutions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="opening-via-custom-code" tabindex="-1">Opening via custom code <a class="header-anchor" href="#opening-via-custom-code" aria-label="Permalink to &quot;Opening via custom code&quot;">​</a></h1><p>To open Payment Widget in an iframe element with the help of the merchant&#39;s in-house solutions, prepare the corresponding script that will ensure the payment form opening with the required parameters specified and signed. The information about the parameters that can be used to open Payment Widget and about the signature generation is provided in the following articles: and .</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-opening-iframe-via-in-house-solutions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppOpeningIframeViaInHouseSolutions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppOpeningIframeViaInHouseSolutions as default
};
