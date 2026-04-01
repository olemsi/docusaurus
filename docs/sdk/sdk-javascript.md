# sdk_js

sdk_js is a software development kit for development of web services which are capable of integrating with the Some Platform-based payment solutions to perform pay-ins by using Payment Widget. This section describes how to use sdk_js to build pay-in experience from inside of your system.

sdk_js is compatible with the Node.js 4.x runtime environment for executing JavaScript code. You can download sdk_js from GitHub:.

## What can I do with sdk_js?

Calculate signature and generate request for opening the Payment Widget checkout pageCheck callback signature and extract payment details from callbackssdk_js allows you to do the following:

## What's inside?

sdk_js contains the following:

- **src**—a library for development
- **_tests_**—a library for automatic testing

## Using sdk_js

To start using sdk_js you need to complete the following tasks:

With any questions regarding usage of sdk_js contact the Some Platform technical support specialists at support@example.com

1. If your company has never obtained any ID or secret key from Some Platform, you need to submit an application for connecting to the Some Platform payment platform.If you already have the ID and the secret key to sign messages obtained from Some Platform, you need to notify the Some Platform technical support specialists that you want to use sdk_js and consult with the customer support on how to arrange a test run.Make sure you have you have ready your merchant ID and secret key obtained from Some Platform.
2. Install the sdk_js libraries into a directory inside your project.Import the libraries you need into your system application.Integrate the Some Platform payment solution in your system:
3. **_tests_**Use test merchant ID and test values for payment parameters from thelibrary.Once testing is complete, request your production merchant ID from Some Platform and put your system in production mode.Test and put your system in production mode.

## Installing and importing libraries

You can install the sdk_js libraries manually or automatically with Yarn or npm, package-management systems used to install and manage software packages written in JavaScript.

The following steps describe how to install the sdk_js libraries by using Yarn or npm:

1. [https://yarnpkg.com/en/docs/getting-started](https://yarnpkg.com/en/docs/getting-started)Yarn:[https://docs.npmjs.com/](https://docs.npmjs.com/)npm:If you have not yet installed a package-management system, you need to download, install and check its settings. For more information, see:
2. npm install sdk_js_lib // for Yarn
yarn add sdk_js_lib    // for npmA package-management system automatically downloads the sdk_js libraries in the source code directory to enable you to use all the modules provided by the libraries.Navigate into the system source code directory in command line and run one of the following commands:
3. const { Payment } = require('sdk_js_lib');
const { Callback } = require('sdk_js_lib');Import the modules into your project:

## Opening checkout page

The checkout page invocation request consists of a set of parameters, which are signed to secure the data transmitted to Some Platform. sdk_js allows you to seamlessly sign parameters and generate requests. To open the Payment Widget checkout page by using sdk_js do the following:

Here is an example of generating a URL for opening an English checkout page. The payment method selection page includes detailed payment information including amount, currency and short payment description.

1. `Payment`${empty}*secret_key*const e = new Payment('', '186', '<>');
        // Project ID and Secret key
e.paymentId = 'TEST_1555943554067';
        // Payment ID must be unique within your project scope
e.paymentAmount = 1000;
        // Amount in minor currency units
e.paymentCurrency = 'EUR';
        // Currency in ISO-4217 alpha-3 format
e.paymentDescription = 'Payment description';
       // Payment description (optional)*pp_host*Instead of <> use your domain name for Payment Widget. Ask your account manager or support service for your Payment Widget domain name, if you don't know it yet.*domen_PP_host*Instead ofuse your domain name for Payment Widget. Ask the Some Platform technical support for your Payment Widget domain name, if you don't know it yet.en_pp_parameters.ditaAll the parameters in this example are required to perform any payment. You can also use any optional parameters available for Payment Widget. For more information about the Payment Widget invocation parameters, see.Create an instance of theclass and specify payment details and the secret key you obtained from the Some Platform technical support specialists. The secret key is required to sign invocation requests.
2. const url = e.getUrl();domen_PP/payment?signature=OEKRlLXKStyo
...%3D%3D&amp;payment_id=1555943554067...123Correct the checkout page invocation request contains payment parameters and signature (abbreviated):Generate the checkout page invocation request:
3. Use the request in your system code to open the checkout page.

## Processing callbacks

**HTTP POSTJSONJSON**`req.body`The Some Platform payment platform sends payment results to the callback URL you specified when connecting to Some Platform. Callback is anrequest that contains response data informat in theobject. To extract payment information fromstring do the following:

By using sdk_js, you can automatically check validity of callback signature. Below, you will find an example of callback that includes signature and payment results.

1. `Callback`**JSON***secret_key*const callback = new Callback(<>, req.body);Create an instance ofby using the secret key and thestring from the callback obtained from  Some Platform:
2. The following example contains the methods for extracting callback information in the source code that uses the Express framework:*secret_key*app.post('/payment/callback', function(req, res) {
  const callback = new Callback(<>, req.body);
  if (callback.isPaymentSuccess()) {
    const paymentCont = callback.payment(); // Getting payment contence
    const paymentId = callback.getPaymentId(); // Getting payment ID

    // Add your code for proccessing successful payment
  }
});

## Related links

- en_pp_callbacks.dita
- en_pp_payment_model.dita

## Related links

- en_apac_callbacks.dita
- en_apac_purchase.dita
- en_apac_payout.dita
