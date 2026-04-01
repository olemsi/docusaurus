import { _ as _export_sfc, o as openBlock, c as createElementBlock, a2 as createStaticVNode, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.BFJzPV4p.js";
const __pageData = JSON.parse('{"title":"Parameters for opening the payment form","description":"","frontmatter":{},"headers":[],"relativePath":"payment-page/pp-parameters.md","filePath":"payment-page/pp-parameters.md"}');
const _sfc_main = { name: "payment-page/pp-parameters.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode("", 6),
    createBaseVNode("table", { tabindex: "0" }, [
      createBaseVNode("thead", null, [
        createBaseVNode("tr", null, [
          createBaseVNode("th", null, "Parameter"),
          createBaseVNode("th", null, "Mandatory"),
          createBaseVNode("th", null, "Type"),
          createBaseVNode("th", null, "Description"),
          createBaseVNode("th", null, "Example")
        ])
      ]),
      createBaseVNode("tbody", null, [
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "account_token"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Available in the Purchase and Card Verify modes.For details, seeThe token of the bank card that will be used to perform a payment. In this case, on the generated payment widget the bank card is preselected with the bank card details filled in."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "addendum_data"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "This parameter contains all the booking itinerary data such as booking number, check-in and check-out dates, and hotel guest name and is applicable only to payments in travel industry.addendum_dataThe value of this parameter is obtained by converting addendum data in a single string by using the Base64 algorithm. For more information on how to calculate thevalue, see"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "avs_post_code"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer's postal code passed in case of the AVS check."),
          createBaseVNode("td", null, "WS13 6LG")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "avs_street_address"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer's street address passed in case of the AVS check."),
          createBaseVNode("td", null, "4 Breadmarket Street")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "baseUrl"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The basic URL for opening the payment form (when it is necessary to provide an actual URL)"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "best_before"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "YYYY-MM-DDThh:mm:ss±hh"),
            createTextVNode("Date and time when the payment period expires. After the payment expiration date the customer is redirected to a page with the message that the time of possibility to proceed the payment is expired. Parameter is passed in the following format:")
          ]),
          createBaseVNode("td", null, "2020-04-26T13:50:37+00:00")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "billing_address"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Street of the customer billing address"),
          createBaseVNode("td", null, "33 Store Street")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "billing_city"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "City of the customer billing address"),
          createBaseVNode("td", null, "London")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "billing_country"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Country of the customer billing address, in ISO 3166-1 alpha-2 format"),
          createBaseVNode("td", null, "GB")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "billing_postal"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Postal code of the customer billing address"),
          createBaseVNode("td", null, "BR1 1AA")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "billing_region"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Region or state of the customer billing address"),
          createBaseVNode("td", null, "Greater London")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "billing_region_code"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "DOR"),
            createTextVNode("State, province, or region code in the ISO 3166-2 format. Example:for Dorset."),
            createBaseVNode("code", null, "billing_country"),
            createTextVNode("If you specify this parameter, you need also to specify and populate theparameter.")
          ]),
          createBaseVNode("td", null, "DOR")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "booking_info"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "A string containing the Base64 encoded booking data (details)"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "card_holder"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Name of the cardholder as specified on the card. When the parameter is passed, the value is displayed and editable on the payment form"),
          createBaseVNode("td", null, "CARD HOLDER")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "card_operation_type"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "sale"),
            createTextVNode(": payment with direct withdrawal of funds"),
            createBaseVNode("em", null, "auth"),
            createTextVNode(": payment with held fundsFor more information, see andType of payment performed via payment card. The following options are available:")
          ]),
          createBaseVNode("td", null, "sale")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cash_voucher_data"),
          createBaseVNode("td", null, "Mandatory for Purchase if the activity is regulated by the 54 Russia Federal law"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "``A string that contains the data of the receipt. The data is passed in a JSON object, described in API, themodel"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cashier_default_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("strong", null, "Deposit"),
            createTextVNode("The tab that is opened to customer when the payment widget is opened. By default, Payment Widget opens thetab.")
          ]),
          createBaseVNode("td", null, "withdrawal")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cashier_force_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The only tab that is opened in the payment widget."),
          createBaseVNode("td", null, "deposit")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cashier_manual_input"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "boolean"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "1"),
            createTextVNode(": manual input is turned on"),
            createBaseVNode("em", null, "0"),
            createTextVNode(": manual input is turned offThe following values are available:Turning on or turning off the customer's ability to manually input amount of the payment or payout.")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cashier_max_value"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "Maximum payment amount in minor unit of currency."),
          createBaseVNode("td", null, "500")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cashier_min_value"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "Minimum payment amount in minor unit of currency."),
          createBaseVNode("td", null, "100")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "cashier_predefined_amounts"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "&lt;sum1>,&lt;sum2>]"),
            createTextVNode('A range of predefined amounts that are available for selection by the customer. The series is specified in the format, the amounts in minor units of the currency are separated by commas (",").')
          ]),
          createBaseVNode("td", null, "10,20,50")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "checkout_script"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "01"),
            createTextVNode("A parameter that determines the possibility to make a payment or to verify card by the card token using an encryption script without entering CVV/CVC/CID (allowed values:and). For more information, see"),
            createBaseVNode("code", null, "merchant.js"),
            createTextVNode("When working with Payment Widget without using thelibrary, a boolean value can be specified in this parameter.")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "close_on_missclick"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "1"),
            createTextVNode(": The widget is closed"),
            createBaseVNode("em", null, "0"),
            createTextVNode(": The widget remains open. This option is set as defaultFor more information, see"),
            createBaseVNode("code", null, "merchant.js"),
            createTextVNode("When working with Payment Widget without using thelibrary, a boolean value can be specified in this parameter.A parameter that specifies the action of the widget (opened in the modal window) when a customer clicks outside the widget area. The following options are available:")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "css_modal_wrap"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "An additional CSS class for a modal window. For more information, see"),
          createBaseVNode("td", null, "modal-popup")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_address"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Address of the customer"),
          createBaseVNode("td", null, "Main Street, 12")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_account_info"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "This parameter contains the customer account and contact information on record with the web service.The value of this parameter is obtained by converting the customer data into a single string by using the Base64 algorithm. For more information, see ."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_account_number"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "or e-walletCustomer accountnumber, can be also the email address or phone number (specified using a country code and without the + sign) linked to the account"),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "mailto:example@mail.com",
              target: "_blank",
              rel: "noreferrer"
            }, "example@mail.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_birthplace"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer place of birth"),
          createBaseVNode("td", null, "London")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_city"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "City of the customer address"),
          createBaseVNode("td", null, "London")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_country"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Country of the customer address in ISO 3166-1 alpha-2 format"),
          createBaseVNode("td", null, "GB")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_day_of_birth"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer date of birth, DD-MM-YYYY"),
          createBaseVNode("td", null, "12-12-1990")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_email"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, ".Required for card payments if the customer's phone number is not passed and the capability of collecting such customer data is not implemented (details).Customer e-mail"),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "mailto:smith@gmail.com",
              target: "_blank",
              rel: "noreferrer"
            }, "smith@gmail.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_first_name"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer first name"),
          createBaseVNode("td", null, "Jane")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_id"),
          createBaseVNode("td", null, ", PayoutMandatory for Card Tokenize, Purchase"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, ". The data passed in the parameter is collected and displayed in DashboardUnique ID of the customer in your project"),
          createBaseVNode("td", null, "customer_341")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_installment_count"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "The number of months of installment payment. For more information, see"),
          createBaseVNode("td", null, "2")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_last_name"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer last name"),
          createBaseVNode("td", null, "Smith")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_middle_name"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Customer middle name"),
          createBaseVNode("td", null, "Mary")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_mpi_result"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "This parameter contains the information about the previous authentication procedure of the customer.The value of this parameter is obtained by converting the authentication data into a single string by using the Base64 algorithm. For more information, see ."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_phone"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Required for card payments if the customer's email is not passed and the capability of collecting such customer data is not implemented (details).Customer's phone number. Generally, must be specified in full, with the country code, although in certain cases (such as card payments) the country code is not required. Technically, the number must include from 4 to 24 digits,and if it is allowed within the project and payment method used, punctuation marks and special symbols may be used while specifying the number (such cases are usually mentioned separately)."),
          createBaseVNode("td", null, "443031237300")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_security_code"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "or e-walletCustomer accountsecurity code for payment confirmation"),
          createBaseVNode("td", null, "852923")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_shipping"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "This parameter contains the shipping information.The value of this parameter is obtained by converting the shipping data into a single string by using the Base64 algorithm. For more information, see ."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_ssn"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "The last 4 digits of the social security number in the USA"),
          createBaseVNode("td", null, "1234")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_state"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "State or region of the customer address"),
          createBaseVNode("td", null, "Greater London")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_street"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Street of the customer address"),
          createBaseVNode("td", null, "Main")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "customer_zip"),
          createBaseVNode("td", null, "Custom"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Postal code of the customer address"),
          createBaseVNode("td", null, "RdWC2N 5DU")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "debt_account"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The recipient's account number for debiting funds from the customer's card in order to repay the debt. Latin letters and numbers are allowed, the maximum length is 10 characters"),
          createBaseVNode("td", null, "an9876170i")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "descriptor"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createTextVNode("()"),
            createBaseVNode("code", null, '# $ * ( ) - _ = + " ; : ? \\ / , . '),
            createTextVNode(" ' ^`Information which identifies the merchant that performs the operation. The maximum length is 13. It is possible to use letters of the Latin alphabet, digits, and the following symbols:")
          ]),
          createBaseVNode("td", null, '"Merchant_1"')
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "default_payment_method"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "ID of the payment provider that is opened to customers by default. The customer can select another payment system."),
          createBaseVNode("td", null, "card")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "force_acs_new_window"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "1"),
            createTextVNode(": opening in a separate tab"),
            createBaseVNode("em", null, "0not passed"),
            createTextVNode("or: opening as specified previously"),
            createBaseVNode("code", null, "merchant.js"),
            createTextVNode("When working with Payment Widget without using thelibrary, a boolean value can be specified in this parameter.The forced display mode with the ACS page opening in a new window despite the settings in Payment Widget")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "force_payment_method"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The ID of the payment method that is opened to customers without an option to select another one. The list of codes is provided in"),
          createBaseVNode("td", null, "card")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "force_payment_group")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "force_payment_method"),
            createTextVNode("Identifier of the payment method group, the elements of which limit the choice of method in the payment form. When specifying this identifier, Payment Widget displays buttons for selecting only the methods that are included in the specified group and are available within the project. At the same time, when this identifier is specified in a single request along with the code of a specific method in theparameter, the payment form is opened for making a purchase by using the specified method, without taking into account the selected group."),
            createBaseVNode("code", null, "openbanking"),
            createTextVNode("Currently only the Open Banking group of methods is selectable by using theidentifier.")
          ]),
          createBaseVNode("td", null, "openbanking")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "force_payment_method_subtype"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "force_payment_method=card"),
            createTextVNode("The bank card type that is opened to customers by default ifwithout an option to select another type. Also applies to the saved cards display. For available options see")
          ]),
          createBaseVNode("td", null, "visa")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "hide"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The ID of the payment method that is hidden from customers on Payment Widget. If it is necessary to hide several methods, identifiers are comma-separated. The list of codes is provided in"),
          createBaseVNode("td", null, "card, cup-card")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "identify_doc_number"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Number of a customer identity document"),
          createBaseVNode("td", null, "6543234567")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "interface_type"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createTextVNode("id"),
            createBaseVNode("em", null, "7"),
            createTextVNode("String containing information on the source of a payment request. The data is collected in a JSON object. Available value for theparameter:– Payment Widget in iframe mode")
          ]),
          createBaseVNode("td", { "id:7": "" }, "interface_type:")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "language_code"),
          createBaseVNode("td", null, "Recommended"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The language in which the payment widget will be opened to the customer in ISO 639-1 alpha-2 format. By default, it is determined by the customer IP address"),
          createBaseVNode("td", null, "en")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "list_payment_block"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "payment_method: ID of the payment provider that has been used to perform the latest payment operationThe following options are available:The payment block on the list of payment methods."),
          createBaseVNode("td", null, "payment_method")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "merchant_callback_url")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "detailsThe URL to deliver callbacks with information about specific target actions to. Useful when you need to change the callback URL for a specific request ()."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_data"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The parameter for specifying extended information about the purchase in progress (for example, details of the services provided). Data is passed as a JSON object. For more information, see ."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_fail_enabled"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "The parameter responsible for the possibility of returning customers to the project after a failed payment. For more information, see"),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_fail_redirect_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Mode for opening the project page to which a customer is returned after a failed payment. For more information, see"),
          createBaseVNode("td", null, "iframe")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_fail_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The project page URL to which a customer is returned after a failed payment by clicking on the return button. For more information, see"),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "http://example.com",
              target: "_blank",
              rel: "noreferrer"
            }, "http://example.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_return_enabled"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "The parameter responsible for the possibility of returning customers to the project at any payment step by clicking on the return button. For more information, see"),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_return_redirect_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Mode for opening the project page to which a customer is returned at any payment step by clicking on the return button. For more information, see"),
          createBaseVNode("td", null, "iframe")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_return_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The project page URL to which a customer is returned at any payment step by clicking on the return button. For more information, see"),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "http://example.com",
              target: "_blank",
              rel: "noreferrer"
            }, "http://example.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_success_enabled"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "The parameter responsible for the possibility of returning customers to the project after a succeeded payment. For more information, see"),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_success_redirect_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Mode for opening the project page to which a customer is returned after a succeeded payment. For more information, see"),
          createBaseVNode("td", null, "iframe")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "merchant_success_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The project page URL to which a customer is returned after a successful payment by clicking on the return button. For more information, see"),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "http://example.com",
              target: "_blank",
              rel: "noreferrer"
            }, "http://example.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "mode"),
          createBaseVNode("td", null, "Mandatory for all modes, except Purchase"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createTextVNode("Payment Widget mode. The following values are available:"),
            createBaseVNode("em", null, "purchase"),
            createTextVNode(": the Purchase mode. This mode is used by default"),
            createBaseVNode("em", null, "payout"),
            createTextVNode(": the Payout mode"),
            createBaseVNode("em", null, "card_tokenize"),
            createTextVNode(": the Card Tokenize mode"),
            createBaseVNode("em", null, "card_verify"),
            createTextVNode(": the Card Verify mode")
          ]),
          createBaseVNode("td", null, "card_tokenize")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "moto_type"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "1: MO payment2: TO paymentParameter that indicates Mail Order/Telephone Order (moto) payment. The following values are available:"),
          createBaseVNode("td", null, "2")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_amount"),
          createBaseVNode("td", null, "Payout,Mandatory for Purchase,Card Verify"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, '"minimum": 1"maximum": 10000000000000for Purchase and Card Tokenize modes:"minimum": 0"maximum": 0for Card Verify mode:Payment amount specified in minor units of the payment currency. Restrictions:'),
          createBaseVNode("td", null, "10000")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_currency"),
          createBaseVNode("td", null, "Payout,Mandatory for Purchase,Card Verify"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Payment currency in ISO 4217 alpha-3 format"),
          createBaseVNode("td", null, "USD")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_description"),
          createBaseVNode("td", null, "Recommended"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Payment description"),
          createBaseVNode("td", null, "Order 3178")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_extra_param"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The parameter that contains extra payment processing settings. For more information regarding this option, you may apply to your Key Account Manager"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_id"),
          createBaseVNode("td", null, "Payout,Mandatory for Purchase,Card Verify"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "Identifier of the payment, must be unique within the project. It is case-insensitive and can contain up to 255 random characters."),
          createBaseVNode("td", null, "order_314")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_merchant_risk"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "This parameter contains the purchase details and the authentication flow which is preferable for the merchant.The value of this parameter is obtained by converting the customer data into a single string by using the Base64 algorithm. For more information, see ."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "payment_methods_options"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "or the payment method selection. For more information, see Methods in the sections on performing payments through Banks of South-East AsiaA string containing the specific display options for the payment widget opening. The data is collected in a JSON object"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "project_id"),
          createBaseVNode("td", null, "Yes"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "Unique ID of your project in the Payment Widget system"),
          createBaseVNode("td", null, "133")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "receipt_data"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, ". For more information, seeA string containing the coded data to send electronic sales receipt to a customer. The data is collected into a JSON object and encoded into Base64"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_address")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout recipient's street address. Must not exceed 99 characters"),
          createBaseVNode("td", null, "Via Dietro Duomo 36")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_card_holder")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The first and last name of the cardholder (as specified on the card). Must not exceed 255 characters"),
          createBaseVNode("td", null, "Fran Petrarca")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_city")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout recipient's city. Must not exceed 25 characters"),
          createBaseVNode("td", null, "Padova")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_country")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout recipient's country code in ISO 3166-1 alpha-2"),
          createBaseVNode("td", null, "IT")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_first_name")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout recipient's first name. Must not exceed 255 characters"),
          createBaseVNode("td", null, "Fran")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_last_name")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout recipient's last name. Must not exceed 255 characters"),
          createBaseVNode("td", null, "Petrarca")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_pan")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The recipient's card number"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_state")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The recipient's country subdivision code (state, province, region, or territory). The value of this parameter is the second element of a code for a subdivision (in ISO 3166-2), without the two-letter country code and the hyphen-minus used as a separator"),
          createBaseVNode("td", null, "34")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_wallet_id")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The wallet number. Must not exceed 64 characters"),
          createBaseVNode("td", null, "WID20071304")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "recipient_wallet_owner")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The first and last name of the wallet owner. Must not exceed 255 characters"),
          createBaseVNode("td", null, "Fran Petrarca")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "recurring"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "A string containingdetails about a COF purchase as a JSON object—if the payment form is opened via the JavaScript library of Platform—or as a string generated as a result of URL encoding—if the payment form is opened via another method. For more information, see the article."),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "recurring_register"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "01"),
            createTextVNode("Parameter that indicates whether this payment should be registered as recurring (allowed values:or)."),
            createBaseVNode("code", null, "merchant.js"),
            createTextVNode("When working with Payment Widget without using thelibrary, a boolean value can be specified in this parameter.")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "1"),
            createTextVNode(": opening in a separate tab"),
            createBaseVNode("em", null, "0not passed"),
            createTextVNode("or: opening as specified previouslyFor more information, see"),
            createBaseVNode("code", null, "merchant.js"),
            createTextVNode("When working with Payment Widget without using thelibrary, a boolean value can be specified in this parameter.A parameter that enables opening of the generated payment widget in a separate tab. The following options are available:")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_fail_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "iframe"),
            createTextVNode(". This mode is used by default"),
            createBaseVNode("em", null, "parent_page**blank_page"),
            createTextVNode(": opening in a new tab. Pop-up blocking should be disabled in the customer browser.The mode for customer redirection when the payment failed. The following options are available:")
          ]),
          createBaseVNode("td", null, "parent_page")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_fail_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "blank_page"),
            createTextVNode("The URL of the page in your project to which the customer is redirected when the payment failed. Redirection occurs automatically without additional actions from customers. If themode is used, the page with the result is displayed on a separate tab, in other modes – is not displayed")
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "http://merchant.site.com",
              target: "_blank",
              rel: "noreferrer"
            }, "http://merchant.site.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_on_mobile"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "1"),
            createTextVNode(": opening in a separate tab"),
            createBaseVNode("em", null, "0not passed"),
            createTextVNode("or: opening as specified previouslyFor more information, see"),
            createBaseVNode("code", null, "merchant.js"),
            createTextVNode("When working with Payment Widget without using thelibrary, a boolean value can be specified in this parameter.A parameter that enables opening of the generated payment widget in a separate tab on mobile devices only. The following options are available:")
          ]),
          createBaseVNode("td", null, "1")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_success_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "iframe"),
            createTextVNode(". This mode is used by default"),
            createBaseVNode("em", null, "parent_page**blank_page"),
            createTextVNode(": opening in a new tab. Pop-up blocking should be disabled in the customer browser.The mode for customer redirection after a successful payment. The following options are available:")
          ]),
          createBaseVNode("td", null, "parent_page")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_success_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createBaseVNode("em", null, "blank_page"),
            createTextVNode("The URL of the page in your project to which the customer is redirected after a successful payment. Redirection occurs automatically without additional actions from customers. If themode is used, the page with the result is displayed on a separate tab, in other modes – is not displayed")
          ]),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "http://merchant.site.com",
              target: "_blank",
              rel: "noreferrer"
            }, "http://merchant.site.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_return_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The URL of the page in your project to which the customer is redirected from payment widget on external provider site at any step before the payment is completed by clicking the return button. For more information about this functionality, refer to the Platform Key Account Manager"),
          createBaseVNode("td", null, [
            createBaseVNode("a", {
              href: "http://merchant.site.com",
              target: "_blank",
              rel: "noreferrer"
            }, "http://merchant.site.com")
          ])
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_tokenize_mode"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, [
            createTextVNode("The following options are available:"),
            createBaseVNode("em", null, "iframe"),
            createTextVNode(". This mode is used by default"),
            createBaseVNode("em", null, "parent_page"),
            createTextVNode("The mode for customer redirection once a token is generated in the Card Tokenize mode")
          ]),
          createBaseVNode("td", null, "parent_page")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "redirect_tokenize_url"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The URL of the page in your project to which the customer is redirected after a successful token generation in the Card Tokenize mode"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "region_code"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The customer country in ISO 3166-1 alpha-2 format. By default the region is determined by the IP address of the customer"),
          createBaseVNode("td", null, "us")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_address")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout sender's street address. Must not exceed 99 characters"),
          createBaseVNode("td", null, "Via Certaldo 18")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_city")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout sender's city. Must not exceed 25 characters"),
          createBaseVNode("td", null, "Florence")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_country")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout sender's country code in ISO 3166-1 alpha-2"),
          createBaseVNode("td", null, "IT")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_first_name")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout sender's first name. Must not exceed 255 characters"),
          createBaseVNode("td", null, "Gio")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_last_name")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The payout sender's last name. Must not exceed 255 characters"),
          createBaseVNode("td", null, "Boccaccio")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_state")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The sender's country subdivision code (state, province, region, or territory). The value of this parameter is the second element of a code for a subdivision (in ISO 3166-2), without the two-letter country code and the hyphen-minus used as a separator"),
          createBaseVNode("td", null, "52")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_wallet_id")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The number (identifier) of the payout sender's wallet. Must not exceed 64 characters"),
          createBaseVNode("td", null, "WID16061313")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "sender_zip")
          ]),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The postal code of the payout sender's address. Must not exceed 255 characters"),
          createBaseVNode("td", null, "50142")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "signature"),
          createBaseVNode("td", null, "Yes"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The signature to be passed in the request to open the payment widget. For more information, see"),
          createBaseVNode("td")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "style_id"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "The identifier assigned to the Payment Widget design style that can be used in addition to the default style when you work with the payment form of the 5th generation (details)"),
          createBaseVNode("td", null, "6123")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "target_element"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The element in which the iframe of the payment widget is embedded in the web page of your project. For more information, see"),
          createBaseVNode("td", null, "pay_button_id")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, "terminal_id"),
          createBaseVNode("td", null, "No"),
          createBaseVNode("td", null, "integer"),
          createBaseVNode("td", null, "when you work with the payment form of the 4th and earlier generationsThe identifier assigned to the terminal with a style of the Payment Widget design that can be used in addition to the default style(details)"),
          createBaseVNode("td", null, "54")
        ]),
        createBaseVNode("tr", null, [
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "uuid")
          ]),
          createBaseVNode("td", null, "Mandatory for Payout"),
          createBaseVNode("td", null, "string"),
          createBaseVNode("td", null, "The identifier received in a callback with information about the payout registration result that must be specified when the payment form is opened in the Payout operation mode. Must not exceed 64 characters"),
          createBaseVNode("td", null, [
            createBaseVNode("code", null, "Lm3Z/2ue9+o5GTY/sRnS+Aag==")
          ])
        ])
      ])
    ], -1)
  ])]);
}
const ppParameters = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ppParameters as default
};
