import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const refInput = document.querySelector('#datetime-picker')
const refButton = document.querySelector('[data-start]')
const refSpan = document.querySelectorAll('.value')

 document.querySelector('[data-start]').disabled = true
let onTimerValue = 0;
let timeObj = {};

const currentDate = new Date() ;
const userDate = 0;


const config = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (onTimerValue<0) { 
      return
    }
    document.querySelector('[data-start]').disabled = false
   onTimerValue = selectedDates[0] - currentDate  
   timeObj = convertMs(onTimerValue);

  },
};

flatpickr("#datetime-picker", config);


  
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


const timer = [...refSpan]
function handleClickBTN() { 
  const arrTimer = Object.values(timeObj)
  timer.map((el,idx)=>el.textContent = arrTimer[idx])

}




refButton.addEventListener('click', handleClickBTN)



setInterval(()=> { })








// console.log(options._initialDate-currentDate);



// сет интервал запускается по клику кнопки старт и считает разницу между датами

setInterval(() => { 
// const currentDate = new Date()    

    // console.log(options._initialDate-currentDate);
    
    
},1000)



