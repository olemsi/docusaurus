import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mass capture and cancel operations","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-purchases-mass-capture-cancel.md","filePath":"dashboard/dbl-payments-purchases-mass-capture-cancel.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-purchases-mass-capture-cancel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mass-capture-and-cancel-operations" tabindex="-1">Mass capture and cancel operations <a class="header-anchor" href="#mass-capture-and-cancel-operations" aria-label="Permalink to &quot;Mass capture and cancel operations&quot;">​</a></h1><p><code>capturecancel</code>To performoroperations using a batch request:</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-payments-purchases-mass-capture-cancel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblPaymentsPurchasesMassCaptureCancel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblPaymentsPurchasesMassCaptureCancel as default
};
