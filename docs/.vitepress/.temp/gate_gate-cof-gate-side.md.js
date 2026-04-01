import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"COF callback format","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-cof-gate-side.md","filePath":"gate/gate-cof-gate-side.md"}');
const _sfc_main = { name: "gate/gate-cof-gate-side.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cof-callback-format" tabindex="-1">COF callback format <a class="header-anchor" href="#cof-callback-format" aria-label="Permalink to &quot;COF callback format&quot;">​</a></h1><p>The payment platform communicates results of processing each debit operation in callbacks sent to your web service. These callbacks are arranged in a standard format the detailed description of which can be found in .</p><p><code>4.00 USD431422******0056customer_1242</code>The following callback contains information about processingdebit operation for cardof the customer with identifierwithin project. The capability of debiting retries is not available.</p><p><code>recurring_retry</code>If the capability to perform debiting retry attempts is enabled, callbacks include theobject. The description of its format can be found in this article.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-cof-gate-side.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateCofGateSide = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateCofGateSide as default
};
