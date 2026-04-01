import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"MoneySend and Visa Direct","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-money-transfer-services.md","filePath":"gate/gate-money-transfer-services.md"}');
const _sfc_main = { name: "gate/gate-money-transfer-services.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="moneysend-and-visa-direct" tabindex="-1">MoneySend and Visa Direct <a class="header-anchor" href="#moneysend-and-visa-direct" aria-label="Permalink to &quot;MoneySend and Visa Direct&quot;">​</a></h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-money-transfer-services.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateMoneyTransferServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateMoneyTransferServices as default
};
