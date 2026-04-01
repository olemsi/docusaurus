import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Use","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-parameters-methods-availability-use.md","filePath":"payment-page/pp-parameters-methods-availability-use.md"}');
const _sfc_main = { name: "payment-page/pp-parameters-methods-availability-use.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;Use&quot;">​</a></h1><p><em>by the currency</em><code>payment_currency</code>Once the functionality of filtering payment methodsis set up, no actions by the web service are required since the payment currency (passed in theparameter) is a required parameter for invoking Payment Widget. Filtering by this parameter will be carried out automatically.</p><p><em>by the country</em><code>region_code</code>Once the functionality of filtering payment methodsis set up, the web service needs to be configured in order to pass in the requests for opening Payment Widget relevant country codes (the customer&#39;s country is specified in theparameter), according to the reference. If the country code is specified in the request, filtering by this parameter will be carried out automatically. If not, payment methods will be filtered by the country associated with an IP-address of the customer&#39;s device.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-parameters-methods-availability-use.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppParametersMethodsAvailabilityUse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppParametersMethodsAvailabilityUse as default
};
