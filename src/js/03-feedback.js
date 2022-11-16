import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const formData = {};
const STORAGE_KYE = 'feedback-form-state';


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));
fillInFormInput();

function onInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KYE, JSON.stringify(formData));
    
}
function fillInFormInput(el) {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KYE));

    if (savedData) {
        message.value = savedData.message;
        email.value = savedData.email;
    }
    console.log(Object.values(savedData));
    
}


function onFormSubmit(event) {
    event.preventDefault(); 
    if (email.value === "" || message.value === "") {
        alert('Всі поля мають бути заповнені');  
    }
    console.log(JSON.parse(localStorage.getItem(STORAGE_KYE)));
    event.target.reset();
    localStorage.removeItem(STORAGE_KYE);
}





