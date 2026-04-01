import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Single payouts","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-payouts-single.md","filePath":"dashboard/dbl-payments-payouts-single.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-payouts-single.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "single-payouts",
      tabindex: "-1"
    }, [
      createTextVNode("Single payouts "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#single-payouts",
        "aria-label": 'Permalink to "Single payouts"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "To perform a single payout:", -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, "decline"),
      createTextVNode("If the payout is declined, the payment status switches to. It can happen due to a variety of reasons. For example, it can be caused by the lack of funds, in which case you can add funds to the balance and try to perform a payout again.")
    ], -1)
  ])]);
}
const dblPaymentsPayoutsSingle = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblPaymentsPayoutsSingle as default
};
