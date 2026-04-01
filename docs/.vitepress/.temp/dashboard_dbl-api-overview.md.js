import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Data API overview","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-api-overview.md","filePath":"dashboard/dbl-api-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-api-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="data-api-overview" tabindex="-1">Data API overview <a class="header-anchor" href="#data-api-overview" aria-label="Permalink to &quot;Data API overview&quot;">​</a></h1><p>, chargeback dataThe Data API is an API of the Platform payment platform which allows retrieving information onbalance information, operation data and fraudulent operation data with regard to the access rights to certain projects of the merchant and the specified conditions (such as the type of the operation and the time when it was performed). Access rights are determined via the specialized tokens of the Dashboard user accounts while the conditions of data retrieval are specified directly in the API requests.</p><p><code>https://data.platform.dev/v1</code>The Data API is available atand allows accepting requests at specified endpoints with the use of HTTP, version 1.1 or higher, and the TLS protocol, version 1.2 or higher. For the interface specification, see.</p><p>To work with the Platform payment platform using the Data API, the merchant needs to:</p><ol><li>Make sure the requests can be sent and the responses can be received according to the Data API specification.</li><li>Authorize users who require access to the Data API to generate API tokens and secret keys in the Dashboard interface.</li><li>Test and deploy the developed solutions into production.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dashboard/dbl-api-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dblApiOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dblApiOverview as default
};
