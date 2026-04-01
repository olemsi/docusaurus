import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"3‑D Secure authentication","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-3ds.md","filePath":"payment-page/pp-3ds.md"}');
const _sfc_main = { name: "payment-page/pp-3ds.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_3‐d-secure-authentication" tabindex="-1">3‑D Secure authentication <a class="header-anchor" href="#_3‐d-secure-authentication" aria-label="Permalink to &quot;3‑D Secure authentication&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>3‑D Secure (Three-Domain Secure) customer authentication is aimed to increase secure processing of online card payments. This authentication procedure is essential for processing purchases and can be carried out in a variety of ways: the customer may be required to perform certain actions to confirm their identity or their involvement can be bypassed altogether.</p><p>3‑D Secure supports the following authentication flows:</p><p>The merchant cannot select the authentication flow. While the merchant can indicate which flow selection is preferable, the final decision is made by the issuer. In addition to specifying the preferred flow, the merchant can pass a range of optional parameters in the request for opening the payment form which increases the possibility of the frictionless flow selection. The information about these parameters is presented in the sections that follow.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Global card schemes such as American Express, Mastercard, and Visa as well as Platform currently support the second version of the 3‑D Secure protocol, 3‑D Secure 2. Here is the information about working with this protocol version.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>There are two main versions of the 3‑D Secure protocol: 3‑D Secure 1 and 3‑D Secure 2. The 3‑D Secure 2 version differs from 3‑D Secure 1 mostly by the range of available mechanisms for customer identity verification and the authentication parameters used. For example, the customer&#39;s biometric verification (with the use of fingerprints) or the customer&#39;s verification without any actions on the customer&#39;s part is available only in the second version of the protocol. The first version is no longer supported by such global card schemes as Mastercard and Visa, but other card schemes may still support this version. The information presented in this article will allow you to work with both versions.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-3ds.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pp3ds = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pp3ds as default
};
