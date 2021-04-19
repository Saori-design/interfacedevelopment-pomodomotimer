$(document).on("click", "#nav a[href]", nav);

function nav(e){

    e.preventDefault();

    var href = $(this).attr("href");

    $("#content").load("modules/" + href);
}





var minutes = 25;
var seconds = 00;
var seconds_interval;

function template(){
    updateMinutes();
    updateSeconds();
}

function start(){
    seconds_interval = setInterval(secondsTimer, 1000);
    document.getElementById("clock").classList.add("active");

}

function stop() {
    clearInterval(seconds_interval);
}

function secondsTimer(){
    seconds = seconds - 1;

    var isFinished = seconds == 0 && minutes == 0;
    var isMinuteRollover = seconds < 0;

    if (isFinished) {
        stop();
        showCongrats();
    } else if (isMinuteRollover) {
        seconds = 59;
        minutes = minutes - 1;
        updateMinutes();
    }

    updateSeconds();
}

function showCongrats() {
    document.getElementById("done").innerHTML =
    "Congrats! Take a Break";

    document.getElementById("done").classList.add("show_message");
}

function updateMinutes() {
    if (minutes < 10) {
        document.getElementById("minutes").innerHTML = "0" + minutes;
    } else {
        document.getElementById("minutes").innerHTML = minutes;
    }
}

function updateSeconds() {
    if (seconds < 10) {
        document.getElementById("seconds").innerHTML = "0" + seconds;
    } else {
        document.getElementById("seconds").innerHTML = seconds;
    }
}




