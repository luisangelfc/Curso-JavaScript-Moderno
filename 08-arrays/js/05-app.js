const carrito = [
  { nombre: 'monitor', precio: 460, marca: 'Asus' },
  { nombre: 'teclado', precio: 120, marca: 'Logitech' },
  { nombre: 'mouse', precio: 80, marca: 'Razer' },
  { nombre: 'laptop', precio: 1500, marca: 'Dell' },
  { nombre: 'audifonos', precio: 200, marca: 'Sony' },
  { nombre: 'monitor', precio: 390, marca: 'Samsung' },
  { nombre: 'tablet', precio: 600, marca: 'Apple' },
  { nombre: 'teclado', precio: 95, marca: 'Redragon' },
  { nombre: 'mouse', precio: 60, marca: 'Logitech' },
  { nombre: 'laptop', precio: 1800, marca: 'HP' }
];

for (let i=0; i<carrito.length;i++){
    console.log(carrito[i].nombre);
}

// forEach
carrito.forEach(function(producto) {
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio} `)     // al + 96 comilla invertida
} )

// Usando map, hace una copia del arreglo
const nuevoArreglo= carrito.map(function(producto) {
    return `Producto: ${producto.nombre} - Precio: ${producto.precio} `     // al + 96 comilla invertida
} )

console.log(nuevoArreglo)