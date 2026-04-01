$(document).on('DOMContentLoaded', function () {

    $('#wh_side_toc .wh_top_menu > ul > li > span > a').on('click', function(e){
        console.log('wh_top_menu event-tr 1');
        var menuType = 'Left Menu';
        var menuName = $(this).find('span').text();
        pushMenuNamesInDataLayer(menuType, menuName);
    });
    $('#wh_side_toc .wh_top_menu > ul > li > ul > li > span > a').on('click', function(e){
        console.log('wh_top_menu event-tr 2');
        var menuType = 'Left Menu';
        var menuName = $(this).parents('li.active').find('> span > a').text();
        var subMenuName = $(this).text();
        pushMenuNamesInDataLayer(menuType, menuName, subMenuName);
    });
    $('#wh_side_toc .wh_top_menu > ul > li > ul > li > ul > li a').on('click', function(e){
        console.log('wh_top_menu event-tr 3');
        var menuType = 'Left Menu';
        var menuName = $(this).parents('li.active').find('> span > a').text();
        var subMenuName = $(this).text();
        pushMenuNamesInDataLayer(menuType, menuName, subMenuName);
    });
    $('#wh_side_toc .wh_side_toc > ul > li.active > ul > li > span > a').on('click', function(e){
        console.log('wh_top_menu event-tr 4');
        var menuType = 'Left Menu';
        var menuName = $(this).text();
        pushMenuNamesInDataLayer(menuType, menuName);
    });
    $('#wh_side_toc .wh_side_toc > ul > li > ul > li > ul > li > span > a').on('click', function(e){
        console.log('wh_top_menu event-tr 5');
        var menuType = 'Left Menu';
        var menuName = $(this).parents('.wh_side_toc').find('.hidden-print > li.active > ul > li.active > span').text();
        var subMenuName = $(this).text();
        pushMenuNamesInDataLayer(menuType, menuName, subMenuName);
    });


    $('header .wh_top_menu ul a').on('click' , function(){
        var menuType = 'Head Menu';
        var menuName = $(this).text();
        $('.toggle span').html(menuName);
        pushMenuNamesInDataLayer(menuType, menuName);
    });

    $('.lang-switch__dropdown').on('click', function () {
        var lang = $(this).find('a span').text();

        dataLayer.push({
            'event': 'addEvents_makeActions',
            'event_id': 'd-n02-e1',
            'action_cat': 'Language',
            'action_param': lang
        });
    });

    function pushMenuNamesInDataLayer( menuType, top, sub ) {
            top = $.trim(top);
            sub = $.trim(sub);
        dataLayer.push({
            'event': 'addEvents_makeActions',
            'event_id': 'd-n01-e1',
            'action_cat': menuType,
            'action_name': top,
            'action_param': sub
        });
    }
});