import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Saving customer payment data","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-saved-data.md","filePath":"payment-page/pp-saved-data.md"}');
const _sfc_main = { name: "payment-page/pp-saved-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="saving-customer-payment-data" tabindex="-1">Saving customer payment data <a class="header-anchor" href="#saving-customer-payment-data" aria-label="Permalink to &quot;Saving customer payment data&quot;">​</a></h1><p>Saved payment credentials are shown on the payment method selection page together with the details of cards for which tokens were generated.To ensure convenience and efficiency of the Payment Widget user scenarios, you can implement the capability of storing customer payment credentials for subsequent use without prompting the customer to provide this data again. Customer payment credentials can be saved when customers make purchases or when their payment instruments are verified.</p><p>always save customer payment datanever save customer payment dataask customers about saving payment dataPayment Widget supports the following options for saving payment data:</p><p>Additionally, you can limit the maximum number of saved payment instruments per customer.</p><p>If necessary, the customer can delete saved payment instruments in Payment Widget. In case when the customer deletes a saved card that was used to register a COF purchase, the debiting of funds continues to take place. For details on cancelling a COF purchase, see .</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-saved-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppSavedData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppSavedData as default
};
