import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Opening in iframe","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-method-embedded.md","filePath":"payment-page/pp-method-embedded.md"}');
const _sfc_main = { name: "payment-page/pp-method-embedded.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="opening-in-iframe" tabindex="-1">Opening in iframe <a class="header-anchor" href="#opening-in-iframe" aria-label="Permalink to &quot;Opening in iframe&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-method-embedded.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppMethodEmbedded = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppMethodEmbedded as default
};
