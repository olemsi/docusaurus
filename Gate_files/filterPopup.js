$(document).ready(function() {
    let popupText = "This article is available <span class='filter-popup-text-special-br'></span>in full&#8209;length or short version.";
    let autoCloseDelaySeconds = 30;

    let isDisabled = localStorage.getItem('filterPopupDisable');
    let processedPages = JSON.parse(sessionStorage.getItem('filterPopupProcessedPages'));
    if (!processedPages) {
        processedPages = [];
    }

    if (processedPages.indexOf(window.location.pathname) == -1 && !isDisabled) {
        let popupInterval = setInterval(function () {
            let filterItem = $(".content-filtration");
            if (filterItem.length == 0) {
                return;
            }else{
                if(filterItem.hasClass("content-filtration--disable")){
                    clearInterval(popupInterval);
                    return;
                }
            }

            clearInterval(popupInterval);
            let popupHtml = `
        <style>
            .content-filtration{
                position: relative;
            }
            .content-filtration-popup-container{
                position: absolute;
                top: 40px;
                right: -202px;
                
                width: 303px;
                min-height: 64px;
                padding: 10px 50px 10px 24px;
                display: flex;
                align-items: center;
                
                background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMyIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMCAwaDN2NjVIMHoiIGZpbGw9IiMxRTg5RTciIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K");
                background-repeat: no-repeat;
                background-size: 3px;
                border-radius: 6px;
                
                box-shadow: 0 2px 16px 0 rgba(195, 195, 195, 0.65);
                background-color: #fff;
                
                cursor: auto;
                transition: 300ms all;
            }
            
            .content-filtration-popup-container.popup-hide{
                display: none;
            }
            .content-filtration-popup-cross{
                position: absolute;
                top: 9px;
                right: 9px;               
                width: 12px;
                height: 12px;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+R3JvdXAgOSBDb3B5IDI8L3RpdGxlPgogICAgPGcgaWQ9ItCw0LTQsNC/0YLQuNCyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iNzY4LXwt0KXQtdC00LXRgCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcwMy4wMDAwMDAsIC02Mi4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9InBvcC11cC1maWx0ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4My4wMDAwMDAsIDQ2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTktQ29weS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMjAuMDAwMDAwLCAxNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAyLjAwMDAwMCkiIGZpbGw9IiM5RTlGOUUiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJDb21iaW5lZC1TaGFwZSIgcG9pbnRzPSI3LjY0NjQ0NjYxIC0wLjM1MzU1MzM5MSA4LjM1MzU1MzM5IDAuMzUzNTUzMzkxIDQuNzA2IDQgOC4zNTM1NTMzOSA3LjY0NjQ0NjYxIDcuNjQ2NDQ2NjEgOC4zNTM1NTMzOSA0IDQuNzA2IDAuMzUzNTUzMzkxIDguMzUzNTUzMzkgLTAuMzUzNTUzMzkxIDcuNjQ2NDQ2NjEgMy4yOTMgNCAtMC4zNTM1NTMzOTEgMC4zNTM1NTMzOTEgMC4zNTM1NTMzOTEgLTAuMzUzNTUzMzkxIDQgMy4yOTMiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
            
                cursor: pointer;
            }
            .content-filtration-popup-arrow{
                position: absolute;
                top: -5px;
                right: 207px;
                width: 10px;
                height: 10px;
                transform: rotate(45deg);
                background-color: #fff;             
            }
            .content-filtration-popup-text{
               font-family: ProximaNova-Regular;
               font-size: 14px;
               font-weight: normal;
               font-stretch: normal;
               font-style: normal;
               line-height: 1.29;
               letter-spacing: 0.25px;
               color: #6f6f6f;
            }
            
            
            @media screen and (max-width: 1439px){
                .content-filtration-popup-container{
                    right: -152px;
                }
                .content-filtration-popup-arrow{
                    right: 158px;                  
                }
            }
            @media screen and (max-width: 1279px){
                .content-filtration-popup-container{
                    right: -155px;
                }
                .content-filtration-popup-arrow{
                    right: 161px;                  
                }
            }
            @media screen and (max-width: 767px){
                .content-filtration-popup-container{
                    right: -149px;                    
                    width: 272px;
                    padding: 10px 45px 10px 21px;
                }
                .content-filtration-popup-arrow{
                    right: 154px;                  
                }
                .filter-popup-text-special-br{
                    display: block;
                }
            }
            
        </style>
        <div class="content-filtration-popup-container popup-hide" title="">
            <div class="content-filtration-popup-text">${popupText}</div>
            <div class="content-filtration-popup-arrow"></div>
            <div class="content-filtration-popup-cross"></div>
        </div>
        `;
            $(".content-filtration").append(popupHtml);
            $(".content-filtration-popup-container").removeClass("popup-hide");
            $(".content-filtration-popup-container").on("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
            })
            $(".content-filtration-popup-cross").on("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
                localStorage.setItem('filterPopupDisable', "true");
                $(this).parent().addClass("popup-hide");
            })

            setTimeout(function () {
                $(".content-filtration-popup-container").addClass("popup-hide");
            }, autoCloseDelaySeconds * 1000);

            $(".top-menu__menu-current-section, .wh_search_input, .user-nav__write-btn").on("click",function(){
                $(".content-filtration-popup-container").addClass("popup-hide");
            })
            $(".top-menu__menu-section-item, .top-menu__menu-current-section").on("mouseover",function(){
                $(".content-filtration-popup-container").addClass("popup-hide");
            })

            processedPages.push(window.location.pathname);
            sessionStorage.setItem('filterPopupProcessedPages', JSON.stringify(processedPages));
        }, 1000);
    }
});
