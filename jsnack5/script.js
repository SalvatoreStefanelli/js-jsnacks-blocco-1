//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array

// Creo un array senza elementi all'interno
const empty = [];

// Uso il ciclo for per chiedere all'utente per 6 volte di inserire il numero
for (let i = 0; i < 6; i++) {
    const numb = Number(prompt('Type a number'));
    //console.log(numb);

    // Uso la condizione per inserire tutti i numeri dispari nell'array
    if (numb % 2 != 0) {
        empty.push(numb);
    } else {
        //console.log('Even');
    }
    console.log(empty);
}