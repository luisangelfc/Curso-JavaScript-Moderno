// Haciendo destructuring en arreglos
const numeros=[10,20,30,40,50];
const [primero] =numeros; // extrahemos el primer elemento y lo guardamos en otra variable
console.log(primero);

const [, , tercero] =numeros; // extrahemos el tercer elemento a trves de dejar vacias las primeras opciones
console.log(tercero);

const [, , , ...cuarto]=numeros; //  [40, 50]
console.log(cuarto);