import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Configuring subscription settings","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-subscriptions-updating.md","filePath":"dashboard/dbl-payments-subscriptions-updating.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-subscriptions-updating.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="configuring-subscription-settings" tabindex="-1">Configuring subscription settings <a class="header-anchor" href="#configuring-subscription-settings" aria-label="Permalink to &quot;Configuring subscription settings&quot;">​</a></h1><p>To specify or modify the debiting terms of the regular COF purchase (subscription):</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-payments-subscriptions-updating.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblPaymentsSubscriptionsUpdating = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblPaymentsSubscriptionsUpdating as default
};
