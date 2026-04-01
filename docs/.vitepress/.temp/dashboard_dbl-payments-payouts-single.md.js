import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Single payouts","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-payouts-single.md","filePath":"dashboard/dbl-payments-payouts-single.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-payouts-single.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="single-payouts" tabindex="-1">Single payouts <a class="header-anchor" href="#single-payouts" aria-label="Permalink to &quot;Single payouts&quot;">​</a></h1><p>To perform a single payout:</p><p><code>decline</code>If the payout is declined, the payment status switches to. It can happen due to a variety of reasons. For example, it can be caused by the lack of funds, in which case you can add funds to the balance and try to perform a payout again.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-payments-payouts-single.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblPaymentsPayoutsSingle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblPaymentsPayoutsSingle as default
};
