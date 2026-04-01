import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Managing projects","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-projects.md","filePath":"dashboard/dbl-projects.md"}');
const _sfc_main = { name: "dashboard/dbl-projects.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="managing-projects" tabindex="-1">Managing projects <a class="header-anchor" href="#managing-projects" aria-label="Permalink to &quot;Managing projects&quot;">​</a></h1><p>The <strong>Projects</strong> section in Dashboard contains project-level settings that affect how your integrations operate. This includes general project information, supported payment methods, redirect URLs, callback settings, and other configuration areas available for the project.</p><h2 id="in-this-section" tabindex="-1">In this section <a class="header-anchor" href="#in-this-section" aria-label="Permalink to &quot;In this section&quot;">​</a></h2><ul><li><a href="./dbl-projects-overview.html"><strong>Project settings</strong></a> — available project tabs and what can be configured there.</li></ul><h2 id="what-this-section-is-for" tabindex="-1">What this section is for <a class="header-anchor" href="#what-this-section-is-for" aria-label="Permalink to &quot;What this section is for&quot;">​</a></h2><p>Use this section when you need to review the configuration of a project in Dashboard, update callback settings, or understand which project options are managed in the interface rather than in API requests.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-projects.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblProjects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblProjects as default
};
