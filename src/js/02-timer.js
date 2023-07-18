import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const daysEl = document.querySelector('span[data-days]');
console.log(daysEl)
const hoursEl = document.querySelector('span[data-hours]');
console.log(hoursEl);
const minutesEl = document.querySelector('span[data-minutes]');
console.log(minutesEl);

const secondsEl = document.querySelector('span[data-seconds]');
const startBtn = document.querySelector('button[data-start]');
const input = document.querySelector('#datetime-picker');

startBtn.addEventListener('click', inervalId)

startBtn.setAttribute("disabled", "disabled");
const dateNow = Date.now();
 
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        if(dateNow < selectedDates[0].getTime()){
            return startBtn.removeAttribute("disabled", "disabled");
        }else{
            return Notiflix.Notify.failure('Please choose a date in the future');
        }  
    },
};
const fp =  flatpickr(input, options);

function inervalId(){ 
    setInterval(() => {
        const currentDate = Date.now();
        let ms = fp.selectedDates[0].getTime() - currentDate;
    if(ms < 0){
        return
    }
    convertMs(ms);
},1000);

}


function convertMs(ms) {
    
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
    
    
    daysEl.texContent = addLeadingZero(days);
    console.log(daysEl.texContent);

    hoursEl.texContent = addLeadingZero(hours);
    console.log(hoursEl.texContent);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
    

    
    return { days, hours, minutes, seconds };
   
}  

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};
