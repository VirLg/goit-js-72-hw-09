import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

document.querySelector('[data-start]').disabled = true
const refInput = document.querySelector('#datetime-picker')
const refButton = document.querySelector('[data-start]')
const refSpan = document.querySelectorAll('.value')


let onTimerValue = [];

const config = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
onTimerValue = selectedDates[0]

    return handleClickBTN(onTimerValue)  
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
timeObj = { days, hours, minutes, seconds }

const timer = [...refSpan]
  const arrTimer = Object.values(timeObj)
  timer.map((el, idx) => el.textContent = arrTimer[idx])
}

function handleClickBTN(onTimerValue) { 
  if ((onTimerValue-Date.now())>0) {
    document.querySelector('[data-start]').disabled = false
setInterval(()=> { 
ms = onTimerValue-Date.now()
    console.log(ms);
convertMs(ms)
},1000)

  } else { 

    document.querySelector('[data-start]').disabled = true
    alert("Please choose a date in the future")
  } 
}


refButton.addEventListener('click', handleClickBTN)









