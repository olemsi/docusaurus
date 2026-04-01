import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Processing payments","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-ui-and-core-ios-payments.md","filePath":"sdk/sdk-ui-and-core-ios-payments.md"}');
const _sfc_main = { name: "sdk/sdk-ui-and-core-ios-payments.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "processing-payments",
      tabindex: "-1"
    }, [
      createTextVNode("Processing payments "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#processing-payments",
        "aria-label": 'Permalink to "Processing payments"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, "Sale"),
      createTextVNode("By default, sdk_ui_ios allows processing one-step purchases (action type). This type of checkout works right out-of-the-box and requires no additional setup.")
    ], -1),
    createBaseVNode("p", null, "In addition, sdk_ui_ios supports processing two-step purchases (which involves placing an authorization hold via the SDK and subsequent debiting of the authorized amount). To perform a two-step purchase:", -1),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("code", null, "AuthpaymentOptions"),
        createTextVNode("SwiftpaymentOptions.action = .AuthObjective-C[paymentOptions setAction: ActionTypeAuth];Open the payment form withspecified as a value for the action type parameter in theobject:")
      ]),
      createBaseVNode("li", null, "When needed, initiate debiting of the authorized amount via Dashboard or Gate. To confirm debiting, use a request to theendpoint.")
    ], -1)
  ])]);
}
const sdkUiAndCoreIosPayments = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  sdkUiAndCoreIosPayments as default
};
