import data from './data/athletes/athletes.js';
import {dataAtletas} from './data.js';


/* console.log (data.athletes);
console.log(dataAtletas(data.athletes)); */
/* DATOS ATLETAS */ 

// filtros Página Conoce más de los atletas
const btnBuscar = document.getElementById ("btnBuscar");
btnBuscar.addEventListener("click",function () {
let atletaNombre = document.getElementById ("txtAtleta").value;


const mostrarAtletas = dataAtletas(data.athletes,atletaNombre);
const divAtletas = document.getElementById("contenedorTarjetas");


mostrarAtletas.forEach(atleta => {
  let divCardAtleta = document.createElement("div");
  divCardAtleta.className = "cardPersona";
  
 

  let divImagenAtleta = document.createElement('div');
  divImagenAtleta.className = "imagenAtleta";

  let img = document.createElement('img');
  
  divAtletas.appendChild(divCardAtleta);
  divCardAtleta.appendChild(divImagenAtleta);
  divImagenAtleta.appendChild(img);

  let randomNumber = Math.floor(Math.random() * 100);
  if (atleta.genero === 'M') {
    img.src = `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`;
  }
  else {
    img.src = `https://randomuser.me/api/portraits/women/${randomNumber}.jpg`;
  }

  var h3 = document.createElement("h3");
  var pintarNombre = document.createTextNode(atleta.nombre);
  h3.appendChild(pintarNombre);
  divCardAtleta.appendChild(h3);

  var equipoH4 = document.createElement("h4");
  var pintarEquipo = document.createTextNode(atleta.equipo);
  equipoH4.appendChild(pintarEquipo);
  h3.appendChild (equipoH4);
})
});


// evento menu responsive 
let div = document.getElementById("menuToggle");
div.addEventListener("click", mostrar)
function mostrar() {
    let abrirNavegacion = document.getElementById("opcionesMenu");
    abrirNavegacion.classList.toggle("opcionesMenuOpen")
    let menuOpen = document.getElementById('menuToggle');
    menuOpen.classList.toggle('menuToggleOpen'); 
}
// Popup suscribirse y entrar
let abrirPopup = document.getElementById ("suscribir"),
    overLay = document.getElementById ("overLay"),
    popUp = document.getElementById ("popUp"),
    btnCerrar = document.getElementById ("popUp");
    abrirPopup.addEventListener('click', function(){
        overLay.classList.add('active');
        popUp.classList.add('active');
    });
    btnCerrar.addEventListener('click', function(e){
        e.preventDefault();
        overLay.classList.remove('active');
        popUp.classList.remove('active');
    });
let abrirPopupEntrar = document.getElementById("entrar"),
     overLayEntrar = document.getElementById("overLayEntrar"),
     popUpEntrar = document.getElementById("popUpEntrar"),
     btnCerrarEntrar = document.getElementById("popUpEntrar");
     abrirPopupEntrar.addEventListener("click", function(){
         overLayEntrar.classList.add("active");
         popUpEntrar.classList.add("active");
     });
     btnCerrarEntrar.addEventListener("click", function(e){
         e.preventDefault();
         overLayEntrar.classList.remove('active');
         popUpEntrar.classList.remove('active');
     });
// Desaparece y aparece la siguiente pagina conoce mas de los atletas
let btn1= document.getElementById("btn1")
btn1.addEventListener("click", cambioDePagina);
function cambioDePagina() {
    ocultarMostrar("paginaConoceMasAtletas","paginaPrincipal")
}
function ocultarMostrar(pantallaEncendida, pantallaApagada) {
    document.getElementById(pantallaApagada).style.display = "none";
    document.getElementById(pantallaEncendida).style.display = "inline";
}
// Desaparece y aparece la siguiente pagina medallero 
let btn2= document.getElementById("btn2")
btn2.addEventListener("click", cambioDePagina2);
function cambioDePagina2() {
    ocultarMostrar2("medallero","paginaPrincipal")
}
function ocultarMostrar2(pantallaEncendida, pantallaApagada) {
    document.getElementById(pantallaApagada).style.display = "none";
    document.getElementById(pantallaEncendida).style.display = "inline";
}