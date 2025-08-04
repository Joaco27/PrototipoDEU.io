document.addEventListener("DOMContentLoaded", function () {
  const modoBtn = document.getElementById('modo-btn');
  const fuenteBtn = document.getElementById('fuente-btn');
  const header = document.querySelector('.app-header');
  const html = document.documentElement;
  const body = document.body;
  const appBody = document.querySelector('.app-body');
  const chatMensajes = document.querySelector('.chat-mensajes');
  const chatForm = document.querySelector('.chat-formulario');
  const chatInput = document.querySelector('.chat-formulario input[type="text"]');
  const chatButton = document.querySelector('.chat-formulario button');

  let modoOscuro = false;
  let tamañoFuente = 1;

  modoBtn.addEventListener('click', () => {
    modoOscuro = !modoOscuro;

    body.style.backgroundColor = modoOscuro ? '#121212' : 'white';
    body.style.color = modoOscuro ? '#f5f5f5' : 'black';
    header.style.backgroundColor = modoOscuro ? '#333' : '#788CFF';
    if (appBody) {
      appBody.style.backgroundColor = modoOscuro ? '#181818' : 'white';
      appBody.style.color = modoOscuro ? '#f5f5f5' : 'black';
    }
    if (chatMensajes) chatMensajes.style.backgroundColor = modoOscuro ? '#1e1e1e' : '#f9f9f9';

    if (chatForm) chatForm.style.backgroundColor = modoOscuro ? '#2b2b2b' : '#fff';
    if (chatInput) {
      chatInput.style.backgroundColor = modoOscuro ? '#444' : '#fff';
      chatInput.style.color = modoOscuro ? '#fff' : '#000';
      chatInput.style.border = modoOscuro ? '1px solid #888' : '1px solid #ccc';
    }
    if (chatButton) {
      chatButton.style.backgroundColor = modoOscuro ? '#388e3c' : '#43a047';
      chatButton.style.color = '#fff';
    }

    modoBtn.innerText = modoOscuro ? '🌙 Modo Oscuro' : '☀️ Modo Claro';
    modoBtn.setAttribute('aria-label', modoOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  });

  fuenteBtn.addEventListener('click', () => {
    tamañoFuente += 0.1;
    if (tamañoFuente > 1.3) tamañoFuente = 1;
    html.style.fontSize = `${tamañoFuente}rem`;
  });
});
