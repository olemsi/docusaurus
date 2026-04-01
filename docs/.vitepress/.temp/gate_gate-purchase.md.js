import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"One-time purchases","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-purchase.md","filePath":"gate/gate-purchase.md"}');
const _sfc_main = { name: "gate/gate-purchase.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="one-time-purchases" tabindex="-1">One-time purchases <a class="header-anchor" href="#one-time-purchases" aria-label="Permalink to &quot;One-time purchases&quot;">​</a></h1><p>Gate supports both one-step and two-step one-time purchase flows. These flows are used for direct card-based payments and, where supported, for other payment instruments available in the project.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./gate-payment-sale.html"><strong>One-step purchase</strong></a> — immediate debiting of customer funds.</li><li><a href="./gate-payment-auth.html"><strong>Two-step purchase</strong></a> — authorisation hold followed by capture or cancellation.</li></ul><h2 id="scope" tabindex="-1">Scope <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;Scope&quot;">​</a></h2><p>Use this section when you need to process a standard customer-to-merchant payment directly through Gate without using Payment Widget.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-purchase.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gatePurchase = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gatePurchase as default
};
