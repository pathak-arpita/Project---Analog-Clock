const deg = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
setInterval(() => {
let day = new Date();
let hrs = day.getHours() * 30;
let mins = day.getMinutes() * deg;
let secs = day.getSeconds() * deg;
hr.style.transform = `rotateZ(${hrs+(mins/12)}deg)`;
min.style.transform = `rotateZ(${mins}deg)`;
sec.style.transform = `rotateZ(${secs}deg)`;
})
