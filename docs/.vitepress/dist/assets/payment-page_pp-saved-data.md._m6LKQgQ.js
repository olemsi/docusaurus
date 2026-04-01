import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Saving customer payment data","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-saved-data.md","filePath":"payment-page/pp-saved-data.md"}');
const _sfc_main = { name: "payment-page/pp-saved-data.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "saving-customer-payment-data",
      tabindex: "-1"
    }, [
      createTextVNode("Saving customer payment data "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#saving-customer-payment-data",
        "aria-label": 'Permalink to "Saving customer payment data"'
      }, "​")
    ], -1),
    createBaseVNode("p", null, "Saved payment credentials are shown on the payment method selection page together with the details of cards for which tokens were generated.To ensure convenience and efficiency of the Payment Widget user scenarios, you can implement the capability of storing customer payment credentials for subsequent use without prompting the customer to provide this data again. Customer payment credentials can be saved when customers make purchases or when their payment instruments are verified.", -1),
    createBaseVNode("p", null, "always save customer payment datanever save customer payment dataask customers about saving payment dataPayment Widget supports the following options for saving payment data:", -1),
    createBaseVNode("p", null, "Additionally, you can limit the maximum number of saved payment instruments per customer.", -1),
    createBaseVNode("p", null, "If necessary, the customer can delete saved payment instruments in Payment Widget. In case when the customer deletes a saved card that was used to register a COF purchase, the debiting of funds continues to take place. For details on cancelling a COF purchase, see .", -1)
  ])]);
}
const ppSavedData = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppSavedData as default
};
