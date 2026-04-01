import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"How to access","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-overview-access.md","filePath":"dashboard/dbl-overview-access.md"}');
const _sfc_main = { name: "dashboard/dbl-overview-access.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="how-to-access" tabindex="-1">How to access <a class="header-anchor" href="#how-to-access" aria-label="Permalink to &quot;How to access&quot;">​</a></h1><p>Since Dashboard provides access to financial data and allows executing financial operations, the following protective measures are implemented to ensure secure handling of data:</p><p>These measures comply with the requirements of PSD2 (Revised Directive on Payment Services, Directive (EU) 2015/2366) and ensure user convenience and security.</p><p>Certain permissions granted to use Dashboard do not require providing the second authentication factor. This applies to the following sections and the corresponding permissions:</p><p>Any permission not included in the list above implies that the user should provide the phone number and enable two-factor authentication.</p><p>First time users with permissions that require the use of two-factor authentication should proceed as follows when they access Dashboard:</p><p>Users in roles that do not require two-factor authentication can activate it and add a phone number in the user account if they have the appropriate permission.</p><p>To provide a phone number and activate two-factor authentication,</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>Merchant admin</code><strong>My team</strong>Only users with therole permissions have access to the rights distribution information and are able to add phone numbers to user account (in thesection).</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-overview-access.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblOverviewAccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblOverviewAccess as default
};
