import Notiflix from 'notiflix';

let formSubmit = document.querySelector('.form')
let delay = document.querySelector('input[name="delay"]')
let step = document.querySelector('input[name="step"]')
let amount = document.querySelector('input[name="amount"]')
let firstDelay;
let stepValue;
let amountValue;


function createPromise(position, delay) {
  return new Promise ((resolve, reject) =>{
  const shouldResolve = Math.random() > 0.3;
    setTimeout(()=> {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})}}, delay
      )
      firstDelay += stepValue
    })
}


function onPromiseCreate(event){
 event.preventDefault();

 firstDelay = Number(delay.value)
 stepValue = Number(step.value)
 amountValue = Number(amount.value)
 
 for(let i = 1; i<=amountValue; i+= 1){
  
  createPromise(i, firstDelay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
 }
}

formSubmit.addEventListener('submit', onPromiseCreate)
