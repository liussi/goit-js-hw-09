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
 
  const promises = [];
  
  [...Array(addNumber(amount)).keys()].forEach((_, i) => {
    const delayEl = addNumber(delay) + i * addNumber(step);
    promises.push(createPromise(i + 1, delayEl));
  });


  promises.forEach(promise => {
    promise
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

