import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Balances overview","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-balances-aspects.md","filePath":"dashboard/dbl-balances-aspects.md"}');
const _sfc_main = { name: "dashboard/dbl-balances-aspects.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="balances-overview" tabindex="-1">Balances overview <a class="header-anchor" href="#balances-overview" aria-label="Permalink to &quot;Balances overview&quot;">​</a></h1><p><em>balance</em>On the basis of their intended operating purpose, balances are divided into the following types:Within the framework of the payment platform as a whole and Dashboard in particular, the termrefers to a balance in a certain currency available for the merchant&#39;s operating activities which includes withdrawing these funds to the merchant&#39;s settlement accounts.</p><p>When working with balances, you should keep in mind the following special aspects and restrictions:</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-balances-aspects.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblBalancesAspects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblBalancesAspects as default
};
