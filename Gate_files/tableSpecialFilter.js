let filterIdPrefix = "en_";
let filterTitleCountries = "Countries";
let filterTabTitleCountries = "Countries";
let filterTitleCurrencies = "Currencies";
let filterTabTitleCurrencies = "Currencies";
let filterCurrenciesCounter = "Selected: 0";

let filterButtonSubmit = "Submit";
let filterButtonSelectAll = "Select all";
let filterButtonDeselectAll = "Clear all";
let filterButtonConfirmSelection = "Confirm <span>selection</span>";
let filterCountriesCounter = "Selected: 0";

let multitabSelectedLocalization = "Selected:";

let tableCounter = "1 method meets the search criteria";
let tableCounterNull = "0 methods meet the search criteria";
let numArray1 = ["method","methods"];
let numArray2 = ["meets","meet"];

$(document).ready(function () {
    if($(".tableFilterData code").length==0||$(".tableFilter").length==0){
        return;
    }
    let table = $(".tableFilter");
    let aliases = JSON.parse($(".tableFilterAliases code").text());
    let titles = JSON.parse($(".tableFilterCurrencyAliases code").text());
    let data = JSON.parse($(".tableFilterData code").text());
    let currencies = [];
    let countries = [];

    $.each(data, function (key, value) {
        if(value.countries.search("all")<0){
            let currentCountries = value.countries
                .split(",")
                .map(element => element.trim())
                .filter(element => !countries.includes(element));
            countries = countries.concat(currentCountries);
        }

        if(value.currencies.search("all")<0){
            let currentСurrencies = value.currencies
                .split(",")
                .map(element => element.trim())
                .filter(element => !currencies.includes(element));
            currencies = currencies.concat(currentСurrencies);
        }
    });
    countries = countries.sort();
    currencies = currencies.sort();
    $.each(data, function (key, value) {
        if(value.countries.search("all")>-1){
            if(value.countries.search("all_except")>-1){
                let startIndex = value.countries.search(/\[/) + 1;
                let endIndex = value.countries.search(/]/) -1;
                let exceptList = value.countries
                value.countries.substring(startIndex,endIndex)
                    .split(",")
                    .map(element => element.trim())
                let listToJoin = countries.filter(element => !exceptList.includes(element));
                data[key]["countries"] = listToJoin.join(', ');
            }
            else{
                data[key]["countries"] = countries.join(', ');
            }
        }
        if(value.currencies.search("all")>-1){
            if(value.currencies.search("all_except")>-1){
                let startIndex = value.currencies.search(/\[/) + 1;
                let endIndex = value.currencies.search(/]/) -1;
                let exceptList = value.currencies
                    .substring(startIndex,endIndex)
                    .split(",")
                    .map(element => element.trim())
                let listToJoin = currencies.filter(element => !exceptList.includes(element));
                data[key]["countries"] = listToJoin.join(', ');
            }
            else{
                data[key]["currencies"] = currencies.join(', ');
            }
        }
    });


    let inputCurrencies = inputMultiOneTabGenerate(currencies,aliases,titles,filterTitleCurrencies,filterTabTitleCurrencies,"currenciesCheck",filterCurrenciesCounter);
    let inputCountries = inputMultiOneTabGenerate(countries,aliases,titles,filterTitleCountries,filterTabTitleCountries,"countriesCheck",filterCountriesCounter);


    let filterHtml = `
<div class="store__parameters-form">
   <div class="store__container">
      <form id="tableFilterForm" class="">
         <div class="store__form store__flex store__public-form">
            ${inputCurrencies}
            ${inputCountries}
            <div class="store__parameters-form-wrapper-button store__flex-grow store__public-input">
               <div class="store__form-control"> <button type="button" class="store__button store__button_primary store__button_big store__filter-form-submit store__filter-form-submit_max-width-100 disabled">
                  ${filterButtonSubmit}
                  </button>
               </div>
            </div>
         </div>
         <div style="display: none" class="d-none currentFiltersState">[]</div>
         <div style="display: none" class="store__filter-form-error-notification" data-nothing-found-text="Hmm, unfortunately, we could not find anything to match your criteria. Try again with different criteria or <a href=&quot;/shop/inquiry&quot;>contact our sales team</a>."></div>
         <div class="table-counter">${tableCounter}</div> 
      </form>
   </div>
</div>   
    `;

    table.parent().before(filterHtml);
    tableCount();
    //применяем логику работы шоповских контролов к форме
    $("#tableFilterForm").shopFormLogic();

    $("#tableFilterForm .store__filter-form-submit").on("click", function(){
        updateTable(data,"currenciesCheck","countriesCheck");
    });

    $(`[name="currenciesCheck"],[name="countriesCheck"]`).on("change",function(){
        checkFilterButtonStatus("currenciesCheck","countriesCheck");
    });
    $(".store__modal-buttons-unselect-all,.store__modal-buttons-select-all").on("click",function(){
        setTimeout(function(){
            checkFilterButtonStatus("currenciesCheck","countriesCheck");
        },500);

    });
    setCurrentFilterState("currenciesCheck","countriesCheck");
    checkFilterButtonStatus("currenciesCheck","countriesCheck")
});

