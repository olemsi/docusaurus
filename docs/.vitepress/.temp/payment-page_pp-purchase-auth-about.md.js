import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Two-step purchase","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-purchase-auth-about.md","filePath":"payment-page/pp-purchase-auth-about.md"}');
const _sfc_main = { name: "payment-page/pp-purchase-auth-about.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="two-step-purchase" tabindex="-1">Two-step purchase <a class="header-anchor" href="#two-step-purchase" aria-label="Permalink to &quot;Two-step purchase&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In addition, use the following materials to gain a fuller understanding of processing one-time two-step purchases:—an article in the section that provides a general description of processing one-time two-step purchases in the Platform payment platform and covers information about operations utilised to execute a payment of this type and statuses that are assigned to the payment and the operations performed within it.articles of the section containing a description of processing one-time two-step purchases via Payment Widget with the focus on the specific features of the payment method used and information about relevant requests and callbacks.This article covers processing one-time two-step purchases, including placing an authorisation hold via Payment Widget, and describes requests and callbacks that are used in case of card payments.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-purchase-auth-about.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppPurchaseAuthAbout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppPurchaseAuthAbout as default
};
