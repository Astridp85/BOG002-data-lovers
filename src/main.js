import data from './data/athletes/athletes.js';

let atletas = data.athletes;
let nombresContenido = ""

for (let i=0; i<atletas.length; i++){
let nombreAtleta = atletas[i].name;
nombresContenido = nombresContenido + nombreAtleta
}


// evento menu responsive 
let div = document.getElementById("menuToggle");
div.addEventListener("click", mostrar)
function mostrar() {
    let abrirNavegacion = document.getElementById("opcionesMenu");
    abrirNavegacion.classList.toggle("opcionesMenuOpen")

    let menuOpen = document.getElementById('menuToggle');
    menuOpen.classList.toggle('menuToggleOpen');    
}
  

    
