import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Integration steps","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-integration-step.md","filePath":"gate/gate-integration-step.md"}');
const _sfc_main = { name: "gate/gate-integration-step.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="integration-steps" tabindex="-1">Integration steps <a class="header-anchor" href="#integration-steps" aria-label="Permalink to &quot;Integration steps&quot;">​</a></h1><p>To integrate with the Platform payment platform by using Gate, the merchants should do the following:</p><p>With any questions about using Gate, contact the Platform key account manager and technical support specialists (support@platform.dev).</p><ol><li>Address the following organisational issues of interaction with Platform:<a href="https://ecommpay.com/apply-now/" target="_blank" rel="noreferrer">the application</a>the applicationIf the company has not obtained the project identifier or a secret key from Platform, submitfor connecting to the Platform payment platform.the PCI DSS requirementsThe Platform merchants can select these providers on their own and, if relevant, involve a provider that is in partnership with Platform. To have the scanning services via the partner organised, contact the key account manager.ASV scanning must be performed by the authorised scanning service providers (PCI SSC Approved Scanning Vendor, ASV) quarterly and after every significant change in the network infrastructure.From all merchants—the ASV scan report.From the merchants processing over 6 million operations annually (Level 1)—the Attestation of Compliance, AOC.<a href="https://www.pcisecuritystandards.org/pci_security/completing_self_assessment" target="_blank" rel="noreferrer">the Self-Assessment Questionnaire</a>With questions on completing the questionnaire, contact the Platform key account manager.From the merchants processing to 6 million operations annually (Levels 2, 3, and 4)—, SAQ.For processing payments made with the Visa and Mastercard cards, provide the Platform key account manager with the documents of compliance with. The following documents are required:(including testing various payment methods)Coordinate the procedures of integrating with the payment platform, testing, and launching the functionality with the Platform technical support specialists.</li><li>Update the code of the web service to integrate with the Platform payment platform by using Gate.</li><li>Test the integration solution and launch it in coordination with the Platform technical support specialists.Upon testing and monitoring, in case of correct payment processing in the production mode, the Platform technical support specialists interact with the web service in the full-time support mode.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-integration-step.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateIntegrationStep = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateIntegrationStep as default
};
