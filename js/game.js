const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
const puntuacionElement = document.getElementById('puntuacion');
const recordElement = document.getElementById('record');
const listaRanking = document.getElementById('listaRanking');
const formularioRanking = document.getElementById('formularioRanking');
const nombreJugadorInput = document.getElementById('nombreJugador');

const tamanoCelda = 20;
let anchoTablero, altoTablero;

let serpiente = [];
let dx = 1;
let dy = 0;
let comidaX;
let comidaY;
let puntuacion = 0;
let record = localStorage.getItem('record') || 0;
let ranking = JSON.parse(localStorage.getItem('ranking')) || [];
let juegoEnCurso = false;
let intervalo;

recordElement.textContent = "Récord: " + record;
mostrarRanking();

function ajustarCanvas() {
    const tamañoDisponible = Math.min(window.innerWidth, window.innerHeight) - 100; // Más pequeño para móviles
    canvas.width = tamañoDisponible * 0.8;
    canvas.height = tamañoDisponible * 0.8;
    anchoTablero = Math.floor(canvas.width / tamanoCelda);
    altoTablero = Math.floor(canvas.height / tamanoCelda);
}

function generarComida() {
    comidaX = Math.floor(Math.random() * anchoTablero);
    comidaY = Math.floor(Math.random() * altoTablero);
}

function dibujarJuego() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(comidaX * tamanoCelda, comidaY * tamanoCelda, tamanoCelda, tamanoCelda);
    ctx.fillStyle = 'green';
    serpiente.forEach(parte => {
        ctx.fillRect(parte.x * tamanoCelda, parte.y * tamanoCelda, tamanoCelda, tamanoCelda);
        ctx.strokeRect(parte.x * tamanoCelda, parte.y * tamanoCelda, tamanoCelda, tamanoCelda);
    });
}

function verificarColision() {
    if (serpiente[0].x < 0 || serpiente[0].x >= anchoTablero || serpiente[0].y < 0 || serpiente[0].y >= altoTablero) {
        return true;
    }
    for (let i = 1; i < serpiente.length; i++) {
        if (serpiente[0].x === serpiente[i].x && serpiente[0].y === serpiente[i].y) {
            return true;
        }
    }
    return false;
}

function moverSerpiente() {
    if (!juegoEnCurso) return;

    const cabeza = { x: serpiente[0].x + dx, y: serpiente[0].y + dy };
    serpiente.unshift(cabeza);

    if (cabeza.x === comidaX && cabeza.y === comidaY) {
        puntuacion++;
        puntuacionElement.textContent = traducciones.game.puntuacion + ": " + puntuacion;
        generarComida();
    } else {
        serpiente.pop();
    }

    if (verificarColision()) {
        juegoEnCurso = false;
        clearInterval(intervalo);

        formularioRanking.style.display = 'block';
        canvas.style.pointerEvents = 'none';
        setTimeout(() => nombreJugadorInput.focus(), 100);
    }

    dibujarJuego();
}

function iniciarJuego() {
    serpiente = [{ x: Math.floor(anchoTablero / 2), y: Math.floor(altoTablero / 2) }];
    dx = 1;
    dy = 0;
    puntuacion = 0;
    puntuacionElement.textContent = traducciones.game.puntuacion + ": " + puntuacion;
    generarComida();
    juegoEnCurso = true;

    clearInterval(intervalo);
    intervalo = setInterval(moverSerpiente, 100);
}

function manejarTecla(event) {
    if (formularioRanking.style.display === 'block') return;

    const IZQUIERDA = 37;
    const ARRIBA = 38;
    const DERECHA = 39;
    const ABAJO = 40;

    const teclaPresionada = event.keyCode;
    const irIzquierda = teclaPresionada === IZQUIERDA && dx === 0;
    const irArriba = teclaPresionada === ARRIBA && dy === 0;
    const irDerecha = teclaPresionada === DERECHA && dx === 0;
    const irAbajo = teclaPresionada === ABAJO && dy === 0;

    if (irIzquierda || irArriba || irDerecha || irAbajo) {
        dx = irIzquierda ? -1 : irDerecha ? 1 : 0;
        dy = irArriba ? -1 : irAbajo ? 1 : 0;
    }
}

function manejarClick() {
    if (!juegoEnCurso) {
        alert("¡Bienvenido al juego de la serpiente! Presiona una tecla de flecha o haz clic en el canvas para comenzar.");
        juegoEnCurso = true;
        iniciarJuego();
    }
}

function manejarToque(event) {
    const touch = event.changedTouches[0];
    const rect = canvas.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;

    if (!juegoEnCurso) {
        alert("¡Bienvenido al juego de la serpiente! Pulsa o toca la pantalla para comenzar.");
        juegoEnCurso = true;
        iniciarJuego();
        return;
    }

    const cabeza = serpiente[0];
    const cabezaX = cabeza.x * tamanoCelda;
    const cabezaY = cabeza.y * tamanoCelda;

    const diffX = touchX - cabezaX;
    const diffY = touchY - cabezaY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        dx = diffX > 0 ? 1 : -1;
        dy = 0;
    } else {
        dx = 0;
        dy = diffY > 0 ? 1 : -1;
    }
}

function guardarRecord() {
    const nombre = nombreJugadorInput.value.toUpperCase();
    if (nombre.length === 3) {
        ranking.push({ nombre, puntuacion });
        ranking.sort((a, b) => b.puntuacion - a.puntuacion);
        ranking = ranking.slice(0, 5);
        localStorage.setItem('ranking', JSON.stringify(ranking));
        formularioRanking.style.display = 'none';
        canvas.style.pointerEvents = 'auto';
        mostrarRanking();
        alert("Juego terminado!");
        iniciarJuego();
    } else {
        alert("Ingresa un nombre de 3 letras.");
    }
}

function mostrarRanking() {
    listaRanking.innerHTML = '';
    if (ranking.length === 0) {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = "No hay entradas en el ranking.";
        listaRanking.appendChild(elementoLista);
    } else {
        ranking.forEach((item, index) => {
            const elementoLista = document.createElement('li');
            elementoLista.textContent = `${index + 1}. ${item.nombre} - ${item.puntuacion}`;
            listaRanking.appendChild(elementoLista);
        });
    }
}

ajustarCanvas();
canvas.addEventListener('touchstart', manejarToque);
canvas.addEventListener('click', manejarClick);
document.addEventListener('keydown', manejarTecla);
window.addEventListener('resize', ajustarCanvas);

// Prevenir el desplazamiento de la pantalla en todos los eventos de control
window.addEventListener('keydown', (event) => {
    if ([37, 38, 39, 40].includes(event.keyCode)) {
        event.preventDefault();
    }
}, { passive: false });

window.addEventListener('touchmove', (event) => {
    if (event.target === canvas) {
        event.preventDefault();
    }
}, { passive: false });
