import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, E as createVNode, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Host-to-host API","description":"","frontmatter":{},"headers":[],"relativePath":"gate/index.md","filePath":"gate/index.md"}');
const _sfc_main = { name: "gate/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArchDiagram = resolveComponent("ArchDiagram");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "host-to-host-api",
      tabindex: "-1"
    }, [
      createTextVNode("Host-to-host API "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#host-to-host-api",
        "aria-label": 'Permalink to "Host-to-host API"'
      }, "​")
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, "Host-to-host API is the direct server-to-server integration mode for merchants that want full control over their own checkout, server-side payment logic, and payment-data flow.", -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "Use Host-to-host API when you want to:", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("ul", null, [
      createBaseVNode("li", null, "build your own payment form instead of using Payment Widget"),
      createBaseVNode("li", null, "send payment requests directly from your back end"),
      createBaseVNode("li", null, "receive synchronous API responses and asynchronous callbacks"),
      createBaseVNode("li", null, "manage purchase, refund, payout, and verification flows from your own system")
    ], -1)),
    _cache[4] || (_cache[4] = createBaseVNode("p", null, "Processing card payments through Host-to-host API requires your side of the payment flow to meet the relevant compliance requirements, because the payment UI and card-data collection are handled in your own environment.", -1)),
    createVNode(_component_ArchDiagram, { variant: "gate" }),
    _cache[5] || (_cache[5] = createStaticVNode('<h2 id="start-here" tabindex="-1">Start here <a class="header-anchor" href="#start-here" aria-label="Permalink to &quot;Start here&quot;">​</a></h2><ul><li><a href="./gate-quickstart.html"><strong>Quickstart</strong></a> — shortest path to a first working Host-to-host API integration.</li><li><a href="./gate-quickstart-basic-implementation.html"><strong>Basic implementation</strong></a> — request signing, purchase request, response handling, and callbacks with copy-paste code.</li><li><a href="./gate-how-to-integrate.html"><strong>Integration overview</strong></a> — when Host-to-host API is the right interface and how the architecture works.</li></ul><h2 id="integration-guides" tabindex="-1">Integration guides <a class="header-anchor" href="#integration-guides" aria-label="Permalink to &quot;Integration guides&quot;">​</a></h2><ul><li><a href="./gate-integration-about.html"><strong>Section map</strong></a> — overview of the Host-to-host API documentation tree.</li><li><a href="./gate-interaction-organisation.html"><strong>Interaction concepts</strong></a> — roles of your web service and the platform.</li><li><a href="./gate-requests-format.html"><strong>Request format</strong></a> — how to structure POST requests to the API.</li><li><a href="./signature-gate.html"><strong>Signature generation</strong></a> — how to sign requests and verify callbacks.</li></ul><h2 id="payment-flows" tabindex="-1">Payment flows <a class="header-anchor" href="#payment-flows" aria-label="Permalink to &quot;Payment flows&quot;">​</a></h2><ul><li><a href="./gate-purchase.html"><strong>One-time purchases</strong></a> — one-step and two-step customer-to-merchant payments.</li><li><a href="./gate-invoice.html"><strong>Payment link purchases</strong></a> — Payment Widget-backed purchases initiated by a link.</li><li><a href="./gate--payments-on-saved-data.html"><strong>Credential-on-file (COF) purchases</strong></a> — recurring and saved-credential flows.</li><li><a href="./gate-refund.html"><strong>Purchase refunds</strong></a> — full and partial refunds.</li><li><a href="./gate-payout.html"><strong>Payouts</strong></a> — merchant-to-customer transfers.</li><li><a href="./gate-account-verification.html"><strong>Payment instrument verification</strong></a> — validating cards and other instruments.</li></ul><h2 id="advanced-and-reference" tabindex="-1">Advanced and reference <a class="header-anchor" href="#advanced-and-reference" aria-label="Permalink to &quot;Advanced and reference&quot;">​</a></h2><ul><li><a href="./gate-procedures.html"><strong>Auxiliary procedures</strong></a> — 3-D Secure, clarification, AVS, conversion, and other required procedures.</li><li><a href="./gate.html"><strong>Additional capabilities</strong></a> — payment status requests, cascading, receipts, tokens, and related capabilities.</li><li><a href="./gate-sts-protocol.html"><strong>API Description</strong></a> — technical reference and endpoint details.</li></ul>', 8))
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
