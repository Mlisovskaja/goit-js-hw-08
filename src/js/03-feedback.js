import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]')
const formData = {};
const STORAGE_KYE = 'feedback-form-state';


formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInput, 500));


function onInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KYE, JSON.stringify(formData));   
}


const setFormDataToForm = form => {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KYE));
    if (!savedData) {
        return;
    }
    for (const key in savedData) {
    form.elements[key].value = savedData[key];
  }
};
setFormDataToForm(formEl, STORAGE_KYE);


function onFormSubmit(event) {
    event.preventDefault(); 
    if (email.value === "" || message.value === "") {
        alert('Всі поля мають бути заповнені');  
        return false;
    }
    console.log(JSON.parse(localStorage.getItem(STORAGE_KYE)));
    event.target.reset();
    localStorage.removeItem(STORAGE_KYE);
}





