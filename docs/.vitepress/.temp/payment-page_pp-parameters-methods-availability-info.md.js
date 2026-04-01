import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"General information","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-parameters-methods-availability-info.md","filePath":"payment-page/pp-parameters-methods-availability-info.md"}');
const _sfc_main = { name: "payment-page/pp-parameters-methods-availability-info.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="general-information" tabindex="-1">General information <a class="header-anchor" href="#general-information" aria-label="Permalink to &quot;General information&quot;">​</a></h1><p><em>Parametric filtering</em>ensures automatic hiding of those payment methods that are available within the current project but are not relevant for the country or currency of a particular payment. With this filtering option, the page for selecting payment methods displays to the customer only relevant payment methods with relevancy determined by the specific criteria.</p><p><code>PLN</code>For example, if within the current project payment method availability is determined by currency, and in general situations, standard card payments, , , and are usually available, when the request for opening Payment Widget specifies the currency of Polish zloty (), then the customer will be shown the selection of standard card payments and the payment methods.</p><p>You can choose which parameter will be used for filtering (country or currency) and how to filter individual methods depending on their specific characteristics and the characteristics of the web service, following which filtering will be configured accordingly. Keep in mind that once set up, the option to filter payment methods by currency is applied each time when Payment Widget is invoked.Other than the aforementioned considerations, no actions are required once this functionality is set up.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-parameters-methods-availability-info.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppParametersMethodsAvailabilityInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppParametersMethodsAvailabilityInfo as default
};
