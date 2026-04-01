import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Payment card verification","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-ui-and-core-ios-verify.md","filePath":"sdk/sdk-ui-and-core-ios-verify.md"}');
const _sfc_main = { name: "sdk/sdk-ui-and-core-ios-verify.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "payment-card-verification",
      tabindex: "-1"
    }, [
      createTextVNode("Payment card verification "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#payment-card-verification",
        "aria-label": 'Permalink to "Payment card verification"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "Payment instrument verification can be used when you need to validate a card without withdrawing funds instantly (for example, before performing a payout) or when you need to save card details for subsequent use. It is essentially a payment that involves debiting a dummy (zero) amount from the customer's card.", -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, "VerifypaymentOptions"),
      createTextVNode("To perform verification, open the payment form withspecified as a value for the action type parameter in theobject:")
    ], -1)
  ])]);
}
const sdkUiAndCoreIosVerify = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  sdkUiAndCoreIosVerify as default
};
