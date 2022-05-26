import { generatePassword } from "./util.js";

export const generatePasswordButtonHandler = (evt) => {
  const passwordInput = document.querySelector('.password-input');
  const button = evt.target.closest('.button');
  if (!button) return;

  passwordInput.value = generatePassword();
};

export const outputAmountOfCharacters = () => {
  const outputAmountOfPasswordLength = document.querySelector('.password-amount');
  const passwordRange = document.querySelector('.password-range');
  
  outputAmountOfPasswordLength.innerHTML = `Password length: <br> <b> ${passwordRange.value} </b>`;
};