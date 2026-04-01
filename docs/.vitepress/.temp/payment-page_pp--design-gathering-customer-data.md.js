import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Page for additional data","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp--design-gathering-customer-data.md","filePath":"payment-page/pp--design-gathering-customer-data.md"}');
const _sfc_main = { name: "payment-page/pp--design-gathering-customer-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="page-for-additional-data" tabindex="-1">Page for additional data <a class="header-anchor" href="#page-for-additional-data" aria-label="Permalink to &quot;Page for additional data&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>If you use more than one additional field for gathering customer data, the fields are displayed on a separate page.</p><h2 id="mandatory-elements" tabindex="-1">Mandatory elements <a class="header-anchor" href="#mandatory-elements" aria-label="Permalink to &quot;Mandatory elements&quot;">​</a></h2><ul><li>Gathering customer dataGathering customer dataFields to request additional data about your customers.</li><li>Appendix 1Error messages. You need to specify the page layout with error messages displayed. The default texts of errors are presented in.</li><li><strong>Pay</strong>button that initiates payment processing.</li><li>PlatformPrivacy PolicyPrivacy Policy notice. Default text is &quot;Please readto understand how we process your personal data&quot;.</li></ul><h2 id="optional-elements" tabindex="-1">Optional elements <a class="header-anchor" href="#optional-elements" aria-label="Permalink to &quot;Optional elements&quot;">​</a></h2><ul><li>The message &quot;Enter additional data&quot;.</li><li>Payment systems requires to have logos of VISA, VISA ELECTRON, Mastercard, Maestro, Verified-by-VISA, Mastercard SecureCode, PSI DSS Compliant. Logos can be displayed on Payment Widget or on your project web page where Payment Widgetis embedded.Logos of payment systems and Payment Card Industry Data Security Standard (PCI DSS).You can change logos location.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp--design-gathering-customer-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp_DesignGatheringCustomerData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp_DesignGatheringCustomerData as default
};
