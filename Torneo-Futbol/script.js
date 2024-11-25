const darkModeButton = document.querySelector(".dark-mode-button"); // la lunita basicamente
const body = document.querySelector(".body");

const tablaPuntos = document.querySelector('.tabla-puntos')
let miAPI; // Si es const da error no me acuerdo porque :c

// Funcion asíncrona para obtener el objeto principal de la api
const obtenerDatosAPI = async () => {
  // Intenta obtener el json de la API y almacenarlo en la vafiable "miAPI"
  try {
    const response = await fetch('BDsimulacion.json')
    if(!response.ok){
      throw new Error('Error al obtener la api');
    }
    miAPI = await response.json()
  } catch (err) { // Si hay un error en el proceso muestra el error sin detener el programa
    console.log(err)
  }
}

// Función principal 
const generarTablaDePuntosDinamicamente = async () => {
  await obtenerDatosAPI() // Espera a que se obtenga los datos del json para ejecutar el codigo
  
  // Ordenar los equipos por puntos, del mas alto al mas bajo
  const equiposOrdenados = miAPI.equipos.sort((a, b) => b.puntos - a.puntos);
  
  const fragmento = document.createDocumentFragment(); // Crea un fragmento para cargar los datos a la pagina de una sola vez y no hacerlo uno por uno
  
  equiposOrdenados.forEach((equipo)=>{ // Repite el bloque de codigo con cada equipo
    let tablaItem = document.createElement('div'); // Crea un div
    tablaItem.classList.add('tabla-item');// Le agrega la clase 'tabla-item'
    
    
    // Nombre del equipo
    let campoNombre = document.createElement('div'); // Crea un div del campo del nombre del equipo
    campoNombre.classList.add('tabla-item-campo', 'campo-nombre'); // Le agrega las clases 'tabla-item-campo' y 'campo-nombre'
    let dataNombre = document.createElement('p'); // Crea un p, este va a contener la información del campo nombre
    dataNombre.textContent = `${equipo.nombre}`; // Le agrega el contenido dinámico al p, en este caso el nombre del equipo que este trabajando el forEach
    
    
    // Puntos del equipo
    let campoPuntos = document.createElement('div'); // Crea un div del campo de puntos del equipo
    campoPuntos.classList.add('tabla-item-campo', 'campo-puntos'); // Le agrega las clases 'tabla-item-campo' y 'campo-puntos'
    dataPuntos = document.createElement('p'); // Crea un p, este va a contener la información del campo de los puntos
    dataPuntos.textContent = `${equipo.puntos}`; // Le agrega el contenido dinámico al p, en este caso seria los puntos del equipo
    campoPuntos.appendChild(dataPuntos); // Le agrega los datos al campo
    campoNombre.appendChild(dataNombre); // Le agrega los datos al campo
    
    // Junta ambos campos en el item de la tabla
    tablaItem.appendChild(campoNombre);
    tablaItem.appendChild(campoPuntos);
    
    // Agrega cada item terminado al fragmento para cargarlos de una sola vez
    fragmento.appendChild(tablaItem);
  })
  // Carga los datos al HTML
  tablaPuntos.appendChild(fragmento);
}

// Llamada a la funcion principal
generarTablaDePuntosDinamicamente()




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

