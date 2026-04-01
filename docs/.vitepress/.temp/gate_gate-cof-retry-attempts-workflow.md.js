import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Workflow","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-cof-retry-attempts-workflow.md","filePath":"gate/gate-cof-retry-attempts-workflow.md"}');
const _sfc_main = { name: "gate/gate-cof-retry-attempts-workflow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="workflow" tabindex="-1">Workflow <a class="header-anchor" href="#workflow" aria-label="Permalink to &quot;Workflow&quot;">​</a></h1><p>The steps of the debiting retry procedure are as follows:</p><p>The general workflow of this procedure is as follows.</p><p>The format of callbacks used in this workflow is described below.</p><ol><li><code>decline</code>When a scheduled debiting is initially declined by the payment system or the issuer, the Platform payment platform checks if there is a possibility to retry the debiting once again. If this possibility is confirmed, the web service is sent a callback that contains the information about the declined debit operation with theoperation status as well as the scheduled date and time of the retry attempt.</li><li>At the scheduled time, the debiting retry attempt is performed automatically.</li><li><code>success</code>If the attempt results in debiting the funds from the customer to the merchant, a callback containing the debiting result information (with theoperation status ) is sent to the web service. The COF purchase series continues according to the existing schedule.<code>decline</code>If the attempt results in decline and the payment platform confirms the possibility to perform another attempt, a callback containing the information about the debiting decline (with theoperation status and the scheduled date and time of the next retry attempt) is sent to the web service. Then step 2 is repeated.<code>decline</code>If the attempt results in decline and the payment platform does not confirm the possibility to perform another attempt, a final callback containing the information about the debiting decline (with theoperation status and without information about the next attempt) is sent to the web service. The COF purchase series continues according to the existing schedule. In this case, whether an additional debiting should occur or whether the series of debit operations should be cancelled must be decided by the merchant.Depending on the attempt result, the following steps are executed:</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-cof-retry-attempts-workflow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateCofRetryAttemptsWorkflow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateCofRetryAttemptsWorkflow as default
};
