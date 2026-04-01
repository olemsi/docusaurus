import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Capabilities and roles","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-roles-overview.md","filePath":"dashboard/dbl-roles-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-roles-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="capabilities-and-roles" tabindex="-1">Capabilities and roles <a class="header-anchor" href="#capabilities-and-roles" aria-label="Permalink to &quot;Capabilities and roles&quot;">​</a></h1><p>Dashboard combines operational, financial, analytical, and administrative tools. Access to these tools is granted through a role-based model that can be extended with additional permissions when needed.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./dbl-overview-main-use.html"><strong>Main facts and key features</strong></a> — what Dashboard is for and which core tasks it supports.</li><li><a href="./dbl-overview-access.html"><strong>How to access</strong></a> — access model, permissions, and two-factor authentication basics.</li><li><a href="./dbl-roles-overview-capabilities.html"><strong>Capabilities</strong></a> — major capability groups supported in Dashboard.</li><li><a href="./dbl-roles-overview-roles.html"><strong>Access roles</strong></a> — default roles and the typical responsibilities associated with them.</li><li><a href="./dbl-roles-overview-rights.html"><strong>Access rights</strong></a> — permissions by section and operation.</li></ul><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>Use this section first if you need to understand which teams should get access to Dashboard, what each role can do, and how operational rights differ from financial or administrative rights.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-roles-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblRolesOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblRolesOverview as default
};
