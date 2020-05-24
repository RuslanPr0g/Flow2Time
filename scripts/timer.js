let pause = false;

function timer() {
    const startTime = document.getElementById('minutes').value; // in minutes

    let time = startTime * 60; // get seconds

    const countdown = document.getElementById('countdown');

    pause ? null : setInterval(updateCount, 1000);

    function updateCount() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        if(pause == true || time < 0) return;

        if(time < 10) document.getElementById('countdown').style.color = "red";
        else document.getElementById('countdown').style.color = "black";

        countdown.innerHTML = `${minutes}:${seconds}`;
        time--;
    }
}

function ptimer() {
    pause = !pause;
    pause ? document.querySelector('#pauseTimer').innerHTML = 'Resume' : document.querySelector('#pauseTimer').innerHTML = 'Pause'; 
}