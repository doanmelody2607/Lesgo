const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabElements = $$('.tab__wrapper');
const loginMailBlock = $('.login__mail');
const loginPhoneBlock = $('.login__phone');

tabElements.forEach(filterTab => {

    filterTab.onclick = function (e) {
        $('.tab__wrapper.focus').classList.remove('focus');
        this.classList.add('focus');

        if (this.classList.contains('mail')) {
            loginMailBlock.style.display = 'block';
            loginPhoneBlock.style.display = 'none';
        } else {
            loginMailBlock.style.display = 'none';
            loginPhoneBlock.style.display = 'block';
        }

    }
})