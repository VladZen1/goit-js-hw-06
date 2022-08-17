let counterValue = 0;

const displayCounterEl = document.querySelector('#value');
const buttonMinusEl = document.querySelector('button[data-action="decrement"]');
const buttonPlusEl = document.querySelector('button[data-action="increment"]');

buttonMinusEl.addEventListener('click', () => {
    counterValue -= 1
    displayCounterEl.textContent = counterValue
});

buttonPlusEl.addEventListener('click', () => {
    counterValue += 1
    displayCounterEl.textContent = counterValue
});