import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Using Data API","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-using-api-overview.md","filePath":"dashboard/dbl-using-api-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-using-api-overview.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="using-data-api" tabindex="-1">Using Data API <a class="header-anchor" href="#using-data-api" aria-label="Permalink to &quot;Using Data API&quot;">​</a></h1><p>The following endpoints in the Data API are used to retrieve data:</p><p>in the interface specificationThe general procedure of sending requests to any of these endpoints is the same as described in previous articles of this section. This article covers special aspects of using these requests and complements the description of data structures.</p><ul><li><code>/balance/get</code>—to retrieve balance information (currently available only for OUT balances)</li><li><code>/chargeback/list</code>—to retrieve chargeback information filtered by specified conditions</li><li><code>/chargeback/get</code>—to retrieve information about a single chargeback</li><li><code>/fraud/list</code>—to retrieve information about operations flagged as fraudulent</li><li><code>/financial-reporting/operations</code>—to retrieve itemised operation data for financial reporting (including charged fees) for a specified time period</li><li><code>/operations/get</code>—to retrieve itemised operation data for a specified time period</li><li><code>/operations/get-by-payment</code>—to retrieve information about operations initiated within a specific payment</li></ul>', 4)
  ])]);
}
const dblUsingApiOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblUsingApiOverview as default
};
