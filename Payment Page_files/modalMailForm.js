/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/modalMailFormEn.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/modalMailFormEn.js":
/*!****************************************!*\
  !*** ./src/scripts/modalMailFormEn.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function showDocModalForm(event) {
  if (typeof event === "object") {
    event.preventDefault();
  } else {
    console.log("Event object not found.");
  }

  let bodyTag = document.getElementsByTagName("body")[0];
  if(bodyTag.classList.contains("feedback-modal-is-open")){
    return;
  }
  else{
    bodyTag.classList.add("feedback-modal-is-open");
  }
  let modalFormStruct = `
    <div class="feedback-modal modal modal--show">
        <div class="modal__inner">
          <div class="modal__close" data-close=""></div>
          <div class="modal__block modal__block--form">
            <form role="form" method="POST" id="question-form" action="mail.php">
              <div class="q-form">
                <div class="q-form__header">
                  <h2 class="q-form__title">Questions, ideas, suggestions</h2>
                  <p class="q-form__caption">Whatever you are concerned about our products and our work, write to us</p>
                </div>
                <div class="q-form__fields">
                  <div class="q-form__row q-form__row--name">
                    <input class="q-form__input js_name-input js_input" type="text" name="name" data-field="" value="" placeholder="Your first and last name *" required=""><span class="q-form__error q-form__error--name"></span>
                  </div>
                  <div class="q-form__row q-form__row--surname">
                    <input class="q-form__input js_surname-input js_input" type="text" name="surname" data-field="" value="" placeholder="Your surname *"><span class="q-form__error q-form__error--surname"></span>
                  </div>
                  <div class="q-form__row q-form__row--company">
                    <input class="q-form__input" type="text" name="Company" data-field="" value="" placeholder="Company">
                  </div>
                  <div class="q-form__row q-form__row--email">
                    <input class="q-form__input js_email-input js_input" type="email" name="email" data-field="" value="" placeholder="E-mail *" required=""><span class="q-form__error q-form__error--email"></span>
                  </div>
                  <div class="q-form__row q-form__row--text">
                    <textarea class="q-form__textarea js_msg-input js_input" rows="5" name="message" data-field="" placeholder="Message *" required=""></textarea><span class="q-form__error q-form__error--text"></span>
                  </div><i class="q-form__tip">* required fields</i>
                </div>
                <div class="q-form__bottom"><a class="q-form__mailto" href="mailto:support@platform.dev">Use an e-mail client</a>
                  <input class="q-form__submit-btn" type="submit" name="submit" value="Send" disabled="disabled">
                </div>
              </div>
            </form>
          </div>
          <div class="modal__block modal__block--done" id="done-message" hidden="">
            <div class="success">
              <h2 class="success__title">Thank you!</h2>
              <p class="success__caption">Your message has been sent to PSC support.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  bodyTag.insertAdjacentHTML('beforeend', modalFormStruct); //привязка валидаторов к событиям сгенерированных элементов

  validateForm();
} //пробрасываем функцию в глобальную область видимости


window.showDocModalForm = showDocModalForm;
window.destroyDocModalFormOnLayout = destroyDocModalFormOnLayout;

function destroyDocModalForm(){
  let bodyTag = document.getElementsByTagName("body")[0];
  if(bodyTag.classList.contains("feedback-modal-is-open")){
    bodyTag.classList.remove("feedback-modal-is-open");
  }
  let modal = document.querySelector(".modal.modal--show");
  modal.parentNode.removeChild(modal);
}
function destroyDocModalFormOnLayout(e){
  if($(e.target).hasClass("feedback-modal")){
    let bodyTag = document.getElementsByTagName("body")[0];
    if(bodyTag.classList.contains("feedback-modal-is-open")){
      bodyTag.classList.remove("feedback-modal-is-open");
    }
    let modal = document.querySelector(".modal.modal--show");
    modal.parentNode.removeChild(modal);
  }
}
//функции валидаторы


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
} // Привязка валидаторов к элементам (с очисткой привязки)


function validateForm() {
  let inputEmail = document.querySelector('.js_email-input');
  let inputName = document.querySelector('.js_name-input');
  let inputMessage = document.querySelector('.js_msg-input');
  let input = document.querySelectorAll('.js_input');
  let form = document.querySelector('#question-form');
  let close = document.querySelector('.modal__close');
  let layout = document.querySelector('.feedback-modal');
  form.removeEventListener('submit', sendDataEvent);
  form.addEventListener('submit', sendDataEvent);
  close.removeEventListener('click', destroyDocModalForm);
  close.addEventListener('click', destroyDocModalForm);
  layout.removeEventListener('click', destroyDocModalFormOnLayout);
  layout.addEventListener('click', destroyDocModalFormOnLayout);
  inputEmail.removeEventListener('input', validateEmail);
  inputEmail.removeEventListener('blur', validateEmail);
  inputEmail.addEventListener('input', validateEmail);
  inputEmail.addEventListener('blur', validateEmail);
  inputName.removeEventListener('input', validateName);
  inputName.removeEventListener('blur', validateName);
  inputName.addEventListener('input', validateName);
  inputName.addEventListener('blur', validateName);
  inputMessage.removeEventListener('keyup', validateTextarea);
  inputMessage.removeEventListener('blur', validateTextarea);
  inputMessage.addEventListener('keyup', validateTextarea);
  inputMessage.addEventListener('blur', validateTextarea);
  input.forEach(function (inputItem) {
    inputItem.removeEventListener('keyup', enableSubmitBtn);
    inputItem.addEventListener('keyup', enableSubmitBtn);
  });
}

function enableSubmitBtn() {
  let submit = document.querySelector('.q-form__submit-btn');
  let validInputs = document.querySelectorAll('.js_input.valid');

  if (validInputs.length === 3) {
    submit.removeAttribute('disabled');
  } else {
    submit.setAttribute('disabled', 'disabled');
  }
}

function sendData() {
  let xhr = new XMLHttpRequest();
  let formFields = document.querySelectorAll('[data-field]');
  let body = '';
  formFields.forEach(field => {
    body += field.name + '=' + encodeURIComponent(field.value) + '&';
  });
  xhr.open('POST', '../landing-en/dist/mail.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');
  xhr.send(body.slice(0, -1));

  xhr.onreadystatechange = function () {
    if (xhr.readyState > 3 && xhr.status == 200) {
      let modalSuccess = document.querySelector('.modal__block--done');
      let modalForm = document.querySelector('.modal__block--form');
      closeBlock(modalForm);
      modalSuccess.removeAttribute('hidden');
    }
  };
}

function closeBlock(element) {
  element.setAttribute('hidden', true);
}

function sendDataEvent(e) {
  e.preventDefault();
  let hiddenField = document.querySelector('.js_surname-input');

  if (hiddenField.value.length > 0) {
    console.error("Callback form hidden field is not empty");
    return;
  }

  sendData();
}

/***/ })

/******/ });
//# sourceMappingURL=modalMailForm.js.map