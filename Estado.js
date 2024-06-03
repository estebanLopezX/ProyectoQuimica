const draggable = document.getElementById('draggable');
const container = document.getElementById('container');
const message = document.getElementById('message');
const images = {
    solid: "solido.png", // Reemplaza con la URL de la imagen para sólido
    liquid: "liquido.png", // Reemplaza con la URL de la imagen para líquido
    gas: "gaseoso.png" // Reemplaza con la URL de la imagen para gaseoso
};
let previousState = 'solid';
let messageTimeout;

draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', null);
});

container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const rect = container.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width - draggable.clientWidth) offsetX = rect.width - draggable.clientWidth;
    draggable.style.left = `${offsetX}px`;
    updateState(offsetX);
});

container.addEventListener('drop', (e) => {
    e.preventDefault();
});

function updateState(offsetX) {
    const width = container.clientWidth;
    let currentState;
    if (offsetX < width / 3) {
        currentState = 'solid';
    } else if (offsetX < 2 * width / 3) {
        currentState = 'liquid';
    } else {
        currentState = 'gas';
    }

    if (previousState === 'solid' && currentState === 'liquid') {
        showMessage('FUSIÓN');
    } else if (previousState === 'liquid' && currentState === 'gas') {
        showMessage('VAPORIZACIÓN');
    } else if (previousState === 'gas' && currentState === 'liquid') {
        showMessage('CONDENSACIÓN');
    } else if (previousState === 'liquid' && currentState === 'solid') {
        showMessage('SOLIDIFICACIÓN');
    } else if (previousState === 'solid' && currentState === 'gas') {
        showMessage();
    } else if (previousState === 'gas' && currentState === 'solid') {
        showMessage('SUBLIMACIÓN INVERSA');
    } else {
        hideMessage();
    }

    previousState = currentState;
    changeImage(currentState);
}

function changeImage(state) {
    const img = draggable.querySelector('img');
    img.src = images[state];
}

function showMessage(text) {
    message.textContent = text;
    message.style.display = 'block';
    clearTimeout(messageTimeout);
    messageTimeout = setTimeout(hideMessage, 2000); // Deja el mensaje visible por 2 segundos
}

function hideMessage() {
    message.style.display = 'none';
}