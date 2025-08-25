const refs = {
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleCreate() {
  const amount = Number(refs.input.value);

  if (amount < 1 || amount > 100) {
    return alert('Not valid amound!');
  }

  destroyBoxes();
  createBoxes(amount);
  refs.input.value = '';
}

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    box.style.display = 'inline-block';

    boxes.push(box);
    size += 10;
  }

  refs.boxesContainer.append(...boxes);
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
}

refs.createBtn.addEventListener('click', handleCreate);
refs.destroyBtn.addEventListener('click', destroyBoxes);
