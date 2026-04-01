import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, E as createVNode, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Payment Widget","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/index.md","filePath":"payment-page/index.md"}');
const _sfc_main = { name: "payment-page/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArchDiagram = resolveComponent("ArchDiagram");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h1", {
      id: "payment-widget",
      tabindex: "-1"
    }, [
      createTextVNode("Payment Widget "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#payment-widget",
        "aria-label": 'Permalink to "Payment Widget"'
      }, "​")
    ], -1)),
    _cache[1] || (_cache[1] = createBaseVNode("p", null, "Payment Widget is a hosted checkout form for launching payments without building the payment UI and card-data flow on your side.", -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "The practical integration model is simple:", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("ol", null, [
      createBaseVNode("li", null, "Your back end signs the final Payment Widget parameters."),
      createBaseVNode("li", null, "Your front end opens the hosted form."),
      createBaseVNode("li", null, "The platform sends the payment result callback back to your server.")
    ], -1)),
    _cache[4] || (_cache[4] = createBaseVNode("p", null, "You can open Payment Widget in a redirect flow, a modal window, or an embedded iframe. For most teams, the fastest route is to start with the quickstart and copy-paste examples, then move to scenario-specific and reference pages only after the first working payment.", -1)),
    createVNode(_component_ArchDiagram, { variant: "pp" }),
    _cache[5] || (_cache[5] = createStaticVNode('<h2 id="start-here" tabindex="-1">Start here <a class="header-anchor" href="#start-here" aria-label="Permalink to &quot;Start here&quot;">​</a></h2><ul><li><a href="./pp-quickstart-overview.html"><strong>Quickstart</strong></a> — shortest path to a first working integration.</li><li><a href="./pp-quickstart-basic-implementation.html"><strong>Basic implementation</strong></a> — server signing, frontend opening, and callback handling with code examples.</li><li><a href="./pp-interaction.html"><strong>Callback handling</strong></a> — how to receive, verify, and acknowledge callbacks.</li></ul><h2 id="integration-guides" tabindex="-1">Integration guides <a class="header-anchor" href="#integration-guides" aria-label="Permalink to &quot;Integration guides&quot;">​</a></h2><ul><li><a href="./pp-about.html"><strong>Section map</strong></a> — overview of the whole Payment Widget documentation tree.</li><li><a href="./pp-interaction-organisation-overview.html"><strong>Integration overview</strong></a> — what Payment Widget does and when to use it.</li><li><a href="./pp-general-interaction.html"><strong>Interaction model</strong></a> — frontend/backend/platform responsibilities in one page.</li><li><a href="./pp-ux-configuration.html"><strong>UX configuration</strong></a> — redirect, modal, and iframe options.</li><li><a href="./pp-opening-modal-via-javascript-library.html"><strong>Open in a modal via <code>merchant.js</code></strong></a> — fastest embedded frontend flow.</li><li><a href="./pp-opening-iframe-via-javascript-library.html"><strong>Open in an iframe via <code>merchant.js</code></strong></a> — embed the form inside your checkout layout.</li></ul><h2 id="payment-scenarios" tabindex="-1">Payment scenarios <a class="header-anchor" href="#payment-scenarios" aria-label="Permalink to &quot;Payment scenarios&quot;">​</a></h2><ul><li><a href="./pp-basic-actions.html"><strong>Scenario overview</strong></a> — main customer-facing actions supported by Payment Widget.</li><li><a href="./pp-purchase.html"><strong>Purchase processing</strong></a> — one-step checkout.</li><li><a href="./pp-purchase-auth.html"><strong>Authorisation hold</strong></a> — two-step purchase flow.</li><li><a href="./pp-recurring.html"><strong>COF purchase registration</strong></a> — saving credentials for future debits.</li><li><a href="./pp-account-verification.html"><strong>Payment verification</strong></a> — validating a payment instrument.</li><li><a href="./pp-token.html"><strong>Tokenization</strong></a> — collecting payment data and creating reusable tokens.</li></ul><h2 id="advanced-and-reference" tabindex="-1">Advanced and reference <a class="header-anchor" href="#advanced-and-reference" aria-label="Permalink to &quot;Advanced and reference&quot;">​</a></h2><ul><li><a href="./pp.html"><strong>Additional capabilities</strong></a> — 3-D Secure, AVS, conversion, customer data collection, and other optional capabilities.</li><li><a href="./pp--design-customisation.html"><strong>Customisation</strong></a> — controlling Payment Widget appearance and structure.</li><li><a href="./pp-api.html"><strong>API Description</strong></a> — parameters, formats, and test data.</li></ul>', 8))
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
