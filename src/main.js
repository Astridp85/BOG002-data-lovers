import data from './data/athletes/athletes.js';
import {dataAtletas, paisesArray, generoArray, deporteArray, datosTabla} from './data.js';


mostrarTarjetas(dataAtletas(data.athletes, "", "", "", ""));

// filtros Página Conoce más de los atletas
// filtro por deporte

let mostrarDeporte = deporteArray(data.athletes);
mostrarDeporte.forEach(deporte => {
  let selectDeporte = document.getElementById("selectBusquedaDeporte");
  let deportes = document.createElement("option");
  deportes.text = deporte;
  deportes.value = deporte;
  selectDeporte.appendChild(deportes);

  let selectMedallero = document.getElementById ('selectBusquedaDeporte2');
  let deportesMedallero = document.createElement('option');
  deportesMedallero.text = deporte;
  deportesMedallero.value = deporte;
  selectMedallero.appendChild(deportesMedallero);
});

// filtro por genero 

let mostrarGenero = generoArray(data.athletes);
mostrarGenero.forEach(genero => {
 let selectGenero = document.getElementById("selectBusquedaGenero");
 let generos = document.createElement("option");
 generos.text = genero;
 generos.value = genero;
 selectGenero.appendChild(generos);

 let selectGeneroMedal = document.getElementById('selectBusquedaGenero2');
 let generoMedallero = document.createElement ('option');
 generoMedallero.text = genero;
 generoMedallero.value = genero;
 selectGeneroMedal.appendChild(generoMedallero);
});

// filtro por pais

let mostrarPaises =  paisesArray(data.athletes);
mostrarPaises.forEach(pais => {
    let selectPais = document.getElementById("selectBusquedaPais");
    let paises = document.createElement("option");
    paises.text = pais;
    paises.value = pais;
    selectPais.appendChild(paises);

    let selectPaisMedal = document.getElementById ('selectBusquedaPais2');
    let paisesMedallero = document.createElement ('option');
    paisesMedallero.text = pais;
    paisesMedallero.value = pais;
    selectPaisMedal.appendChild(paisesMedallero);
});

// filtro por nombre

const btnNombre = document.getElementById ("btnBuscar");
btnNombre.addEventListener ('click', function(){
let atletaNombre = document.getElementById("txtAtleta").value;
let atletaPais = document.getElementById("selectBusquedaPais").value;
let atletaGenero = document.getElementById ("selectBusquedaGenero").value;
let atletaDeporte = document.getElementById("selectBusquedaDeporte").value;

let deporteMedallas = document.getElementById ('selectBusquedaDeporte2').value;
let generoMedallas = document.getElementById ('selectBusquedaGenero2').value;
let paisesMedallas = document.getElementById ('selectBusquedaPais2').value;



const filtroAtletas = dataAtletas(data.athletes,atletaNombre, atletaPais, atletaGenero, atletaDeporte,deporteMedallas,generoMedallas,paisesMedallas,/* mostrarorden */);
mostrarTarjetas(filtroAtletas)
});

// funcion mostrar las tarjetas en pantalla

function mostrarTarjetas(atletasArray){
 const divAtletas = document.getElementById("contenedorTarjetas")
 divAtletas.innerHTML = '';
atletasArray.forEach((atleta) => {
  let divCardAtleta = document.createElement("div");
  divCardAtleta.className = "cardPersona";
  let divImagenAtleta = document.createElement('div');
  divImagenAtleta.className = "imagenAtleta";
  let img = document.createElement('img');
  let randomNumber = Math.floor(Math.random() * 100);
  if (atleta.genero === 'M') {
    img.src = `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`;
  }
  else {
    img.src = `https://randomuser.me/api/portraits/women/${randomNumber}.jpg`;
  }

  divAtletas.appendChild(divCardAtleta);
  divCardAtleta.appendChild(divImagenAtleta);
  divImagenAtleta.appendChild(img);

  var h3 = document.createElement("h3");
  var pintarNombre = document.createTextNode(atleta.nombre);
  h3.appendChild(pintarNombre);
  divCardAtleta.appendChild(h3);

  var equipoAtleta = document.createElement("p");
  var pintarEquipo = document.createTextNode("Equipo: "+(atleta.equipo));
  equipoAtleta.appendChild(pintarEquipo);
  divCardAtleta.appendChild (equipoAtleta);

  var edadAtleta = document.createElement("p");
  var pintarEdad = document.createTextNode("Edad: "+ (atleta.edad));
  edadAtleta.appendChild(pintarEdad);
  divCardAtleta.appendChild(edadAtleta);

  var deporteAtleta = document.createElement("p");
  var pintarDeporte= document.createTextNode("Deporte: "+(atleta.deporte));
  deporteAtleta.appendChild(pintarDeporte);
  divCardAtleta.appendChild(deporteAtleta);
  
  var medallaAtleta = document.createElement("p");
  var pintarMedalla= document.createTextNode("Medalla: "+(atleta.medalla));
  medallaAtleta.appendChild(pintarMedalla);
  divCardAtleta.appendChild(medallaAtleta);
});
}

