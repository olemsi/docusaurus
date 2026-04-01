import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sending requests and accepting responses","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-quickstart-basic-implementation-requests.md","filePath":"gate/gate-quickstart-basic-implementation-requests.md"}');
const _sfc_main = { name: "gate/gate-quickstart-basic-implementation-requests.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sending-requests-and-accepting-responses" tabindex="-1">Sending requests and accepting responses <a class="header-anchor" href="#sending-requests-and-accepting-responses" aria-label="Permalink to &quot;Sending requests and accepting responses&quot;">​</a></h1><p>When all data is collected and signed, you can send the request to the required endpoint (the list of endpoints can be found in the Gate API). In our case, it is theendpoint. When the request is received (as a rule, within 100 ms), the payment platform sends a synchronous HTTP response to the web service stating either that the request was accepted for processing or that the request was not accepted due to detected errors.</p><p>The following codes are used in the responses from the platform:</p><p>If you need information contained in the responses from the platform, set up their reception and processing.</p><ul><li><code>200 OK</code>—the request has been accepted for processing. In this case, expect subsequent callbacks about processing of the payment. The next section describes how to work with such callbacks.</li><li><code>400 Bad Request</code>—the request has not been accepted because at least one required parameter is missing or the signature is invalid. In this case, add missing data and generate a new signature (or generate a signature again after you have checked the validity of the project ID and the key) and resend the request.</li><li><code>403 Forbidden</code>—the request has not been accepted due to lack of permissions to access the endpoint. In this case, contact the Platform technical support to have the sender&#39;s IP address added to the IP whitelist.</li><li><code>422 Unprocessable Entity</code>—the request has not been accepted because it contains a syntax error (for example, a comma is missing). In this case, correct the mistake and resend the request.</li><li><code>500 Internal Error</code>—the request has not been accepted because the payment platform was unavailable. In this case, try resending the request later.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-quickstart-basic-implementation-requests.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateQuickstartBasicImplementationRequests = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateQuickstartBasicImplementationRequests as default
};
