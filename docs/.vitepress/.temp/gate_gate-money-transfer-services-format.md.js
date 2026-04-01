import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Callback format","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-money-transfer-services-format.md","filePath":"gate/gate-money-transfer-services-format.md"}');
const _sfc_main = { name: "gate/gate-money-transfer-services-format.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="callback-format" tabindex="-1">Callback format <a class="header-anchor" href="#callback-format" aria-label="Permalink to &quot;Callback format&quot;">​</a></h1><p>Results of processing Mastercard MoneySend and Visa Direct operations are communicated in callbacks of standard format. To learn more about the callback format, see .</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-money-transfer-services-format.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateMoneyTransferServicesFormat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateMoneyTransferServicesFormat as default
};
