import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Whitelists and blacklists","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard/dbl-risks-bwlist-overview.md","filePath":"dashboard/dbl-risks-bwlist-overview.md"}');
const _sfc_main = { name: "dashboard/dbl-risks-bwlist-overview.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="whitelists-and-blacklists" tabindex="-1">Whitelists and blacklists <a class="header-anchor" href="#whitelists-and-blacklists" aria-label="Permalink to &quot;Whitelists and blacklists&quot;">​</a></h1><p>When operations are validated, their parameters are checked in the platform against various rules, including whitelists and blacklists. These lists can be common for all merchants or specific to an individual project of the merchant.</p><p>The following considerations are applied when assessing the risks of processing specific operations:</p><ul><li>Whitelist is a list of criteria matching any of which indicates that an operation is trustworthy.</li><li>Blacklist is a list of criteria matching any of which flags an operation as fraudulent.</li></ul><ol><li><strong>Customer IDAccount numberE-mail</strong>If at least one of the operation parameters is blacklisted and the blacklist category is,, or, then the blacklist takes precedence over the whitelist and the operation is flagged as fraudulent.</li><li><strong>IPBIN</strong>If the condition described above does not apply, but the operation has parameters that are found in theandlists (one parameter can be blacklisted, the other can be whitelisted, in either combination), then the whitelist has higher priority and the operation is deemed trustworthy.</li><li>If the operation is deemed untrustworthy following the AML (Anti-Money Laundering; matching the person included in the sanctions list) and Compliance (matching the country in the prohibited country list) checks, it is declined even if some of the operation parameters are whitelisted.</li></ol>', 5)
  ])]);
}
const dblRisksBwlistOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  dblRisksBwlistOverview as default
};
