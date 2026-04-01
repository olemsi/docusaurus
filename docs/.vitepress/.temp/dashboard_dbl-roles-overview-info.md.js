import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Access roles info","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-roles-overview-info.md","filePath":"dashboard/dbl-roles-overview-info.md"}');
const _sfc_main = { name: "dashboard/dbl-roles-overview-info.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="access-roles-info" tabindex="-1">Access roles info <a class="header-anchor" href="#access-roles-info" aria-label="Permalink to &quot;Access roles info&quot;">​</a></h1><p>Dashboard is a unified interface intended for use by employees of the merchant. It supports a full range of required features, and it implements a role-based access model in order to distribute rights to access different features among various specialists (with consideration of organization structure and other factors).</p><p>This section describes core capabilities, supported access roles and their specific characteristics as well as granting access rights to different roles.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-roles-overview-info.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblRolesOverviewInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblRolesOverviewInfo as default
};
