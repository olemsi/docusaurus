import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cancelling retries","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-cof-retry-attempts-cancel.md","filePath":"gate/gate-cof-retry-attempts-cancel.md"}');
const _sfc_main = { name: "gate/gate-cof-retry-attempts-cancel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cancelling-retries" tabindex="-1">Cancelling retries <a class="header-anchor" href="#cancelling-retries" aria-label="Permalink to &quot;Cancelling retries&quot;">​</a></h1><p>To cancel retrying a specific debiting via the Gate API:</p><p>Keep in mind that these requests are processed according to the synchronous model of interaction between the web service and the payment platform. This implies that each such request is fully processed within one HTTP session. The response to the correct request contains the required data. The description of the response format can be found here.</p><p>The full sequence of processing request to cancel retry attempts is provided below.</p><p>Each request to cancel retrying the specific debiting must include the following objects and parameters:</p><p>Thus, a correct request to cancel retries must contain the project identifier, signature, and the identifiers of the debiting series record and the relevant debit operation.</p><p><code>200 OKerror</code>When the request to cancel debiting retries is processed, the payment platform sends a response with the codeto the web service. If the request is declined, the response contains a request processing statusand the description of the error that occurred.</p><ul><li><code>general\`\`project_id</code>—project identifier obtained from Platform during integration.<code>signature</code>—request signature generated after all required parameters are specified (details—in the article ).—object with general request identification information:</li><li><code>recurring\`\`id</code>—identifier of the debit series received in the callback with the COF purchase registration data or assigned when the COF purchase information was migrated from another acquirer.—object with the COF payment information:</li><li><code>trigger_operation_id</code>—identifier of the recurring debit operation for which you need to cancel retries.</li></ul><ol><li>\`\`Send an HTTP-POST request to theendpoint.</li><li>Receive a synchronous response communicating that performing the subsequent retry attempts has been cancelled.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-cof-retry-attempts-cancel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateCofRetryAttemptsCancel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateCofRetryAttemptsCancel as default
};
