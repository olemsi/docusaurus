import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Setup","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-cof-retry-attempts-integration.md","filePath":"gate/gate-cof-retry-attempts-integration.md"}');
const _sfc_main = { name: "gate/gate-cof-retry-attempts-integration.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h1><p>To set up the functionality of debiting retries:</p><ol><li>With your Platform account manager, discuss and agree upon setting up this functionality and whether testing is necessary.</li><li>If you need testing, get notified by the Platform specialists that the functionality is ready for being used in test mode, test this functionality, and inform Platform that everything is ready to launch.</li><li>Get notified by the Platform specialists that the functionality has been added and fully set up.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-cof-retry-attempts-integration.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateCofRetryAttemptsIntegration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateCofRetryAttemptsIntegration as default
};
