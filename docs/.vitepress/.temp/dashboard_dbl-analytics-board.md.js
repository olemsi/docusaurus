import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Data visualisation board","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-analytics-board.md","filePath":"dashboard/dbl-analytics-board.md"}');
const _sfc_main = { name: "dashboard/dbl-analytics-board.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="data-visualisation-board" tabindex="-1">Data visualisation board <a class="header-anchor" href="#data-visualisation-board" aria-label="Permalink to &quot;Data visualisation board&quot;">​</a></h1><p><strong>Analytics</strong>With the help of thesection tools, you can create charts and tables for a specified time periodusing various datasets that are available to your user account and that can be filtered and grouped according to different criteria. You can use the following datasets for setting up your own board:</p><p>As a rule, common categories of data that can be used to create visualisations include a number of operations, total channel amount, and others depending on the purpose of your board. Along with that, common categories that can be used as filtering and organising data criteria are the reporting time period, project, operation type, customer country, payment method type, channel currency, and others depending on your data visualisation needs.</p><p>When working with the board, you need to consider the following special aspects.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-analytics-board.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblAnalyticsBoard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblAnalyticsBoard as default
};
