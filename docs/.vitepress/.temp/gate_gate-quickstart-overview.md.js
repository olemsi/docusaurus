import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Quick start","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-quickstart-overview.md","filePath":"gate/gate-quickstart-overview.md"}');
const _sfc_main = { name: "gate/gate-quickstart-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="quick-start" tabindex="-1">Quick start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick start&quot;">​</a></h1><p>This guide explains how to organise payment processing via the Gate API of the Platform payment platform. This integration mode implies that you use your in-house user interface to ensure maximum interaction with customers on the side of the web service while the interaction with the payment platform is carried out on the programmatic level, “under the hood” so to speak. It allows you to apply tested and quick solutions as you follow the instructions and use code samples in PHP and Go.</p><p>cardand any payment methodand how to issue refunds on such purchases. As a rule, this functionality is optimal for the initial testing and quick launching of payment projects into production. Moreover, having integrated these capabilities, you can add anything else easily enough because working with any payment typesupported in the platform relies on the same principles as working with one-step card purchases and most of the time involves similar proceduresWith this guide, you will learn how to accept one-steppurchases (which are the most frequently used payments).</p><p>If processing purchases via Gate is not relevant, and you need only refund or payout functionality, you can use this guide to learn how to work with signatures, responses, and callbacks and then proceed to integrate relevant additional capabilities.If you need Gate only for checking statuses of individual payments, use this guide to learn how to work with signatures and see . If you feel like you need something completely different, consider the following options.</p><p>Now that the introductory matters have been taken care of, let&#39;s get to work.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>if you plan to take card paymentsIt should also be mentioned that to start payment processing via Gate you need to address both technological and organisational aspects of integration, which includes the PCI DSS compliance. For more information about it, see .</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-quickstart-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateQuickstartOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateQuickstartOverview as default
};
