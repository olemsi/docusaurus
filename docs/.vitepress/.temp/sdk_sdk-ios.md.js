import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"sdk_ios","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-ios.md","filePath":"sdk/sdk-ios.md"}');
const _sfc_main = { name: "sdk/sdk-ios.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sdk-ios" tabindex="-1">sdk_ios <a class="header-anchor" href="#sdk-ios" aria-label="Permalink to &quot;sdk_ios&quot;">​</a></h1><p>sdk_ios is a software development kit for fast integration of the Some Platform payment solutions right in your mobile app for iOS. With sdk_ios, you can quickly build and offer you customers a fast checkout experience from inside of your iOS app. In this section you will find information about using sdk_ios as well as Swift and Objective-C code samples.</p><p>Within sdk_ios 1.9 two versions are available: sdk_ios 1.9.1 can be embedded in mobile applications running on iOS 11 or above and compatible with XCode 11 or above, while for mobile applications running on iOS 10 and compatible with Xcode 10 sdk_ios 1.9.0 should be used.</p><p>Libraries:Sample code:You can also download sdk_ios from GitHub. Use the following links to download sdk_ios:</p><h2 id="callbacks" tabindex="-1">Callbacks <a class="header-anchor" href="#callbacks" aria-label="Permalink to &quot;Callbacks&quot;">​</a></h2><h3 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h3><p>moreas well as the payment method that was usedWhen using sdk_ios, the merchant can receive callbacks that are sent by the payment platform directly to merchant web service and callbacks that are first sent by the payment platform to sdk_ios and then by sdk_ios to merchant mobile application. In the former case, the parameters sent in callbacks may vary depending on the configurations (). In the latter case, specific set of parameters is provided—the data about status, type and ID of the payment, currency and amount of the payment:</p><p>The following sections provide information about these callback messages.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;payment&quot;: {</span></span>
<span class="line"><span>        &quot;status&quot;: &quot;success&quot;,</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;purchase&quot;,</span></span>
<span class="line"><span>        &quot;id&quot;: &quot;12345&quot;,</span></span>
<span class="line"><span>        &quot;date&quot;: &quot;2020-09-11T14:49:18+0000&quot;,</span></span>
<span class="line"><span>        &quot;method&quot;: &quot;card&quot;,</span></span>
<span class="line"><span>        &quot;sum&quot;: 1000,</span></span>
<span class="line"><span>        &quot;currency&quot;: &quot;USD&quot;</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="callbacks-sent-by-the-payment-platform" tabindex="-1">Callbacks sent by the payment platform <a class="header-anchor" href="#callbacks-sent-by-the-payment-platform" aria-label="Permalink to &quot;Callbacks sent by the payment platform&quot;">​</a></h3><p>en_pp_callbacks.ditaThe payment platform sends all the callback messages to the callback URL you specify. You need to contact the Some Platform technical support and provide the URL to send callbacks. For more information about callbacks, see.</p><h3 id="callbacks-sent-by-sdk-ios" tabindex="-1">Callbacks sent by sdk_ios <a class="header-anchor" href="#callbacks-sent-by-sdk-ios" aria-label="Permalink to &quot;Callbacks sent by sdk_ios&quot;">​</a></h3><p>Merchant mobile application can receive callback messages with information about purchase processing result from sdk_ios as information about payment processing result is sent to sdk_ios by the payment platform. The callback message is sent to the merchant before the page with information about the result is displayed to the customer on the payment form.</p><p><code>sdk_ios_callback</code>onPaymentResultTo obtain information about payment result, you need to use thepublic protocol. This protocol involves the use of themethod which comes into action automatically as the final payment status is received and, as a result, the merchant receives information about the payment result. To obtain information about the purchase processing result, you can use the following examples of the code with no additional setup; if needed, you can also change the code.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sdk/sdk-ios.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sdkIos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sdkIos as default
};
