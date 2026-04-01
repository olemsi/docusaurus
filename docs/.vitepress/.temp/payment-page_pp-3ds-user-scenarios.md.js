import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"User scenarios","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-3ds-user-scenarios.md","filePath":"payment-page/pp-3ds-user-scenarios.md"}');
const _sfc_main = { name: "payment-page/pp-3ds-user-scenarios.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="user-scenarios" tabindex="-1">User scenarios <a class="header-anchor" href="#user-scenarios" aria-label="Permalink to &quot;User scenarios&quot;">​</a></h1><p>The following are the steps the customer takes when making a purchase that involves the 3‑D Secure authentication.</p><p>The number and sequence of steps in this scenario may slightly change: for example, if the authentication involves the provider, the customer is redirected first to the provider&#39;s page and then to the ACS page.</p><ol><li>The customer selects the option to make a purchase on the side of the merchant&#39;s web service.</li><li>The payment form is displayed to the customer in accordance with the parameters passed in the request. The customer performs the required actions and confirms the purchase following which they are shown the Payment Widget preloader.</li><li>If the issuer selects the challenge flow, the customer is shown the authentication page (ACS). The customer completes the required steps and is shown the Payment Widget preloader.</li><li>The customer is shown the page with the payment result information.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-3ds-user-scenarios.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp3dsUserScenarios = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp3dsUserScenarios as default
};
