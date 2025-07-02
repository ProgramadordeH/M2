function lanzarConfeti() {
    const colors = ["#FFC700", "#FF0000", "#2E3192", "#41BBC7", "#7CFC00", "#FF69B4"];
    const confetiCount = 600; // Mucho más confeti para llenar la pantalla
    for (let i = 0; i < confetiCount; i++) {
        const confeti = document.createElement("div");
        confeti.style.position = "fixed";
        confeti.style.top = `${-60 + Math.random() * 60}px`; // Más dispersión arriba
        confeti.style.left = `${Math.random() * 100}vw`;
        confeti.style.width = `${6 + Math.random() * 10}px`; // Tamaños variados
        confeti.style.height = `${12 + Math.random() * 16}px`;
        confeti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confeti.style.opacity = Math.random() * 0.7 + 0.3;
        confeti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confeti.style.borderRadius = "3px";
        confeti.style.zIndex = "999";
        confeti.style.pointerEvents = "none";
        confeti.style.transition = "top 4s linear, left 4s linear, opacity 4s";
        document.body.appendChild(confeti);

        setTimeout(() => {
            confeti.style.top = `${80 + Math.random() * 20}vh`;
            confeti.style.left = `${Math.random() * 100}vw`;
            confeti.style.opacity = "0";
        }, 10);

        setTimeout(() => {
            confeti.remove();
        }, 4100);
    }
}

// Declarar audio y playButton en el ámbito global
let audio;
let playButton;

document.addEventListener("DOMContentLoaded", lanzarConfeti);

document.addEventListener("DOMContentLoaded", () => {
    // Crear y agregar el audio para música de fondo
    audio = document.createElement("audio");
    audio.src = "cumpleaños.mp3"; // Cambia por la ruta de tu archivo de música
    audio.loop = true;
    audio.autoplay = true;
    audio.style.display = "none";
    document.body.appendChild(audio);

    // Mostrar un mensaje para que el usuario active la música
    playButton = document.createElement("button");
    playButton.textContent = "Haz clic aquí para activar la música 🎵";
    playButton.style.position = "fixed";
    playButton.style.bottom = "20px";
    playButton.style.left = "20px";
    playButton.style.top = "auto";
    playButton.style.transform = "none";
    playButton.style.zIndex = "1000";
    document.body.appendChild(playButton);

    playButton.addEventListener("click", () => {
        audio.play();
        playButton.remove();
    });
});

// Función para intentar reproducir la música
function reproducirMusicaLoader() {
    if (audio) {
        audio.play().catch(() => {
            // Algunos navegadores requieren interacción del usuario
        });
    }
}

// Siempre intenta reproducir la música en cada interacción del usuario
function habilitarMusicaTrasInteraccion() {
    reproducirMusicaLoader();
    window.removeEventListener('click', habilitarMusicaTrasInteraccion);
    window.removeEventListener('keydown', habilitarMusicaTrasInteraccion);
}
window.addEventListener('click', habilitarMusicaTrasInteraccion);
window.addEventListener('keydown', habilitarMusicaTrasInteraccion);

// Intenta reproducir la música al cargar (por si el navegador lo permite)
document.addEventListener("DOMContentLoaded", reproducirMusicaLoader);
