const display = document.getElementById("clock");
const audio = new Audio("sound.wav");

function getdateandtime() {
    const now = new Date();
    const timeElements = {
        hour : 'numeric',
        minute : 'numeric',
        second : 'numeric',
        hour12 : 'true',
    };

    const time = now.toLocaleTimeString(undefined, timeElements);
    display.textContent = time;
}

getdateandtime();
setInterval(getdateandtime, 1000);

function setAlarmTime(value) {
  alarmTime = value;
}

function setAlarm() {
  if (alarmTime) {     
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
      const timeout = timeToAlarm.getTime() - current.getTime();
      console.log(timeout);
      alarmTimeout = setTimeout(() => audio.play(), timeout);
      alert("Alarm Set");
    }
  }
}

function stopAlarm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert("Alarm Stopped");
  }
}

