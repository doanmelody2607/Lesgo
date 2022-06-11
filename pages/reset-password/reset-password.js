const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const resetBtn = $('.btn__reset');
const inputMail = $('.reset-by-mail');
const inputPhone = $('.reset-by-phone');

resetBtn.onclick = function (e) {

    if (this.classList.contains('byphone')) {
        this.innerHTML = 'Đặt lại qua email';
        inputMail.style.display = 'none';
        inputPhone.style.display = 'block';
        this.classList.remove('byphone');
    } else {
        this.innerHTML = 'Đặt lại qua số điện thoại';
        inputMail.style.display = 'block';
        inputPhone.style.display = 'none';
        this.classList.add('byphone');
    }
    
}

// tabElements.forEach(filterTab => {

//     filterTab.onclick = function (e) {
//         $('.tab__wrapper.focus').classList.remove('focus');
//         this.classList.add('focus');

//         if (this.classList.contains('mail')) {
//             loginMailBlock.style.display = 'block';
//             loginPhoneBlock.style.display = 'none';
//         } else {
//             loginMailBlock.style.display = 'none';
//             loginPhoneBlock.style.display = 'block';
//         }

//     }
// })