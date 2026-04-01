import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Customisation","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp--design-customisation.md","filePath":"payment-page/pp--design-customisation.md"}');
const _sfc_main = { name: "payment-page/pp--design-customisation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="customisation" tabindex="-1">Customisation <a class="header-anchor" href="#customisation" aria-label="Permalink to &quot;Customisation&quot;">​</a></h1><p>Payment Widget supports both the standard hosted design and customised variants adapted to the needs of a specific merchant project.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./pp-design-overview.html"><strong>Design overview</strong></a> — how customisation is organised and when to use it.</li><li><a href="./pp--design-general-info.html"><strong>General design information</strong></a> — the scope and principles of Payment Widget design changes.</li><li><a href="./pp--design-requirements.html"><strong>Design requirements</strong></a> — practical constraints and recommendations for custom layouts.</li><li><a href="./pp-design-working-with-styles.html"><strong>Working with styles</strong></a> — styling approaches and style configuration.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when you need to change the visual appearance or content layout of the hosted payment form while keeping the processing logic on the platform side.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp--design-customisation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp_DesignCustomisation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp_DesignCustomisation as default
};
