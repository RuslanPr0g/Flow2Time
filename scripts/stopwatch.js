let seconds = 0;
let minutes = 0;
let hours = 0;

// keep the structure 00:00:00
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;

let status = "stopped";

let countRec = 0;

function stopwatch() {

    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
    }

    if(minutes / 60 === 1){
        minutes = 0;
        hours++;
    }

    if(seconds < 10){
        displaySeconds = '0' + seconds.toString();
    }else {
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = '0' + minutes.toString();
    }else {
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = '0' + hours.toString();
    }else {
        displayHours = hours;
    }

    document.querySelector('#countup').innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

function startStop() {
    if(status == "stopped") {
        interval = window.setInterval(stopwatch, 1000);
        document.querySelector('#startstop').innerHTML = "Stop";
        status = "started";
    } else {
        window.clearInterval(interval);
        document.querySelector('#startstop').innerHTML = "Start";
        status = "stopped";
    }
}

function reset() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    displaySeconds = displayMinutes = displayHours = "00";

    document.querySelector('#countup').innerHTML = "00:00:00";
    document.querySelector('#startstop').innerHTML = "Start";
    status = "stopped";
}

function recordwatch() {
    if(countRec > 7) return;

    let elemR = document.createElement("li");
    let record = document.createTextNode(`${displayHours}:${displayMinutes}:${displaySeconds}`);

    elemR.appendChild(record);

    let listR = document.getElementById("listRecords");
    listR.appendChild(elemR);

    document.getElementById("RecordsClear").style.display = "block";

    countRec++;
}

function clearRecords() {
    document.getElementById("listRecords").innerHTML = "";
    document.getElementById("RecordsClear").style.display = "none";
    countRec = 0;
}