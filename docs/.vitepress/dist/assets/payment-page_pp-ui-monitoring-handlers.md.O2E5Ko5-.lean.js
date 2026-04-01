import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, a2 as createStaticVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Event handlers","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-ui-monitoring-handlers.md","filePath":"payment-page/pp-ui-monitoring-handlers.md"}');
const _sfc_main = { name: "payment-page/pp-ui-monitoring-handlers.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("h1", {
      id: "event-handlers",
      tabindex: "-1"
    }, [
      createTextVNode("Event handlers "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#event-handlers",
        "aria-label": 'Permalink to "Event handlers"'
      }, "​")
    ], -1),
    createBaseVNode("h2", {
      id: "loading-the-form",
      tabindex: "-1"
    }, [
      createTextVNode("Loading the form "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#loading-the-form",
        "aria-label": 'Permalink to "Loading the form"'
      }, "​")
    ], -1),
    createBaseVNode("table", { tabindex: "0" }, [
      createBaseVNode("thead", null, [
        createBaseVNode("tr", null, [
          createBaseVNode("th", null, [
            createBaseVNode("code", null, "onLoaded")
          ]),
          createBaseVNode("th", {
            "width:900,": "",
            "height:640": ""
          }, "Triggered when Payment Widget is successfully loaded (all UI elements are fully rendered and the Payment Widget session is initialised according to the request parameters).When using this event handler, you can measure the payment form load speed on a customer device.Example of the data object")
        ])
      ]),
      createBaseVNode("tbody", null, [
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "onFailLoading")
          ]),
          createBaseVNode("td", null, 'Triggered when Payment Widget fails to load (the Payment Widget session cannot be initialised).When using this event handler, you can check the parameters in the request for opening the payment form and then resend the request. You can reuse the same payment identifier if it is valid and has not been used within the project beforehand.Example of the data object{ "message": "Application error", "config": { "customer_id": "1", "frame_mode": "iframe", "payment_amount": "1000", "payment_currency": "EUR", "payment_id": "payment_443", "project_id": "57123", "signature": "YWb6Z20ByxpQIjaCCsVIwVynXV", "target_element": "iframe-holder" } }')
        ])
      ])
    ], -1),
    createBaseVNode("h2", {
      id: "submitting-payment-information",
      tabindex: "-1"
    }, [
      createTextVNode("Submitting payment information "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#submitting-payment-information",
        "aria-label": 'Permalink to "Submitting payment information"'
      }, "​")
    ], -1),
    createBaseVNode("table", { tabindex: "0" }, [
      createBaseVNode("thead", null, [
        createBaseVNode("tr", null, [
          createBaseVNode("th", null, [
            createBaseVNode("code", null, "onPaymentMethodSelect")
          ]),
          createBaseVNode("th", {
            "name:Bankcards,": "",
            "payment_method_type:1,": "",
            "payment_method_code:card": ""
          }, [
            createTextVNode("Triggered when a customer selects a payment method. The event is raised whenever the customer switches between payment method tabs on the form."),
            createBaseVNode("code", null, "12"),
            createTextVNode("When using this event handler, you can record which payment method the customer has selected. The data includes the payment method name, the code of the payment type (for purchases,for payouts), and the payment method code (according to the reference).Example of the data object")
          ])
        ])
      ]),
      createBaseVNode("tbody", null, [
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "onWalletSelect")
          ]),
          createBaseVNode("td", null, 'Triggered when a customer selects saved payment data (a card or another payment instrument).When using this event handler, you can record which payment instrument the customer has selected (based on masked details of this payment instrument). If needed, this information can be used in your web service further on to initiate requests for payments with card tokens (details).Example of the data object{ "code":"card", "id":"37489", "pan":"541333******0019", "month":"12", "year":"2028", "type":"mastercard", "pan_first6":"541333", "pan_last4":"0019", "expired":"0", "cvv_required":"1", "holder":"JOHN SMITH", "token":"503hyugfe7874f5utrdub1f671667hvyufxyd2341ce", "field_values":{ "country":"", "phone":"", "email":"", "card[expiry]":"12/28", "card[holder]":"JOHN SMITH", "card[type]":"mastercard", "card[country]":"GB", "card[product_name]":"Mastercard Gold", "card[bank_name]":"Citibank", "recurring_enable":"0" } }')
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "onWalletRemove")
          ]),
          createBaseVNode("td", null, 'Triggered when a customer selects to delete saved payment data (a card or another payment instrument).When using this event handler, you can record which payment instrument the customer has selected to delete (based on masked details of this payment instrument).Example of the data object{ "code":"card", "id":"37489", "pan":"541333******0019", "month":"12", "year":"2028", "type":"mastercard", "pan_first6":"541333", "pan_last4":"0019", "expired":"0", "cvv_required":"1", "holder":"JOHN SMITH", "token":"503hyugfe7874f5utrdub1f671667hvyufxyd2341ce", "field_values":{ "country":"", "phone":"", "email":"", "card[expiry]":"12/28", "card[holder]":"JOHN SMITH", "card[type]":"mastercard", "card[country]":"GB", "card[product_name]":"Mastercard Gold", "card[bank_name]":"Citibank", "recurring_enable":"0" } }')
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "onPaymentSent")
          ]),
          createBaseVNode("td", null, [
            createTextVNode("Triggered when a customer confirms the payment (after all required fields in the payment form have been filled) and the preloader page is shown to the customer.When using this event handler, you can capture the time the customer spent interacting with Payment Widget and then, if needed, set the time limit for working with the form (details). You can also display the message that the web service is waiting for the payment result."),
            createBaseVNode("code", null, "data"),
            createTextVNode("Theobject is not supported for this event handler.")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "onPaymentSubmitResult")
          ]),
          createBaseVNode("td", {
            "request_id:": "",
            "bc4-5a032482802f-00002836": ""
          }, "Triggered when the payment request is received in the Platform platform.When using this event handler, you can save the identifier of the request for opening Payment Widget and use it to monitor the payment status in the case of incidents, for example, when there is a loss of connection with the customer's device, or callbacks from Platform are not delivered (learn more about callbacks).Example of the data object")
        ])
      ])
    ], -1),
    createBaseVNode("h2", {
      id: "redirecting-the-customer",
      tabindex: "-1"
    }, [
      createTextVNode("Redirecting the customer "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#redirecting-the-customer",
        "aria-label": 'Permalink to "Redirecting the customer"'
      }, "​")
    ], -1),
    createBaseVNode("table", { tabindex: "0" }, [
      createBaseVNode("thead", null, [
        createBaseVNode("tr", null, [
          createBaseVNode("th", null, [
            createBaseVNode("code", null, "onShowClarificationPage")
          ]),
          createBaseVNode("th", null, [
            createTextVNode("Triggered when the page to submit additional information is displayed to a customer (details)."),
            createBaseVNode("code", null, "onSubmitClarificationFormSuccess"),
            createTextVNode("When using this event handler, you can record that additional data was requested from the customer and capture the event’s timestamp. Afterwards, you can check if the customer provides the required information (use theevent handler) and if the payment is completed with thestatus."),
            createBaseVNode("code", null, "data"),
            createTextVNode("Theobject is not supported for this event handler.")
          ])
        ])
      ]),
      createBaseVNode("tbody", null, [
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "onSubmitClarificationForm")
          ]),
          createBaseVNode("td", null, [
            createTextVNode("Triggered when a customer has submitted additional information."),
            createBaseVNode("code", null, "SuccessonSubmitClarificationForm"),
            createTextVNode("When using this event handler, you can capture the time the customer spent providing additional data and check if the payment is completed with thestatus. If you notice that the payments involving the use of theevent handler are frequently declined, it is recommended that you contact the Platform technical support to extend the list of mandatory parameters for requests to open Payment Widget or to use the procedure of submitting additional payment information on the form (details)."),
            createBaseVNode("code", null, "data"),
            createTextVNode("Theobject is not supported for this event handler.")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "onRedirectIframe")
          ]),
          createBaseVNode("td", null, [
            createTextVNode("Triggered when a customer is redirected from your web service to a third-party service in the iframe element (according to the project settings and the request parameters; details)."),
            createBaseVNode("code", null, "onRedirectIframeCompleteSuccess"),
            createTextVNode("When using this event handler, you can capture the event’s timestamp when the customer is redirected to another service. Afterwards, you can check if the customer returns to Payment Widget (use theevent handler) and if the payment is completed with thestatus. If you notice frequent disruptions in customer redirection between services during payment processing, it is recommended that you contact the Platform technical support."),
            createBaseVNode("code", null, "data"),
            createTextVNode("Theobject is not supported for this event handler.")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "onResize")
          ]),
          createBaseVNode("td", {
            "width:1080,": "",
            "height:660": ""
          }, "Triggered when an HTML page opened in the iframe element is resized.When using this event handler, you can determine the dimensions of the HTML page where the customer is redirected to. Then you can check if the original size of the iframe element allows the page to be displayed properly in it and, if needed, resize the iframe element.Example of the data object")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "onRedirectIframeComplete")
          ]),
          createBaseVNode("td", null, [
            createTextVNode("Triggered when a customer returns to Payment Widget from a third-party service displayed in the iframe element.When using this event handler, you can capture the time the customer spent in the third-party service."),
            createBaseVNode("code", null, "data"),
            createTextVNode("Theobject is not supported for this event handler.")
          ])
        ])
      ])
    ], -1),
    createStaticVNode("", 4)
  ])]);
}
const ppUiMonitoringHandlers = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppUiMonitoringHandlers as default
};
