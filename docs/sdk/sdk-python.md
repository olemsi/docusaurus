# sdk_python

sdk_python is a software development kit for development of web services which are capable of integrating with the Some Platform payment solutions to perform pay-ins by using Payment Widget. This section describes how to use sdk_python to build pay-in experience from inside of your system.

GitHub:PyPI:sdk_python is compatible with Python version 3.5 or higher. You can download sdk_python from GitHub or PyPI:

## What can I do with sdk_python?

Calculate signature and generate request for opening the Payment Widget checkout pageCheck callback signature and extract payment details from callbackssdk_python allows you to do the following:

## What's inside?

sdk_python contains the libraries for development and automated testing, as well as the service files.

## Using sdk_python

To start using sdk_python you need to complete the following tasks:

With any questions regarding usage of sdk_python contact Some Platform the technical support specialists at support@example.com

1. If your company has never obtained any ID or secret key from Some Platform, you need to submit an application for connecting to the Some Platform payment platform.If your company already has an ID and a secret key to sign messages obtained from Some Platform, you need to notify the Some Platform technical support that you want to use sdk_python and consult with the customer support on how to arrange a test run.Make sure you have you have ready your merchant ID and secret key obtained from Some Platform:
2. Install the sdk_python libraries.Import the libraries you need into your system application.Integrate the Some Platform payment solution in your system:
3. **tests**Use test merchant ID and test values for payment parameters from thelibrary.Once testing is complete, request your production merchant ID from Some Platform and put your system in production mode.Test and put your system in production mode.

## Installing and importing libraries

[Python](https://en.wikipedia.org/wiki/Python_(programming_language))You can install the sdk_python libraries manually or automatically with pip, a package-management system used to install and manage software packages written in.

The following steps describe how to install the sdk_python libraries by using pip:

1. [https://pip.pypa.io/en/stable/](https://pip.pypa.io/en/stable/)If you have not yet installed pip, you need to download, install and check settings. For more information, see.
2. pip install sdk_python_lib**Scripts**Pip automatically downloads the sdk_python libraries in thedirectory to enable you to use all the classes provided by the libraries.Navigate into the system directory in command line interface and run the following command:
3. from payment_page_sdk.gate import Gate
from payment_page_sdk.payment import PaymentImport the classes into your project:

## Opening checkout page

The checkout page invocation request consists of a set of parameters, which are signed to secure the data transmitted to the Some Platform payment platform. sdk_python allows you to seamlessly sign parameters and generate requests. To open the Payment Widget checkout page by using sdk_python do the following:

Here is an example of generating a URL for opening an English checkout page. The payment method selection page includes detailed payment information including amount, currency and short payment description.

1. Paymentpayment = Payment('186', 'TEST_1555943554067')
    // Project ID and payment ID and payment ID must be unique within your project scope
payment.payment_amount = 1001
    // Amount in minor currency units
payment.payment_currency = 'EUR'
    //  Currency in ISO-4217 alpha-3 format
payment.payment_description = 'Test payment'
    // Payment description (optional)en_pp_parameters.ditaAll the parameters in this example are required to perform any payment. You can also use any optional parameters available for Payment Widget. For more information about the Payment Widget invocation parameters, see.Create an instance of theclass and specify payment details.
2. `gate`*secret_key*gate = Gate('<>')
    // Secret key you obtained from technical support serviceCreate ainstance and initiate it with the secret key you obtained from  Some Platform. The secret key is required to sign invocation requests.
3. ${empty}payment_url = gate.get_purchase_payment_page_url('', payment)domen_PP/payment?signature=OEKRlLXKStyo
...%3D%3D&amp;payment_id=1555943554067...123Correct the checkout page invocation request contains payment parameters and signature (abbreviated):*pp_host*Instead of <> use your domain name for Payment Widget. Ask your account manager or support service for your Payment Widget domain name, if you don't know it yet.*domen_PP_host*Instead ofuse your domain name for Payment Widget. Ask the Some Platform technical support for your Payment Widget domain name, if you don't know it yet.Generate the checkout page invocation request:
4. Use the request in your system code to open the checkout page.

## Processing callbacks

**HTTP POSTJSONJSON**The Some Platform payment platform sends payment results to the callback URL you specified when connecting to Some Platform . Callback is anrequest that contains response data informat. To extract payment information from thestring do the following:

By using sdk_python, you can automatically check validity of callback signature. Below, you will find an example of callback that includes signature and payment results.

1. `Gate`*secret_key*gate = Gate('<>')Create an instance ofwith the secret key, if you did not it earlier.
2. `Callback`**JSON**Create an instance ofby using thestring from the callback obtained from  Some Platform:callback = gate.handle_callback(data)
3. Use the following methods for extracting callback information. You can get either full payment information or request specific payment parameters:callback.get_payment_id()            // Getting payment ID
callback.get_payment_status()        // Getting payment status
callback.get_payment()               // Getting payment body

## Related links

- en_pp_callbacks.dita
- en_pp_payment_model.dita

## Related links

- en_apac_callbacks.dita
- en_apac_purchase.dita
- en_apac_payout.dita
