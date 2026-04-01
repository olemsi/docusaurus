import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Payment result page","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp--design-results.md","filePath":"payment-page/pp--design-results.md"}');
const _sfc_main = { name: "payment-page/pp--design-results.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="payment-result-page" tabindex="-1">Payment result page <a class="header-anchor" href="#payment-result-page" aria-label="Permalink to &quot;Payment result page&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The result and details of the payment display on this page.</p><p>You can customise interface elements on this page (all elements are optional).</p><h2 id="interface-elements" tabindex="-1">Interface elements <a class="header-anchor" href="#interface-elements" aria-label="Permalink to &quot;Interface elements&quot;">​</a></h2><ul><li>Payment ID</li><li>Payment description</li><li>Payment date</li><li>Bank card data</li><li>The title used for status, amount and currency of payment</li><li>The image of the payment status</li><li><strong>Back to website</strong>button</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp--design-results.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp_DesignResults = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp_DesignResults as default
};
