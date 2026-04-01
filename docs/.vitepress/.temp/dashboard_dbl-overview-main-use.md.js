import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Main facts and key features","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-overview-main-use.md","filePath":"dashboard/dbl-overview-main-use.md"}');
const _sfc_main = { name: "dashboard/dbl-overview-main-use.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="main-facts-and-key-features" tabindex="-1">Main facts and key features <a class="header-anchor" href="#main-facts-and-key-features" aria-label="Permalink to &quot;Main facts and key features&quot;">​</a></h1><p>Analyse and monitor payment processing and consolidated financial data with an option to break it down by different characteristics and with the help of visualisation tools., issue partial and full refunds as well as payouts to the customers of the merchant&#39;s web service with the use of individual and batch requestsPerform various types of purchases.Customise the design of Payment Widget (when it is used for projects that involve integration with the Platform payment platform).as monitor and accept chargebacksMonitor and prevent fraud cases as well.Create a range of reports with consolidated information on payment processing and financial results.View and set up available projects.Dashboard is a web interface intended for use by merchants of Platform. This interface is available atand allows merchant employees to accomplish a range of tasks related to all projects of their company in the Platform payment platform. They can:</p><p>This list of capabilities continues to grow.</p><p>From the start, Dashboard was designed with the consideration of leading development methodologies and technologies including elements of design thinking. As a result, the interface includes a number of solutions which have already been tested with the help of prospective and real-life users, and any clients of Platform can contribute to the further development of the interface—if you are interested, let your account manager know.</p><p>If you have questions about using Dashboard, refer to this documentation or contact Platform specialists.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-overview-main-use.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblOverviewMainUse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblOverviewMainUse as default
};
