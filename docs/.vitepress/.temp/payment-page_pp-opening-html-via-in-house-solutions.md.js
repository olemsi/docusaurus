import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Opening via custom code","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-opening-html-via-in-house-solutions.md","filePath":"payment-page/pp-opening-html-via-in-house-solutions.md"}');
const _sfc_main = { name: "payment-page/pp-opening-html-via-in-house-solutions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="opening-via-custom-code" tabindex="-1">Opening via custom code <a class="header-anchor" href="#opening-via-custom-code" aria-label="Permalink to &quot;Opening via custom code&quot;">​</a></h1><p>To open the payment form as a separate HTML page, redirect your customer to a URL of the following format:</p><p><code>&amp;lt;parameters&gt;&amp;amp;</code>In this URL,is a data string with the names and values of the parameters in pairs (including the signature) delimited by the ampersand character (). The information about the parameters and signature generation is provided in the following articles: and .</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://paymentpage.platform.dev/payment?&amp;lt;parameters&gt;</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-opening-html-via-in-house-solutions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppOpeningHtmlViaInHouseSolutions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppOpeningHtmlViaInHouseSolutions as default
};
