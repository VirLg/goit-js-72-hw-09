import { Notify } from 'notiflix/build/notiflix-notify-aio';
// console.log(Notify);

const refForm = document.querySelector('.form');
refForm.addEventListener('submit', onFormSubmit)
let formDataCurrent = {}


function onFormSubmit(evt) {
  evt.preventDefault()
const formData = new FormData(refForm)
formData.forEach((value,name) =>{
  formData[name] = Number(value);
 formDataCurrent = {...formData}   
})

 foo(formDataCurrent)
return formDataCurrent
}

let variableValue = 0;

  function foo() { 
    const { amount, delay, step  } = formDataCurrent;

    for (let position = 1; position <= amount; position += 1){
      if(position>1){
              variableValue +=  step;
createPromise(position, variableValue)
      }else{
        variableValue = delay
        createPromise(position, variableValue)
      }
    } 
  }
  


function createPromise(position,delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise =  new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      // resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`));
    } else {

      reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
      // reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`));
    }
  }, delay);
});
  promise.then((onResolve, onReject))
};


function onResolve() {
  return {
    position: `${position}`,
    delay: `${delay}`
  }
 }

function onReject() {

  return {
    position: `${position}`,
    delay: `${delay}`
  }
 }











