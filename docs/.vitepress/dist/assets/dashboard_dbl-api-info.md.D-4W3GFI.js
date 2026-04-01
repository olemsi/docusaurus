import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Interaction model","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-api-info.md","filePath":"dashboard/dbl-api-info.md"}');
const _sfc_main = { name: "dashboard/dbl-api-info.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "interaction-model",
      tabindex: "-1"
    }, [
      createTextVNode("Interaction model "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#interaction-model",
        "aria-label": 'Permalink to "Interaction model"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "When the Data API is used, the Platform payment platform and the merchant's web service interact by exchanging request and response messages in the HTTP format: the web service issues requests and the payment platform responds to those requests. The interaction model is synchronous as the request gets fully processed within one HTTP session and the one-time response is returned as a result, either with the requested information or the information about the error that occurred.", -1),
    createBaseVNode("p", null, "This interaction model implies that all Data API requests (for instance, for balance information on the merchant's projects) are processed using only the resources of the payment platform, without resorting to other services and systems. At the same time, depending on the complexity of the request and the volume of the compiled data, the time to process an individual request in the payment platform can significantly vary: from several milliseconds to several minutes (as a rule, it does not exceed five minutes).", -1)
  ])]);
}
const dblApiInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblApiInfo as default
};
