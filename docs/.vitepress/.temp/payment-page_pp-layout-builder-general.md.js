import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Layout builder","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-layout-builder-general.md","filePath":"payment-page/pp-layout-builder-general.md"}');
const _sfc_main = { name: "payment-page/pp-layout-builder-general.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="layout-builder" tabindex="-1">Layout builder <a class="header-anchor" href="#layout-builder" aria-label="Permalink to &quot;Layout builder&quot;">​</a></h1><p>****When merchants work with Payment Widget, they can use the standard design of the payment form developed and maintained by the Platform specialists with the consideration of the most recent requirements and trends of the electronic payments industry. At the same time, each merchant can customise the appearance of the payment form to meet the specific needs of their projects using thein Dashboard.</p><p>****One design style can be applied for Payment Widget within a target project. When customising the Payment Widget design style, you can:In order to use the, you need to have a Dashboard user account with the appropriate permissions (learn more).</p><p>Each of these options is described in the sections that follow. When using either one of them, you can:</p><p>Keep in mind that when the Payment Widget design is customised, the responsibility for the potential negative effect of the introduced changes on the conversion rate is placed on the merchant. Therefore, any changes should be accurately prepared and analysed and, if necessary, reverted to the tested basic options.</p><p>****If you have any questions or suggestions regarding the use of the, contact your Platform account manager.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-layout-builder-general.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppLayoutBuilderGeneral = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppLayoutBuilderGeneral as default
};
