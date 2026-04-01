import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Operations by payment","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-using-api-operations-by-payment.md","filePath":"dashboard/dbl-using-api-operations-by-payment.md"}');
const _sfc_main = { name: "dashboard/dbl-using-api-operations-by-payment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="operations-by-payment" tabindex="-1">Operations by payment <a class="header-anchor" href="#operations-by-payment" aria-label="Permalink to &quot;Operations by payment&quot;">​</a></h1><p>Requests to retrieve information about all operations initiated within a specific payment should be sent to theendpoint.</p><p><code>payment_idtokensignature</code>These requests must contain parameters(ID of the target payment),(a token associated with the specific Dashboard user account), and(details). Responses to such requests contain information about the operations initiated within the target payment.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-using-api-operations-by-payment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblUsingApiOperationsByPayment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblUsingApiOperationsByPayment as default
};
