// Manejo del botón "NO" para insistir
const btnNo = document.getElementById('btn-no');
const btnSi = document.getElementById('btn-si');

btnNo.addEventListener('click', () => {
  // Oculta el botón NO y agranda el botón SÍ
  btnNo.style.display = 'none';
  btnSi.textContent = "¡Insisto, dale clic aquí que sí quieres ver! ❤️";
  btnSi.style.transform = "scale(1.15)";
});

// Transición a la pantalla de opciones al dar clic en SÍ
btnSi.addEventListener('click', () => {
  mostrarPantalla('pantalla-menu');
});

// Función global para cambiar entre pantallas dentro del contenedor
function mostrarPantalla(idPantalla) {
  const pantallas = document.querySelectorAll('.pantalla');
  pantallas.forEach(p => p.classList.remove('activa'));
  
  const pantallaObjetivo = document.getElementById(idPantalla);
  if (pantallaObjetivo) {
    pantallaObjetivo.classList.add('activa');
  }
}