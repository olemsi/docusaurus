import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"COF on platform side","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-cof-gate-side-overview.md","filePath":"gate/gate-cof-gate-side-overview.md"}');
const _sfc_main = { name: "gate/gate-cof-gate-side-overview.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "cof-on-platform-side",
      tabindex: "-1"
    }, [
      createTextVNode("COF on platform side "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#cof-on-platform-side",
        "aria-label": 'Permalink to "COF on platform side"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, [
      createBaseVNode("em", null, "COF purchase with automatic debiting"),
      createTextVNode("is a payment type which uses a single initial request to make a series of regularly recurring funds transfers (debits) from the customer to the merchant by using stored payment credentials without verification of the payment instrument (i.e. by entering a card verification code). The Platform payment platform performs COF purchases with automatic debiting according to the payment model (learn more). If one attempt to perform a scheduled debiting is not enough (for example, if the customer's card account has insufficient balance), the debiting can be retried in the payment platform automatically (details).")
    ], -1)
  ])]);
}
const gateCofGateSideOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gateCofGateSideOverview as default
};
