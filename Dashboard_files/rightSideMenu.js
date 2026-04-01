$(document).ready(function (){
    $("#wh_topic_toc .wh_topic_toc>ul").addClass("scrollbar-outer").scrollbar({
        "disableBodyScroll":true,
        "onScroll":function(y, x){
            let rightMenu = $("#wh_topic_toc");
            if(rightMenu.hasClass("scroll-block")){
                return;
            }
            if(y.maxScroll -1 <= y.scroll){
                $(".wh_topic_toc").addClass("hide-bottom-blur");
            }
            else{
                $(".wh_topic_toc").removeClass("hide-bottom-blur");
            }
            if(y.scroll <= 1){
                $(".wh_topic_toc").addClass("hide-top-blur");
            }
            else{
                $(".wh_topic_toc").removeClass("hide-top-blur");
            }
        }
    });
    //проброс из leftSideMenu.js
    window.setSideMenusHeight();

    $("#wh_topic_toc .scroll-bar").on("mouseenter",function(){
        $(this).parent().addClass("hover");
    });
    $("#wh_topic_toc .scroll-bar").on("mouseleave",function(){
        $(this).parent().removeClass("hover");
    });

    $(".new-right-side-menu__title-marker_child").on("click",function(){
        let container = $(this).parent().parent().children("ul");
        let parent = $(this).parent();

        if (parent.hasClass("opened-node")){
            container.slideUp(300,()=>{
                if(!$("#wh_topic_toc ul.scroll-content").hasClass("scroll-scrolly_visible")){
                    $(".wh_topic_toc").addClass("hide-top-blur");
                }
            });
            parent.removeClass("opened-node");
        }
        else{
            container.slideDown(300,()=>{
                if(!$("#wh_topic_toc ul.scroll-content").hasClass("scroll-scrolly_visible")){
                    $(".wh_topic_toc").addClass("hide-top-blur");
                }
            });
            parent.addClass("opened-node");
        }
    });

    $("#wh_topic_toc .topic-title a, #wh_topic_toc .section-title a,#wh_topic_toc .topic-title .new-right-side-menu__title-marker_child, #wh_topic_toc .section-title .new-right-side-menu__title-marker_child,#wh_topic_toc .topic-title .new-right-side-menu__title-marker_no-child, #wh_topic_toc .section-title .new-right-side-menu__title-marker_no-child").on("mouseenter", function () {
        $(this).parent().addClass("hover-node");
    });
    $("#wh_topic_toc .topic-title a, #wh_topic_toc .section-title a,#wh_topic_toc .topic-title .new-right-side-menu__title-marker_child, #wh_topic_toc .section-title .new-right-side-menu__title-marker_child,#wh_topic_toc .topic-title .new-right-side-menu__title-marker_no-child, #wh_topic_toc .section-title .new-right-side-menu__title-marker_no-child").on("mouseleave", function () {
        $(this).parent().removeClass("hover-node");
    });

    // раскрытие при нажатии
    $("#wh_topic_toc .topic-title a").on("click", function(){
        let parent = $(this).parent();
        if(!parent.hasClass("opened-node")){
            parent.find(".new-right-side-menu__title-marker_child").trigger("click");
        }
    })

    // переброс клика с маркера элемента меню на сам элемент
    $(".new-right-side-menu__title-marker_no-child").on("click",function(){
        $(this).next()[0].click();
    });
    // переброс клика с маркера элемента меню на сам элемент

    // запоминаем состояние прокрутки на момент клика по элементу меню
    $("#wh_topic_toc a").on("click",function(){
        let rightMenu = $("#wh_topic_toc");
        rightMenu.addClass("scroll-block");
        setTimeout(function(){
            rightMenu.removeClass("scroll-block");
        },500)

    });

    // маркер прокрутки раскрытием блока
    $(".new-right-side-menu__title-marker_child").on("click",function(){
        let rightMenu = $("#wh_topic_toc");
        rightMenu.addClass("scroll-block");
        setTimeout(function(){
            rightMenu.removeClass("scroll-block");
        },500)
    });
    // маркер прокрутки раскрытием блока

});