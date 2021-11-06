const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;
let isActive = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtnEl.addEventListener('click', onStartBtnClick);
stopBtnEl.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  if (isActive) {
    return;
  }
  isActive = true;
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  clearInterval(timerId);
  isActive = false;
}
