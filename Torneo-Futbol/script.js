const darkModeButton = document.querySelector(".dark-mode-button"); // la lunita basicamente
const body = document.querySelector(".body");

// si cuando abandonaste la web la tenias en modo oscuro lo deja asi al volver a ingresar en otro momento, incluso si cerras el navegador, la pestaña, etc
if(localStorage.getItem("preferencia-dark-mode") === "true"){
  body.classList.add("dark-mode") 
} else {
  body.classList.remove("dark-mode");
}
  
// Agregar el evento al botón(la lunita) para alternar el tema
darkModeButton.addEventListener("click", ()=>{
  // alterna la clase dark-mode del body, si la tenia la quita y si no la tenia la pone
  body.classList.toggle("dark-mode");
  
  // guarda el estado de la preferencia
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("preferencia-dark-mode", "true");
  } else {
    localStorage.setItem("preferencia-dark-mode", "false");
  }
});

const noGuardarEnHistorial = (event)=>{
  let target = event.target.getAttribute('href');
  window.history.replaceState(null, null, window.location.href.split('#')[0] + target);
}
