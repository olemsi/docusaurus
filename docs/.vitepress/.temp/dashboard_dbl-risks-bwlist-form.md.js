import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Adding criteria using the form","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-risks-bwlist-form.md","filePath":"dashboard/dbl-risks-bwlist-form.md"}');
const _sfc_main = { name: "dashboard/dbl-risks-bwlist-form.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="adding-criteria-using-the-form" tabindex="-1">Adding criteria using the form <a class="header-anchor" href="#adding-criteria-using-the-form" aria-label="Permalink to &quot;Adding criteria using the form&quot;">​</a></h1><p><strong>RisksBlack/White lists</strong>In thesection, you can add various criteria to blacklists (and if the user account has the appropriate permissions—to whitelists) using the form in thesubsection. This is convenient when different cases of fraud are reviewed and analysed for determining additional criteria of risk assessment, for example, when the need to update whitelists or blacklists does not stem from processing specific operations. To add criteria:</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-risks-bwlist-form.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblRisksBwlistForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblRisksBwlistForm as default
};
