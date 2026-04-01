import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Getting list of payment methods","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-pm-request.md","filePath":"gate/gate-pm-request.md"}');
const _sfc_main = { name: "gate/gate-pm-request.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="getting-list-of-payment-methods" tabindex="-1">Getting list of payment methods <a class="header-anchor" href="#getting-list-of-payment-methods" aria-label="Permalink to &quot;Getting list of payment methods&quot;">​</a></h1><p>You can only make payments and payouts from the project only via integrated payment methods. At any time, you can check which payment systems are allowed to be used for payments and payouts.</p><h2 id="request-to-retrieve-a-list-of-integrated-payment-methods" tabindex="-1">Request to retrieve a list of integrated payment methods <a class="header-anchor" href="#request-to-retrieve-a-list-of-integrated-payment-methods" aria-label="Permalink to &quot;Request to retrieve a list of integrated payment methods&quot;">​</a></h2><p>In the request, specify your project ID. For more information on request format, see .</p><p>In the response, you receive a list of the payment methods that are available for payment and payouts that are integrated into the project that you specified in the request.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>POST therequest.</p></div>', 6)
  ])]);
}
const gatePmRequest = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gatePmRequest as default
};
