import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Receipts and notifications","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-receipt-data.md","filePath":"payment-page/pp-receipt-data.md"}');
const _sfc_main = { name: "payment-page/pp-receipt-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="receipts-and-notifications" tabindex="-1">Receipts and notifications <a class="header-anchor" href="#receipts-and-notifications" aria-label="Permalink to &quot;Receipts and notifications&quot;">​</a></h1><h2 id="sending-a-receipt" tabindex="-1">Sending a receipt <a class="header-anchor" href="#sending-a-receipt" aria-label="Permalink to &quot;Sending a receipt&quot;">​</a></h2><p><code>language_code</code>If you need to send sales receipts to customers, you have to make sure that this functionality is enabled in the settings. You also have to make sure that all positions to be indicated in the receipt are passed in the payment request. When this functionality is added and configured, you can also decide on the set of languages available for forming receipts and choose the default language. In individual cases, a different language can be selected the same way as the language of the payment form—with the use of theparameter.</p><p>receipt_data\`\`The data for the receipt is passed as a JSON object which is encoded in Base64 and sent in the payment request in theparameter. The JSON object structure is given in themodel in the Gate API.</p><h2 id="example-of-the-receipt-data-to-be-sent" tabindex="-1">Example of the receipt data to be sent <a class="header-anchor" href="#example-of-the-receipt-data-to-be-sent" aria-label="Permalink to &quot;Example of the receipt data to be sent&quot;">​</a></h2><p>Initial JSON object:</p><p>The same data, encoded in Base64, to be sent to Payment Widget in the payment request (the contents of the parameter are split into several lines for the reader&#39;s convenience):</p><p>For more information about sending receipts to customers, see the section .</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-receipt-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppReceiptData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppReceiptData as default
};
