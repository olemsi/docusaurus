# Setup

## Integration steps

To integrate the web service with the Some Platform payment platform by using sdk_ui_ios:

If you have any questions about working with sdk_ui_ios, contact the Some Platform technical support specialists (support@example.com

1. If you did not yet obtained a project identifier and a secret key from Some Platform, submit the application for integrating with the Some Platform payment platform.If your company has obtained a project identifier and a secret key for interacting with Some Platform, inform the technical support specialists about the company's intention to integrate by using sdk_ui_ios and coordinate the procedure of testing and launching the functionality.Address the following organizational issues of interaction with Some Platform:
2. Download and link the sdk_ui_ios libraries.Ensure the collection of data necessary for opening the payment form. The minimum data set needed in order to open the payment form consists of the project, payment, and customer identifiers as well as of the payment amount and currency.Ensure signature generation for the data on the server side of the mobile application.Ensure the receipt of and the response to the notifications from sdk_ui_ios as well as the receipt of and the response to the callbacks from the payment platform on the web service side.Complete the following preliminary technical steps:
3. test cardsFor testing, use the test project identifier and the details of.For switching to the production mode, change the value of the test project identifier to the value of the production project identifier received from Some Platform.With the technical support specialists, coordinate the timeline and the main steps of integrating, testing (including testing available payment methods), and launching the solution.

## Importing libraries in Swift

To add a library into your iOS app:

1. `sdk_ios_frame_framework`Copy thefile in the project folder of you iOS app.
2. Open the target of your project.**GeneralEmbedded Binaries**Select.**+**Click.**Add Other**Click.`sdk_ios_frame_framework`**Add**Select thefile and click.Add the library into your project. When using Xcode 12, you need to do the following:
3. **NSCameraUsageDescriptionInfo.plist**`permission is needed in order to scan card`Add keywith valueto thefile.
4. **NSLocationWhenInUseUsageDescriptionInfo.plist**`fraud prevention`**NSLocationWhenInUseUsageDescription**The Some Platform libraries code does not request user location if the request is not initiated by the host app, but the App Store requires that thekey value is not empty.If your iOS app requests user location information, you can skip this step.If your iOS app does not use user location information, add thekey with thevalue in thefile.
5. **Privacy - Photo Library Usage DescriptionPrivacy - Photo Library Additions Usage DescriptionInfo.plist**If the iOS app does not have permission to save data on the mobile device, addandkeys with values to thefile. The values specified are shown to the customer in the permission request message.

## Importing libraries in Objective-C

To add a library into your iOS app:

1. `sdk_ios_frame_new`Copy thefile in the project folder of you iOS app.
2. Open the target of your project.**GeneralEmbedded Binaries**Select.**+**Click.**Add Other**Click.`sdk_ios_frame_new`**Add**Select thefile and click.**Build Settings**Select.**Always embed swift embedded librariesYes**Setto.Add the library into your project. When using Xcode 12, you need to do the following:
3. **NSCameraUsageDescriptionInfo.plist**`permission is needed in order to scan card`Add keywith valueto thefile.
4. **NSLocationWhenInUseUsageDescriptionInfo.plist**`fraud prevention`**NSLocationWhenInUseUsageDescription**The Some Platform libraries code does not request user location if the request is not initiated by the host app, but the App Store requires that thekey value is not empty.If your iOS app requests user location information, you can skip this step.If your iOS app does not use user location information, add thekey with thevalue in thefile.
5. **Privacy - Photo Library Usage DescriptionPrivacy - Photo Library Additions Usage DescriptionInfo.plist**If the iOS app does not have permission to save data on the mobile device, addandkeys with values to thefile. The values specified are shown to the customer in the permission request message.

## Importing libraries via Cocoapods

To add a library into your iOS app:

1. **Podfile**target 'App' do
  # Pods for App
  pod 'sdk_ui_ios_host_first_capSDK_UI', '2.0.0'
endOpen thefile and add the following strings:
2. **NSCameraUsageDescriptionInfo.plist**`permission is needed in order to scan card`Add keywith valueto thefile.
3. **NSLocationWhenInUseUsageDescriptionInfo.plist**`fraud prevention`**NSLocationWhenInUseUsageDescription**The Some Platform libraries code does not request user location if the request is not initiated by the host app, but the App Store requires that thekey value is not empty.If your iOS app requests user location information, you can skip this step.If your iOS app does not use user location information, add thekey with thevalue in thefile.
4. **Privacy - Photo Library Usage DescriptionPrivacy - Photo Library Additions Usage DescriptionInfo.plist**If the iOS app does not have permission to save data on the mobile device, addandkeys with values to thefile. The values specified are shown to the customer in the permission request message.

## Signature generation

detailsen_signature_intro.ditaMake sure that the data is signed on the server side of the web service with the use of the secret key received from Some Platform. To work with the signature, you can use ready-to-use components, such as language-specific SDKs for web services (), or your own in-house solutions. The procedure of working with the signature is described in.
