`use strict`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.body;
const buttonEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

buttonEl.addEventListener('click', () => {
  const changeColor = getRandomHexColor();

  bodyEl.style.backgroundColor = changeColor;
  spanColorEl.textContent = changeColor;
});
