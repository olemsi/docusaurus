import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Deleting criteria","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-risks-bwlist-delete.md","filePath":"dashboard/dbl-risks-bwlist-delete.md"}');
const _sfc_main = { name: "dashboard/dbl-risks-bwlist-delete.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "deleting-criteria",
      tabindex: "-1"
    }, [
      createTextVNode("Deleting criteria "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#deleting-criteria",
        "aria-label": 'Permalink to "Deleting criteria"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, [
      createBaseVNode("strong", null, "Risks"),
      createTextVNode("You can delete criteria included in the whitelists and blacklists in thesection. Keep in mind that they should be deleted one by one.")
    ], -1),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("strong", null, "Black/White listsRisks"),
        createTextVNode("To go to the Criteria subsection, click thebutton in thesection.")
      ]),
      createBaseVNode("li", null, "Find the record you need using filters if necessary."),
      createBaseVNode("li", null, "To delete the record, click thebutton in the corresponding line."),
      createBaseVNode("li", null, "Make sure that the record has been deleted from the list.")
    ], -1)
  ])]);
}
const dblRisksBwlistDelete = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblRisksBwlistDelete as default
};
