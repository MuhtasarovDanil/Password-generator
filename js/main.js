import { generatePasswordButtonHandler, outputAmountOfCharacters } from "./handlers.js";

const render = (element, evt, handler) => {
  element.addEventListener(evt, handler);
}

const init = () => {
  const passwordRange = document.querySelector('.password-range');
  const passwordContainer = document.querySelector('.password-card');

  render(passwordRange, "change", outputAmountOfCharacters);
  render(passwordContainer, "click", generatePasswordButtonHandler);
};

init();

