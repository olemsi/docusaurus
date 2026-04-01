import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Requirements","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-payouts-overview.md","filePath":"dashboard/dbl-payments-payouts-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-payouts-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h1><p>Dashboard interface allows users to perform payouts with the use of individual and batch requests. In both cases, the following requirements must be met:</p><p>If any issues regarding these requirements occur, they can be solved with the specialists in charge of granting access rights and working with balances.</p><ul><li>Two-factor authentication is enabled for the Dashboard user account in question.</li><li>The user account has been granted the right to perform payouts.</li><li>Payouts are supported for the selected payment method.</li><li>The balance under which payouts are performed has enough funds.</li><li>If additional data is required to perform a payout, it has to be provided within 22 hours.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-payments-payouts-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblPaymentsPayoutsOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblPaymentsPayoutsOverview as default
};
