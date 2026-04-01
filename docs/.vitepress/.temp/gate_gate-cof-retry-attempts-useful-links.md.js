import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Useful links","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-cof-retry-attempts-useful-links.md","filePath":"gate/gate-cof-retry-attempts-useful-links.md"}');
const _sfc_main = { name: "gate/gate-cof-retry-attempts-useful-links.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="useful-links" tabindex="-1">Useful links <a class="header-anchor" href="#useful-links" aria-label="Permalink to &quot;Useful links&quot;">​</a></h1><p>The following articles can be useful when working with debiting retry attempts:</p><ul><li>—about working with payments via Dashboard, including working with regular COF purchases and managing attempts to retry debit operations executed as part of regular COF purchases.</li><li>—about processing regular COF purchases via Gate, including general information, description of processing workflows and data formats for working with standard card payments.</li><li>—about interacting with the payment platform via the Gate API, including description of interaction workflows and general requirements to data formats.</li><li>—about working with callbacks that allow receiving up-to-date information significant for processing of each payment, including description of callback types and data formats.</li><li>—about the procedure of generating and verifying signatures in requests and callbacks in the process of interacting with the platform.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-cof-retry-attempts-useful-links.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateCofRetryAttemptsUsefulLinks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateCofRetryAttemptsUsefulLinks as default
};
