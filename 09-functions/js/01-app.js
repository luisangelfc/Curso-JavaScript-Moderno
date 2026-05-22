// declaracion de funciones
function sumar(){
    console.log(2+2);
}

sumar(); 
// incluso se puede mandar a llamar antes de declarar la funcion, mientras que de la otra forma, no.

// expresion de funcion
const sumar2= function(){
    console.log(3+3);
}
sumar2();


// metodos
const num1= 20;
const num2= "30";
console.log(parseInt(num2)); // funcion
console.log(num1.toString)  // metodo  

function sumar3 (a,b){ //a y b sson  
    return `el resultado es ${a+b}`
}

console.log (sumar3(2,2)); // 2, 2 son argumentos
