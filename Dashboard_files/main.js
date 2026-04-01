$(document).on('DOMContentLoaded', function () {

	if (document.querySelector('.wh_breadcrumb li:nth-child(2)') != null) { 
		var activeSection = document.querySelector('.wh_breadcrumb li:nth-child(2)').innerText.trim();
	} else {
		var activeSection = "None";
	}	

    if (activeSection.match(/^Payment Page$/)) {
        $('header .wh_top_menu li:nth-child(1) a').addClass('active');
    } else if (activeSection.match(/^Gate$/)) {
        $('header .wh_top_menu li:nth-child(2) a').addClass('active');
    } else if (activeSection.match(/^Old Dashboard$/)) {
        $('header .wh_top_menu li:nth-child(3) a').addClass('active');
    } else if (activeSection.match(/^Dashboard$/)) {
        $('header .wh_top_menu li:nth-child(4) a').addClass('active');
    } else if (activeSection.match(/^3-D Secure 2$/)) {
        $('header .wh_top_menu li:nth-child(5) a').addClass('active');
	} else if (activeSection.match(/^FAQ$/)) {
        $('header .wh_top_menu li:nth-child(6) a').addClass('active');
    } else if (activeSection.match(/^References$/)) {
        $('header .wh_top_menu li:nth-child(7) a').addClass('active');
    } else if (activeSection.match(/^What's new$/)) {
        $('header .wh_top_menu li:nth-child(8) a').addClass('active');
    }

// Temp fix that refreshes container render by rewriting its content in 50 ms after page is loaded
    setTimeout(function(){
        var badSidebar = $("aside.sidebar").html();
        $("aside.sidebar").html(badSidebar);
    },50);

    if ($('.table.table_with_code').length) {

        $('.table.table_with_code').each(function () {
            $(this).find('th:last-child').prepend('<button type="button" class="expand_all_code"><span>Show all</span><span>Hide all</span></button>')
        });

        $('.expand_all_code').on('click', function () {
            var $codeWrapper = $(this).parents('.tablenoborder').find('.div');

            if ($(this).hasClass('expanded')) {
                $codeWrapper.each(function () {
                    $(this).removeClass('expanded');
                });
                $(this).removeClass('expanded');
            } else {
                $codeWrapper.each(function () {
                    $(this).addClass('expanded');
                });
                $(this).addClass('expanded');
            }

        });

        $('.table.table_with_code tr td .div > span.ph.ph_Hide').on('click', function () {
            $(this).parents('.div').removeClass('expanded');
        });
        $('.table.table_with_code tr td .div > span.ph.ph_Show').on('click', function () {
            $(this).parents('.div').addClass('expanded');
        })

    }

    $('.sidebar li.active').parents('li').addClass('active');

    $('.sidebar .wh_top_menu > ul > li > span > a').on('click', function (e) {
        if (!$(this).parents('li').hasClass('active')) {
            e.preventDefault();
        }
    });

    setTimeout(function() {$(document).scrollTop(0);});

    $('#button_up').on('click', function () {topFunction()});

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("button_up").style.opacity = "1";
        } else {
            document.getElementById("button_up").style.opacity = "0";
        }
    }

    $('.treetable').length ? $('.treetable tbody tr').each(function () {
        var ttId = $(this).find('td:last-child span.ttid').text();
        var ttParentId = $(this).find('td:last-child span.ttparentid').text();

        ttId ? $(this).attr('data-tt-id', ttId) : null;
        ttParentId ? $(this).attr('data-tt-parent-id', ttParentId) : null;

    }) : null;

    $('.treetable').length ? $('.treetable').treetable({
        clickableNodeNames: true,
        expandable: true,
        expanderTemplate: '<span class="treetable__expander"></span>',
        indent: 27
    }).tablesorter({
        sortList: [[0,0]]
    }) : null;

// When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Chrome, Safari and Opera
        document.documentElement.scrollTop = 0; // For IE and Firefox
    }


    $('header .navbar .wh_top_menu > ul > li > span > a.active').parents('.wh_top_menu > ul > li').addClass('li_active').append('<div class="navbar__expander"></div>');

    $('.navbar__expander').on('click', function () {
        $('header .navbar').toggleClass('open');
    });

    $('.wh_search_input').on('click', function () {
        $('body').addClass('mobile-search_active');
        $('.wh_search_textfield').focus();
    });
    $('.mobile-search-cancel').on('click', function (e) {
        $('body').removeClass('mobile-search_active');
        e.stopPropagation();
    });

    $('.wh_search_input').on('click', function (e) {
        e.stopPropagation();
    })


    $('body').on('click', function (e) {
        $('body').removeClass('mobile-search_active');
        //хз зачем ограничено всплытие, закомментил из-за конфликта с конвертом и меню
        // e.stopPropagation();
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
        $('.sidebar').removeClass('mobile-show');
        $('.fader').removeClass('show');
    });
    $('.wh_search_button span').text('Поиск');

    $(".sidebar a[href*='#']").on('click', function() {

        setTimeout(function(){
            var y = $(window).scrollTop();
            $(window).scrollTop(y-160);
        },10)
    });

    setCenterTextClassForNoteBlock();

    function setCenterTextClassForNoteBlock() {
        $('.note').each(function () {
            if($(this).innerHeight() < 67) {
                $(this).addClass('center_text');
            } else {
                $(this).removeClass('center_text');
            }
        })
    }


    window.addEventListener('resize', function(event){
        setCenterTextClassForNoteBlock();
    });

    $('a.xref').each(function () {
        $(this).prepend('<i></i>')
    })

    $('.wh_search_textfield').attr('placeholder', '');

    $("figure.fig.fig_show").on('click', 'p.figcap', function() {
        $(this).toggleClass('active').siblings('.codeblock').slideToggle(300);
        //$(this).find('.codeblock').toggle(300);
        //$("figure.fig.fig_show").removeClass('active');
        //$(this).addClass('active');
        //$(this).parents('figure.fig').addClass('fig_hide');
        // $(this).toggleClass('.fig_show');
        //$(this).addClass('.fig_show');
    });

    $("figure.fig.fig_hide").on('click', 'p.figcap', function() {
        $(this).toggleClass('active').siblings('.codeblock').slideToggle(300);
    });

    /*$("table.table_hide caption").on('click', '.tablecap', function() {
        $(this).toggleClass('active').find('thead.thead, tbody.tbody').slideToggle(300);
    });*/

    $("table.table_hide").on('click', 'caption', function() {
        $(this).parent().toggleClass('active');
        $(this).toggleClass('active').siblings('thead.thead, tbody.tbody').slideToggle(300);
    });

    /*$("table.table_show caption").on('click', '.tablecap', function() {
        $('table.table_show').toggleClass('active').find('thead.thead, tbody.tbody').slideToggle(300);
    });*/

    $("table.table_show").on('click', 'caption', function() {
        $(this).parent().toggleClass('active');
        $(this).toggleClass('active').siblings('thead.thead, tbody.tbody').slideToggle(300);
    });

    // Раскрывающиеся списки

    $("figure.fig.fig_hide").on('click', 'p.figcap', function() {
        $(this).parent().toggleClass('active');
        $(this).toggleClass('active').siblings('.ol').slideToggle(300);
		$(this).toggleClass('active').siblings('.ul').slideToggle(300);
        $(this).siblings('.p').slideToggle(300);
    });

    $("figure.fig.fig_show").on('click', 'p.figcap', function() {
        $(this).parent().toggleClass('active');
        $(this).toggleClass('active').siblings('.ol').slideToggle(300);
		$(this).toggleClass('active').siblings('.ul').slideToggle(300);
        $(this).siblings('.p').slideToggle(300);
    });

    $("figure.fig.fig_hide > ol.ol").prev().css("background-color", "#fff");
    $("figure.fig.fig_show > ol.ol").prev().css("background-color", "#fff");
    $("figure.fig.fig_hide > ul.ul").prev().css("background-color", "#fff");
    $("figure.fig.fig_show > ul.ul").prev().css("background-color", "#fff");

	$('body').on('click', 'a.xref.nolink', function (e) {
        e.preventDefault();
        // do something
	});
	$('body').on('contextmenu', 'a.xref.nolink', function (e) {
        e.preventDefault();
        // do something
	});
	$('body').on('auxclick', 'a.xref.nolink', function (e) {
        e.preventDefault();
        // do something
	});

	/* Content menu start */
	$('#wh_topic_toc').height($(window).height() - 100);

	function checkNextContentNodeIsTopic(currentNode) {
		var nextNode = currentNode.next();
		var nextNodeMenuItem = $('#wh_topic_toc li a[data-tocid = "'+ nextNode.attr('id') + '"]');

		if (!nextNode.length || nextNodeMenuItem.length) {
			return true;
		}

		return nextNode;
	}
    let timeoutPointer = 0;
	function markMenuItemByCurrentNode() {
        if($("#wh_topic_toc").hasClass("scroll-block")){
            return;
        }
		var topOffset = 150;
		$.each($('#wh_topic_toc *[data-tocid]'), function () {
			var contentNodeTopic = $('#' + $(this).attr('data-tocid'));
			var fullTopicHeight = 0;
			var nextContentNode = contentNodeTopic;

			while (nextContentNode !== true) {
				fullTopicHeight = fullTopicHeight + nextContentNode.height();
				nextContentNode = checkNextContentNodeIsTopic(nextContentNode);
			}

			if (
				((contentNodeTopic.offset().top - topOffset) < $(window).scrollTop())
				&& (contentNodeTopic.offset().top + fullTopicHeight > $(window).scrollTop())
			) {
                $('#wh_topic_toc li a').removeClass('current_node');
                $(".section-item, .topic-item").removeClass('current_node');
                // $(".topic-item>ul, .section-item>ul").stop().slideUp(300);
                let currentNode = $('#wh_topic_toc li a[data-tocid = "'+ contentNodeTopic.attr('id') + '"]');
                currentNode.addClass('current_node');
                currentNode.parents(".section-item, .topic-item").addClass('current_node');
            }
		});
        clearTimeout(timeoutPointer);
        timeoutPointer = setTimeout(function(){
            //прокрутка меню до элемента
            let currentNode = $("a.current_node");
            let newCurrentOffset = currentNode.length > 0 ? currentNode.parent()[0].offsetTop : 0;
            if(newCurrentOffset == 0){
                currentNode.parents("ul").each(function(index){
                    if(!$(this).is(":visible")){
                        newCurrentOffset = $(this).parent()[0].offsetTop;
                    }
                });
            }
            $("#wh_topic_toc .scroll-content").stop(true).animate(
                {scrollTop: (newCurrentOffset - 10) + 'px'},
                300,
                "linear"
            )
        },100);
	}

    $(window).scroll(markMenuItemByCurrentNode);
    markMenuItemByCurrentNode();
    $('body').on('click', '#wh_topic_toc *[data-tocid]', function () {
        var tocMenu = $(this);
        $([document.documentElement, document.body]).animate({
            scrollTop: $('#' + tocMenu.attr('data-tocid')).offset().top - 100
        }, 400, function () {
            //хак для принудительной подсветки выбранного элемента после завершения действия прокрутки после нажатия на элемент меню
            setTimeout(function(){
                $('#wh_topic_toc li a').removeClass('current_node');
                $(".section-item, .topic-item").removeClass('current_node');
                tocMenu.addClass('current_node');
                tocMenu.parents(".section-item, .topic-item").addClass('current_node');
            },10);
        });
    });
	
	$(window).bind("load", function () {
        if (window.location.hash !== '') {
            $('#wh_topic_toc *[data-tocid=' + window.location.hash.substr(1) + ']').click();
        }
    });
	/* Content menu end */

    /* Sortable table start */
    var tables = $('th.sortable').closest('table');
    tables.find('th:not(.sortable)').data("sorter", false);
    tables.tablesorter();
    /* Sortable table end */
});
 
 function iframeResize(obj){
            let iframe = obj;
            let form = obj.contentWindow.document.querySelector(".signature-form");
            setInterval(function(){
                iframe.height = form.clientHeight;
            },100)
        }
