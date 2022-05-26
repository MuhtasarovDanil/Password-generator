const ALL_SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!:|&+#<>-_~';

const MIN_LETTERS_INDEX = 0;
const MAX_LETTERS_INDEX = 25;

const MIN_NUMBER_INDEX = 26;
const MAX_NUMBER_INDEX = 36;

const MIN_SYMBOLS_INDEX = 37;
const MAX_SYMBOLS_INDEX = 46;

/* Utils functions */

export const generateRandomInt = (max) => {
  return Math.floor(Math.random() * (max - 0) + 0);
}

export const selectedCheckBoxes = () => {
  let selectedSymbols = '';

  const lowercaseCheckbox = document.querySelector('#lowercase');
  const uppercaseCheckbox = document.querySelector('#uppercase');
  const numbersCheckbox = document.querySelector('#numbers');
  const symbolsCheckbox = document.querySelector('#symbols');

  if (symbolsCheckbox.checked) selectedSymbols += ALL_SYMBOLS.slice(MIN_SYMBOLS_INDEX, MAX_SYMBOLS_INDEX); 
  if (numbersCheckbox.checked) selectedSymbols += ALL_SYMBOLS.slice(MIN_NUMBER_INDEX, MAX_NUMBER_INDEX);
  if (lowercaseCheckbox.checked) selectedSymbols += ALL_SYMBOLS.slice(MIN_LETTERS_INDEX, MAX_LETTERS_INDEX).toLowerCase();
  if (uppercaseCheckbox.checked) selectedSymbols += ALL_SYMBOLS.slice(MIN_LETTERS_INDEX, MAX_LETTERS_INDEX);

  return !!selectedSymbols ? selectedSymbols : false;
}

export const generatePassword = () => {
  const passwordRange = document.querySelector('.password-range');
  let password = '';

  if (!selectedCheckBoxes()) return 'Please, select checkboxes';

  const allSelectedSymbols = selectedCheckBoxes();

  for (let i = 0; i < passwordRange.value; i++) {
    password += allSelectedSymbols[generateRandomInt(allSelectedSymbols.length)];
  }

  return password;
}