import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Opening in new tab","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-opening-html-overview.md","filePath":"payment-page/pp-opening-html-overview.md"}');
const _sfc_main = { name: "payment-page/pp-opening-html-overview.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "opening-in-new-tab",
      tabindex: "-1"
    }, [
      createTextVNode("Opening in new tab "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#opening-in-new-tab",
        "aria-label": 'Permalink to "Opening in new tab"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "When opened as a separate HTML page, the Payment Widget payment form is displayed to the customer in a separate browser tab. Depending on the browser operation setup, it can be an active tab, in which the web service page was opened, or a new tab—but in either case, the customer's interaction with the web service is interrupted and the customer is redirected to a different page, which focuses their attention on the purchase. After the purchase, the customer can be redirected back to the web service (details).", -1),
    createBaseVNode("p", null, "For opening the payment form as a separate page, the following should be performed on the web service side:", -1),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, "Define the events upon which the payment form should open (for example, the purchase button click)."),
      createBaseVNode("li", null, [
        createBaseVNode("code", null, "https://paymentpage.platform.dev/shared/merchant.js"),
        createTextVNode("Set up the payment form to open upon the required events by using your in-house solutions or the JavaScript library from Platform available at. Among other capabilities, this library allows you to automatically use a certain option of Payment Widget opening depending on a device. It means the form can be set to open as a separate page on mobile devices and in a modal window or in an iframe element on other devices.")
      ])
    ], -1)
  ])]);
}
const ppOpeningHtmlOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppOpeningHtmlOverview as default
};
