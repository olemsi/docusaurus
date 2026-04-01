import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Check by request ID","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-payment-status-request-by-request-id.md","filePath":"gate/gate-payment-status-request-by-request-id.md"}');
const _sfc_main = { name: "gate/gate-payment-status-request-by-request-id.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="check-by-request-id" tabindex="-1">Check by request ID <a class="header-anchor" href="#check-by-request-id" aria-label="Permalink to &quot;Check by request ID&quot;">​</a></h1><h2 id="request-format" tabindex="-1">Request format <a class="header-anchor" href="#request-format" aria-label="Permalink to &quot;Request format&quot;">​</a></h2><p>A request to check payment status by request ID is formatted according to the guidelines listed in . It is sent to the endpoint, and its body must contain the following identification information:</p><ul><li><code>project_id</code>—a project ID assigned by Platform at the stage of integration;</li><li><code>request_id</code>—an ID of the request to be monitored, can be found in the synchronous response from the payment platform;</li><li><code>signature</code>—a request signature generated after required parameters listed above have been specified. To learn more, see .</li></ul><h2 id="response-format" tabindex="-1">Response format <a class="header-anchor" href="#response-format" aria-label="Permalink to &quot;Response format&quot;">​</a></h2><p><code>200 OK</code>A response to the payment status request is formatted according to the guidelines listed in . If the request has been successfully accepted and processed, the response header contains the status line indicating the protocol and its version (HTTP/1.1), the response status code and the explanatory phrase (for instance,). The body of such response contains information about the payment in question: it is either the information about the payment status and all operations initiated within this payment, or the information about errors in the payment request.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-payment-status-request-by-request-id.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gatePaymentStatusRequestByRequestId = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gatePaymentStatusRequestByRequestId as default
};
