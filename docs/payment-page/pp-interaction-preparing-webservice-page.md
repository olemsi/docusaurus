# Web service setup

## Overview

Before you start using Payment Widget, you need to implement the following functionality in your web service:

, and plug-ins for most popular CMSYou can either develop your own custom solution or use the components Platform offer which include: JavaScript library, specialised SDK for numerous languages. The Platform components make integration much easier and allow you to minimise or even eliminate the need for custom development.

The following table describes functionality supported by different components offered by Platform.

The following section covers various aspects of setting up your web service by using custom solution or specialised components offered by Platform.

- Collection of payment parameters
- Signature generation
- Submission of Payment Widget invocation requests
- Processing callbacks
- Acknowledgement of callbacks reception

|  | JavaScript library | SDKs for web services | Mobile SDKs | CMS Plug-ins |
| --- | --- | --- | --- | --- |
| Parameter collection | – | – | + | + |
| Signature generation | – | + | – | + |
| Submitting request | + | – | + | + |
| Processing callbacks | – | + | – | + |
| Callback acknowledgement | – | – | – | + |

|  | JavaScript library | SDKs for web services |
| --- | --- | --- |
| Parameter collection | – | – |
| Signature generation | – | + |
| Submitting request | + | – |
| Processing callbacks | – | + |
| Callback acknowledgement | – | – |

## Custom solution

If you choose to set up your web service interaction with Payment Widget by using your own custom solution, you need to implement all the functionality both on front end and back end of your web service.

Before you start using Payment Widget, you need to implement all the functionality both on front end and back end of your web service.

1. Implement a web page for collecting data required to invoke the payment form. The minimum required data set includes project ID, payment ID, customer ID, and payment amount and currency.or, if necessary,If you intend to open Payment Widget in modal window or in an iframe, you need to add link to CSS stylesheet () to your HTML page.This stylesheet is required for correct rendering of the payment form. If you choose to open Payment Widget in a separate tab, you will not need to link this stylesheet.Keep in mind that to ensure correct behaviour of the payment form, you must link the Platform CSS library via the CDN (Content Delivery Network). Storing this library locally is not allowed.&lt;head>
...
&lt;!-- Linking CSS stylesheet -->
&lt;link rel="stylesheet" href="" />
...
&lt;/head>If you choose to open Payment Widget in a modal window, you can define CSS styles to customise look and feel of your modal window to comply with your corporate design. If you choose to open Payment Widget in an iframe or in a separate tab, you cannot customise design by using the CSS styles.Implement submission of collected data to the back end and implement accepting and processing responses from the back end.Implement invoking Payment Widget by using the selected method: in a separate tab, in a modal window, or in an iframe.If you open Payment Widget in a modal window or in an iframe, you can handle some events in by implementing the corresponding event handler functions. For more information, see .On the web service front end:
2. Implement accepting and processing responses from the front end.Implement request signature generation.Implement submission of signed parameters set to the front end.Implement accepting—including signature verification and submission of acknowledgements—and processing callbacks from Payment Widget.On the web service back end:

## JavaScript library

The library also allows you to handle customer behaviour events on Payment Widget. For more information, see .The JavaScript library is linked to your web service front end and allows you to open Payment Widget in a modal window or in an iframe.

When using the JavaScript library, you can develop your own custom solution or use web service SDK.You are required to make the following on the web service front end:

- Implement a web page for collecting data required to invoke the payment form. The minimum required data set includes project ID, payment ID, customer ID, and payment amount and currency.
- or, if necessary,or, if necessary,Add link to CSS stylesheet () and the JavaScript library () to your HTML page.Keep in mind that to ensure correct behaviour of the payment form, you must link the Platform CSS and Javascript libraries via the CDN (Content Delivery Network). Storing these libraries locally is not allowed.&lt;head>
...
&lt;!-- Linking CSS stylesheet -->
&lt;link rel="stylesheet" href="" /> 
&lt;!-- Linking JavaScript library -->
&lt;script type="text/javascript" src="">
&lt;/script>
...
&lt;/head>
- If you choose to open Payment Widget in a modal window, you can define CSS styles to customise look and feel of your modal window to comply with your corporate design. If you choose to open Payment Widget in an iframe or in a separate tab, you cannot customise design by using the CSS styles.
- Implement submission of collected data to the back end and implement accepting and processing responses from the back end.
- Implement invoking Payment Widget by clicking a button or command using the selected method: in a modal window and/or in an iframe. In this case, invocation is implemented through the EPayWidget JavaScript object.
- If you open Payment Widget in a modal window or in an iframe, you can handle some events in by implementing the corresponding event handler functions. For more information, see .

## Web service SDK

mobile SDK andAfter you build these SDKs in your web service back end, you will be able to generate signatures for requests and process callbacks. When using web service SDK, you can develop your own custom solution and usethe JavaScript library. You are required to make the following on the web service back end:

For more information about linking and using this component in all available SDKs, see .

- Implement accepting and processing responses from the front end.
- Implement request signature generation by using the SDK libraries.
- Implement submission of signed parameters set to the front end.
- Implement accepting—including signature verification and submission of acknowledgements—and processing callbacks from Payment Widget by using web service SDK.

## Mobile SDK

The mobile SDK are build in mobile client apps and allow them to interact with the payment form adapted for mobile interfaces. When using mobile SDK, you can develop your own custom solution and use web service SDK. You are required to make the following on the web service front end:

For more information about linking and using all available SDKs, see .

- Implement a web page for collecting data required to invoke the payment form. The minimum required data set includes project ID, payment ID, customer ID, and payment amount and currency.
- Implement other functionality by using the SDK libraries.

## Using CMS plug-ins

CMS plug-ins are linked by using administration interface of the corresponding CMS and provide the complete functionality for using Payment Widget. If you choose to use a CMS plug-in, custom development is not required.

for web services for different CMSFor information on how to use CMS plug-ins, see .
