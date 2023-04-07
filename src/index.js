import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';

const inputs = Array.from(document.querySelectorAll('#search-box'));


for (const input of inputs) {
  input.style.display = 'block';
  input.style.padding = '5px';
  input.style.fontSize = '15px';
}

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    let setTime = setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

inputs.addEventListener('blur', event => {
  event.preventDefault();
  const valueAmount = Number(form.elements.amount.value);
  const valueStep = Number(form.elements.step.value);
  const valueDelay = Number(form.elements.delay.value);

  for (let i = 1; i <= valueAmount; i += 1) {
    let stepTime = valueDelay + valueStep * (i - 1);
    createPromise(i, stepTime)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`)
      })
      .catch(({ position, delay }) => {
       Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`)
      });
  }
});
