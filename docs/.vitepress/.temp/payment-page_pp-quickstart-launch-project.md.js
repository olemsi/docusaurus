import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Launch","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-quickstart-launch-project.md","filePath":"payment-page/pp-quickstart-launch-project.md"}');
const _sfc_main = { name: "payment-page/pp-quickstart-launch-project.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="launch" tabindex="-1">Launch <a class="header-anchor" href="#launch" aria-label="Permalink to &quot;Launch&quot;">​</a></h1><p>After implementing the basic functions, testing various capabilities, and defining the scenarios of the work with Payment Widget relevant for you, you can start launching the production project. It is important that by this time all organisational issues have been resolved—in this case, the technical issues come down to configuring the project settings on the payment platform side and beginning to use the identifier and the key of the production project.</p><p>Good luck!</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-quickstart-launch-project.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppQuickstartLaunchProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppQuickstartLaunchProject as default
};