$.fn.extend({
    shopFormLogic: function () {
        if (!this.length) {
            return;
        }
        let targetForm = this[0];
        //узнаем селектор формы для проброса в логику
        let formSelector = $(targetForm)
            .parents()
            .map(function () {
                return this.tagName;
            })
            .get()
            .reverse()
            .concat([this.nodeName])
            .join(">");
        let id = $(targetForm).attr("id");
        if (id) {
            formSelector += "#" + id;
        }
        let classNames = $(targetForm).attr("class");
        if (classNames) {
            formSelector += "." + $.trim(classNames).replace(/\s/gi, ".");
        }

        //буффер для сохранения состояния контрола на момент открытия
        let dropdownTargetHtmlBuffer;
        let dropdownBoxHtmlBuffer;

        //кастомные события формы
        let filterForm_controlChanged = new Event('filterForm_controlChanged', {bubbles: true});
        let event_filterForm_changeRegion = new Event('filterForm_submitFilter');

        //функционал открытия/закрытия выпадашек
        $(`${formSelector}`).on("click keypress", ".store__form-control.store__dropdown", function (event) {
            let currentDropdown = $(this);

            if (event.which == 13 || event.type =='click') {
                //сохроняем состояние дропдауна на момент открытия
                //(бэкап состояния по закрытию на крестик в модальном окне)
                dropdownTargetHtmlBuffer = $(this).find(".store__dropdown-target").clone(true);
                dropdownBoxHtmlBuffer = $(this).find(".store__dropdown-box").clone(true);
                let openedDropdown = $(`${formSelector} .store__form-control.store__dropdown.isOpen`);
                //обрубаем логику на неактивном элементе
                if (currentDropdown.hasClass("disabled")) {
                    return;
                }
                //логика раскрытия дропдауна
                if (currentDropdown.hasClass("isOpen")) {
                    currentDropdown.removeClass("isOpen");

                    if (openedDropdown.length > 0 && openedDropdown[0].hasAttribute("data-dropdown-open-state-values") && IsDropdownChange(openedDropdown[0])) {
                        openedDropdown[0].dispatchEvent(filterForm_controlChanged);
                    }
                } else {
                    //проверка позиции экрана и подтягивание
                    let containerScrollTop = null;
                    if($(".store__inquiry-form").length>0){
                        containerScrollTop = $(".store__inquiry-form").offset().top-30;
                    }
                    else {
                        if($(".store__parameters-form").length>0){
                            containerScrollTop = $(".store__parameters-form").offset().top - 30;
                        }
                        else{
                            containerScrollTop = $(formSelector).offset().top - 30;
                        }
                    }
                    let pageScrollTop = $('body,html').scrollTop();
                    if(pageScrollTop-containerScrollTop < 0) {
                        $('body,html').animate({scrollTop: containerScrollTop}, 500);
                    }

                    openedDropdown.removeClass("isOpen");
                    if (openedDropdown.length > 0 && openedDropdown[0].hasAttribute("data-dropdown-open-state-values") && IsDropdownChange(openedDropdown[0])) {
                        openedDropdown[0].dispatchEvent(filterForm_controlChanged);
                    }
                    SaveCheckedValues(this);
                    currentDropdown.addClass("isOpen");
                }
            }
        });

        //прописываем массив выбранных элементов в атрибут дропдауна
        function SaveCheckedValues(dropdownElement) {
            let checkedElements = $(dropdownElement).find("input:checked");
            let checkedValues = [];
            checkedElements.each(function (index, element) {
                checkedValues.push($(element).val())
            });
            $(dropdownElement).attr("data-dropdown-open-state-values", checkedValues.toString());
        }

        //проверяем изменилось ли состояние дропдауна
        function IsDropdownChange(dropdownElement) {
            let openStateValues = $(dropdownElement).attr("data-dropdown-open-state-values");
            let checkedElements = $(dropdownElement).find("input:checked");
            let currentStateValues = [];
            checkedElements.each(function (index, element) {
                currentStateValues.push($(element).val())
            });
            let currentStateValuesString = currentStateValues.toString();
            if (openStateValues === currentStateValuesString) {
                return false;
            } else {
                return true;
            }
        }

        //прекращение всплытия клика на контейнере дропдауна
        $(`${formSelector}`).on("click", ".store__dropdown-box", function (event) {
            event.stopPropagation();
        });

        //обработка смены табов в дропдауне
        $(`${formSelector}`).on("click", ".store__tabs-controls-item", function (event) {
            let currentTab = $(this);
            let currentFormControl = $(this).parents(".store__dropdown-box");
            let regionId = currentTab.attr("data-region-id");
            let allTabs = $(currentFormControl).find(".store__tabs-controls-item");
            let allActiveTabsContent = $(currentFormControl).find(".store__tabs-content.active");
            let currentTabContent = $(currentFormControl).find(`.store__tabs-content[data-region-id='${regionId}']`);
            if (!currentTab.hasClass("active")) {
                allTabs.removeClass("active");
                allActiveTabsContent.removeClass("active");
                currentTab.addClass("active");
                currentTabContent.addClass("active");
            }
            //проверка кнопки селекта для отдельного таба
            let inputsInTab = $(".store__tabs-content.active input").length;
            let selectedInputsInTab = $(".store__tabs-content.active input:checked").length;
            if(inputsInTab == selectedInputsInTab){
                $(currentFormControl).find(".store__modal-buttons-unselect-all").show();
                $(currentFormControl).find(".store__modal-buttons-select-all").hide();
            }
            else{
                $(currentFormControl).find(".store__modal-buttons-unselect-all").hide();
                $(currentFormControl).find(".store__modal-buttons-select-all").show();
            }
        })

        //подсчет выбранных элементов в табах
        $(`${formSelector} .store__tabs-content`).on("change", "input", function (event) {
            let currentInput = $(this);
            let currentFormControl = $(this).parents(".store__dropdown-box");
            let currentTabContent = currentInput.parents(".store__tabs-content")[0];
            let currentRegionId = $(currentTabContent).attr("data-region-id");
            let checkedInputs = $(currentTabContent).find("input:checked");
            let currentTabItem = $(currentFormControl).find(`.store__tabs-controls-item[data-region-id='${currentRegionId}']`);
            let currentRegionName = currentTabItem.attr("data-region-name");
            //если это табы с радиобаттонами - сбрасываем подсчет всех табов
            if (currentInput.prop("type") == "radio") {
                let allTabItems = currentFormControl.find('.store__tabs-controls-item');
                $.each(allTabItems, function (index, item) {
                    let regionName = $(item).attr("data-region-name");
                    $(item).html(regionName);
                });
                return;
            }
            if (checkedInputs.length > 0) {
                currentTabItem.html(`${currentRegionName} (${checkedInputs.length})`);
            } else {
                currentTabItem.html(currentRegionName);
            }
            tabsSelectedCheck(currentFormControl);
        });

        //обработка изменения состояния инпутов
        $(`${formSelector}`).on("change", "input", function (event) {

            //обрываем события на формах второго этапа
            let selectionForms = $(this).parents("#shopPrivateSelectionFilterForm, #shopSelectionFilterForm");
            if(selectionForms.length>0){
                selectedCountUpdate(formSelector);
            }

            selectedCountUpdate(formSelector);
            if ($(this).filter("[type='radio']").length) {
                let parent = $(this).parents(`${formSelector} .store__form-control.store__dropdown`);
                if (parent.length > 0 && parent[0].hasAttribute("data-dropdown-open-state-values") && IsDropdownChange(parent[0])) {
                    parent[0].dispatchEvent(filterForm_controlChanged);
                }
            }
        });
        $(`${formSelector}`).on("change", "textarea", function (event) {
            selectedCountUpdate(formSelector);
            if ($(this).filter("[type='radio']").length) {
                let parent = $(this).parents(`${formSelector} .store__form-control.store__dropdown`);
                if (parent.length > 0 && parent[0].hasAttribute("data-dropdown-open-state-values") && IsDropdownChange(parent[0])) {
                    parent[0].dispatchEvent(filterForm_controlChanged);
                }
            }
        });

        //функция пересчета выбранного содержимого табов
        function tabsSelectedCheck(currentDropdown) {
            currentDropdown.each(function(){
                let currentFormControl = $(this).find(".store__dropdown-box");
                let currentTabContents = $(this).find(".store__tabs-content");
                let totalSelected = 0;
                currentTabContents.each(function (index, currentTabContent) {
                    let currentRegionId = $(currentTabContent).attr("data-region-id");
                    let checkedInputs = $(currentTabContent).find("input:checked");
                    let currentTabItem = $(currentFormControl).find(`.store__tabs-controls-item[data-region-id='${currentRegionId}']`);
                    let currentRegionName = currentTabItem.attr("data-region-name");
                    if (checkedInputs.length > 0) {
                        currentTabItem.html(`${currentRegionName} (${checkedInputs.length})`);
                        totalSelected += checkedInputs.length
                    } else {
                        currentTabItem.html(currentRegionName);
                    }
                });

                let selectionInfo = $(this).find(".store__modal-mute-info");
                if (selectionInfo.length > 0) {
                    let newInfoText = selectionInfo.html().replace(/[0-9]+/g, `${totalSelected}`);
                    selectionInfo.html(newInfoText);
                }
            })
        }

        //закрытие дропдауна при клике не по нему
        $(document).on("click", function (event) {
            if ($(event.target).parents(`${formSelector} .store__dropdown`).length == 0) {
                let openedDropdown = $(`${formSelector} .store__dropdown.isOpen`);
                openedDropdown.removeClass("isOpen");
                if (openedDropdown.length > 0 && openedDropdown[0].hasAttribute("data-dropdown-open-state-values") && IsDropdownChange(openedDropdown[0])) {
                    openedDropdown[0].dispatchEvent(filterForm_controlChanged);
                }
            }
        });

        //закрытие дропдауна по нажатию на крестик в модальном окне
        $(`${formSelector}`).on("click", ".store__modal-close", function () {
            let parentDropdown = $(this).parents(`${formSelector} .store__dropdown`);
            //переписываем из бэкапа при открытии
            parentDropdown.html("");
            parentDropdown.append(dropdownTargetHtmlBuffer).append(dropdownBoxHtmlBuffer);
            parentDropdown.removeClass("isOpen");
        });

        //закрытие дропдауна по нажатию на кнопку принятия
        //изменений в модальном окне
        $(`${formSelector}`).on("click", ".store__modal-buttons-confirm", function () {
            let parentDropdown = $(this).parents(`${formSelector} .store__dropdown`);
            parentDropdown.removeClass("isOpen");
            if (parentDropdown.length > 0 && parentDropdown[0].hasAttribute("data-dropdown-open-state-values") && IsDropdownChange(parentDropdown[0])) {
                parentDropdown[0].dispatchEvent(filterForm_controlChanged);
            }
        });

        //выбор всех элементов по кнопке выбора всех элементов
        $(`${formSelector}`).on("click", ".store__modal-buttons-select-all", function () {
            let parentDropdown = $(this).parents(`${formSelector} .store__dropdown`);
            let checkboxes = undefined;
            if (parentDropdown.find(".store__tabs-content").length>0){
                let targetTabsControls = parentDropdown.find(".store__tabs-controls-item:visible");
                let targetTabsContentId = [];
                $.each(targetTabsControls,function(index, value){
                    targetTabsContentId.push($(value).attr("data-region-id"));
                });
                let checkboxesSelector = "";
                $.each(targetTabsContentId,function(index,value){
                    if(index == 0){
                        checkboxesSelector+=`.store__tabs-content.active[data-region-id='${value}'] input[type='checkbox']:not(:checked)`;
                    }
                    else{
                        checkboxesSelector+=`, .store__tabs-content.active[data-region-id='${value}'] input[type='checkbox']:not(:checked)`;
                    }
                })
                checkboxes = parentDropdown.find(checkboxesSelector);
            }
            else{
                checkboxes = parentDropdown.find("input[type='checkbox']:not(:checked)");
            }
            checkboxes.prop('checked', true);
            //пересчитываем отмеченное
            tabsSelectedCheck(parentDropdown);
            selectedCountUpdate(formSelector);
        });

        //снятие выбора всех элементов по кнопке снятия выбора всех элементов
        $(`${formSelector}`).on("click", ".store__modal-buttons-unselect-all", function () {
            let parentDropdown = $(this).parents(`${formSelector} .store__dropdown`);
            let checkboxes = parentDropdown.find("input[type='checkbox']:checked");
            if (parentDropdown.find(".store__tabs-content").length>0){
                let targetTabsControls = parentDropdown.find(".store__tabs-controls-item:visible");
                let targetTabsContentId = [];
                $.each(targetTabsControls,function(index, value){
                    targetTabsContentId.push($(value).attr("data-region-id"));
                });
                let checkboxesSelector = "";
                $.each(targetTabsContentId,function(index,value){
                    if(index == 0){
                        checkboxesSelector+=`.store__tabs-content.active[data-region-id='${value}'] input[type='checkbox']:checked`;
                    }
                    else{
                        checkboxesSelector+=`, .store__tabs-content.active[data-region-id='${value}'] input[type='checkbox']:checked`;
                    }
                })
                checkboxes = parentDropdown.find(checkboxesSelector);
            }
            checkboxes.prop('checked', false);
            //пересчитываем отмеченное
            tabsSelectedCheck(parentDropdown);
            selectedCountUpdate(formSelector);
        });

        //пересчет по запуску страницы
        selectedCountUpdate(formSelector);
        tabsSelectedCheck($(formSelector).find(".store__modal-footer_countries-regions"));


        //контрол поиска
        //фильтрация подсказки элементов при вводе в поле поиска
        $(`${formSelector} .store__form-search-control`).on("input", function () {
            SearchFilter(this);
            let searchLettersCount = $(this).val().length;
            if (searchLettersCount == 0) {
                DropdownItemsSort(true, this);
            } else {
                DropdownItemsSort(false, this);
            }
            selectedCountUpdate(formSelector);
        });

        //Функция фильтрации, сортировки и подсвечивания элементов списка поиска
        function SearchFilter(targetElement) {
            let searchText = $(targetElement).val();
            let dropdownItemsList = $(targetElement).parents('.store__dropdown-box-content').find(".store__radio-label");
            $.each(dropdownItemsList, function (index, item) {
                let itemText = $(item).text();
                let regexp = new RegExp(searchText, 'i');
                let match = itemText.match(regexp);
                if (match) {
                    itemText = InsertString(itemText, "<strong>", match.index);
                    itemText = InsertString(itemText, "</strong>", match.index + 8 + searchText.length);
                    $(item).html(itemText);
                    $(item).parents('.store__block').attr("searchIndex", match.index);
                    $(item).parents('.store__block').addClass("searchTarget");
                } else {
                    $(item).html(itemText);
                    $(item).parents('.store__block').attr("searchIndex", -1);
                    $(item).parents('.store__block').removeClass("searchTarget");
                }
            });
            SearchListShowUpdate(targetElement);
        }

        //Функция внедрения подстроки в строку
        function InsertString(targetString, insertingString, position) {
            let beforeSubStr = targetString.substring(0, position);
            let afterSubStr = targetString.substring(position, targetString.length);
            return beforeSubStr + insertingString + afterSubStr;
        }

        //Функция сортировки выдачи поиска с фильтрацией
        function DropdownItemsSort(isOrigin, targetElement) {
            SearchListShowUpdate(targetElement);
            let dropDownBox = $(targetElement).parents('.store__dropdown-box-content').find(".store__modal-content");
            if (!isOrigin) {
                let dropdownItemsList = $(targetElement).parents('.store__dropdown-box-content').find(".store__modal-content .store__block");
                dropdownItemsList.sort(function (a, b) {
                    let aSearchIndex = Number($(a).attr("searchIndex"));
                    let bSearchIndex = Number($(b).attr("searchIndex"));
                    if (aSearchIndex > bSearchIndex) {
                        return 1;
                    }
                    if (aSearchIndex < bSearchIndex) {
                        return -1;
                    }
                    return 0;
                });
                let dropdownBoxSortedContent = "";
                $.each(dropdownItemsList, function (index, item) {
                    dropdownBoxSortedContent += item.outerHTML;
                });
                dropDownBox.html(dropdownBoxSortedContent);
            } else {
                let originalData = $(targetElement).parents(".store__dropdown-box").find(".search-dropdown-original-data").html();
                dropDownBox.html(originalData);
            }
        }

        //функция показа элементов списка
        function SearchListShowUpdate(targetElement) {
            let dropdownItemsList = $(targetElement).parents('.store__dropdown-box-content').find(".store__block");
            $.each(dropdownItemsList, function (index, item) {
                if ($(item).hasClass("searchTarget")) {
                    $(item).show();
                } else {
                    $(item).hide();
                }
            });
        }
    },

    //обновление подписей, если контрол меняется кодом извне
    shopFormUpdateControlsState: function () {
        if (!this.length) {
            return;
        }

        //узнаем селектор формы для проброса в логику
        let formSelector = $(this)
            .parents()
            .map(function () {
                return this.tagName;
            })
            .get()
            .reverse()
            .concat([this.nodeName])
            .join(">");
        let id = $(this).attr("id");
        if (id) {
            formSelector += "#" + id;
        }
        let classNames = $(this).attr("class");
        if (classNames) {
            formSelector += "." + $.trim(classNames).replace(/\s/gi, ".");
        }

        selectedCountUpdate(formSelector);

    },

    //сброс значений формы шопа
    shopFormReset: function () {
        if (!this.length) {
            return;
        }

        //узнаем селектор формы для проброса в логику
        let formSelector = $(this)
            .parents()
            .map(function () {
                return this.tagName;
            })
            .get()
            .reverse()
            .concat([this.nodeName])
            .join(">");
        let id = $(this).attr("id");
        if (id) {
            formSelector += "#" + id;
        }
        let classNames = $(this).attr("class");
        if (classNames) {
            formSelector += "." + $.trim(classNames).replace(/\s/gi, ".");
        }

        this.find(".store__form-error-summary").removeClass("visible");

        this[0].reset();

        this.shopFormUpdateControlsState();
    }
});

