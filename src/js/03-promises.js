function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}




const refForm = document.querySelector('form');
refForm.addEventListener('submit', onSubmitForm, { once: true })

function onSubmitForm(evt) { 
  evt.preventDefault();
  const formData = new FormData(refForm)
  formData.forEach((value,name)=>console.log(value,name))
  
}


const promise = new Promise();


// Promise.all()


// const Data = new Data()


// console.log(refForm);