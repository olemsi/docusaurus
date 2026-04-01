import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Useful links","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-data-migration-links.md","filePath":"gate/gate-data-migration-links.md"}');
const _sfc_main = { name: "gate/gate-data-migration-links.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="useful-links" tabindex="-1">Useful links <a class="header-anchor" href="#useful-links" aria-label="Permalink to &quot;Useful links&quot;">​</a></h1><p>When using the capability of migrating information about COF purchases and payment card tokens, you can refer to the following sources that can come in handy:</p><ul><li>—the article with general information about the interaction with the payment platform via Gate.</li><li>—the group of articles with information about working with COF purchases.</li><li>—the article with information about working with card tokens.</li><li>—the article with information about processing and monitoring payments and operations via Dashboard.</li><li>API Reference—the Gate API interface specification.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("gate/gate-data-migration-links.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gateDataMigrationLinks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gateDataMigrationLinks as default
};
