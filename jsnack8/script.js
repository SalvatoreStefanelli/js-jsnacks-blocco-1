//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.

// Uso un prompt per chiedere un numero di 4 cifre all'utente

const numb = Number(prompt('Type a 4-digit number'));

let sum = 0;

for (let i = 0; i <= 4; i++) {
    const element = numb[i];
    sum_tot = sum + element
}

console.log(sum_tot);