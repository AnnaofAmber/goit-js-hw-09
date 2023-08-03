import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const input = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('button[data-start]')
const daysLable = document.querySelector('span[data-days]')
const hoursLable = document.querySelector('span[data-hours]')
const minutesLable = document.querySelector('span[data-minutes]')
const secondsLable = document.querySelector('span[data-seconds]')
let selected = 0;
let timerId = null;

btnStart.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
         selected = new Date(selectedDates)
        if (selected<options.defaultDate) {
            window.alert("Please choose a date in the future")
        } else{
            btnStart.disabled = false; 
        }
        
        
    },
  };
  flatpickr(input, options)
  

  function convertMs(ms) {
   ms = selected - new Date()
  
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
     
    daysLable.textContent = days;
    hoursLable.textContent = hours;
    minutesLable.textContent = minutes;
    secondsLable.textContent = seconds;

    // return { days, hours, minutes, seconds };
  }

  btnStart.addEventListener('click', () => {
   timerId = setInterval(convertMs, 1000)
  })
