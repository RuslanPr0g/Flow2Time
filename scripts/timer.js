status = "reset";
let interval = null;
let startTime = 0;

let time = 0;
let minutes = 0;
let seconds = 0;

function updateCount() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if(time < 0) return;

    if(time < 10) document.getElementById('countdown').style.color = "red";
    else document.getElementById('countdown').style.color = "black";

    document.getElementById('countdown').innerHTML = `${minutes}:${seconds}`;
    time--;
}

function startReset() {
    if(status == "reset") {
        startTime = document.getElementById('minutes').value;
        if(isNaN(startTime)) startTime = 0;
        time = startTime * 60;
        interval = window.setInterval(updateCount, 1000);
        startTime < 10 ? document.querySelector('#countdown').innerHTML = `0${Math.floor(startTime)}:00` : 
        document.querySelector('#countdown').innerHTML = `${Math.floor(startTime)}:00`;
        document.querySelector('#startTimer').innerHTML = "Reset";
        status = "started";
    } 
    else {
        window.clearInterval(interval);
        document.querySelector('#startTimer').innerHTML = "Start";
        document.querySelector('#minutes').value = "";
        resetTimer();
        status = "reset";
    }
}

function resetTimer() {
    pause = true;
    startTime = 0;
    document.querySelector('#minutes').innerHTML = "";
    document.querySelector('#countdown').innerHTML = "00:00";
}