
// Filtros Pagina Conoce más de los atletas


const filtroNombres = (array, atletaNombre) => {
  return array.filter(atleta => atleta.name.toLowerCase().includes(atletaNombre.toLowerCase()))
};

const filtroPais = (array, atletaPais) => {
  return array.filter(atleta => atleta.team === atletaPais)
};

const paisesArray = (array) => {
  return array.map(obj => obj.team).filter((elemento, indice, arrayPais) => arrayPais.indexOf(elemento) == indice).sort()
};

const filtroGenero = (array, atletaGenero) => {
  return array.filter(atleta => atleta.gender === atletaGenero)
};

const generoArray = (array) => {
  return array.map(obj => obj.gender).filter((elemento, indice, arrayGenero) => arrayGenero.indexOf(elemento) == indice)
};

const filtroDeporte = (array, atletaDeporte) => {
  return array.filter(atleta => atleta.sport === atletaDeporte)
};

const deporteArray = (array) => {
  return array.map(obj => obj.sport).filter((elemento, indice, arrayDeporte) => arrayDeporte.indexOf(elemento) == indice).sort()
};


const dataAtletas = (array, atletaNombre, atletaPais, atletaGenero, atletaDeporte) => {


  if (atletaNombre !== '') {
    array = filtroNombres(array, atletaNombre);
  }

  if (atletaPais !== '') {
    array = filtroPais(array, atletaPais)
  }

  if (atletaGenero !== '') {
    array = filtroGenero(array, atletaGenero)
  }

  if (atletaDeporte !== '') {
    array = filtroDeporte(array, atletaDeporte)
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

 const datosTabla = (arrayAtletas) => {
  const medallero = arrayAtletas.reduce((acc, current) => {
    if (acc.find(pais => pais.name === current.team)) {
      let paisActual = acc.find(pais => pais.name === current.team)
      paisActual[current.medal] ? paisActual[current.medal]++ : paisActual[current.medal] = 1;
    } else {
      acc.push({
        name: current.team,
        [current.medal]: 1
      })
    }
    return acc
  }, [])
 
 /*  console.log(medallero); */
/*   console.log (medallero [5]); */


return medallero;
}; 

// const filtroMedallasPorDeporte = (arrayAtleta, deporteMedallas) => {
  //   const filtroMedallaDeporte = arrayAtleta.filter(atleta => { atleta.sport === deporteMedallas })
  //   if (deporteMedallas !== 0) {
  //      return filtroMedallaDeporte
  //     } 
  // };


  // if (deporteMedallas !== 0) {
  //   filtroMedallasPorDeporte(arrayAtletas, deporteMedallas)
  // } 

  //  if (generoMedallas !== 0) {
  //   filtroMedallasPorGenero(arrayAtletas, generoMedallas)
  // }

  // if (paisesMedallas !== 0) {
  //   filtroMedallasPorPais(arrayAtletas, paisesMedallas)
  // }



// const filtroMedallasPorGenero = (arrayAtleta, generoMedallas) => {
//   return array.filter(atleta => { */
//  atleta.gender === generoMedallas
//   })
// }

// const filtroMedallasPorPais = (arrayAtleta, paisesMedallas) => {
//   return array.filter(atleta => {
//     atleta.gender === paisesMedallas
//   })
// } 


   
export {dataAtletas, paisesArray, generoArray, deporteArray, datosTabla}

