const refForm = document.querySelector('.form');
refForm.addEventListener('submit', onFormSubmit)
let formDataCurrent = {}




function onFormSubmit(evt) {
  evt.preventDefault()
const formData = new FormData(refForm)
formData.forEach((value,name) =>{
  formData[name] = value;
 formDataCurrent = {...formData}   
})

 foo(formDataCurrent)
return formDataCurrent
}

  function foo() { 
    const { amount, delay, step  } = formDataCurrent;
    console.log(amount);
    for(let i = 1; i<=amount; i+=1){
 createPromise(i, delay)
    } 
  }
  
  
  function createPromise(position, delay) {  
    
    const DELAY = delay;
const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => { 
      
      
      setTimeout(() => { 
 if (shouldResolve) {
  resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms)`));
  } else {
   reject(console.log(`❌ Rejected promise ${position} in ${delay}ms)`));
  }
      }, DELAY)
    })
 
}
