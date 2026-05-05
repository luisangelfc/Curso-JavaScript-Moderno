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

carrito.push(producto);//agrega elementos al final del arreglo
carrito.push(producto2);

const producto3={
    nombre: 'tablet',
    precio: '5000'
    }
carrito.unshift(producto3); //agrega elementos al inicio del arreglo
console.table(carrito);


// utilizando spread, declarativa
const carrito2=[];
let resultado;
resultado = [...carrito2, producto];
console.table(resultado);


resultado = [...resultado, producto2];
console.table(resultado);


resultado = [producto3, ...resultado ];
console.table(resultado);


// utilizando splice para eliminar elementos del carrito
resultado.pop();// eliminar ultimo elemento del arreglo
console.table(resultado);

resultado.shift(); //eliminando  el primer elemento 
console.table(resultado);

const numeros=[1,2,3,4,5,6,7,8,9];
console.table(numeros);
numeros.splice(4, 2); //eliminando el elemento a traves de sus indice, y el segundo termino es saber cuantos elementos a partir de ese indice
console.table(numeros);

