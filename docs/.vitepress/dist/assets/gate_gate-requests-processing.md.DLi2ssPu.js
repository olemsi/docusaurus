import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Request handling","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-requests-processing.md","filePath":"gate/gate-requests-processing.md"}');
const _sfc_main = { name: "gate/gate-requests-processing.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "request-handling",
      tabindex: "-1"
    }, [
      createTextVNode("Request handling "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#request-handling",
        "aria-label": 'Permalink to "Request handling"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "Within any interaction models interaction begins with a request which is sent from the web service to the Platform payment platform. When the payment platform receives a request, there are three stages in the lifetime of request handling as follows:", -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, "4xx"),
      createTextVNode("Normally, the time between the payment platform receives the request and it responds with the first response is less than 100 ms in any cases. If no response is received, the web service may repeat the request with the same data (and the same payment identifier for payment processing request). In case oferror response, the web service should resend the request with a new or replaced data.")
    ], -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, "If the payment platform is able to parse the JSON string and the minimum number of parameters is specified the JSON, the request is sent through to the stage of request processing. If the payment platform uses an asynchronous model, the payment platform sends a HTTP response with information that the request has been accepted for processing.If the payment platform encounters errors, the request handling is stopped. Within any interaction models, the payment platform sends a HTTP response showing error condition.On the stage of request acceptance, the payment platform performs various preliminary tasks including reading and parsing a JSON string contained in the request, as well as checking for the minimum number of parameters in JSON."),
      createBaseVNode("li", null, [
        createBaseVNode("code", null, "payment"),
        createTextVNode("If the payment platform does not encounter errors in the data extracted from the JSON string, the request is sent through to the stage of request execution. In this case, the payment platform does not send a HTTP response. For the request initiating a payment, a payment is registered in the platform and aobject is created.If the payment platform encounters errors in the data, the request handling is stopped. If the payment platform uses a synchronous model, the payment platform sends a HTTP response showing error condition; if the payment platform uses an asynchronous model, it sends a callback.During the stage of request processing the payment platform performs Gate specification compliance checks, as well as data semantic consistency checks and signature validity.")
      ]),
      createBaseVNode("li", null, "If the payment platform successfully executes the request, it returns result. If the payment platform uses a synchronous model, it responds with an HTTP response with the result; if the payment platform uses an asynchronous model, it responds with a callback with the result.If the payment platform unsuccessfully executes the request, it stops request handling and returns error result. If the payment platform uses a synchronous model, it responds with an HTTP response with the requested data; if the payment platform uses an asynchronous model, it responds with a callback with the result.During the stage of request execution the payment platform performs Gate specification compliance checks, as well as data semantic consistency checks and signature validity.")
    ], -1)
  ])]);
}
const gateRequestsProcessing = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gateRequestsProcessing as default
};
