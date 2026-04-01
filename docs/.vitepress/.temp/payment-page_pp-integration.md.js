import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Options for opening Payment Widget","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-integration.md","filePath":"payment-page/pp-integration.md"}');
const _sfc_main = { name: "payment-page/pp-integration.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="options-for-opening-payment-widget" tabindex="-1">Options for opening Payment Widget <a class="header-anchor" href="#options-for-opening-payment-widget" aria-label="Permalink to &quot;Options for opening Payment Widget&quot;">​</a></h1><p>There are different options to open the Payment Widget payment form on customers&#39; devices: in a separate browser tab, in a modal window, and directly on the web service page—in an iframe element. These options are managed on the web service side, and when they are set up, various factors can be considered: for example, the payment form can be set up in such a way that on mobile devices it opens in a separate browser tab, while on other devices it opens in a modal window.</p><p>In order to configure the opening of Payment Widget on the web service side in a way needed, address the general issues of the interaction concepts and refer to the articles of this subsection.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-integration.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppIntegration = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppIntegration as default
};
