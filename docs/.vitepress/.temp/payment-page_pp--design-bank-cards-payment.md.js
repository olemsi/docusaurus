import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Card payment widget","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp--design-bank-cards-payment.md","filePath":"payment-page/pp--design-bank-cards-payment.md"}');
const _sfc_main = { name: "payment-page/pp--design-bank-cards-payment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="card-payment-widget" tabindex="-1">Card payment widget <a class="header-anchor" href="#card-payment-widget" aria-label="Permalink to &quot;Card payment widget&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The page is used to input data of a bank card.</p><h2 id="mandatory-elements" tabindex="-1">Mandatory elements <a class="header-anchor" href="#mandatory-elements" aria-label="Permalink to &quot;Mandatory elements&quot;">​</a></h2><ul><li>With the space delimiter.Without delimiter.You can display the payment system logo which is identified by the Bank Identification Number (BIN) of the bank card.You cannot change logos of payment system.Visa bank cardBank card number. You can display the number of a bank card in two ways:</li><li>In separated fields.In one field with separator &quot;/&quot;.From drop-down lists.Bank card expiry date. You can display expiry date in one of the following ways:</li><li>Cardhcprer. The field can be hidden but it is required to confirm with technical support.</li><li>Card Verification Value/Code (CVV/CVC/CID).</li><li><strong>Pay</strong>button that initiates payment processing.</li><li>PlatformPrivacy PolicyPrivacy Policy notice. Default text is &quot;Please readto understand how we process your personal data&quot;.</li><li>Error messagesError messagesAppendix 1You need to specify the page layout with displayed error messages. The default error texts are provided in.Error messages. Input fields are validated when loses focus An error message displays when the error field is focused.</li></ul><h2 id="optional-elements" tabindex="-1">Optional elements <a class="header-anchor" href="#optional-elements" aria-label="Permalink to &quot;Optional elements&quot;">​</a></h2><ul><li>The message &quot;Enter Bank Card details&quot;.</li><li>One additional fieldOne additional fieldFields for gathering customer data. If you use more than one additional field for gathering customer data, the fields are displayed on the next step page.</li><li>Payment systems requires to have logos of VISA, VISA ELECTRON, Mastercard, Maestro, Verified-by-VISA, Mastercard SecureCode, PSI DSS Compliant. Logos can be displayed on Payment Widget or on the your project web page where at the same time Payment Widget must be embedded as an element of your project web page.Logos of payment systems and Payment Card Industry Data Security Standard (PCI DSS). You can change logos location.</li><li>Countdown timerFor more information, see .Payment lifetime limit.You are not allowed to change the text and image of timer.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp--design-bank-cards-payment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp_DesignBankCardsPayment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp_DesignBankCardsPayment as default
};
