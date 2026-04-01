import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Open Banking in the UK","description":"","frontmatter":{},"headers":[],"relativePath":"payment-methods-flat/pm-uk-dash-analysis.md","filePath":"payment-methods-flat/pm-uk-dash-analysis.md"}');
const _sfc_main = { name: "payment-methods-flat/pm-uk-dash-analysis.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "open-banking-in-the-uk",
      tabindex: "-1"
    }, [
      createTextVNode("Open Banking in the UK "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#open-banking-in-the-uk",
        "aria-label": 'Permalink to "Open Banking in the UK"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "To analyse information about payments made with the Open Banking in the UK method, as well as other methods, you can use:", -1),
    createBaseVNode("p", null, "If you have any questions, refer to the documentation ( and ) and Ecommlabs technical support.", -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, "Dashboard interface toolkit with various lists and analytic panels."),
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "Reports"),
        createTextVNode("Reports in CSV file format, available via thesection (one-time and periodically).")
      ]),
      createBaseVNode("li", null, "Data in JSON format, sent by program requests to a specified URL by using the Data API interface.")
    ], -1)
  ])]);
}
const pmUkDashAnalysis = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  pmUkDashAnalysis as default
};
