import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input [name="step"]');
const amount = document.querySelector('iput [name="amount"]')

form.addEventListener("submit", onSubmitForm);



function onSubmitForm(event) {
  const time = amount.value;
  console.log(time)
  return new Promise((resolve, reject) => {
     setTimeout(() => {
  createPromise(position, delay)
  }, time);
 
  })
 
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
 
    if (shouldResolve) {
      return Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);

    } else {
      return Notiflix.Notify.info(`❌ Rejected promise ${position} in ${delay}ms`);

    }
  
}

createPromise(2, 1500)
.then(({ position, delay }) => {
  Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.info(`❌ Rejected promise ${position} in ${delay}ms`);
  });

