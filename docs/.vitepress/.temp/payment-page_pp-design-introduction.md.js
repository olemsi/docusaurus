import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-design-introduction.md","filePath":"payment-page/pp-design-introduction.md"}');
const _sfc_main = { name: "payment-page/pp-design-introduction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>Like most contemporary software products, Payment Widget is constantly evolving, and its user interface and internal operation make use of the new technologies, innovations, and trends of the online payment industry. At the same time, merchants need the payment form that is reliable—the form that is invoked and functions failure-free (which includes the way it is embedded into interfaces and the operation of the web service). To combine the advantages of dynamic growth and reliable operation while also ensuring flexibility in design options and capabilities of implementation, Platform develops new generations of the Payment Widget design that seamlessly follow one another but also work simultaneously. Along with that, each subsequent Payment Widget generation comes with the significant improvements of reliability, processing speed, interface, and functionality.</p><p>In addition, the 4th and 5th generations of the payment form support customisation with the use of specialised designer tools embedded in the Dashboard interface (in case of previous generations, even the most minimal changes had to be agreed upon with the account manager and required time for implementation).</p><p>This article covers the information about customising the Payment Widget design and using different design options when working with the payment form of the 4th and 5th generations. It also describes how to transfer the styles already in use when you switch from the 4th generation Payment Widget to the 5th generation.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-design-introduction.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppDesignIntroduction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppDesignIntroduction as default
};
