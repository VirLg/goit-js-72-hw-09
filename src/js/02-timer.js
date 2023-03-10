import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';



console.log(Notify);

document.querySelector('[data-start]').disabled = true
const refButton = document.querySelector('[data-start]')
const refSpan = document.querySelectorAll('.value')
let onTimerValue = [];
let timeObj = {};

const config = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
onTimerValue = selectedDates[0]

if ((onTimerValue-Date.now())<0) {
  document.querySelector('[data-start]').disabled = true
  Notify.failure('Please choose a date in the future');
  // alert("Please choose a date in the future")
}else{
  document.querySelector('[data-start]').disabled = false
}  
  },
};
const flatpickrInit = flatpickr("#datetime-picker", config);

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
 timeObj = { days, hours, minutes, seconds }
  padStart(timeObj) 
    
}
function padStart(timeObj) {
  for (const key in timeObj) {
    (timeObj[key] = timeObj[key].toString().padStart(2, 0)); 
  }
 const timer = [...refSpan]
  const arrTimer = Object.values(timeObj)
  timer.map((el, idx) => el.textContent = arrTimer[idx])
  
  }
function handleClickBTN() { 
  document.querySelector('[data-start]').disabled = true
   const iteration =  setInterval(() => { 
      (flatpickrInit.selectedDates[0]-Date.now() >= 0) ? convertMs(flatpickrInit.selectedDates[0]-Date.now()) : clearInterval(iteration);
},1000)
}


refButton.addEventListener('click', handleClickBTN)




