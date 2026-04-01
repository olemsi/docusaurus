import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Opening in modal","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-opening-modal-overview.md","filePath":"payment-page/pp-opening-modal-overview.md"}');
const _sfc_main = { name: "payment-page/pp-opening-modal-overview.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="opening-in-modal" tabindex="-1">Opening in modal <a class="header-anchor" href="#opening-in-modal" aria-label="Permalink to &quot;Opening in modal&quot;">​</a></h1><p>When opened in a modal window, the Payment Widget payment form is displayed to the customer over the merchant&#39;s web service page. This interrupts the customer&#39;s interaction with the web service but keeps them engaged and focuses the customer&#39;s attention on the purchase without redirecting them to another page.</p><p>For opening the payment form in a modal window, the following should be performed on the web service side:</p><p>When processing Apple Pay payments via Payment Widget with the option to open the payment form in a modal window, register your merchant domains with the Apple Pay service (learn more).</p><ol><li><code>https://paymentpage.platform.dev/shared/merchant.css</code>Link the CSS library from Platform on the client side of the web service for the payment form to be displayed correctly. This library is available at.</li><li>Define the events that will trigger the opening of the payment form (for example, the purchase button click).</li><li><code>https://paymentpage.platform.dev/shared/merchant.js</code>Set up the payment form to open upon the required events by using your in house-solutions or the JavaScript library from Platform available at.</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Keep in mind that to ensure correct behaviour of the payment form, you must link the Platform CSS library via the CDN (Content Delivery Network). Storing this library locally is not allowed.</p></div>', 6)
  ])]);
}
const ppOpeningModalOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppOpeningModalOverview as default
};
