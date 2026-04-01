$(document).ready(function() {
    let helpfulBtns = document.querySelector('.helpful__btns');
    let helpfulBtn = document.querySelectorAll('.helpful__btn');
    let answerPopup = document.querySelector('.answer-popup');

    helpfulBtns.addEventListener('click', function (e) {
        if (e.target.classList.contains('helpful__btn')) {
            let targetValue = "";
            if (e.target.name == "yes") {
                targetValue = "Yes";
            } else {
                targetValue = "No";
            }
            let url = window.location.href.toLowerCase();
            let conversionNameLocation = window.location.hostname.toLowerCase();
            let conversionName = "Is it helpful " + conversionNameLocation;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'addEvents_makeConversions',
                'conversion_name': conversionName,
                'conversion_step': url,
                'conversion_param': targetValue
            });
            setTimeout(function () {
                answerPopup.classList.remove('hidden');
            }, 500)
            helpfulBtn.forEach((btn) => btn.setAttribute('disabled', 'disabled'))
            e.target.classList.add('chosen');
            document.querySelector('.helpful').classList.add('disabled');
            setTimeout(function () {
                answerPopup.classList.add('hidden');
            }, 4500)
        }
    });

    //update year in copyright start
    let currentYear = new Date().getFullYear().toString().substr(-2);
    let copyrightElement = $(".doc-copyright-text");
    let copyrightText = copyrightElement.html();
    copyrightText = copyrightText.substr(0,copyrightText.length-2)+currentYear;
    copyrightElement.html(copyrightText);
    //update year in copyright end

    // helpful bottom position start
    window.setOffset = setOffset;
    window.addEventListener(`resize`, event => {
        setOffset();
    }, false);
    function setOffset(){
        let whContainerElement = document.querySelector(".wh_content_area");
        let helpfulElement = document.querySelector(".helpful");
        let additionalRightPadding;
        let lineWidth = document.querySelector(".doc-copyright-line").clientWidth;
        let helpfulInnerWidth = document.querySelector(".helpful__inner").clientWidth;
        let helpfulContainerElement = document.querySelector(".helpful__helpful-container");
        let helpfulContainerWidth = helpfulContainerElement.clientWidth;
        let copyrightTextWidth = document.querySelector(".doc-copyright-text").clientWidth;
        let helpfulQuestionWidth = document.querySelector(".helpful__q").clientWidth;
        let helpfulLinkContainerWidth = document.querySelector(".helpful__link-container").clientWidth+16;
        if(window.innerWidth<790){
            helpfulElement.classList.add("helpful-vertical");
        }
        else{
            helpfulElement.classList.remove("helpful-vertical");
        }
        if(window.innerWidth<768){
            additionalRightPadding = '50px';
        }
        else{
            additionalRightPadding = '0px';
        }
        helpfulElement.style.width=`calc(${$(whContainerElement).innerWidth()}px - ${$(whContainerElement).css("padding-left")} - ${additionalRightPadding})`;

        // if(lineWidth<=72){
        //     helpfulElement.classList.add("helpful-vertical");
        // }
        // else{
        //     if((helpfulInnerWidth - helpfulContainerWidth - copyrightTextWidth - 48) > 72){
        //         helpfulElement.classList.remove("helpful-vertical");
        //     }
        // }

        if(helpfulInnerWidth < helpfulQuestionWidth + helpfulLinkContainerWidth){
            helpfulContainerElement.classList.add("link-vertical");
            helpfulElement.classList.add("link-vertical");
        }
        else{
            helpfulContainerElement.classList.remove("link-vertical");
            helpfulElement.classList.add("link-vertical");
        }

        let answerPopUp = document.querySelector(".answer-popup");
        let helpfulButtons = document.querySelector(".helpful__btns");

        let wrapperContainer = document.querySelector(".wrapper .container")
        let offsetButtons = helpfulButtons.getBoundingClientRect().left - wrapperContainer.getBoundingClientRect().left;
        let verticalCompensation = 0;
        if(helpfulElement.classList.contains("helpful-vertical")){
            verticalCompensation = 42;
        }
        // let answerNewPosition = offsetButtons - answerPopUp.offsetWidth  + helpfulBtns.offsetWidth + verticalCompensation;
        // if(answerNewPosition<-2){
        //     answerNewPosition = -2;
        // }
        // answerPopUp.style.left = answerNewPosition + 'px';

        whContainerElement.style.minHeight=`calc(100vh - ${$(whContainerElement).offset().top+1}px)`;
        whContainerElement.style.paddingBottom=`${helpfulElement.offsetHeight}px`;
    }
    // helpful bottom position end

    //следим за изменением ширины контента и обрабатываем копирайт
    resizeElemObserver(document.querySelector(".wh_content_area"));
    function resizeElemObserver(element){
        setOffset();
        try {
            let resizeObserver = new ResizeObserver(function () {
                setOffset();
            });
            resizeObserver.observe(element);
        }
        catch (e){
            //old browser content resize check...
            let oldContentWidth=0;
            let interval = setInterval(function(){
                let newContentClientWidth = document.querySelector(".body").clientWidth;
                if(oldContentWidth!=newContentClientWidth){
                    oldContentWidth=newContentClientWidth;
                    setOffset();
                }
            },100);
        }
    }
});