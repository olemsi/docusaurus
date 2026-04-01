import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Launch","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-quickstart-launch-project.md","filePath":"gate/gate-quickstart-launch-project.md"}');
const _sfc_main = { name: "gate/gate-quickstart-launch-project.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="launch" tabindex="-1">Launch <a class="header-anchor" href="#launch" aria-label="Permalink to &quot;Launch&quot;">​</a></h1><p>After implementing the basic functions, testing needed capabilities, and defining the user scenarios and workflows relevant for you, you can proceed to the launch of the production project. Make sure that by this time all organisational issues have been resolved. Then all you will have to do is to configure the project settings on the payment platform side and begin to use the identifier and the key of the production project.</p><p>, payment methods,Following the launch, you can continue your work on configuring various payment typesand capabilities depending on the needs of your business. Please refer to our specialists with feedback and any other questions.</p><p>Good luck!</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-quickstart-launch-project.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateQuickstartLaunchProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateQuickstartLaunchProject as default
};
