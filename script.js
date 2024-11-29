        // Function to create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    
    // Random position and animation duration
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's'
    // Append the heart to the DOM
    document.getElementById('hearts').appendChild(heart)
    // Remove heart after animation is finished
    setTimeout(() => {
        heart.remove();
    }, 2900);
}
// Create hearts every 250ms
setInterval(createHeart, 250);


// Función para actualizar la cuenta regresiva
function updateCountdown() {
    // Fecha objetivo - Ajusta esta fecha a tu preferencia
    const targetDate = new Date('2024-11-11T00:00:00').getTime();
    
    function update() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    }

    const interval = setInterval(update, 1000);
    update();
}

// Iniciar la cuenta regresiva
updateCountdown();


// Función para activar los botones uno por uno después de un tiempo de espera
function activateDownloadButtons() {
    let delay = 2000; // Tiempo de espera en milisegundos (2 segundos)

    // Mostrar el primer botón de descarga
    document.getElementById("downloadBtn1").style.display = "inline-block";

    // Mostrar los siguientes botones de descarga uno por uno
    const buttons = document.querySelectorAll("#lettersList button");
    buttons.forEach((btn, index) => {
        setTimeout(() => {
            btn.style.display = "inline-block"; // Muestra el siguiente botón
        }, delay * (index + 1)); // Aumentar el tiempo de espera por cada botón
    });

    // Muestra la lista de cartas después de que el primer botón se haya mostrado
    setTimeout(() => {
        document.getElementById("lettersList").style.display = "block";
    }, delay * (buttons.length + 1)); // Muestra la lista después de que todos los botones se hayan activado
}

// Llamamos a la función cuando la página cargue
window.onload = function() {
    activateDownloadButtons();
};
