import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Setup","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-directive-methods-availability-enable.md","filePath":"payment-page/pp-directive-methods-availability-enable.md"}');
const _sfc_main = { name: "payment-page/pp-directive-methods-availability-enable.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h1><p>Directive filtering is enabled by default. No additional actions are required for setting up and using this functionality in test and production projects.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-directive-methods-availability-enable.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppDirectiveMethodsAvailabilityEnable = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppDirectiveMethodsAvailabilityEnable as default
};
