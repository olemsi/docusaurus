import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Set of parameters for tokens","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-data-migration-token-parameters.md","filePath":"gate/gate-data-migration-token-parameters.md"}');
const _sfc_main = { name: "gate/gate-data-migration-token-parameters.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="set-of-parameters-for-tokens" tabindex="-1">Set of parameters for tokens <a class="header-anchor" href="#set-of-parameters-for-tokens" aria-label="Permalink to &quot;Set of parameters for tokens&quot;">​</a></h1><p>The following table presents the basic set of parameters used to migrate tokens information.</p><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>project_id</code></td><td>Identifier of the project in the Platform payment platform, to which the migrated information is related.<code>42</code>Example:</td></tr><tr><td><code>customer_id</code>required for verification</td><td>Identifier of the customer in the web service. Must be a string of 255 or fewer characters.<code>customer_17008</code>Example:</td></tr><tr><td><code>pan</code></td><td><code>card_number</code>Number of the payment card. During migration, the number is used in its full form, while in the verification file, the number is masked and specified in theparameter.<code>4314220000000056</code>Example:</td></tr><tr><td><code>card_holder</code></td><td>Cardholder&#39;s first and last names, provided as they are specified on the card and with regards to the applied restrictions.<code>ARTHUR EDDINGTON</code>Example:</td></tr><tr><td><code>card_expiration_month</code></td><td>Sequence number of the payment card expiration month as an integer from 1 to 12.<code>5</code>Example:</td></tr><tr><td><code>card_expiration_year</code></td><td><code>YYYY</code>Sequence number of the payment card expiration year in the format of.<code>2025</code>Example:</td></tr><tr><td><code>card_type</code></td><td>Indicator of the card brand that can be one of the following:<code>amex</code>—American Express<code>maestro</code>—Maestro<code>mastercard</code>—Mastercard<code>visa</code>—Visa</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-data-migration-token-parameters.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateDataMigrationTokenParameters = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateDataMigrationTokenParameters as default
};
