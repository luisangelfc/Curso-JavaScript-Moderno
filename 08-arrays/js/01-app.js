console.log("ARRAYS");
// ARRAYS
// para lo que sirven los arreglos son para agripar elementos de forma ordenada

const numeros =[10,20,30,40,50];
console.log(numeros)

const meses = new Array('enero', 'febrero', 'marzo');
console.log(meses);

// haciendo arrays de todo tipo de datos
const deTodo=[10, "hola", null, {nombre:"bubu", edad: 24}];
console.log(deTodo);

// Accediendo a los valores del arreglo
console.table(numeros);
console.log(numeros[2]);

let numeros2= [1, 2, 3, [10, 20, 30]];
console.log(numeros2[3]);
console.log(numeros2[3][1]);


// Recorrer un arreglo
const meses2=["enero", "febrero", "marzo", "abril"];
console.table(meses2);

console.log(meses2.length)// cuanto mide el arreglo

for(let i=0; i<meses2.length; i++){
    console.log(meses2[i])
}