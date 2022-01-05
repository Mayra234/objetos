/**
 * Ejemplo 2:
 * Objeto con propiedades y acciones
 *
 * Entidad: Animal
 *
 *  - Propiedades:
 *  nombre
 *  sexo
 *  especie
 *  color
 *  longitud
 *  numeroDePatas
 *
 *  - Métodos
 *  reproducir
 *  correr
 *  escavar
 *  nadar
 *  saltar
 *  comer
 *
 */

const animal1 = {
  nombre: 'Oso hormiguero',
  sexo: 'Macho',
  especie: 'Mamífero',
  color: 'azul',
  longitud: 1,
  numeroDePatas: 4,
  reproducir: function () {
    console.log('Me estoy reproduciendo');
  },
  correr: function (distancia) {
    console.log(`Voy a correr ${distancia} metros`);
  },
  escavar: function (profundidad, tiempo) {
    console.log(`Voy a escavar ${profundidad} metros durante ${tiempo} horas`);
  },
  nadar: function (distancia) {
    console.log(`voy a nadar ${distancia} metros en el mar`);
  },
  saltar: function (lugar, tiempo) {
    console.log(`Voy a saltar en el ${lugar} del patio durante ${tiempo} hora`);
  },
  comer: function (cantidad) {
    console.log(`Voy a comer ${cantidad} hormigas`);
  },
};

console.log(animal1);
animal1.reproducir();
animal1.correr(2);
animal1.escavar(10, 2);
animal1.saltar('trampolín', 1);
animal1.nadar(5);
animal1.comer(20);
