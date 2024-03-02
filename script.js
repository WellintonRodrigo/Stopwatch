const cronometro= document.getElementById('cronometro');
const time= document.getElementById('time');
const startbtn= document.getElementById('start');
const stopbtn= document.getElementById('stop');
const resetbtn= document.getElementById('reset');

let isRunning = false;
let interval;
let elapsedTime=0;

function updateTimer() {
    let segundos= Math.floor(elapsedTime/1000);
let minutos= Math.floor(segundos/60);
let horas= Math.floor(minutos/60);

horas%=60;
minutos%=60;
segundos%=60;

horas= horas < 10 ? '0' + horas : horas
minutos= minutos < 10 ? '0' + minutos : minutos
segundos= segundos < 10 ? '0' + segundos : segundos

time.textContent=`${horas}: ${minutos}: ${segundos}`
}

function startStopwatch() {
    if(!isRunning){
        isRunning= true;
        interval= setInterval(()=>{
            elapsedTime +=1000
            updateTimer()
        }, 1000)
    }
}

function stopStopwatch() {
    if(isRunning){
        isRunning= false;
        clearInterval(interval)
    }
}

function resetStopwatch() {
    stopStopwatch()
    elapsedTime=0
    updateTimer()
}

startbtn.addEventListener('click',startStopwatch)
stopbtn.addEventListener('click',stopStopwatch)
resetbtn.addEventListener('click',resetStopwatch)