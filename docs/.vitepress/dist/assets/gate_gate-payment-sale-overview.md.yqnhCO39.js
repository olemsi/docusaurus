import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"One-step purchase overview","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-payment-sale-overview.md","filePath":"gate/gate-payment-sale-overview.md"}');
const _sfc_main = { name: "gate/gate-payment-sale-overview.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="one-step-purchase-overview" tabindex="-1">One-step purchase overview <a class="header-anchor" href="#one-step-purchase-overview" aria-label="Permalink to &quot;One-step purchase overview&quot;">​</a></h1><p>When performing an one-time one-step purchase, you can use one of the following options to transfer payment details:</p><ul><li><em>Transfer of complete payment details</em>MO/TO (Mail Order/Telephone Order) payment is a special case in which you transfer complete payment details. MO/TO is a card-not-present payment in which a customer may phone or email the merchant, place an order and pay by providing the payment card details over the phone or by email. For more information about MO/TO payments, see .. This is a basic option in which you collect all payment details from the customer, and then submit the data inside a payment request.</li><li><em>Transfer of payment details identifier</em><code>account_idcard_id</code>. To enable this option, you need to perform an initial COF payment. Once you do this, the payment platform creates a payment instrument record and returns a callback with the ID of the record in theorparameter. You need to specify this ID each time you submit to the payment platform a request for payment using stored credentials, see</li><li><em>Transfer of payment token</em><code>token</code>. To enable this option, you need to perform an initial payment. Once you do this, the payment platform creates a payment token and returns a callback with the token in theparameter. You need to specify this ID each time you submit to the payment platform a request for payment using stored credentials. For more information about using tokens, see .</li></ul>', 3)
  ])]);
}
const gatePaymentSaleOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gatePaymentSaleOverview as default
};
