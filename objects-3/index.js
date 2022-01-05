/**
 * Ejemplo 3: objeto con getters y setters
 *
 * Entidad: Producto
 *
 * Propiedades:
 *  - nombre
 *  - id
 *  - tamano
 *  - peso
 *  - precio
 *  - marca
 *
 * Acciones:
 *  - Setters:
 *  --> modificarPropiedad  -> setProperty
 *  - modificarNombre
 *  - modificarPeso
 *  - modificarPrecio
 *  - modificarMarca
 *  - modificarId
 *  - modificarTamano
 *
 *  - Getters
 *  --> obtenerPropiedad
 *  - obtenerNombre
 *  - obtenerPeso
 *  - obtenerPrecio
 *  - obtenerMarca
 *  - obtenerId
 *  - obtenerTamano
 */

const producto1 = {
  nombre: 'arroz',
  id: 23343,
  tamano: '20cm x 20cm',
  peso: '150 gr',
  precio: 1700,
  marca: 'diana',
  //Getters
  obtenerNombre: function () {
    console.log(this.nombre);
  },
  obtenerId: function () {
    console.log(this.id);
  },
  obtenerTamano: function () {
    console.log(this.tamano);
  },

  obtenerPeso: function () {
    console.log(this.peso);
  },

  obtenerPrecio: function () {
    console.log(this.precio);
  },
  obtenerMarca: function () {
    console.log(this.marca);
  },
  //Setters
  modificarNombre: function (valor) {
    this.nombre = valor;
  },
  modificarId: function (valor) {
    this.id = valor;
  },
  modificarTamano: function (valor) {
    this.tamano = valor;
  },

  modificarPeso: function (valor) {
    this.peso = valor;
  },

  modificarPrecio: function (valor) {
    this.precio = valor;
  },
  modificarMarca: function (valor) {
    this.marca = valor;
  },
};

//Accediendo de manera indirecta al valor de una propiedad a través de un getter
// producto1.obtenerTamano();
// producto1.obtenerNombre();
// producto1.obtenerId();
// producto1.obtenerPeso();
// producto1.obtenerPrecio();
// producto1.obtenerMarca();

//Accediendo de manera directa al valor de una propiedad
// console.log(producto1.nombre);
// console.log(producto1.marca);
// console.log(producto1.id);
// console.log(producto1.tamano);
// console.log(producto1.peso);
// console.log(producto1.precio);

//Modificando el valor de manera indirecta a través de un setter
console.log(producto1);
const producto1Clonado = Object.assign({}, producto1);
producto1Clonado.modificarNombre('Papa');
console.log(producto1Clonado);
