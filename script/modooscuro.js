// Obtener el botón para cambiar tema
const themeToggleBtn = document.querySelector('#theme-toggle');

// Escuchar el click en el botón
themeToggleBtn.addEventListener('click', () => {

  // Alterna entre clases light-mode y dark-mode
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');

  // Guardar el modo seleccionado en localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('isDarkMode', isDarkMode);
});

// Obtener el modo guardado de localStorage al cargar
const isSavedDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
if (isSavedDarkMode) {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
}