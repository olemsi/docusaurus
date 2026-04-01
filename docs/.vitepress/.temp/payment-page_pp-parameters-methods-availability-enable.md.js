import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Setup","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-parameters-methods-availability-enable.md","filePath":"payment-page/pp-parameters-methods-availability-enable.md"}');
const _sfc_main = { name: "payment-page/pp-parameters-methods-availability-enable.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h1><p>To set up parametric filtering, proceed as follows:</p><ol><li>If needed, consult with your Platform account manager at this step.Determine the following: which projects require this functionality, which parameter will be used for filtering (the customer&#39;s country or the payment currency), and whether you need to configure exceptions or specific filtering rules for individual payment methods.</li><li>Pass your requirements for setting up this functionality to the Platform technical support and agree upon the setup timeline and testing needs for this functionality.</li><li>Receive from the Platform specialists the notification that the functionality has been set up and, if necessary, test the work of the payment form with this functionality used.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-parameters-methods-availability-enable.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppParametersMethodsAvailabilityEnable = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppParametersMethodsAvailabilityEnable as default
};
