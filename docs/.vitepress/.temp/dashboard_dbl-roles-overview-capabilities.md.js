import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Capabilities","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-roles-overview-capabilities.md","filePath":"dashboard/dbl-roles-overview-capabilities.md"}');
const _sfc_main = { name: "dashboard/dbl-roles-overview-capabilities.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="capabilities" tabindex="-1">Capabilities <a class="header-anchor" href="#capabilities" aria-label="Permalink to &quot;Capabilities&quot;">​</a></h1><p>Monitoring and analysing payment processing—users are able to view, filter, search, and visualize data on both completed payments and payments in-progress., issue payouts and refunds (both full and partial) as well as manage regular COF purchases (subscriptions)various types of purchasesExecuting financial operations—users are able to perform.Remittances—users are able to make single and bulk B2B payments to corporate accounts (learn more).Payment Widget design customisation—users are able to view, create, modify, and delete different design styles of the payment form (more).Financial accounting and reporting—users are able to prepare and view various reports with access to the balance sheets.Analysing payment processing data—users are able to create a customised data visualisation board to organise and analyse payment processing information.and chargeback, as well as to monitor chargebacks and accept specific chargebacks without going through an arbitration processRiskmanagement—users are able to monitor detected fraud cases, which includes managing whitelists and blacklists.Interface access administration—users (with appropriate permissions) are able to manage user accounts and distribution of access roles as well as to monitor user actions and to view settings of available projects as well as to configure some of these settings.Capabilities of Dashboard can be divided into the following categories:</p><p>To access one or more of these capability categories, the following roles are used.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-roles-overview-capabilities.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblRolesOverviewCapabilities = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblRolesOverviewCapabilities as default
};
