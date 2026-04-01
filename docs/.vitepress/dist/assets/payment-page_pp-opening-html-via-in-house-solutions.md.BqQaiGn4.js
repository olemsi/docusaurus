import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Opening via custom code","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-opening-html-via-in-house-solutions.md","filePath":"payment-page/pp-opening-html-via-in-house-solutions.md"}');
const _sfc_main = { name: "payment-page/pp-opening-html-via-in-house-solutions.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="opening-via-custom-code" tabindex="-1">Opening via custom code <a class="header-anchor" href="#opening-via-custom-code" aria-label="Permalink to &quot;Opening via custom code&quot;">​</a></h1><p>To open the payment form as a separate HTML page, redirect your customer to a URL of the following format:</p><p><code>&amp;lt;parameters&gt;&amp;amp;</code>In this URL,is a data string with the names and values of the parameters in pairs (including the signature) delimited by the ampersand character (). The information about the parameters and signature generation is provided in the following articles: and .</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://paymentpage.platform.dev/payment?&amp;lt;parameters&gt;</span></span></code></pre></div>', 4)
  ])]);
}
const ppOpeningHtmlViaInHouseSolutions = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppOpeningHtmlViaInHouseSolutions as default
};
