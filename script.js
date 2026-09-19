// ========================================
// TELA DE ENTRADA + MÚSICA
// ========================================

const enter = document.getElementById("enter-screen");
const music = document.getElementById("music");

enter.addEventListener("click", () => {

    music.volume = 0;

    music.play().catch(() => {});

    enter.style.opacity = "0";

    setTimeout(() => {
        enter.style.display = "none";
    }, 800);

    // Fade da música
    let fade = setInterval(() => {

        if (music.volume < 0.35) {

            music.volume = Math.min(music.volume + 0.02, 0.35);

        } else {

            clearInterval(fade);

        }

    }, 150);

});


// ========================================
// PARTÍCULAS
// ========================================

tsParticles.load("particles", {

    background: {
        color: "transparent"
    },

    fpsLimit: 60,

    particles: {

        number: {
            value: 70
        },

        color: {
            value: "#ffffff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4
        },

        size: {
            value: {
                min: 1,
                max: 3
            }
        },

        move: {
            enable: true,
            speed: 1
        },

        links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.15
        }

    }

});


// ========================================
// CARD
// ========================================

const card = document.querySelector(".card");


// ========================================
// TILT 3D
// ========================================

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;

    card.style.transform =
        `translate(-50%, -50%)
        rotateY(${x}deg)
        rotateX(${-y}deg)
        scale(1.02)`;

});

document.addEventListener("mouseleave", () => {

    card.style.transform =
        "translate(-50%, -50%)";

});


// ========================================
// NOME PISCANDO
// ========================================

const title = document.querySelector(".card h1");

setInterval(() => {

    title.style.textShadow = "0 0 20px white";

    setTimeout(() => {

        title.style.textShadow = "none";

    }, 500);

}, 2500);


// ========================================
// CARD FLUTUANDO
// ========================================

let up = true;

setInterval(() => {

    if (up) {

        card.style.marginTop = "8px";

    } else {

        card.style.marginTop = "0px";

    }

    up = !up;

}, 1800);


// ========================================
// RIPPLE AO CLICAR
// ========================================

document.addEventListener("click", (e) => {

    const ripple = document.createElement("div");

    ripple.className = "ripple";

    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {

        ripple.remove();

    }, 700);

});


// ========================================
// EFEITO NO AVATAR
// ========================================

const profile = document.querySelector(".profile");

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    profile.style.boxShadow =
        `${(x - 0.5) * 25}px ${(y - 0.5) * 25}px 35px rgba(255,255,255,.6),
        0 0 30px white`;

});


// ========================================
// PARALLAX NO FUNDO
// ========================================

document.addEventListener("mousemove", (e) => {

    const x =
        (e.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (e.clientY / window.innerHeight - 0.5) * 20;

    document.body.style.backgroundPosition =
        `${50 + x / 5}% ${50 + y / 5}%`;

});


// ========================================
// HORA ATUAL
// ========================================

const hora = document.createElement("div");

hora.className = "hora";

document.body.appendChild(hora);

function atualizarHora() {

    const d = new Date();

    hora.innerHTML =
        d.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        });

}

atualizarHora();

setInterval(atualizarHora, 1000);


// ========================================
// BARRA DE PROGRESSO
// ========================================

const progress = document.getElementById("progress");

music.addEventListener("timeupdate", () => {

    progress.value =
        (music.currentTime / music.duration) * 100 || 0;

});

progress.addEventListener("input", () => {

    music.currentTime =
        (progress.value / 100) * music.duration;

});


// ========================================
// VOLUME
// ========================================

const volume = document.getElementById("volume");

volume.addEventListener("input", () => {

    music.volume =
        volume.value / 100;

});


// ========================================
// PLAY / PAUSE
// ========================================

const playPause =
    document.getElementById("playPause");

playPause.onclick = () => {

    if (music.paused) {

        music.play();

        playPause.innerHTML =
            '<i class="fa-solid fa-pause"></i>';

    } else {

        music.pause();

        playPause.innerHTML =
            '<i class="fa-solid fa-play"></i>';

    }

};


// ========================================
// CURSOR GLOW
// ========================================

const glow =
    document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {

    glow.style.left =
        e.clientX - 12 + "px";

    glow.style.top =
        e.clientY - 12 + "px";

});


// ========================================
// ATALHOS DO TECLADO
// ========================================

// Espaço = Play / Pause
// M = Mutar

document.addEventListener("keydown", (e) => {

    if (e.code === "Space") {

        e.preventDefault();

        if (music.paused) {

            music.play();

            playPause.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

        } else {

            music.pause();

            playPause.innerHTML =
                '<i class="fa-solid fa-play"></i>';

        }

    }

    if (e.key.toLowerCase() === "m") {

        music.muted = !music.muted;

    }

});