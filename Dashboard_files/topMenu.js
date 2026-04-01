$(document).ready(function(){
    //подпись для планшетного меню на странице поиска и других не узнанных страницах
    let menuText = "Sections";
    //конфигурация элементов логотипа
    let isLogoEnable = true; //отображаем ли лого в принципе
    let idDoubleLogo = true; //является ли оно двойным лого
    let firstLogoLink = "https://platform.dev/"; //ссылка первого двойного лого
    let secondLogoLink = "https://developers.platform.dev/landing-en/"; //ссылка второго двойного лого
    let firstLogoTitleText = " Platform Main Site"; //текст выпадашки-подсказки первого двойного лого (пустая строка для отключения выпадашки)
    let secondLogoTitleText = "Platform Documentation Portal"; //текст выпадашки-подсказки второго двойного лого (пустая строка для отключения выпадашки)
    let firstLogoImage_desktop = "oxygen-webhelp/template/images/logo.svg"; //ссылка на картинку первого двойного лого для десктопного вида
    let secondLogoImage_desktop = "oxygen-webhelp/template/images/documentation.svg"; //ссылка на картинку второго двойного лого для десктопного вида
    let firstLogoImage_mobile = "oxygen-webhelp/template/images/logo.svg"; //ссылка на картинку первого двойного лого для мобильного вида
    let secondLogoImage_mobile = "oxygen-webhelp/template/images/doc.svg"; //ссылка на картинку второго двойного лого для мобильного вида
    let singleLogoLink = ""; //ссылка одинарного лого
    let singleLogoTitleText = ""; //текст выпадашки-подсказки одинарного лого (пустая строка для отключения выпадашки)
    let singleLogoImage_desktop = ""; //ссылка на картинку одинарного лого для десктопного вида
    let singleLogoImage_mobile = ""; //ссылка на картинку одинарного лого для мобильного вида
    //сокрытие последнего стандартного элемента меню на десктопе (если дубль маркетинговой кнопки)
    let hideLastElement = false;
    //конфигурация анимированной кнопки
    let animatedButtonText = ""; //текстовка анимированной кнопки (если пустая строка - кнопка отключена)
    let animatedButtonLink = ""; //ссылка анимированной кнопки
    //конфигурация простой маркетинговой кнопки
    let simpleMarketingButtonText = ""; //текстовка кнопки (если пустая строка - кнопка отключена)
    let simpleMarketingButtonLink = ""; //ссылка кнопки
    let marketingSectionName = ""; // "&#9745; Become a client"; //имя секции для планшетного и мобильного меню (если пусто - отключен элемент)
    let marketingSectionDescription = "A portal to the world of Platform clients. Apply to get started, or contact us if you have any questions."; //описание секции
    let marketingSectionHref = "#"; //ссылка секции
    let filterButtonTitleMoreText = "Read shortened version" //текст подписи кнопки фильтрации more
    let filterButtonTitleLessText = "Read full article" //текст подписи кнопки фильтрации less
    let searchButtonTitleText = "Search"; //текст подписи кнопки поиска
    let feedbackButtonTitleLessText = "Contact us"; //текст подписи кнопки обратной связи
    let marketingSectionChildren = [{
            name: "Apply now",
            href: ""
        },
        {
            name: "Contact us",
            href: ""
        }
    ];
    //конфигурация Домика в мобильном меню (ссылка и текст рядом)
    let mobileMenuHeader = "Sections"; //текстовка подписи разделов мобильного меню
    let mobileMenuHomeHeaderLink = "index.html"; //ссылка куда ведет домик у заголовка
    //конфигурация структуры секций меню
    let sections= [
		{
            sectionName: "Platform",
            sectionDescription: "Payment platform, its structure and operation. Refer to this section when you have general questions about working with the platform.",
            sectionHref: "en_platform_about.html",
            sectionChildren: []
        },
        {
            sectionName: "Tools",
            sectionDescription: "The&nbsp;platform's interfaces and components. Refer to this&nbsp;section when you configure various ways of interaction with the&nbsp;platform.",
            sectionHref: "#",
            sectionChildren: [
                {
                    name: "Payment Page",
                    href: "en_PP_about.html"
                },
                {
                    name: "Gate",
                    href: "en_Gate_Integration_About.html"
                },
                {
                    name: "Dashboard",
                    href: "en_dbl_about.html"
                }
            ]
        },
/*		{
            sectionName: "Methods",
            sectionDescription: "Payment methods and the&nbsp;specifics of their&nbsp;use. Refer to this&nbsp;section when choosing what payment methods to add to your integration.",
            sectionHref: "en_pm_about.html",
            sectionChildren: []
        },*/
        {
            sectionName: "FAQ",
            sectionDescription: "Answers to commonly asked questions concerning the&nbsp;platform and its use.",
            sectionHref: "en_faq.html",
            sectionChildren: []
        },
        {
            sectionName: "References",
            sectionDescription: "Reference information and glossary of the&nbsp;terms used in the&nbsp;documentation.",
            sectionHref: "en_directory.html",
            sectionChildren: []
        },
        {
            sectionName: "What's new",
            sectionDescription: "Information about documentation updates and changes.",
            sectionHref: "en_all_versions.html",
            sectionChildren: []
        }
    ];


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

    let operationSystem = getPlatform();

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
    //add platform to body class
    $("body").addClass(browser).addClass(operationSystem);

    $("header").hide();

    //верстка элементов
    let sectionsHTML = "";
    sections.forEach(function (section, index) {
        let sectionChildrenHtml ="";
        let sectionChildrenHtml_firstCol ="";
        let sectionChildrenHtml_secondCol ="";
        let middleIndex = Math.round(section.sectionChildren.length/2);
        section.sectionChildren.forEach(function (child, index) {
            sectionChildrenHtml += `<a class="top-menu__child-link" href="${child.href}">${child.name}</a>`;
            if(index<middleIndex || index<4){
                sectionChildrenHtml_firstCol += `<a class="top-menu__child-link" href="${child.href}">${child.name}</a>`;
            }
            else{
                sectionChildrenHtml_secondCol += `<a class="top-menu__child-link" href="${child.href}">${child.name}</a>`;
            }
        });
        let hasChildrenClass = "has-children"
        if(section.sectionChildren.length<1){
            hasChildrenClass = ""
        }
        let sectionNameSegment = "";
        if(section.sectionHref!="#"){
            sectionNameSegment = `<a class="top-menu__menu-section-name" data-second-section-id="${index}" href="${section.sectionHref}">${section.sectionName}</a>`;
        }
        else{
            sectionNameSegment = `<span class="top-menu__menu-section-name" data-second-section-id="${index}">${section.sectionName}</span>`;
        }
        let lessThanFourChildrenClass = "";
        if(section.sectionChildren.length<=4){
            lessThanFourChildrenClass = "less-than-four-children";
        }
        let hideLastClass = ""
        if(sections.length-1 == index && hideLastElement === true){
            hideLastClass = "hide-last-element";
        }
        sectionsHTML += `
            <div class="top-menu__menu-section-item ${hasChildrenClass} ${hideLastClass}">
                ${sectionNameSegment}
                <div class="top-menu__section-dropdown">
                  <div class="top-menu__section-dropdown-info">
                    <div class="top-menu__section-dropdown-info-name">${section.sectionName}</div>
                    <div class="top-menu__section-dropdown-info-description">${section.sectionDescription}</div>
                  </div>
                    <div class="top-menu__section-dropdown-children-container ${lessThanFourChildrenClass}">
                       <div>${sectionChildrenHtml_firstCol}</div>                        
                       <div>${sectionChildrenHtml_secondCol}</div>                       
                    </div>
                </div>
            </div>              
        `;
        if (index === sections.length-1 && animatedButtonText!=""){
            sectionsHTML += `
                <div class="menu-animated-button-container">
                    <a class="menu-animated-button" href="${animatedButtonLink}">
                        ${animatedButtonText}
                    </a>    
                </div>          
        `;
        }
        if (index === sections.length-1 && simpleMarketingButtonText!=""){
            sectionsHTML += `      
                <div class="menu-simple-marketing-button-container">
                    <a class="menu-simple-marketing-button" href="${simpleMarketingButtonLink}">
                        ${simpleMarketingButtonText}
                    </a>    
                </div>
        `;
        }
    });
    //планшетное меню
    let tabletSectionsHTML = "";
    let tabletTopMenu =`
    <nav class="navbar navbar-default navbar-tablet  wh_header">
        <div class="top-menu__menu-current-section"></div>
        <div class="top-menu__menu-section-items-container">
            `;

    sections.forEach(function (section, index) {
        let sectionChildrenHtml = "";
        section.sectionChildren.forEach(function (child, index) {
            sectionChildrenHtml += `<a class="top-menu__child-link" href="${child.href}">${child.name}</a>`
        });
        let hasChildrenClass = "has-children";
        let sectionNameSegment = `<span class="top-menu__menu-section-name" data-second-section-id="${index}">${section.sectionName}</span>`;
        if (section.sectionChildren.length < 1) {
            hasChildrenClass = ""
            sectionNameSegment = `<a class="top-menu__menu-section-name not-serchable" href="${section.sectionHref}" data-second-section-id="${index}">${section.sectionName}</a>`;
        }

        // let sectionNameSegment = `<span class="top-menu__menu-section-name" data-second-section-id="${index}">${section.sectionName}</span>`;

        tabletSectionsHTML += `
            <div class="top-menu__menu-section-item ${hasChildrenClass}">
                ${sectionNameSegment}
                <div class="top-menu__section-dropdown">
                  <div class="top-menu__section-dropdown-info">
                    <div class="top-menu__section-dropdown-info-name">${section.sectionName}</div>
                    <div class="top-menu__section-dropdown-info-description">${section.sectionDescription}</div>
                  </div>
                    <div class="top-menu__section-dropdown-children-container">
                        ${sectionChildrenHtml}
                    </div>
                </div>
            </div>       
        `;
        if (index === sections.length-1 && marketingSectionName!="") {
            let hasChildrenClass = "has-children";
            let sectionNameSegment = `<span class="top-menu__menu-section-name" data-second-section-id="${index+1}">${marketingSectionName}</span>`;
            if (marketingSectionChildren.length < 1) {
                hasChildrenClass = "";
                sectionNameSegment = `<a class="top-menu__menu-section-name not-serchable" href="${marketingSectionHref}" data-second-section-id="${index+1}">${marketingSectionName}</a>`;
            }
            let sectionChildrenHtml = "";
            marketingSectionChildren.forEach(function (child, index) {
                sectionChildrenHtml += `<a class="top-menu__child-link" href="${child.href}">${child.name}</a>`
            });
            tabletSectionsHTML += `
            <div class="top-menu__menu-section-item ${hasChildrenClass}">
                ${sectionNameSegment}
                <div class="top-menu__section-dropdown">
                  <div class="top-menu__section-dropdown-info">
                    <div class="top-menu__section-dropdown-info-name">${marketingSectionName}</div>
                    <div class="top-menu__section-dropdown-info-description">${marketingSectionDescription}</div>
                  </div>
                    <div class="top-menu__section-dropdown-children-container">
                        ${sectionChildrenHtml}
                    </div>
                </div>
            </div>       
        `;
        }

    });
    tabletTopMenu+=`
        ${tabletSectionsHTML}
        </div>
    </nav>
    `;

    //Mobile menu
    let mobileSectionsHTML = "";
    let secondSecondLevelSections="";
    let mobileTopMenu =`
        <nav class="navbar-mobile">            
            <div class="top-menu__mobile-menu-first-level-section">
                <div class="top-menu__mobile-menu-home-header-container">
                    <a class="top-menu__mobile-menu-home-header-link" href="${mobileMenuHomeHeaderLink}"></a>
                    <div class="top-menu__mobile-menu-home-header">${mobileMenuHeader}</div>
                </div>            
                <div class="top-menu__mobile-menu-home-header-underline"></div>
    `;

    sections.forEach(function (section, index) {
        let sectionChildrenHtml ="";
        section.sectionChildren.forEach(function (child, index) {
            sectionChildrenHtml += `<a
     class="top-menu__child-link" href="${child.href}">${child.name}</a>`
        });
        let hasChildrenClass = "has-children"
        if(section.sectionChildren.length<1){
            hasChildrenClass = ""
        }
        else{
            let mobileSectionHeader = `<a class="top-menu__mobile-menu-section-header" href="${section.sectionHref}">${section.sectionName}</a>`;
            if(section.sectionHref=="" || section.sectionHref=="#"){
                mobileSectionHeader = `<span class="top-menu__mobile-menu-section-header">${section.sectionName}</span>`;
            }
            secondSecondLevelSections +=`
                <div class='top-menu__mobile-menu-second-level-section' data-second-section-id="${index}">
                    <div class="top-menu__mobile-menu-home-header-container top-menu__mobile-menu-second-level-section-name">
                        <span class="top-menu__mobile-menu-back-header-link" href="${mobileMenuHomeHeaderLink}"></span>
                        ${mobileSectionHeader}
                    </div>            
                    <div class="top-menu__mobile-menu-home-header-underline"></div>
                
                    ${sectionChildrenHtml} 
                </div>
            `;
        }

        if(hasChildrenClass=="" && section.sectionHref!="#" && section.sectionHref!=""){
            mobileTopMenu += `        
                <a class="top-menu__menu-section-name top-menu__menu-section-name-mobile" href="${section.sectionHref}" data-second-section-id="${index}">${section.sectionName}</a>
            `;
        }
        else {
            mobileTopMenu += `        
                <span class="top-menu__menu-section-name top-menu__menu-section-name-mobile ${hasChildrenClass}" data-second-section-id="${index}">${section.sectionName}</span>
            `;
        }

        if (index === sections.length-1 && marketingSectionName!="") {
            let sectionChildrenHtml ="";
            marketingSectionChildren.forEach(function (child, index) {
                sectionChildrenHtml += `<a class="top-menu__child-link" href="${child.href}">${child.name}</a>`
            });
            let hasChildrenClass = "has-children"
            if(marketingSectionChildren.length<1){
                hasChildrenClass = ""
            }
            else{
                let mobileSectionHeader = `<a class="top-menu__mobile-menu-section-header" href="${marketingSectionHref}">${marketingSectionName}</a>`;
                if(marketingSectionHref=="" || marketingSectionHref=="#"){
                    mobileSectionHeader = `<span class="top-menu__mobile-menu-section-header">${marketingSectionName}</span>`;
                }
                secondSecondLevelSections +=`
                <div class='top-menu__mobile-menu-second-level-section' data-second-section-id="${index+1}">
                    <div class="top-menu__mobile-menu-home-header-container top-menu__mobile-menu-second-level-section-name">
                        <span class="top-menu__mobile-menu-back-header-link" href="${mobileMenuHomeHeaderLink}"></span>
                        ${mobileSectionHeader}
                    </div>            
                    <div class="top-menu__mobile-menu-home-header-underline"></div>
                
                    ${sectionChildrenHtml} 
                </div>
            `;
            }

            if(hasChildrenClass=="" && marketingSectionHref!="#" && marketingSectionHref!=""){
                mobileTopMenu += `        
                <a class="top-menu__menu-section-name top-menu__menu-section-name-mobile" href="${marketingSectionHref}" data-second-section-id="${index+1}">${marketingSectionName}</a>
            `;
            }
            else {
                mobileTopMenu += `        
                <span class="top-menu__menu-section-name top-menu__menu-section-name-mobile ${hasChildrenClass}" data-second-section-id="${index+1}">${marketingSectionName}</span>
            `;
            }
        }
    });

    mobileTopMenu +=`
        </div>
        ${secondSecondLevelSections}
    </nav>
    `;

    let logotype = ``;

    if(isLogoEnable){
        if(idDoubleLogo){
            logotype = `
                <a href="${firstLogoLink}" class="sidebar__logo_double-first" title="${firstLogoTitleText}">
                    <img class="sidebar__logo_double-first-image-desktop" src="${firstLogoImage_desktop}">
                    <img class="sidebar__logo_double-first-image-mobile" src="${firstLogoImage_mobile}">
                </a>
                <a href="${secondLogoLink}" class="sidebar__logo_double-second" title="${secondLogoTitleText}">
                    <img class="sidebar__logo_double-second-image-desktop" src="${secondLogoImage_desktop}">
                    <img class="sidebar__logo_double-second-image-mobile" src="${secondLogoImage_mobile}">
                </a>
            `;
        }
        else{
            logotype = `
                <a href="${singleLogoLink}" class="sidebar__logo_single" title="${singleLogoTitleText}">
                    <img class="sidebar__logo_single-image-desktop" src="${singleLogoImage_desktop}">
                    <img class="sidebar__logo_single-image-mobile" src="${singleLogoImage_mobile}">
                </a>
            `;
        }
    }

    let topMenuHtml = `
<div class="header__wrapper ${operationSystem} ${browser}">
    <div class="sidebar__logo-container">
        ${logotype}
    </div>
    
    ${mobileTopMenu}
    ${tabletTopMenu}
    <nav class="navbar navbar-default navbar-desktop wh_header">
        <div class="top-menu__menu-section-items-container">
            ${sectionsHTML}
        </div>
    </nav>
    
<!--  фильтрация контента  -->
    <div class="content-filtration content-filtration--disabled" data-title-more-text="${filterButtonTitleMoreText}" data-title-less-text="${filterButtonTitleLessText}"></div>
<!--  фильтрация контента  -->      
    <!-- Search form -->
    <div class=" wh_search_input navbar-form wh_main_page_search " title="${searchButtonTitleText}" role="form">
        <form id="searchForm" method="get" action="search.html">
            <div>
                <input type="search" placeholder="Documentation search…" class="wh_search_textfield" id="textToSearch" name="searchQuery"/>
                <button type="submit" class="wh_search_button"></button>
            </div>
            <script>
             <!--
                $(document).ready(function () {
                    $('#searchForm').submit(function (e) {
                        if ($('.wh_search_textfield').val().length < 1) {
                            e.preventDefault();
                        }
                    });
                });-->
            </script>
        </form>
        <div class="mobile-search-cancel"></div>
    </div>
    <!-- Envelope -->
    <span class="user-nav__write-btn" title="${feedbackButtonTitleLessText}" onclick="showDocModalForm(event)"></span>
    <!-- Lang switch -->
    <div class="lang-switch">
        <div class="lang-switch_lang lang-switch__change_lang ">
            <a href="#">
                <div class="lang-switch__icon-country lang-switch__icon-country_en"></div>
                <span>EN</span>
            </a>
        </div>
        <div class="lang-switch_lang lang-switch__link">
            <a href="#">
                <div class="lang-switch__icon-country lang-switch__icon-country_ru"></div>
                <span>RU</span>
            </a>
        </div>       
    </div>
    <div class="top-menu__mobile-menu-toggle"></div>
</div>
    `;
    //watermark
    if($(".top-menu__layout").length==0) {
        $("header").html(topMenuHtml).after("<div class='top-menu__layout'></div>").show();
    }
    else{
        $("header").show();
    }

    //закрытие конверта
    $(".top-menu__menu-current-section").on("mouseover",function(){
        $(".feedback-modal-is-open .modal__close").trigger("click");
    });
    $(document).on("click",".feedback-modal-is-open header",function(event){
        if($(event.target).hasClass("user-nav__write-btn")){
            return;
        }
        $(".feedback-modal-is-open .modal__close").trigger("click");
        if($(event.target).hasClass("top-menu__menu-section-item")){
            $(event.target).trigger("mouseover");
        }
        if($(event.target).hasClass("top-menu__menu-section-name")){
            $(event.target).parent().trigger("mouseover");
        }
    });
    $(document).on("click",".feedback-modal-is-open .top-menu__menu-section-items-container a",function(event){
        if($(event.target).hasClass("menu-animated-button") || $(event.target).hasClass("menu-simple-marketing-button")){
            event.target.blur();
        }
        event.preventDefault();
    });
    $(".menu-simple-marketing-button, .menu-animated-button").on("click",function(){
        if($("body").hasClass("feedback-modal-is-open") || $(event.target).hasClass("menu-simple-marketing-button")){
            event.preventDefault();
        }
    });

    //снятие залипания анимированной кнопки с ссылки при открытии контекстного меню и нажатии средней кнопки мыши
    $(document).on("contextmenu",".menu-animated-button, .menu-simple-marketing-button",function(){
        $(this).blur();
    });
    $(document).on("mouseup",".menu-animated-button, .menu-simple-marketing-button",function(event){
        if(event.which == 2) {
            $(this).blur();
        }
    });

    //специальный фокус при клике на лупу на странице поиска
    $(document).on("click",".wh_search_page .wh_search_input",function(){
        $(".wh_search_textfield").focus();
    });

    // Open-close desktop menu
    $(".navbar-desktop .top-menu__menu-section-item").on("mouseover",function(){
        if($('body').hasClass('mobile-search_active') || $('body').hasClass('feedback-modal-is-open')){
            return;
        }
        $(".top-menu__layout").addClass("show-element");
        $(this).find(".top-menu__section-dropdown").addClass("show-element");
    });
    $(".navbar-desktop .top-menu__menu-section-item").on("mouseout",function(){
        if($('body').hasClass('mobile-search_active') || $('body').hasClass('feedback-modal-is-open')){
            return;
        }
        $(".top-menu__layout").removeClass("show-element");
        $(this).find(".top-menu__section-dropdown").removeClass("show-element");
    });
    // Open-close tablet menu
    $(".top-menu__menu-current-section, .navbar-tablet .top-menu__menu-section-items-container").on("mouseover touch",function(){
        if($('body').hasClass('mobile-search_active')){
            return;
        }
        $(".top-menu__layout").addClass("show-element");
        window.closeSideMenuOnTabs();
    });
    $(".top-menu__menu-current-section, .navbar-tablet .top-menu__menu-section-items-container").on("mouseout",function(){
        if($('body').hasClass('mobile-search_active')){
            return;
        }
        $(".top-menu__layout").removeClass("show-element");
        window.closeSideMenuOnTabs();
    });
    $(".navbar-tablet .top-menu__menu-section-item").on("mouseover",function(event){
        if($('body').hasClass('mobile-search_active')){
            return;
        }
        $(".top-menu__layout").addClass("show-element");
        let currentDropdown = $(this).find(".top-menu__section-dropdown");
        let tabletList = $(".navbar-tablet .top-menu__menu-section-items-container");
        let tabletListAutoHeight = tabletList.outerHeight();
        if (typeof localStorage.getItem("tabletListAutoHeight") == "string"){
            tabletListAutoHeight = localStorage.getItem("tabletListAutoHeight");
        }
        else{
            localStorage.setItem("tabletListAutoHeight",`${tabletListAutoHeight}px`);
        }
        if(currentDropdown.parent().hasClass("has-children")) {
            tabletList.addClass("gray-bg-menu");
            let currentDropdownHeight = currentDropdown.outerHeight();
            tabletList.stop().animate({"height": `${currentDropdownHeight}px`}, 300, "linear");
            currentDropdown.addClass("show-element");
        }
        else{
            tabletList.removeClass("gray-bg-menu");
            tabletList.stop().animate({"height":`${tabletListAutoHeight}`}, 300, "linear");
            currentDropdown.addClass("show-element");
        }
    });
    $(".navbar-tablet .top-menu__menu-section-item").on("mouseout",function(event){
        if($('body').hasClass('mobile-search_active')){
            return;
        }
        $(".top-menu__layout").removeClass("show-element");
        let currentDropdown = $(this).find(".top-menu__section-dropdown");
        let tabletList = $(".navbar-tablet .top-menu__menu-section-items-container");
        tabletList.removeClass("gray-bg-menu");
        let tabletListAutoHeight = tabletList.outerHeight();
        if (typeof localStorage.getItem("tabletListAutoHeight") == "string"){
            tabletListAutoHeight = localStorage.getItem("tabletListAutoHeight");
        }
        else{
            localStorage.setItem("tabletListAutoHeight",`${tabletListAutoHeight}px`);
        }
        tabletList.stop().animate({"height":`${tabletListAutoHeight}`},300,"linear");
        currentDropdown.removeClass("show-element");
    });

    // Select active menu item
    SelectActiveElement();

    // Search logic
    $('body:not(.wh_search_page) .wh_search_input').on('click', function (e) {
        e.stopPropagation();
        $(".feedback-modal-is-open .modal__close").trigger("click");
        $(".top-menu__layout").addClass("show-element");
        $('body').addClass('mobile-search_active');
        $('.wh_search_textfield').focus();
        $(".top-menu__mobile-menu-toggle").removeClass("is-opened");
        $(".navbar-mobile").removeClass("is-opened");
        if ($(window).width() < '1280') {
            window.closeSideMenuOnTabs();
        }
    });
    $('body:not(.wh_search_page) .mobile-search-cancel, header, .top-menu__layout').on('click', function (e) {
        if($(e.target).parents(".navbar-tablet").length>0 || !$('body').hasClass('mobile-search_active')){
            return;
        }
        e.stopPropagation();
        $('body').removeClass('mobile-search_active');
        $(".top-menu__layout").removeClass("show-element");
    });
    $('body:not(.wh_search_page) .wh_search_textfield').on("input", function(){
        if($(this).val().length>0){
            $(".wh_search_button").addClass("active-search-button");
        }
        else{
            $(".wh_search_button").removeClass("active-search-button");
        }
    });

    $("header").on("click",".top-menu__mobile-menu-toggle",function(){
        $(".fader").trigger("click");
        $(".top-menu__layout").removeClass("show-element");
        if($(this).hasClass("is-opened")){
            $(this).removeClass("is-opened");
            $(".navbar-mobile").removeClass("is-opened");
            $(".wrapper").removeClass("menu-is-opened");
        }
        else{
            $(this).addClass("is-opened");
            $(".navbar-mobile").addClass("is-opened");
            $(".wrapper").addClass("menu-is-opened");
        }
    });

    $("header").on("click",".top-menu__menu-section-name.has-children:not(.left-toc-toggle)",function(event){
        event.preventDefault();
        $(this).parent().addClass("is-invisible");
        let segmentId = $(this).attr("data-second-section-id");
        let secondLayer = $(`.top-menu__mobile-menu-second-level-section[data-second-section-id="${segmentId}"]`)
        secondLayer.addClass("is-visible")
    });
    $("header").on("click",".top-menu__mobile-menu-second-level-section-name .top-menu__mobile-menu-back-header-link",function(){
        $(this).parent().parent().removeClass("is-visible");
        let secondLayer = $(`.top-menu__mobile-menu-first-level-section`)
        secondLayer.removeClass("is-invisible")
    });

    // Lang link
    let currentPage = window.location.href;
    let enPage = currentPage.replace(/-ru\//g, '-en\/').replace(/\/ru\//g, '/en\/').replace(/\/ru_/g, '\/en_');
    let ruPage = currentPage.replace(/-en\//g, '-ru\/').replace(/\/en\//g, '/ru\/').replace(/\/en_/g, '\/ru_');
    $(".lang-switch__icon-country_en").parent().attr('href', enPage);
    $(".lang-switch__icon-country_ru").parent().attr('href', ruPage);

    function SelectActiveElement(menuTypeClass){
        let breadcrumbsSectionsLinks = $(".breadcrumbs li a");
        let breadcrumbsSectionsLinksLastIndex = breadcrumbsSectionsLinks.length-1;
        let activeNotFound = true;
        if (breadcrumbsSectionsLinks.length > 0) {
            breadcrumbsSectionsLinks.each(function () {
                let href = $(this).prop("href").split('#')[0];
                let regexp = new RegExp(href, 'g');
                let menuClass = "";
                if(typeof menuTypeClass != "undefined"){
                    menuClass = `.${menuTypeClass}`;
                }
                $(`.top-menu__child-link:not(.not-serchable)`).each(function (index) {
                    if ($(this).prop("href").match(regexp)) {
                        activeNotFound = false;
                        if($(this).parents(".navbar-mobile").length>0){
                            $(".navbar-mobile .top-menu__child-link").removeClass("active-page");
                        }
                        if($(this).parents(".navbar-tablet").length>0){
                            $(".navbar-tablet .top-menu__child-link").removeClass("active-page");
                        }
                        if($(this).parents(".navbar-desktop").length>0){
                            $(".navbar-desktop .top-menu__child-link").removeClass("active-page");
                        }

                        $(this).addClass("active-page");
                        let sectionId = $(this).parents(".top-menu__menu-section-item").find(".top-menu__menu-section-name").attr("data-second-section-id");
                        $(`.top-menu__menu-section-name-mobile[data-second-section-id="${sectionId}"]`).addClass("active");
                        $(this).parents(".top-menu__menu-section-item").addClass("active");
                        let currentSectionName = $(this).parents(".top-menu__menu-section-item").find(".top-menu__menu-section-name").html();
                        $(".top-menu__menu-current-section").html(currentSectionName);
                    }
                    if(index == breadcrumbsSectionsLinksLastIndex && activeNotFound){
                        let currentPage = window.location.pathname;
                        let regexp = new RegExp(currentPage, 'g');
                        let segmentsLinks = $("a.top-menu__menu-section-name:not(.not-serchable)");
                        segmentsLinks.each(function(){
                            if($(this).prop("href").match(regexp)){
                                activeNotFound = false;
                                $(this).parent(".top-menu__menu-section-item").addClass("active");
                                let sectionId =  $(this).attr("data-second-section-id");
                                $(`.top-menu__menu-section-name-mobile[data-second-section-id="${sectionId}"]`).addClass("active left-toc-toggle");
                                $(`.top-menu__mobile-menu-second-level-section[data-second-section-id="${sectionId}"] .not-serchable`).addClass("active-page");
                                let tabletSegment = $(`.navbar-tablet .top-menu__menu-section-name[data-second-section-id="${sectionId}"]`).parent();
                                tabletSegment.addClass("active");
                                tabletSegment.find(".not-serchable").addClass("active-page");
                                $(".top-menu__menu-current-section").html($(this).html());
                            }
                        });
                        if(activeNotFound){
                            breadcrumbsSectionsLinks.each(function () {
                                let href = $(this).prop("href").split('#')[0];
                                let section = $(".top-menu__menu-section-name:not(.not-serchable)");
                                section.each(function () {
                                  let sectionHref = $(this).prop("href");
                                  if(href==sectionHref){
                                      let sectionId =  $(this).attr("data-second-section-id");
                                      $(this).parent().addClass("active");
                                      $(`.top-menu__menu-section-name-mobile[data-second-section-id="${sectionId}"]`).addClass("active left-toc-toggle");
                                      let tabletSegment = $(`.navbar-tablet .top-menu__menu-section-name[data-second-section-id="${sectionId}"]`).parent();
                                      tabletSegment.addClass("active");
                                      tabletSegment.find(".not-serchable").addClass("active-page");
                                      $(".top-menu__menu-current-section").html($(this).html());
                                  }
                                })
                            });
                        }
                    }
                });
            })
        }
        else{
            let currentPage = window.location.pathname;
            let regexp = new RegExp(currentPage, 'g');
            let segmentsLinks = $("a.top-menu__menu-section-name");
            segmentsLinks.each(function(){
                if($(this).prop("href").match(regexp)){
                    activeNotFound = false;
                    $(this).parent().addClass("active");
                }
            });
            if(activeNotFound){
                $(".top-menu__menu-current-section").html(menuText);
                $(".top-menu__menu-current-section").addClass("no-selection");
            }
        }
    }

    // выпадашка по клику на конечный подсвеченный объект второго уровня
    $(".top-menu__mobile-menu-second-level-section .top-menu__child-link.active-page,.top-menu__menu-section-name-mobile.left-toc-toggle").on("click",function(e){
        e.preventDefault();
        if($(".top-menu__mobile-menu-toggle").hasClass("is-opened")){
            // $(".top-menu__mobile-menu-toggle").removeClass("is-opened");
            // $(".navbar-mobile").removeClass("is-opened");
            // $(".wrapper").removeClass("menu-is-opened");
            // $(".burger-mobile__wrapper").trigger("click");
            $(".top-menu__mobile-menu-back-header-link").trigger("click");
            $(".top-menu__mobile-menu-toggle").trigger("click");
            $(".side-menu-button-left").trigger("click");
        }
    });

    navbarHoverFlag(".navbar-tablet");
    function navbarHoverFlag(navbarSelector){
        let navbar = $(navbarSelector);
        let section = navbar.find(".top-menu__menu-current-section");
        let menuItemContainer = navbar.find(".top-menu__menu-section-items-container");
        section.on("mouseenter",function(){
            navbar.addClass("sectionHover");
        });
        section.on("mouseleave",function(){
            navbar.removeClass("sectionHover");
        });
        menuItemContainer.on("mouseenter",function(){
            navbar.addClass("itemContainerHover");
        });
        menuItemContainer.on("mouseleave",function(){
            navbar.removeClass("itemContainerHover");
        });
    }

    /* сокрытие переключателя языков */
     $(".lang-switch").html("");
    /* сокрытие переключателя языков */

    /* закрытие меню при открытии конверта на планшете */
    $(".user-nav__write-btn").on("click touch",function(){
        if ($(window).width() < '1280'){
            window.closeSideMenuOnTabs();
        }
    })
    /* закрытие меню при открытии конверта на планшете */

});

window.addEventListener("pageshow", function(evt){
    if(evt.persisted){
        //триггерим условие закрытия меню
        $(".top-menu__menu-current-section").trigger("mouseout");
        $("body:not(.mobile-search_active) .navbar-tablet").removeClass("sectionHover");
        $("body:not(.mobile-search_active) .navbar-tablet").removeClass("itemContainerHover");
        $(".top-menu__section-dropdown.show-element").removeClass("show-element");
        $(".gray-bg-menu").removeClass("gray-bg-menu");
        //триггер закрытия поиска
        $(".mobile-search_active .mobile-search-cancel").trigger("click");
    }
}, false);

//закрытие меню при зуме мультитачем
window.addEventListener("touchstart", function(event){
    if(event.touches.length>1){
        //триггерим условие закрытия меню
        $(".top-menu__menu-current-section").trigger("mouseout");
        $("body:not(.mobile-search_active) .navbar-tablet").removeClass("sectionHover");
        $("body:not(.mobile-search_active) .navbar-tablet").removeClass("itemContainerHover");
        $(".top-menu__section-dropdown.show-element").removeClass("show-element");
        //триггер закрытия поиска
        $(".mobile-search_active .mobile-search-cancel").trigger("click");
    }
    else{
        //Если было нажатие на лэйаут
        if($(event.target).hasClass("top-menu__layout")){
            //триггерим условие закрытия меню
            $(".top-menu__menu-current-section").trigger("mouseout");
            $("body:not(.mobile-search_active) .navbar-tablet").removeClass("sectionHover");
            $("body:not(.mobile-search_active) .navbar-tablet").removeClass("itemContainerHover");
            $(".top-menu__section-dropdown.show-element").removeClass("show-element");
            //триггер закрытия поиска
            $(".mobile-search_active .mobile-search-cancel").trigger("click");
        }
        //принудительно триггерим событие наезда курсора мыши для открытия
        if($(event.target).hasClass("top-menu__menu-current-section")){
            $(".top-menu__menu-current-section").trigger("mouseover");
        }
    }
}, false);