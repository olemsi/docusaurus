# Подключение библиотек

## Подключение библиотек к проекту

`sdk_android_lib`Загрузите файл.**FileNewNew Module****Import .JAR/.AAR Package**`sdk_android_lib`Добавьте в проект библиотеки из загруженного файла. В Android Studio 3.0 для этого в меню выберите, а затем выберитеи укажите расположение файла.`build.gradle`Откройте файл модуля приложения ().`android {}`compileOptions {
                sourceCompatibility JavaVersion.VERSION_1_8
                targetCompatibility JavaVersion.VERSION_1_8
                }Добавьте параметры компиляции в раздел:`dependencies {}`implementation project(path: ':sdk_android_import')
 
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
annotationProcessor 'androidx.lifecycle:lifecycle-compiler:2.0.0'Добавьте зависимости в раздел:`AndroidManifest.xml`<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />Добавьте разрешения в файл манифеста.Для подключения библиотек к проекту мобильного приложения необходимо:
