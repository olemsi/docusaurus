import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"General interface elements","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp--design-common-page-elements.md","filePath":"payment-page/pp--design-common-page-elements.md"}');
const _sfc_main = { name: "payment-page/pp--design-common-page-elements.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="general-interface-elements" tabindex="-1">General interface elements <a class="header-anchor" href="#general-interface-elements" aria-label="Permalink to &quot;General interface elements&quot;">​</a></h1><p>All pages of Payment Widget can display interface elements that can be customised. These elements include:</p><p>Customisation and location of elements should be the same for all of layout pages.</p><ul><li>Platform logo.</li><li>Payment Widget close button.</li><li>The name of your project.</li><li>The name of the page that associates with the payment processing stage.</li><li>Breadcrumbs.</li><li>Field with amount and currency of payment.</li><li><strong>Payment info</strong>Payment ID in your project.Website of your project.Order description.button that displays payment information. Fields that can be shown:</li><li>*©2020 Platform. We engineer bespoke online payment solutions for clients worldwide. Authorised Payment Institution, FCA License 607597.*Copyright notice. Default copyright notice is as follows:</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp--design-common-page-elements.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp_DesignCommonPageElements = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp_DesignCommonPageElements as default
};
