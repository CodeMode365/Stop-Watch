let seconds = document.getElementById('seconds');
let milliseconds = document.getElementById('milliseconds');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
let timeInterval;



let sec = 0;
let millisec = 0;

const timer = () => {
    millisec++;
    if (millisec < 9) {
        milliseconds.innerHTML = '0' + millisec;
    }
    if (millisec > 9) {
        milliseconds.innerHTML = millisec;
    }
    if (millisec > 99) {
        sec++;
        seconds.innerHTML = '0' + sec;
        millisec = 0;
        milliseconds.innerHTML = '0' + 0;
    }
    if (sec > 9) {
        seconds.innerHTML = sec;
    }
}
//start
start.addEventListener('click', () => {
    timeInterval = setInterval(timer, 10)
})
//stop
stop.addEventListener('click', () => {
    clearInterval(timeInterval);
})
//reset
reset.addEventListener('click', ()=>{
    clearInterval(timeInterval)
    sec ="00";
    millisec ='00';
    seconds.innerHTML=sec;
    milliseconds.innerHTML=millisec;
})