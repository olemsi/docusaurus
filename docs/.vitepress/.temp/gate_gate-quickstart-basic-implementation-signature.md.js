import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Data signing","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-quickstart-basic-implementation-signature.md","filePath":"gate/gate-quickstart-basic-implementation-signature.md"}');
const _sfc_main = { name: "gate/gate-quickstart-basic-implementation-signature.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="data-signing" tabindex="-1">Data signing <a class="header-anchor" href="#data-signing" aria-label="Permalink to &quot;Data signing&quot;">​</a></h1><p>When all required parameters have been specified, you can generate a signature for them and create a request.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-quickstart-basic-implementation-signature.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateQuickstartBasicImplementationSignature = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateQuickstartBasicImplementationSignature as default
};
