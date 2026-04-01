import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Implementation","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-3ds-implementation.md","filePath":"payment-page/pp-3ds-implementation.md"}');
const _sfc_main = { name: "payment-page/pp-3ds-implementation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;Implementation&quot;">​</a></h1><p>3‑D Secure is implemented when the Platform specialists add card payments to the merchant&#39;s project. Other than that, the merchant is not required to take any additional steps.</p><p>The 3‑D Secure authentication does not require any specific setup as it is enabled for the project automatically (at the stage of integration).</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-3ds-implementation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp3dsImplementation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp3dsImplementation as default
};
