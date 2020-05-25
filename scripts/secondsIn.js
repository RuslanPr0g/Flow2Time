function calculateSeconds() {
    let hours = document.querySelector('#hours').value;
    let minutes = document.querySelector('#minutes').value;

    if(isNaN(minutes)){
        minutes = 0;
    }
    if(isNaN(hours)){
        hours = 0;
    }

    let secondsInMinutes = minutes * 60;
    let secondsInHours = hours * 60 * 60;

    document.querySelector('#result').innerHTML = secondsInHours + secondsInMinutes;
}