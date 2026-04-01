import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Conversion overview","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-conversion-overview.md","filePath":"payment-page/pp-conversion-overview.md"}');
const _sfc_main = { name: "payment-page/pp-conversion-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="conversion-overview" tabindex="-1">Conversion overview <a class="header-anchor" href="#conversion-overview" aria-label="Permalink to &quot;Conversion overview&quot;">​</a></h1><p>In general, a payment may involve three currencies: customer account currency, payment currency, and merchant account currency. If all these currencies are the same, there is no need for currency conversion; otherwise you need to convert the payment amount between currencies.</p><p>or by alternative payment systemLet&#39;s say that the customer uses their dollar-denominated card to pay a certain amount in euros to merchant whose account is denominated in pound sterling. The payment amount is consecutively converted from dollars to euros, and then from euros to pounds. The first conversion operation is performed by the issuer. The second conversion operation is performed by the Platform payment platform.</p><p>You can also perform the conversion on your side and send the converted amount in the desired currency in the requests for performing operations.</p><p>. This option is default and available for all payment methods and currencies.Payment currency selected by merchant. This option is available only when customers use payment cards. To enable the option, contact your Platform account manager.Payment currency selected by customerFor payments that use Payment Widget, the Platform payment platform offers the following options:</p><p>and alternative payment systemsYou can get the information about conversion operations performed by the payment platform from the callbacks with payment results, from Dashboard, or from regular reports sent to email addresses you specify. We recommend that you use this information for reconciliation with Platform because issuersuse the merchant account currency to keep record of the merchant transactions.</p><p>or the organization where the account is openedIt should be also taken into account that the operation amount and the amount actually debited from the customer&#39;s account may not be the same since currency exchange rates usually differ on the date when the payment was initiated and the date when the funds were actually debited. For conversion and compensation in such cases, the customer should contact the card issuer.</p><p>To find out which payment methods and in which currencies support conversion, please refer to the description of this method or to the Platform account manager.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-conversion-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppConversionOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppConversionOverview as default
};
