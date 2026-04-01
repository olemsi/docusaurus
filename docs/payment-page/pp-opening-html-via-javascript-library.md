# Opening via JS library

While the JavaScript library provided by Platform is primarily intended to simplify opening of the payment form in a modal window and in an iframe element, it can also be used for opening the form as a separate HTML page. For example, you can set the form to open as a separate page on mobile devices and in a modal window on other devices.

`merchant.jsEPayWidgethttps://paymentpage.platform.dev/shared/merchant.css`To open Payment Widget as a separate page using the JavaScript libraryfrom Platform, link the library on the client side of the web service and use the corresponding calls to theobject. Beside that, if you plan to use the JavaScript library for other options for the Payment Widget opening, you should also link the CSS library available at.

`EPayWidgetconfigObj`In the calls to theobject, theobject must contain one of the following parameters:

`target_element`If these parameters are not specified or not applicable for the device in use, the payment form opens either in a modal window or in an iframe element (if this has been specified via the corresponding parameter).

`EPayWidget`Apart from these aspects, the calls to theobject for opening the form in a separate tab must be made according to the following general conditions that are also relevant for other options to open the payment form:

`bindrun`When either of the methods (and) is used, the HTML code of the web service page looks as follows.

1. `bindEPayWidget.bind&lt;pay_button_id>`()—if the payment form should be opened with a button click (with the button identifierspecified).`runEPayWidget.run`()—if the payment form should be opened upon any other event in the user interface.Each call can be made via one of the two methods:
2. `configObj`The information about the parameters used and signature generation is provided in the following articles:  and .Each call must contain the JavaScript objectwith the parameters of the payment form opening and the signature for these parameters.
3. `method`If necessary, any call can also contain an HTTP request method ()—POST or GET. If nothing is specified, the GET method is used by default.
4. The information about such handler functions is provided in the article .Additionally, any call can contain functions for handling the information about the customer's actions.

::: warning
Keep in mind that to ensure correct behaviour of the payment form, you must link the Platform CSS library via the CDN (Content Delivery Network). Storing this library locally is not allowed.
:::

::: tip
If the request for opening the payment form contains the parameters to open Payment Widget in a separate tab and in an iframe element, opening the form in a separate tab is given the priority.
:::
