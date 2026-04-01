import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Project settings","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-projects-overview.md","filePath":"dashboard/dbl-projects-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-projects-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="project-settings" tabindex="-1">Project settings <a class="header-anchor" href="#project-settings" aria-label="Permalink to &quot;Project settings&quot;">​</a></h1><p><strong>Projects</strong><code>Merchant Admin</code>Dashboard interface allows you to view and configure individual settings of your projects in thesection. This section can be accessed with a separate set of permissions provided by default to user accounts with the assignedrole. In addition, user accounts with access rights of other roles can be permitted to view the information in this section (more).</p><p><strong>Projects</strong>In thesection you can find cards with information about individual projects. In each, you can switch between the following tabs:</p><p>Keep in mind that you cannot create or delete projects in Dashboard. To do so, contact your Platform account manager.</p><ul><li><strong>General</strong>required for accepting MO/TO payments via Dashboard—to view general information about the project and work with the secret key</li><li><strong>Payment methods</strong>with the option to request enabling Apple Pay and PayPal—to view supported payment methods</li><li><strong>Redirect URLs</strong>—to set up URLs that redirect customers to the web service when Payment Widget is used (learn more)</li><li><strong>Callbacks</strong>—to configure callback settings</li><li>********Thetab is not displayed if Dashboard is opened on mobile devices.Payment Widget Designer is not available if Dashboard is opened on mobile devices.—to customise the appearance of the payment form (learn more)</li><li><strong>Apple Pay Domain Verification</strong>—to register domains in the Apple Pay service and manage them</li><li><strong>Subscription retry settings</strong>—to configure a debiting retry schedule (which applies to all regular COF purchases within one project)</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-projects-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblProjectsOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblProjectsOverview as default
};
