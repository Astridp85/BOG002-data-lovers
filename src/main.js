// import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(example, data);

let imagenes = ["imagenes/imag1.jpg","imagenes/imag2.jpg","imagenes/imag3.jpg","imagenes/imag4.jpg"];
let contador = 0;

function carrusel(contenedorImagenes) {
 contenedorImagenes.addeventlistener("click", e => {
   const atras = contenedorImagenes.querySelector(".btnAtras");
   const adelante = contenedorImagenes.querySelector(".btnAdelante");
   const img = contenedorImagenes.querySelector(".corruselImagen");
   let tgt = e.target;
   
   if(tgt==atras) {
      if(contador > 0) {
        img.src = imagenes [contador-1];
        contador--;
      }else {
        img.src = imagenes [imagenes.length-1];
      }
   } else if() {

   }
 });
}
