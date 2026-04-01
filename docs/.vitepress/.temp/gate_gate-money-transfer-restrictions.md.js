import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Restrictions and special aspects","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-money-transfer-restrictions.md","filePath":"gate/gate-money-transfer-restrictions.md"}');
const _sfc_main = { name: "gate/gate-money-transfer-restrictions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="restrictions-and-special-aspects" tabindex="-1">Restrictions and special aspects <a class="header-anchor" href="#restrictions-and-special-aspects" aria-label="Permalink to &quot;Restrictions and special aspects&quot;">​</a></h1><p>When setting up money transfer processing, consider the following restrictions:</p><p><code>money_transfer/inmoney_transfer/in/saved</code>When sending a request to return funds debited from the sender&#39;s card as part of the partial money transfer workflow (requests to theandendpoints), consider the following:</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-money-transfer-restrictions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateMoneyTransferRestrictions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateMoneyTransferRestrictions as default
};
