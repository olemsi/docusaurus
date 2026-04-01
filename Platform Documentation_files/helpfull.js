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
            }, 500);
            helpfulBtn.forEach((btn) => btn.setAttribute('disabled', 'disabled'))
            e.target.classList.add('chosen');
            document.querySelector('.helpful').classList.add('disabled');
            setTimeout(function () {
                answerPopup.classList.add('hidden');
            }, 4500)
        }
    });

});