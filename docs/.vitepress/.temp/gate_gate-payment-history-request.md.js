import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Getting customer payment history","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-payment-history-request.md","filePath":"gate/gate-payment-history-request.md"}');
const _sfc_main = { name: "gate/gate-payment-history-request.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="getting-customer-payment-history" tabindex="-1">Getting customer payment history <a class="header-anchor" href="#getting-customer-payment-history" aria-label="Permalink to &quot;Getting customer payment history&quot;">​</a></h1><p>TheGate stores the full history of customer payments within the project. If necessary, you can retrieve the payment history of any customer.</p><h2 id="request-to-receive-a-customer-payment-history" tabindex="-1">Request to receive a customer payment history <a class="header-anchor" href="#request-to-receive-a-customer-payment-history" aria-label="Permalink to &quot;Request to receive a customer payment history&quot;">​</a></h2><p>In the request, specify the project and customer IDs.</p><p>In the response, you receive a list of payments made by a specific customer in a specified project.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>POST therequest.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-payment-history-request.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gatePaymentHistoryRequest = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gatePaymentHistoryRequest as default
};
