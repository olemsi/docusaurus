import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Importing libraries","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-android-import.md","filePath":"sdk/sdk-android-import.md"}');
const _sfc_main = { name: "sdk/sdk-android-import.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uses_permission = resolveComponent("uses-permission");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createStaticVNode('<h1 id="importing-libraries" tabindex="-1">Importing libraries <a class="header-anchor" href="#importing-libraries" aria-label="Permalink to &quot;Importing libraries&quot;">​</a></h1><h2 id="importing-libraries-in-your-project" tabindex="-1">Importing libraries in your project <a class="header-anchor" href="#importing-libraries-in-your-project" aria-label="Permalink to &quot;Importing libraries in your project&quot;">​</a></h2><p><code>sdk_android_lib``sdk_android_lib</code>Download thefile.<code>sdk_android_lib</code>Add thefile into your project.<strong>FileNewNew Module****Import .JAR/.AAR Package</strong><code>sdk_android_lib</code>To do this is in Android Studio 3.0, go to, select, browse to thefile, and select the file.<code>build.gradle)</code>Open your application module (.<code>android {}</code>compileOptions { sourceCompatibility JavaVersion.VERSION_1_8 targetCompatibility JavaVersion.VERSION_1_8 }In thesection, add the following compilation parameters:<code>dependencies {}</code>implementation project(path: &#39;:sdk_android_import&#39;)   implementation &#39;io.card:android-sdk:5.5.1&#39;   implementation &#39;com.squareup.retrofit2:retrofit:2.3.0&#39; implementation &#39;com.squareup.okhttp3:logging-interceptor:3.10.0&#39; implementation &#39;androidx.appcompat:appcompat:1.0.0&#39; implementation &#39;androidx.legacy:legacy-support-v4:1.0.0&#39; implementation &#39;androidx.recyclerview:recyclerview:1.0.0&#39;</p><p>implementation &#39;com.squareup.retrofit2:converter-gson:2.3.0&#39; implementation &#39;com.google.code.gson:gson:2.8.4&#39;</p><p>implementation &#39;org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version&#39;</p>', 5)),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("implementation 'androidx.lifecycle:lifecycle-viewmodel:2.0.0' implementation 'androidx.lifecycle:lifecycle-extensions:2.0.0' implementation 'kz.sdk_android_brand_small.msdk:sdk_android_host_small-sdk-android:[LATEST_VERSION]' annotationProcessor 'androidx.lifecycle:lifecycle-compiler:2.0.0'", -1)),
      _cache[1] || (_cache[1] = createBaseVNode("code", null, "dependencies {}", -1)),
      _cache[2] || (_cache[2] = createTextVNode("If some of the dependencies are already added in thesection, do not add them again.In thesection, add the following dependencies:", -1)),
      _cache[3] || (_cache[3] = createBaseVNode("code", null, "AndroidManifest.xml", -1)),
      createVNode(_component_uses_permission, { "android:name": "android.permission.INTERNET" })
    ]),
    createVNode(_component_uses_permission, { "android:name": "android.permission.ACCESS_NETWORK_STATE" }),
    createVNode(_component_uses_permission, { "android:name": "android.permission.ACCESS_FINE_LOCATION" }),
    createVNode(_component_uses_permission, { "android:name": "android.permission.ACCESS_COARSE_LOCATION" }),
    createVNode(_component_uses_permission, { "android:name": "android.permission.WRITE_EXTERNAL_STORAGE" }),
    _cache[5] || (_cache[5] = createTextVNode("Add the following permissions in thefile:Listed below are the instructions on how to import thelibrary into your application.", -1))
  ]);
}
const sdkAndroidImport = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  sdkAndroidImport as default
};
