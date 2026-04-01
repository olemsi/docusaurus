import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Retrieving fraudulent operations data","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-using-api-fraud.md","filePath":"dashboard/dbl-using-api-fraud.md"}');
const _sfc_main = { name: "dashboard/dbl-using-api-fraud.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="retrieving-fraudulent-operations-data" tabindex="-1">Retrieving fraudulent operations data <a class="header-anchor" href="#retrieving-fraudulent-operations-data" aria-label="Permalink to &quot;Retrieving fraudulent operations data&quot;">​</a></h1><p>A request to retrieve information about operations flagged as fraudulent by payment systems should be sent to theendpoint (information about operations flagged as fraudulent by Platform is not provided in the response to this request).</p><p>When sending such requests, consider the following:</p><p>Responses to such requests contain operation data filtered by the conditions determined in the request.</p><ol><li><code>tokenRisksMerchant Adminsignature</code>The request must contain parameters(a token associated with the specific Dashboard user account with theorrole and with the access rights to certain projects of the merchant) and(details).</li><li><code>filter\`\`received_on</code>—date when the payment system reported the fraudulent operation (must be specified as a date range)<code>purchase_date</code>—date when the operation was completed (must be specified as a date range)<code>fraud_report_date</code>—date when the operation was reported as fraudulent to the issuing bank (must be specified as a date range)<code>issuer_country</code>—country of the issuer determined according to the BIN of the card in ISO 3166-1 alpha-2 format<code>filter&quot;purchase_date&quot;: [&quot;2023-12-31 00:00:00&quot;, &quot;2024-01-07 23:59:59&quot;]</code>The date range in thisobject must contain start and end dates and must be specified as a string array, for example,.The request may contain theobject with any of the following parameters:</li><li><code>paginationlimitoffsetlimitoffset parameteroffset&quot;limit&quot;: 5&quot;offset&quot;: 20limitoffset</code>To restrict the number of operations the information about which is returned in a single response, use theobject with two parameters:and. Theparameter is used to set the number of the returned operations in the response (more than 1). Theis used to retrieve the subset of operations beginning with the number that follows thevalue (counting starts from 0). For example, if you need to retrieve information about fraudulent operations 21-25, you should setandin the request. If these parameters are absent, the default values are 20 forand 0 for.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-using-api-fraud.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblUsingApiFraud = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblUsingApiFraud as default
};
