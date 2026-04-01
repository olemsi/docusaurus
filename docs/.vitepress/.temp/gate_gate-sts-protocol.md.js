import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"API Description","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-sts-protocol.md","filePath":"gate/gate-sts-protocol.md"}');
const _sfc_main = { name: "gate/gate-sts-protocol.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="api-description" tabindex="-1">API Description <a class="header-anchor" href="#api-description" aria-label="Permalink to &quot;API Description&quot;">​</a></h1><p>This section covers the technical basis of working with Gate: how requests are structured, how signatures are generated, and how to validate the integration with test data.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./gate-requests-format.html"><strong>Request format</strong></a> — HTTP request structure and addressing parameters.</li><li><a href="./gate-formats.html"><strong>Data formats</strong></a> — encoding rules and general data-format conventions.</li><li><a href="./signature-gate.html"><strong>Signature generation</strong></a> — signing requests sent through Gate.</li><li><a href="./gate-testcards.html"><strong>Test cards</strong></a> — test data for validation and scenario checks.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section as the technical reference when implementing, validating, or troubleshooting a Gate integration.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-sts-protocol.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateStsProtocol = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateStsProtocol as default
};
