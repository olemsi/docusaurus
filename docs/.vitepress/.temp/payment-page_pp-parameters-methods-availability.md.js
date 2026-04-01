import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Platform method availability","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-parameters-methods-availability.md","filePath":"payment-page/pp-parameters-methods-availability.md"}');
const _sfc_main = { name: "payment-page/pp-parameters-methods-availability.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="platform-method-availability" tabindex="-1">Platform method availability <a class="header-anchor" href="#platform-method-availability" aria-label="Permalink to &quot;Platform method availability&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-parameters-methods-availability.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppParametersMethodsAvailability = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppParametersMethodsAvailability as default
};
