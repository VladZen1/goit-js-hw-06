const inputChangeEl = document.querySelector('input#font-size-control')
const textEl = document.querySelector('span#text')

inputChangeEl.addEventListener('change', event => {
    textEl.style.fontSize = `${event.target.value }px`
})