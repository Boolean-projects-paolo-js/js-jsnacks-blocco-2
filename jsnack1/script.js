
/*
1) snack 1.5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

let number;
let myArr = [];
let verifica = false;



for (let i = 0; i < 6; i++) {
    number = prompt("scrivi un numero");


    if(number % 2 == 0) {
        console.log('pari', number);
    }

    else if(number % 2 == 1) {
        verifica = true;
        console.log('dispari', number);
        parseInt(myArr.push(number));
    }
}

console.log('myArr', myArr);