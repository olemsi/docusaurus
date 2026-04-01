import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Open Banking in Austria","description":"","frontmatter":{},"headers":[],"relativePath":"payment-methods-flat/pm-austria-dash-analysis.md","filePath":"payment-methods-flat/pm-austria-dash-analysis.md"}');
const _sfc_main = { name: "payment-methods-flat/pm-austria-dash-analysis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="open-banking-in-austria" tabindex="-1">Open Banking in Austria <a class="header-anchor" href="#open-banking-in-austria" aria-label="Permalink to &quot;Open Banking in Austria&quot;">​</a></h1><p>To analyse information about payments made with the Open Banking in Austria method, as well as other methods, you can use:</p><p>If you have any questions, refer to the documentation ( and ) and Ecommlabs technical support.</p><ul><li>Dashboard interface toolkit with various lists and analytic panels.</li><li><strong>Reports</strong>Reports in CSV file format, available via thesection (one-time and periodically).</li><li>Data in JSON format, sent by program requests to a specified URL by using the Data API interface.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-methods-flat/pm-austria-dash-analysis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pmAustriaDashAnalysis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pmAustriaDashAnalysis as default
};
