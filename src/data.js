// estas funciones son de ejemplo
//export const example = () => {
 // return 'example';

 // Filtros Pagina Conoce más de los atletas

const filtroNombres = (array,atletaNombre) =>{
  return array.filter(atleta => atleta.name.toLowerCase().includes(atletaNombre.toLowerCase()))
}

  
const dataAtletas = (array,atletaNombre) => {
  if (atletaNombre !== '') {
    array = filtroNombres (array, atletaNombre);
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

export {dataAtletas}

 