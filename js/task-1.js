const refs = {
  items: document.querySelectorAll('ul#categories .item'),
};

console.log(`Number of categories: ${refs.items.length}`);
refs.items.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
