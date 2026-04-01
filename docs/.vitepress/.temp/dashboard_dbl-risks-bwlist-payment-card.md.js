import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Adding payment criteria","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-risks-bwlist-payment-card.md","filePath":"dashboard/dbl-risks-bwlist-payment-card.md"}');
const _sfc_main = { name: "dashboard/dbl-risks-bwlist-payment-card.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="adding-payment-criteria" tabindex="-1">Adding payment criteria <a class="header-anchor" href="#adding-payment-criteria" aria-label="Permalink to &quot;Adding payment criteria&quot;">​</a></h1><p>In the payment information tabs, you can add criteria to blacklists (and if the user account has the appropriate permissions—to whitelists) for individual operations initiated within payments without any restrictions. This is convenient when individual cases of fraud are reviewed, and it allows you to respond quickly. To add criteria:</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-risks-bwlist-payment-card.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblRisksBwlistPaymentCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblRisksBwlistPaymentCard as default
};
