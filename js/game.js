const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');
const puntuacionElement = document.getElementById('puntuacion');
const recordElement = document.getElementById('record');
const listaRanking = document.getElementById('listaRanking');
const formularioRanking = document.getElementById('formularioRanking');
const nombreJugadorInput = document.getElementById('nombreJugador');

const tamanoCelda = 20;
const anchoTablero = canvas.width / tamanoCelda;
const altoTablero = canvas.height / tamanoCelda;

let serpiente = [{ x: anchoTablero / 2, y: altoTablero / 2 }];
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

// Mostrar un mensaje inicial al usuario
alert("¡Bienvenido al juego de la serpiente! Presiona cualquier tecla de flecha para comenzar.");

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
        puntuacionElement.textContent = "Puntuación: " + puntuacion;
        generarComida();
    } else {
        serpiente.pop();
    }

    if (verificarColision()) {
        juegoEnCurso = false;
        clearInterval(intervalo);

        formularioRanking.style.display = 'block'; // Mostrar el formulario siempre

        // Desactivar eventos del teclado en el canvas
        canvas.style.pointerEvents = 'none'; 

        // Retrasar el enfoque del input para que se pueda escribir
        setTimeout(() => {
            nombreJugadorInput.focus(); 
        }, 100); 
    }

    dibujarJuego();
}


function iniciarJuego() {
    serpiente = [{ x: anchoTablero / 2, y: altoTablero / 2 }];
    dx = 1;
    dy = 0;
    puntuacion = 0;
    puntuacionElement.textContent = "Puntuación: " + puntuacion;
    generarComida();
    juegoEnCurso = false;

    clearInterval(intervalo); // Limpiar el intervalo anterior si existe
    intervalo = setInterval(moverSerpiente, 100); // Guardar el intervalo en la variable
}

function manejarTecla(event) {
    if (!juegoEnCurso) {
        juegoEnCurso = true;
    }
    if (formularioRanking.style.display === 'block') {
        return; // No hacer nada si el formulario está visible
    }

    event.preventDefault();

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

function guardarRecord() {
    const nombre = nombreJugadorInput.value.toUpperCase();
    if (nombre.length === 3) {
        ranking.push({ nombre, puntuacion: puntuacion });
        ranking.sort((a, b) => b.puntuacion - a.puntuacion);
        ranking = ranking.slice(0, 5);
        localStorage.setItem('ranking', JSON.stringify(ranking));
        formularioRanking.style.display = 'none';

        // Reactivar eventos del teclado en el canvas
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

iniciarJuego();
document.addEventListener('keydown', manejarTecla);