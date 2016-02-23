
var startButton =document.getElementById('start');
var resetButton =document.getElementById('reset');
var pauseButton =document.getElementById('pause');


var seconds = 0;
var timerId = 0;
var active = false;

function start() {
  if(active == false){
    timerId = setInterval(showtime, 1000);
    active = true;
  } }

function showtime() {
  var display = document.getElementById("timer");
  display.innerHTML = seconds++;
}

function pause(){
  clearInterval(timerId);
  active = false;
}

function reset(){
  clearInterval(timerId);
  seconds =0;
  document.getElementById("timer").innerHTML = seconds;
  active = false; }

startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
