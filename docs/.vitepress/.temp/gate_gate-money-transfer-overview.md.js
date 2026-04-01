import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Money transfer overview","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-money-transfer-overview.md","filePath":"gate/gate-money-transfer-overview.md"}');
const _sfc_main = { name: "gate/gate-money-transfer-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="money-transfer-overview" tabindex="-1">Money transfer overview <a class="header-anchor" href="#money-transfer-overview" aria-label="Permalink to &quot;Money transfer overview&quot;">​</a></h1><p><em>Money transfer</em>is a payment type which uses one request to initiate debiting funds from the sender and subsequently crediting these funds to the recipient. Money transfers can be sent from one customer to another as well as between the different payment instruments of the same customer. Different payment instruments can be used for debiting and crediting, and the merchant always acts as a provider of the service for such transfers.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-money-transfer-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateMoneyTransferOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateMoneyTransferOverview as default
};
