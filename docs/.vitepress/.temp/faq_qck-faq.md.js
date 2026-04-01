import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"faq/qck-faq.md","filePath":"faq/qck-faq.md"}');
const _sfc_main = { name: "faq/qck-faq.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="general-information" tabindex="-1">General information <a class="header-anchor" href="#general-information" aria-label="Permalink to &quot;General information&quot;">​</a></h2><p>This section covers the answers to some questions you might have when interacting with the Some Platform payment platform.</p><p>Haven&#39;t found the information you need? Contact our specialists:</p><ul><li>the key account manager—for business- and finance-related questions, e.g. the cost of services, calculating commissions, working with balance sheets, etc.</li><li>the implementation manager—for discussing technical aspects, e.g. working with different interfaces, making requests, configuring callbacks, etc. Communication with your implementation manager takes place in the technical chat. If the chat hasn&#39;t been created yet, please contact your key account manager at Some Platform to create it.</li></ul><h2 id="frequently-asked-questions" tabindex="-1">Frequently asked questions <a class="header-anchor" href="#frequently-asked-questions" aria-label="Permalink to &quot;Frequently asked questions&quot;">​</a></h2></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/qck-faq.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qckFaq = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  qckFaq as default
};
