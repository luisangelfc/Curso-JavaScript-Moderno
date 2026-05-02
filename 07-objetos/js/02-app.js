// object literal
const producto = {
    nombre:"Monitor de 20 pulgadas",
    precio: 200,
    disponible: true,
    marca: "GameFactor"

}

// object constructor
function Producto(nombre, precio){
    this.nombre =nombre;
    this.precio= precio;
    this.disponible=true;
}

const producto2= new Producto('teclado', '100');
console.log(producto2)

// metodos de objetos

// devuelve un arreglo con el nombre de los atributos de un objeto
console.log(Object.keys(producto)); 

// devuelve un arreglo con los valores de los atributos de un objeto
console.log(Object.values(producto));

// devuelve un arreglo con el nombre y valores en pares de los atributos de un objeto
console.log(Object.entries(producto)); 