import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"partner","description":"","frontmatter":{},"headers":[],"relativePath":"payment-methods-flat/pm-ukrcard-dash-analysis.md","filePath":"payment-methods-flat/pm-ukrcard-dash-analysis.md"}');
const _sfc_main = { name: "payment-methods-flat/pm-ukrcard-dash-analysis.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "partner",
      tabindex: "-1"
    }, [
      createTextVNode("partner "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#partner",
        "aria-label": 'Permalink to "partner"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "As with other payment methods Ecommlabs offers, when using the partner method, you have several options to analyse the information about payments and operations performed by using the method—alone or in conjunction with other methods.", -1),
    createBaseVNode("p", null, [
      createBaseVNode("strong", null, "Analytics"),
      createTextVNode("You can load and analyse all the necessary information in Dashboard, for instance you can use the analytic panels on thetab to this end.")
    ], -1),
    createBaseVNode("p", null, "Also, you can export the information for further analysis by using third party analytical tools. The following options are available:", -1),
    createBaseVNode("p", null, "If you have any further questions regarding payment data analysis, contact Ecommlabs technical support.", -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, "PaymentsDashboard allows you to download reports in CSV and XLS formats—by using the tools on thetab. You can perform export as a one-time download to your local computer or have payment data regularly exported and delivered to email addresses you specify."),
      createBaseVNode("li", null, "Data APIallows you to have payment information exported in JSON format and delivered to a URL you specify. The payment information is exported by using the /operations/get queries.")
    ], -1)
  ])]);
}
const pmUkrcardDashAnalysis = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  pmUkrcardDashAnalysis as default
};
