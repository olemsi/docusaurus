import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, E as createVNode, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Payment Widget","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/index.md","filePath":"payment-page/index.md"}');
const _sfc_main = { name: "payment-page/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArchDiagram = resolveComponent("ArchDiagram");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "payment-widget",
      tabindex: "-1"
    }, [
      createTextVNode("Payment Widget "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#payment-widget",
        "aria-label": 'Permalink to "Payment Widget"'
      }, "​")
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, "Payment Widget is a hosted checkout form for launching payments without building the payment UI and card-data flow on your side.", -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "The practical integration model is simple:", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("ol", null, [
      createBaseVNode("li", null, "Your back end signs the final Payment Widget parameters."),
      createBaseVNode("li", null, "Your front end opens the hosted form."),
      createBaseVNode("li", null, "The platform sends the payment result callback back to your server.")
    ], -1)),
    _cache[4] || (_cache[4] = createBaseVNode("p", null, "You can open Payment Widget in a redirect flow, a modal window, or an embedded iframe. For most teams, the fastest route is to start with the quickstart and copy-paste examples, then move to scenario-specific and reference pages only after the first working payment.", -1)),
    createVNode(_component_ArchDiagram, { variant: "pp" }),
    _cache[5] || (_cache[5] = createStaticVNode("", 8))
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