//функция подсчета выбранных элементов и переноса подписи
function selectedCountUpdate(formSelector) {
    let allTextInputs = $(`${formSelector} [type='text'], ${formSelector} textarea`);
    $.each(allTextInputs, function (index, input) {
        let inputContainer = $(input).parents(".store__form-control")[0];
        if ($(input).val() == "") {
            $(inputContainer).removeClass("hasValue");
        } else {
            $(inputContainer).addClass("hasValue");
        }
    });
    let allDropdowns = document.querySelectorAll(`${formSelector} .store__form-control.store__dropdown`);
    allDropdowns.forEach(function (dropdown, index, array) {
        let checkedInputs = $(dropdown).find("input:checked");
        let totalInputs = $(dropdown).find("input");
        //проверяем были ли отмечены все инпуты в дропдауне
        //в зависимости от этого показываем кнопку выбора всех / снятия всех


        let targetTabsControls = $(dropdown).find(".store__tabs-controls-item:visible");

        let targetTabsContentId = [];
        $.each(targetTabsControls,function(index, value){
            targetTabsContentId.push($(value).attr("data-region-id"));
        });
        let checkboxesSelector = "";
        $.each(targetTabsContentId,function(index,value){
            if(index == 0){
                checkboxesSelector+=`.store__tabs-content[data-region-id='${value}'] input`;
            }
            else{
                checkboxesSelector+=`, .store__tabs-content[data-region-id='${value}'] input`;
            }
        });
        let totalTabsInputs = $(dropdown).find(checkboxesSelector);


        if (checkedInputs.length == totalInputs.length || (checkedInputs.length == totalTabsInputs.length && totalTabsInputs.length>0)) {
            $(dropdown).find(".store__modal-buttons-unselect-all").show();
            $(dropdown).find(".store__modal-buttons-select-all").hide();
        } else {
            $(dropdown).find(".store__modal-buttons-unselect-all").hide();
            $(dropdown).find(".store__modal-buttons-select-all").show();
        }

        //переключение кнопок в зависимости от выбранных инпутов только в одном табе
        if($(dropdown).find('.store__tabs').length>0){
            let currentTab = $('.store__tabs-content.active');
            let currentTabInputs = $(currentTab).find('.store__block input')
            let currentTabCheckedInputs = $(currentTab).find('input:checked');
            if(currentTabInputs.length == currentTabCheckedInputs.length) {
                $(dropdown).find(".store__modal-buttons-select-all").hide();
                $(dropdown).find(".store__modal-buttons-unselect-all").show();
            }

        }

        let dropdownValue = $(dropdown).find(".store__form-control-field");
        if (checkedInputs.length > 1) {
            dropdownValue.html(`${multitabSelectedLocalization} ` + checkedInputs.length);
            $(dropdown).addClass("hasValue");
        } else {
            if (checkedInputs.length > 0) {
                let inputLabel = $(checkedInputs[0].parentElement).find(".store__checkbox-label");
                if (inputLabel.length == 0) {
                    inputLabel = $(checkedInputs[0].parentElement).find(".store__radio-label");
                }
                $(dropdown).addClass("hasValue");
                dropdownValue.html(inputLabel.html().replace(/<[^>]*>/g, ''));
            } else {
                let placeholder = $(dropdown).find(".store__form-control-label").html();
                dropdownValue.html(placeholder);
                $(dropdown).removeClass("hasValue");
            }
        }

    })
}

