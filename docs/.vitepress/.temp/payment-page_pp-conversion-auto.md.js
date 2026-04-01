import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Automatic payment currency selection","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-conversion-auto.md","filePath":"payment-page/pp-conversion-auto.md"}');
const _sfc_main = { name: "payment-page/pp-conversion-auto.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="automatic-payment-currency-selection" tabindex="-1">Automatic payment currency selection <a class="header-anchor" href="#automatic-payment-currency-selection" aria-label="Permalink to &quot;Automatic payment currency selection&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>This type of payment currency selection is available for all payment methods.The capability of automatic payment currency selection does not allow the customer to select the currency to perform the payment.Automatic payment currency selection uses exchange rates set by Platform. To learn more about exchange rates, contact your account manager.</p><ul><li><a href="http://www.ecb.europa.eu" target="_blank" rel="noreferrer">European Central Bank</a></li><li><a href="http://www.cbr.ru/" target="_blank" rel="noreferrer">Central Bank of Russia</a></li><li><a href="https://currencylayer.com/" target="_blank" rel="noreferrer">Currencylayer service</a></li></ul><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h2><p>You do not need to update your web service to support automatic payment currency selection.</p><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;Use&quot;">​</a></h2><p>Automatic payment currency selection does not require any additional actions on your part and is automatically performed during the payment procedure.</p><p><code>operationsum_initialsum_converted</code>Currency conversion information is included in payment result callbacks: theobject contains theobject that specifies the amount and the initial currency and theobject that specifies the amount and the currency after the conversion operation. For more information about these objects, see .</p><p><code>100 USD519.41 PHP</code>The following example shows information about a purchase with a conversion operation in whichare converted into.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-conversion-auto.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppConversionAuto = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppConversionAuto as default
};
