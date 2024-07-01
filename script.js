let timer;
let timeInSeconds = 300; 
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const display = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  document.getElementById('display').textContent = display;

  if (timeInSeconds > 0) {
    timeInSeconds--;
  } else {
    stopTimer();
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  timeInSeconds = 300;
  document.getElementById('display').textContent = '00:05:00'; 
}

function restartTimer() {
  resetTimer();
  startTimer();
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

document.getElementById('display').textContent = '00:05:00'; 
