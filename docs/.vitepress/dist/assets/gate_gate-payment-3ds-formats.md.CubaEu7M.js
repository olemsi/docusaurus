import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Format of callbacks with payment results","description":"","frontmatter":{},"headers":[],"relativePath":"gate/gate-payment-3ds-formats.md","filePath":"gate/gate-payment-3ds-formats.md"}');
const _sfc_main = { name: "gate/gate-payment-3ds-formats.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="format-of-callbacks-with-payment-results" tabindex="-1">Format of callbacks with payment results <a class="header-anchor" href="#format-of-callbacks-with-payment-results" aria-label="Permalink to &quot;Format of callbacks with payment results&quot;">​</a></h1><p>To communicate the payment result, the payment platform sends a callback to the web service. The callback is arranged in a standard format described in .</p><p>3‑D Secure3‑D Secure 2<code>mpi_result</code>If payment processing involves theauthentication, callbacks may contain theobject with the following parameters:</p><p>These parameters are not passed by default. To add them to the callbacks you receive, contact the technical support at support@platform.dev.</p><p><code>operationnon_3ds_reasontra, lve</code>If the authentication was not performed due to an applied exemption, theobject of the callback can also contain theparameter with the value.</p><ul><li><code>mpi_operation_id</code>—operation identifier on the 3DS Server side</li><li><code>ds_operation_id</code>—operation identifier on the Directory Server side of the global card scheme</li><li><code>acs_operation_id</code>—operation identifier on the issuer&#39;s Access Control Server side</li><li><code>mpi_timestamp</code>—authentication time and date</li><li><code>cardholder_info</code>—the message you are recommended to display when notifying the customer about the payment result</li><li><code>authentication_flow0102</code>—authentication flow indicator:for the frictionless flow,for the challenge flow.</li></ul>', 6)
  ])]);
}
const gatePayment3dsFormats = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  gatePayment3dsFormats as default
};
