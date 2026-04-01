import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Useful links","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-cof-retry-attempts-useful-links.md","filePath":"gate/gate-cof-retry-attempts-useful-links.md"}');
const _sfc_main = { name: "gate/gate-cof-retry-attempts-useful-links.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "useful-links",
      tabindex: "-1"
    }, [
      createTextVNode("Useful links "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#useful-links",
        "aria-label": 'Permalink to "Useful links"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "The following articles can be useful when working with debiting retry attempts:", -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, "—about working with payments via Dashboard, including working with regular COF purchases and managing attempts to retry debit operations executed as part of regular COF purchases."),
      createBaseVNode("li", null, "—about processing regular COF purchases via Gate, including general information, description of processing workflows and data formats for working with standard card payments."),
      createBaseVNode("li", null, "—about interacting with the payment platform via the Gate API, including description of interaction workflows and general requirements to data formats."),
      createBaseVNode("li", null, "—about working with callbacks that allow receiving up-to-date information significant for processing of each payment, including description of callback types and data formats."),
      createBaseVNode("li", null, "—about the procedure of generating and verifying signatures in requests and callbacks in the process of interacting with the platform.")
    ], -1)
  ])]);
}
const gateCofRetryAttemptsUsefulLinks = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gateCofRetryAttemptsUsefulLinks as default
};
