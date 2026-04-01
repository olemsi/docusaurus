import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a2 as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Importing libraries","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-android-import.md","filePath":"sdk/sdk-android-import.md"}');
const _sfc_main = { name: "sdk/sdk-android-import.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_uses_permission = resolveComponent("uses-permission");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createStaticVNode("", 5)),
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
