# Additional aspects

## Monitoring of payment processing

testAfter processing severalpayments, you can explore how to monitor the overall payment situation. For this, use the register and the payment information tabs in Dashboard.

With questions about working with this interface, and about other issues, refer to the documentation and contact our specialists.

## Refunds

When you need to refund a purchase, Dashboard can be used as well. When testing the work with the payment form, you can try to make full and partial refunds via the payment information tabs.

To delve into the topic about working with refunds, including mass refunds, you can use the separate article. Besides, knowing about refunds via Gate can be useful.

## UX capabilities of the form

The work with Payment Widget can be supplemented by various capabilities that include managing the form’s look and behavior—for example, setting the relevant language, filtering payment methods, or managing the ways of returning the customer to the web service. Some of such capabilities can be set up only via the Platform specialists, others can be applied without the anyone’s involvement, just via Dashboard or by sending additional parameters in the requests for opening Payment Widget.

For testing the Payment Widget operation, we recommend that you try the following:

- *Customise the payment form with the help of the Payment Widget Designer***Projects**For this, in thesection of the Dashboard interface, use the tools of thetab (for more information, see Customisation)..
- *Try opening the payment form in different languages*`language_code`For opening Payment Widget in a specific language, this language code (in the two-letter ISO 639-1 alpha-2 format) should be sent as the value of the corresponding parameter—. The list of the languages supported by Platform is provided here..
- *Return the customer to the web service after payment processing***ProjectsRedirect URLs**`merchant_success_urlmerchant_fail_url`After the payment processing and depending on the payment result, the customer can be returned to different pages of the web service. The URLs of such pages can be specified in thesection of the Dashboard interface (in thetab) or sent in certain requests as the values of the parametersand..
- *Apply the capabilities to suit your needs*The information about different capabilities is provided in the overview and in the specialised section, and the list of the parameters for opening the form is provided in the separate article. All questions, as usual, can be forwarded to our specialists..

## Testing

When the payment form is opened in the production mode, it is intended to be used by the customer. In the test mode, you can put yourself in the customer's shoes and test various purchase scenarios as if you were paying for something. The key question here—what credentials should be specified?

*specialrandom*In the test project, there are two available types of payment credentials:test credentials, which allow you to test predefined payment scenarios, andrealistic credentials, which allow you to additionally test the payment form operation in various cases.

For bare minimum testing (to process payments according to the shortest scenarios, without the emulation of the 3‑D Secure authentication), use the following numbers of test cards:

and various alternative payments, wallets, and other payment instrumentsFor the purposes of the more comprehensive testing, it is possible to use extended test data for card payments (including scenarios with the 3‑D Secure authentication), as well as random data including the credentials of cards. This is safe since all data in the test and the production environment is protected equally, although in the test environment there are no actual payments taking place.

After testing and ensuring the correct work with the form, the basic functions for purchase processing can be considered implemented, and when desired, you can move on to various additional aspects, which can be helpful at the initial stages of working with the payment platform, and to launching the solution operation.

- `4000 0000 0000 0077`—for a purchase to be processed;
- `4111 1111 1111 1111`—for a purchase to be declined.
