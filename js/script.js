// costante prezzo base
const costo_base = 0.21;


let gen_button = document.getElementById('genera');

gen_button.addEventListener('click', function(){

    let nome_cognome = document.getElementById('nome').value;
    console.log(nome_cognome)

    let percorso_utente = document.getElementById('percorso').value;
    console.log(percorso_utente)

    let fascia_eta = document.getElementById('eta').value;
    console.log(fascia_eta)
// VARIABILE CARROZZA
    let carrozza = Math.floor(Math.random() * 10 + 1)

    // VARIABILE CODICE POSTALE
    let codice_cp = Math.floor(Math.random() * 100000 + 1)

// SCONTO MINORE
    if (fascia_eta == 'Minorenne') {

        let prezzo = (percorso_utente * costo_base * 0.8);
        console.log(prezzo)
        
        document.getElementById('nome-passeggero').innerHTML = `${nome_cognome}`
        document.getElementById('offerta').innerHTML = `${fascia_eta}`
        document.getElementById('carrozza').innerHTML = `${carrozza}`
        document.getElementById('codice_cp').innerHTML = `${codice_cp}`
        document.getElementById('costo-biglietto').innerHTML = `${prezzo.toFixed(2)}€`

// SCONTO OVER 65        
    } else if (fascia_eta == 'Over65') {

        let prezzo = (percorso_utente * costo_base * 0.4);

        document.getElementById('nome-passeggero').innerHTML = `${nome_cognome}`
        document.getElementById('offerta').innerHTML = `${fascia_eta}`
        document.getElementById('carrozza').innerHTML = `${carrozza}`
        document.getElementById('codice_cp').innerHTML = `${codice_cp}`
        document.getElementById('costo-biglietto').innerHTML = `${prezzo.toFixed(2)}€`

// PREZZO STANDARD        
    } else (fascia_eta == 'Maggiorenne') ;{

        let prezzo = (percorso_utente * costo_base);

        document.getElementById('nome-passeggero').innerHTML = `${nome_cognome}`
        document.getElementById('offerta').innerHTML = `${fascia_eta}`
        document.getElementById('carrozza').innerHTML = `${carrozza}`
        document.getElementById('codice_cp').innerHTML = `${codice_cp}`
        document.getElementById('costo-biglietto').innerHTML = `${prezzo.toFixed(2)}€`

    }


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