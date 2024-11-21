// Selección de elementos del DOM
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search-bar');


// Alternar clase 'active' para mostrar/ocultar el menú al hacer clic en el botón hamburguesa
hamburger.addEventListener('click', (e) => {
  e.stopPropagation(); // Evita que el clic en el botón hamburguesa cierre el menú
  navLinks.classList.toggle('active');
});

// Cerrar el menú si el usuario hace clic fuera de él
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});
// Evento para el ícono de búsqueda
searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        searchBar.focus();
        // Si el menú está abierto, lo cerramos
        navLinks.classList.remove('active');
    }
});

// Cerrar el buscador si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container') && !e.target.closest('.search-icon')) {
        searchBar.classList.remove('active');
    }
});

//modo oscuro
let checkbox = document.querySelector('.checkbox');
let body = document.body;
let boxes = document.querySelectorAll('.box'); // Selecciona todos los div con clase 'box'
let footer = document.querySelector('.footer'); // Selecciona el footer

// Verificar si el modo oscuro está activado en el localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  checkbox.checked = true;
  body.style.backgroundColor = 'black';
  body.style.color = 'white';

  // Cambiar color de fondo y texto de los elementos .box
  boxes.forEach(function(box) {
    box.style.backgroundColor = 'gray';
    box.style.color = 'red';
  });

  // Cambiar color de fondo y texto del footer
  footer.style.backgroundColor = 'purple';
  footer.style.color = 'white';
}

checkbox.addEventListener('change', function() {
  if (this.checked) {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';

    // Cambiar color de fondo y texto de los elementos .box
    boxes.forEach(function(box) {
      box.style.backgroundColor = 'gray';
      box.style.color = 'red';
    });

    // Cambiar color de fondo y texto del footer
    footer.style.backgroundColor = 'purple';
    footer.style.color = 'white';

    // Guardar el estado del modo oscuro en localStorage
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';

    // Revertir el estilo de todos los elementos con la clase 'box'
    boxes.forEach(function(box) {
      box.style.backgroundColor = '';
      box.style.color = '';
    });

    // Revertir el estilo del footer
    footer.style.backgroundColor = '';
    footer.style.color = '';

    // Guardar el estado del modo claro en localStorage
    localStorage.setItem('darkMode', 'disabled');
  }
});
