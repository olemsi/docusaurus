import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Related links","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-payment-status-request-related-links.md","filePath":"gate/gate-payment-status-request-related-links.md"}');
const _sfc_main = { name: "gate/gate-payment-status-request-related-links.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="related-links" tabindex="-1">Related links <a class="header-anchor" href="#related-links" aria-label="Permalink to &quot;Related links&quot;">​</a></h1><ul><li>—general information about integration with the payment platform using Gate.</li><li>—detailed information about types, workflows, and possible statuses of supported payments.</li><li>—detailed information about generating and verifying signatures in requests and callbacks sent by the payment platform.</li><li>—a comprehensive list of error and response codes used in the payment platform to provide operation processing information.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-payment-status-request-related-links.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gatePaymentStatusRequestRelatedLinks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gatePaymentStatusRequestRelatedLinks as default
};
