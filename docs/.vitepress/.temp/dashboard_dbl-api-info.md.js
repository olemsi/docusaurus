import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Interaction model","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-api-info.md","filePath":"dashboard/dbl-api-info.md"}');
const _sfc_main = { name: "dashboard/dbl-api-info.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="interaction-model" tabindex="-1">Interaction model <a class="header-anchor" href="#interaction-model" aria-label="Permalink to &quot;Interaction model&quot;">​</a></h1><p>When the Data API is used, the Platform payment platform and the merchant&#39;s web service interact by exchanging request and response messages in the HTTP format: the web service issues requests and the payment platform responds to those requests. The interaction model is synchronous as the request gets fully processed within one HTTP session and the one-time response is returned as a result, either with the requested information or the information about the error that occurred.</p><p>This interaction model implies that all Data API requests (for instance, for balance information on the merchant&#39;s projects) are processed using only the resources of the payment platform, without resorting to other services and systems. At the same time, depending on the complexity of the request and the volume of the compiled data, the time to process an individual request in the payment platform can significantly vary: from several milliseconds to several minutes (as a rule, it does not exceed five minutes).</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-api-info.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblApiInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblApiInfo as default
};
