const refs = {
  input: document.querySelector('input#name-input'),
  output: document.querySelector('span#name-output'),
};

const changeNameOutput = value => {
  const trimmedValue = value.trim();
  if (trimmedValue === '') {
    refs.output.textContent = 'Anonymous';
  } else {
    refs.output.textContent = trimmedValue;
  }
};

refs.input.addEventListener('input', e => changeNameOutput(e.target.value));
