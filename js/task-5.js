const refs = {
  button: document.querySelector('button.change-color'),
  colorText: document.querySelector('.color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBgColor = color => {
  document.body.style.backgroundColor = color;
  refs.colorText.textContent = color;
};

refs.button.addEventListener('click', () => changeBgColor(getRandomHexColor()));
