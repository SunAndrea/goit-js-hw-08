var throttle = require('lodash.throttle');
const formEl = document.querySelector(`form`);
const inputEl = document.querySelector(`input`);
const textareaEl = document.querySelector(`textarea`);
const FEEDBACK_LS_KEY = 'feedback-form-state';

const fillingDataFromLs = form => {
  const savedData = JSON.parse(localStorage.getItem(FEEDBACK_LS_KEY)) || {};
  const entries = Object.entries(savedData);
  entries.map(([key, value]) => {
    formEl.elements[key].value = value;
  });
};

function onFormFillInfo({ target }) {
  localStorage.setItem(
    FEEDBACK_LS_KEY,
    JSON.stringify({
      email: inputEl.value,
      message: textareaEl.value,
    })
  );
  const savedData = JSON.parse(localStorage.getItem(FEEDBACK_LS_KEY)) || {};
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(FEEDBACK_LS_KEY);
}

formEl.addEventListener(`input`, throttle(onFormFillInfo, 500));
formEl.addEventListener(`submit`, onFormSubmit);
fillingDataFromLs(formEl);
