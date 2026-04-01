import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Request handling","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-interaction-requests-processing.md","filePath":"payment-page/pp-interaction-requests-processing.md"}');
const _sfc_main = { name: "payment-page/pp-interaction-requests-processing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="request-handling" tabindex="-1">Request handling <a class="header-anchor" href="#request-handling" aria-label="Permalink to &quot;Request handling&quot;">​</a></h1><p>The interaction between your web service and Payment Widget begins with issuing a request to open Payment Widget to perform specific target action. After the payment platform receives a request, it does the following:</p><ul><li>If the request is correct, the request processing starts and the corresponding acknowledgement is sent out.If the payment platform encounters errors, the request handling is stopped and the corresponding error message is displayed to the customer. In this situation, no callback is submitted to the web service.After the payment platform receives a request, it checks whether all the necessary parameters are available in the request and the signature is correct.</li><li>for all target activities (except for token generation)<code>payment</code>If the customer confirms the target activity, the request moves to the processing stage. On this stage, the payment platform registers a paymentby creating aobject.If the customer does not confirm the target activity, the request is cancelled. No payment is registered and no callback is sent to the web service.On the request processing stage, the payment platform prepares Payment Widget in accordance with project settings and request parameters. Then, the Payment Widget interacts with the customer through the payment form.</li><li>If the payment platform has successfully processed the request, it returns the result to the web service.If the payment platform has failed to process the request, it stops request handling and returns error result to the web service.The request processing stage involves performing all the actions to obtain the target result.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-interaction-requests-processing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppInteractionRequestsProcessing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppInteractionRequestsProcessing as default
};
