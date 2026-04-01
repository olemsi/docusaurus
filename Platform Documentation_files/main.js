'use strict';

let Scrollbar = window.Scrollbar,
    modalWindow = document.querySelector(".modal"),
    html = document.querySelector('html'),
    closeButton = document.querySelector("[data-close]"),
    aboutListBlock = document.querySelector(".about__list-wrap"),
    aboutListItems = document.querySelectorAll(".about__item"),
    aboutListDetails = document.querySelector(".about__item-details"),
    aboutSections = document.querySelector(".about__sections"),
    detailsName = document.querySelector(".about__details-name"),
    detailsText = document.querySelector(".about__details-text"),
    detailsImage = document.querySelector(".about__details-img"),
    examplesBlock = document.querySelector('.how-to__list-wrapper'),
    modesBlock = document.querySelector(".how-to__modes"),
    modesBlockTitle = modesBlock.querySelector(".how-to__title"),
    modeBlock = modesBlock.querySelector(".how-to__mode"),
    modeBlockActive = modesBlock.querySelector(".how-to__mode.active"),
    stepsBlockWrapper = document.querySelector('.steps__inner'),
    searchBtn = document.querySelector('.search'),
    inputEmail = document.querySelector('.js_email-input'),
    inputName = document.querySelector('.js_name-input'),
    inputMessage = document.querySelector('.js_msg-input'),
    input = document.querySelectorAll('.js_input'),
    submit = document.querySelector('.q-form__submit-btn'),
    helpfulBtns = document.querySelector('.helpful__btns'),
    helpfulBtn = document.querySelectorAll('.helpful__btn'),
    answerPopup = document.querySelector('.answer-popup'),
    langSwitcher = document.querySelector('.lang-switch__el'),
    videoContainer = document.querySelectorAll('.video'),
    video = document.querySelectorAll('.video__player'),
    playPause = document.querySelectorAll('.video__playpause'),
    form = document.querySelector('#question-form'),
    modalSuccess = document.querySelector('.modal__block--done'),
    modalForm = document.querySelector('.modal__block--form'),
    searchInput = document.querySelector('.search__input'),
    textWrapper = document.querySelector(".about__details-text-wrap"),
    copyright = document.querySelector(".doc-copyright-text");

const ENTER_KEY = 13;

navigator.sayswho = function () {
    var ua = navigator.userAgent,
        tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
}();

if (navigator.sayswho.indexOf('Safari') === 0) {
    html.classList.add('safari');
    videoContainer.forEach(container => Array.from(container.children).map(node => node.remove()));
} else if (navigator.sayswho.indexOf('Edge') === 0) {
    html.classList.add('edge');
    videoContainer.forEach(container => Array.from(container.children).map(node => node.remove()));
} else if (navigator.sayswho.indexOf('Opera') === 0) {
    html.classList.add('opera');
    videoContainer.forEach(container => Array.from(container.children).map(node => node.remove()));
}

// Examples section acordeon //

let previousMode;

// modesBlockTitle.addEventListener('click', function(e) {
examplesBlock.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('how-to__title')) {
        let closestNode = target.closest('.how-to__mode');
        if (closestNode && closestNode.classList.contains('active')) {
            closestNode.classList.toggle('active');
            return;
        }
        if (!previousMode) {
            previousMode = closestNode;
            closestNode.classList.add('active');
            // modeBlockActive.removeClass('active'); // оставить на случай, если панель должна быть открыта при загрузке страницы
        } else {
            previousMode.classList.remove('active');
            previousMode = closestNode;
            previousMode.classList.add('active');
        }
    }
});

// END //

// Search block + toggle modal//

document.addEventListener('click', function (e) {
    let target = e.target;
    let closestNode = target.closest('.search');
    if (closestNode) {
        closestNode.classList.add('search--active');
        target.querySelector('.search__input').focus();
    }
    if (searchBtn !== target && searchBtn.querySelector('input') !== target) {
        searchBtn.classList.remove('search--active');
    }

    if (target.classList.contains('modal')) {
        target.classList.remove('modal--show');
        let bodyTag = document.getElementsByTagName("body")[0];
        bodyTag.classList.toggle("feedback-modal-is-open");
    }

    if (target.closest('[data-trigger]')) {
        toggleModal();
    }
});

// END //

// Work Scheme block //

