import { dataAtletas} from '../src/data.js';


describe('dataAtletas', () => {
  it('is a function', () => {
    expect(typeof dataAtletas).toBe('function');
  });

  it('deberia retornar un array con estas propiedades:nombre, pais, genero, disciplina', () => {
    expect(dataAtletas()).toBe('juan');
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
