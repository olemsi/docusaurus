import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Main menu","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-upper-panel.md","filePath":"dashboard/dbl-upper-panel.md"}');
const _sfc_main = { name: "dashboard/dbl-upper-panel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="main-menu" tabindex="-1">Main menu <a class="header-anchor" href="#main-menu" aria-label="Permalink to &quot;Main menu&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The main menu located at the top of the Dashboard interface contains buttons that allow the user to customise the interface, access subsidiary sections, and log out.</p><p><em>The main menu with an expanded navigation panel: 1—navigation panel button; 2—clock; 3—help; 4—language switcher; 5—notifications and search panel buttons; 6—user information; 7—logout button.The main menu with an expanded navigation panel: 1—navigation panel button; 2—clock; 3—language switcher; 4—notifications and search panel buttons; 5—user information; 6—logout button.</em></p><h2 id="navigation-panel" tabindex="-1">Navigation panel <a class="header-anchor" href="#navigation-panel" aria-label="Permalink to &quot;Navigation panel&quot;">​</a></h2><p>The navigation panel is located on the left side of the interface and contains buttons for switching between the sections that are available for the user account. The panel can be shown expanded with the sections&#39; names and the corresponding icons or collapsed (with the sections&#39; icons and the tooltips with the corresponding names). To expand or collapse the navigation panel, use thebutton on the left of the main menu.</p><h2 id="clock" tabindex="-1">Clock <a class="header-anchor" href="#clock" aria-label="Permalink to &quot;Clock&quot;">​</a></h2><p>The clock with an option to select the time zone is located in the centre of the main menu. Selecting the time zone affects the way the data is shown in the payments list, but it does not impact the way business days are determined and counted. Business days for reporting purposes are set in UTC + 00:00.</p><h2 id="search-panel" tabindex="-1">Search panel <a class="header-anchor" href="#search-panel" aria-label="Permalink to &quot;Search panel&quot;">​</a></h2><p><strong>Payments</strong>Search panel contains a set of fields allowing users to find necessary payments quickly and efficiently. To increase usability and optimise search speed, the panel shows only the most frequently requested parameters, and the search is carried out only if the attributes provided fully match. The search results can be found in the payments list ofsection.</p><p>If the fields are shown but are not enabled, it means they are still in development and optimisation.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-upper-panel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblUpperPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblUpperPanel as default
};
