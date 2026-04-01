import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Setting up","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-receipts-setting-up.md","filePath":"gate/gate-receipts-setting-up.md"}');
const _sfc_main = { name: "gate/gate-receipts-setting-up.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "setting-up",
      tabindex: "-1"
    }, [
      createTextVNode("Setting up "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#setting-up",
        "aria-label": 'Permalink to "Setting up"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "Platform technical support specialists enable and set up the capability of sending notifications to customers. The following settings are configured upon agreement with the merchant:", -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, "List of operations and other events to generate notifications."),
      createBaseVNode("li", null, [
        createBaseVNode("code", null, "successdecline"),
        createTextVNode("Operations statuses that generate notifications (can be enabled both for the final statusand for the final status).")
      ]),
      createBaseVNode("li", null, "Subject line of the email with the notification (for instance, Receipt or Notification about completed purchase)."),
      createBaseVNode("li", null, "Sender's email address (can be Platform domain or custom domain)"),
      createBaseVNode("li", null, "Option to send blind carbon copy (bcc) of the notification to the address provided by the merchant.")
    ], -1)
  ])]);
}
const gateReceiptsSettingUp = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gateReceiptsSettingUp as default
};
