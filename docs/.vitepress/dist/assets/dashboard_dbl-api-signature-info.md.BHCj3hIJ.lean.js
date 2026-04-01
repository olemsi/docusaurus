import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Signature information","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-api-signature-info.md","filePath":"dashboard/dbl-api-signature-info.md"}');
const _sfc_main = { name: "dashboard/dbl-api-signature-info.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "signature-information",
      tabindex: "-1"
    }, [
      createTextVNode("Signature information "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#signature-information",
        "aria-label": 'Permalink to "Signature information"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "The data communication between the merchant web service and the Platform payment platform is protected by using the TLS protocol version 1.2 or later. This ensures the confidentiality of the data being transmitted, though the protocol cannot guarantee the message integrity and ensure that the message author possesses the secret key. Therefore, every message must be digitally signed by using the secret key issued by Platform for the merchant and known only to the merchant and the Platform payment platform.", -1),
    createBaseVNode("p", null, [
      createBaseVNode("em", null, "asynchronous interaction modelsynchronous interaction model"),
      createTextVNode("Regardless of the interface that is used for working with the payment platform, digital signatures should be included in all requests, callbacks (for the requests processed within the), and certain responses (for the requests processed within the). The responses that do not include signatures are usually the ones that contain only auxiliary information (for example, the response stating that the request has been declined due to the incorrect data) or general information without the payment or customer details (for example, the response containing the list of available banks). In other cases, signatures are included in the responses.")
    ], -1),
    createBaseVNode("p", null, "To implement the digital signature generation and verification, you can use either your own solutions or the SDK available from Platform. (For more information about the SDK, see ).Thus, before you submit a request to the Platform payment platform, a digital signature should be generated and included in the request; after the callbacks and responses that contain signatures have been received from the payment platform, it is necessary to verify the received data by comparing the signatures to the ones generated on the merchant side.The data integrity can be compromised for various reasons, but whenever such cases are detected, this data should not be considered valid.", -1),
    createBaseVNode("p", null, "This section describes the algorithms for the digital signature generation and the data integrity verification, including examples with the use of these algorithms and interactive forms for testing the workflows using signatures.", -1)
  ])]);
}
const dblApiSignatureInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblApiSignatureInfo as default
};
