import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ACS page (issuer)","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp--design-acs.md","filePath":"payment-page/pp--design-acs.md"}');
const _sfc_main = { name: "payment-page/pp--design-acs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="acs-page-issuer" tabindex="-1">ACS page (issuer) <a class="header-anchor" href="#acs-page-issuer" aria-label="Permalink to &quot;ACS page (issuer)&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>A customer is redirected in the same tab.<strong>Redirection to ACS bank</strong>A customer is redirected in a new tab by thebutton. According to browser Privacy Policy this button must be located on Payment Widget.The ACS page of the issuing bank can be opened in two ways:</p><p>You cannot customise ACS page because this page belongs to the issuing bank.</p><h2 id="interface-elements" tabindex="-1">Interface elements <a class="header-anchor" href="#interface-elements" aria-label="Permalink to &quot;Interface elements&quot;">​</a></h2><p>You can customise the button and change its location.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp--design-acs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp_DesignAcs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp_DesignAcs as default
};
