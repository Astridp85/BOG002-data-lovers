
 // Filtros Pagina Conoce más de los atletas

const filtroNombres = (array,atletaNombre) =>{
  return array.filter(atleta => atleta.name.toLowerCase().includes(atletaNombre.toLowerCase()))
};

const filtroPais = (array, atletaPais) => {
  return array.filter(atleta => atleta.team === atletaPais)
};

const paisesArray = (array) => {
return array.map(obj => obj.team).filter((elemento, indice, arrayPais) => arrayPais.indexOf(elemento)==indice).sort()
};

const filtroGenero = (array, atletaGenero) => {
return array.filter(atleta => atleta.gender === atletaGenero)
};

const generoArray = (array) => {
  return array.map(obj => obj.gender).filter((elemento, indice, arrayGenero) => arrayGenero.indexOf(elemento)==indice)
};

const filtroDeporte = (array, atletaDeporte) => {
  return array.filter(atleta => atleta.sport === atletaDeporte )
};

const deporteArray = (array) => {
  return array.map(obj =>obj.sport).filter((elemento, indice, arrayDeporte) => arrayDeporte.indexOf(elemento)==indice).sort()
};


const dataAtletas = (array,atletaNombre, atletaPais, atletaGenero, atletaDeporte) => {
 
  if (atletaNombre !== '') {
    array = filtroNombres (array, atletaNombre);
    }
   
  if (atletaPais !==''){
    array = filtroPais (array, atletaPais)
  }

  if (atletaGenero !=='') {
    array = filtroGenero (array, atletaGenero )
  }

  if (atletaDeporte !=='') {
    array = filtroDeporte (array, atletaDeporte)
  }
  
  const nuevoArray = array.map(obj => ({
    nombre: obj.name,
    deporte: obj.sport,
    equipo: obj.team,
    genero: obj.gender,
    medalla: obj.medal,
    edad: obj.age
  }));
  return nuevoArray;
};



// filtro medallas

const filtroMedallasPorDeporte = (array, deporteMedallas) => {
  return array.filter(atleta =>{ atleta.sport === deporteMedallas})
}

const filtroMedallasPorGenero = (array, generoMedallas) => {
  return array.filter(atleta => { atleta.gender === generoMedallas
  })
}

const filtroMedallasPorPais = (array, paisesMedallas) => {
  return array.filter(atleta => { atleta.gender === paisesMedallas
  })
}






const datosTabla = (array, deporteMedallas, generoMedallas, paisesMedallas) => {

if (deporteMedallas !== 0){
  filtroMedallasPorDeporte (array, deporteMedallas)
}

if (generoMedallas !== 0){
  filtroMedallasPorGenero (array, generoMedallas)
}

if (paisesMedallas !== 0){
  filtroMedallasPorPais (array, paisesMedallas)
}

 var paisesMostrar = paisesArray(array);
 var medallas = paisesMostrar.map(obj => ({
   pais : obj,
   bronce : 0,
   plata : 0,
   oro : 0,
   total : 0

 }));

 return medallas;
};






// const filtroResultadosMedallas = (array =>{
//   const newArray = [];
//   const resultado = 0
// array.forEach((elemento)=> {
//   if( elemento.team === team && elemento.medal === medal) {
//     newArray.push(elemento)

//   }

//   }
// })
// })





  

export {dataAtletas, paisesArray, generoArray, deporteArray, datosTabla}
