import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"sdk_android","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-android.md","filePath":"sdk/sdk-android.md"}');
const _sfc_main = { name: "sdk/sdk-android.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sdk-android" tabindex="-1">sdk_android <a class="header-anchor" href="#sdk-android" aria-label="Permalink to &quot;sdk_android&quot;">​</a></h1><p>sdk_android may be embedded in mobile applications developed for Android version 4.4 (API Level: 19) or later and supporting AndroidX. The screen resolution of the mobile device must be at least 480x800 pixels.</p><p>Library: sdk_android_releasesSample code: sdk_android_sampleYou candownload sdk_android from GitHub. Use the following links to download sdk_android:</p><p>sdk_android is a software development kit for fast integration of the Some Platform payment solutions right in your mobile application for Android. With sdk_android, you can quickly build and offer you customers a fast checkout experience from inside of your Android app. In this section you will find information about using sdk_android, and Java and Kotlin code samples.</p><h2 id="callbacks" tabindex="-1">Callbacks <a class="header-anchor" href="#callbacks" aria-label="Permalink to &quot;Callbacks&quot;">​</a></h2><h3 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h3><p>more, as well as the payment method usedWhen using sdk_android, the merchant can receive callbacks that are sent by the payment platform directly to merchant web service and callbacks that are first sent by the payment platform to sdk_android and then by sdk_android to merchant mobile application. In the former case, the parameters included in callbacks may vary depending on the configuration (). In the latter case, the specific set of parameters need to be provided: the data about status, type and ID of the payment, currency and amount of the payment:</p><p>The following sections provide information about these callback messages.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>    &quot;payment&quot;: {</span></span>
<span class="line"><span>        &quot;status&quot;: &quot;success&quot;,</span></span>
<span class="line"><span>        &quot;type&quot;: &quot;purchase&quot;,</span></span>
<span class="line"><span>        &quot;id&quot;: &quot;12345&quot;,</span></span>
<span class="line"><span>        &quot;date&quot;: &quot;2020-09-11T14:49:18+0000&quot;,</span></span>
<span class="line"><span>        &quot;method&quot;: &quot;card&quot;,</span></span>
<span class="line"><span>        &quot;sum&quot;: 1000,</span></span>
<span class="line"><span>        &quot;currency&quot;: &quot;USD&quot;</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="callbacks-sent-by-the-payment-platform" tabindex="-1">Callbacks sent by the payment platform <a class="header-anchor" href="#callbacks-sent-by-the-payment-platform" aria-label="Permalink to &quot;Callbacks sent by the payment platform&quot;">​</a></h3><p>en_pp_callbacks.ditaThe payment platform sends all the callback messages to the callback URL you specify. You need to contact the Some Platform technical support and provide the URL to send callbacks. For more information about callbacks, see.</p><h3 id="callbacks-sent-by-sdk-android" tabindex="-1">Callbacks sent by sdk_android <a class="header-anchor" href="#callbacks-sent-by-sdk-android" aria-label="Permalink to &quot;Callbacks sent by sdk_android&quot;">​</a></h3><p>Merchant mobile application can receive callback messages with information about purchase processing result from sdk_android as information about payment processing result is sent to sdk_android by the payment platform. The callback message is sent to the merchant before the page with information about the result is displayed to the customer on the payment form.</p><p>Information about purchase processing result is provided in broadcast messages sent to merchant mobile application by sdk_android. To obtain this information, you need to do the following:</p><p>BroadcastReceiverThe following are examples of implementation offor obtaining information about the purchase processing result.</p><ol><li>BroadcastReceiverCreate theobject to receive broadcast messages.</li><li>Intent<code>sdk_android_callback_type.getValue()sdk_android_activity</code>Upon receipt of broadcast messages from sdk_android, obtain information about the purchase processing result from theobject by using thekey. The key is a constant provided by.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sdk/sdk-android.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sdkAndroid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sdkAndroid as default
};
