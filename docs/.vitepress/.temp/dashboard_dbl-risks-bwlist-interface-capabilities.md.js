import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Interface capabilities","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-risks-bwlist-interface-capabilities.md","filePath":"dashboard/dbl-risks-bwlist-interface-capabilities.md"}');
const _sfc_main = { name: "dashboard/dbl-risks-bwlist-interface-capabilities.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="interface-capabilities" tabindex="-1">Interface capabilities <a class="header-anchor" href="#interface-capabilities" aria-label="Permalink to &quot;Interface capabilities&quot;">​</a></h1><p><strong>RisksBlack/White lists</strong>Dashboard allows you to manage criteria of whitelists and blacklists applicable both to your specific projects and to all of your projects. Thesection includes thesubsection that allows you to do the following:</p><p><code>customer_id</code>You can search for criteria of whitelists and blacklists using filters on the upper panel, which includes the possibility to enter multiple values of one category (for example,) separating them by a comma or a space.</p><p>or payment methods, or whether the operation has to be flagged as fraudulent by a payment system or not.Adding risk assessment criteria to whitelists and blacklists is also possible using payment information tabs. This capability is supported for all operations: there are no restrictions on payment types</p><p><code>RisksMerchant Admin</code>The capability of managing risk assessment criteria can only be accessed with a separate permissions set. By default, user accounts with theandroles are allowed to view whitelists and blacklists and to add criteria to blacklists. In addition, you can request permissions to add criteria to whitelists for individual user accounts by contacting the technical support specialists. This approach to whitelists is determined by their priority, including the case of automated risk analysis, and helps diminish the risks of processing the fraudulent operations.</p><ul><li>View the list of criteria, using filters, using search and filtering, if necessary.</li><li>Add new criteria, one by one or in bulk.</li><li>Delete criteria, one by one only.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-risks-bwlist-interface-capabilities.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblRisksBwlistInterfaceCapabilities = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblRisksBwlistInterfaceCapabilities as default
};
