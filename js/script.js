// costante prezzo base
const costo_base = 0.21;


let gen_button = document.getElementById('genera');

gen_button.addEventListener('click', function(){

    let nome_cognome = document.getElementById('nome').value
    console.log(nome_cognome)

    let percorso_utente = document.getElementById('percorso').value
    console.log(percorso_utente)

    let fascia_eta = document.getElementById('eta')
    console.log(fascia_eta)


})








// // totale biglietto
// let totale = (kilometri * costo_base);

// //eta utente


// let sconto;

// let prezzo_scontato;


// // condizioni + risultato in pagina
// if (eta < 18) {
//     sconto = (totale * 20 / 100);

//     prezzo_scontato = (totale - sconto);

//     document.getElementById('prezzo_finale').innerHTML = prezzo_scontato.toFixed(2) + '€';

// } else if ( eta >= 65) {
//         sconto = (totale * 40 / 100);
    
//         prezzo_scontato = (totale - sconto);

//         document.getElementById('prezzo_finale').innerHTML = prezzo_scontato.toFixed(2) + '€';
// } else {
//     document.getElementById('prezzo_finale').innerHTML = totale.toFixed(2) + '€';
// }