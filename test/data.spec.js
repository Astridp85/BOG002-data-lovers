import { dataAtletas, datosTabla} from '../src/data.js';

  const input = [
 {
  name: "Giovanni Abagnale",
  gender: "M",
  height: "198",
  weight: "90",
  sport: "Rowing",
  team: "Italy",
  noc: "ITA",
  age: 21,
  event: "Rowing Men's Coxless Pairs",
  medal: "Bronze"
},
{
  name: "Patimat Abakarova",
  gender: "F",
  height: "165",
  weight: "49",
  sport: "Taekwondo",
  team: "Azerbaijan",
  noc: "AZE",
  age: 21,
  event: "Taekwondo Women's Flyweight",
  medal: "Bronze"
},
{
  name: "Luc Abalo",
  gender: "M",
  height: "182",
  weight: "86",
  sport: "Handball",
  team: "France",
  noc: "FRA",
  age: 31,
  event: "Handball Men's Handball",
  medal: "Silver"
},
]
describe('dataAtletas', () => {
  it('is a function', () => {
    expect(typeof dataAtletas).toBe('function');
  });
  it('deberia retornar un array con estas propiedades:nombre,genero,equipo,edad,deporte,medalla', () => { 
    const output = [ 
      
 { 
  nombre: "Giovanni Abagnale",
  genero: "M",
  deporte: "Rowing",
  equipo: "Italy",
  edad: 21,
  medalla: "Bronze"
  
},
{
  nombre: "Patimat Abakarova",
  genero: "F",
  deporte: "Taekwondo",
  equipo: "Azerbaijan",
  edad: 21,
  medalla: "Bronze"
},
{
  nombre: "Luc Abalo",
  genero: "M",
  deporte: "Handball",
  equipo: "France",
  edad: 31,
  medalla: "Silver"
},
]
  expect(dataAtletas(input, "","","","","","")).toEqual(output);
  });
});

describe('datosTabla', () => {
it('is a function', () => {
expect(typeof datosTabla).toBe('function');
});
it ('debería retornar todos los paises con los tipos de medallas ganadas de la siguiente manera: name,Bronce,Silver,Gold',()=>{
  const twoOutput = [
    { 
     
      "name": "Italy",
      "Bronze": 1
      
    },
    {
  
      "name": "Azerbaijan",
      "Bronze": 1,
    },
    {
      
      "name": "France",
      "Silver": 1,
    },
  ]
  expect(datosTabla(input, '','')).toEqual(twoOutput);
});
});



//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
