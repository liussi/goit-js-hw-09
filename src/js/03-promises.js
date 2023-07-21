import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const amount = document.querySelector('input[name="amount"]');
const step = document.querySelector('input[name="step"]');

form.addEventListener("submit", onSubmitForm);

function addNumber(value) {
    return parseInt((value).value);
};

function onSubmitForm(event) {
  event.preventDefault();
  
  [...Array(addNumber(amount)).keys()].forEach((_, i) => {
    const delayEl = addNumber(delay) + i * addNumber(step);
 
    createPromise(i, delayEl)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          });
         
  }); 
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {

  const shouldResolve = Math.random() > 0.3;
      
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
   }
     }, delay);
  })
  
}

