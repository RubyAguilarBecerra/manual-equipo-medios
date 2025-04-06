// script.js
const toggleBtn = document.getElementById('modoToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
});


function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
  }
  
  document.addEventListener('click', function (e) {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.menu-toggle');
  
    const isSidebarOpen = sidebar.classList.contains('open');
    const clickedInsideSidebar = sidebar.contains(e.target);
    const clickedToggle = toggleButton.contains(e.target);
  
    // Si el menú está abierto y el clic fue fuera de él y del botón hamburguesa, se cierra
    if (isSidebarOpen && !clickedInsideSidebar && !clickedToggle) {
      sidebar.classList.remove('open');
    }
  });
  