let xhr = new XMLHttpRequest();

xhr.open('GET', 'dist/data/about.json', true);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState > 3 && xhr.status == 200) {
        let dataArray = JSON.parse(xhr.responseText);
        giveDataAttrToBlocks(dataArray);
    }
};

aboutListBlock.addEventListener('click', function (event) {
    let target = event.target;

    if (target.classList.contains('about__item-inner') || target.classList.contains('about__item-name')) {
        target = target.closest('.about__item');
    }

    if (target.classList.contains('about__link')) {
        let targetText = target.dataset.link;
        let neededNode;
        for (let i = 0; i < aboutListItems.length; i++) {
            if (aboutListItems[i].dataset.title === targetText) {
                neededNode = aboutListItems[i];
            }
        }
        sendDataToDetailsBlock(neededNode);
        giveBlockAppearence(aboutListDetails, neededNode);
    }

    if (target.classList.contains('about__item')) {
        sendDataToDetailsBlock(target);
        aboutListDetails.removeAttribute('hidden');
        aboutSections.classList.add("invisible");
        aboutListDetails.classList.add('opened');
        giveBlockAppearence(aboutListDetails, target);
    }

    if (detailsText.offsetHeight > 263) {

        textWrapper.classList.add('long');

        Scrollbar.init(textWrapper, {
            damping: 0.1,
            alwaysShowTracks: true
        });

        Scrollbar.getAll()[0].addListener(ScrollStatus => {
            console.log(ScrollStatus);
            if (ScrollStatus.offset.y === ScrollStatus.limit.y) {
                textWrapper.classList.remove('long');
            } else {
                textWrapper.classList.add('long');
            }
        });
    }

    if (target.classList.contains('about__details-close')) {
        aboutListDetails.classList.remove('opened');
        aboutSections.classList.remove("invisible");
        closeBlock(aboutListDetails);
    }
});

function giveBlockAppearence(node, trgt) {
    let sectionTitle = node.querySelector('.about__section-title');
    let trgtClosest = trgt.closest('.about__items');
    let closestSibling = trgtClosest.previousElementSibling;
    let closestSiblingClass = closestSibling.getAttribute('class');
    sectionTitle.classList = '';
    sectionTitle.classList = closestSiblingClass + '';
    sectionTitle.innerHTML = closestSibling.innerHTML;
}

function giveDataAttrToBlocks(data) {
    for (let i = 0; i < aboutListItems.length; i++) {
        aboutListItems[i].dataset.title = data[i]["title"];
        aboutListItems[i].dataset.text = data[i]["text"];
        aboutListItems[i].dataset.image = data[i]["imageUrl"];
    }
}

function sendDataToDetailsBlock(node) {
    detailsName.innerHTML = node.getAttribute('data-title');
    detailsText.innerHTML = node.getAttribute('data-text');
    detailsImage.setAttribute('src', node.getAttribute('data-image'));
}

// END //

function validateEmail() {
    let input = this;
    let inputContainer = this.parentElement;
    if (input.value) {
        let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,12}\.)?[a-z]{2,12}$/i;
        if (pattern.test(input.value)) {
            input.classList.remove('invalid');
            input.classList.add('valid');
            inputContainer.classList.remove('invalid');
            return;
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
            inputContainer.classList.add('invalid');
            input.nextElementSibling.innerText = 'Incorrect e-mail:';
        }
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
        inputContainer.classList.add('invalid');
        input.nextElementSibling.innerText = 'Not entered:';
    }
}

function validateName() {
    let input = this;
    let inputContainer = this.parentElement;
    if (input.value) {
        let pattern = /^[ёа-яЁА-Яa-zA-Z ,.'-]+$/u;
        if (pattern.test(input.value)) {
            input.classList.remove('invalid');
            input.classList.add('valid');
            inputContainer.classList.remove('invalid');
            return;
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
            inputContainer.classList.add('invalid');
            input.nextElementSibling.innerText = 'Incorrect name:';
        }
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
        inputContainer.classList.add('invalid');
        input.nextElementSibling.innerText = 'Not entered:';
    }
}

function validateTextarea() {
    let input = this;
    let inputContainer = this.parentElement;
    if (input.value) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        inputContainer.classList.remove('invalid');
        return;
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
        inputContainer.classList.add('invalid');
        input.nextElementSibling.innerText = 'Not entered:';
    }
}

