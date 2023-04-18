/*
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.*/




let nomi = ["Andrea", "Vincenzo", "Gary", "Marco", "Antonio", "Mario"];
let cognomi = ["Rosso", "Blu", "Verde", "Nero", "Giallo", "Viola"];
let myarr = [];

for (i = 0; i < 6; i++) {

    let randomname = nomi[Math.floor(Math.random() * nomi.length)];

    let randomsurname = cognomi[Math.floor(Math.random() * cognomi.length)];

    let mix = randomname + " " + randomsurname;
    myarr.push(mix);

}

console.log('Lista Random:', myarr);