// boton refrescar 

let btnLimpiar = document.getElementById ("btnLimpiar");

btnLimpiar.addEventListener("click", refrescar);
function refrescar() {
    document.getElementById("txtAtleta").value = "";
    document.getElementById("selectBusquedaPais").value = "";
    document.getElementById ("selectBusquedaGenero").value = "";
    document.getElementById("selectBusquedaDeporte").value = "";

    mostrarTarjetas(dataAtletas(data.athletes, "", "", "", ""));
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
    ocultarMostrar("medallero","paginaPrincipal")
}
// flecha de regresar página principal desde conoce mas de los atletas
let btnAtras = document.getElementById("btnAtras")
btnAtras.addEventListener("click", iraPaginaPrincipal);
function iraPaginaPrincipal() {
 ocultarMostrar("paginaPrincipal","paginaConoceMasAtletas")
}

// flecha de regresar página principal desde medallero
let btnAtras2 = document.getElementById("btnAtras2");
btnAtras2.addEventListener("click", iraPaginaPrincipal2);
function iraPaginaPrincipal2() {

 ocultarMostrar("paginaPrincipal","medallero");
}


// tabla medallero
/* let btnBuscarmedallas = document.getElementById ('btnBuscar2');
btnBuscarmedallas.addEventListener ('click', function(){
    let atletaPais2 = document.getElementById("selectBusquedaPais2").value;
    let atletaGenero2 = document.getElementById ("selectBusquedaGenero2").value;
    let atletaDeporte2 = document.getElementById("selectBusquedaDeporte2").value;
    let ordenarMedallas = document.getElementById ("ordenar").value */
   

    var datosIngresarTabla = datosTabla (data.athletes/* ,atletaPais2,atletaGenero2,atletaDeporte2,ordenarMedallas */);
   /*  mostrarTarjetas(datosIngresarTabla); */
    const trMedallas = document.getElementById("tablaDemedallas")
    trMedallas.innerHTML = '';
    datosIngresarTabla.forEach((medal) => {
        
     let filaPaises = document.createElement("tr") 

     let columnaPaises = document.createElement("td");
     let nombreColumna = document.createTextNode(medal.pais);
     filaPaises.appendChild(columnaPaises);
     columnaPaises.appendChild(nombreColumna);

     let columnaOro = document.createElement("td");
     let nombreColumnaOro = document.createTextNode(medal.oro);
     filaPaises.appendChild(columnaOro);
     columnaOro.appendChild(nombreColumnaOro);

     let columnaPlata = document.createElement("td");
     let nombreColumnaPlata = document.createTextNode(medal.plata);
     filaPaises.appendChild(columnaPlata);
     columnaPlata.appendChild(nombreColumnaPlata);

     let columnaBronce = document.createElement("td");
     let nombreColumnaBronce = document.createTextNode(medal.bronce);
     filaPaises.appendChild(columnaBronce);
     columnaBronce.appendChild(nombreColumnaBronce);

     let columnaTotal = document.createElement("td");
     let nombreColumnaTotal = document.createTextNode(medal.total);
     filaPaises.appendChild(columnaTotal);
     columnaTotal.appendChild(nombreColumnaTotal);

     trMedallas.appendChild(filaPaises);
    });
   



     