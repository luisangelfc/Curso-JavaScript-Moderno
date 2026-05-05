const meses =['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];

meses[0] = "primer elemento"// modificamos el valor de un arreglo 
console.table(meses)

meses[7] = 'ultimo elemento'// agregamos elemento al arreglo 
console.table(meses)

// utilizando metodos de arreglos
meses.push('Agosto') // agregar al final del arreglo
console.table(meses)



const carrito=[];
// Definir un producto
const producto= {
    nombre: 'bocina',
    precio: '344'
}

const producto2={
    nombre: 'iphone 8',
    precio: '5000'
}

carrito.push(producto);
carrito.push(producto2);

const producto3={
    nombre: 'tablet',
    precio: '5000'
    }
carrito.unshift(producto3); //agrega elementos al incicio del arreglo

console.table(carrito);