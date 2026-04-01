import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Balances overview","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-finance-aspects-icpp.md","filePath":"dashboard/dbl-finance-aspects-icpp.md"}');
const _sfc_main = { name: "dashboard/dbl-finance-aspects-icpp.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="balances-overview" tabindex="-1">Balances overview <a class="header-anchor" href="#balances-overview" aria-label="Permalink to &quot;Balances overview&quot;">​</a></h1><p><em>real-time balancesbalance statements</em>However, each of these balance types reflects not only operating but also non-operating cash inflows and outflows from such activities as payment of fees and transferring funds between balances. The balances can be calculated for a specific point in time (shown as) and for a specified time period (shown as).</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-finance-aspects-icpp.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblFinanceAspectsIcpp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblFinanceAspectsIcpp as default
};
