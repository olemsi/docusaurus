# Importing libraries

## Importing libraries in your project

`sdk_android_lib``sdk_android_lib`Download thefile.`sdk_android_lib`Add thefile into your project.**FileNewNew Module****Import .JAR/.AAR Package**`sdk_android_lib`To do this is in Android Studio 3.0, go to, select, browse to thefile, and select the file.`build.gradle)`Open your application module (.`android {}`compileOptions {
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
}In thesection, add the following compilation parameters:`dependencies {}`implementation project(path: ':sdk_android_import')
 
implementation 'io.card:android-sdk:5.5.1'
 
implementation 'com.squareup.retrofit2:retrofit:2.3.0'
implementation 'com.squareup.okhttp3:logging-interceptor:3.10.0'
implementation 'androidx.appcompat:appcompat:1.0.0'
implementation 'androidx.legacy:legacy-support-v4:1.0.0'
implementation 'androidx.recyclerview:recyclerview:1.0.0'

implementation 'com.squareup.retrofit2:converter-gson:2.3.0'
implementation 'com.google.code.gson:gson:2.8.4'

implementation 'org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version'

implementation 'androidx.lifecycle:lifecycle-viewmodel:2.0.0'
implementation 'androidx.lifecycle:lifecycle-extensions:2.0.0'
implementation 'kz.sdk_android_brand_small.msdk:sdk_android_host_small-sdk-android:[LATEST_VERSION]'
annotationProcessor 'androidx.lifecycle:lifecycle-compiler:2.0.0'`dependencies {}`If some of the dependencies are already added in thesection, do not add them again.In thesection, add the following dependencies:`AndroidManifest.xml`<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />Add the following permissions in thefile:Listed below are the instructions on how to import thelibrary into your application.
