import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Currency conversion rates","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-balances-currency-rates.md","filePath":"dashboard/dbl-balances-currency-rates.md"}');
const _sfc_main = { name: "dashboard/dbl-balances-currency-rates.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="currency-conversion-rates" tabindex="-1">Currency conversion rates <a class="header-anchor" href="#currency-conversion-rates" aria-label="Permalink to &quot;Currency conversion rates&quot;">​</a></h1><p>Dashboard supports the capability to obtain the currency conversion about currency conversion rates against the US dollar (USD) that are applied to operating and non-operating inflows and outflows. These rates are provided for each hour of the selected date.</p><p><strong>Currency RatesFinance</strong>To view the conversion rates of a required currency on a particular date, go to thetab in thesection and select a date and a currency.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-balances-currency-rates.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblBalancesCurrencyRates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblBalancesCurrencyRates as default
};
