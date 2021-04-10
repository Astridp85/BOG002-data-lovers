
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

/* const ordenarMedallas = (array, ordenar) => {
  if (ordenar === 'asc') {
    return array.sort ((a,b) => (a.total > b.total) ? 1 : -1);
  }else {
    return array.sort ((a,b) => (a.total < b.total) ? 1 : -1);
  }
}; */
/* const tipoDemedalla = (array,country,medalType) => {
  const paisArray = array.filter(atleta => atleta.equipo === country);
  const totalMedallas = paisArray.reduce ((counter, athlete ) => {
    const medalla = athlete.event.filter(c =>c.medal === medalType);
    if (medalla.length > 0){
      return counter + 1;
    }
    return counter;
  }, 0);
  return totalMedallas;
}; */
/* 

 const  medallasPais = paises.map(obj => ({
     country: obj,
     bronze: 0,
     silver: 0,
     gold: 0,
     total: 0
   }));
   medallasPais.forEach(medal => {
    medal.bronze =  tipoDemedalla (array,medal.country, 'Bronze');
    medal.silver =  tipoDemedalla (array,medal.country, 'silver');
    medal.gold =  tipoDemedalla (array, medal.country, 'Gold');
    medal.total = medal.bronze + medal.silver + medal.gold;
  });
  if (ordenar !== '') {
    array == ordenarMedallas (medallasPais, ordenar);
  }
  return medallasPais;*/
/* };  */


  

export {dataAtletas, paisesArray, generoArray, deporteArray}
