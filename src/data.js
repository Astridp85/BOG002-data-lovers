
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


const dataAtletas = (array,atletaNombre, atletaPais, atletaGenero, atletaDeporte/* ,ordenar */) => {
 
 

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



/* const  medallasPais = paises.map(obj => ({
  team: obj,
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
 */

  

export {dataAtletas, paisesArray, generoArray, deporteArray}
