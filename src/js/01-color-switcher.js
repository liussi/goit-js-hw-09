const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const COLOR_DELAY = 1000;
let id = null;

startBtn.addEventListener('click',onColorInterval );
stopBtn.addEventListener('click', onRemoveInterval);

function onColorInterval (){
    startBtn.setAttribute("disabled", "disabled");

    id = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor()
    },COLOR_DELAY);
}

function onRemoveInterval () {
    startBtn.removeAttribute("disabled", "disabled");
    clearInterval(id);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}