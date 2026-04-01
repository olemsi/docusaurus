import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Analysing statement data","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-finance-statement.md","filePath":"dashboard/dbl-finance-statement.md"}');
const _sfc_main = { name: "dashboard/dbl-finance-statement.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "analysing-statement-data",
      tabindex: "-1"
    }, [
      createTextVNode("Analysing statement data "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#analysing-statement-data",
        "aria-label": 'Permalink to "Analysing statement data"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "Statement information for a specified time period includes total amounts for opening and closing balances in each currency used. It also shows cash inflow and outflow data for a specified time period with a detailed itemisation: as a total for all balances in the same currency and separately for each balance. (Keep in mind that balance calculation may take up to 30 minutes and, consequently, balance information may reflect the aforementioned delay.)", -1),
    createBaseVNode("p", null, "To view statement information for a specified time period:", -1)
  ])]);
}
const dblFinanceStatement = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblFinanceStatement as default
};
