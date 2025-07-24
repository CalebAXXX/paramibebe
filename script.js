function crearLluvia() {
  const lluvia = document.querySelector(".lluvia");
  setInterval(() => {
    const span = document.createElement("span");
    span.textContent = "Te amo tanto 💖";
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = 2 + Math.random() * 3 + "s";
    span.addEventListener("click", () => mostrarGrande(span.textContent));
    lluvia.appendChild(span);
    setTimeout(() => span.remove(), 6000);
  }, 200);
}

function crearEstrellas() {
  const contenedor = document.querySelector(".estrellas");
  setInterval(() => {
    const estrella = document.createElement("div");
    estrella.classList.add("estrella");
    estrella.style.left = Math.random() * 100 + "vw";
    estrella.style.top = "-10px";
    estrella.style.animationDuration = 2 + Math.random() * 2 + "s";
    contenedor.appendChild(estrella);
    setTimeout(() => estrella.remove(), 4000);
  }, 300);
}

function mostrarGrande(texto) {
  const grande = document.createElement("div");
  grande.textContent = texto;
  grande.style.position = "fixed";
  grande.style.top = "50%";
  grande.style.left = "50%";
  grande.style.transform = "translate(-50%, -50%)";
  grande.style.fontSize = "3rem";
  grande.style.color = "#ff66cc";
  grande.style.fontStyle = "italic";
  grande.style.textShadow = "0 0 20px #ff99cc, 0 0 30px #ff33cc";
  grande.style.zIndex = 1000;
  document.body.appendChild(grande);
  setTimeout(() => grande.remove(), 2000);
}

function mostrarCarta() {
  document.getElementById("ventanaCarta").style.display = "block";

  // Intentar reproducir la música al primer clic
  const musica = document.getElementById("musicaFondo");
  if (musica && musica.paused) {
    musica.play().catch((e) => {
      console.log("Autoplay bloqueado por el navegador.");
    });
  }
}

function cerrarCarta() {
  document.getElementById("ventanaCarta").style.display = "none";
}

function mostrarCarta2() {
  document.getElementById("ventanaCarta2").style.display = "block";
}

function cerrarCarta2() {
  document.getElementById("ventanaCarta2").style.display = "none";
}

function actualizarContadorDias() {
  const inicio = new Date("2024-02-24");
  const hoy = new Date();
  const diferenciaMs = hoy.setHours(0,0,0,0) - inicio.setHours(0,0,0,0);
  const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
  const texto = `💞 Llevamos ${dias} días juntos desde el 24 de febrero de 2024`;
  document.getElementById("contador-dias").textContent = texto;
}

crearLluvia();
crearEstrellas();
actualizarContadorDias();












