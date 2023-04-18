/*
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 0;

// creo un ciclo che scorra tutto eleWhole ogni due valori 
for (i = 0; i < numbers.length; i++) {
    if (i & 2 !== 0) {
        num += numbers[i];
    }
}

console.log("La somma dei numeri in posizione dispari è: ", num);
