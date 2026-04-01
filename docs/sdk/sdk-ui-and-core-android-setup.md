# Setup

## Integration steps

To integrate the web service with the Some Platform payment platform by using sdk_ui_android:

If you have any questions about working with sdk_ui_android, contact the Some Platform technical support specialists (support@example.com

1. If your company has not obtained a project identifier and a secret key for interacting with Some Platform, submit the application for connecting to the Some Platform payment platform.If your company has obtained a project identifier and a secret key for interacting with Some Platform, inform the technical support specialists about the company's intention to integrate by using sdk_ui_android and coordinate the procedure of testing and launching the functionality.Address the following organizational issues of interaction with Some Platform:
2. Download and link the sdk_ui_android libraries.Ensure the collection of data necessary for opening the payment form. The minimum data set needed in order to open the payment form consists of the project, payment, and customer identifiers as well as of the payment amount and currency.Ensure signature generation for the data on the server side of the mobile application.Ensure the receipt of and the response to the notifications from sdk_ui_android as well as the receipt of and the response to the callbacks from the payment platform on the web service side.Complete the following preliminary technical steps:
3. test cardsFor testing, use the test project identifier and the details of.For switching to the production mode, change the value of the test project identifier to the value of the production project identifier received from Some Platform.With the technical support specialists, coordinate the timeline and the main steps of integrating, testing (including testing available payment methods), and launching the solution.

## Libraries installation

For the mobile applications developed for Android version 5.0 or later, linking the sdk_ui_android libraries via MavenCentral is supported. To link the libraries:

1. `build.gradle.kts`Open themodule in the application.
2. `mavenCentralrepositories`allprojects {
    repositories {
        google()
        mavenCentral()
    }
}Specify therepository in thesection:
3. `dependencies`implementation "sdk_ui_android_host_domain:msdk-ui:LATEST_VERSION"Add the following code in thesection:

## Signature generation

detailsen_signature_intro.ditaMake sure that the data is signed on the server side of the web service with the use of the secret key received from Some Platform. To work with the signature, you can use ready-to-use components, such as language-specific SDKs for web services (), or your own in-house solutions. The procedure of working with the signature is described in.
