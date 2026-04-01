import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Opening in new tab","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-opening-html-overview.md","filePath":"payment-page/pp-opening-html-overview.md"}');
const _sfc_main = { name: "payment-page/pp-opening-html-overview.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="opening-in-new-tab" tabindex="-1">Opening in new tab <a class="header-anchor" href="#opening-in-new-tab" aria-label="Permalink to &quot;Opening in new tab&quot;">​</a></h1><p>When opened as a separate HTML page, the Payment Widget payment form is displayed to the customer in a separate browser tab. Depending on the browser operation setup, it can be an active tab, in which the web service page was opened, or a new tab—but in either case, the customer&#39;s interaction with the web service is interrupted and the customer is redirected to a different page, which focuses their attention on the purchase. After the purchase, the customer can be redirected back to the web service (details).</p><p>For opening the payment form as a separate page, the following should be performed on the web service side:</p><ol><li>Define the events upon which the payment form should open (for example, the purchase button click).</li><li><code>https://paymentpage.platform.dev/shared/merchant.js</code>Set up the payment form to open upon the required events by using your in-house solutions or the JavaScript library from Platform available at. Among other capabilities, this library allows you to automatically use a certain option of Payment Widget opening depending on a device. It means the form can be set to open as a separate page on mobile devices and in a modal window or in an iframe element on other devices.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("payment-page/pp-opening-html-overview.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ppOpeningHtmlOverview = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ppOpeningHtmlOverview as default
};
