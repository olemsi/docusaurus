import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Two-step purchase","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-purchase-auth-about.md","filePath":"payment-page/pp-purchase-auth-about.md"}');
const _sfc_main = { name: "payment-page/pp-purchase-auth-about.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "two-step-purchase",
      tabindex: "-1"
    }, [
      createTextVNode("Two-step purchase "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#two-step-purchase",
        "aria-label": 'Permalink to "Two-step purchase"'
      }, "​")
    ], -1),
    createBaseVNode("div", { class: "tip custom-block" }, [
      createBaseVNode("p", { class: "custom-block-title" }, "TIP"),
      createBaseVNode("p", null, "In addition, use the following materials to gain a fuller understanding of processing one-time two-step purchases:—an article in the section that provides a general description of processing one-time two-step purchases in the Platform payment platform and covers information about operations utilised to execute a payment of this type and statuses that are assigned to the payment and the operations performed within it.articles of the section containing a description of processing one-time two-step purchases via Payment Widget with the focus on the specific features of the payment method used and information about relevant requests and callbacks.This article covers processing one-time two-step purchases, including placing an authorisation hold via Payment Widget, and describes requests and callbacks that are used in case of card payments.")
    ], -1)
  ])]);
}
const ppPurchaseAuthAbout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppPurchaseAuthAbout as default
};