function inputCheckGenerate(dataArray,aliases={},inputTitle, inputTechName = "inputCheck"){
    let options = "";
    $.each(dataArray, function (key, value){
        let optionPattern = ` <div class="store__block"> <label class="store__checkbox"> <input type="checkbox" value="${value}" name="${inputTechName}"> <span class="store__checkbox-input"></span> <span class="store__checkbox-label">${getAlias(value,aliases)}</span> </label></div>`;
        options += optionPattern;
    });
    let input = `
            <div class="store__public-input">
               <div class="store__form-control store__dropdown store__dropdown_mobile-modal store__form-control_target-regions" data-dropdown-open-state-values="">
                  <div class="store__dropdown-target">
                     <div class="store__form-control-field">${inputTitle}</div>
                     <div class="store__form-control-label">${inputTitle}</div>
                  </div>
                  <div class="store__dropdown-box">
                     <div class="store__dropdown-box-content store__flex store__flex-column">
                        <div class="store__modal-header">
                           <div class="store__modal-close"></div>
                           <h3 class="store__heading store__heading_h3">${inputTitle}</h3>
                        </div>
                        <div class="store__modal-content store__flex-grow">
                           ${options}
                        </div>
                        <div class="store__modal-footer store__flex store__flex-middle store__flex-between">
                           <div class="store__modal-buttons store__flex store__flex-middle"> <button type="button" class="store__button store__button_transparent store__modal-buttons-select-all">
                              ${filterButtonSelectAll}
                              </button> <button type="button" class="store__button store__button_transparent store__modal-buttons-unselect-all" style="display: none;">
                              ${filterButtonDeselectAll}
                              </button> <button type="button" class="store__button store__button_primary store__modal-buttons-confirm">
                              ${filterButtonConfirmSelection} </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>    
    `;
    return input;
}
function inputRadioGenerate(dataArray,aliases={},titles={},inputTitle,inputTechName = "inputRadio"){
    let options = "";
    $.each(dataArray, function (key, value){
        let optionPattern = `<div class="store__block"> <label class="store__radio"> <input type="radio" value="${value}" name="${inputTechName}"> <span class="store__radio-input"></span> <span class="store__radio-label">${getAlias(value,aliases)}</span> </label></div>`;
        options += optionPattern;
    });
    let input = `
            <div class="store__public-input">
               <div class="store__form-control store__dropdown store__dropdown_mobile-modal store__form-control_business-type">
                  <div class="store__dropdown-target">
                     <div class="store__form-control-field">${inputTitle}</div>
                     <div class="store__form-control-label">${inputTitle}</div>
                  </div>
                  <div class="store__dropdown-box">
                     <div class="store__dropdown-box-content store__flex store__flex-column">
                        <div class="store__modal-header">
                           <div class="store__modal-close"></div>
                           <h3 class="store__heading store__heading_h3">${inputTitle}</h3>
                        </div>
                        <div class="store__modal-content store__flex-grow">
                           ${options}
                        </div>
                        <div class="store__modal-footer store__flex store__flex-middle store__flex-between">
                           <div class="store__modal-buttons store__flex store__flex-middle"> <button type="button" class="store__button store__button_primary store__modal-buttons-confirm">
                              ${filterButtonConfirmSelection} </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>  
    `;
    return input;
}
function inputMultiOneTabGenerate(dataArray,aliases={},titles={},inputTitle,tabTitle, inputTechName = "inputCheckTabs",filterCounter){
    let options = "";
    let dataWithAliases = []
    $.each(dataArray, function (key, value){
        dataWithAliases.push({origin:value,alias:getAlias(value,aliases),title:getTitle(value,titles)});
    });
    dataWithAliases.sort((a, b) => a.alias > b.alias ? 1 : -1);
    $.each(dataWithAliases, function (key, value){
        let optionPattern = `<div class="store__block"> <label class="store__checkbox" title="${value.title}"> <input type="checkbox" value="${value.origin}" name="${inputTechName}"> <span class="store__checkbox-input"></span> <span class="store__checkbox-label">${value.alias}</span> </label></div>`;
        options += optionPattern;
    });
    let input = `
            <div class="store__public-input">
               <div class="store__form-control store__dropdown store__dropdown_expand store__dropdown_mobile-modal store__form-control_target-countries">
                  <div class="store__dropdown-target">
                     <div class="store__form-control-field">${inputTitle}</div>
                     <div class="store__form-control-label">${inputTitle}</div>
                  </div>
                  <div class="store__dropdown-box">
                     <div class="store__dropdown-box-content store__flex store__flex-column">
                        <div class="store__modal-header">
                           <div class="store__modal-close"></div>
                           <h3 class="store__heading store__heading_h3">${inputTitle}</h3>
                        </div>
                        <div class="store__modal-content store__flex-grow">
                           <div class="store__tabs">
                              <div class="store__tabs-controls store__flex store__flex-middle">
                                 <div class="store__tabs-controls-item active" data-region-id="1" data-region-name="${tabTitle}">${tabTitle}</div>                 
                              </div>
                              <div class="store__tabs-content store__column active " data-region-id="1">
                                ${options}                     
                              </div>
                           </div>
                        </div>
                        <div class="store__modal-footer store__flex store__flex-middle store__flex-between store__modal-footer_countries-regions">
                           <div class="store__modal-mute-info">${filterCounter}</div>
                           <div class="store__modal-buttons store__flex store__flex-middle"> <button type="button" class="store__button store__button_transparent store__modal-buttons-select-all">
                              ${filterButtonSelectAll}
                              </button> <button type="button" class="store__button store__button_transparent store__modal-buttons-unselect-all" style="display: none;">
                              ${filterButtonDeselectAll}
                              </button> <button type="button" class="store__button store__button_primary store__modal-buttons-confirm">
                              ${filterButtonConfirmSelection} </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>  
    `;
    return input;
}

