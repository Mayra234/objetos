/**
 * Objetos y Clases
 *
 * Un objeto es una forma de abstraer un fenómeno o entidad de la vida real.
 * Un objeto es una forma de representar una entidad:
 *  - Ejemplos de entidades:
 *      -> Persona
 *      -> Animal
 *      -> Vehículo
 *      -> Empresa
 *      -> Planta
 *      -> Producto
 *      -> Figura
 *
 *
 * - Esa abstracción está representada en:
 *  --> Propiedades, atributos o características
 *    - nombre              //string
 *    - color               //string
 *    - noDocumento         //number
 *    - tipo                //string
 *    - tamano              //number | string
 *    - unidadDeMedidaTamano //string
 *    - estatura             //number
 *    - edad                //number
 *    - esCasado            //boolean
 *    - peso                //number
 *
 *  --> Acciones, funcciones o métodos
 *    - correr
 *    - comer
 *    - nadar
 *    - caminar
 *    - mirar
 *    - saltar
 *
 *    //Setters --> Es una acción que modifica una propiedad que debe estar definida en el objeto
 *    - definirNombre
 *    - definirEdad
 *    - definirColor
 *    - definirEstatura
 *
 *    //Getters   --> Es una acción que obtiene el valor de una propiedad que debe estar definida en el objeto
 *    - obtenerNombre
 *    - obtenerEdad
 *    - obtenerPeso
 */

/**
 * Ejemplo 1: objeto con solo propiedades.
 *
 * -> Entidad: Persona
 * -> Propiedades:
 * - nombre
 * - edad
 * - peso
 * - noDocumento
 * - estatura
 * - grupoEtnico
 * - apellido
 * - esCasado
 */

const persona1 = {
  nombre: 'Juan',
  edad: 18,
  peso: 67,
  noDocumento: 100,
  estatura: 1.79,
  grupoEtnico: 'N/A',
  apellido: 'Diavanera',
  esCasado: false,
};

const persona2 = {
  nombre: 'Mayra',
  edad: 20,
  peso: 57,
  noDocumento: 108,
  estatura: 1.67,
  grupoEtnico: 'N/A',
  apellido: 'Diavanera',
  esCasado: true,
};

const persona3 = {
  nombre: 'Angélica',
  edad: 23,
  peso: 73,
  noDocumento: 107,
  estatura: 1.6,
  grupoEtnico: 'N/A',
  apellido: 'Diavanera',
  esCasado: true,
};

console.log(persona1, persona2, persona3);
