import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const refInput = document.querySelector('#datetime-picker')
let userDate = refInput.value


const fr = flatpickr(refInput, {
    defaultDate: new Date(),
    onClose(selectedDates) {
    console.log(selectedDates);
  },
});  // flatpickr

// const currentDate = new Date()    



// console.log(options._initialDate-currentDate);



// сет интервал запускается по клику кнопки старт и считает разницу между датами

setInterval(() => { 
// const currentDate = new Date()    

    // console.log(options._initialDate-currentDate);
    
    
},1000)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

    // здесь перевірка минуле майбутне і дизейбл кнопки
      console.log(selectedDates[0].map
      );


  },
};


// const a = options.onClose()



// console.log(a);


