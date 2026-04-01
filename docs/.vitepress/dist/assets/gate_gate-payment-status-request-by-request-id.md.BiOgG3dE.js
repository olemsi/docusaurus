import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Check by request ID","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-payment-status-request-by-request-id.md","filePath":"gate/gate-payment-status-request-by-request-id.md"}');
const _sfc_main = { name: "gate/gate-payment-status-request-by-request-id.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="check-by-request-id" tabindex="-1">Check by request ID <a class="header-anchor" href="#check-by-request-id" aria-label="Permalink to &quot;Check by request ID&quot;">​</a></h1><h2 id="request-format" tabindex="-1">Request format <a class="header-anchor" href="#request-format" aria-label="Permalink to &quot;Request format&quot;">​</a></h2><p>A request to check payment status by request ID is formatted according to the guidelines listed in . It is sent to the endpoint, and its body must contain the following identification information:</p><ul><li><code>project_id</code>—a project ID assigned by Platform at the stage of integration;</li><li><code>request_id</code>—an ID of the request to be monitored, can be found in the synchronous response from the payment platform;</li><li><code>signature</code>—a request signature generated after required parameters listed above have been specified. To learn more, see .</li></ul><h2 id="response-format" tabindex="-1">Response format <a class="header-anchor" href="#response-format" aria-label="Permalink to &quot;Response format&quot;">​</a></h2><p><code>200 OK</code>A response to the payment status request is formatted according to the guidelines listed in . If the request has been successfully accepted and processed, the response header contains the status line indicating the protocol and its version (HTTP/1.1), the response status code and the explanatory phrase (for instance,). The body of such response contains information about the payment in question: it is either the information about the payment status and all operations initiated within this payment, or the information about errors in the payment request.</p>', 6)
  ])]);
}
const gatePaymentStatusRequestByRequestId = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gatePaymentStatusRequestByRequestId as default
};
