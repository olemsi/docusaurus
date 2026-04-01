import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Single capture and cancel operations","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-purchases-single-capture-cancel.md","filePath":"dashboard/dbl-payments-purchases-single-capture-cancel.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-purchases-single-capture-cancel.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "single-capture-and-cancel-operations",
      tabindex: "-1"
    }, [
      createTextVNode("Single capture and cancel operations "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#single-capture-and-cancel-operations",
        "aria-label": 'Permalink to "Single capture and cancel operations"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "To initiate debiting of the authorised amount (cancel authorisation hold) as part of executing an individual two-step purchase:", -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, "declineawaiting capture"),
      createTextVNode("If the operation request has been declined, its status switches towhile the payment status remains.")
    ], -1)
  ])]);
}
const dblPaymentsPurchasesSingleCaptureCancel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblPaymentsPurchasesSingleCaptureCancel as default
};
