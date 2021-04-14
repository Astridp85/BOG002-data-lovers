
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
/* const ordenarTotal = (array, ordenar) => {
  if (ordenar === "asc") {
  return array.sort ((a,b) => (a.total > b.total) ? 1 : -1);
  } else {
    return array.sort ((a,b) => (a.total < b.total)? 1 : -1);
  }
}; */

const filtroMedallas = (array, disciplinaAtleta) => {
  return array.filter(atleta =>{ atleta.team === disciplinaAtleta})
}
/* const tipoDemedalla = (array, team, medalType) => {
  const arrayPorpais = array.filter (atleta => atleta.team === team);
  const totalDemedallas = arrayPorpais.reduce((counter, atleta)=>{
    const medalla = atleta.disciplinaAtleta.filter (c => c.medalla === medalType);
    if (medalla.length > 0){
      return counter +1;
    }
    return counter; 
  }, 0);
  return totalDemedallas
 
}; */


const datosTabla = (array, disciplinaAtleta/* ,ordenar,medalType */) => {
/*  if (medalType !== '') {
   array = tipoDemedalla (array,medalType);
 }

if (ordenar !== ''){
  array = ordenarTotal (array,ordenar);
} */
if (disciplinaAtleta !== 0){
  filtroMedallas (array, disciplinaAtleta)
}

 var paisesMostrar = paisesArray(array);
 var medallas = paisesMostrar.map(obj => ({
   pais : obj,
   bronce : 0,
   plata : 0,
   oro : 0,
   total : 0
 
  }));
 /*  console.log (paisesMostrar); */
  return medallas;
  
 };

/* medallas.forEach(medal => {
  medal.bronze =  tipoDemedalla (array,medal.team, 'Bronze');
  medal.silver =  tipoDemedalla (array,medal.team, 'silver');
  medal.gold =  tipoDemedalla (array, medal.team, 'Gold');
  medal.total = medal.bronze + medal.silver + medal.gold;
  
});
if (ordenar !== '') {
  array = ordenarTotal (medallas,ordenar)
} */





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





/* const  medallasPais = paises.map(obj => ({
  team: obj,
  bronze: 0,
  silver: 0,
  gold: 0,
  total: 0
}));


 */

  

export {dataAtletas, paisesArray, generoArray, deporteArray, datosTabla}
