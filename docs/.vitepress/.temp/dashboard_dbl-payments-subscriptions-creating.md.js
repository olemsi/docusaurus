import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Registering subscriptions","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-subscriptions-creating.md","filePath":"dashboard/dbl-payments-subscriptions-creating.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-subscriptions-creating.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="registering-subscriptions" tabindex="-1">Registering subscriptions <a class="header-anchor" href="#registering-subscriptions" aria-label="Permalink to &quot;Registering subscriptions&quot;">​</a></h1><p>and Gate (details)as well as by migrating information about COF purchases from other acquirers (details)The Platform payment platform allows you to register regular COF purchases with automatic debits in a variety of ways including when payments are processed via Payment Widget (details).</p><p>In Dashboard you can register regular COF purchases with the use of payment links by specifying additional information when you create them (details).</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-payments-subscriptions-creating.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblPaymentsSubscriptionsCreating = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblPaymentsSubscriptionsCreating as default
};
