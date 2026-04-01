$(document).ready(function (){
    //подключаем полосу прокрутки
    $(".new-left-side-menu__list-container_first-level").addClass("scrollbar-outer").scrollbar({
        "disableBodyScroll":true,
        "onScroll":function(y, x){
            if(y.maxScroll - 1 <= y.scroll){
                $(".new-left-side-menu__container").addClass("hide-bottom-blur");
            }
            else{
                $(".new-left-side-menu__container").removeClass("hide-bottom-blur");
            }
            if(y.scroll <= 1){
                $(".new-left-side-menu__container").addClass("hide-top-blur");
            }
            else{
                $(".new-left-side-menu__container").removeClass("hide-top-blur");
            }
        }
    });
    if($(".current-page").length>0) {
        let offset = $(".current-page").offset();
        let container = $(".new-left-side-menu__list-container_first-level")
        $(".new-left-side-menu__list-container_first-level").scrollTop(offset.top - container.offset().top + container.scrollTop() - 20);
    }

    //проверяем проверяем цепочку текущей страницы и восстанавливаем его до корня
    currentPageNodsSearch();
    function currentPageNodsSearch() {
        let currentPageNode = $(".current-page")
        let currentNods = currentPageNode.parents(".new-left-side-menu__list-container_second-level, .new-left-side-menu__list-container_third-level");
        currentNods.each(function () {
            $(this.previousSibling.previousSibling).addClass("current-page opened-node");
            $(".new-left-side-menu__list-container_first-level").addClass("scrollbar-outer").scrollbar({
                "disableBodyScroll":true,
                "onScroll":function(y, x){
                    if(y.maxScroll - 1 <= y.scroll){
                        $(".new-left-side-menu__container").addClass("hide-bottom-blur");
                    }
                    else{
                        $(".new-left-side-menu__container").removeClass("hide-bottom-blur");
                    }
                    if(y.scroll <= 1){
                        $(".new-left-side-menu__container").addClass("hide-top-blur");
                    }
                    else{
                        $(".new-left-side-menu__container").removeClass("hide-top-blur");
                    }
                }
            });
            if($(".current-page").length>0) {
                let offset = currentPageNode.offset();
                let container = $(".new-left-side-menu__list-container_first-level");
                $(".new-left-side-menu__list-container_first-level").scrollTop(offset.top - container.offset().top + container.scrollTop() - 20);
            }
        });
    }
    restoreLeftSideMenuOffset();

    //раскрытие и закрытие списка по клику на уголок
    $(".new-left-side-menu__title-marker_child").on("click",function(){
        let container = $(this).parent().next();
        let parent = $(this).parent();

        /* блок прокрутки правого меню */
        let rightMenu = $("#wh_topic_toc");
        rightMenu.addClass("scroll-block");
        let oldTimeoutIndex = sessionStorage.getItem("rightMenuBlockTimeout");
        if(oldTimeoutIndex){
            clearTimeout(Number(oldTimeoutIndex));
        }
        let timoutIndex = setTimeout(function(){
            rightMenu.removeClass("scroll-block");
        },1000)
        sessionStorage.setItem("rightMenuBlockTimeout",String(timoutIndex));
        /* блок прокрутки правого меню */

        if (parent.hasClass("opened-node")){
            container.slideUp(300);
            parent.removeClass("opened-node");
        }
        else{
            container.slideDown(300);
            parent.addClass("opened-node");
        }
    });


    $(".new-left-side-menu__title-container a, .new-left-side-menu__title-container div").on("mouseenter",function(){
        $(this).parent().addClass("hover-node");
    });
    $(".new-left-side-menu__title-container a, .new-left-side-menu__title-container div").on("mouseleave",function(){
        $(this).parent().removeClass("hover-node");
    });


// хак мобильного размера экрана vh
    window.addEventListener("resize", setSideMenusHeight);
    window.addEventListener("orientationchange", setSideMenusHeight);
    function setSideMenusHeight(){
        let rightSideMenuHeight = `${window.innerHeight - 171}px`;
        //фикс высоты левого меню с учетом многострочного заголовка
        let leftSideMenuTitle = document.querySelector(".new-left-side-menu__general-title");
        let leftSideMenuHeight = `${window.innerHeight - 165 - leftSideMenuTitle.clientHeight}px`;
        $(".new-left-side-menu__list-container_first-level").css("height",leftSideMenuHeight);
        $(".wh_topic_toc .scroll-wrapper.scrollbar-outer").css("max-height",rightSideMenuHeight);
        $(".wh_topic_toc .scroll-wrapper.scrollbar-outer").css("height",rightSideMenuHeight);

        // фикс позиции градиента для многострочного заголовка
        let topGradientShadePosition = leftSideMenuTitle.getBoundingClientRect().top + leftSideMenuTitle.clientHeight - 28;
        document.querySelector(".new-left-side-menu__container").style.setProperty("--topGradientShadePosition", `${topGradientShadePosition}px`);
        // фикс позиции градиента для многострочного заголовка
    }
    //проброс для вызова при инициализации правого меню
    window.setSideMenusHeight = setSideMenusHeight;
    setSideMenusHeight();
// хак мобильного размера экрана vh


// заглушки для выезда меню
    window.addEventListener("resize", setSideMenusShades);
    window.addEventListener("orientationchange", setSideMenusShades);
    function setSideMenusShades(){
        if($(".side-menu-shade--left").length<1){
            $(".wrapper").after("<div class='side-menu-shade--left'></div><div class='side-menu-shade--right'></div>");
        }
        let wrapperWidth = $(".wrapper").width();
        let sideMenuShadeWidthNum = (window.innerWidth - wrapperWidth) / 2;
        //фикс для прокрутки на десктопе
        sideMenuShadeWidthNum = (sideMenuShadeWidthNum<15) ? 0 : sideMenuShadeWidthNum;
        let sideMenuShadeWidth = `${sideMenuShadeWidthNum}px`;
        $(".side-menu-shade--left, .side-menu-shade--right").css("width",sideMenuShadeWidth);
    }
    setSideMenusShades()
// заглушки для выезда меню


// переброс клика с маркера элемента меню на сам элемент
    $(".new-left-side-menu__title-marker_no-child").on("click",function(){
        $(this).next()[0].click();
    });
// переброс клика с маркера элемента меню на сам элемент

// запоминаем состояние прокрутки на момент клика по элементу меню
    $(".new-left-side-menu__container a").on("click",function(){
        let leftMenuOffset = $(".new-left-side-menu__container .scroll-content").scrollTop();
        sessionStorage.setItem("leftMenuOffset",leftMenuOffset);
        let openedNodes = document.querySelectorAll(".new-left-side-menu__container .opened-node");
        let openedNodesContent = [];
        openedNodes.forEach((node)=>{
            openedNodesContent.push(node.textContent);
        })
        sessionStorage.setItem("leftMenuState", JSON.stringify(openedNodesContent));
    });
    function restoreLeftSideMenuOffset(){
        let leftMenuOffset = sessionStorage.getItem("leftMenuOffset");
        let leftMenuStateMarkers = JSON.parse(sessionStorage.getItem("leftMenuState"));
        let leftMenuNodes = document.querySelectorAll(".new-left-side-menu__container .new-left-side-menu__title-container");
        leftMenuNodes.forEach((node)=>{
            if(leftMenuStateMarkers !== null && leftMenuStateMarkers.includes(node.textContent)){
                let container = $(node).find(".new-left-side-menu__title-marker_child").parent().next();
                let parent = $(node).find(".new-left-side-menu__title-marker_child").parent();
                if (!parent.hasClass("opened-node")){
                    container.slideDown(0);
                    parent.addClass("opened-node");
                }
            }
        });
        if(leftMenuOffset){
            $(".new-left-side-menu__container .scroll-content").scrollTop(leftMenuOffset);
            sessionStorage.removeItem("leftMenuOffset");
            sessionStorage.removeItem("leftMenuState");
            $(".new-left-side-menu__container .scroll-bar").trigger("mouseenter");
            $(".new-left-side-menu__container .scroll-bar").trigger("mouseleave");
        }
    }

});