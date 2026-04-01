function getPlatform() {
    let userDeviceArray = [
        {device: 'android', platform: /Android/},
        {device: 'iphone', platform: /iPhone/},
        {device: 'ipad', platform: /iPad/},
        {device: 'symbian', platform: /Symbian/},
        {device: 'windows-phone', platform: /Windows Phone/},
        {device: 'tablet-os', platform: /Tablet OS/},
        {device: 'linux', platform: /Linux/},
        {device: 'windows', platform: /Windows NT/},
        {device: 'macintosh', platform: /Macintosh/}
    ];
    let platform = navigator.userAgent;
    for (let i in userDeviceArray) {
        if (userDeviceArray[i].platform.test(platform)) {
            return userDeviceArray[i].device;
        }
    }
    return platform;
}
function getBrowser(){
    let browser = "";
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        browser = "firefox";
    }
    if (navigator.userAgent.toLowerCase().indexOf('safari') != -1) {
        if (navigator.userAgent.toLowerCase().indexOf('chrome') != -1) {
            browser = "chrome";
        } else {
            browser = "safari";
        }
    }
    return browser;
}

$(document).ready(function(){
    $("body").addClass(`${getPlatform()} ${getBrowser()}`)
});