function getAlias(code,aliases){
    if(typeof aliases[code] != "undefined"){
        return aliases[code];
    }
    else{
        return code;
    }
}
function getTitle(code,titles){
    if(typeof titles[code] != "undefined"){
        return titles[code];
    }
    else{
        return "";
    }
}

function updateTable(data,currencyInputName,countriesInputName){
    let currencyCheckedCheckboxes = $("#tableFilterForm").find(`[name=${currencyInputName}]:checked`);
    let currencyCheckedCheckboxesArray = [];
    currencyCheckedCheckboxes.each(function() {
        currencyCheckedCheckboxesArray.push($( this ).val());
    });
    let countriesCheckedTabsCheckboxes = $("#tableFilterForm").find(`[name=${countriesInputName}]:checked`);
    let countriesCheckedTabsCheckboxesArray = [];
    countriesCheckedTabsCheckboxes.each(function() {
        countriesCheckedTabsCheckboxesArray.push($( this ).val());
    });

    if(countriesCheckedTabsCheckboxesArray.length == 0 && currencyCheckedCheckboxesArray.length == 0){
        $(".tableFilter tr").slideDown();
        $(".tableFilter tr").removeClass("hidden");
        specialFilterState = currencyCheckedCheckboxesArray.concat(countriesCheckedTabsCheckboxesArray);
        checkFilterButtonStatus(currencyInputName,countriesInputName);
    }
    else{
        for (const row in data) {
            // if(checkArrayIn(countriesCheckedTabsCheckboxesArray,data[row]["countries"]) && checkArrayIn(currencyCheckedCheckboxesArray,data[row]["currencies"])){
            if(checkArrayInForOr(countriesCheckedTabsCheckboxesArray,data[row]["countries"]) || checkArrayInForOr(currencyCheckedCheckboxesArray,data[row]["currencies"])){
                $("#"+filterIdPrefix+data[row]["rowid"]).slideDown();
                $("#"+filterIdPrefix+data[row]["rowid"]).removeClass("hidden");
            }
            else{
                $("#"+filterIdPrefix+data[row]["rowid"]).slideUp();
                $("#"+filterIdPrefix+data[row]["rowid"]).addClass("hidden");
            }
        }

        specialFilterState = currencyCheckedCheckboxesArray.concat(countriesCheckedTabsCheckboxesArray);
        checkFilterButtonStatus(currencyInputName,countriesInputName);
    }
    tableCount();
}

