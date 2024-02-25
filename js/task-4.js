`use strict`;
const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;

  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  console.log(info);
  event.currentTarget.reset();
}
