import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Opening in modal","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-opening-modal-overview.md","filePath":"payment-page/pp-opening-modal-overview.md"}');
const _sfc_main = { name: "payment-page/pp-opening-modal-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="opening-in-modal" tabindex="-1">Opening in modal <a class="header-anchor" href="#opening-in-modal" aria-label="Permalink to &quot;Opening in modal&quot;">​</a></h1><p>When opened in a modal window, the Payment Widget payment form is displayed to the customer over the merchant&#39;s web service page. This interrupts the customer&#39;s interaction with the web service but keeps them engaged and focuses the customer&#39;s attention on the purchase without redirecting them to another page.</p><p>For opening the payment form in a modal window, the following should be performed on the web service side:</p><p>When processing Apple Pay payments via Payment Widget with the option to open the payment form in a modal window, register your merchant domains with the Apple Pay service (learn more).</p><ol><li><code>https://paymentpage.platform.dev/shared/merchant.css</code>Link the CSS library from Platform on the client side of the web service for the payment form to be displayed correctly. This library is available at.</li><li>Define the events that will trigger the opening of the payment form (for example, the purchase button click).</li><li><code>https://paymentpage.platform.dev/shared/merchant.js</code>Set up the payment form to open upon the required events by using your in house-solutions or the JavaScript library from Platform available at.</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Keep in mind that to ensure correct behaviour of the payment form, you must link the Platform CSS library via the CDN (Content Delivery Network). Storing this library locally is not allowed.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-opening-modal-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppOpeningModalOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppOpeningModalOverview as default
};
