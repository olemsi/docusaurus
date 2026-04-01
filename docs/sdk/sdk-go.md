# sdk_go

sdk_go is a software development kit for development of web services capable of integrating with the Some Platform-based payment solutions to perform pay-ins by using Payment Widget. This section describes how to use sdk_go to build pay-in experience from inside of your system.

sdk_go is compatible with Go version 1.8 or later. You can download sdk_go from Git:.

## What can I do with sdk_go?

sdk_go allows you to do the following:

- Calculate signature and generate request for opening the Payment Widget checkout page
- Check callback signatures and extract payment details from callbacks

## What's inside?

sdk_go contains the libraries for development and automated testing, as well as the service files.

## Using sdk_go

If your company has never obtained any ID or secret key from Some Platform, you need to submit an application which will connect to Some Platform.If your company already has an ID and a secret key to sign messages obtained from Some Platform, you need to notify the Some Platform technical support specialists that you want to use sdk_go and consult with the customer support on how to arrange a test run.Make sure you have ready your merchant ID and secret key obtained from Some Platform.Install the sdk_go libraries into a directory inside your project.Import the libraries you need into your system application.Integrate the Some Platform-based payment solution in your system:Request test card numbers and test project ID from Some Platform, debug and test your system.Once testing is complete, request your production project ID from Some Platform and put your system in production mode.Test and put your system in production mode.To start using sdk_go you need to complete the following tasks:

With any questions regarding usage of sdk_go contact the Some Platform technical support specialists at support@example.com

## Installing and importing libraries

You can install the sdk_go libraries manually or by using automated procedures supported by the development environment you use.

The following steps describe how to manually install the sdk_go libraries.

1. $GOPATH$GOPATH$GOROOTIf no theenvironment variable is set, you need to set one. Theis used to specify directories outside ofthat contain the source for Go projects and their binaries.
2. go get sdk_go_github_short$GOPATHThe command downloads the sdk_go libraries in thedirectory to enable you to use all the classes provided by the libraries.Run the following command in command line of your operating system:
3. `import`import "sdk_go_github_short"Import the sdk_go into your system source code insection by running the following command:

## Opening checkout page

The checkout page invocation request consists of a set of parameters, which are signed to secure the data transmitted to Some Platform. sdk_go allows you to seamlessly sign parameters and generate requests. To open the Payment Widget checkout page by using sdk_go do the following:

Here is an example of generating a URL for opening an English checkout page. The payment method selection page includes detailed payment information including amount, currency and short payment description.

1. `payment`payment := paymentpage.NewPayment(186, "TEST_1555943554067")
          // Project ID and payment ID, must be unique within your project scope
payment.SetParam(paymentpage.ParamPaymentCurrency, "EUR")
          // Amount in minor currency units
payment.SetParam(paymentpage.ParamPaymentAmount, 1000)
          // Currency in the ISO-4217 alpha-3 format
payment.SetParam(paymentpage.ParamPaymentDescription, "Test payment")
          // Payment description (optional)en_pp_parameters.ditaAll the parameters in this example are required to perform any payment. You can also use any optional parameters available for Payment Widget. For more information about the Payment Widget invocation parameters, see.Create an instance of theclass and specify payment details.
2. `gate`*secret_key*gate := paymentpage.NewGate("<>")
   // Secret key you obtained from technical support serviceCreate ainstance and initiate it with the secret key you obtained from Some Platform  technical support specialists. The secret key is required to sign invocation requests.
3. paymentPageUrl := gate.GetPaymentPageUrl(${empty}, *payment)${empty}paymentPageUrl := gate.GetPaymentPageUrl(, *payment)domen_PP/payment?signature=OEKRlLXKStyo
...%3D%3D&amp;payment_id=1555943554067...123*pp_host*Instead of <> use your domain name for Payment Widget. Ask your account manager or support service for your Payment Widget domain name, if you don't know it yet.*domen_PP_host*Instead ofuse your domain name for Payment Widget. Ask the Some Platform technical support for your Payment Widget domain name, if you don't know it yet.The checkout page invocation request must contain payment parameters and signature (abbreviated):Generate the checkout page invocation request:
4. Use the request in your system code to open the checkout page.

## Processing callbacks

**HTTP POSTJSONJSON**Some Platform sends payment results to the callback URL you specified when integrating with Some Platform. Callback is anrequest that contains response data informat. To extract payment information from the responsestring do the following:

1. `gate`*secret_key*gate := paymentpage.NewGate("<>")Create an instance ofand initiate it with the secret key, if you did not it earlier:
2. `callback`**JSON**callback, err := gate.HandleCallback(data)`error`If signature is incorrect or extracting payment details from callback results in errors, aninstance is returned.Create an instance ofby using thestring from the callback obtained from Some Platform:
3. callback.GetPaymentId()     // Getting payment ID
callback.GetPaymentStatus()         // Getting payment status
callback.GetPayment()               // Getting payment bodyBy using sdk_go, you can automatically check validity of callback signature. Below, you can find an example of callback that includes signature and payment results.Use the following methods for extracting callback information. You can get either full payment information or request specific payment parameters:

## Related links

- en_pp_callbacks.dita
- en_pp_payment_model.dita

## Related links

- en_apac_callbacks.dita
- en_apac_purchase.dita
- en_apac_payout.dita
