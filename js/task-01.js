
const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);

const categoryEl = document.querySelectorAll('#categories>li');
categoryEl.forEach(el => {

  console.log(
    `Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`,
  );
});