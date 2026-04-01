import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Use","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-directive-methods-avalability-request.md","filePath":"payment-page/pp-directive-methods-avalability-request.md"}');
const _sfc_main = { name: "payment-page/pp-directive-methods-avalability-request.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-label="Permalink to &quot;Use&quot;">​</a></h1><p><code>hide</code>China UnionPayOpen Banking in LatviaIf you need to filter out particular payment methods within a single Payment Widget session, specify theparameter in the request for opening Payment Widget. The value of this parameter is the code of the method to be hidden (according to the reference). If there is more than one method specified, the values should be separated by a comma. The codes are the same that are used for preselecting payment methods, but keep in mind that you cannot use the codes for preselecting payment method groups. Hiding groups of payment methods is only possible by specifying each method, not the group.and Alipay payment methods are excluded from the list of methods available for the customer within this payment.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-directive-methods-avalability-request.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppDirectiveMethodsAvalabilityRequest = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppDirectiveMethodsAvalabilityRequest as default
};
