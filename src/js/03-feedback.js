import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
    submit: document.querySelector('.feedback-form button'),
};

refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.message.addEventListener('input', throttle(onTextareaInput, 500));

let email = "";
function onEmailInput(evt) {
     email = evt.target.value;
     localStorage.setItem(STORAGE_KEY, JSON.stringify({ email: email, message: message }));
}
let message = "";
function onTextareaInput(evt) {
     message = evt.target.value;
     localStorage.setItem(STORAGE_KEY, JSON.stringify({ email: email, message: message }));
}
// localStorage.clear();
