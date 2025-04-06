// script.js
const toggleBtn = document.getElementById('modoToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
});


function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
  }
  