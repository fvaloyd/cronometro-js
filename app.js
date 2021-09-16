//object time
let time = {
    "mSecond": 0,
    "seconds": 0,
    "minutes": 0,
    "hours": 0
};
//times screen
let mSecond = document.getElementById('mSecond');
let seconds = document.getElementById("second");
let minutes = document.getElementById("minute");
let hours = document.getElementById("hour");
//btns
let btnPlay = document.getElementById('play');
let btnStop = document.getElementById('stop');
let btnReset = document.getElementById('reset');
//intervalo
let intervalo;
//btn play
function play(){
    btnStop.style.display = "inline-block";
    btnReset.style.display = "inline-block"
    btnPlay.style.display = "none";
    //function play
    intervalo = setInterval(()=>{
        playSecond();
        playMinute();
        playHours();
    },1000);  
};
//btn stop
function stop(){
    btnPlay.style.display = "inline-block";
    btnStop.style.display = "none";
    clearInterval(intervalo);
};
//btn reset
function resetear(){
    btnPlay.style.display = "inline-block";
    btnStop.style.display = "none";
    btnReset.style.display = "none";
    clearInterval(intervalo);
    time.minutes = 0;
    time.seconds = 0;
    time.hours = 0;
    minutes.textContent = "00:M";
    seconds.textContent = "00:S";
    hours.textContent = "00:H";
};
//function second
function playSecond(){
    if(time.seconds == 60){
        time.seconds = 0;
        seconds.textContent = "0:S";
    }else{
        time.seconds ++;
        seconds.textContent =time.seconds + ":S";
    };  
};
//function minute
function playMinute(){
    if(time.seconds == 60){
        if(time.minutes == 60){
            time.minutes = 0;
            minutes.textContent = "0:M";
        }else{
            time.minutes ++;
            minutes.textContent =time.minutes + ":M";
        };
    }
};
//function hours
function playHours(){
    if(time.minutes == 60 && time.seconds == 60){
        if(time.hours == 24){
            time.hours = 0;
            hours.textContent = "0:H";
        }else{
            time.hours ++;
            hours.textContent = time.hours + ":H";
        };
    };
};