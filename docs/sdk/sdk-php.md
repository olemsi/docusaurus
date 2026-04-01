# sdk_php

sdk_php is a software development kit for development of web services which are capable of integrating with the Some Platform-based payment solutions to perform pay-ins by using Payment Widget. This section describes how to use sdk_php to build pay-in experience from inside of your system.

GitHub:Packagist:sdk_php is compatible with PHP version up to 7.2. You can download sdk_php from GitHub or Packagist:

## What can I do with sdk_php?

Calculate signature and generate request for opening the Payment Widget checkout pageCheck callback signature and extract payment details from callbackssdk_php allows you to do the following:

## What's inside?

sdk_php contains the following:

- **src**—the library for development
- **tests**—the library for automatic testing
- **composer.json**—the script for importing libraries
- **The service files**

## Using sdk_php

To start using sdk_php you need to complete the following tasks:

With any questions regarding usage of sdk_php contact the Some Platform technical support specialists at support@example.com

1. If your company has never obtained any ID or secret key from Some Platform, you need to submit an application for connecting to Some Platform.If your company already has an ID and a secret key to sign messages obtained from Some Platform, you need to notify Some Platform customer support that you want to use sdk_php and consult with the customer support on how to arrange a test run.Make sure you have you have ready your merchant ID and secret key obtained from the Some Platform:
2. Install the sdk_php libraries into a directory inside your project.Import the libraries you need into your system application.Integrate the Some Platform payment solution in your system:
3. **tests**Use test merchant ID and test values for payment parameters from thelibrary.Once testing is complete, request your production merchant ID from Some Platform and put your system in production mode.Test and put your system in production mode.

## Installing and importing libraries

You can install the sdk_php libraries manually or automatically with Composer, a dependency manager for PHP programming language. Composer can download and install the libraries required for a project, as well as generate a script for importing the libraries.

The following steps describe how to install the sdk_php libraries by using Composer:

1. [https://getcomposer.org/](https://getcomposer.org/)If you have not yet installed Composer, you need to download, install and check settings. For more information, see.
2. composer require sdk_php_lib/paymentpage-sdk:dev-main**vendorautoload.php**Navigate into the system source code directory in command line interface and run the following command:Composer automatically downloads the sdk_php in thesub-directory and creates thescript required to enable you to use all the classes provided by the libraries.
3. **autoload.php**require __DIR__.'../../vendor.autoload.php';Include thescript into your system project:

## Opening checkout page

The checkout page invocation request consists of a set of parameters, which are signed to secure the data transmitted to the Some Platform payment platform. sdk_php allows you to seamlessly sign parameters and generate requests. To open the Payment Widget checkout page by using sdk_php do the following:

Here is an example of generating a URL for opening an English checkout page. The payment method selection page includes detailed payment information including amount, currency and short payment description while the data input page includes countdown timer.

1. `Payment`$payment = new sdk_php_lib\Payment('186', 'TEST_1555943554067');
    // Project ID and payment ID and payment ID must be unique within your project scope
$payment->setPaymentAmount(1000)->setPaymentCurrency('EUR');
    // Amount in minor currency units and currency in ISO-4217 alpha-3 format
$payment->setPaymentDescription('Test payment');
    // Payment description (optional)en_pp_parameters.ditaAll the parameters in this example are required to perform any payment. You can also use any optional parameters available for Payment Widget. For more information about the Payment Widget invocation parameters, see.Create an instance of theclass and specify payment details.
2. `gate`*secret_key*$gate = new sdk_php_lib\Gate('<>');
    // Secret key you obtained from technical support serviceCreate ainstance and initiate it with the secret key you obtained from the Some Platform technical support specialists. The secret key is required to sign invocation requests.
3. ${empty}$url = $gate->getPurchasePaymentPageUrl(, $payment);domen_PP/payment?signature=OEKRlLXKStyo
...%3D%3D&amp;payment_id=1555943554067...123*pp_host*Instead of <> use your domain name for Payment Widget. Ask your account manager or support service for your Payment Widget domain name, if you don't know it yet.*domen_PP_host*Instead ofuse your domain name for Payment Widget. Ask the Some Platform technical support for your Payment Widget domain name, if you don't know it yet.Correct the checkout page invocation request contains payment parameters and signature (abbreviated):Generate the checkout page invocation request:
4. Use the request in your system code to open the checkout page.

## Processing callbacks

The Some Platform payment platform sends payment results to the callback URL you specified when connecting to Some Platform. Callback is an HTTP POST request that contains response data in JSON format. To extract payment information from a JSON string do the following:

By using sdk_php, you can automatically check validity of callback signature. Below, you will find an example of callback that includes signature and payment results.

1. `Gate`*secret_key*$gate = new sdk_php_lib\Gate('<>');Create an instance ofwith the secret key, if you did not it earlier.
2. `Callback`**JSON**Create an instance ofby using thestring from the callback obtained from the Some Platform payment platform:$callback = $gate->handleCallback($data);
3. Use the following methods to obtain the callback information. You can get either full payment information or request specific payment parameters:Callback::getPaymentId();            // Getting payment ID
Callback::getPaymentStatus();        // Getting payment status
Callback::getPayment();              // Getting payment body

## Related links

- en_pp_callbacks.dita
- en_pp_payment_model.dita

## Related links

- en_apac_callbacks.dita
- en_apac_purchase.dita
- en_apac_payout.dita
