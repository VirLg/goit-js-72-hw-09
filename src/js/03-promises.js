

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

console.log("Value ",formDataCurrent);
  

//   if (evt.currentTarget === evt.target) {

   
//     formDataCurrent[name] = value;
// return localStorage.setItem("formData", JSON.stringify(formDataCurrent));

//   }
  
  function foo() { 
    const { amount, delay, step } = formDataCurrent;
    console.log(amount);
  }
  
  foo()
  
  



  
  function createPromise(position, delay) {  
    
    const DELAY = delay;
 const shouldResolve = Math.random() > 0.3;


    return new Promise((resolve, reject) => { 
      setTimeout(() => { 
 if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
      }, DELAY)
    })

 
  
 
}








let settings = localStorage.getItem("formData")
formDataCurrent = JSON.parse(settings)


// if (formDataCurrent !== {}) {
//   console.log("ok");
// } else { 
//   console.log("no");
// }

// console.log(formDataCurrent === true);



// const formRef = document.querySelector('.form')
// const formInputDelayRef = formRef.firstElementChild

// formRef.addEventListener("submit", onValueForm)
// formDataCurrent = {}



// function onValueForm(evt) {
//   evt.preventDefault()
  
  
//     const formData = new FormData(formRef)
//   formData.forEach((value, name) => {
//     formData[evt.target.name] = evt.target.value
      
//     localStorage.setItem("formDataCurrent", JSON.stringify(formData))
     
//   })
  
// }
  


//  let setings = localStorage.getItem('currentData')
//     setings = JSON.parse(setings);

// console.log(setings);


// function createPromise(position, delay) {



//   // const shouldResolve = Math.random() > 0.3;
//   // if (shouldResolve) {
//   //   // Fulfill
//   // } else {
//   //   // Reject
//   // }


// }








