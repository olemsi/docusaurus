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
    createStaticVNode('<h2 id="displaying-result-information" tabindex="-1">Displaying result information <a class="header-anchor" href="#displaying-result-information" aria-label="Permalink to &quot;Displaying result information&quot;">​</a></h2><table tabindex="0"><thead><tr><th><code>onTokenizeSuccess</code></th><th><code>card_tokenize</code>Triggered when the final page is displayed with the message that the payment instrument has been saved (according to the parameters of the request for opening the payment form in themode).When using this event handler, you can save the created token and use it in your web service.Example of the data object{ &quot;general&quot;:{ &quot;project_id&quot;:57123, &quot;customer_id&quot;:&quot;1&quot;, &quot;signature&quot;:&quot;Lqj0B3ue5tG33F9NV qkVbjXHXNZj3x1o/5q7r8/rY+O5MC64iW3k77tg==&quot; }, &quot;request&quot;:{ &quot;id&quot;:&quot;a748130e0350895d71bd8154342e0c261e30e086-558 3739b323907d9d61a5ffbf4118afeec695552&quot;, &quot;action&quot;:&quot;tokenize&quot;, &quot;status&quot;:&quot;success&quot; }, &quot;token&quot;:&quot;503hyugfe7874f5utrdub1f671667hvyufxyd2341ce&quot;, &quot;customer&quot;:{ &quot;ip_address&quot;:&quot;102.129.155.0&quot;, &quot;id&quot;:&quot;1&quot; }, &quot;token_created_at&quot;:&quot;2025-09-28T11:25:30+0000&quot;, &quot;token_status&quot;:&quot;active&quot; }</th></tr></thead><tbody><tr><td><code>onCardVerifySuccess</code></td><td><code>card_verify</code>Triggered when the final page is displayed with the message that the payment instrument has been verified (according to the parameters of the request for opening the payment form in themode).When using this event handler, you can record the information that the payment instrument was verified and proceed with the next steps (for example, register a card token or initiate a payout).Example of the data object{ &quot;request_id&quot;: &quot;bbeef4d51e6ae4aadcb86d-00003158&quot;, &quot;transaction&quot;: { &quot;id&quot;: 3157000012768, &quot;date&quot;: &quot;2025-10-29T14:15:02+0000&quot;, &quot;type&quot;: &quot;account_verification&quot; }, &quot;payment&quot;: { &quot;method&quot;: &quot;card&quot;, &quot;date&quot;: &quot;2025-10-29T14:15:02+0000&quot;, &quot;result_code&quot;: &quot;0&quot;, &quot;result_message&quot;: &quot;Success&quot;, &quot;status&quot;: &quot;success&quot;, &quot;is_new_attempts_available&quot;: false, &quot;attempts_timeout&quot;: 0, &quot;id&quot;: &quot;EP1120-3e48&quot;, &quot;cascading_with_redirect&quot;: false, &quot;is_cascading&quot;: false, &quot;remaining_refund&quot;: 0, &quot;split_with_redirect&quot;: false, &quot;method_id&quot;: 1, &quot;provider_id&quot;: 3 }, &quot;sum_real&quot;: { &quot;amount&quot;: 0, &quot;currency&quot;: &quot;GBP&quot; }, &quot;customer&quot;: { &quot;id&quot;: &quot;123&quot; }, &quot;account&quot;: { &quot;number&quot;: &quot;424242<strong><strong><strong>4242&quot;, &quot;type&quot;: &quot;visa&quot;, &quot;id&quot;: 70256633, &quot;card_holder&quot;: &quot;HENRY FORD&quot;, &quot;expiry_month&quot;: &quot;12&quot;, &quot;expiry_year&quot;: &quot;2028&quot; }, &quot;avs_result&quot;: &quot;X&quot;, &quot;rrn&quot;: &quot;000047769105&quot;, &quot;sum_request&quot;: { &quot;amount&quot;: 0, &quot;currency&quot;: &quot;GBP&quot; }, &quot;company&quot;: { &quot;id&quot;: 1, &quot;title&quot;: &quot;My store&quot; }, &quot;terminal&quot;: { &quot;method_code&quot;: &quot;card&quot;, &quot;mode_code&quot;: &quot;card_verify&quot;, &quot;name&quot;: &quot;v5&quot; }, &quot;cashout_data&quot;: { &quot;account_number&quot;: &quot;424242</strong></strong></strong>4242&quot;, &quot;customer_first_name&quot;: &quot;Henry&quot;, &quot;customer_last_name&quot;: &quot;Ford&quot; }, &quot;general&quot;: { &quot;project_id&quot;: 291451, &quot;payment_id&quot;: &quot;EP1120-3e48&quot;, &quot;signature&quot;: &quot;fZKqrch...3//pDDJUaJ8R/7Yi5A==&quot; }, &quot;description&quot;: &quot;&quot;, &quot;operations&quot;: [ { &quot;id&quot;: 3157000013487, &quot;type&quot;: &quot;account verification&quot;, &quot;status&quot;: &quot;success&quot;, &quot;date&quot;: &quot;2025-10-29T14:15:02+0000&quot;, &quot;processing_time&quot;: &quot;2025-10-29T14:15:01+0000&quot;, &quot;request_id&quot;: &quot;12a469296f-00003158&quot;, &quot;sum&quot;: { &quot;amount&quot;: 0, &quot;currency&quot;: &quot;GBP&quot; }, &quot;code&quot;: &quot;0&quot;, &quot;message&quot;: &quot;Success&quot;, &quot;provider&quot;: { &quot;id&quot;: 3, &quot;payment_id&quot;: &quot;17616663016501&quot; } } ], &quot;return_url&quot;: &quot;<a href="https://mystore.com/redirect/au80n3l6krq80" target="_blank" rel="noreferrer">https://mystore.com/redirect/au80n3l6krq80</a>&quot; }</td></tr><tr><td><code>onCardVerifyFail</code></td><td><code>card_verify</code>Triggered when the final page is displayed with the message that the payment instrument has not been verified (according to the parameters of the request for opening the payment form in themode).When using this event handler, you can record the information that the payment instrument was not verified, check the reason for decline, and display it to the customer.Example of the data object{ &quot;sum_request&quot;: { &quot;amount&quot;: 0, &quot;currency&quot;: &quot;GBP&quot; }, &quot;request_id&quot;: &quot;bbeef40ef99a6cd-00003158&quot;, &quot;transaction&quot;: { &quot;id&quot;: 3157000012768, &quot;date&quot;: &quot;2025-10-29T14:15:02+0000&quot;, &quot;type&quot;: &quot;account_verification&quot; }, &quot;payment&quot;: { &quot;method&quot;: &quot;card&quot;, &quot;date&quot;: &quot;2025-10-29T14:15:02+0000&quot;, &quot;result_code&quot;: &quot;100&quot;, &quot;result_message&quot;: &quot;General decline&quot;, &quot;status&quot;: &quot;decline&quot;, &quot;is_new_attempts_available&quot;: false, &quot;attempts_timeout&quot;: 0, &quot;id&quot;: &quot;EP1120-3e48&quot;, &quot;cascading_with_redirect&quot;: false, &quot;is_cascading&quot;: false, &quot;split_with_redirect&quot;: false, &quot;method_id&quot;: 1, &quot;provider_id&quot;: 3 }, &quot;sum_real&quot;: { &quot;amount&quot;: 0, &quot;currency&quot;: &quot;GBP&quot; }, &quot;customer&quot;: { &quot;id&quot;: &quot;123&quot; }, &quot;account&quot;: { &quot;number&quot;: &quot;424242<strong><strong><strong>4242&quot;, &quot;type&quot;: &quot;visa&quot;, &quot;card_holder&quot;: &quot;HENRY FORD&quot;, &quot;expiry_month&quot;: &quot;12&quot;, &quot;expiry_year&quot;: &quot;2034&quot; }, &quot;avs_result&quot;: &quot;X&quot;, &quot;rrn&quot;: &quot;000047769105&quot;, &quot;company&quot;: { &quot;id&quot;: 1, &quot;title&quot;: &quot;My store&quot; }, &quot;terminal&quot;: { &quot;method_code&quot;: &quot;card&quot;, &quot;mode_code&quot;: &quot;card_verify&quot;, &quot;name&quot;: &quot;v5&quot; }, &quot;cashout_data&quot;: { &quot;account_number&quot;: &quot;424242</strong></strong></strong>4242&quot;, &quot;customer_first_name&quot;: &quot;Henry&quot;, &quot;customer_last_name&quot;: &quot;Ford&quot; }, &quot;general&quot;: { &quot;project_id&quot;: 291451, &quot;payment_id&quot;: &quot;EP1120-3e48&quot;, &quot;signature&quot;: &quot;fZPTytEOwT1Z8...BB3//pDDJUaJ8R/7Yi5A==&quot; }, &quot;description&quot;: &quot;&quot;, &quot;operations&quot;: [ { &quot;id&quot;: 3157000013487, &quot;type&quot;: &quot;account verification&quot;, &quot;status&quot;: &quot;decline&quot;, &quot;date&quot;: &quot;2025-10-29T14:15:02+0000&quot;, &quot;processing_time&quot;: &quot;2025-10-29T14:15:01+0000&quot;, &quot;request_id&quot;: &quot;70-18a296f-00003158&quot;, &quot;sum&quot;: { &quot;amount&quot;: 0, &quot;currency&quot;: &quot;GBP&quot; }, &quot;code&quot;: &quot;100&quot;, &quot;message&quot;: &quot;General decline&quot;, &quot;provider&quot;: { &quot;id&quot;: 3, &quot;payment_id&quot;: &quot;17617473016501&quot; } } ], &quot;return_url&quot;: &quot;<a href="https://mystore.com/redirect/baun3l6krq80" target="_blank" rel="noreferrer">https://mystore.com/redirect/baun3l6krq80</a>&quot; }</td></tr><tr><td><code>onPaymentSuccess</code></td><td>Triggered when the final page is displayed with the message that the payment is completed.When using this event handler, you can record the information that the payment was completed and proceed to process the paid order and communicate with the customer if needed. You can also capture the total time of processing the payment.Example of the data object{ &quot;sum_request&quot;:{ &quot;amount&quot;:1000, &quot;currency&quot;:&quot;EUR&quot; }, &quot;request_id&quot;:&quot;f68d1288e3e37b0ded8763d94588dd2915c5dfadb5024&quot;, &quot;transaction&quot;:{ &quot;id&quot;:2000000004, &quot;date&quot;:&quot;2025-10-08T11:14:49+0000&quot;, &quot;type&quot;:&quot;purchase&quot; }, &quot;payment&quot;:{ &quot;method&quot;:&quot;card&quot;, &quot;date&quot;:&quot;2025-10-08T11:14:49+0000&quot;, &quot;result_code&quot;:&quot;0&quot;, &quot;result_message&quot;:&quot;Success&quot;, &quot;status&quot;:&quot;success&quot;, &quot;is_new_attempts_available&quot;:false, &quot;attempts_timeout&quot;:0, &quot;id&quot;:&quot;payment_443&quot;, &quot;provider_id&quot;:3 }, &quot;sum_real&quot;:{ &quot;amount&quot;:1000, &quot;currency&quot;:&quot;EUR&quot; }, &quot;customer&quot;:{ &quot;id&quot;:&quot;1&quot; }, &quot;status&quot;:&quot;success&quot;, &quot;account&quot;:{ &quot;number&quot;:&quot;541333******0019&quot;, &quot;type&quot;:&quot;mastercard&quot;, &quot;card_holder&quot;:&quot;JOHN SMITH&quot;, &quot;id&quot;:37489, &quot;expiry_month&quot;:&quot;12&quot;, &quot;expiry_year&quot;:&quot;2028&quot; }, &quot;rrn&quot;:&quot;000047769105&quot;, &quot;auth_code&quot;:&quot;563253&quot;, &quot;general&quot;:{ &quot;project_id&quot;:57123, &quot;payment_id&quot;:&quot;payment_443&quot;, &quot;signature&quot;:&quot;EjYXLJpvDBPtbwQSQ0ukti9B Y1m73+0SrRCCQGB5QXHzxTu7Fory/XQaZTtNz2Vm33AA==&quot; }, &quot;description&quot;:&quot;&quot;, &quot;operations&quot;:[{ &quot;id&quot;:2000000004, &quot;type&quot;:&quot;sale&quot;, &quot;status&quot;:&quot;success&quot;, &quot;date&quot;:&quot;2025-10-08T11:14:49+0000&quot;, &quot;processing_time&quot;:&quot;2025-10-08T11:14:49+0000&quot;, &quot;sum&quot;:{ &quot;amount&quot;:1000, &quot;currency&quot;:&quot;EUR&quot; }, &quot;code&quot;:&quot;0&quot;, &quot;message&quot;:&quot;Success&quot; } ], &quot;return_url&quot;:&quot;<a href="http://pp/process/complete-redirect?0ebeqgdcgbsj3d278b46" target="_blank" rel="noreferrer">http://pp/process/complete-redirect?0ebeqgdcgbsj3d278b46</a>&quot; }</td></tr><tr><td><code>onPaymentFail</code></td><td>Triggered when the final page is displayed with the message that the payment is declined.When using this event handler, you can record the information that the payment was declined, check the reason for decline, and display it to the customer. If needed, you can resend a request for opening Payment Widget with a new payment identifier.Example of the data object{ &quot;sum_request&quot;:{ &quot;amount&quot;:1000, &quot;currency&quot;:&quot;EUR&quot; }, &quot;request_id&quot;:&quot;f68d1288e3e37b0ded8763d94588dd2915c5dfadb5024&quot;, &quot;transaction&quot;:{ &quot;id&quot;:2000000004, &quot;date&quot;:&quot;2025-10-08T11:14:49+0000&quot;, &quot;type&quot;:&quot;purchase&quot; }, &quot;payment&quot;:{ &quot;method&quot;:&quot;card&quot;, &quot;date&quot;:&quot;2025-10-08T11:14:49+0000&quot;, &quot;result_code&quot;:&quot;10106&quot;, &quot;result_message&quot;:&quot;expired&quot;, &quot;status&quot;:&quot;decline&quot;, &quot;is_new_attempts_available&quot;:false, &quot;attempts_timeout&quot;:0, &quot;id&quot;:&quot;payment_443&quot;, &quot;provider_id&quot;:3 }, &quot;sum_real&quot;:{ &quot;amount&quot;:1000, &quot;currency&quot;:&quot;EUR&quot; }, &quot;customer&quot;:{ &quot;id&quot;:&quot;1&quot; }, &quot;status&quot;:&quot;decline&quot;, &quot;account&quot;:{ &quot;number&quot;:&quot;541333******0019&quot;, &quot;type&quot;:&quot;mastercard&quot;, &quot;card_holder&quot;:&quot;JOHN SMITH&quot;, &quot;id&quot;:37489, &quot;expiry_month&quot;:&quot;12&quot;, &quot;expiry_year&quot;:&quot;2028&quot; }, &quot;rrn&quot;:&quot;000047769105&quot;, &quot;auth_code&quot;:&quot;563253&quot;, &quot;general&quot;:{ &quot;project_id&quot;:57123, &quot;payment_id&quot;:&quot;payment_443&quot;, &quot;signature&quot;:&quot;EjYXLJpvDBPtbwQSQ0ukti9BY1m73+0 SrRCCQGB5QXHzxTu7Fory/XQaZTtNz2Vm33AA==&quot; }, &quot;description&quot;:&quot;&quot;, &quot;operations&quot;:[{ &quot;id&quot;:2000000004, &quot;type&quot;:&quot;sale&quot;, &quot;status&quot;:&quot;decline&quot;, &quot;date&quot;:&quot;2025-10-08T11:14:49+0000&quot;, &quot;processing_time&quot;:null, &quot;sum&quot;:{ &quot;amount&quot;:1000, &quot;currency&quot;:&quot;EUR&quot; }, &quot;code&quot;:&quot;10106&quot;, &quot;message&quot;:&quot;expired&quot; } ], &quot;return_url&quot;:&quot;<a href="http://pp/process/complete-redirect?0ebeqgdcgbsj3d278b46" target="_blank" rel="noreferrer">http://pp/process/complete-redirect?0ebeqgdcgbsj3d278b46</a>&quot; }</td></tr></tbody></table><h2 id="closing-the-form" tabindex="-1">Closing the form <a class="header-anchor" href="#closing-the-form" aria-label="Permalink to &quot;Closing the form&quot;">​</a></h2><table tabindex="0"><thead><tr><th><code>onDestroy</code></th><th>Triggered when Payment Widget is closed before the payment result page is displayed.When using this event handler, you should take appropriate steps in the front end of your web service (for example, notify the customer that the payment status is being checked), check the current payment status (details), and decide on the subsequent course of action based on the payment status.<code>data</code>Theobject is not supported for this event handler.</th></tr></thead><tbody><tr><td><code>onExit</code></td><td>Triggered when Payment Widget is closed after the payment result page is displayed (according to the specified parameters).When using this event handler, you can record that the Payment Widget session was completed and proceed with the next steps in your web service. You may also capture the total time the customer spent interacting with the payment form.<code>data</code>Theobject is not supported for this event handler.</td></tr></tbody></table>', 4)
  ])]);
}
const ppUiMonitoringHandlers = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppUiMonitoringHandlers as default
};
