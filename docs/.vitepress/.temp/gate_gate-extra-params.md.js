import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Optional parameters","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-extra-params.md","filePath":"gate/gate-extra-params.md"}');
const _sfc_main = { name: "gate/gate-extra-params.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="optional-parameters" tabindex="-1">Optional parameters <a class="header-anchor" href="#optional-parameters" aria-label="Permalink to &quot;Optional parameters&quot;">​</a></h1><p>payment.extra_paramIf necessary, Gate allows you to specify extra settings for processing payments performed by customers. That data should be sent in theparameter.</p><p>For more information regarding this option, you may apply to your Key Account Manager.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-extra-params.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateExtraParams = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateExtraParams as default
};
