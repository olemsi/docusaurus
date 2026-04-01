$(document).ready(function(){
    //переходник для формирования верстки галлереи
    let alltechDocGalleriesHtml = $(".sectiondiv.gallery");
    alltechDocGalleriesHtml.each(function(){
        let gallery = $(this);
        gallery.hide();
        let imagesBlock = gallery.find(".fig.fignone");
        let fineImageHtml = "";
        imagesBlock.each(function(){
            let src = $(this).find("img").prop("src");
            let titleBlockText = $(this).find("p").html();
            titleBlockText = titleBlockText.replace(/<span.*figtitleprefix.*?<\/span>/gm,"");
            titleBlockText = titleBlockText.replace(/(<([^>]+)>)/gi, "");
            let titleText = "";
            titleText = titleBlockText;
            fineImageHtml += `<img src="${src}" alt="${titleText}" title="${titleText}">`;
        })
        let docGalleryHtml = `<div class="doc-gallery">${fineImageHtml}</div>`;
        gallery.after(docGalleryHtml);
    })

    //берем все галлереи со страницы
    let allGalleries = $(".doc-gallery");

    //инициализация галерей
    allGalleries.each(function(){
        let gallery = $(this);
        let images = $(this).find("img");

        // проверка на firefox
        let firefox = /firefox/.test(navigator.userAgent.toLowerCase());
        let mobile = /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase());
        let firefoxClass = "";
        let firefoxFullscreenClass = "";
        if(firefox){
            firefoxClass="firefox";
            firefoxFullscreenClass="firefox-fullscreen";
        }
        let mobileClass = "";
        let mobileFullscreenClass = "";
        if(mobile){
            mobileClass="mobile";
            mobileFullscreenClass="mobile-fullscreen";
        }

        gallery.append(`<div class="doc-gallery__hr_top"></div>`);

        gallery.append(`
        <div class="doc-gallery__image-container-outer ${firefoxClass} ${mobileClass}">
            <div class="doc-gallery__controls-container">
                <div class="doc-gallery__control_zoom-in"></div>
                <div class="doc-gallery__control_zoom-out"></div>
                <div class="doc-gallery__control_normal-size"></div>
                <div class="doc-gallery__control_full-screen"></div>
                <div class="doc-gallery__zoom-info" data-timer-id="">100%</div>
            </div>
            <div class="doc-gallery__nav-arrow_left"></div>
            <div class="doc-gallery__nav-arrow_right"></div>
            <div class="doc-gallery__image-container-inner">
                <img class="doc-gallery__image" data-scale="1" data-natural-height="" data-natural-width="">
            </div>
        </div>
        <div class="doc-gallery__full-screen-image-container-outer ${firefoxFullscreenClass} ${mobileFullscreenClass}">
            <div class="doc-gallery__full-screen-image-container-inner">
                <img class="doc-gallery__full-screen-image" data-scale="1" data-natural-height="" data-natural-width="">
            </div>
            <div class="doc-gallery__full-screen-controls-container">
                <div class="doc-gallery__full-screen-control_zoom-in"></div>
                <div class="doc-gallery__full-screen-control_zoom-out"></div>
                <div class="doc-gallery__full-screen-control_normal-size"></div>
                <div class="doc-gallery__full-screen-zoom-info" data-timer-id="">100%</div>
            </div>
            <div class="doc-gallery__full-screen-nav-arrow_left"></div>
            <div class="doc-gallery__full-screen-nav-arrow_right"></div>            
            <div class="doc-gallery__full-screen-image-container-outer-close-button"></div>
            <div class="doc-gallery__full-screen-nav-arrow_left"></div>
            <div class="doc-gallery__full-screen-nav-arrow_right"></div>
            <div class="doc-gallery__full-screen-button-container">
                <div class="doc-gallery__full-screen-button-container-inner"></div>
            </div>
        </div>
        `);

        gallery.append(`<div class="doc-gallery__hr_bottom"></div>`);
        //формируем верстку кнопок
        gallery.append(`<div class="doc-gallery__img-button-container"></div>`);
        images.each(function(index){
            let currentClass="";
            if(index==0){
                currentClass="doc-gallery__current-image";
            }
            let text = $(this).prop("title");
            if(text==""){
                text = "Image title is not set";
            }
            let imageSrc = $(this).attr("src");
            let buttonHtml =`<input class="doc-gallery__img-button ${currentClass}" type="button" data-img-num="${index}" data-img-src="${imageSrc}" value="${text}">`;
            gallery.find(".doc-gallery__img-button-container").append(buttonHtml);
            let fullScreenButtonHtml =`<div class="doc-gallery__full-screen-img-button ${currentClass}" type="button" data-img-num="${index}" data-img-src="${imageSrc}">${text}</div>`;
            gallery.find(".doc-gallery__full-screen-button-container-inner").append(fullScreenButtonHtml);
        });

        //привязываем обработчики событий
        $(window).on("resize",function(){
            fullScreenButtonPosition(gallery);
        });
        gallery.find(".doc-gallery__nav-arrow_right").on("click",function(){
            let currentImgNum = Number(gallery.find(".doc-gallery__current-image").attr("data-img-num"));
            changeImage(gallery,currentImgNum+1);
        });
        gallery.find(".doc-gallery__nav-arrow_left").on("click",function(){
            let currentImgNum = Number(gallery.find(".doc-gallery__current-image").attr("data-img-num"));
            changeImage(gallery,currentImgNum-1);
        });
        gallery.find(".doc-gallery__img-button").on("click",function(){
            let currentImgNum = $(this).attr("data-img-num");
            changeImage(gallery,currentImgNum);
        });
        gallery.find(".doc-gallery__control_zoom-in").on("click",function(){
            let image = gallery.find(".doc-gallery__image");
            let naturalHeight = Number(image.attr("data-natural-height"));
            let naturalWidth = Number(image.attr("data-natural-width"));
            let currentScale = Number(image.attr("data-scale"));
            let scaleChangeRate = 0.25;
            if(currentScale>=2){
                scaleChangeRate = 0.5;
            }
            if(currentScale>=3){
                scaleChangeRate = 1;
            }
            if(currentScale>=4){
                scaleChangeRate = 2;
            }
            if(currentScale>=8){
                scaleChangeRate = 4;
            }
            if(currentScale>=16){
                scaleChangeRate = 8;
            }
            let newScale =  currentScale + scaleChangeRate;
            image.width(naturalWidth*newScale);
            image.height(naturalHeight*newScale);
            image.attr("data-scale",newScale);

            scaleLabelUpdate(gallery,newScale*100+"%");
        });
        gallery.find(".doc-gallery__control_zoom-out").on("click",function(){
            let image = gallery.find(".doc-gallery__image");
            let naturalHeight = Number(image.attr("data-natural-height"));
            let naturalWidth = Number(image.attr("data-natural-width"));
            let currentScale = Number(image.attr("data-scale"));
            if(currentScale < 0.5){
                return;
            }
            let scaleChangeRate = 0.25;
            if(currentScale>2){
                scaleChangeRate = 0.5;
            }
            if(currentScale>3){
                scaleChangeRate = 1;
            }
            if(currentScale>4){
                scaleChangeRate = 2;
            }
            if(currentScale>8){
                scaleChangeRate = 4;
            }
            if(currentScale>16){
                scaleChangeRate = 8;
            }
            let newScale =  currentScale - scaleChangeRate;
            image.width(naturalWidth*newScale);
            image.height(naturalHeight*newScale);
            image.attr("data-scale",newScale);

            scaleLabelUpdate(gallery,newScale*100+"%");
        });
        gallery.find(".doc-gallery__control_normal-size").on("click",function(){
            let image = gallery.find(".doc-gallery__image");
            image.width("auto");
            image.height("auto");
            image.attr("data-scale",1);

            scaleLabelUpdate(gallery,"100%");
        });
        gallery.find(".doc-gallery__control_full-screen").on("click",function(){
            let image = gallery.find(".doc-gallery__full-screen-image");
            fullscreenImageMarginTopCalculate(image,1);
            $("body").css({"overflow":"hidden"});
            gallery.find(".doc-gallery__full-screen-image-container-outer").addClass("doc-gallery__full-screen-image-container-outer-visible");
            hideFullScreenControls(gallery,2000);
        });
        gallery.find(".doc-gallery__full-screen-image-container-outer-close-button").on("click",function(){
            gallery.find(".doc-gallery__full-screen-image-container-outer").removeClass("doc-gallery__full-screen-image-container-outer-visible");
            $("body").css({"overflow":"auto"});
        });
        gallery.find(".doc-gallery__full-screen-nav-arrow_right").on("click",function(){
            let currentImgNum = Number(gallery.find(".doc-gallery__current-image").attr("data-img-num"));
            changeImage(gallery,currentImgNum+1);
        });
        gallery.find(".doc-gallery__full-screen-nav-arrow_left").on("click",function(){
            let currentImgNum = Number(gallery.find(".doc-gallery__current-image").attr("data-img-num"));
            changeImage(gallery,currentImgNum-1);
        });
        gallery.find(".doc-gallery__full-screen-img-button").on("click",function(){
            let currentImgNum = $(this).attr("data-img-num");
            changeImage(gallery,currentImgNum);
        });
        gallery.find(".doc-gallery__full-screen-control_zoom-in").on("click",function(){
            let image = gallery.find(".doc-gallery__full-screen-image");
            let naturalHeight = Number(image.attr("data-natural-height"));
            let naturalWidth = Number(image.attr("data-natural-width"));
            let currentScale = Number(image.attr("data-scale"));
            let scaleChangeRate = 0.25;
            if(currentScale>=2){
                scaleChangeRate = 0.5;
            }
            if(currentScale>=3){
                scaleChangeRate = 1;
            }
            if(currentScale>=4){
                scaleChangeRate = 2;
            }
            if(currentScale>=8){
                scaleChangeRate = 4;
            }
            if(currentScale>=16){
                scaleChangeRate = 8;
            }
            let newScale =  currentScale + scaleChangeRate;
            image.width(naturalWidth*newScale);
            image.height(naturalHeight*newScale);
            image.attr("data-scale",newScale);

            if(image.hasClass("svg-image")){
                let basePaddings = 25;
                let newPaddings = basePaddings * newScale;
                image.css("padding",`${newPaddings}px`)
            }

            fullScreenScaleLabelUpdate(gallery,newScale*100+"%");
            fullscreenImageMarginTopCalculate(image);
        });
        gallery.find(".doc-gallery__full-screen-control_zoom-out").on("click",function(){
            let image = gallery.find(".doc-gallery__full-screen-image");
            let naturalHeight = Number(image.attr("data-natural-height"));
            let naturalWidth = Number(image.attr("data-natural-width"));
            let currentScale = Number(image.attr("data-scale"));
            if(currentScale < 0.5){
                return;
            }
            let scaleChangeRate = 0.25;
            if(currentScale>2){
                scaleChangeRate = 0.5;
            }
            if(currentScale>3){
                scaleChangeRate = 1;
            }
            if(currentScale>4){
                scaleChangeRate = 2;
            }
            if(currentScale>8){
                scaleChangeRate = 4;
            }
            if(currentScale>16){
                scaleChangeRate = 8;
            }
            let newScale =  currentScale - scaleChangeRate;
            image.width(naturalWidth*newScale);
            image.height(naturalHeight*newScale);
            image.attr("data-scale",newScale);

            if(image.hasClass("svg-image")){
                let basePaddings = 25;
                let newPaddings = basePaddings * newScale;
                image.css("padding",`${newPaddings}px`);
            }

            fullScreenScaleLabelUpdate(gallery,newScale*100+"%");
            fullscreenImageMarginTopCalculate(image);
        });
        gallery.find(".doc-gallery__full-screen-control_normal-size").on("click",function(){
            let image = gallery.find(".doc-gallery__full-screen-image");
            if(image.hasClass("svg-image")){
                image.css("padding",`0`);
                let normalHeight = Number(image.attr("data-natural-height"))+50;
                let normalWidth = Number(image.attr("data-natural-width"))+50;
                image.css("width",`${normalWidth}px`);
                image.css("height",`${normalHeight}px`);
                image.css("padding","25px");
            }
            else{
                let normalHeight = Number(image.attr("data-natural-height"));
                let normalWidth = Number(image.attr("data-natural-width"));
                image.width(normalWidth);
                image.height(normalHeight);
            }
            image.attr("data-scale",1);

            fullScreenScaleLabelUpdate(gallery,"100%");
            fullscreenImageMarginTopCalculate(image);
        });

        //инициализация плагина для прокрутки
        gallery.find(".doc-gallery__image-container-inner").kinetic();
        gallery.find(".doc-gallery__full-screen-image-container-inner").kinetic();
        //инициализация плагина для полос прокрутки
        gallery.find(".doc-gallery__image-container-inner").addClass("scrollbar-janos").scrollbar({
            "onScroll":function(y, x){
                verticalGradient(this.container,y.maxScroll, y.scroll);
                horizontalGradient(this.container,x.maxScroll, x.scroll);
            }
        }).parent().append("<div class='top-gradient'></div><div class='bottom-gradient'></div>");
        //градиент справа и слева изображения, иначе только сверху и снизу
        // }).parent().append("<div class='top-gradient'></div><div class='bottom-gradient'></div><div class='left-gradient'></div><div class='right-gradient'></div>");
        gallery.find(".doc-gallery__full-screen-image-container-inner").addClass("scrollbar-janos scrollbar-janos-full-screen").scrollbar();
        //обработка вертикальных шторок
        verticalGradient(gallery.find(".doc-gallery__image-container-inner.scrollbar-janos"),0,0);
        //показывем первое изображение
        changeImage(gallery,0);
    });

    function changeImage(gallery,imgNum){
        //логика для нормального режима
        let img = gallery.find(".doc-gallery__image");
        let button = gallery.find(`.doc-gallery__img-button[data-img-num="${imgNum}"]`);
        let allButtons = gallery.find(".doc-gallery__img-button");
        let imgSrc = button.attr("data-img-src");
        if(imgNum==0){
            gallery.find(".doc-gallery__nav-arrow_left").hide();
        }
        else{
            gallery.find(".doc-gallery__nav-arrow_left").show();
        }
        if(imgNum>allButtons.length-2){
            gallery.find(".doc-gallery__nav-arrow_right").hide();
        }
        else{
            gallery.find(".doc-gallery__nav-arrow_right").show();
        }
        gallery.find(".doc-gallery__img-button").removeClass("doc-gallery__current-image");
        button.addClass("doc-gallery__current-image");
        img.stop().fadeOut(500,function (){
            img.width("auto");
            img.height("auto");
            img.prop("src",imgSrc);
            img.attr("data-scale","1");
            img.fadeIn(500, function(){
                if(imgSrc.match(/.*svg$/)){
                    img.attr("data-natural-width",img[0].clientWidth);
                    img.attr("data-natural-height",img[0].clientHeight);
                }
                else{
                    img.attr("data-natural-height",img[0].naturalHeight);
                    img.attr("data-natural-width",img[0].naturalWidth);
                }
            });
        });

        //логика для полноэкранного режима
        let fullScreenImg = gallery.find(".doc-gallery__full-screen-image");
        let fullScreenButton = gallery.find(`.doc-gallery__full-screen-img-button[data-img-num="${imgNum}"]`);
        if(imgNum==0){
            gallery.find(".doc-gallery__full-screen-nav-arrow_left").hide();
        }
        else{
            gallery.find(".doc-gallery__full-screen-nav-arrow_left").show();
        }
        if(imgNum>allButtons.length-2){
            gallery.find(".doc-gallery__full-screen-nav-arrow_right").hide();
        }
        else{
            gallery.find(".doc-gallery__full-screen-nav-arrow_right").show();
        }
        gallery.find(".doc-gallery__full-screen-img-button").removeClass("doc-gallery__current-image");
        fullScreenButton.addClass("doc-gallery__current-image");
        fullScreenImg.stop().fadeOut(500,function (){
            let initialHeight = $(".doc-gallery__full-screen-image-container-inner").height()-94;
            if (initialHeight > window.screen.height){
                initialHeight = window.screen.height;
            }
            if(imgSrc.match(/.*svg$/)){
                fullScreenImg.css("height",initialHeight+"px");
                fullScreenImg.width("auto");
                fullScreenImg.addClass("svg-image");
                fullScreenImg.css("padding","25px");
                setTimeout(function(){
                    if(fullScreenImg.height()<fullScreenImg.width()){
                        let initialWidth = initialHeight;
                        if (initialWidth > 800){
                            initialWidth = 800;
                        }
                        if (initialWidth > window.screen.width){
                            initialWidth = window.screen.width;
                        }
                        fullScreenImg.css("width",initialWidth+"px");
                        fullScreenImg.height("auto");
                        setTimeout(function(){
                            fullScreenImg.attr("data-natural-width",fullScreenImg.width());
                            fullScreenImg.attr("data-natural-height",fullScreenImg.height());
                            fullscreenImageMarginTopCalculate(fullScreenImg,true);
                            gallery.find(".doc-gallery__full-screen-control_normal-size").trigger("click");
                        },10)
                    }
                },10)
            }
            else{
                fullScreenImg.height(initialHeight+"px");
                fullScreenImg.width("auto");
                fullScreenImg.css("padding","0");
                setTimeout(function(){
                    let initialWidth = initialHeight;
                    if(fullScreenImg.height()<fullScreenImg.width()){
                        if (fullScreenImg.width()>1232){
                            initialWidth = 1232;
                        }
                        if (initialWidth > window.screen.width){
                            initialWidth = window.screen.width;
                        }
                        fullScreenImg.width(initialWidth+"px");
                        fullScreenImg.height("auto");
                        setTimeout(function(){
                            fullScreenImg.attr("data-natural-width",fullScreenImg.width());
                            fullScreenImg.attr("data-natural-height",fullScreenImg.height());
                            fullscreenImageMarginTopCalculate(fullScreenImg,true);
                            gallery.find(".doc-gallery__full-screen-control_normal-size").trigger("click");
                        },10)
                    }
                    else{
                        if (fullScreenImg.width() > window.screen.width){
                            initialWidth = window.screen.width;
                        }
                        fullScreenImg.width(initialWidth+"px");
                        fullScreenImg.height("auto");
                        setTimeout(function(){
                            fullScreenImg.attr("data-natural-width",fullScreenImg.width());
                            fullScreenImg.attr("data-natural-height",fullScreenImg.height());
                            fullscreenImageMarginTopCalculate(fullScreenImg,true);
                            gallery.find(".doc-gallery__full-screen-control_normal-size").trigger("click");
                        },10)
                    }
                },10)
                fullScreenImg.removeClass("svg-image");
            }
            fullScreenImg.prop("src",imgSrc);
            fullScreenImg.attr("data-scale","1");
            fullScreenImg.fadeIn(500,function (){
                if(imgSrc.match(/.*svg$/)){
                    fullScreenImg.attr("data-natural-width",fullScreenImg.width());
                    fullScreenImg.attr("data-natural-height",fullScreenImg.height());
                }
                else{
                    fullScreenImg.attr("data-natural-height",fullScreenImg.height());
                    fullScreenImg.attr("data-natural-width",fullScreenImg.width());
                }
            })
        });
        fullScreenButtonPosition(gallery);
    }

    function scaleLabelUpdate(gallery,percentText){
        let scaleLabel = gallery.find(".doc-gallery__zoom-info");
        scaleLabel.html(percentText);
        let oldTimerId = scaleLabel.attr("data-timer-id");
        if( oldTimerId != ""){
            clearTimeout(oldTimerId);
        }
        scaleLabel.addClass("doc-gallery__zoom-info_show");
        let timerId = setTimeout(function(){
            scaleLabel.attr("data-timer-id","");
            scaleLabel.removeClass("doc-gallery__zoom-info_show");
        },2000);
        scaleLabel.attr("data-timer-id",timerId);
    }

    function fullScreenScaleLabelUpdate(gallery,percentText){
        let scaleLabel = gallery.find(".doc-gallery__full-screen-zoom-info");
        scaleLabel.html(percentText);
        let oldTimerId = scaleLabel.attr("data-timer-id");
        if( oldTimerId != ""){
            clearTimeout(oldTimerId);
        }
        scaleLabel.addClass("doc-gallery__zoom-info_show");
        let timerId = setTimeout(function(){
            scaleLabel.attr("data-timer-id","");
            scaleLabel.removeClass("doc-gallery__zoom-info_show");
        },2000);
        scaleLabel.attr("data-timer-id",timerId);
    }

    //позиционирование навигационных кнопок
    function fullScreenButtonPosition(gallery){
        let buttonsContainerWidth = gallery.find(".doc-gallery__full-screen-button-container").width();
        let buttonsContainerInnerWidth = gallery.find(".doc-gallery__full-screen-button-container-inner")[0].scrollWidth;
        let innerContainer = gallery.find(".doc-gallery__full-screen-button-container-inner");

        //поиск отступа
        let offset = 0;
        gallery.find(".doc-gallery__full-screen-img-button").each(function(){
            let button = $(this);
            if(button.hasClass("doc-gallery__current-image")){
                return false;
            }
            offset += button.outerWidth(true);
        });

        if(buttonsContainerWidth < buttonsContainerInnerWidth){
            let marginLeftOffset = 0;
            if(offset < (buttonsContainerWidth / 2)){
                innerContainer.css({"margin-left": '0px'});
            }
            else{
                if(buttonsContainerInnerWidth-offset < buttonsContainerWidth/2){
                    marginLeftOffset = buttonsContainerWidth - buttonsContainerInnerWidth;
                    innerContainer.css({"margin-left": `${marginLeftOffset}px`});
                }
                else{
                    marginLeftOffset = buttonsContainerWidth/2 - offset;
                    innerContainer.css({"margin-left": `${marginLeftOffset}px`});
                }

            }
        }
        else{
            innerContainer.css({"margin-left": 'auto'});
        }
    }

    //сокрытие элементов интерфейса при бездействии
    function hideFullScreenControls(gallery,msTimer){
        let mainControls = gallery.find(".doc-gallery__full-screen-controls-container");
        let closeIcon = gallery.find(".doc-gallery__full-screen-image-container-outer-close-button");
        let leftArrow = gallery.find(".doc-gallery__full-screen-nav-arrow_left");
        let rightArrow = gallery.find(".doc-gallery__full-screen-nav-arrow_right");
        let layout = gallery.find(".doc-gallery__full-screen-image-container-outer");
        let scrollElements = gallery.find(".doc-gallery__full-screen-image-container-outer .scroll-element");
        let allInLayout = gallery.find(".doc-gallery__full-screen-image-container-outer *");

        let timerIdOld = layout.attr("data-timer-hide-controls");
        clearTimeout(timerIdOld);
        mainControls.removeClass("doc-gallery__hide-controls");
        closeIcon.removeClass("doc-gallery__hide-controls");
        leftArrow.removeClass("doc-gallery__hide-controls");
        rightArrow.removeClass("doc-gallery__hide-controls");
        scrollElements.removeClass("doc-gallery__hide-controls");
        layout.removeClass("doc-gallery__hide-controls");
        allInLayout.removeClass("doc-gallery__hide-cursor");

        let timerIdNew = setTimeout(function(){
            mainControls.addClass("doc-gallery__hide-controls");
            closeIcon.addClass("doc-gallery__hide-controls");
            leftArrow.addClass("doc-gallery__hide-controls");
            rightArrow.addClass("doc-gallery__hide-controls");
            scrollElements.addClass("doc-gallery__hide-controls");
            layout.addClass("doc-gallery__hide-controls");
            allInLayout.addClass("doc-gallery__hide-cursor");
        }, msTimer);
        layout.attr("data-timer-hide-controls",timerIdNew);

        //обновление таймера при движении
        layout.on("mousemove click touchmove",function(){
            let timerIdOld = layout.attr("data-timer-hide-controls");
            clearTimeout(timerIdOld);
            mainControls.removeClass("doc-gallery__hide-controls");
            closeIcon.removeClass("doc-gallery__hide-controls");
            leftArrow.removeClass("doc-gallery__hide-controls");
            rightArrow.removeClass("doc-gallery__hide-controls");
            scrollElements.removeClass("doc-gallery__hide-controls");
            layout.removeClass("doc-gallery__hide-controls");
            allInLayout.removeClass("doc-gallery__hide-cursor");

            let timerIdNew = setTimeout(function(){
                mainControls.addClass("doc-gallery__hide-controls");
                closeIcon.addClass("doc-gallery__hide-controls");
                leftArrow.addClass("doc-gallery__hide-controls");
                rightArrow.addClass("doc-gallery__hide-controls");
                scrollElements.addClass("doc-gallery__hide-controls");
                layout.addClass("doc-gallery__hide-controls");
                allInLayout.addClass("doc-gallery__hide-cursor");
            }, msTimer);
            layout.attr("data-timer-hide-controls",timerIdNew);
        });
    }

    function fullscreenImageMarginTopCalculate(imageElement, noTransition = false){
        if(noTransition){
            imageElement.addClass("no-transition")
        }
        let naturalHeight = $(imageElement).attr("data-natural-height");
        let scale = $(imageElement).attr("data-scale");

        let imageHeight;
        if($(imageElement).hasClass("svg-image")){
            imageHeight = Math.round((Number(naturalHeight)+50) * scale);
        }
        else{
            imageHeight = Math.round(naturalHeight * scale);
        }
        let containerHeight = Math.round($(".doc-gallery__full-screen-image-container-inner").height());
        if(imageHeight<=containerHeight){
            let marginTop = (containerHeight - imageHeight) / 2;
            $(imageElement).css({'margin-top':marginTop+"px"})
        }
        else{
            $(imageElement).css({'margin-top':"0"})
        }
        if (noTransition) {
            setTimeout(function () {
                imageElement.removeClass("no-transition")
            }, 100);
        }
    }

    function verticalGradient(container,maxScroll, currentScroll){
        //firefox hack
        if($(container).parents(".doc-gallery__image-container-outer").hasClass("firefox")){
            $(container).parent().find(".scroll-x").addClass("scroll-scrolly_visible");
            $(container).parent().find(".scroll-y").addClass("scroll-scrolly_visible");
            let galleryContainer = $(container).height();
            let image = $(container).find("img").height();
            if((image-galleryContainer)<0){
                $(container).parent().find(".scroll-x").removeClass("scroll-scrolly_visible");
                $(container).parent().find(".scroll-y").removeClass("scroll-scrolly_visible");
            }
        }

        if($(container).parent().find(".top-gradient").length<1){
            return;
        }
        let topPosition = Math.abs(0-currentScroll);
        let bottomPosition = maxScroll - currentScroll;
        if($(container).parents(".doc-gallery__image-container-outer").hasClass("firefox")){
            bottomPosition -= 16;
        }
        if (topPosition<2){
            let newPosition = -500;
            $(container).parent().find(".top-gradient").css({"top":newPosition+"px"});

        }
        else{
            $(container).parent().find(".top-gradient").css({"top":"0px"});
        }
        if($(container).parent().find(".scroll-element.scroll-x").hasClass("scroll-scrollx_visible")){
            if ($(container).parents(".doc-gallery__image-container-outer").hasClass("firefox-without-horizontal")){
                if (bottomPosition<2){
                    let newPosition = -500;
                    $(container).parent().find(".bottom-gradient").css({"bottom":newPosition+"px"});
                }
                else{
                    $(container).parent().find(".bottom-gradient").css({"bottom":"0px"});
                }
            }
            else {
                if (bottomPosition<2){
                    let newPosition = -500;
                    $(container).parent().find(".bottom-gradient").css({"bottom":newPosition+"px"});

                }
                else{
                    $(container).parent().find(".bottom-gradient").css({"bottom":"17px"});
                }
            }
        }
        else{
            if (bottomPosition<2){
                let newPosition = -500;
                $(container).parent().find(".bottom-gradient").css({"bottom":newPosition+"px"});

            }
            else{
                $(container).parent().find(".bottom-gradient").css({"bottom":"0px"});
            }
        }
    }
    function horizontalGradient(container,maxScroll, currentScroll){
        //firefox hack
        if($(container).parents(".doc-gallery__image-container-outer").hasClass("firefox")){
            $(container).parent().find(".scroll-x").addClass("scroll-scrollx_visible");
            $(container).parent().find(".scroll-y").addClass("scroll-scrollx_visible");
            $(container).parents(".firefox").removeClass("firefox-without-horizontal");
            let scrollBarLength = $(container).parent().find(".scroll-x .scroll-bar").width();
            let scrollElementTrackLength = $(container).parent().find(".scroll-x .scroll-element_track").width();
            if((scrollElementTrackLength-scrollBarLength)<2){
                $(container).parent().find(".scroll-x").removeClass("scroll-scrollx_visible");
                $(container).parent().find(".scroll-y").removeClass("scroll-scrollx_visible");
                $(container).parents(".firefox").addClass("firefox-without-horizontal");
            }
        }

        if($(container).parent().find(".top-gradient").length<1){
            return;
        }
        let leftPosition = Math.abs(0-currentScroll);
        let rightPosition = maxScroll - currentScroll;
        if($(container).parents(".doc-gallery__image-container-outer").hasClass("firefox")){
            rightPosition -= 16;
        }

        if (leftPosition<2){
            let newPosition = -500;
            $(container).parent().find(".left-gradient").css({"left":newPosition+"px"});
        }
        else{
            $(container).parent().find(".left-gradient").css({"left":"26px"});
        }
        if (rightPosition<2){
            let newPosition = -500;
            $(container).parent().find(".right-gradient").css({"right":newPosition+"px"});
        }
        else{
            $(container).parent().find(".right-gradient").css({"right":"17px"});
        }
    }
});