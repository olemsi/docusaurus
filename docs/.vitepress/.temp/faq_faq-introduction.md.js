import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"faq/faq-introduction.md","filePath":"faq/faq-introduction.md"}');
const _sfc_main = { name: "faq/faq-introduction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>This section provides answers to questions that are commonly asked by technical specialists while integrating with the Some Platform platform.</p><p>These questions are divided into the following groups:</p><p>If the information provided here and in other sections of the documentation is not enough to solve your problems, contact our specialists:</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/faq-introduction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faqIntroduction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  faqIntroduction as default
};
