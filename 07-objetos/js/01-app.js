console.log("Hola Mundo");


// los objetos tiene la caracteristica de agupar varias variables en una sola

const producto = {
    nombre:"Monitor de 20 pulgadas",
    precio: 200,
    disponible: true,
    marca: "GameFactor"

}

console.log(producto);
console.log(producto.precio);
console.log(producto['nombre']);

// agregando nuevas propiedades
producto.imagen = "imagen.jpg"
console.log(producto.imagen)

// eliminas propiedades del objeto
delete producto.disponible;
console.log(producto) 

// seleccionar un atributo del  objeto y asignarlo a una vatiable
const nombre = producto.nombre;
console.log(nombre);

// esta es mas moderna, destructuring
const {precio, marca} = producto;
console.log(precio);
console.log(marca);


// crear objetos dentro de otros objetos

const producto2 = {
    nombre:"Cpu",
    precio: 7000,
    disponible: true,
    marca: "Ryzen",
    info:{
        peso: '500gm',
        medida:'500cm',
        fabricacion:{
            pais: 'eua',
            fabrica: 'random'

        }
    }
}

console.log(producto2);
console.log(producto2.info);
console.log(producto2.info.medida);


// destructuring en obs anidados
const {info:{fabricacion}, info:{fabricacion:{pais}}} = producto2;
console.log(fabricacion);
console.log(pais);

// congelar valores para q no se puedan modificar, object metoths

"use strict";
const producto3 = {
    nombre:"Cpu",
    precio: 7000,
    disponible: true,
    marca: "Ryzen",
    info:{
        peso: '500gm',
        medida:'500cm',
        fabricacion:{
            pais: 'eua',
            fabrica: 'random'

        }
    }
}

Object.freeze(producto3);
console.log(Object.isFrozen(producto3));
console.log(Object.isFrozen(producto2));


// sellar un objeto
"use strict";
const producto4 = {
    nombre:"Cpu",
    precio: 7000,
    disponible: true,
    marca: "Ryzen",
    info:{
        peso: '500gm',
        medida:'500cm',
        fabricacion:{
            pais: 'eua',
            fabrica: 'random'

        }
    }
}
// NO SE PUEDE AGREGAR NI BORRAR, PERO SI SE PUEDE MODIFICAR
Object.seal(producto4); 
producto4.marca="intel";
console.log(producto4.marca);
console.log(Object.isSealed(producto4))

// copiar objetos
const producto5 = {
    nombre:"Monitor de 20 pulgadas",
    precio: 200,
    disponible: true,
    marca: "GameFactor"
}
const medidas5={
    peso:'2kg',
    largp:'1m'
}

const resultado= Object.assign(producto5, medidas5);
console.log(resultado);

// spread operator or rest operator
const resultado2= {...producto5, ...medidas5};
console.log(resultado2);