function checkArrayIn(arrayForCheck, arrayWhereCheck){
    for(let i=0; i<arrayForCheck.length; i++){
        if(arrayWhereCheck.indexOf(arrayForCheck[i]) == -1){
            return false;
        }
    }
    return true;
}
function checkArrayInForOr(arrayForCheck, arrayWhereCheck){
    for(let i=0; i<arrayForCheck.length; i++){
        if(arrayWhereCheck.indexOf(arrayForCheck[i]) != -1){
            return true;
        }
    }
    return false;
}


let specialFilterState;
function getCurrentFilterState(currencyInputName,countriesInputName){
    let currencyCheckedCheckboxes = $("#tableFilterForm").find(`[name=${currencyInputName}]:checked`);
    let currencyCheckedCheckboxesArray = [];
    currencyCheckedCheckboxes.each(function() {
        currencyCheckedCheckboxesArray.push($( this ).val());
    });
    let countriesCheckedTabsCheckboxes = $("#tableFilterForm").find(`[name=${countriesInputName}]:checked`);
    let countriesCheckedTabsCheckboxesArray = [];
    countriesCheckedTabsCheckboxes.each(function() {
        countriesCheckedTabsCheckboxesArray.push($( this ).val());
    });
    return currencyCheckedCheckboxesArray.concat(countriesCheckedTabsCheckboxesArray);
}
function setCurrentFilterState(currencyInputName,countriesInputName){
    specialFilterState = getCurrentFilterState(currencyInputName,countriesInputName);
}
function checkFilterButtonStatus(currencyInputName,countriesInputName){
    let filterFormButton = $("#tableFilterForm").find(".store__filter-form-submit");
    if(JSON.stringify(getCurrentFilterState(currencyInputName,countriesInputName))==JSON.stringify(specialFilterState)){
        filterFormButton.addClass("disabled");
    }
    else{
        filterFormButton.removeClass("disabled");
    }
}

function tableCount(){
    let counter = $(".tableFilter tr:not(.hidden):not(.tablesorter-headerRow)").length;
    let tableCounterDiv = $(".table-counter");
    if (tableCounterDiv.length > 0) {
        if(counter>0) {
            tableCounterDiv.html(tableCounter);
            let newTableCounterText = tableCounterDiv.html().replace(/[0-9]+/g, `${counter}`);
            newTableCounterText = newTableCounterText.replace(/(method)|(methods)+/g, `${getNumEnding(counter,numArray1)}`);
            newTableCounterText = newTableCounterText.replace(/(meets)|(meet)+/g, `${getNumEnding(counter,numArray2)}`);
            tableCounterDiv.html(newTableCounterText);
        }
        else{
            tableCounterDiv.html(tableCounterNull);
        }
    }
}
function getNumEnding(iNumber,aEndings)
{
    if(iNumber == 1){
        return aEndings[0];
    }
    else{
        return aEndings[1];
    }
}