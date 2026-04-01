import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Gathering customer data","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/sdk-ios-gather-data.md","filePath":"sdk/sdk-ios-gather-data.md"}');
const _sfc_main = { name: "sdk/sdk-ios-gather-data.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "gathering-customer-data",
      tabindex: "-1"
    }, [
      createTextVNode("Gathering customer data "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#gathering-customer-data",
        "aria-label": 'Permalink to "Gathering customer data"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "en_pp_gathering_customer_data.ditaUsually payment form requires a minimum of data to complete a request for payment. However, in order to gather more extensive data and statistics about customers you can send and/or request additional data about your customers, such as customer phone number or email. For more information, see.", -1),
    createBaseVNode("p", null, [
      createBaseVNode("code", null, "paymentInfo"),
      createTextVNode('SwiftpaymentInfo.setAdditionalFields(additionalFields: [ AdditionalField(type: .customer_first_name, value: "Mark"), AdditionalField(type: .billing_country, value: "US"), AdditionalField.init(type: .aps_account_number, value: ""), AdditionalField.init(type: .aps_account_security_code, value: "") .... ])Objective-C[paymentInfo setAdditionalFields:@[ [[AdditionalField alloc] initWithType:customer_first_name value:@"Mark"], [[AdditionalField alloc] initWithType:billing_country value:@"US"], [[AdditionalField alloc] initWithType:aps_account_number value: ""], [[AdditionalField alloc] initWithType:aps_account_security_code value: ""] ... ]];To pass additional information, set them in theobject:')
    ], -1)
  ])]);
}
const sdkIosGatherData = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  sdkIosGatherData as default
};
