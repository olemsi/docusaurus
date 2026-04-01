import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Receipts and notifications","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-receipt-data.md","filePath":"payment-page/pp-receipt-data.md"}');
const _sfc_main = { name: "payment-page/pp-receipt-data.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="receipts-and-notifications" tabindex="-1">Receipts and notifications <a class="header-anchor" href="#receipts-and-notifications" aria-label="Permalink to &quot;Receipts and notifications&quot;">​</a></h1><h2 id="sending-a-receipt" tabindex="-1">Sending a receipt <a class="header-anchor" href="#sending-a-receipt" aria-label="Permalink to &quot;Sending a receipt&quot;">​</a></h2><p><code>language_code</code>If you need to send sales receipts to customers, you have to make sure that this functionality is enabled in the settings. You also have to make sure that all positions to be indicated in the receipt are passed in the payment request. When this functionality is added and configured, you can also decide on the set of languages available for forming receipts and choose the default language. In individual cases, a different language can be selected the same way as the language of the payment form—with the use of theparameter.</p><p>receipt_data``The data for the receipt is passed as a JSON object which is encoded in Base64 and sent in the payment request in theparameter. The JSON object structure is given in themodel in the Gate API.</p><h2 id="example-of-the-receipt-data-to-be-sent" tabindex="-1">Example of the receipt data to be sent <a class="header-anchor" href="#example-of-the-receipt-data-to-be-sent" aria-label="Permalink to &quot;Example of the receipt data to be sent&quot;">​</a></h2><p>Initial JSON object:</p><p>The same data, encoded in Base64, to be sent to Payment Widget in the payment request (the contents of the parameter are split into several lines for the reader&#39;s convenience):</p><p>For more information about sending receipts to customers, see the section .</p>', 8)
  ])]);
}
const ppReceiptData = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppReceiptData as default
};
