
import {throttle} from 'lodash';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]'); 

const saveFormState = () => {
 const formState = { 
email: emailInput.value, 
message: messageInput.value, }; 
localStorage.setItem('feedback-form-state', JSON.stringify(formState));}; 

const loadFormState = () =>{ 
const savedState = localStorage.getItem('feedback-form-state'); 
if (savedState) {
 const formState = JSON.parse(savedState);
emailInput.value = formState.email; 
messageInput.value = formState.message; }
};

const lodashSaveFormState = throttle(saveFormState, 500); 
const submitForm = event => { event.preventDefault(); 
const formState = { email: emailInput.value, message: messageInput.value, }; 

console.log(formState); 

localStorage.removeItem('feedback-form-state'); 
form.reset();}; 

emailInput.addEventListener('input', lodashSaveFormState);
messageInput.addEventListener('input', lodashSaveFormState);
form.addEventListener('submit', submitForm);
document.addEventListener('DOMContentLoaded', loadFormState);