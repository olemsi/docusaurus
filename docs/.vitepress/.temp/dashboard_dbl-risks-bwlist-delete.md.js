import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Deleting criteria","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-risks-bwlist-delete.md","filePath":"dashboard/dbl-risks-bwlist-delete.md"}');
const _sfc_main = { name: "dashboard/dbl-risks-bwlist-delete.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="deleting-criteria" tabindex="-1">Deleting criteria <a class="header-anchor" href="#deleting-criteria" aria-label="Permalink to &quot;Deleting criteria&quot;">​</a></h1><p><strong>Risks</strong>You can delete criteria included in the whitelists and blacklists in thesection. Keep in mind that they should be deleted one by one.</p><ol><li><strong>Black/White listsRisks</strong>To go to the Criteria subsection, click thebutton in thesection.</li><li>Find the record you need using filters if necessary.</li><li>To delete the record, click thebutton in the corresponding line.</li><li>Make sure that the record has been deleted from the list.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-risks-bwlist-delete.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblRisksBwlistDelete = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblRisksBwlistDelete as default
};
