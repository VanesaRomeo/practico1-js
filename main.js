//alert('hola')

// var A=50
// console.log(A);

// let edad = 35
// // console.log (edad)
// if (edad >=1 && edad <=12 ){
//     console.log('es niño')
// } else if (edad >=13 && edad <=17){
//     console.log ('es adolecente')
// } else if (edad >=18 && edad <=30){
//     console.log('es adulto')
// } else {
//     console.log('es mayor')
// }

// const mascota='Gato';

// switch(mascota){
// case "Perro":
//     console.log('tengo un perro')
//     break;
//  case "Gato":
//     console.log('tengo un gato') 
//     break; 
//  default :
//  console.log('no tengo nada')
//  break;
//  case "Buho":
//     console.log('tengo un buho')
// break;
// }

// let edad = 18

// imprimi numros pares y los impares por separa

/*
usamos un bucle (for)
evaluamos si el numero es par o impar (%2===0)7
imprimimos

for (let i = 0; i <= 30; i++) {
    // console.log('holi');
    if(i%2===0) {
        console.log('el numero $(i)es par')
    } else{ 
        console.log('el numero ${i} es multiplo de ${multiplo}')
    }*/

    console.log('-----ejercicio 1------')
// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function verificarParOImpar(numero) {
    if (numero %2 === 0) {
        console.log(numero + " es un número par.");
    } else {
        console.log(numero + " es un número impar.");
    } 
    

}

verificarParOImpar(5); 
verificarParOImpar(4);

console.log('-----ejercicio 2------')

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " es mayor que " + num1);
    } else {
        console.log("Ambos números son iguales.");
    }
}



compararNumeros(5, 10); 
compararNumeros(7, 3); 
compararNumeros(5, 5); 

console.log('-----ejercicio 3------')

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function MultiploDeCinco(numero) {
    if (numero %5 === 0) {
        console.log( " es multiplo de cinco.");
    } else  {
        console.log(" no es multiplo de cinco.");
    }  

}

MultiploDeCinco(10); 
MultiploDeCinco(7);

console.log('-----ejercicio 4------')

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function ImprimirNumeroHasta(numero){
 for ( let i=1; i <= numero; i++) {
    console.log(i);
 }
}
ImprimirNumeroHasta(7);

console.log('-----ejercicio 5------')

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
function ImprimirPalabraVeces(palabra, cantidad){
    for ( let i=0; i < cantidad; ++i) {
       console.log(palabra);
    }
   }
   ImprimirPalabraVeces("Vanesa", 3);

   console.log('-----ejercicio 6------')

   function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let miArray = [1, 2, 3, 4, 5];
imprimirArray(miArray);

console.log('-----ejercicio 7------')

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function imprimirArrayExceptoQuinto(array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) {
            console.log(array[i]);
        }
    }
}


let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirArrayExceptoQuinto(Array);

console.log('-----ejercicio 8------')

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiplicarArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * numero);
    }
}

let PorArray = [1, 5, 3, 8, 7];
multiplicarArrayPorNumero(PorArray, 6);

