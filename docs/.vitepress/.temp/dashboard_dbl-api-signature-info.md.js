import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Signature information","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-api-signature-info.md","filePath":"dashboard/dbl-api-signature-info.md"}');
const _sfc_main = { name: "dashboard/dbl-api-signature-info.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="signature-information" tabindex="-1">Signature information <a class="header-anchor" href="#signature-information" aria-label="Permalink to &quot;Signature information&quot;">​</a></h1><p>The data communication between the merchant web service and the Platform payment platform is protected by using the TLS protocol version 1.2 or later. This ensures the confidentiality of the data being transmitted, though the protocol cannot guarantee the message integrity and ensure that the message author possesses the secret key. Therefore, every message must be digitally signed by using the secret key issued by Platform for the merchant and known only to the merchant and the Platform payment platform.</p><p><em>asynchronous interaction modelsynchronous interaction model</em>Regardless of the interface that is used for working with the payment platform, digital signatures should be included in all requests, callbacks (for the requests processed within the), and certain responses (for the requests processed within the). The responses that do not include signatures are usually the ones that contain only auxiliary information (for example, the response stating that the request has been declined due to the incorrect data) or general information without the payment or customer details (for example, the response containing the list of available banks). In other cases, signatures are included in the responses.</p><p>To implement the digital signature generation and verification, you can use either your own solutions or the SDK available from Platform. (For more information about the SDK, see ).Thus, before you submit a request to the Platform payment platform, a digital signature should be generated and included in the request; after the callbacks and responses that contain signatures have been received from the payment platform, it is necessary to verify the received data by comparing the signatures to the ones generated on the merchant side.The data integrity can be compromised for various reasons, but whenever such cases are detected, this data should not be considered valid.</p><p>This section describes the algorithms for the digital signature generation and the data integrity verification, including examples with the use of these algorithms and interactive forms for testing the workflows using signatures.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-api-signature-info.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblApiSignatureInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblApiSignatureInfo as default
};
