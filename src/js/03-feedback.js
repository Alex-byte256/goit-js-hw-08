import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const mail = document.querySelector('.feedback-form input');

const MSG_KEY = 'feedback-form-state';

let formData = {};

populateTextArea();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  if (localStorage.getItem(MSG_KEY)) {
    formData = JSON.parse(localStorage.getItem(MSG_KEY));
  }
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem(MSG_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  /*   console.log(formData); */
  console.log('message data: ', JSON.parse(localStorage.getItem(MSG_KEY)));
  localStorage.removeItem(MSG_KEY);
  e.currentTarget.reset();
  formData = {};
}

function populateTextArea() {
  const localData = localStorage.getItem(MSG_KEY);

  if (localData) {
    mail.value = JSON.parse(localData).email || '';
    textarea.value = JSON.parse(localData).message || '';
  }
}
