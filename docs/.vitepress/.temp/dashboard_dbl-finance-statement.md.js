import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Analysing statement data","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-finance-statement.md","filePath":"dashboard/dbl-finance-statement.md"}');
const _sfc_main = { name: "dashboard/dbl-finance-statement.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="analysing-statement-data" tabindex="-1">Analysing statement data <a class="header-anchor" href="#analysing-statement-data" aria-label="Permalink to &quot;Analysing statement data&quot;">​</a></h1><p>Statement information for a specified time period includes total amounts for opening and closing balances in each currency used. It also shows cash inflow and outflow data for a specified time period with a detailed itemisation: as a total for all balances in the same currency and separately for each balance. (Keep in mind that balance calculation may take up to 30 minutes and, consequently, balance information may reflect the aforementioned delay.)</p><p>To view statement information for a specified time period:</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-finance-statement.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblFinanceStatement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblFinanceStatement as default
};
