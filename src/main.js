import data from './data/athletes/athletes.js';

let atletas = data.athletes;
let nombresContenido = ""

for (let i=0; i<atletas.length; i++){
let nombreAtleta = atletas[i].sport;
nombresContenido = nombresContenido + nombreAtleta
}
console.log (nombresContenido)


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
  

// Desaparece y aparece la siguiente pagina 

const btn1= document.getElementById("btn1")
btn1.addEventListener("click", cambioDePagina);
function cambioDePagina() {
    ocultarMostrar("paginaConoceMasAtletas","paginaPrincipal")
}

function ocultarMostrar(pantallaEncendida, pantallaApagada) {
    document.getElementById(pantallaApagada).style.display = "none";
    document.getElementById(pantallaEncendida).style.display = "inline";
}



// agregamos evento a suscribirse

// let botonEntrar = document.getElementById("entrar");
// botonEntrar.addEventListener ("click", mostrarPopUp)
// function mostrarPopUp() {
//     let cubrir = document.getElementById("cubrir")
//     cubrir.classList.remove("active")
// }