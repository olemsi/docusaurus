import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Getting customer payment history","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-payment-history-request.md","filePath":"gate/gate-payment-history-request.md"}');
const _sfc_main = { name: "gate/gate-payment-history-request.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="getting-customer-payment-history" tabindex="-1">Getting customer payment history <a class="header-anchor" href="#getting-customer-payment-history" aria-label="Permalink to &quot;Getting customer payment history&quot;">​</a></h1><p>TheGate stores the full history of customer payments within the project. If necessary, you can retrieve the payment history of any customer.</p><h2 id="request-to-receive-a-customer-payment-history" tabindex="-1">Request to receive a customer payment history <a class="header-anchor" href="#request-to-receive-a-customer-payment-history" aria-label="Permalink to &quot;Request to receive a customer payment history&quot;">​</a></h2><p>In the request, specify the project and customer IDs.</p><p>In the response, you receive a list of payments made by a specific customer in a specified project.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>POST therequest.</p></div>', 6)
  ])]);
}
const gatePaymentHistoryRequest = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gatePaymentHistoryRequest as default
};
