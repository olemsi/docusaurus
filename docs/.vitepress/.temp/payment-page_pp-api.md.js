import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Payment Widget API Description","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-api.md","filePath":"payment-page/pp-api.md"}');
const _sfc_main = { name: "payment-page/pp-api.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="payment-widget-api-description" tabindex="-1">Payment Widget API Description <a class="header-anchor" href="#payment-widget-api-description" aria-label="Permalink to &quot;Payment Widget API Description&quot;">​</a></h1><p>This section covers the technical data required to open Payment Widget and process the request and callback payloads associated with the payment form.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./pp-parameters.html"><strong>Parameters for opening the payment form</strong></a> — request parameters and their purpose.</li><li><a href="./pp-formats.html"><strong>Data formats</strong></a> — encoding and general format rules.</li><li><a href="./pp-testcards.html"><strong>Test cards</strong></a> — test data for checkout scenarios.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when you implement or troubleshoot the technical integration with Payment Widget.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-api.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppApi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppApi as default
};