inputEmail.addEventListener('input', validateEmail);

inputEmail.addEventListener('blur', validateEmail);

inputName.addEventListener('input', validateName);

inputName.addEventListener('blur', validateName);

inputMessage.addEventListener('keyup', validateTextarea);

inputMessage.addEventListener('blur', validateTextarea);

input.forEach(function (inputItem) {
    inputItem.addEventListener('keyup', enableSubmitBtn);
});

function enableSubmitBtn() {
    let validInputs = document.querySelectorAll('.js_input.valid');

    if (validInputs.length === 3) {
        submit.removeAttribute('disabled');
    } else {
        submit.setAttribute('disabled', 'disabled');
    }
}

// END //

// closing steps tab on click //

stepsBlockWrapper.addEventListener('click', function (e) {
    let element = this;
    let target = e.target;
    if (target.closest('.steps__item-wrap')) {
        if (target.closest('.steps__item-wrap').classList.contains('active')) {
            target.closest('.steps__item-wrap').classList.remove('active');
            element.querySelector('.tabs-pane.active').classList.remove('active');
        } else {
            tabby.init();
        }
    }
});

// END //

// answer block popup //
helpfulBtns.addEventListener('click', function (e) {
    if (e.target.classList.contains('helpful__btn')) {
        setTimeout(function () {
            answerPopup.classList.remove('hidden');
        }, 4500);
        helpfulBtn.forEach(btn => btn.setAttribute('disabled', 'disabled'));
        e.target.classList.add('chosen');
        document.querySelector('.helpful').classList.add('disabled');
        setTimeout(function () {
            answerPopup.classList.add('hidden');
        }, 4500);
    }
});
// END //

// switching lang //
langSwitcher.addEventListener('click', function () {
    let element = this;
    let sibling = element.parentNode.childNodes;
    if (!element.classList.contains('active')) {
        sibling.forEach(node => node.classList.remove('active'));
        element.classList.add('active');
    }
});
// END //

// search input //
searchInput.addEventListener('keyup', function (e) {
    let str = searchInput.value.split(' ').join('+');

    if (e.keyCode === ENTER_KEY) {
        window.location.href = "../en/search.html?searchQuery=" + str;
    }
});
// END //

// video player //

for (let i = 0; i < video.length; i++) {
    video[i].controls = false;
}

playPause.forEach(function (el, i) {
    el.addEventListener('click', function () {
        if (video[i].paused || video[i].ended) {
            el.style.opacity = '0';
            video[i].play();
            this.classList.remove('paused');
            this.classList.add('played');
        } else {
            video[i].pause();
            this.classList.remove('played');
            this.classList.add('paused');
            el.style.opacity = '1';
        }
    });
});

video.forEach(function (el) {
    el.addEventListener('ended', function () {
        let sibling = el.nextElementSibling;
        sibling.style.opacity = '1';
        sibling.classList.remove('played');
        sibling.classList.add('paused');
    });
});

// END //

function toggleModal() {
    form.querySelectorAll('.js_input').forEach(input => {
        let cls = input.classList;
        switch (true) {
            case cls.contains('invalid'):
                cls.remove('invalid');
                input.parentElement.classList.remove('invalid');
                break;
            case cls.contains('valid'):
                cls.remove('valid');
                break;
            default:
                return;
        }
        input.value = '';
    });
    enableSubmitBtn();
    modalWindow.classList.toggle("modal--show");
    let bodyTag = document.getElementsByTagName("body")[0];
    bodyTag.classList.toggle("feedback-modal-is-open");
}

function closeBlock(element) {
    element.setAttribute('hidden', true);
}

closeButton.addEventListener('click', toggleModal);

function sendData() {
    let xhr = new XMLHttpRequest();
    let formFields = document.querySelectorAll('[data-field]');
    let body = '';

    formFields.forEach(field => {
        body += field.name + '=' + encodeURIComponent(field.value) + '&';
    });

    xhr.open('POST', './dist/mail.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');

    xhr.send(body.slice(0, -1));

    xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200) {
            closeBlock(modalForm);
            modalSuccess.removeAttribute('hidden');
        }
    };
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    sendData();
});

document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date().getFullYear();
    let copyrightText = copyright.firstChild.data;
    copyright.firstChild.data = copyrightText + currentYear.toString().substr(-2);
});