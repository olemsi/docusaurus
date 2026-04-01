import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Signature generation","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-android-signature.md","filePath":"sdk/sdk-android-signature.md"}');
const _sfc_main = { name: "sdk/sdk-android-signature.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h1 id="signature-generation" tabindex="-1">Signature generation <a class="header-anchor" href="#signature-generation" aria-label="Permalink to &quot;Signature generation&quot;">​</a></h1><p>To verify data integrity and authenticate the messages your application exchange with the Some Platform payment platform, all the messages need to be signed. You must sign all your outgoing messages (for example, checkout request) and check signatures of all the incoming messages (for example, callbacks). Before generating signature, you need to prepare the payment data by packing all the payment parameters into a single string. The string is generated on the client side where you can use sdk_android for this purpose. The signing process requires the secret key provided by Some Platform therefore the signing procedure must be performed on the back end side of your app.</p><p>Generate the HMAC value based on the SHA-512 hashing algorithm and your secret key.Encode the result of step1 using Base64.Once you generate the string to sign on the basis of all the payment parameters, do the following:</p><p><strong>Input data</strong>customer_id:5;payment_amount:30;payment_currency:RUB;payment_id:payment1;project_id:115Sample string to sign:<code>12345</code>Sample secret key:<strong>Result</strong>pVmAtGFBQJD2NgLToP1B2elR4QROiYGi3IobPD9PFDfrkjBqdSCFgrVSEtebVJUzOUUHX5tPnHQq9RMn61679A==: generated signature:Use the following example to test whether your code correctly generates signatures:</p><p>The signature your back end generates based on the sample string and the secret key must be exactly the same as of the sample generated signature.</p><p>en_pp_authentication.ditaWe recommend choose specific implementation of the signing algorithm based on the programming environment you use. For the detailed information about signature generation, see.</p>', 6)
  ])]);
}
const sdkAndroidSignature = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  sdkAndroidSignature as default
};
