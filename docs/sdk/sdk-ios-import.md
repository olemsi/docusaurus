# Adding library in your project

## Importing libraries in Swift

`sdk_ios_frame_new`Copy thefile in the project folder of you iOS app.Open the target of your project.**GeneralEmbedded Binaries**Select.**+**Click.**Add Other**Click.`sdk_ios_frame_new`**Add**Select thefile and click.Add the library into your project. When using Xcode 12, you need to do the following:**NSCameraUsageDescriptionInfo.plist**`permission is needed in order to scan card`Add keywith valueto thefile.**NSLocationWhenInUseUsageDescriptionInfo.plist**`fraud prevention`**NSLocationWhenInUseUsageDescription**The Some Platform libraries code does not request user location, if the request is not initiated by the host app, but App Store requires that thekey value is not empty.If your iOS app requests user location information, you can skip this step.If your iOS app does not use user location information, add thekey with thevalue in thefile.**Privacy - Photo Library Usage DescriptionPrivacy - Photo Library Additions Usage DescriptionInfo.plist**If the iOS app does not have permission to save data on the mobile device, addandkeys with values to thefile. The values specified are shown to the customer in the permission request message.Listed below are the instructions on how to import a Some Platform library into your iOS app.

## Importing libraries in Objective-C

Listed below are the instructions on how to import a Some Platform library into your iOS app.

1. `sdk_ios_frame_new`Copy thefile in the project folder of you iOS app.
2. Open the target of your project.**GeneralEmbedded Binaries**Select.**+**Click.**Add Other**Click.`sdk_ios_frame_new`**Add**Select thefile and click.**Build Settings**Select.**Always embed swift embedded librariesYes**Setto.Add the library into your project. When using Xcode 12, you need to do the following:
3. **NSCameraUsageDescriptionInfo.plist**`permission is needed in order to scan card`Add keywith valueto thefile.
4. **NSLocationWhenInUseUsageDescriptionInfo.plist**`fraud prevention`**NSLocationWhenInUseUsageDescription**The Some Platform libraries code does not request user location, if the request is not initiated by the host app, but App Store requires that thekey value is not empty.If your iOS app requests user location information, you can skip this step.If your iOS app does not use user location information, add thekey with thevalue in thefile.
5. **Privacy - Photo Library Usage DescriptionPrivacy - Photo Library Additions Usage DescriptionInfo.plist**If the iOS app does not have permission to save data on the mobile device, addandkeys with values to thefile. The values specified are shown to the customer in the permission request message.

## Importing libraries via CocoaPods

Listed below are the instructions on how to import the libraries via CocoaPods.

1. **Podfile**pod 'Paymentpage-sdk-ios'pod 'JetpayHosts-sdk-ios'target 'App' do
  # Pods for AppendOpen thefile and add the following strings:
2. **NSCameraUsageDescriptionInfo.plist**`permission is needed in order to scan card`Add keywith valueto thefile.
3. **NSLocationWhenInUseUsageDescriptionInfo.plist**`fraud prevention`**NSLocationWhenInUseUsageDescription**The Some Platform libraries code does not request user location, if the request is not initiated by the host app, but App Store requires that thekey value is not empty.If your iOS app requests user location information, you can skip this step.If your iOS app does not use user location information, add thekey with thevalue in thefile.
4. **Privacy - Photo Library Usage DescriptionPrivacy - Photo Library Additions Usage DescriptionInfo.plist**If the iOS app does not have permission to save data on the mobile device, addandkeys with values to thefile. The values specified are shown to the customer in the permission request message.
