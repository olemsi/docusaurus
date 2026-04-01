import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Possible errors","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-mass-info-errors.md","filePath":"dashboard/dbl-payments-mass-info-errors.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-mass-info-errors.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="possible-errors" tabindex="-1">Possible errors <a class="header-anchor" href="#possible-errors" aria-label="Permalink to &quot;Possible errors&quot;">​</a></h1><p>The following error messages can appear after the validity check of the file uploaded to Dashboard has been performed.</p><table tabindex="0"><thead><tr><th>Error message</th><th>Possible reason</th></tr></thead><tbody><tr><td>File is empty</td><td>File is empty</td></tr><tr><td>Columns are duplicated</td><td>Parameter has been duplicated</td></tr><tr><td>File does not contain required columns</td><td>Required parameters are missing</td></tr><tr><td>Incorrect file format</td><td>Extension or format of the file is incorrect</td></tr><tr><td>File is broken</td><td>Encoding or data structure is incorrect</td></tr><tr><td>Payment method is not available (line# number)</td><td>Specified payment method is not available</td></tr><tr><td>Specified project_id does not belong to specified merchant account</td><td>Project identifier is incorrect</td></tr><tr><td>Project_id is not numeric (line# number)</td><td>Project identifier is non-numeric</td></tr><tr><td>Project_id does not exist (line# number)</td><td>Nonexistent project identifier has been specified</td></tr><tr><td>Payment_id is empty (line# number)</td><td>Payment identifier has not been specified</td></tr><tr><td>Payment with payment_id already exists (line# number)</td><td>Specified payment identifier has already been registered in the payment platform</td></tr><tr><td>Amount is empty (line# number)</td><td>Payment amount has not been specified</td></tr><tr><td>Incorrect Amount (line# number)</td><td>Incorrect payment amount value</td></tr><tr><td>Currency is empty (line# number)</td><td>Payment currency has not been specified</td></tr><tr><td>Incorrect Currency (line# number)</td><td>Incorrect payment currency value</td></tr><tr><td>Invalid date</td><td>Card expiration date has not been specified or is incorrect</td></tr><tr><td>Card.year is in past (line# number)</td><td>Expired card; expiration year is incorrect</td></tr><tr><td>Card.month is in past (line# number)</td><td>Expired card; expiration month is incorrect</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-payments-mass-info-errors.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblPaymentsMassInfoErrors = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblPaymentsMassInfoErrors as default
};
