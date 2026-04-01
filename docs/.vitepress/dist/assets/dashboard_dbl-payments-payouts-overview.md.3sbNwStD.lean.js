import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Requirements","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-payouts-overview.md","filePath":"dashboard/dbl-payments-payouts-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-payouts-overview.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "requirements",
      tabindex: "-1"
    }, [
      createTextVNode("Requirements "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#requirements",
        "aria-label": 'Permalink to "Requirements"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "Dashboard interface allows users to perform payouts with the use of individual and batch requests. In both cases, the following requirements must be met:", -1),
    createBaseVNode("p", null, "If any issues regarding these requirements occur, they can be solved with the specialists in charge of granting access rights and working with balances.", -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, "Two-factor authentication is enabled for the Dashboard user account in question."),
      createBaseVNode("li", null, "The user account has been granted the right to perform payouts."),
      createBaseVNode("li", null, "Payouts are supported for the selected payment method."),
      createBaseVNode("li", null, "The balance under which payouts are performed has enough funds."),
      createBaseVNode("li", null, "If additional data is required to perform a payout, it has to be provided within 22 hours.")
    ], -1)
  ])]);
}
const dblPaymentsPayoutsOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblPaymentsPayoutsOverview as default
};
