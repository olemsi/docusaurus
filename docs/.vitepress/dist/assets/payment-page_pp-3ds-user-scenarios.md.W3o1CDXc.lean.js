import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"User scenarios","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-3ds-user-scenarios.md","filePath":"payment-page/pp-3ds-user-scenarios.md"}');
const _sfc_main = { name: "payment-page/pp-3ds-user-scenarios.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "user-scenarios",
      tabindex: "-1"
    }, [
      createTextVNode("User scenarios "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#user-scenarios",
        "aria-label": 'Permalink to "User scenarios"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "The following are the steps the customer takes when making a purchase that involves the 3‑D Secure authentication.", -1),
    createBaseVNode("p", null, "The number and sequence of steps in this scenario may slightly change: for example, if the authentication involves the provider, the customer is redirected first to the provider's page and then to the ACS page.", -1),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, "The customer selects the option to make a purchase on the side of the merchant's web service."),
      createBaseVNode("li", null, "The payment form is displayed to the customer in accordance with the parameters passed in the request. The customer performs the required actions and confirms the purchase following which they are shown the Payment Widget preloader."),
      createBaseVNode("li", null, "If the issuer selects the challenge flow, the customer is shown the authentication page (ACS). The customer completes the required steps and is shown the Payment Widget preloader."),
      createBaseVNode("li", null, "The customer is shown the page with the payment result information.")
    ], -1)
  ])]);
}
const pp3dsUserScenarios = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  pp3dsUserScenarios as default
};
