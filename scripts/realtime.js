function realTimeClock(){
    let realTime = new Date();

    let hours = realTime.getHours();
    let minutes = realTime.getMinutes();
    let seconds = realTime.getSeconds();

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.querySelector('#clock').innerHTML = `${hours}:${minutes}:${seconds}`;
    
    let timeOut = setTimeout(realTimeClock, 500);
}