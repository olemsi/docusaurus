import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"COF on platform side","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-cof-gate-side-overview.md","filePath":"gate/gate-cof-gate-side-overview.md"}');
const _sfc_main = { name: "gate/gate-cof-gate-side-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cof-on-platform-side" tabindex="-1">COF on platform side <a class="header-anchor" href="#cof-on-platform-side" aria-label="Permalink to &quot;COF on platform side&quot;">​</a></h1><p><em>COF purchase with automatic debiting</em>is a payment type which uses a single initial request to make a series of regularly recurring funds transfers (debits) from the customer to the merchant by using stored payment credentials without verification of the payment instrument (i.e. by entering a card verification code). The Platform payment platform performs COF purchases with automatic debiting according to the payment model (learn more). If one attempt to perform a scheduled debiting is not enough (for example, if the customer&#39;s card account has insufficient balance), the debiting can be retried in the payment platform automatically (details).</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-cof-gate-side-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateCofGateSideOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateCofGateSideOverview as default
};
