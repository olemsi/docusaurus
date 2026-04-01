import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Data API overview","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-api-overview.md","filePath":"dashboard/dbl-api-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-api-overview.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "data-api-overview",
      tabindex: "-1"
    }, [
      createTextVNode("Data API overview "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#data-api-overview",
        "aria-label": 'Permalink to "Data API overview"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, ", chargeback dataThe Data API is an API of the Platform payment platform which allows retrieving information onbalance information, operation data and fraudulent operation data with regard to the access rights to certain projects of the merchant and the specified conditions (such as the type of the operation and the time when it was performed). Access rights are determined via the specialized tokens of the Dashboard user accounts while the conditions of data retrieval are specified directly in the API requests.", -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, "https://data.platform.dev/v1"),
      createTextVNode("The Data API is available atand allows accepting requests at specified endpoints with the use of HTTP, version 1.1 or higher, and the TLS protocol, version 1.2 or higher. For the interface specification, see.")
    ], -1),
    createBaseVNode("p", null, "To work with the Platform payment platform using the Data API, the merchant needs to:", -1),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, "Make sure the requests can be sent and the responses can be received according to the Data API specification."),
      createBaseVNode("li", null, "Authorize users who require access to the Data API to generate API tokens and secret keys in the Dashboard interface."),
      createBaseVNode("li", null, "Test and deploy the developed solutions into production.")
    ], -1)
  ])]);
}
const dblApiOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblApiOverview as default
};
