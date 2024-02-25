`use strict`;
const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', handleInput);

function handleInput(event) {
  const updateName = event.currentTarget.value.trim();
  const output = updateName || 'Anonymous';
  return (outputName.textContent = output);
}
