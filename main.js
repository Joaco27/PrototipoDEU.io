document.addEventListener("DOMContentLoaded", function () {
  const modoBtn = document.getElementById("modo-btn");
  const fuenteBtn = document.getElementById("fuente-btn");
  const html = document.documentElement;
  const body = document.body;

  // Elementos opcionales, solo existen en algunas vistas
  const header = document.querySelector(".app-header");
  const appBody = document.querySelector(".app-body");
  const chatMensajes = document.querySelector(".chat-mensajes");
  const chatForm = document.querySelector(".chat-formulario");
  const chatInput = document.querySelector(".chat-formulario input[type='text']");
  const chatButton = document.querySelector(".chat-formulario button");

  // === MODO OSCURO ===
  let modoOscuro = localStorage.getItem("modoOscuro") === "true";
  if (modoOscuro) aplicarModoOscuro();

  if (modoBtn) {
    modoBtn.innerText = modoOscuro ? "🌙 Modo Oscuro" : "☀️ Modo Claro";
    modoBtn.setAttribute(
      "aria-label",
      modoOscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
    );

    modoBtn.addEventListener("click", () => {
      modoOscuro = !modoOscuro;
      localStorage.setItem("modoOscuro", modoOscuro);
      modoOscuro ? aplicarModoOscuro() : aplicarModoClaro();
    });
  }

  function aplicarModoOscuro() {
    body.classList.add("modo-oscuro");

    body.style.backgroundColor = "#121212";
    body.style.color = "#f5f5f5";

    if (header) header.style.backgroundColor = "#333";
    if (appBody) {
      appBody.style.backgroundColor = "#181818";
      appBody.style.color = "#f5f5f5";
    }
    if (chatMensajes) chatMensajes.style.backgroundColor = "#1e1e1e";
    if (chatForm) chatForm.style.backgroundColor = "#2b2b2b";
    if (chatInput) {
      chatInput.style.backgroundColor = "#444";
      chatInput.style.color = "#fff";
      chatInput.style.border = "1px solid #888";
    }
    if (chatButton) {
      chatButton.style.backgroundColor = "#388e3c";
      chatButton.style.color = "#fff";
    }

    if (modoBtn) {
      modoBtn.innerText = "🌙 Modo Oscuro";
      modoBtn.setAttribute("aria-label", "Cambiar a modo claro");
    }
  }

  function aplicarModoClaro() {
    body.classList.remove("modo-oscuro");

    body.style.backgroundColor = "white";
    body.style.color = "black";

    if (header) header.style.backgroundColor = "#788CFF";
    if (appBody) {
      appBody.style.backgroundColor = "white";
      appBody.style.color = "black";
    }
    if (chatMensajes) chatMensajes.style.backgroundColor = "#f9f9f9";
    if (chatForm) chatForm.style.backgroundColor = "#fff";
    if (chatInput) {
      chatInput.style.backgroundColor = "#fff";
      chatInput.style.color = "#000";
      chatInput.style.border = "1px solid #ccc";
    }
    if (chatButton) {
      chatButton.style.backgroundColor = "#43a047";
      chatButton.style.color = "#fff";
    }

    if (modoBtn) {
      modoBtn.innerText = "☀️ Modo Claro";
      modoBtn.setAttribute("aria-label", "Cambiar a modo oscuro");
    }
  }

  // === TAMAÑO DE FUENTE ===
  let tamañoFuente = parseFloat(localStorage.getItem("tamañoFuente")) || 1;
  html.style.fontSize = `${tamañoFuente}rem`;

  if (fuenteBtn) {
    fuenteBtn.addEventListener("click", () => {
      tamañoFuente = Math.round((tamañoFuente + 0.1) * 10) / 10;
      if (tamañoFuente > 1.3) tamañoFuente = 1;

      html.style.fontSize = `${tamañoFuente}rem`;
      localStorage.setItem("tamañoFuente", tamañoFuente);
    });
  }
});
