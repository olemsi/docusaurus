import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lists","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-registry.md","filePath":"dashboard/dbl-registry.md"}');
const _sfc_main = { name: "dashboard/dbl-registry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lists" tabindex="-1">Lists <a class="header-anchor" href="#lists" aria-label="Permalink to &quot;Lists&quot;">​</a></h1><p>Dashboard implements lists to display large volumes of records with payment data or user account information. One section can contain one or several lists. To switch between them, use tabs with the names of the corresponding lists.</p><p>Lists have a uniform design, and all of them allow you to configure the number and the order of columns, filter recorded data and perform a number of actions including switching to detailed payment information or deleting a user account.</p><p><em>Predefined filters</em>—they are available via the buttons located at the top of the list, in the filter area. These filters allow users to select or deselect filtering with the use of a single parameter, for example, payment currency in one-click.<em>Custom filters</em>—they are available in a separate panel which is opened with the button on the right located in the filter area. They allow users to filter recorded data according to a total of selected parameters. The settings of such filters can be flexibly configured and saved for future use.Each section which contains a list includes the following types of filters:</p><p>Moreover, depending on the purpose of the list, they include additional tools for working with them. For instance, the payments list allows users to configure the number and the order of columns with the use of the custom filter manager which is opened with the button on the right located in the filter area.</p><table tabindex="0"><thead><tr><th><em><strong>Payments</strong>Payments list insection: 1—a tab with the list of all payments; 2—predefined filters; 3—buttons to reset all filters, to show custom filters and to configure payments list display mode.</em></th></tr></thead><tbody><tr><td><em><strong>Manual payments</strong>Payouts list insection: 1—tabs with lists; 2—a button to issue payments; 3—predefined filters; 4—buttons to reset all filters, to show custom filters and to configure payments list display mode.</em></td></tr><tr><td><em><strong>My team</strong>User account list insection: 1—tabs with lists; 2—a button to create a new user account; 3—predefined filters; 4—buttons to reset all filters, to show custom filters and to configure users list display mode; 5—tools to edit a user account.</em></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-registry.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblRegistry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblRegistry as default
};
