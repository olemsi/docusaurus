$(document).ready(function(){
    //подложка
    if($(".side-menu__layout").length==0) {
        $(".helpful").before("<div class='side-menu__layout'></div>");
    }
    //обработка нажатия кнопок
    $(".side-menu-button-left").on("click",function(){
        toggleLeftMenu();
        if(window.innerWidth<1200 && !$("body").hasClass("right-side-menu-close")){
            toggleRightMenu();
        }
    });
    $(".side-menu-button-right").on("click",function(){
        toggleRightMenu();
        if(window.innerWidth<1200 && !$("body").hasClass("left-side-menu-close")){
            toggleLeftMenu();
        }
    });
    //обновляем статус меню при загрузке страницы
    setMenusStateOnLoad()

    //переключатель левого меню
    function toggleLeftMenu(){
        let bodyElement = $("body");
        if(bodyElement.hasClass("left-side-menu-close")){
            bodyElement.removeClass("left-side-menu-close");
            sessionStorage.setItem("docLeftMenu","open");
        }
        else{
            bodyElement.addClass("left-side-menu-close");
            sessionStorage.setItem("docLeftMenu","close");
        }
    }
    //переключатель правого меню
    function toggleRightMenu(){
        let bodyElement = $("body");
        if(bodyElement.hasClass("right-side-menu-close")){
            bodyElement.removeClass("right-side-menu-close");
            sessionStorage.setItem("docRightMenu","open");
        }
        else{
            bodyElement.addClass("right-side-menu-close");
            sessionStorage.setItem("docRightMenu","close");
        }
    }

    //закрытие левого меню при загрузке страницы
    function closeOnLoadLeftMenu() {
        let bodyElement = $("body");
        let sidebar = $(".sidebar");
        let whTopicToc = $("#wh_topic_toc");
        sidebar.addClass("no-transition");
        whTopicToc.addClass("no-transition");
        bodyElement.addClass("left-side-menu-close");
        sidebar.removeClass("no-transition");
        whTopicToc.removeClass("no-transition");
        sessionStorage.setItem("docLeftMenu","close");
    }
    //закрытие правого меню при загрузке страницы
    function closeOnLoadRightMenu() {
        let bodyElement = $("body");
        bodyElement.addClass("right-side-menu-close");
        sessionStorage.setItem("docRightMenu","close");
    }
    //закрытие левого меню
    function simpleCloseLeftMenu() {
        let bodyElement = $("body");
        let sidebar = $(".sidebar");
        let whTopicToc = $("#wh_topic_toc");
        sidebar.addClass("no-transition");
        whTopicToc.addClass("no-transition");
        bodyElement.addClass("left-side-menu-close");
        sidebar.removeClass("no-transition");
        whTopicToc.removeClass("no-transition");
    }
    //закрытие правого меню
    function simpleCloseRightMenu() {
        let bodyElement = $("body");
        bodyElement.addClass("right-side-menu-close");
    }
    //открытие левого меню
    function openLeftMenu() {
        let bodyElement = $("body");
        bodyElement.removeClass("left-side-menu-close");
    }
    //открытие правого меню
    function openRightMenu() {
        let bodyElement = $("body");
        bodyElement.removeClass("right-side-menu-close");
    }

    function instantClosing(){
        $("body").addClass("left-side-menu-transition-disable");
        setTimeout(function () {
            $("body").removeClass("left-side-menu-transition-disable");
        }, 500);
    }

    function setMenusStateOnLoad(){
        if($("#wh_topic_toc").length==0){
            $(".side-menu-button-right").addClass("button-disable");
            $("body").addClass("empty-right-menu");
            if(!$("body").hasClass("right-side-menu-close")){
                instantClosing();
                simpleCloseRightMenu();
            }
        }
        if($(".new-left-side-menu__list-container_first-level").text().trim()==""){
            $(".side-menu-button-left").addClass("button-disable");
            $("body").addClass("empty-left-menu");
            if(!$("body").hasClass("left-side-menu-close")){
                instantClosing();
                simpleCloseLeftMenu();
            }
        }

        let width = $(window).width();
        if(sessionStorage.getItem("docLeftMenu")=="close" && !$("body").hasClass("empty-left-menu")){
            closeOnLoadLeftMenu();
        }
        if(sessionStorage.getItem("docRightMenu")=="close" && !$("body").hasClass("empty-right-menu")){
            closeOnLoadRightMenu()
        }
        if(sessionStorage.getItem("docRightMenu")==null){
            //закрываем меню на мобильном экране
            if (width >= '1280' && width < '1440'){
                simpleCloseRightMenu();
            }
        }
        //закрываем меню на планшетном экране
        if (width < '1280'){
            simpleCloseLeftMenu();
            simpleCloseRightMenu();
        }
    }
    //статус меню при ресайзе с планшета согласно сохранению
    function setMenusStateOnResize(){
        if(sessionStorage.getItem("docLeftMenu")=="close"){
            simpleCloseLeftMenu();
        }
        else{
            if(!$("body").hasClass("empty-left-menu")) {
                openLeftMenu();
            }
        }
        if(sessionStorage.getItem("docRightMenu")=="close"){
            simpleCloseRightMenu()
        }
        else{
            if(window.innerWidth >= 1440 || sessionStorage.getItem("docRightMenu")!="close") {
                if(!$("body").hasClass("empty-right-menu")) {
                    openRightMenu();
                }
            }
        }
    }

    $("body").addClass("left-side-menu-transition-disable");
    setTimeout(function (){
        $("body").removeClass("left-side-menu-transition-disable");
    },500);


    function closeSideMenuOnTabs(instant){
        //закрытие на планшете и меньше
        if(instant) {
            instantClosing();
        }
        if(!$("body").hasClass("empty-right-menu")){
            simpleCloseRightMenu();
        }
        if(!$("body").hasClass("empty-left-menu")){
            simpleCloseLeftMenu();
        }
    }
    window.closeSideMenuOnTabs = closeSideMenuOnTabs;

    //закрытие при ресайзе из десктопа в планшетный вид
    $(window).on("resize", function(){
        let body = document.querySelector('body');
        let prevWindowWidth = body.dataset.windowWidth;
        body.dataset.windowWidth = window.innerWidth;
        if(prevWindowWidth > window.innerWidth && prevWindowWidth >= 1280 && window.innerWidth <= 1279){
            closeSideMenuOnTabs(true);
            return;
        }
        if( typeof(prevWindowWidth) == "undefined" && window.innerWidth <= 1279){
            closeSideMenuOnTabs(true);
            return;
        }
        //статус меню при ресайзе с планшета согласно сохранению
        if(window.innerWidth >= 1280){
            setMenusStateOnResize()
        }
    });

    //метка о готовности боковых меню для показа
    $("body").addClass("page-ready-to-show");

    setTimeout(()=>{
        $("body").removeClass("button-up-no-transition");
    },1000)

    //закрытие по нажатию на серую подложку
    $(".side-menu__layout").on("click touch",function(){
        simpleCloseRightMenu();
        simpleCloseLeftMenu();
    })

    //обработка ctrl+f5
    let pressedKeys = [];
    document.onkeydown = function(e) {
        if(e.keyCode==17 || e.keyCode == 116){
            if(pressedKeys.indexOf(e.keyCode)<0){
                pressedKeys.push(e.keyCode);
            }
            if(pressedKeys.indexOf(17)>-1 && pressedKeys.indexOf(116)>-1){
                sessionStorage.removeItem("docRightMenu");
                sessionStorage.removeItem("docLeftMenu");
            }
        }
    };
    document.onkeyup = function(e) {
        if(e.keyCode==17 || e.keyCode == 116){
            let index = pressedKeys.indexOf(e.keyCode);
            if(index > -1){
                pressedKeys.splice(index,1);
            }
        }
    };
});