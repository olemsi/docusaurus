import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Data format","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-receipt-request-format.md","filePath":"gate/gate-receipt-request-format.md"}');
const _sfc_main = { name: "gate/gate-receipt-request-format.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="data-format" tabindex="-1">Data format <a class="header-anchor" href="#data-format" aria-label="Permalink to &quot;Data format&quot;">​</a></h1><p>For the notification to be sent, in addition to the required parameters, the payment request should contain the following:</p><p><code>receipt_datareceipt_datapositions</code>To add the list of purchased items to the notification, send relevant data in theobject. Theobject contains thearray which allows listing up to 300 purchased items in the notification. For each listed item, the following information can be specified:</p><p><code>receipt_datatotal_tax_amountcommon_taxtax</code>As a rule, theobject also contains theparameter specifying the total VAT amount for the entire purchase. If the VAT rate is the same for all items, then it is specified in theparameter after the total amount has been specified. If the VAT rate differs for listed items, then it is specified in theparameter separately for each item.</p><p>\`\`The JSON object structure is provided in themodel in the Gate API specification.</p><p><code>positionsreceipt_datataxcommon_tax</code>In the example below, the purchase request contains the list of three items in thearray of theobject. The VAT rates for the listed items differ; therefore, they are specified separately in theparameter for each item. There is no need to pass theparameter with the VAT rate for all items in this case.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-receipt-request-format.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateReceiptRequestFormat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateReceiptRequestFormat as default
};
