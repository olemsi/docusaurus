# sdk_java

sdk_java is a software development kit for development of web services which are capable of integrating with the Some Platform-based payment solutions to perform pay-ins by using Payment Widget. This section describes how to use sdk_java to build pay-in experience from inside of your system.

sdk_java is compatible with Java SE Development Kit 8 or higher. You can download sdk_java from GitHub:.

## What can I do with sdk_java?

Calculate signature and generate request for opening the Payment Widget checkout pageCheck callback signatures and extract payment details from callbackssdk_java allows you to do the following:

## What's inside?

**Libraries**for development and automated testing**Code samples**in Javasdk_java contains the following:

## Using sdk_java

If your company has never obtained any ID or secret key from Some Platform, you need to submit an application for connecting to Some Platform.If your company already has an ID and a secret key to sign messages obtained from Some Platform, you need to notify the Some Platform technical support specialists that you want to use sdk_java and consult with the customer support on how to arrange a test run.Make sure you have you have ready your merchant ID and secret key obtained from Some Platform.Install the sdk_java libraries into a directory inside your project.Import the libraries you need into your system application.Integrate the Some Platform payment solution in your system:Request test card numbers and test project ID from Some Platform, debug and test your system.Once testing is complete, request your production project ID from Some Platform and put your system in production mode.Test and put your system in production mode.To start using sdk_java you need to complete the following tasks:

With any questions regarding usage of sdk_java contact the Some Platform technical support specialists at support@example.com

## Installing and importing libraries

You can install the sdk_java libraries manually or by using automated procedures supported by the development environment you use.

The following steps describe how to manually install the sdk_java  libraries.

1. Download sdk_java and pack the SDK files into a JAR file.
2. **libslibs**If your project directory does not contain adirectory, create one and move the JAR file into thedirectory.
3. Import the file into your system project by using the procedures pertinent to your development environment.

## Opening checkout page

The checkout page invocation request consists of a set of parameters, which are signed to secure the data transmitted to Some Platform. sdk_java allows you to seamlessly sign parameters and generate requests. To open the Payment Widget checkout page by using sdk_java do the following:

Here is an example of generating a URL for opening an English checkout page. The payment method selection page includes detailed payment information including amount, currency and short payment description.

1. `Payment`Payment payment = new Payment('186', "pid_1555943554067");
             // Project ID and payment ID
             // Payment ID must be unique within your project scope
payment
      .setParam(Payment.PAYMENT_AMOUNT, 1001) // Amount in minor currency units
      .setParam(Payment.PAYMENT_CURRENCY, "EUR"); // Currency as per ISO-4217 alpha-3
      .setParam(Payment.PAYMENT_DESCRIPTION, "Test payment"); // Payment description (optional)en_pp_parameters.ditaAll the parameters in this example are required to perform any payment. You can also use any optional parameters available for Payment Widget. For more information about the Payment Widget invocation parameters, see.Create an instance of theclass and specify payment details.
2. `gate`*secret_key*Gate gate = new Gate("<>");
   // Secret key you obtained from technical support serviceCreate ainstance and initiate it with the secret key you obtained from the Some Platform technical support specialists. The secret key is required to sign invocation requests.
3. ${empty}String paymentUrl = gate.getPurchasePaymentPageUrl("", payment);domen_PP/payment?signature=OEKRlLXKStyo
...%3D%3D&amp;payment_id=1555943554067...123*pp_host*Instead of <> use your domain name for Payment Widget. Ask your account manager or support service for your Payment Widget domain name, if you don't know it yet.*domen_PP_host*Instead ofuse your domain name for Payment Widget. Ask the Some Platform technical support for your Payment Widget domain name, if you don't know it yet.Correct checkout page invocation request contains payment parameters and signature (abbreviated):Generate checkout page invocation request:
4. Use the request in your system code to open the checkout page.

## Parsing callbacks

The Some Platform payment platform sends payment results to the callback URL you specified when connecting to Some Platform. Callback is an HTTP POST request that contains response data in JSON format. To extract payment information from JSON string do the following:

1. `Gate`*secret_key*Gate gate = new Gate("<>");Create an instance ofwith the secret key, if you did not it earlier.
2. `Callback`**JSON**Create an instance ofby using thestring from the callback obtained from Some Platform:Callback callback = gate.handleCallback(data);
3. Use methods for extracting callback information. You can get either full payment information or request specific payment parameters:By using sdk_java, you can automatically check validity of callback signature. Below, you will find an example of callback that includes signature and payment results.callback.getPaymentId();             // Getting payment ID
callback.getPaymentStatus();         // Getting payment status
callback.getPayment();               // Getting payment body

## Related links

- en_pp_callbacks.dita
- en_pp_payment_model.dita

## Related links

- en_apac_callbacks.dita
- en_apac_purchase.dita
- en_apac_payout.dita
