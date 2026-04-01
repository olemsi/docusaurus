import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"User interface","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-interface-overview.md","filePath":"dashboard/dbl-interface-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-interface-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="user-interface" tabindex="-1">User interface <a class="header-anchor" href="#user-interface" aria-label="Permalink to &quot;User interface&quot;">​</a></h1><p>Dashboard interface is divided into topic-driven sections with each focused on the corresponding data segment and employing specific operation tools. These sections contain a number of standard items while most tasks are solved with the use of registers. To search for data and perform a range of operations, use the main menu located at the top of the page. To switch from one section to another, use the navigation panel on the left.</p><p>The following is a summary of using the main menu, sections, and lists.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-interface-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblInterfaceOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblInterfaceOverview as default
};
