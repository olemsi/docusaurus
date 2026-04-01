import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Retrieving balance data","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-using-api-balances.md","filePath":"dashboard/dbl-using-api-balances.md"}');
const _sfc_main = { name: "dashboard/dbl-using-api-balances.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="retrieving-balance-data" tabindex="-1">Retrieving balance data <a class="header-anchor" href="#retrieving-balance-data" aria-label="Permalink to &quot;Retrieving balance data&quot;">​</a></h1><p>Requests to retrieve balance information on the merchant&#39;s projects should be sent to theendpoint.</p><p><code>tokensignature</code>These requests must contain parameters(a token associated with the specific Dashboard user account) and(details). Responses to such requests contain information about the current state of OUT balances.</p><p><code>&quot;&amp;lt;currency&gt;&quot;: &quot;&amp;lt;sum&gt;&quot;</code>Information about each balance includes the balance type and the available total sum in this balance&#39;s currency. The currency is specified in the name of the parameter and the sum is passed as its value ().</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-using-api-balances.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblUsingApiBalances = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblUsingApiBalances as default
};
