import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Design general info","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp--design-general-info.md","filePath":"payment-page/pp--design-general-info.md"}');
const _sfc_main = { name: "payment-page/pp--design-general-info.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="design-general-info" tabindex="-1">Design general info <a class="header-anchor" href="#design-general-info" aria-label="Permalink to &quot;Design general info&quot;">​</a></h1><p>By default, Payment Widget uses the Platform template as shown in the screenshots in this section. However, this template can be customised.</p><p>In the test environment at first, and then in the production environment.Immediately in the production environment.Discuss with your Key Account Manager how our specialists are ready to support the custom template, and whether or not it is required customer acceptance testing. Customer acceptance testing can be implemented:Design a template layout according to the requirements provided in the . The template layout must contain all the required page layouts for the necessary languages.Send the designed template layout to technical support by email support@platform.dev.Receive a confirmation email from technical support that your template layout is correct. If necessary, edit the layout and send it again.Receive a confirmation email that your custom design is ready to use and, if required, perform customer acceptance testing.In order to create the custom Payment Widget template, you should:</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp--design-general-info.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp_DesignGeneralInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp_DesignGeneralInfo as default
};
