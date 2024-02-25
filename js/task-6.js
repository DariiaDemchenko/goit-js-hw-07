function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
const boxesDivEl = document.querySelector('#boxes');

buttonCreateEl.addEventListener('click', createBoxes);
buttonDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  const number = inputEl.value;
  if (number < 1 || number > 100) {
    return;
  }

  destroyBoxes();

  for (let i = 0; i < number; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxesDivEl.appendChild(box);
  }

  inputEl.value = '';
}

function destroyBoxes() {
  boxesDivEl.innerHTML = '';
}
