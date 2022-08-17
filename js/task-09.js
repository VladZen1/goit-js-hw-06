function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButtonEl = document.querySelector('button.change-color')
const bodyEl = document.querySelector('body')
const colorValueEl = document.querySelector('span.color')


changeButtonEl.addEventListener('click', event => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorValueEl.textContent = color;
})