import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Quick start","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-quickstart-overview.md","filePath":"gate/gate-quickstart-overview.md"}');
const _sfc_main = { name: "gate/gate-quickstart-overview.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "quick-start",
      tabindex: "-1"
    }, [
      createTextVNode("Quick start "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#quick-start",
        "aria-label": 'Permalink to "Quick start"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "This guide explains how to organise payment processing via the Gate API of the Platform payment platform. This integration mode implies that you use your in-house user interface to ensure maximum interaction with customers on the side of the web service while the interaction with the payment platform is carried out on the programmatic level, “under the hood” so to speak. It allows you to apply tested and quick solutions as you follow the instructions and use code samples in PHP and Go.", -1),
    createBaseVNode("p", null, "cardand any payment methodand how to issue refunds on such purchases. As a rule, this functionality is optimal for the initial testing and quick launching of payment projects into production. Moreover, having integrated these capabilities, you can add anything else easily enough because working with any payment typesupported in the platform relies on the same principles as working with one-step card purchases and most of the time involves similar proceduresWith this guide, you will learn how to accept one-steppurchases (which are the most frequently used payments).", -1),
    createBaseVNode("p", null, "If processing purchases via Gate is not relevant, and you need only refund or payout functionality, you can use this guide to learn how to work with signatures, responses, and callbacks and then proceed to integrate relevant additional capabilities.If you need Gate only for checking statuses of individual payments, use this guide to learn how to work with signatures and see . If you feel like you need something completely different, consider the following options.", -1),
    createBaseVNode("p", null, "Now that the introductory matters have been taken care of, let's get to work.", -1),
    createBaseVNode("div", { class: "tip custom-block" }, [
      createBaseVNode("p", { class: "custom-block-title" }, "TIP"),
      createBaseVNode("p", null, "if you plan to take card paymentsIt should also be mentioned that to start payment processing via Gate you need to address both technological and organisational aspects of integration, which includes the PCI DSS compliance. For more information about it, see .")
    ], -1)
  ])]);
}
const gateQuickstartOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gateQuickstartOverview as default
};
