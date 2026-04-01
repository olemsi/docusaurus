import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UX configuration","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-ux-configuration.md","filePath":"payment-page/pp-ux-configuration.md"}');
const _sfc_main = { name: "payment-page/pp-ux-configuration.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ux-configuration" tabindex="-1">UX configuration <a class="header-anchor" href="#ux-configuration" aria-label="Permalink to &quot;UX configuration&quot;">​</a></h1><p>Payment Widget can be opened in different UI modes and can return customers to your web service in different ways depending on the payment scenario.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./pp-opening-html-overview.html"><strong>Opening in new tab</strong></a> — opening Payment Widget as a separate browser page.</li><li><a href="./pp-opening-modal-overview.html"><strong>Opening in modal</strong></a> — rendering the form over the current web-service page.</li><li><a href="./pp-opening-iframe-overview.html"><strong>Opening in iframe</strong></a> — embedding the form into the merchant page.</li><li><a href="./pp.html"><strong>Redirect options</strong></a> — preliminary, intermediate, and final redirection scenarios.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when you need to choose the opening mode of the payment form or configure how customers return to your web service after intermediate or final payment steps.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-ux-configuration.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppUxConfiguration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppUxConfiguration as default
};
