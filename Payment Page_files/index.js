$(document).on('DOMContentLoaded', function () {

    var currentPage = window.location.href;
    // var translatedPage = currentPage.replace(/-en\//g, '-ru\/').replace(/\/en_/g, '\/ru_');
    var translatedPage = currentPage.replace(/-en\//g, '-ru\/').replace(/\/en\//g, '/ru\/').replace(/\/en_/g, '\/ru_');
    // $('.lang-switch .lang-switch__change_lang a').attr('href', translatedPage);
    $('.lang-switch .lang-switch__link a').attr('href', translatedPage);
    // $('.lang-switch .lang-switch__link a').on('click', function () {
    $('.lang-switch .lang-switch__change_lang a').on('click', function () {
        return false;
    });

    $('.sidebar .wh_top_menu > ul > li.has-children > span > a').on('click', function (e) {
        if (!$(this).parents('li').hasClass('active')) {
            e.preventDefault();
        }
    });

    $('.toggle').on('click', function(){
        $("nav ul").toggleClass("active");
        console.log('Click toggle');
    });


    $('.wh_tile').on('click', function () {

        window.location = $(this).find('a').attr('href');

    });

    $('.burger-mobile__wrapper').on('click', function () {
        $('.new-left-side-menu__container').toggleClass('mobile-show');
        $('.fader').toggleClass('show');
    });
    $('.wh_search_input').on('click', function () {
        $('.wh_main_page').addClass('mobile-search_active');
        $('nav.navbar').addClass('mobile-navbar-hidden');
        $('.user-nav__write-btn').addClass('mobile_user-nav_hidden');
        $('.lang-switch').addClass('mobile_lang-switch_hidden');
        /* $('nav.navbar').css('display', 'none');
        $('.user-nav__write-btn').css('display', 'none');
        $('.lang-switch').css('display', 'none'); */
    });
    $('.mobile-search-cancel').on('click', function (e) {
        $('.wh_main_page').removeClass('mobile-search_active');
        $('nav.navbar').removeClass('mobile-navbar-hidden');
        $('.user-nav__write-btn').removeClass('mobile_user-nav_hidden');
        $('.lang-switch').removeClass('mobile_lang-switch_hidden');
        /* $('nav.navbar').css('display', 'block');
        $('.user-nav__write-btn').css('display', 'block');
        $('.lang-switch').css('display', 'block'); */
        e.stopPropagation();
    });
    $('.lang-switch').on('click', function () {
        $(this).toggleClass('open')
    });
    $('body').on('click', function (e) {
        if (!$(e.target).hasClass('lang-switch')) {
            $('.lang-switch').removeClass('open');
        }
    });

    $('.fader').on('click', function () {
        $('.new-left-side-menu__container').removeClass('mobile-show');
        $('.fader').removeClass('show');
    });
    $('.wh_search_button span').text('Поиск');


});

