import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Credential-on-file (COF) purchases","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate--payments-on-saved-data.md","filePath":"gate/gate--payments-on-saved-data.md"}');
const _sfc_main = { name: "gate/gate--payments-on-saved-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="credential-on-file-cof-purchases" tabindex="-1">Credential-on-file (COF) purchases <a class="header-anchor" href="#credential-on-file-cof-purchases" aria-label="Permalink to &quot;Credential-on-file (COF) purchases&quot;">​</a></h1><p>Gate supports purchases that use previously saved payment credentials, including recurring debits and merchant-initiated payments based on stored payment data.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./gate-cof-gate-side-overview.html"><strong>COF on platform side</strong></a> — recurring debits performed on the platform side.</li><li><a href="./gate-payment-recurring-registration.html"><strong>Registering COF purchase</strong></a> — initial registration of stored credentials for future debits.</li><li><a href="./gate-payment-recurring-manage.html"><strong>Managing COF debiting</strong></a> — retrieving series information, updating settings, and cancelling debits.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when you need recurring billing or any other saved-credential flow implemented through Gate.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate--payments-on-saved-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gate_PaymentsOnSavedData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gate_PaymentsOnSavedData as default
};
