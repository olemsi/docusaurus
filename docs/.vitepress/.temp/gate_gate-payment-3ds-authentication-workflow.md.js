import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Authentication workflows","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-payment-3ds-authentication-workflow.md","filePath":"gate/gate-payment-3ds-authentication-workflow.md"}');
const _sfc_main = { name: "gate/gate-payment-3ds-authentication-workflow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="authentication-workflows" tabindex="-1">Authentication workflows <a class="header-anchor" href="#authentication-workflows" aria-label="Permalink to &quot;Authentication workflows&quot;">​</a></h1><p>basicextended, used by default,implemented upon the merchant&#39;s request. The latter is supported only for 3‑D Secure 2 and can be relevant when monitoring each step of the authentication procedure is necessary for the merchant&#39;s operationIn the Platform payment platform, the 3‑D Secure authentication is implemented in the processing of one-step and two-step purchases made with cards and card verification requests. Along with that, two authentication workflows are available:(a.k.a. proxy)and, (a.k.a. native).</p><p>The basic workflow can require less development effort from the merchant, yet it also requires additional customer redirect operations. The extended workflow does not require additional redirection, but it can require more development effort.The merchant can choose either of the workflows. However, extended workflow is preferable as it ensures better user experience and can positively impact payment acceptance rates.</p><p>You can switch from basic to extended workflow at any time; no additional coordination with the Platform specialists is necessary. In the payment request pass the parameters required for the extended workflow. They are listed below, in .</p><table tabindex="0"><thead><tr><th>Basic (proxy) workflow</th><th>Extended (native) workflow</th></tr></thead><tbody><tr><td>Based on the existing 3‑D Secure 1 workflow.Requires less development effort from merchants.Requires multiple customer redirect operations.</td><td>Optimized for 3‑D Secure 2.Requires more development effort from merchants.Does not require any intermediate customer redirect operations.</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-payment-3ds-authentication-workflow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gatePayment3dsAuthenticationWorkflow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gatePayment3dsAuthenticationWorkflow as default
};
