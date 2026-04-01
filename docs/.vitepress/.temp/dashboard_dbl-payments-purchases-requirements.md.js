import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Requirements","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-payments-purchases-requirements.md","filePath":"dashboard/dbl-payments-purchases-requirements.md"}');
const _sfc_main = { name: "dashboard/dbl-payments-purchases-requirements.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h1><p>To perform purchases by using Dashboard, the following requirements must be met:</p><p>If any issues regarding access rights occur, they can be solved with the merchant&#39;s specialists.</p><ul><li>Two-factor authentication is required for accessing Dashboard in order to take MO/TO payments.</li><li>The user account must be granted the appropriate permissions. Each action, including capturing held funds and releasing authorisation holds, requires a specific permission.</li><li>and the payment methodRequired actions are supported for the selected project.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-payments-purchases-requirements.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblPaymentsPurchasesRequirements = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblPaymentsPurchasesRequirements as default
};
