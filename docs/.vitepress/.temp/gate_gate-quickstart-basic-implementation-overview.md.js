import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Basic implementation","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-quickstart-basic-implementation-overview.md","filePath":"gate/gate-quickstart-basic-implementation-overview.md"}');
const _sfc_main = { name: "gate/gate-quickstart-basic-implementation-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="basic-implementation" tabindex="-1">Basic implementation <a class="header-anchor" href="#basic-implementation" aria-label="Permalink to &quot;Basic implementation&quot;">​</a></h1><p>Implementing payment processing with the use of your web service functionality can be carried out in various ways, which includes creating your own software solutions. This guide describes the implementation procedure with the use of the ready-made code from Platform to sign data, send requests, accept responses to these requests as well as callbacks and with the use of your solutions on the side of the web service for performing other actions, which includes collecting customer information and notifying customers about payment results.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-quickstart-basic-implementation-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateQuickstartBasicImplementationOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateQuickstartBasicImplementationOverview as default
};
