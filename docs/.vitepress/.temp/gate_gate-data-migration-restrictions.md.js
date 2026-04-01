import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Conditions and limitations","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-data-migration-restrictions.md","filePath":"gate/gate-data-migration-restrictions.md"}');
const _sfc_main = { name: "gate/gate-data-migration-restrictions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="conditions-and-limitations" tabindex="-1">Conditions and limitations <a class="header-anchor" href="#conditions-and-limitations" aria-label="Permalink to &quot;Conditions and limitations&quot;">​</a></h1><p>When using the capability of data migration, the merchant should consider the conditions and limitations from both the acquirer providing the information and Platform receiving the data. Platform applies the following restrictions:</p><ul><li>American Express,,For working with cards of other card networks, the generation of tokens and registration of COF purchases should be carried out directly in the platform, with the use of the corresponding options supported.The information migration is only available for the following card networks:Mastercardand Visa.</li><li>When working via third parties, the merchant should discuss with them whether it is possible to interact directly with the acquirers.The information can only be migrated directly from other acquirers.</li><li>an applicationIf not yet an Platform client, the merchant should submitto connect and proceed with the onboarding process.The information migration is only possible within the production projects in the Platform payment platform.</li><li>After the migration, a verification file is sent to the merchant&#39;s specialists. If they confirm the correctness of the data in this file, the information is considered valid and the responsibility for any consequences (for example, the occurrence of a chargeback due to an erroneous withdrawal of funds from a customer) is placed on the merchant.The merchant is responsible for keeping the migrated information up-to-date and correct.</li><li>Prior to the data migration, the Platform specialists and the merchant&#39;s specialists agree on the date for payment processing with the use of the migrated information to start. In order to avoid double debits (via the two acquirers), the merchant should ensure that the processing of payments via the previous acquirer will be terminated by the agreed date.The merchant is responsible for double debits.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-data-migration-restrictions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateDataMigrationRestrictions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateDataMigrationRestrictions as default
};
